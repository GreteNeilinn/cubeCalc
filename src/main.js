import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(store).use(router).mount("#app");

// const animatedScrollObserver = new IntersectionObserver(
//     (entries, animatedScrollObserver) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('enter');
//                 animatedScrollObserver.unobserve(entry.target);
//             }
//         })
//     }
// )

// app.directive('scroll-reveal', {
//     beforeMount: (el, binding) => {
//         el.classList.add('before-enter');
//         animatedScrollObserver.observe(el);
//     }
// });