import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import { posts } from '../../db.json'
const HomePage = function () {
    console.log(posts); // post là 1 mảng dataobject 
    return `
        ${HeaderComponent()}
        
        <h1>Trang chủ</h1>
        <table border="1">
            <tr>
                <td>id</td>
                <td>title</td>
                <td>action</td>
            </tr>
            ${posts.map(function (post) {
             return `<tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td><a href="/detailpost/${post.id}">Xem</a></td>
            </tr>`
            })}
        </table>
        ${FooterComponent()}
    `
}
export default HomePage;