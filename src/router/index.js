// Composables
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/pages/dashboard/Dashboard.vue";
import Template from "../components/pages/template/template.vue";
import CreateResume from "../components/pages/resume/CreateResume.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard, name: "dashboard" },
  { path: "/template", component: Template, name: "template" },
  { path: "/resume", component: CreateResume, name: "resume" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
