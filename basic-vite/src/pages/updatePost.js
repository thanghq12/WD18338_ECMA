import {router, useEffect, useState} from "../libs";

const UpdatePost = (id) =>{
    const [post,setPost] = useState({})
    useEffect(()=>{
        fetch("http://localhost:3001/posts/"+id)
        .then(response=>response.json())
        .then(data => setPost(data))
    },[])
    // useEffect(()=> {
    //     const addForm = document.querySelector("#add-form");
    //     const title = document.querySelector("#title");
    //     const views = document.querySelector("#views");
    //     addForm.addEventListener("submit",(e)=>{
    //         e.preventDefault(); // chặn sự kiện load lại trang 
    //         let newPost = {
    //             "title":  title.value,
    //             "views": views.value
    //         }
    //         fetch("http://localhost:3001/posts",{
    //             method:"POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newPost)
    //         }).then(()=> router.navigate("/contact"))
    //     })
    // })
    return `
        <div>
            <form action="" id="add-form">
                <input type="text" value="${post.title}" id="title"/>
                <input type="text" value="${post.views}" id="views"/>
                <button>Update New Button </button>
            </form>
        </div>
    `
}
export default UpdatePost;