<template>
  <v-select :disabled="disabled" v-model="value" :items="items" color="primary"></v-select>
</template>
<script>
export default {
  props: {
    items: {},
    itemsPlaceholder: {},
    isDisable: {
      type: Boolean,
      default: false
    },
    isMonth: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    value: "",
    disabled: false
  }),

  mounted() {
    console.log("DateMenus");
    if (this.itemsPlaceholder) {
      const monthAndYear = this.itemsPlaceholder.split(" ");
      this.value = this.isMonth ? monthAndYear[0] : monthAndYear[1];
    } else {
      this.value = this.isMonth ? "Month" : "Year";
    }

  },
};
</script>
