<template>
  <div id="community-page">
    
    <tabs class="tabs" :tabs="['playground']" />

    <section id="banner">
      <div class="container">
        <img />
        <h1>{{ topics }}</h1>
        <h1>{{ tags }}</h1>
      </div>
    </section>

    <section id="community">
      <div class="community-filter">
        <ul class="community-filter-tag-list">
          <Tag
            v-for="(tag, index) in 4"
            :item="{ name: `${tag}-${index}` }"
            :key="index"
          />
        </ul>

        <div class="community-filter-sort"></div>
      </div>

      <ul class="community-post-list">
        <li v-for="index in 40" :key="index">
          <button class="button-c8" @click="onClick('c8')">
            {{ `${index}-C8` }}
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tag from "@/components/Tag.vue";

export default defineComponent({
  components: { Tag },
  methods: {
    onClick(id: string, params: any) {
      if (id == "c8") {
        this.$router.push("/post/12345");
      }
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  destroyed() {
    console.log("destroyed");
  },
  computed: {
    topics() {
      return this.$route.query.topics
        ? this.$route.query.topics instanceof Array
          ? this.$route.query.topics
          : [this.$route.query.topics]
        : ["popular"];
    },
    tags() {
      return this.$route.query.tags
        ? this.$route.query.tags instanceof Array
          ? this.$route.query.tags
          : [this.$route.query.tags]
        : [];
    },
  },
});
</script>

<style lang="scss" scoped>
#community-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .container{
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }

  #banner{
    width: 100%;
  }
}
</style>