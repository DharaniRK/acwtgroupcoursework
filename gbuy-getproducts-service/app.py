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
  final_product_array=[]
  product_keys=['gbuy_product_id','gbuy_product_name','gbuy_product_itemquantity','gbuy_product_price',
                'gbuy_product_details']
  for product in productdetails:
      product_array=dict(zip(product_keys,product))
      product_array.update({'gbuy_product_quanity':1,'gbuy_product_img':'/assets/'+product[1].lower()+'.jpg'})
      final_product_array.append(product_array)
  cursor.close()
  return jsonify(final_product_array)

if __name__ == "__main__":
  app.run(host ='0.0.0.0')
