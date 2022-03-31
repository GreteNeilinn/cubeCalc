<template>
  <div>
    <p>
      Surface area of cube is the sum of areas of all the faces of cube, that
      covers it. The area of one face of the cube = (side<sup>2</sup>).
      Therefore total Surface Area of a Cube = (6 × side<sup>2</sup>) square
      units. The formula is written as S = 6a<sup>2</sup>
    </p>
    <h3>Calculate area</h3>
    <form class="form" v-on:submit="calculateArea">
      <label for="sideA">Side length a:</label><br />
      <input type="text" id="sideA" name="sideA" /><br />
      <button id="submit" type="submit">Calculate</button>
    </form>
    <p>Solution: <span id="outputArea"></span></p>
  </div>
</template>


<script>
export default {
  name: "area",
  methods: {
    calculateArea(e) {
      let a = document.getElementById("sideA").value * 6;
      document.getElementById("outputArea").innerHTML = a;
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  width: 40%;
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