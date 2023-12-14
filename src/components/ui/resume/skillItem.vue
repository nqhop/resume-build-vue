<template>
  <v-row class="row">
    <v-card class="mx-4 mb-4 card">
      <v-col cols="8 col">
        <v-card-title>
          <span class="text-h6">
            {{ name }}
          </span>
        </v-card-title>
        <v-card-subtitle>
          <span class="text-body-2">{{ level }}</span>
        </v-card-subtitle>

        <!-- <v-divider class="mx-4"></v-divider> -->
      </v-col>
      <v-col cols="2" class="float-right svg-icon"> 
        <svg-icon type="mdi" :path="mdiPencilOutline"></svg-icon>
      </v-col>
    </v-card>
  </v-row>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencilOutline } from "@mdi/js";
export default {
  props: ["id", "name", "level"],
  components: {
    SvgIcon,
  },
  data() {
    return {
      mdiPencilOutline: mdiPencilOutline,
    };
  },
};
</script>

<style scoped>
.card {
  width: 100%;
}
.row {
  margin: 0;
}
.col {
  display: inline-block;
}
.svg-icon{
  margin-top: 25px;
}
</style>
