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
tinhDienTich({cr:5,cd:6},{cr:7,cd:8});
