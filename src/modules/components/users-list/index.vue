<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <router-link :to="`${user.id}`">
        {{ user.name }} {{ user.lastname }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
