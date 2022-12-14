<template>
  <div class="page-widget">
    <SectionWidget/>
  </div>
</template>
<script lang="ts">
import SectionWidget from "../sections/widget/SectionWidget.vue";

export default {
  name: "page-widget",
  display: "Page Widget",
  order: 1,
  components: {
    SectionWidget
},
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function () {
      //@ts-ignore
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      //@ts-ignore
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el: any) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function (evt: any) {
      window.console.log(evt);
    }
  }
};
</script>

<style>
</style>