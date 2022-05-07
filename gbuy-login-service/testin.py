data={'productsSummary': [{'gbuy_product_id': 'pd100', 'gbuy_product_img': 'p-image', 'gbuy_product_name': 'Laptop',
                           'gbuy_product_price': 30000, 'gbuy_product_details': 'user_id', 'gbuy_product_quanity': 3},
                          {'gbuy_product_id': 'pd101', 'gbuy_product_img': 'p2_image', 'gbuy_product_name': 'Mobile'
, 'gbuy_product_price': 54000, 'gbuy_product_details': 'user_id', 'gbuy_product_quanity': 5}]}


for key,value in data.items():
    for product in value:
        print(product)
        order_id='ord_'+product.get('gbuy_product_details')
        print(order_id)



