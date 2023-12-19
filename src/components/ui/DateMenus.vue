<template>
  <v-select v-model="value" :items="items" color="primary"></v-select>
</template>
<script>
export default {
  props: ["items"],
  data: () => ({
    // items: ["foo", "bar", "fizz", "buzz"],
    value: "",
  }),
  mounted() {
    // const itemsArr = JSON.parse(JSON.stringify(this.items))
    // console.log("typeof" +  typeof(this.items));
    console.log(this.items);
    // this.value = this.items.title
  },
};
</script>
