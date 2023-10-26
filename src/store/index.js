import { proxy } from "valtio";
const state = proxy({
    deviceType : '',
    currentTab :"dashboard",
    showContact:false
    refreshData:"",
    userData:{},
    
    

})


export default state;