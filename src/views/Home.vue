<template>
  <div>
    <div class="landing-page">
      <div class="svg-contaier">
        <div class="custom-shape-divider-top-1648241238">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div class="title-wrapper">
        <h1 id="main" class="main">CUBEC.</h1>
        <h2>Innovational hexahedron calculator</h2>
        <!--  :D  -->
      </div>
    </div>
    <GeometryPage />
  </div>
</template>

<script>
//@ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import GeometryPage from "@/components/geometryPage.vue";

export default {
  name: "Home",
  components: {
    GeometryPage,
  },
};
</script>

<style lang="scss">
.landing-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191b1e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='222' height='222' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23303235' fill-opacity='0.69'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.svg-container {
  position: relative;
}

.title-wrapper {
  opacity: 0;
  text-align: center;
  position: relative;
  letter-spacing: 10px;
  transform: translateY(100%);
  animation: slideTitleUp 0.6s 0.4s forwards ease;
}

.landing-page h1 {
  font-weight: bolder;
  font-size: 15vh;
  color: #f76236;
}

.landing-page h2 {
  font-weight: bolder;
  font-size: 5vh;
}

.custom-shape-divider-top-1648241238 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1648241238 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100vh;
}

.custom-shape-divider-top-1648241238 .shape-fill {
  fill: #191b1e;
}

@keyframes slideTitleUp {
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

//info: https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
@media screen and (max-width: 991px) {
  /* start of large tablet styles */
  // Seems OK right now
}

@media screen and (max-width: 767px) {
  /* start of medium tablet styles */
  // Seems OK right now
}

@media screen and (max-width: 479px) {
  /* start of phone styles */
  .landing-page h1 {
    font-size: 65px;
  }
  .landing-page h2 {
    font-size: 25px;
  }
}
</style>
