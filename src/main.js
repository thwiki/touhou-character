import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'

Vue.config.productionTip = false

// RLQ是MediaWiki保存异步执行函数的数组
if (process.env.NODE_ENV === 'production') {
  window.RLQ = window.RLQ || [];
  window.RLQ.push(() => {
    // 等待jQuery加载完毕
    var _count = 0;
    var _interval = setInterval(() => {
      _count++;
      if (typeof jQuery !== "undefined") {
        // jQuery加载完毕
        clearInterval(_interval);
        // 防止网站并不是MediaWiki时报错
        try {
          new Vue({
            render: h => h(App),
          }).$mount('.app-character');
        } catch (err) {
          console.error(err);
        }
      } else if (_count > 30 * 5) {
        // 加载超时
        clearInterval(_interval);
      }
    }, 200);
  });
}
else {
  new Vue({
    render: h => h(App),
  }).$mount('.app-character');
}