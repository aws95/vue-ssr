<template>
  <ul>
    <!--<li v-for="user in users" :key="user.id">
      <router-link :to="`${user.id}`">
        {{ user.name }} {{ user.lastname }}
      </router-link>
    </li>-->
    <li v-for="product in products" :key="product.id">
      <router-link :to="`${product.product}`">{{
        product.product
      }}</router-link>
    </li>
    <li v-for="category in categories" :key="category.id">
      <router-link :to="`${category.category}`">{{
        category.category
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      products: [
        { id: 1, product: "product 1" },
        { id: 2, product: "product 2" },
        { id: 3, product: "product 3" },
        { id: 4, product: "product 4" },
        { id: 5, product: "product 5" },
      ],
      categories: [
        { id: 1, category: "category 1" },
        { id: 2, category: "category 2" },
        { id: 3, category: "category 3" },
        { id: 4, category: "category 4" },
        { id: 5, category: "category 5" },
      ],
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
