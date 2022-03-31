<template>
  <Slider :min="0" :max="10000" />
</template>

<script>
import Slider from "@vueform/slider";
export default {
  name: "SliderRange",
  data() {
    return {};
  },
  components: {
    Slider,
  },
  props: {},
};
</script>

<style>
.slider-target {
  position: relative;
}

.slider-horizontal {
  height: 6px;
  margin: 46px 0 15px 0;
}

.slider-base,
.slider-connects {
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
}

.slider-base,
.slider-connects {
  border-radius: 10px;
  background-color: #d1d5db;
}

.slider-base {
  background-color: #d1d5db;
}

.slider-base,
.slider-connects {
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
}

.slider-connects {
  overflow: hidden;
  z-index: 0;
}

.slider-connect {
  background: #cb7d49;
  cursor: pointer;
}

.slider-connect,
.slider-origin {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-style: flat;
  width: 100%;
  will-change: transform;
  z-index: 1;
}

.slider-horizontal .slider-handle {
  height: 16px;
  right: calc(16px / 2 * -1);
  top: calc(16px / 2 * -1 - 6px / 2 * -1 + -1px);
  width: 16px;
}

.slider-handle {
  background: var(--slider-handle-bg, #fff);
  border: var(--slider-handle-border, 0);
  border-radius: var(--slider-handle-radius, 9999px);
  box-shadow: var(
    --slider-handle-shadow,
    0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32)
  );
  cursor: -webkit-grab;
  cursor: grab;
  height: var(--slider-handle-height, 16px);
  width: var(--slider-handle-width, 16px);
}

.slider-handle {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}

.slider-horizontal .slider-origin {
  height: 0;
}
.slider-connect,
.slider-origin {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-style: flat;
  width: 100%;
  will-change: transform;
  z-index: 1;
}
.slider-touch-area {
  height: 100%;
  width: 100%;
}
.slider-horizontal .slider-tooltip-top {
  bottom: calc(
    var(--slider-handle-height, 16px) + var(--slider-tooltip-arrow-size, 5px) +
      var(--slider-tooltip-distance, 3px)
  );
  left: 50%;
  transform: translate(-50%);
}

.slider-tooltip {
  background: var(--slider-tooltip-bg, #cb7d49);
  border: 1px solid var(--slider-tooltip-bg, #cb7d49);
  border-radius: var(--slider-tooltip-radius, 5px);
  color: var(--slider-tooltip-color, #fff);
  display: block;
  font-size: var(--slider-tooltip-font-size, 0.875rem);
  font-weight: var(--slider-tooltip-font-weight, 600);
  line-height: var(--slider-tooltip-line-height, 1.25rem);
  min-width: var(--slider-tooltip-min-width, 20px);
  padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
  position: absolute;
  text-align: center;
  white-space: nowrap;
}
</style>>
