import adsk.core, adsk.fusion, adsk.cam, traceback
import os
import json
import time

# --- GLOBAL CONFIGURATION ---
CMD_ID = "AutoChains_V85_2" #added __inf=0.03 
CMD_NAME = "Auto Chains Control Panel"
CMD_Description = "V85: Bulletproof SVG Import Error Handling."

# --- REAL FILES (For Final Processing) ---
NFC_FILENAME = "NFC_cap_v18.f3d"
LOGO_FILENAME = "3PoppChains Logo.f3d"
HOOK_FILENAME = "Hook.f3d"
LOOP_FILENAME = "Loop.f3d"

# --- MARKER FILES (DXF Only!) ---
NFC_MARKER_DXF = "NFC_Marker.dxf"
LOGO_MARKER_DXF = "Logo_Marker.dxf"
HOOK_MARKER_DXF = "Hook_Marker.dxf"
LOOP_MARKER_DXF = "Loop_Marker.dxf"

# --- SWAP TOOL BODY NAMES ---
NFC_TOOL_CUT = "TOOL - remove from base"
NFC_TOOL_JOIN = "join to base - NFC Walls"
LOGO_TOOL_CUT = "TOOL - subtract from base - NEGATIVE"
HOOK_TOOL_CUT = "1) forSolid CUT tool"

# --- BROWSER CLEANUP CONSTANTS ---
LOGO_BODY_PREFIX = "White PC letters"
LOGO_NEW_NAME = "White - Logo Combined"

# --- POSITIONS (Y in cm) ---
POS_NFC_Y = 0.0
POS_LOGO_Y = -3.5 
POS_HOOK_Y = 5.0
POS_LOOP_Y = 5.5

# --- DEFAULTS ---
DEFAULTS = {
    "scale": 1.0,
    "mode": "SVG",
    "folder": r"D:\PoppChainsAuto",
    "last_action": "GENERATE"
}

TEMPLATE_APP_NAME = "Plastic - Matte (White)"
COMPONENT_LIB_PATH = r"D:\PoppChainsAuto"

_handlers = []

# ==========================================
#              DEBUG LOGGER
# ==========================================
def log(msg):
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface
        palette = ui.palettes.itemById('TextCommands')
        if palette:
            if not palette.isVisible: palette.isVisible = True
            palette.writeText(str(msg))
            adsk.doEvents()
    except: pass

# ==========================================
#              PERSISTENCE & UI
# ==========================================
def get_config_path():
    try: return os.path.join(os.path.dirname(os.path.realpath(__file__)), "config.json")
    except: return ""

def load_settings_global():
    data = DEFAULTS.copy()
    try:
        cfg = get_config_path()
        if cfg and os.path.exists(cfg):
            with open(cfg, "r") as f: data.update(json.load(f))
    except: pass
    return data

def save_settings_global(settings):
    try:
        cfg = get_config_path()
        if cfg:
            curr = load_settings_global()
            curr.update(settings)
            with open(cfg, "w") as f: json.dump(curr, f, indent=4)
    except: pass

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui  = app.userInterface
        cmdDef = ui.commandDefinitions.itemById(CMD_ID)
        if cmdDef: cmdDef.deleteMe()
        cmdDef = ui.commandDefinitions.addButtonDefinition(CMD_ID, CMD_NAME, CMD_Description)
        onCommandCreated = CommandCreatedHandler()
        cmdDef.commandCreated.add(onCommandCreated)
        _handlers.append(onCommandCreated)
        cmdDef.execute()
        adsk.autoTerminate(False)
    except:
        if ui: ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))

def stop(context):
    try:
        app = adsk.core.Application.get()
        ui  = app.userInterface
        cmdDef = ui.commandDefinitions.itemById(CMD_ID)
        if cmdDef: cmdDef.deleteMe()
    except: pass

class CommandCreatedHandler(adsk.core.CommandCreatedEventHandler):
    def notify(self, args):
        try:
            cmd = args.command
            cmd.okButtonText = "▶ EXECUTE ACTION"
            cmd.isOKButtonVisible = True
            
            inputs = cmd.commandInputs
            saved = load_settings_global()
            
            grp_action = inputs.addGroupCommandInput("grp_action", "1. Select Action")
            grp_action.isExpanded = True
            
            rad = grp_action.children.addRadioButtonGroupCommandInput("radio_action", "Action")
            rad.listItems.add("Generate Pendant", saved.get('last_action') == "GENERATE")
            rad.listItems.add("Add NFC (Swaps Marker)", saved.get('last_action') == "NFC")
            rad.listItems.add("Add Logo (Swaps Marker)", saved.get('last_action') == "LOGO")
            rad.listItems.add("Add Hook (Swaps Marker)", saved.get('last_action') == "HOOK")
            rad.listItems.add("Add Loop (Swaps Marker)", saved.get('last_action') == "LOOP")
            rad.isFullWidth = True

            grp_settings = inputs.addGroupCommandInput("grp_settings", "2. Settings")
            grp_settings.isExpanded = True
            
            f_val = saved.get('folder', '')
            grp_settings.children.addStringValueInput("folder_path", "Folder", f_val).isReadOnly = True
            grp_settings.children.addBoolValueInput("btn_browse", "Browse...", False, "", True)
            
            drop = grp_settings.children.addDropDownCommandInput("mode_sel", "Mode", adsk.core.DropDownStyles.TextListDropDownStyle)
            drop.listItems.add("SVG", saved.get('mode') == "SVG")
            drop.listItems.add("DXF", saved.get('mode') == "DXF")
            
            grp_settings.children.addValueInput("scale_x", "Scale", "", adsk.core.ValueInput.createByReal(float(saved.get('scale', 1.0))))

            onInputChanged = CommandInputChangedHandler()
            cmd.inputChanged.add(onInputChanged)
            _handlers.append(onInputChanged)
            
            onExecute = CommandExecuteHandler()
            cmd.execute.add(onExecute)
            _handlers.append(onExecute)
        except: pass

class CommandInputChangedHandler(adsk.core.InputChangedEventHandler):
    def notify(self, args):
        try:
            cmd = args.firingEvent.sender
            inputs = cmd.commandInputs
            inp = args.input
            
            sel = inputs.itemById("radio_action").selectedItem
            ac = "GENERATE"
            if sel:
                n = sel.name
                if "NFC" in n: ac = "NFC"
                elif "Logo" in n: ac = "LOGO"
                elif "Hook" in n: ac = "HOOK"
                elif "Loop" in n: ac = "LOOP"
                
            settings = {
                "folder": inputs.itemById("folder_path").value,
                "scale": inputs.itemById("scale_x").value,
                "mode": inputs.itemById("mode_sel").selectedItem.name,
                "last_action": ac
            }
            save_settings_global(settings)

            if inp.id == "btn_browse":
                ui = adsk.core.Application.get().userInterface
                dlg = ui.createFolderDialog()
                dlg.title = "Source Folder"
                cur = inputs.itemById("folder_path").value
                if cur and os.path.exists(cur): dlg.initialDirectory = cur
                if dlg.showDialog() == adsk.core.DialogResults.DialogOK:
                    inputs.itemById("folder_path").value = dlg.folder
                    settings['folder'] = dlg.folder
                    save_settings_global(settings)
        except: pass

class CommandExecuteHandler(adsk.core.CommandEventHandler):
    def notify(self, args):
        app = adsk.core.Application.get()
        ui  = app.userInterface
        try:
            inputs = args.command.commandInputs
            sel = inputs.itemById("radio_action").selectedItem
            ac = "GENERATE"
            if sel:
                n = sel.name
                if "NFC" in n: ac = "NFC"
                elif "Logo" in n: ac = "LOGO"
                elif "Hook" in n: ac = "HOOK"
                elif "Loop" in n: ac = "LOOP"
                
            settings = {
                "folder": inputs.itemById("folder_path").value,
                "scale": inputs.itemById("scale_x").value,
                "mode": inputs.itemById("mode_sel").selectedItem.name,
                "last_action": ac
            }
            save_settings_global(settings)
            
            log("\n=============================================")
            log(f"🚀 STARTING ACTION: {ac} [{time.strftime('%H:%M:%S')}]")
            log(f"🛠️  Engine: {CMD_ID}")
            log("=============================================")
            
            if ac == "GENERATE": run_generation_phase(app, ui, settings)
            elif ac == "NFC": run_swap_nfc(app, ui)
            elif ac == "LOGO": run_swap_logo(app, ui)
            elif ac == "HOOK": run_swap_hook(app, ui)
            elif ac == "LOOP": run_swap_loop(app, ui)
            
            adsk.terminate()
                
        except:
            ui.messageBox('Execution Failed:\n{}'.format(traceback.format_exc()))
            adsk.terminate()

# ==========================================
#        DATA MODEL & PARSER
# ==========================================
class ComponentDef:
    def __init__(self, filename):
        self.raw_filename = filename
        clean_name = os.path.splitext(filename)[0].strip()
        
        self.params = {}
        for part in clean_name.split('__'):
            if '=' in part:
                k, v = part.split('=', 1)
                self.params[k.strip()] = v.strip()
                
        self.level_str = self.params.get('lvl', 'h0')
        self.material = self.params.get('col', 'DefaultMaterial')
        self.name = self.params.get('sem', clean_name)
        self.parent_name = self.params.get('par', 'None')
        self.role = self.params.get('rol', 'core').lower()
        self.hex_color = self.params.get('hex', '000000')
        
        # --- NEW INFLATE PARAMETER (Default to 0) ---
        self.inflate_val = float(self.params.get('inf', '0'))
        
        cut_raw = self.params.get('cut', '')
        self.explicit_cuts = [c.strip() for c in cut_raw.split(',')] if cut_raw else []
        self.tol_override = self.params.get('tol', None)
        
        self.sketch = None
        self.raw_bodies = []     
        self.buffer_bodies = []  

# ==========================================
#      LOGIC: GENERATE PENDANT PHASE
# ==========================================
def run_generation_phase(app, ui, settings):
    start_time = time.time()
    design = app.activeProduct
    root = design.rootComponent
    tl = design.timeline
    
    folder_path = settings['folder']
    if not os.path.exists(folder_path):
        log(f"❌ ERROR: Folder not found: {folder_path}")
        return

    try:
        setup_global_parameters(design)
        ensure_base_appearance(app, TEMPLATE_APP_NAME)
        
        ext = ".svg" if settings['mode'] == "SVG" else ".dxf"
        files = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(ext.lower())])
        if not files:
            log(f"❌ ERROR: No {settings['mode']} files found in folder.")
            return

        registry = {}
        scale_factor = float(settings['scale'])
        importManager = app.importManager

        log("\n--- PHASE 1: PRE-SETUP & IMPORTING ---")
        idx_p1 = tl.count
        
        dummy_occ = root.occurrences.addNewComponent(adsk.core.Matrix3D.create())
        dummy_occ.component.name = "Origin_Anchor"
        dummy_occ.isLightBulbOn = False
        dummy_occ.isGrounded = False 
        
        tools_occ = root.occurrences.addNewComponent(adsk.core.Matrix3D.create())
        tools_occ.component.name = "TOOL_BUFFERS"
        tools_comp = tools_occ.component

        for filename in files:
            comp = ComponentDef(filename)
            log(f"📁 Parsed '{comp.name}': Role={comp.role}, Lvl={comp.level_str}, Parent={comp.parent_name}")
            
            sketch = root.sketches.add(root.xYConstructionPlane)
            sketch.name = f"SK_{comp.name}"
            comp.sketch = sketch

            full_path = os.path.join(folder_path, filename)
            mat = adsk.core.Matrix3D.create()
            
            if settings['mode'] == "SVG":
                mat.setCell(0, 0, scale_factor); mat.setCell(1, 1, -scale_factor); mat.setCell(2, 2, scale_factor)
                opts = importManager.createSVGImportOptions(full_path)
                opts.transform = mat
                
                # V85: Bulletproof Import Try/Catch
                try:
                    importManager.importToTarget(opts, sketch)
                except Exception as e:
                    if "no supported types" in str(e).lower():
                        log(f"  -> ❌ ERROR: '{filename}' contains invalid SVG data. (Live Text? Unexpanded strokes?). Skipping file.")
                        sketch.deleteMe()
                        continue
                    else:
                        raise e
            else:
                dxf_opts = importManager.createDXF2DImportOptions(full_path, root.xYConstructionPlane)
                importManager.importToTarget(dxf_opts, sketch)
            
            registry[comp.name] = comp
        try: tl.timelineGroups.add(idx_p1, tl.count - 1).name = "1. Setup & Imports"
        except: pass

        log("\n--- PHASE 2: EXTRUDING RAW BODIES ---")
        idx_p2 = tl.count
        generate_raw_bodies(app, root, registry)
        try: tl.timelineGroups.add(idx_p2, tl.count - 1).name = "2. Raw Body Extrusions"
        except: pass

        log("\n--- PHASE 3: ISOLATED TOOL BUFFERS ---")
        idx_p3 = tl.count
        generate_offset_buffers(app, root, tools_comp, registry)
        try: tl.timelineGroups.add(idx_p3, tl.count - 1).name = "3. Boolean Tools (Hidden)"
        except: pass

        log("\n--- PHASE 4: DYNAMIC BOOLEAN CUTS ---")
        idx_p4 = tl.count
        execute_booleans(root, registry)
        try: tl.timelineGroups.add(idx_p4, tl.count - 1).name = "4. Boolean Executions"
        except: pass

        log("\n--- PHASE 5: POST-PROCESSING ---")
        idx_p5 = tl.count
        
        com_pt, base_bbox = apply_base_features(app, root, registry)
        place_dxf_markers(app, ui, root, com_pt, base_bbox)
        
        tools_occ.isLightBulbOn = False 
        for sk in root.sketches: sk.isVisible = False
        for occ in root.occurrences: 
            if "_Marker" in occ.component.name or "Origin_Anchor" in occ.component.name: 
                occ.isLightBulbOn = False
        
        if design.snapshots.hasPendingSnapshot:
            design.snapshots.add()
            
        try: tl.timelineGroups.add(idx_p5, tl.count - 1).name = "5. Post-Processing & Markers"
        except: pass
        
        end_time = time.time()
        mins, secs = divmod(end_time - start_time, 60)
        log(f"\n✅ GENERATION COMPLETE! [{time.strftime('%H:%M:%S')}]")
        log(f"⏱️ Total Processing Time: {int(mins)}m {int(secs)}s")

    except Exception as e:
        log(f"\n❌ CRITICAL ERROR:\n{traceback.format_exc()}")
        ui.messageBox(f"Error logged to Text Commands panel.")


# ==========================================
#       SYSTEM ARCHITECTURE LOGIC
# ==========================================
def setup_global_parameters(design):
    user_params = design.userParameters
    def add_param(name, val_str, unit="mm"):
        if not user_params.itemByName(name):
            user_params.add(name, adsk.core.ValueInput.createByString(val_str), unit, "")

    add_param("tol_insert_small", "0.1 mm")
    add_param("tol_insert_large", "0.2 mm")
    add_param("tol_slide_fit", "0.3 mm")
    add_param("tol_detail", "0.05 mm") 
    add_param("structural_margin", "0.2 mm")
    add_param("min_wall", "1.2 mm")
    add_param("lip_lock_depth", "1.0 mm")
    add_param("cover_floor_thickness", "2.0 mm") 
    add_param("gap_floor_thickness", "0.4 mm") 
    add_param("base_trim_lip", "2.0 mm") 
    
    base_heights = [12.0, 13.43, 14.86, 16.29, 17.71, 19.14, 20.57, 22.0]
    for i in range(8):
        add_param(f"height_h{i}", f"{base_heights[i]} mm")

def get_level_sort_val(lvl_str):
    base = lvl_str.replace('+', '').replace('-', '').replace('h', '')
    try:
        val = float(base)
        if '+' in lvl_str: val += lvl_str.count('+') * 0.25
        if '-' in lvl_str: val -= lvl_str.count('-') * 0.25
        return val
    except:
        return 99.0

def parse_fractional_height(level_str, comp, parent_comp):
    base_lvl = level_str.replace('-', '').replace('+', '')
    if '-' not in level_str and '+' not in level_str:
        return f"height_{base_lvl}"
        
    try:
        lvl_int = int(base_lvl.replace('h', ''))
        if '-' in level_str:
            num_dashes = level_str.count('-')
            if parent_comp:
                parent_base = parent_comp.level_str.replace('-', '').replace('+', '')
                expr = f"height_{base_lvl} - ((height_{base_lvl} - height_{parent_base}) * {num_dashes}/4.0)"
            else:
                expr = f"height_{base_lvl} - (1.0 mm * {num_dashes}/4.0)"
            return expr
            
        if '+' in level_str:
            num_pluses = level_str.count('+')
            if lvl_int < 7:
                next_lvl = f"h{lvl_int + 1}"
                expr = f"height_{base_lvl} + ((height_{next_lvl} - height_{base_lvl}) * {num_pluses}/4.0)"
            else:
                expr = f"height_{base_lvl} + (1.0 mm * {num_pluses}/4.0)"
            return expr
    except: pass
    return f"height_{base_lvl}"

def get_z_expressions(comp, parent_comp):
    if not parent_comp or comp.role == "base":
        return "0 mm", parse_fractional_height(comp.level_str, comp, parent_comp)
        
    start_str = parse_fractional_height(parent_comp.level_str, parent_comp, None)
    end_str = parse_fractional_height(comp.level_str, comp, parent_comp)
    
    if comp.role == "core":
        start = f"({start_str})"
        dist = f"({end_str}) - ({start})"
    elif comp.role in ["insert", "detail"]: 
        start = f"({start_str}) - lip_lock_depth"
        dist = f"({end_str}) - ({start})"
    elif comp.role == "cover":
        start = "cover_floor_thickness"
        dist = f"({end_str}) - cover_floor_thickness"
    else:
        start = "0 mm"
        dist = f"{end_str}"
        
    return start, dist

def generate_raw_bodies(app, root, registry):
    extrudes = root.features.extrudeFeatures
    sorted_comps = sorted(registry.values(), key=lambda x: get_level_sort_val(x.level_str))
    
    for comp in sorted_comps:
        if not comp.sketch: continue
        log(f"  Fetching fresh profiles for {comp.name}...")
        fresh_profiles = filter_solid_profiles(comp.sketch.profiles, comp.name)
        
        if fresh_profiles.count == 0: continue
            
        parent_comp = registry.get(comp.parent_name)
        start_expr, dist_expr = get_z_expressions(comp, parent_comp)
        
        ext_input = extrudes.createInput(fresh_profiles, adsk.fusion.FeatureOperations.NewBodyFeatureOperation)
        start_def = adsk.fusion.OffsetStartDefinition.create(adsk.core.ValueInput.createByString(start_expr))
        ext_input.startExtent = start_def
        dist_def = adsk.fusion.DistanceExtentDefinition.create(adsk.core.ValueInput.createByString(dist_expr))
        ext_input.setOneSideExtent(dist_def, adsk.fusion.ExtentDirections.PositiveExtentDirection)
        
        try:
            ext_feat = extrudes.add(ext_input)
            ext_feat.name = f"Extrude_Raw_{comp.name}"
            
            comp.raw_bodies = []
            final_app = force_apply_color(app, comp.material, comp.hex_color, TEMPLATE_APP_NAME)
            
            # # for i in range(ext_feat.bodies.count):
            # #     body = ext_feat.bodies.item(i)
            # #     suffix = f"_{i+1}" if ext_feat.bodies.count > 1 else ""
            # #     body.name = f"{comp.material} - {comp.name}{suffix}" 
            # #     if final_app: body.appearance = final_app
            # #     comp.raw_bodies.append(body)
            # # log(f"    -> Success: Created {len(comp.raw_bodies)} bodies.")

            # for i in range(ext_feat.bodies.count):
            #     body = ext_feat.bodies.item(i)
            #     suffix = f"_{i+1}" if ext_feat.bodies.count > 1 else ""
            #     body.name = f"{comp.material} - {comp.name}{suffix}" 
            #     if final_app: body.appearance = final_app
            #     comp.raw_bodies.append(body)
                
            #     # --- NEW INFLATION LOGIC ---
            #     if comp.inflate_val > 0.001:
            #         try:
            #             face_coll = adsk.core.ObjectCollection.create()
            #             for face in body.faces:
            #                 # Evaluate the normal vector of the face
            #                 success, normal = face.evaluator.getNormalAtPoint(face.pointOnFace)
            #                 # If Z is close to 0, it's a vertical side wall (not top or bottom)
            #                 if success and abs(normal.z) < 0.1: 
            #                     face_coll.add(face)
                                
            #             if face_coll.count > 0:
            #                 offset_faces = root.features.offsetFacesFeatures
            #                 # API uses cm, so divide the mm value by 10
            #                 offset_input = offset_faces.createInput(face_coll, adsk.core.ValueInput.createByReal(comp.inflate_val / 10.0))
            #                 offset_faces.add(offset_input)
            #                 log(f"    -> ✅ Inflated side walls by {comp.inflate_val}mm")
            #         except Exception as e:
            #             log(f"    -> ⚠️ Failed to inflate {body.name}: {str(e)}")
                        
            # log(f"    -> Success: Created {len(comp.raw_bodies)} bodies.")

            for i in range(ext_feat.bodies.count):
                body = ext_feat.bodies.item(i)
                suffix = f"_{i+1}" if ext_feat.bodies.count > 1 else ""
                body.name = f"{comp.material} - {comp.name}{suffix}" 
                if final_app: body.appearance = final_app
                comp.raw_bodies.append(body)
                
                # --- NEW INFLATION LOGIC (BUGFIX & FALLBACK) ---
                if comp.inflate_val > 0.001:
                    # 1. Use a standard Python list instead of ObjectCollection
                    faces_to_offset = []
                    for face in body.faces:
                        success, normal = face.evaluator.getNormalAtPoint(face.pointOnFace)
                        if success and abs(normal.z) < 0.1: 
                            faces_to_offset.append(face)
                            
                    if faces_to_offset:
                        offset_faces = root.features.offsetFacesFeatures
                        try:
                            # Attempt 1: Batch offset (Fast, works for clean shapes)
                            # API uses cm, so divide the mm value by 10
                            offset_input = offset_faces.createInput(faces_to_offset, adsk.core.ValueInput.createByReal(comp.inflate_val / 10.0))
                            offset_faces.add(offset_input)
                            log(f"    -> ✅ Inflated side walls by {comp.inflate_val}mm")
                        except:
                            # Attempt 2: Bulletproof Fallback (For complex SVG text)
                            # If batch fails due to a tight spline, do them one-by-one
                            success_count = 0
                            for f in faces_to_offset:
                                try:
                                    oi = offset_faces.createInput([f], adsk.core.ValueInput.createByReal(comp.inflate_val / 10.0))
                                    offset_faces.add(oi)
                                    success_count += 1
                                except: pass
                            
                            if success_count > 0:
                                log(f"    -> ⚠️ Batch failed. Individually inflated {success_count}/{len(faces_to_offset)} faces.")
                            else:
                                log(f"    -> ❌ Geometry too tight. Could not inflate {body.name}.")
                                
            log(f"    -> Success: Created {len(comp.raw_bodies)} bodies.")




        except Exception as e: pass

def determine_offset_expression(comp):
    if comp.tol_override: return f"{comp.tol_override} mm"
    margin_expr = "structural_margin" 
    if comp.role == "detail": return "tol_detail" 
    elif comp.role == "insert": return f"tol_insert_small + {margin_expr}"
    elif comp.role == "cover": return f"tol_slide_fit + {margin_expr}"
    else: return "0 mm"

def generate_offset_buffers(app, root, tools_comp, registry):
    tools_extrudes = tools_comp.features.extrudeFeatures
    units_mgr = app.activeProduct.unitsManager
    
    sorted_comps = sorted(registry.values(), key=lambda x: get_level_sort_val(x.level_str))
    
    for comp in sorted_comps:
        if not comp.raw_bodies: continue
        if comp.role in ["base", "core"] and not comp.explicit_cuts: continue 
            
        offset_expr = determine_offset_expression(comp)
        try: offset_val_cm = units_mgr.evaluateExpression(offset_expr, "cm")
        except: offset_val_cm = 0.01 
            
        log(f"  Generating Buffers into Tools Group for {comp.name}...")
        parent_comp = registry.get(comp.parent_name)
        comp.buffer_bodies = [] 
        
        needs_stepped_cutter = (comp.role in ["insert", "detail"] and parent_comp)
        
        if needs_stepped_cutter:
            parent_start_expr = parse_fractional_height(parent_comp.level_str, parent_comp, None)
            base_start = f"({parent_start_expr}) - lip_lock_depth"
            exact_dist = f"gap_floor_thickness + 0.05 mm" 
            gap_start = f"({parent_start_expr}) - lip_lock_depth + gap_floor_thickness"
            gap_dist = "30 mm" 
        elif comp.role == "cover":
            base_start = gap_start = "cover_floor_thickness"
            exact_dist = gap_dist = "30 mm"
            needs_stepped_cutter = False
        else:
            base_start = gap_start = "0 mm"
            exact_dist = gap_dist = parse_fractional_height(comp.level_str, comp, parent_comp)
            needs_stepped_cutter = False

        fresh_profiles = filter_solid_profiles(comp.sketch.profiles, f"Buffer_{comp.name}")
        if fresh_profiles.count == 0: continue
        
        for idx in range(fresh_profiles.count):
            prof = fresh_profiles.item(idx)
            single_prof_coll = adsk.core.ObjectCollection.create()
            single_prof_coll.add(prof)
            
            exact_body = None
            gap_body = None
            
            if needs_stepped_cutter:
                ext_exact = tools_extrudes.createInput(single_prof_coll, adsk.fusion.FeatureOperations.NewBodyFeatureOperation)
                ext_exact.startExtent = adsk.fusion.OffsetStartDefinition.create(adsk.core.ValueInput.createByString(base_start))
                ext_exact.setOneSideExtent(adsk.fusion.DistanceExtentDefinition.create(adsk.core.ValueInput.createByString(exact_dist)), adsk.fusion.ExtentDirections.PositiveExtentDirection)
                try:
                    exact_feat = tools_extrudes.add(ext_exact)
                    if exact_feat.bodies.count > 0: 
                        exact_body = exact_feat.bodies.item(0)
                except: pass

            ext_gap = tools_extrudes.createInput(single_prof_coll, adsk.fusion.FeatureOperations.NewBodyFeatureOperation)
            ext_gap.startExtent = adsk.fusion.OffsetStartDefinition.create(adsk.core.ValueInput.createByString(gap_start))
            ext_gap.setOneSideExtent(adsk.fusion.DistanceExtentDefinition.create(adsk.core.ValueInput.createByString(gap_dist)), adsk.fusion.ExtentDirections.PositiveExtentDirection)
            
            try:
                gap_feat = tools_extrudes.add(ext_gap)
                if gap_feat.bodies.count > 0:
                    gap_body = gap_feat.bodies.item(0)
                    
                    faces_to_offset = []
                    for face in gap_body.faces:
                        success, normal = face.evaluator.getNormalAtPoint(face.pointOnFace)
                        if success and abs(normal.z) < 0.99: faces_to_offset.append(face)
                            
                    if len(faces_to_offset) > 0 and offset_val_cm > 0.001:
                        for attempt_val in [offset_val_cm, offset_val_cm * 0.5, offset_val_cm * 0.25, 0.005]:
                            try:
                                offset_faces = tools_comp.features.offsetFacesFeatures
                                offset_input = offset_faces.createInput(faces_to_offset, adsk.core.ValueInput.createByReal(attempt_val))
                                offset_faces.add(offset_input)
                                break 
                            except: pass 
            except: pass
            
            unified_tool = None
            if exact_body and gap_body:
                try:
                    tc = adsk.core.ObjectCollection.create()
                    tc.add(gap_body)
                    ci = tools_comp.features.combineFeatures.createInput(exact_body, tc)
                    ci.operation = adsk.fusion.FeatureOperations.JoinFeatureOperation
                    ci.isKeepToolBodies = False
                    cmb_feat = tools_comp.features.combineFeatures.add(ci)
                    if cmb_feat.bodies.count > 0: unified_tool = cmb_feat.bodies.item(0)
                    else: unified_tool = exact_body
                except: unified_tool = exact_body
            elif gap_body: unified_tool = gap_body
            elif exact_body: unified_tool = exact_body
            
            if unified_tool:
                try:
                    unified_tool.name = f"TOOL_{comp.name}_{idx+1}"
                    comp.buffer_bodies.append(unified_tool)
                except: pass
                
        log(f"    -> Generated {len(comp.buffer_bodies)} unified tools.")

# def get_dynamic_targets(root, comp_name):
#     found = []
#     for b in root.bRepBodies:
#         if "TOOL_" in b.name: continue
#         if " - " in b.name:
#             base_with_suffix = b.name.split(" - ", 1)[1]
#             if base_with_suffix == comp_name or base_with_suffix.startswith(f"{comp_name}_"):
#                 found.append(b)
#     return found
def get_dynamic_targets(root, comp_name):
    found = []
    for b in root.bRepBodies:
        if "TOOL_" in b.name: continue
        if " - " in b.name:
            base_with_suffix = b.name.split(" - ", 1)[1]
            # Match exact name, script suffixes (_1), OR Fusion native suffixes ( (1))
            if base_with_suffix == comp_name or \
               base_with_suffix.startswith(f"{comp_name}_") or \
               base_with_suffix.startswith(f"{comp_name} ("):
                found.append(b)
    return found

def execute_booleans(root, registry):
    combines = root.features.combineFeatures
    sorted_comps = sorted(registry.values(), key=lambda x: get_level_sort_val(x.level_str))
    
    for comp in sorted_comps:
        if not comp.buffer_bodies: continue
            
        target_names = []
        log(f"  Executing cuts using {comp.name} tools...")
        
        if comp.role in ["insert", "cover", "detail"]: 
            if comp.parent_name not in target_names: target_names.append(comp.parent_name)
                
        for cut_name in comp.explicit_cuts:
            if cut_name not in target_names: target_names.append(cut_name)
                
        if len(target_names) > 0:
            tool_coll = adsk.core.ObjectCollection.create()
            for bb in comp.buffer_bodies: tool_coll.add(bb)
            
            for tgt_name in target_names:
                dynamic_bodies = get_dynamic_targets(root, tgt_name)
                if not dynamic_bodies: continue
                
                for tgt_body in dynamic_bodies:
                    try:
                        ci = combines.createInput(tgt_body, tool_coll)
                        ci.operation = adsk.fusion.FeatureOperations.CutFeatureOperation
                        ci.isKeepToolBodies = True 
                        feat_cut = combines.add(ci)
                        feat_cut.name = f"BatchCut_{tgt_body.name.split('_')[0]}_by_{comp.name}"
                        log(f"    -> ✅ Batch cut successful on {tgt_body.name}.")
                    except Exception as e: 
                        success_count = 0
                        for idx, tool in enumerate(comp.buffer_bodies):
                            try:
                                tc = adsk.core.ObjectCollection.create()
                                tc.add(tool)
                                ci = combines.createInput(tgt_body, tc)
                                ci.operation = adsk.fusion.FeatureOperations.CutFeatureOperation
                                ci.isKeepToolBodies = True
                                feat_cut = combines.add(ci)
                                feat_cut.name = f"Cut_{tgt_body.name.split('_')[0]}_by_{comp.name}_{idx}"
                                success_count += 1
                            except: pass
                        if success_count > 0:
                            log(f"    -> ✅ {success_count} isolated cuts successful on {tgt_body.name}.")


# ==========================================
#          POST-PROCESSING
# ==========================================
def apply_base_features(app, root, registry):
    base_comp = next((c for c in registry.values() if c.role == "base"), None)
    if not base_comp or not base_comp.raw_bodies: return None, None
        
    base_bodies = get_dynamic_targets(root, base_comp.name)
    if not base_bodies: return None, None
    base_body = max(base_bodies, key=lambda b: b.volume)
    
    com_pt = None
    bbox_record = None
    
    # 1. CALCULATE COM
    try:
        com = base_body.physicalProperties.centerOfMass
        bbox_record = base_body.boundingBox
        com_pt = adsk.core.Point3D.create(com.x, com.y, 0)
        
        sk = root.sketches.add(root.xYConstructionPlane)
        sk.name = "CenterOfMass_Reference"
        
        bottom_face = get_bottom_face(base_body)
        if bottom_face: sk.project(bottom_face)
            
        lines = sk.sketchCurves.sketchLines
        lines.addByTwoPoints(adsk.core.Point3D.create(com.x - 0.5, com.y, 0), adsk.core.Point3D.create(com.x + 0.5, com.y, 0)).isConstruction = True
        lines.addByTwoPoints(adsk.core.Point3D.create(com.x, com.y - 0.5, 0), adsk.core.Point3D.create(com.x, com.y + 0.5, 0)).isConstruction = True
        
        p1 = adsk.core.Point3D.create(com.x, com.y, 0)
        p2 = adsk.core.Point3D.create(com.x, bbox_record.maxPoint.y + 1.0, 0) 
        com_line = lines.addByTwoPoints(p1, p2)
        com_line.isConstruction = True
        
        log("  -> ✅ Created Center of Mass reference sketch.")
    except Exception as e: pass

    # 2. APPLY TOP CHAMFER (BEFORE SPLIT)
    try:
        top_face = get_top_face(base_body)
        if top_face:
            outer_edges = adsk.core.ObjectCollection.create()
            for loop in top_face.loops:
                if loop.isOuter:
                    for e in loop.edges: outer_edges.add(e)
            
            chamfers = root.features.chamferFeatures
            chamfer_applied = False
            for c_val in [0.2, 0.1]: 
                try:
                    c_input = chamfers.createInput(outer_edges, True)
                    c_input.setToEqualDistance(adsk.core.ValueInput.createByReal(c_val))
                    chamfer_feat = chamfers.add(c_input)
                    chamfer_feat.name = f"Chamfer_Base_Top_{c_val*10}mm"
                    log(f"  -> ✅ Applied {c_val*10}mm Chamfer to top of base.")
                    chamfer_applied = True
                    break
                except: pass
            if not chamfer_applied: log("  -> ⚠️ Chamfer failed entirely. Left edge sharp.")
    except Exception as e: pass

    # 3. APPLY SPLIT TRIM LIP (AFTER CHAMFER)
    try:
        planes = root.constructionPlanes
        plane_input = planes.createInput()
        plane_input.setByOffset(root.xYConstructionPlane, adsk.core.ValueInput.createByString("height_h0 - base_trim_lip"))
        split_plane = planes.add(plane_input)
        split_plane.name = "Trim_Lip_Plane"
        
        splits = root.features.splitBodyFeatures
        split_input = splits.createInput(base_body, split_plane, True)
        split_feat = splits.add(split_input)
        split_feat.name = "Split_Base_Trim_Lip"
        
        base_color = base_body.name.split(" - ")[0] if " - " in base_body.name else "BaseColor"
        
        max_z = -999
        lip_body = None
        for b in split_feat.bodies:
            if b.boundingBox.maxPoint.z > max_z:
                max_z = b.boundingBox.maxPoint.z
                lip_body = b
                
        for b in split_feat.bodies:
            if b == lip_body: b.name = f"{base_color} - {base_comp.name} Trim Lip"
            else: b.name = f"{base_color} - {base_comp.name}"
            
        log("  -> ✅ Split Base and created Trim Lip.")
        split_plane.isLightBulbOn = False
        
        base_bodies = get_dynamic_targets(root, base_comp.name)
        base_body = next((b for b in base_bodies if "Trim Lip" not in b.name), base_body)
    except Exception as e: pass

    # 4. BOTTOM FILLET
    try:
        bottom_face = get_bottom_face(base_body) 
        if bottom_face:
            fillets = root.features.filletFeatures
            edge_coll = adsk.core.ObjectCollection.create()
            for edge in bottom_face.edges: edge_coll.add(edge)
            
            for rad in [0.2, 0.1, 0.05]: 
                try:
                    f_input = fillets.createInput()
                    f_input.addConstantRadiusEdgeSet(edge_coll, adsk.core.ValueInput.createByReal(rad), True)
                    f_feat = fillets.add(f_input)
                    f_feat.name = f"Base_Bottom_Fillet_{rad*10}mm"
                    log(f"  -> ✅ Applied {rad*10}mm fillet to Base bottom.")
                    break
                except: pass
    except: pass
    
    return com_pt, bbox_record

# ==========================================
#          GEOMETRY UTILITIES
# ==========================================
def filter_solid_profiles(all_profiles, comp_name=""):
    valid_coll = adsk.core.ObjectCollection.create()
    total_profiles = all_profiles.count
    if total_profiles == 0: return valid_coll

    def get_loop_hash(loop):
        min_x, min_y = 999.0, 999.0
        max_x, max_y = -999.0, -999.0
        has_curves = False
        for curve in loop.profileCurves:
            try:
                bbox = curve.sketchEntity.boundingBox
                if bbox:
                    min_x, min_y = min(min_x, bbox.minPoint.x), min(min_y, bbox.minPoint.y)
                    max_x, max_y = max(max_x, bbox.maxPoint.x), max(max_y, bbox.maxPoint.y)
                    has_curves = True
            except: pass
        return f"{min_x:.2f}_{min_y:.2f}_{max_x:.2f}_{max_y:.2f}" if has_curves else "empty"

    void_hashes = []
    for prof in all_profiles:
        for i in range(1, prof.profileLoops.count):
            loop = prof.profileLoops.item(i)
            if not loop.isOuter: 
                void_hashes.append(get_loop_hash(loop))

    for prof in all_profiles:
        try:
            if prof.areaProperties(adsk.fusion.CalculationAccuracy.LowCalculationAccuracy).area < 0.001: 
                continue
        except: continue
        
        outer_loop = prof.profileLoops.item(0)
        if get_loop_hash(outer_loop) in void_hashes: 
            continue 
            
        valid_coll.add(prof)
        
    return valid_coll

def get_bottom_face(body):
    best_face = None
    min_z = 99999
    for face in body.faces:
        if face.geometry.objectType == adsk.core.Plane.classType():
            z_val = face.pointOnFace.z
            if z_val < min_z:
                min_z = z_val
                best_face = face
    return best_face

def get_top_face(body):
    best_face = None
    max_z = -99999
    for face in body.faces:
        if face.geometry.objectType == adsk.core.Plane.classType():
            z_val = face.pointOnFace.z
            if z_val > max_z:
                max_z = z_val
                best_face = face
    return best_face


# ==========================================
#         MARKERS & APPEARANCES
# ==========================================
def place_dxf_markers(app, ui, root, com_pt, base_bbox):
    if not com_pt or not base_bbox: return
    
    cx = com_pt.x
    cy_nfc = com_pt.y
    cy_logo = base_bbox.minPoint.y + 1.5 
    cy_hook = base_bbox.maxPoint.y       
    cy_loop = base_bbox.maxPoint.y       

    create_lightweight_marker(app, ui, root, "NFC_Marker", NFC_MARKER_DXF, cx, cy_nfc)
    create_lightweight_marker(app, ui, root, "Logo_Marker", LOGO_MARKER_DXF, cx, cy_logo)
    create_lightweight_marker(app, ui, root, "Hook_Marker", HOOK_MARKER_DXF, cx, cy_hook)
    create_lightweight_marker(app, ui, root, "Loop_Marker", LOOP_MARKER_DXF, cx, cy_loop)

def create_lightweight_marker(app, ui, root, name, dxf_filename, x, y):
    path = os.path.join(COMPONENT_LIB_PATH, dxf_filename)
    if not os.path.exists(path): return None
    try:
        occ = root.occurrences.addNewComponent(adsk.core.Matrix3D.create())
    except RuntimeError as e:
        return None
    occ.component.name = name
    
    importManager = app.importManager
    dxf_opts = importManager.createDXF2DImportOptions(path, occ.component.xYConstructionPlane)
    try: importManager.importToTarget(dxf_opts, occ.component)
    except: pass
    
    occ.isGrounded = False 
    
    mat = adsk.core.Matrix3D.create()
    mat.translation = adsk.core.Vector3D.create(x, y, 0)
    occ.transform = mat
    return occ

def run_swap_nfc(app, ui): 
    design = app.activeProduct
    if design.snapshots.hasPendingSnapshot: design.snapshots.add()
    _swap_generic(app, ui, "NFC_Marker", NFC_FILENAME, "NFC Cap", "NFC Group", [(NFC_TOOL_CUT, True), (NFC_TOOL_JOIN, False)], "", "") 

def run_swap_logo(app, ui): 
    design = app.activeProduct
    if design.snapshots.hasPendingSnapshot: design.snapshots.add()
    _swap_generic(app, ui, "Logo_Marker", LOGO_FILENAME, "Logo", "Logo Group", [(LOGO_TOOL_CUT, True)], LOGO_BODY_PREFIX, LOGO_NEW_NAME)

def run_swap_hook(app, ui): 
    design = app.activeProduct
    if design.snapshots.hasPendingSnapshot: design.snapshots.add()
    _swap_generic(app, ui, "Hook_Marker", HOOK_FILENAME, "Hook", "Hook Group", [(HOOK_TOOL_CUT, True)], "", "")

def run_swap_loop(app, ui): 
    design = app.activeProduct
    if design.snapshots.hasPendingSnapshot: design.snapshots.add()
    _swap_generic(app, ui, "Loop_Marker", LOOP_FILENAME, "Loop", "Loop Group", [(LOOP_TOOL_CUT, True), (LOOP_TOOL_JOIN, False)], "", "")

def _swap_generic(app, ui, marker_name, filename, comp_name, group_name, tools_list, rename_prefix, rename_to):
    design = app.activeProduct
    root = design.rootComponent
    
    if design.snapshots.hasPendingSnapshot: 
        design.snapshots.add()
        
    h0_body = None
    for b in root.bRepBodies:
        if b.isSolid and "TOOL_" not in b.name and b.boundingBox.minPoint.z < 0.1: h0_body = b; break
    if not h0_body: return

    target_matrix = None
    for occ in root.occurrences:
        if marker_name in occ.component.name: 
            target_matrix = occ.transform
            break
            
    if not target_matrix: return

    path = os.path.join(COMPONENT_LIB_PATH, filename)
    if not os.path.exists(path): return

    importManager = app.importManager
    opts = importManager.createFusionArchiveImportOptions(path)
    count = root.occurrences.count
    importManager.importToTarget(opts, root)
    
    if root.occurrences.count > count:
        real_occ = root.occurrences.item(root.occurrences.count - 1)
        try: real_occ.breakLink()
        except: pass
        
        real_occ.component.name = comp_name
        real_occ.transform = target_matrix
        
        if design.snapshots.hasPendingSnapshot:
            design.snapshots.add()
        
        combines = root.features.combineFeatures
        for tool_name, is_cut in tools_list:
            tool_body = next((b for b in real_occ.bRepBodies if b.name == tool_name), None)
            if tool_body:
                try:
                    col = adsk.core.ObjectCollection.create()
                    col.add(tool_body)
                    inp = combines.createInput(h0_body, col)
                    inp.operation = adsk.fusion.FeatureOperations.CutFeatureOperation if is_cut else adsk.fusion.FeatureOperations.JoinFeatureOperation
                    inp.isKeepToolBodies = not is_cut 
                    combines.add(inp)
                except: pass

        if rename_prefix:
            letters = adsk.core.ObjectCollection.create()
            for b in real_occ.bRepBodies:
                if b.name.startswith(rename_prefix): letters.add(b)
            if letters.count > 0:
                try:
                    root.features.cutPasteBodies.add(letters)
                    for i in range(root.bRepBodies.count):
                        b = root.bRepBodies.item(i)
                        if b.name.startswith(rename_prefix): b.name = rename_to
                except: pass

        real_occ.isLightBulbOn = False
        for occ in root.occurrences:
            if marker_name in occ.component.name: 
                occ.isLightBulbOn = False
                break

def ensure_base_appearance(app, template_name):
    design = app.activeProduct
    if not design.appearances.itemByName(template_name):
        lib = app.materialLibraries.itemByName("Fusion 360 Appearance Library")
        if lib:
            found = lib.appearances.itemByName(template_name)
            if found: design.appearances.addByCopy(found, template_name)

def force_apply_color(app, color_name, hex_clean, template_name):
    design = app.activeProduct
    existing = design.appearances.itemByName(color_name)
    if existing: return existing
    base = design.appearances.itemByName(template_name)
    if not base and design.appearances.count > 0: base = design.appearances.item(0)
    if not base: return None

    new_app = design.appearances.addByCopy(base, color_name)
    try:
        r, g, b = int(hex_clean[0:2], 16), int(hex_clean[2:4], 16), int(hex_clean[4:6], 16)
        f_col = adsk.core.Color.create(r, g, b, 255)
        for prop_name in ["opaque_albedo", "Color", "surface_albedo", "diffuse", "base_color"]:
            prop = new_app.appearanceProperties.itemByName(prop_name)
            if prop:
                try: prop.value = f_col; break
                except: pass
    except: pass
    return new_app