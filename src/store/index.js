import { proxy } from "valtio";
("use strict");
const state = proxy({
  deviceType: "",
  currentTab: "dashboard",
  showContact: false,
  refreshData: "",
  userData: JSON.parse(localStorage.getItem('user')) || null,
  userId: localStorage.getItem("user_id") || null,
});

export default state;
