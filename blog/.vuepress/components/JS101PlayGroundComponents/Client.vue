<template>
  <div class="wrapper">
    <div class="example-wrapper">
      <div class="margin-color">
        <div
          class="example padding-color border"
          ref="example"
          :style="{
            borderWidth: this.border + 'px',
          }"
        >
          <div class="example-content" :style="styles">
            <!-- tags -->
            <div class="tags">
              <div class="tag tag-width" v-show="width">{{ width }}</div>
              <div class="tag tag-height" v-show="height">{{ height }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text">border-width: {{ border }}</div>
    <div class="text">margin: 10</div>
    <div class="text">padding: 14</div>
    <div class="text">clientHeight: {{ clientHeight }}</div>
    <div class="text">clientWidth: {{ clientWidth }}</div>
    <div class="text">clientTop: {{ clientTop }}</div>
    <div class="text">clientLeft: {{ clientLeft }}</div>
    <hr />
    <div class="text">
      内容高度 Height: {{ height }}
      <el-slider
        v-model="height"
        :step="10"
        show-stops
        input-size="mini"
        :show-tooltip="false"
      ></el-slider>
    </div>
    <div class="text">
      内容宽度 Width: {{ width }}
      <el-slider
        v-model="width"
        :step="10"
        show-stops
        input-size="mini"
        :show-tooltip="false"
      ></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {
      height: 100,
      width: 100,
      border: 4,
      //
      dom: undefined,
      // renderData
      clientHeight: 0,
      clientWidth: 0,
      clientTop: 0,
      clientLeft: 0,
    };
  },
  mounted() {
    this.dom = this.$refs.example;
    this.setData();
  },
  watch: {
    watchList() {
      this.setData();
    },
  },
  computed: {
    styles() {
      return {
        height: this.height + "px",
        width: this.width + "px",
      };
    },
    watchList() {
      const a = [this.height, this.width];
      return a;
    },
  },
  methods: {
    setData() {
      this.$nextTick(() => {
        if (!this.dom) return;
        const d = this.dom;
        this.clientHeight = d.clientHeight;
        this.clientWidth = d.clientWidth;
        this.clientTop = d.clientTop;
        this.clientLeft = d.clientLeft;
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  background: whitesmoke;
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.example-wrapper {
  height: 160px;
  width: 100%;
  box-sizing: border-box;
}
.example-content {
  background: darkgray;
  position: relative;
}
.margin-color {
  background: lightgoldenrodyellow;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.padding-color {
  background: lightskyblue;
  padding: 14px;
}
.example {
  position: relative;
  margin: 10px;
}
.border {
  border: slategray solid;
}
.tag {
  position: absolute;
  font-size: 10px;
  color: white;
}
.tag-width {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.tag-height {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.tag-border-top {
  left: 50%;
  transform: translateX(-50%);
}
.tag-border-left {
  top: 50%;
  transform: translateY(-50%);
}
.text {
  font-size: 12px;
}
</style>
