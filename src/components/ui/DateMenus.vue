<template>
  <v-select v-model="value" :items="items" color="primary"></v-select>
</template>
<script>
export default {
  props: {
    items: {},
    isMonth: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    value: "",
  }),
  computed: {
    value() {
      return this.isMonth ? "Month" : "Year";
    },
  },
  mounted() {
    // console.log(this.items);
  },
};
</script>
