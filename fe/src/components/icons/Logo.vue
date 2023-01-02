<template>
  <div :style="iconStyle" id="icon-logo" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g :fill="realFillColor" fill-rule="nonzero">
        <path
          d="M13.07.875h7.89c.508 0 .92.411.92.918V9.14a.919.919 0 0 1-.92.918H13.61a.919.919 0 0 0-.92.918v7.884a.918.918 0 0 1-.268.65l-7.352 7.346a.92.92 0 0 1-1.569-.65V10.439c0-.243.097-.477.27-.65l8.65-8.644a.92.92 0 0 1 .65-.269zM19.892 14.864c-.768 1.091-1.392 1.877-1.872 2.356-.48.48-1.266 1.103-2.359 1.87a.184.184 0 0 0 0 .301c1.092.766 1.878 1.39 2.359 1.87.481.48 1.105 1.266 1.871 2.356a.184.184 0 0 0 .301 0c.767-1.09 1.39-1.876 1.872-2.356.48-.48 1.267-1.104 2.358-1.87a.184.184 0 0 0 0-.3c-1.092-.767-1.878-1.39-2.358-1.87-.481-.481-1.105-1.266-1.872-2.357a.184.184 0 0 0-.3 0z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    fillColor: {
      type: String,
      default: "currentColor",
    },
    hoverColor: {
      type: String,
      default: "currentColor",
    },
    strokeColor: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
  },
  methods: {
    onClick() {},
    onMouseOver() {
      this.isHover = true;
    },
    onMouseLeave(){
      this.isHover = false;
    }
  },
  data(){
    return {
      isHover:false
    }
  },
  computed: {
    iconStyle() {
      const { width, height } = this;
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    },
    realFillColor(){
      return this.isHover ? this.$props.hoverColor : this.$props.fillColor;
    }
  },
};
</script>
<style lang="scss" scoped>
#icon-logo {
  * {
    transition: all 1s;
  }
}
</style>