//Detructuring dùng để trích xuất các giá trị từ cấu trúc dữ liệu 
// như một mạng hoặc một đối tượng gắn chúng vào các biến riêng lẻ
// Detructuring Array 
// Detructuring Object
let color = ['red','green','blue'];
// let firstColor = color[0];
// let secondColor = color[1];
// let thirdColor = color[2];

// 
let [firstColor,secondColor,thirdColor] = color;
console.log(`${firstColor} ${secondColor} ${thirdColor}`);

let info = ["Nguyễn Văn A",1996,"Trịnh văn bô","vana@gmail.com "];

// let [name,year,address,email] = info;
// info[0] ; info[1];info2[0]
//sử dụng detructing để tạo ra các biến riêng lẻ gán giá trị vào mảng
//sử dụng console log để hiển thị ra thông tin 
//detructring đối tượng 
let person = {name1:"Thang",age:30,address:"Trịnh văn bô "}

// let {name1:a,age:b,address:c} = person;

// console.log(`${a},${b},${c}`);

let student = {
    diemmonhoc :[
        {
            diemTB : 8,
            diemQuaTrinh : 9,
            diemThi : 9,
        }
    ]
}
let {
    diemmonhoc :[
        {
            diemTB :dtb,
            diemQuaTrinh:bb, 
            diemThi :cc,
        }
    ]
} = student
// sử dụng detructuring để biến diemTB,diemQuaTrinh,diemThi
// console.log(`${dtb},`);
let teacher = [
    {
        hoten : "Hoàng quang thắng",
        luong : 3000,
        namsinh : 1996,
        tinhtranghonnhan : 0, //0 thì là độc thân 1 là đã có vợ 
        monhoc : ["ECMA","PHP2"]
    },
    {
        hoten : "Vũ anh tú",
        luong : 6000,
        namsinh : 1993,//0 thì là độc thân 1 là đã có vợ 
        tinhtranghonnhan : 0,
        monhoc : ["ECMA","PHP2"]
    },
]
// thêm 3 giảng viên bất kì vào mảng danh sách trên 
// hiển thị ra thông tin của từng giảng viên trong danh sách 
// biết nếu GV nào > 30 tuổi mà tình trạn hôn nhân là độc thân thì
//hiển thị kèm thông tin là bất ổn 
// đếm xem có bao nhiêu giảng viên giảng dạy đc môn ECMA 
for (let {hoten,luong,namsinh,monhoc} of teacher) {
    console.log(`Tên : ${hoten}`);
}
