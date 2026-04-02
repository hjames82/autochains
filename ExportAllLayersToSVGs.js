/*
  =============================================================================
  Script: Clean SVG Exporter
  Version: 1.4
  Author: Gemini AI
  
  Updates in this version:
    - FIX: Global unlock/unhide in temp file. Prevents crashes when trying to 
           move/delete layers that were hidden or locked in the source file.
    - FIX: Restructured Try/Catch block INSIDE the loop. If one layer fails, 
           the script will now continue processing the rest instead of stopping.
    - UPDATE: Added an error summary at the end to show which layers failed.
  =============================================================================
*/

(function() {
    // --- 1. SETUP ---
    if (app.documents.length === 0) {
        alert("No document open. Please open a document and try again.");
        return;
    }

    var sourceDoc = app.activeDocument;
    
    if (!sourceDoc.saved) {
        alert("Please SAVE your document first.\nThe script needs a saved file on disk to prevent SVG bloat.");
        return;
    }

    // --- 2. DESTINATION FOLDER & FALLBACK ---
    var outputFolderPath = "D:/POPP CHAINS/Automation_SVGs/TEMP TEST FILES";
    var destFolder = new Folder(outputFolderPath);

    if (!destFolder.exists) {
        destFolder.create();
    }
    
    if (!destFolder.exists) {
        destFolder = Folder.selectDialog("Hardcoded path unavailable. Select a destination folder:");
        if (!destFolder) return;
    }

    // --- 3. PRE-CLEANUP: DELETE EXISTING SVGS ---
    var existingFiles = destFolder.getFiles("*.svg");
    var deletedCount = 0;
    for (var f = 0; f < existingFiles.length; f++) {
        existingFiles[f].remove();
        deletedCount++;
    }

    // --- 4. FIND TARGET LAYERS (RECURSIVE) ---
    var layerNamesToExport = [];
    
    function findLvlLayers(layers) {
        for (var i = 0; i < layers.length; i++) {
            var currentLayer = layers[i];
            if (currentLayer.name.indexOf("lvl=") === 0) {
                layerNamesToExport.push(currentLayer.name);
            }
            if (currentLayer.layers.length > 0) {
                findLvlLayers(currentLayer.layers);
            }
        }
    }
    
    findLvlLayers(sourceDoc.layers);

    if (layerNamesToExport.length === 0) {
        alert("No layers or sub-layers found starting with 'lvl='.");
        return;
    }

    // --- 5. CREATE TEMP WORKER FILE ---
    var originalFile = sourceDoc.fullName;
    var tempWorkerPath = destFolder.fsName + "/" + "_temp_worker_file.ai";
    var tempFile = new File(tempWorkerPath);
    
    originalFile.copy(tempFile);

    // --- 6. HELPER FUNCTIONS FOR TEMP FILE ---
    
    // Finds layer by name
    function getLayerByNameRec(layers, name) {
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].name === name) return layers[i];
            if (layers[i].layers.length > 0) {
                var found = getLayerByNameRec(layers[i].layers, name);
                if (found) return found;
            }
        }
        return null;
    }

    // NEW: Force everything visible and unlocked so Illustrator doesn't crash
    function forceUnlockAndUnhideAll(layers) {
        for (var i = 0; i < layers.length; i++) {
            layers[i].locked = false;
            layers[i].visible = true;
            if (layers[i].layers.length > 0) {
                forceUnlockAndUnhideAll(layers[i].layers);
            }
        }
    }

    // --- 7. EXPORT LOOP ---
    var exportedCount = 0;
    var failedLayers = []; // Keep track of any that crash
    var originalInteractionLevel = app.userInteractionLevel;
    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

    for (var i = 0; i < layerNamesToExport.length; i++) {
        var targetName = layerNamesToExport[i];
        var workDoc = null;
        
        // Try/Catch is now INSIDE the loop. 
        // If this layer fails, it just catches the error and moves to the next.
        try {
            workDoc = app.open(tempFile);
            
            // CRITICAL FIX: Unlock/Unhide EVERYTHING before doing anything else
            forceUnlockAndUnhideAll(workDoc.layers);

            var targetLayer = getLayerByNameRec(workDoc.layers, targetName);
            
            if (!targetLayer) {
                throw new Error("Could not locate layer in temp file.");
            }

            // Move target to the absolute top
            targetLayer.move(workDoc, ElementPlacement.PLACEATBEGINNING);
            workDoc.activeLayer = targetLayer;

            // Delete everything else (from the bottom up to index 1)
            for (var j = workDoc.layers.length - 1; j > 0; j--) {
                workDoc.layers[j].remove();
            }

            // Select artwork for export
            targetLayer.hasSelectedArtwork = true;

            // Export
            var fileName = targetName + ".svg";
            var targetFile = new File(destFolder + "/" + fileName);

            var exportOptions = new ExportOptionsSVG();
            exportOptions.embedRasterImages = true;
            exportOptions.cssProperties = SVGCSSPropertyLocation.STYLEATTRIBUTES;
            exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;
            exportOptions.documentEncoding = SVGDocumentEncoding.UTF8;
            
            workDoc.exportFile(targetFile, ExportType.SVG, exportOptions);
            exportedCount++;

        } catch(e) {
            // Record the failure but don't stop the script!
            failedLayers.push(targetName + " (" + e.message + ")");
        } finally {
            // Always close the temp doc, whether it succeeded or crashed, so the next loop can start fresh
            if (workDoc) {
                workDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
    }

    // --- 8. CLEANUP & RESTORE ---
    app.userInteractionLevel = originalInteractionLevel;
    
    if (tempFile.exists) {
        tempFile.remove();
    }
    
    sourceDoc.activate();
    
    // Final Reporting
    var finalMessage = "Process Complete!\n";
    finalMessage += "Deleted " + deletedCount + " old files.\n";
    finalMessage += "Successfully exported " + exportedCount + " SVG files.\n";
    
    if (failedLayers.length > 0) {
        finalMessage += "\nWARNING: " + failedLayers.length + " layers failed to export:\n";
        for (var k = 0; k < failedLayers.length; k++) {
            finalMessage += "- " + failedLayers[k] + "\n";
        }
    }
    
    alert(finalMessage);

})();