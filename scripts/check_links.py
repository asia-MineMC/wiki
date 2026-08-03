# -*- coding: utf-8 -*-
"""检查 config.mts 中所有链接是否都有对应的构建产物"""
import re
import os
import glob

dist = "docs/.vitepress/dist"
htmls = set()
for f in glob.glob(os.path.join(dist, "**", "*.html"), recursive=True):
    rel = os.path.relpath(f, dist).replace(os.sep, "/")
    htmls.add("/" + rel[:-5] if rel != "index.html" else "/")

cfg = open("docs/.vitepress/config.mts", encoding="utf-8").read()
links = set(re.findall(r"link:\s*'([^']+)'", cfg))
bad = sorted(l for l in links if l not in htmls)
print("dist pages:", len(htmls))
print("config links:", len(links))
print("DEAD LINKS:", bad if bad else "none")
