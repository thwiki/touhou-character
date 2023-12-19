<template>
  <div class="app-character">
    <slot></slot>
    <THBSwitch>测试</THBSwitch>
    <THBButton>测试</THBButton>
  </div>
</template>

<script>
import { getProductList, getTagList } from "./config/getVar"
import { THBButton, THBSwitch } from "./components";
export default {
  name: "app-character",
  components:{
    THBSwitch,
    THBButton,
  },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>