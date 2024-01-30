//==== PROMISE ===
//1 .Promise là 1 đối tượng thể hiện kết quả tác vụ 
// bất đồng bộ trong lai 
//2. Kết quả promise trả về có thể là
//- Thành công (fullfill)
//- Thất bại (reject)
//- chưa hoàn thành (Đang chờ) (pending)
const products = [
    {id:1, name:"Product 1"},
    {id:2, name:"Product 2"},
]
// sử dụng cho việc gọi api 
const promise = new Promise(
    function(resolve,reject) {
        setTimeout(function() {
         resolve(products); // promise trả về sẽ là thành công
        // reject("Có lỗi xảy ra");
        },5000)
    }
);
promise.then((data) =>{
    console.log(data +"Đây là data")
})
console.log(promise);
console.log("Hoàn thành");
// sử dụng promise hoặc callback 
// thực hiện
 //load data ra 1 trang 
 //tin tức (data tintuc tự tạo trong db.json)
 //yêu cầu giả lập data load xuống bị chậm trong 10 s 