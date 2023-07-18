import menuImage1 from "./assets/images/6.jpeg";
import menuImage2 from "./assets/images/7.jpeg";
import menuImage3 from "./assets/images/8.jpeg";
import menuImage4 from "./assets/images/9.jpg";
import menuImage5 from "./assets/images/10.jpeg";
import menuImage6 from "./assets/images/4.jpeg";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/12.png";
import reviewImage1 from "./assets/images/review1.jpeg";
import reviewImage2 from "./assets/images/review2.png";

import blogImage1 from "./assets/images/1.png";
import blogImage2 from "./assets/images/2.jpeg";
import blogImage3 from "./assets/images/3.jpeg";
import logoImage from "./assets/images/logo.png";
const menu = [
  {
    img: menuImage1,
    text:"Burger & fries",
    price:"₹60",
    originalprice:"₹70",
  },
  {
    img: menuImage2,
    text:"Donut",
   price:"₹40",
   originalprice:"₹50",
  },
  {
    img: menuImage3,
    text:"French Fish",
   price:"₹600",
   originalprice:"₹700",
  },
  {
    img: menuImage4,
    text:"stream momos",
   price:"₹80",
   originalprice:"₹90",
  },
  {
    img: menuImage5,
    text:"Singapoori chowmin",
   price:"₹120",
   originalprice:"₹130",
  },
  {
    img: menuImage6,
    text:"Nan & Paneer",
   price:"₹200",
   originalprice:"₹220",
  },
];

const cart = [
  {
    img: menuImage1,
    text:"Burger & fries",
    price:"₹60",
    originalprice:"₹70",
  },
  {
    img: menuImage2,
    text:"Donut",
   price:"₹40",
   originalprice:"₹50",
  },
  {
    img: menuImage3,
    text:"French Fish",
   price:"₹600",
   originalprice:"₹700",
  },
];

const product = [
  {
    img: productImage1,
    text: "burger",
    price: "₹110",
    originalprice:"₹120",
  },
  {
    img: productImage2,
    text: "Ice-Cream",
    price: "₹90",
    originalprice:"₹100",

  },
  {
    img: productImage3,
    text: "Cappuccino",
    price:"₹180",
    originalprice: "₹200",
  },
];
const review = [
  {
    img: reviewImage1,
    text: "Shyam",
   discript:"We are proud to supply our high quality ground beef to Burger fanatics Nationwide for nearly 40 years and we thank you for giving us the opportunity to continue serving you."
  },
  {
    img: reviewImage2,
    text:"Shiv",
    discript:"Pizza Today is the leading magazine for pizza professionals. Read the latest in the restaurant industry. Browse their top pizza, dough, & sauce recipes.",
   
  },
];
const blog = [
  {
    img: blogImage1,
    text: "Margherita-Pizza",
    discript:" THERE’S VERY LITTLE IN MY WORLD THAT A FOOT MASSAGE AND A THIN-CRUST, EVERYTHING-ON-IT PIZZA WON’T SET RIGHT.",
  },
  {
    img: blogImage2,
    text:"Hot-Dog",
    discript:"Hot dogs always seem better out than at home; so do French-fried potatoes; so do your children and they like it.",
  },
  {
    img: blogImage3,
    text: "Roasted-Burger",
    discript:"The true cost to the world of a burger is far greater than the money you hand over to buy it, so the children like the burger",
  },
  
];

const logo =[
  {
    img: logoImage
  }
]
export { menu, cart,product, review, blog ,logo};
