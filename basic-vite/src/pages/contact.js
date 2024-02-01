import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import {router , useEffect , useState } from "../libs"
const ContactPage = function () {
    // const posts = []; 
    // state 
    const [posts,setPost] = useState([]); // đang khởi tạo post = []

    // setPost([1,2,4,5]);
    //useEffect(callback,[deps])
    // đối số đầu tiên là hàm call back do chúng ta tự tạo bắt
    // buộc phải có 
    //depentcies (Không bắt buộc)
    //1 . useEffect(callback)
    //- callback được gọi mỗi khi compent re-render
    //2 . useEffect(callback,[]) // callback chỉ được gọi khi component reder lần đầu
    //3 . useEffect(callback,[deps]) // callback được gọi theo deps khi thay đổi
        useEffect(()=>{
            //gọi api trong đây 
            fetch("http://localhost:3001/posts")
            .then((response) => response.json())
            .then((data) =>  setPost(data))
           
        },[])

        useEffect(()=> {
            const btnDeletes = document.querySelectorAll(".btn-delete") 
            for(let btn of btnDeletes) {
                btn.addEventListener("click",()=>{
                    let id = btn.dataset.id  //lấy ra id người dùng kích vào để xóa 
                    fetch(`http://localhost:3001/posts/${id}`,{
                        method:"DELETE"
                    }).then(()=>router.navigate("/contact"))
                })
            }
        })
    // console.log(posts);
    return `
        ${HeaderComponent()}
        <h1>Trang bài post </h1>
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
            <td>
                <a href="/detailpost/${post.id}">Xem</a>
                <a href="/update-post/${post.id}">Update</a>
                <button data-id="${post.id}" class="btn-delete"> Delete</button>
            </td>

        </tr>`
        })}
    </table>
        ${FooterComponent()}
    `
}
export default ContactPage;