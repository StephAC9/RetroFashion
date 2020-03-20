import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import EditAccount from "../views/manage/EditAccount";
import Account from "../views/membership/Account";
import MemberAuth from "../views/membership/MemberAuth";
import Cart from "../components/cart/Cart";
import ProductView from "../views/products/ProductView";
import Payment1 from "../views/orders/Payment1";
import Payment2 from "../views/orders/Payment2";
import ChildrenProducts from "../views/products/categories/ChildrenProducts";
import MenProducts from "../views/products/categories/MenProducts";
import DamProducts from "../views/products/categories/DamProducts";
import WomenCategory from "../views/products/categories/subcategories/WomenCategory";
import MenCategory from "../views/products/categories/subcategories/MenCategory";
import ChildrenCategory from "../views/products/categories/subcategories/ChildrenCategory";
import Accessories from "../views/products/categories/subcategories/Accessories";
import Sales from "../views/products/categories/subcategories/Sales";
import Favorites from "../views/products/categories/subcategories/Favorites";
import BestSellers from "../views/products/categories/subcategories/BestSellers";
import Clothes from "../views/products/categories/subcategories/Clothes";
import Shoes from "../views/products/categories/subcategories/Shoes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ourCompany/About")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ourCompany/Contact")
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/ourCompany/News")
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    children: [
      {
        path: "/Edit",
        name: "/edit",
        component: EditAccount
      }
    ]
  },
  {
    path: "/signin",
    name: "signin",
    component: MemberAuth
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/membership/MemberAuth")
  },
  {
    path: "/payment-step-1",
    name: "payment1",
    component: Payment1
  },
  {
    path: "/payment-step-2",
    name: "payment2",
    component: Payment2
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    props: true
  },
  {
    path: "/clothes",
    name: "clothes",
    component: Clothes
  },
  {
    path: "/shoes",
    name: "shoes",
    component: Shoes
  },
  {
    path: "/accessories",
    name: "accessories",
    component: Accessories
  },
  {
    path: "/accessories/bags",
    name: "Accessory_Bags",
    component: Accessories
  },
  {
    path: "/accessories/jewelries",
    name: "Accessory_Jewelries",
    component: Accessories
  },
  {
    path: "/accessories/watches",
    name: "Accessory_Watches",
    component: Accessories
  },
  {
    path: "/accessories/wallets",
    name: "Accessory_Wallets",
    component: Accessories
  },
  {
    path: "/accessories/hats",
    name: "Accessory_Hats",
    component: Accessories
  },

  {
    path: "/accessories/sunglasses",
    name: "Accessory_Sunglasses",
    component: Accessories
  },
  {
    path: "/women",
    name: "women",
    component: DamProducts
  },
  {
    path: "/women/shoes",
    name: "Women_Shoes",
    component: WomenCategory
  },
  {
    path: "/women/clothes",
    name: "Women_Clothes",
    component: WomenCategory
  },
  {
    path: "/women/clothes/wedding",
    name: "Women_Wedding",
    component: WomenCategory
  },
  {
    path: "/women/clothes/wedding guest",
    name: "Women_Wedding guest",
    component: WomenCategory
  },
  {
    path: "/women/clothes/dresses",
    name: "Women_Dresses",
    component: WomenCategory
  },
  {
    path: "/women/clothes/tops",
    name: "Women_Tops",
    component: WomenCategory
  },
  {
    path: "/women/shoes/boots",
    name: "Women_Boots",
    component: WomenCategory
  },
  {
    path: "/women/shoes/heels",
    name: "Women_Heels",
    component: WomenCategory
  },
  {
    path: "/women/clothes/skirts",
    name: "Women_Skirts",
    component: WomenCategory
  },
  {
    path: "/women/shoes/sneakers",
    name: "Women_Sneakers",
    component: WomenCategory
  },
  {
    path: "/women/accessories",
    name: "Women_Accessories",
    component: WomenCategory
  },
  {
    path: "/women/multi categories",
    name: "Women_multi",
    component: WomenCategory
  },
  {
    path: "/men",
    name: "men",
    component: MenProducts
  },
  {
    path: "/men/shoes",
    name: "Men_Shoes",
    component: MenCategory
  },
  {
    path: "/men/clothes",
    name: "Men_Clothes",
    component: MenCategory
  },
  {
    path: "/men/accessories",
    name: "Men_Accessories",
    component: MenCategory
  },
  {
    path: "/men/clothes/wedding",
    name: "Men_Wedding",
    component: MenCategory
  },
  {
    path: "/men/clothes/wedding guest",
    name: "Men_Wedding guest",
    component: MenCategory
  },
  {
    path: "/men/clothes/tshirts",
    name: "Men_T-shirts",
    component: MenCategory
  },
  {
    path: "/men/clothes/tshirts",
    name: "Men_Shirts",
    component: MenCategory
  },
  {
    path: "/men/clothes/jackets",
    name: "Men_Jackets",
    component: MenCategory
  },
  {
    path: "/men/clothes/suits",
    name: "Men_Suits",
    component: MenCategory
  },
  {
    path: "/men/clothes/trousers",
    name: "Men_Trousers",
    component: MenCategory
  },
  {
    path: "/men/shoes/sneakers",
    name: "Men_Sneakers",
    component: MenCategory
  },
  {
    path: "/men/shoes/outdoors",
    name: "Men_Outdoors",
    component: MenCategory
  },
  {
    path: "/men/shoes/business shoes",
    name: "Men_Business shoes",
    component: MenCategory
  },
  {
    path: "/men/multi categories",
    name: "Men_multi",
    component: MenCategory
  },

  {
    path: "/children",
    name: "children",
    component: ChildrenProducts
  },
  {
    path: "/children/shoes",
    name: "Children_Shoes",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes",
    name: "Children_Clothes",
    component: ChildrenCategory
  },
  {
    path: "/children/accessories",
    name: "Children_Accessories",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes/party",
    name: "Children_Party",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes/tshirts",
    name: "Children_T-shirts",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes/jackets",
    name: "Children_Jackets",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes/suits",
    name: "Children_Suits",
    component: ChildrenCategory
  },
  {
    path: "/children/clothes/trousers",
    name: "Children_Trousers",
    component: ChildrenCategory
  },
  {
    path: "/children/shoes/sneakers",
    name: "Children_Sneakers",
    component: ChildrenCategory
  },
  {
    path: "/children/shoes/outdours",
    name: "Children_Outdoors",
    component: ChildrenCategory
  },
  {
    path: "/children/multi categories",
    name: "Children_multi",
    component: ChildrenCategory
  },
  {
    path: "/best sellers",
    name: "bestsellers",
    component: BestSellers
  },
  {
    path: "/sales",
    name: "sales",
    component: Sales
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
