import mysql.connector
import json
from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
  return 'Hello, productdetails!'

@app.route('/getProducts')
def get_userdetails():

  mydb = mysql.connector.connect(
    host="mysqldb",
    user="root",
    password="p@ssw0rd1",
    database="gbuy"
  )
  cursor = mydb.cursor()


  cursor.execute("SELECT *  FROM  ProductDetails")

  try:
    productdetails = cursor.fetchall()
  except Exception as e:
    productdetails='none'
  print(productdetails)
  cursor.close()

  return jsonify(productdetails)





if __name__ == "__main__":
  app.run(host ='0.0.0.0')
