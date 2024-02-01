import {router, useEffect} from "../libs";

const AddPost = () =>{
    useEffect(()=> {
        const addForm = document.querySelector("#add-form");
        const title = document.querySelector("#title");
        const views = document.querySelector("#views");
        addForm.addEventListener("submit",(e)=>{
            e.preventDefault(); // chặn sự kiện load lại trang 
            let newPost = {
                "title":  title.value,
                "views": views.value
            }
            fetch("http://localhost:3001/posts",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            }).then(()=> router.navigate("/contact"))
        })
    })
    return `
        <div>
            <form action="" id="add-form">
                <input type="text" id="title"/>
                <input type="text" id="views"/>
                <button>Add New Button </button>
            </form>
        </div>
    `
}
export default AddPost;