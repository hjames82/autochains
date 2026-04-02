import http.server
import socketserver
import os

PORT = 5000
HOST = "0.0.0.0"

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "":
            self.path = "/01_START_HERE_Setup_Guide.html"
        return super().do_GET()

    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")

with socketserver.TCPServer((HOST, PORT), Handler) as httpd:
    print(f"Serving AutoChains setup guide at http://{HOST}:{PORT}")
    httpd.serve_forever()
