import os
import xml.etree.ElementTree as ET
from datetime import datetime

base_url = "https://www.502starservices.com/"
root_dir = r"c:\Users\lucia\OneDrive\Desktop\502starservice"

urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

for dirpath, dirnames, filenames in os.walk(root_dir):
    if '.git' in dirpath:
        continue
    for filename in filenames:
        if filename.endswith(".html"):
            filepath = os.path.join(dirpath, filename)
            rel_path = os.path.relpath(filepath, root_dir)
            rel_path = rel_path.replace("\\", "/")
            
            if rel_path == "index.html":
                url_path = ""
            elif rel_path.endswith("/index.html"):
                url_path = rel_path[:-10]
            else:
                url_path = rel_path
                
            url_str = base_url + url_path
            
            url = ET.SubElement(urlset, "url")
            loc = ET.SubElement(url, "loc")
            loc.text = url_str
            
            # Max priority
            priority = ET.SubElement(url, "priority")
            priority.text = "1.0"
            
            changefreq = ET.SubElement(url, "changefreq")
            changefreq.text = "daily"

tree = ET.ElementTree(urlset)
ET.indent(tree, space="\t", level=0)
tree.write(os.path.join(root_dir, "sitemap.xml"), encoding="utf-8", xml_declaration=True)
print("sitemap.xml generated successfully.")
