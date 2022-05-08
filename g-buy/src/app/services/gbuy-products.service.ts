import { Injectable,EventEmitter,Output } from '@angular/core';
import {gbuyProducts} from '../helper/gbuy-products';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GbuyProductsService {

  constructor() { }
  summaryList:gbuyProducts[]= [];

  getProducts() {
    return [
      {
        gbuy_product_id: "GB001",
        gbuy_product_img: "/assets/apple.jpg",
        gbuy_product_name : "Apple",
        gbuy_product_price : 5.0,
        gbuy_product_details : "Growers Pride Royal Gala Apples",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id : "GB002",
        gbuy_product_img: "/assets/banana.jpg",
        gbuy_product_name : "Banana",
        gbuy_product_price : 4,
        gbuy_product_details : "Fyffes Ripe & Ready Bananas",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB003",
        gbuy_product_img: "/assets/carrot.jpg",
        gbuy_product_name: "Carrot",
        gbuy_product_price: 0.4,
        gbuy_product_details : "Burgess Harvest Carrots",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB004",
        gbuy_product_img: "/assets/okra.jpg",
        gbuy_product_name: "Okra",
        gbuy_product_price : 3.45,
        gbuy_product_details: "Crunchy Ladies Fingers Okra",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB005",
        gbuy_product_img: "/assets/beetroot.jpg",
        gbuy_product_name: "Beetroot",
        gbuy_product_price: 4.00,
        gbuy_product_details: "PK's Organic Bunch Beetroot",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB006",
        gbuy_product_img: "/assets/potato.jpg",
        gbuy_product_name: "Potato",
        gbuy_product_price: 1.87,
        gbuy_product_details: "Burgess Harvest Baking Jacket Potatoes",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB007",
        gbuy_product_img: "/assets/egg.jpg",
        gbuy_product_name: "Eggs",
        gbuy_product_price: 2.10,
        gbuy_product_details: "PK Farm Large Free Range Eggs",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "12 nos"
      },
      {
        gbuy_product_id: "GB008",
        gbuy_product_img: "/assets/onion.jpg",
        gbuy_product_name: "Onions",
        gbuy_product_price: 0.85,
        gbuy_product_details: "Farm Folk Large Red Onions",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB009",
        gbuy_product_img: "/assets/strawberrie.jpg",
        gbuy_product_name: "Strawberries",
        gbuy_product_price: 5.63,
        gbuy_product_details: "BerryWorld Organic Staawberries",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB010",
        gbuy_product_img: "/assets/broccoli.png",
        gbuy_product_name: "Broccoli",
        gbuy_product_price: 1.31,
        gbuy_product_details: "Sunripe Organic Washed & Ready to Eat Broccoli",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB011",
        gbuy_product_img: "/assets/mushroom.jpg",
        gbuy_product_name: "Mushroom",
        gbuy_product_price: 3.01,
        gbuy_product_details: "Monahgan Mushrooms Organic White Mushrooms",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB012",
        gbuy_product_img: "/assets/beans.jpg",
        gbuy_product_name: "Beans",
        gbuy_product_price: 8.75,
        gbuy_product_details: "Trimmed Fine Green Beans",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB013",
        gbuy_product_img: "/assets/chicken.jpg",
        gbuy_product_name: "Chicken",
        gbuy_product_price: 5.93,
        gbuy_product_details: "Organic Free Range Whole Chicken",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB014",
        gbuy_product_img: "/assets/lemon.jpg",
        gbuy_product_name: "Lemon",
        gbuy_product_price: 3.21,
        gbuy_product_details: "Wholegood Organic Unwaxed Lemons",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB015",
        gbuy_product_img: "/assets/grapes.jpg",
        gbuy_product_name: "Grape",
        gbuy_product_price: 4.00,
        gbuy_product_details: "Amazzing Large Seedless Grapes",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB016",
        gbuy_product_img: "/assets/spinach.jpg",
        gbuy_product_name: "Spinach",
        gbuy_product_price: 3.72,
        gbuy_product_details: "Washed & Ready to Cook Spinach",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB017",
        gbuy_product_img: "/assets/garlic.jpg",
        gbuy_product_name: "Garlic",
        gbuy_product_price: 0.32,
        gbuy_product_details: "Large Spanish Garlic",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "100 g"
      },
      {
        gbuy_product_id: "GB018",
        gbuy_product_img: "/assets/kiwi.jpg",
        gbuy_product_name: "Kiwi",
        gbuy_product_price: 3.60,
        gbuy_product_details: "Wholegood Organic Kiwi Fruit",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      },
      {
        gbuy_product_id: "GB019",
        gbuy_product_img: "/assets/cabbage.jpg",
        gbuy_product_name: "Cabbage",
        gbuy_product_price: 1.20,
        gbuy_product_details: "Organic White Cabbage",
        gbuy_product_quanity: 1,
        gbuy_product_itemquantity: "1 Kg"
      }
    ];
  }
}
