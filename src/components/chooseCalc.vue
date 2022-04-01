<template>
  <div id="chooseCalc">
    <div v-if="showChoicesData">
      <button
        id="firstBtn"
        class="btn btn-primary btn-lg btn-block"
        v-on:click="toArea"
      >
        Calculate area
      </button>
      <button
        id="secondBtn"
        class="btn btn-primary btn-lg btn-block"
        v-on:click="toVolume"
      >
        Calculate volume
      </button>
    </div>
    <Area v-if="showAreaData" />
    <Volume v-if="showVolumeData" />
  </div>
</template>

<script>
import Area from "@/components/area.vue";
import Volume from "@/components/volume.vue";
import "@/assets/cubeJS.js";
export default {
  name: "geometryPage",
  components: {
    Area,
    Volume,
  },
  methods: {
    toArea() {
      this.showAreaData = true;
      this.showChoicesData = false;
    },
    toVolume() {
      this.showVolumeData = true;
      this.showChoicesData = false;
    },
  },
  data: function () {
    return {
      showAreaData: false,
      showVolumeData: false,
      showChoicesData: true,
    };
  },
};
</script>

<style scoped lang="scss">
#firstBtn {
  margin-left: 0;
  margin-right: 10px;
}
#secondBtn {
  margin: 10px;
}
button {
  background-color: #191b1e;
  border-color: #f76236;
}
button:hover,
button:active,
button:focus {
  background-color: #f76236;
  border-color: #f76236;
  box-shadow: none;
}
</style>