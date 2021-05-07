// import Vue from 'vue'
import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";

import common from './common'
import signup from './signup'

const router = createRouter({
  scrollBehavior() {
    return ({x: 0, y: 0})
  },
  history: createWebHashHistory(),
  routes:common,
});
router.addRoute(signup)
//필요할 경우
let isAuthenticated = true// 권한여부 check
router.beforeEach(() => isAuthenticated);

export default router
