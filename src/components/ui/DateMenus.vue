<template>
  <v-select
    :disabled="isDisable"
    v-model="value"
    :items="items"
    color="primary"
  ></v-select>
</template>
<script>
export default {
  props: {
    items: {},
    itemsPlaceholder: {},
    typeOfDate: {},
    isDisable: {
      type: Boolean,
      default: false,
    },
    isMonth: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    value: "",
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
  watch: {
    value() {
      this.$emit("change-dates", this.value, this.typeOfDate);
    },
  },
};
</script>
