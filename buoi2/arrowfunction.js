// function tinhDienTich() {

// }
// sử dụng arrow function có trả về 
const add = (a,b) => {
    return a+b
}
//nếu chỉ có 1 biểu thức chúng ra có thể viể gọn lại
const add1  = (a,b) => a + b;
console.log(add1(5,6));

const tinhDienTich = (...hcn) => {
    for(let {cr,cd} of hcn) {
        console.log(`diện tích hcn là ${cr*cd}`);
    }
}
tinhDienTich({cr:5,cd:6},{cr:7,cd:8});//eeeee
tinhDienTich({cr:5,cd:6},{cr:7,cd:8});
//33333 ffffffff
// sử dụng arrow function xây dựng 1 hàm tính lương của nhiều giảng viên
//biết {ten:"nguyenvan","luongF","soGioDay"}
// nếu soGioDay >= 440 h 
//luong tính bằng (440 * luongF) + (soGioday - 440)/2 * luongF leuleu
// nếu soGioDay <440h
//luong itnhs bằng soGioDay * luongF

// viết hàm xong chạy đc luôn 
const add3 = ((b,c) => {
    return b + c
})(4,5);
console.log(add3)
//giới thiệu số hàm có sẵn sử dụng arrow function 
// hàm map() được sử dunjg để tạo ra 1 mảng mới bằng cách ánh xạ
// qua tất cả các phần tử của 1 mảng và áp dụng cho 1 hàm cho từng phần từ đó
const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.map((num) => num * 2);
console.log(newNumbers);
// tạo 1 mảng mới để lưu diện tích của các hình chữ nhật trên
console.log(1233);
// bài 2 
const stringNumber = ["1","2","3","4","5"];
//chuyển đổi mảng chuỗi số thành 1  mảng số nguyên mới 
//bài 3
const user = [{id:1,name:"Huy"},{id:2,name:"Hoàng"}];
// tạo 1 mảng mới chỉ chứa tên trong danh sách trên
// mảng mới là ["huy","hoàng"]
//bài 4 
const students = [{id:1,name:"A",diemtoan:7,diemly:8,diemhoa:9}
            ,{id:1,name:"B",diemtoan:7,diemly:8,diemhoa:9}]
const newStudent =students.map((student)=>{
    return {
        id :student.id,
        name :student.name,
        diemTB: (student.diemtoan + student.diemly + student.diemhoa)/3
    }
}) 
// tạo ra 1 mảng danh sách chỉ có id ,name,diemtb = (diemtoan+diemly+hoa)/3           
// console.log(newStudent);

// filter dùng để tạo ra 1 mảng mới theo điều kiện 
let numbers1 = [1,2,3,4,5,6];
// tạo ra 1 mảng số chẵn 
let evenNumbers = numbers1.filter((num)=> num % 2 === 0)
console.log(evenNumbers);
//reduce() hàm reduce được sử dụng để tính tổng hoặc thực hiện
// một phép tính tổng quát trên một mảng 
let numbers2 = [1,2,3,4,5,6];
let sum = numbers2.reduce((total,num) => total + num );
// console.log(sum);
let students2 = [{id:5,name:"huy",tuoi:6},{id:6,name:"quang",tuoi:7}];
let sumAge = students2.reduce((total,student)=> total + student.tuoi,0)
console.log(sumAge);
// tính tổng tuổi của list students2 
// hiển thị nhưng sinh viên có tuổi lớn hơn 10