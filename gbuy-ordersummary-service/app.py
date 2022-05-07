import mysql.connector
import json
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
  return 'Hello, Docker2!'

@app.route('/ordersummary',methods=['POST'])
def get_userdetails():
  data = json.loads(request.data.decode())
  print(data)
  email = data["username"]
  password = data["password"]
  mydb = mysql.connector.connect(
    host="mysqldb",
    user="root",
    password="p@ssw0rd1",
    database="gbuy"
  )
  cursor = mydb.cursor()


  cursor.execute("SELECT password FROM UserDetails WHERE EmailID = '%s'" % (email))

  try:
    userpassword = cursor.fetchone()
  except Exception as e:
    userpassword='false'
  print(userpassword)
  for passwd in userpassword:
    if passwd==password:
      cursor.execute('')
      return jsonify('True'),200
    else:
      return jsonify('False'),200

  cursor.close()




if __name__ == "__main__":
  app.run(host ='0.0.0.0')