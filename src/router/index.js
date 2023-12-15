// Composables
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/pages/dashboard/Dashboard.vue";
import Template0 from "../components/pages/template/template0.vue";
import CreateResume from "../components/pages/resume/CreateResume.vue";
import TemplateForResume2 from "../components/pages/template/templateForResume2.vue";
import TemplateForResume3 from "../components/pages/template/templateForResume3.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard, name: "dashboard" },
<<<<<<< HEAD
  { path: "/template", component: Template0, name: "template" },
  { path: "/resume", component: CreateResume, name: "resume" },
  { path: "/template2", component: Template2, name: "template2" },
  { path: "/Template3", component: Template3, name: "Template3" },
=======
  // { path: "/template", component: Template0, name: "template" },
  // { path: "/resume", component: CreateResume, name: "resume" },
  // { path: "/template2", component: TemplateForResume2, name: "template2" },
  // { path: "/Template3", component: TemplateForResume3, name: "Template3" },
>>>>>>> 000516ae1098538e04e362a60d493b924e17a6ff
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
