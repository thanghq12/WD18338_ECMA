import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import { posts,comments } from '../../db.json' assert {type:'json'}
const ContactPage = function() {
    return `
        ${HeaderComponent()}
        <h1>Đây là trang contact</h1>
        <table border=1>
            <tr>
                <th>id</th>
                <th>title</th>
            </tr>
            ${posts.map(function (post) {
               return `<tr>
                    <th>${post.id}</th>
                    <th>${post.title}</th>
                </tr>`
            })}
        </table>
        ${FooterComponent()}
    `
}
// tạo ra 1 trang đổ bảng comment
export default ContactPage;