# -*- coding: utf-8 -*-
"""
Created on Tue May  5 16:08:30 2020

@author: Utente
"""


import json

print("inizio")
while 1:
    nfilein = input("File input:")
    nfileout = input("File output")
    if len(nfilein)>0 and len(nfileout)>0:
        break

filein = open(nfilein)
data = json.load(filein)
nuovo= {}
nuovo["Elements"] = len(data["docs"])
nuovo["docs"] = []
for d in data["docs"]:
    nuovo["docs"].append({"name": d["name"], "age": d["age"]})
fileout = open(nfileout, "w")
json.dump(nuovo, fileout)
filein.close()
fileout.close()
print("Finito")