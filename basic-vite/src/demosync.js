// console.log("nấu cơm");
// setTimeout(function(){
//     console.log("Rửa chén"); // delay
// },2000)
// console.log("Giặt quần áo");

const products = [
    {id : 1,name: "Product 1"},
    {id : 2,name: "Product 2"},
];
let a = 5;
function fetchData(callback,data) {
    setTimeout(function(){
        callback(data)
    },5000)
   
    // callback(5,6);
}
// function tinhTong(a,b) {
//     let c = a + b;
//     console.log("Tổng là " + c)
// }
// callback là dùng hàm truyền vào hàm 
function processData(data) {
    console.log('Data :', data)
}
fetchData(processData,products);
console.log("Ahihi");
// fetchData(tinhTong,products)