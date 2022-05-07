mycursor = mydb.cursor()

        sql = "INSERT INTO customers (OrderID,UserID,ProductName,Quantity,UnitPrice,FinalPrice) VALUES (%s, %s,%s,%s,%s,%s)"
        val = (order_id, )
        mycursor.execute(sql, val)

        mydb.commit()
        query="insert into gbuy.OrderDetails(OrderID,UserID,ProductName,Quantity,UnitPrice,FinalPrice) values ' \
               ('%s','%s')" % (email)
        #,'user','p_name','1',10.1,20.1)