// var a = 9;
// // let a = 10;
// if(1<2) {
//     let a = 10;
// }
// console.log(a);
//var, let ,const

//template string  
// let a = 5;
// let str = "đây là số " + a + "sjdsjsjs";
// let name = "thanghq12";
// let year = 1996;
// let message = `Xin chào, tôi là ${name}        

//                    tôi năm nay ${2023 - year} tuổi`; 
// console.log(message);

// khai báo  biến tên, năm sinh ,giới tính 0 nam 1 nữ,địa chỉ 
// - tính tuổi = năm hiện tại - năm sinh (get current year in js)
// - hiển thị ra đoạn text báo 
// ông/bà nguyễn văn a 27 tuổi có/không đủ tuổi đi NVQS
// ông/bà phụ thuộc vào giới tính 
//nguyễn văn a phụ thuộc vào biến tên 
// tuổi phụ thuộc vào biến sau khi đã tính tuổi 
// biết tuổi đi NVQS nằm trong khoảng từ >=18 <=27 
// let ten = "Hoàng Quang Thắng ";
// let gioiTinh = 0;
// let namSinh = 1996;
// let tuoi = new Date().getFullYear() - namSinh;
// let checkDK = tuoi >= 18 && tuoi <= 27 ? "Đủ đk" : "Ko đủ đk";
// let checkGT = gioiTinh == 0 ? "Ông" : "Bà";
// let msg = `${checkGT} ${ten} ${tuoi} tuổi  ${checkDK} NVQS`;
// console.log(msg);
//----- Array -----
let arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    
}
// hiển thị các phần từ trong mảng là số chẵn 
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
let students = [
    {
    id:3,
    name:"Nguyen van a",
    age: 19
    },
    {
    id:4,
    name:"Hoàng quang thắng",
    age: 27
    }
]

for(let i = 0 ; i < students.length ; i ++) {
    console.log(students[i].name);
}
// duyệt bằng for of 
for(let item of students) {
    console.log(item.name);
}

// console.log(student[1].name);