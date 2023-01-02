<template>
  <div>
    PointPage {{ username }}
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    username:{
      type:String,
      default:()=>"Fuxx"
    }
  }
});
</script>
