import { proxy } from "valtio";
const state = proxy({
    deviceType : '',
    currentTab :"dashboard",
    showContact:false
    
    

})


export default state;