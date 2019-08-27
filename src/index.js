// import NiceHandsomeButton from "./NiceHandsomeButton.vue";
import SafaGridView from "./SafaGridView.vue";
import Sth from "./Sth.vue";

export default {
    install(Vue, options) {
        Vue.component("safa-grid-view", SafaGridView);
        Vue.component("sth", Sth);
    }
};