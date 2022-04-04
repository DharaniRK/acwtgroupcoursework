from flask import Flask,request
import json


app= Flask(__name__)

@app.route("/login", methods=['POST'])

def get_userdetails():
    data=json.loads(request.data.decode())
    print(data)
    username=data["username"]
    password=data["password"]

    get_userpassword="dharani"
    #select password from user_details where username=username
    if password==get_userpassword:
        print('true')
        return {"login":True}
    else:
        print('false')
        return {"login":False}


