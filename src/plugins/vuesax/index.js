import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "boxicons/css/boxicons.min.css"; //Vuesax styles

const opts = {
  colors: {
    dark: "black",
  },
};

export default Vue.use(Vuesax, opts);
