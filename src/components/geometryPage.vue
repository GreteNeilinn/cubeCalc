<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1> 
  </div> -->

  <div class="container-md">
    <div class="row align-items-center">
      <div class="col-sm">
        <h2>CUBE</h2>
        <Area />
      </div>
      <div class="col-sm" id="cube">
        <canvas class="webgl"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Area from "@/components/area.vue";
import "@/assets/cubeJS.js";
export default {
  name: "geometryPage",
  components: {
    Area,
  },
  //   props: {
  //     msg: String,
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: block;
}

h2 {
  color: #f76236;
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
@media screen and (max-width: 768px) {
  /* start of phone styles */
  .webgl {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    display: block;
  }
}
</style>