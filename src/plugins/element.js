/*
 * @Author: cbw
 * @Date: 2020-08-01 19:30:34
 * @Description: file content
 */

import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Button,
  Select,
  FormItem,
  Form,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Submenu,
  Menu,
  MenuItemGroup,
  MenuItem
} from "element-ui";

// 导入弹框提示组件
import { Message } from "element-ui";

Vue.use(Button);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Select);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.prototype.$message = Message;
