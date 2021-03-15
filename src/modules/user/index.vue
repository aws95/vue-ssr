<template>
  <div>
    <router-link to="/">Go to Home page</router-link>
    <h1>
      Current route :
    </h1>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  name: "User",

  metaInfo: {
    title: "User Page",
    meta: [{ name: "description", content: "User page description" }],
  },
};
</script>
