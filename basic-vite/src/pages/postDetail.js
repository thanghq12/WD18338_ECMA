import data from '../../db.json';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';

const PostDetail = function(id) {
    const post = data.posts.find((item)=> item.id == id)
    return `
        ${HeaderComponent()}
        <div>
            ID : ${post.id}
            Tiêu đề : ${post.title}
        </div>
        ${FooterComponent()}
    `
}
export default PostDetail;
