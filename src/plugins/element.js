import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import { Button, Select, FormItem, Form, Input } from "element-ui";

// 导入弹框提示组件
import { Message } from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.prototype.$message = Message;
