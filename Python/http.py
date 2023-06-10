# -*- coding: utf-8 -*-
"""
Created on Tue May  5 15:34:08 2020

@author: Utente
"""


import requests 

URL = "http://127.0.0.1:8080/list"
PARAMS = {}
r = requests.get(url = URL, params = PARAMS) 
data = r.json() 

print("Total: {}".format(data["Total"]))
print("Selected: {}".format( data["Selected"]))

for n in data["docs"]:
    print("Name: {}, Age: {}".format(n["name"], n["age"]))
