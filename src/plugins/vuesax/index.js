import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "boxicons/css/boxicons.min.css"; //Box Icons styles

const opts = {
  colors: {
    // primary: "rgb(255,105,180)",
    // background:"rgb(0.2, 0.2, 1)"
  },
};

export default Vue.use(Vuesax, opts);
