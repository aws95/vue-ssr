import Vue from "vue";
import Router from "vue-router";
import About from "../modules/about/index.vue";
import Product from "../modules/product/index.vue";
import Category from "../modules/category/index.vue";
import Home from "../modules/index.vue";

Vue.use(Router);

const products = [
  { id: 1, product: "product 1" },
  { id: 2, product: "product 2" },
  { id: 3, product: "product 3" },
  { id: 4, product: "product 4" },
  { id: 5, product: "product 5" },
];
const categories = [
  { id: 1, category: "category 1" },
  { id: 2, category: "category 2" },
  { id: 3, category: "category 3" },
  { id: 4, category: "category 4" },
  { id: 5, category: "category 5" },
];

export function createRouter() {
  const routes = [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/about",
      component: About,
      name: "about",
    },
  ];
  products.forEach((prod) =>
    routes.push({
      path: `/${prod.product}`,
      component: Product,
      name: `product_${prod.id}`,
    })
  );
  categories.forEach((categ) =>
    routes.push({
      path: `/${categ.category}`,
      component: Category,
      name: `category_${categ.id}`,
    })
  );
  return new Router({
    mode: "history",
    routes: routes,
  });
}
