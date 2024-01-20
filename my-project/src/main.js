
import Navigo from "navigo";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
// xây dựng hàm reder component ra html 

const render = (container,component) => {
    document.querySelector(container).innerHTML = component();
}
// gán component HomePage vào div app 
// dòng này mặc định khai báo như thế này 
const router = new Navigo('/', {linksSelector:"a"});
// định nghĩa router cho từng page 
router.on('/home',function () {
    render('#app',HomePage);
})
router.on('/contact',function() {
    render('#app',ContactPage);
})
router.resolve();

// HomePage();
// navigo // sử dụng npm để cài navigo 
// mở terminal gõ lệnh npm i navigo