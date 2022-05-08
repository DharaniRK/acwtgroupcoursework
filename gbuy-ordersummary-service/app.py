import mysql.connector
import json
from flask import Flask,request
from flask_cors import CORS
from decimal import Decimal

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
  return 'Hello, order!'

@app.route('/orderSummary',methods=['POST'])
def get_userdetails():
  data = json.loads(request.data.decode())
  print(data)


  mydb = mysql.connector.connect(
    host="mysqldb",
    user="root",
    password="p@ssw0rd1",
    database="gbuy"
  )
  cursor = mydb.cursor()
  order_id='ord_001'
  for key, value in data.items():
    for product in value:
      order_id = 'ord_' + str(product.get('gbuy_product_details'))
      total_price=Decimal(product.get('gbuy_product_quanity'))*Decimal(product.get('gbuy_product_price'))
      sql = "INSERT INTO gbuy.OrderDetails (OrderID,UserID,ProductName,Quantity,UnitPrice,FinalPrice) VALUES (%s, %s,%s,%s,%s,%s)"
      val = (order_id,product.get('gbuy_product_details'),product.get('gbuy_product_name'),
             product.get('gbuy_product_quanity'), product.get('gbuy_product_price'), total_price)
      cursor.execute(sql, val)
      

      mydb.commit()

  cursor.close()
  return {'order_id':order_id}


if __name__ == "__main__":
  app.run(host ='0.0.0.0')