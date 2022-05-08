import mysql.connector
import json
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
  return 'Hello, status!'

@app.route('/getProducts',methods=['POST'])
def get_userdetails():

  mydb = mysql.connector.connect(
    host="mysqldb",
    user="root",
    password="p@ssw0rd1",
    database="gbuy"
  )
  cursor = mydb.cursor()


  cursor.execute("SELECT UserID, FirstName,password FROM UserDetails WHERE EmailID = '%s'" % (email))

  try:
    userpassword = cursor.fetchone()
  except Exception as e:
    userpassword='false'
  userpassword = [userpassword]
  print(userpassword)
  for (userid,firstname,passwd) in userpassword:
    if passwd==password:
      status='True'

      return ({'status':status,'firstName':firstname,'userId':userid})
    else:
      status='false'
      return ({'status':status})

  cursor.close()




if __name__ == "__main__":
  app.run(host ='0.0.0.0')
