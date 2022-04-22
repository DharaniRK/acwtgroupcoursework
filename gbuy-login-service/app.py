from flask import Flask,request
import json
import pymysql


app= Flask(__name__)
db = pymysql.connect('localhost','root','password','gbuy')
cursor= db.cursor()

@app.route("/login", methods=['POST'])

def get_userdetails():

    data=json.loads(request.data.decode())
    print(data)
    email=data["email"]
    password=data["password"]
    get_userpassword=cursor.execute("SELECT password FROM users WHERE EmailID = '%s'" % (email))
    #select password from user_details where username=username
    if password==get_userpassword:
        print('true')
        return {"login":True}
    else:
        print('false')
        return {"login":False}


