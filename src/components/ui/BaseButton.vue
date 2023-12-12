<template>
  <div class="text-center">
    <v-btn :color="colorBtn">
      <!-- <v-btn color="primary"> -->
      <template v-if="icon" v-slot:prepend>
        <svg-icon type="mdi" :path="icon" />
      </template>
      {{ name }}
      <!-- <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template> -->
    </v-btn>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    colorBtn: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    namePassed() {
      return this.name !== "";
    },
  },
  components: {
    SvgIcon,
  },
};
</script>
