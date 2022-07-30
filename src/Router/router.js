import LayoutServices from "~/component/Layout/LayoutServices/LayoutServices";

export const publicComponent = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/service",
    title: "Policies",
  },
  {
    path: "/service",
    component: LayoutServices,
    title: "Order",
  },
  {
    path: "/service",
    component: LayoutServices,
    title: "Messenger",
  },
  {
    path: "/admin",
    component: LayoutServices,
    title: "ADMIN",
  },
];
