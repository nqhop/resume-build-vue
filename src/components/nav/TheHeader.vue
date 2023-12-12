<template>
  <div class="header">
    <base-button class="btn" name="Resume" :icon="path" />
    <p class="header-title text-h6 text-md-h5 text-lg-h4">Resume</p>
    <div class="btn-right">
        <base-button class="btn" @click="print" name="download" :icon="mdiTrayArrowDown"/>
      <base-button class="btn" name="Expand" :icon="mdiArrowExpandAll"/>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeftThin } from "@mdi/js";
import { mdiTrayArrowDown } from '@mdi/js';
import { mdiArrowExpandAll } from '@mdi/js';
export default {
  components: {
    BaseButton,
    SvgIcon,
  },
  data() {
    return {
      path: mdiArrowLeftThin,
      mdiTrayArrowDown: mdiTrayArrowDown,
      mdiArrowExpandAll: mdiArrowExpandAll
    };
  },
  methods: {
    print(){
        // window.print();
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: #1e8bc3;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
}
.header-title {
  color: #fff;
  margin: auto 0;
}
.btn,
.btn-right {
  margin: auto 0;
}

.btn-right{
    margin-right: -8px;
}


.btn-right .btn {
  display: inline-block;
  margin: 0 8px;
}
.btn-right .btn{
    /* margin: 0 16px; */
}
</style>
