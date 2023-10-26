import { proxy } from "valtio";
const state = proxy({
    deviceType : '',
    currentTab :"dashboard",
    refreshData:"",
    userData:{},
    
    

})


export default state;