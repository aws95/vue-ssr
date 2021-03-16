<template>
  <div>
    <router-link to="/">Go to Home page</router-link>
    <h1>
      Current route :
    </h1>
    <div>{{ $route.path }}</div>
  </div>
</template>

<script>
export default {
  name: "Category",

  metaInfo: {
    title: "Category Page",
    meta: [{ name: "description", content: "Category page description" }],
  },
};
</script>
