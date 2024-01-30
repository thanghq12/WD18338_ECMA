import data from '../../db.json'
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
const PostDetail = function(id) {
    //trả ra 1 object theo id đã truyền vào 
    const post = data.posts.find((item) => item.id == id);
    //trả về 1 object theo 1 điều kiện nào đó
    return `
        ${HeaderComponent()}
        <div>
            ID : ${post.id}
            Title : ${post.title}
        </div>
        ${FooterComponent()}
    ` 
}
export default PostDetail;