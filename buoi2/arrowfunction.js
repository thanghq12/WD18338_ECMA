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
