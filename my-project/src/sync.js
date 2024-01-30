console.log("Nấu cơm");
setTimeout(function(){
    console.log("Rửa bát");
},10000)

console.log("Quét nhà");
console.log("Giặt quần áo");
// callback là hình thức truyền hàm vào hàm 
const producs = [
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
]
function fetchData(callback,data) {
    //giả sử callback(data); lấy dữ liệu từ trên server trả về 
    //giả sử trường hợp bên server có vấn đề chưa trả về dữ liệu
    setTimeout(function(){
        callback(data); // khi truyền hàm vào hàm thì đối số 
    },10000)
    
    //callback phải sử dụng như 1 hàm và có đối số tương ứng như
    //hàm muốn truyền 
    // callback(5,6)
}
function tinhTong(a,b) {
    const c = a + b;
    console.log("Tổng là" + c);
}
function processData(data) {
    console.log("Data: ", data);
}
//truyền giá trị vào hàm 
// processData(producs);
fetchData(processData,producs); //truyền hàm vào hàm 
console.log("Hoàn thành");