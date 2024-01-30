import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import { posts,comments } from '../../db.json' 
const ContactPage = function() {
    return `
        ${HeaderComponent()}
        <h1>Đây là trang contact</h1>
        <table border=1>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>hành động</th>
            </tr>
            ${posts.map(function (post) {
               return `<tr>
                    <th>${post.id}</th>
                    <th>${post.title}</th>
                    <th><a href="/detailpost/${post.id}">xem</a></th>
                </tr>`
            })}
        </table>
        <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
        ${FooterComponent()}
    `
}
// tạo ra 1 trang đổ bảng comment
export default ContactPage;