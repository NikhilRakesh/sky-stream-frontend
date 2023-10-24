import { proxy } from "valtio";
const state = proxy({
    deviceType : '',
    currentTab :"dashboard",
    
    

})


export default state;