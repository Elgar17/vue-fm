import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Image as VanImage } from 'vant';
Vue.use(VanImage);

import { Icon , Search, Divider} from 'vant';
Vue.use(Icon);
Vue.use(Search)
Vue.use(Divider)

import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);

import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

import { List } from 'vant';
Vue.use(List);


// grid 布局
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
