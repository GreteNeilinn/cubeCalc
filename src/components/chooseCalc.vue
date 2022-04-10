<template>
  <div id="chooseCalc">
    <div class="calc-selection">
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
  </div>
</template>

<script>
import "@/assets/cubeJS.js";
export default {
  name: "ChooseCalc",
  methods: {
    toArea() {
      this.$emit("clicked", "Area");
    },
    toVolume() {
      this.$emit("clicked", "Volume");
    },
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
@media screen and (max-width: 392px) {
  .calc-selection {
    display: flex;
    align-items: center;
  }
  /* start of phone styles */
}

@media screen and (min-width: 480px) {
  #secondBtn {
    margin-left: 0px;
  }
}

@media screen and (min-width: 992px) {
  #secondBtn {
    margin: 10px;
  }
}
</style>