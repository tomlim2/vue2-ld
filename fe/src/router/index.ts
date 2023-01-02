import Vue from "vue";
import VueRouter from "vue-router";

import CommunityLayout from "@/layouts/CommunityLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Pages
import CommunityPage from "@/pages/CommunityPage.vue";
import UserPage from "@/pages/UserPage.vue";
import ProfilePage from "@/pages/user/ProfilePage.vue";
import PointPage from "@/pages/user/PointPage.vue";
import ActivityHistoryPage from "@/pages/user/ActivityHistoryPage.vue";
import DocsPage from "@/pages/DocsPage.vue";
import WidgetPage from "@/pages/WidgetPage.vue";
import TradePage from "@/pages/TradePage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/widget",
      name: "Widget",
      component: CommunityLayout,
      children: [
        {
          path: "",
          name: "WidgetPage",
          component: WidgetPage
        }
      ]
    },
    {
      path: "/trade",
      name: "Trade",
      component: CommunityLayout,
      children: [
        {
          path: "",
          name: "TradePage",
          component: TradePage
        }
      ]
    },
    {
      path: "/docs",
      name: "Docs",
      component: DefaultLayout,
      children: [
        {
          path: ":kindOfDocs",
          name: "Docs/kindOfDocs",
          props: true,
          component: DocsPage
        }
      ]
    },
    {
      path: "/user/:username",
      name: "UserPageByUsername",
      props: true,
      component: UserPage,
      redirect: (to) => `/user/${to.params.username}/profile`,
      children: [
        {
          path: "profile",
          props: true,
          name: "UserProfilePage",
          component: ProfilePage
        },
        {
          path: "point",
          props: true,
          name: "UserPointPage",
          component: PointPage
        },
        {
          path: "history",
          props: true,
          name: "UserActivityHistoryPage",
          component: ActivityHistoryPage
        }
      ]
    },
    {
      path: "/",
      name: "Main",
      component: CommunityLayout,
      children: [
        {
          path: "/editor",
          name: "CommunityPostEditorPage/Create",
          props: true,
          component: CommunityPage,
        },
        {
          path: "/editor/:postId",
          name: "CommunityPostEditorPage/Edit",
          props: true,
          component: CommunityPage,
        },
        {
          path: "/post/:postId",
          name: "CommunityPostPage",
          props: true,
          component: CommunityPage,
        },
        {
          path: "/post",
          name: "CommunityPostPage",
          props: true,
          redirect: () => "/"
        },
        {
          path: "/",
          name: "CommunityPage",
          props: true,
          component: CommunityPage,
        },
      ]
    },
  ],
});

export default router;
