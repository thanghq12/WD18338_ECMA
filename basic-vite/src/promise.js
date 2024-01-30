// Promise là gì
// 1.Promise là 1 đối tượng thể hiện kết quả tác vụ bất đồng bộ 
// trong tương lai 
// 2. Kết quả trả về có thể là 
//-thành công (fullfill)
//-thất bại (reject)
//-chưa hoàn thành (Pendinggg)
const products = [
    {id:1,name: "Product 1"},
    {id:2,name: "Product 2"}
]
const promise = new Promise(
    function (resolve ,reject) {
            // resolve - > thanhf coong
            // setTimeout(function(){
                resolve(products);
            // },5000)
           
            // reject("co loi xay ra");
    }
); 

promise.then((data)=>{
    setTimeout(function(){
     console.log(data);
    },5000)
}).then((data2)=>{
    console.log(123)
}) 
console.log(promise);

//sử dụng promise hoặc call để call data từ file db.json 
// và đổ dữ liệu ra html 
// giả thiết data bị delay 5s 
