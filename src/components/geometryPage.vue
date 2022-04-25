<template>
  <div class="container-md">
    <div class="row align-items-center">
      <div class="col-sm fade-in cube">
        <h2 class="geo-title">CUBE</h2>
        <component :is="activeTab" @clicked="onClickChild" />
      </div>
      <div class="col-sm fade-in" id="cube">
        <canvas id="webgl" class="webgl"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import ChooseCalc from "@/components/chooseCalc.vue";
import Area from "@/components/area.vue";
import Volume from "@/components/volume.vue";
import "@/assets/cubeJS.js";
export default {
  name: "geometryPage",
  components: {
    ChooseCalc,
    Area,
    Volume,
  },
  methods: {
    onClickChild(value) {
      this.activeTab = value;
    },
  },
  data() {
    return {
      activeTab: "ChooseCalc",
    };
  },
  setup() {
    onMounted(() => {
      const faders = document.querySelectorAll(".fade-in");
      const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -50px 0px",
      };
      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      faders.forEach((fader) => {
        appearOnScroll.observe(fader);
      });
    });
  },
};
</script>

<style scoped lang="scss">
.container {
  display: block;
  overflow: hidden;
}

.cube {
  padding: 0px 25px 0px;
}

h2 {
  color: #f76236;
  font-size: 35px;
}

.form {
  color: #eaeaea;
}

p {
  color: #eaeaea;
}

h3 {
  color: #eaeaea;
  font-size: 25px;
}

input {
  width: 40%;
  padding-left: 4px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
}

input:focus {
  border: 2px solid #f76236;
}

#submit {
  background-color: #f76236;
  color: #eaeaea;
  border: none;
  margin: 8px 0;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

#submit:hover {
  background-color: #f54510;
}

.row {
  height: 100vh;
}

//Related to scroll:

.fade-in {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease-in;
}

.fade-in.appear {
  transform: scale(1);
  opacity: 1;
}

@media screen and (max-width: 768px) {
  /* start of phone styles */
  .webgl {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media screen and (max-width: 479px) {
  /* start of phone styles */
  .cube {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>