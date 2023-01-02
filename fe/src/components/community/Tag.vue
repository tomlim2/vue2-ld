<template>
  <li class="tag">
    <i class="tag-icon"></i>
    <span class="tag-name" :style="colorStyle">Name {{ item.name }}</span>
    <ul class="tag-badge-list">
      <li class="tag-badge-item">
        <img class="tag-badge-item-image" />
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Tag } from "@/types";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Tag>,
      default: () => ({ name: "Name", colorCode: "black" }),
      required: true,
    },
  },
  computed: {
    colorStyle(): Object {
      return { color: this.$props.item.colorCode ?? "#FF0000" };
    },
  },
});
</script>
