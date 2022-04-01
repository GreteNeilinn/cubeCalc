<template>
  <div>
    <div id="deleteOnChoose">
      <!-- <p id="back" v-on:click="goToChoose">&lt;- back</p> -->
      <p class="description">
        The volume of a cube can be found by multiplying the edge length three
        times. The formula to calculate the volume of a cube is given as, Volume
        of a cube = a<sup>3</sup>, where 'a' is the length of the side of the
        cube.
      </p>
      <h3>Calculate volume</h3>
      <form class="form" v-on:submit="calculateVolume">
        <label for="sideA">Side length a:</label><br />
        <input type="text" id="sideA" name="sideA" /><br />
        <button id="submit" type="submit">Calculate</button>
      </form>
      <p>Solution: <span id="outputArea"></span></p>
    </div>
  </div>
</template>


<script>
export default {
  name: "area",
  methods: {
    calculateVolume(e) {
      let a = document.getElementById("sideA").value;
      let solution = a ** 3;
      document.getElementById("outputArea").innerHTML = solution;
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// #back {
//   color: #f76236;
//   margin-bottom: 0;
//   cursor: pointer;
// }
// #back:hover {
//   color: #d53809;
// }
.form {
  color: #eaeaea;
}

.description {
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
</style>