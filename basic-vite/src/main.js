// import Navigo from "navigo";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import PostDetail from "./pages/postDetail";
import {router,render} from "./libs";


// const render = (container,components) => {
//     document.querySelector(container).innerHTML = components();
// }

//mặc định định nghĩa route
// const router = new Navigo('/',{linksSelector :"a"});
//nếu route là /home điều hướng vìa homepage
const app = document.querySelector('#app');
router.on('/',function() {
    render(app,HomePage);
})

router.on('/contact',function(){
    render(app,ContactPage);
})
router.on('/detailpost/:id',function({ data }){
    render(app,()=> PostDetail(data.id));
})

router.resolve();
