let days1 = ["monday","tuesday","wed"];
let days2 = ["thusday","friday","saturday","sunday"];
//es5
// let days = days1.concat(days2);
// console.log(days);
//es6 
let days = [...days1,...days2];
console.log(days);
//... spreed array là 1 tính năng cho phép rải rác các phần tử của 
// một mảng vào vị trí khác hoặc sao chép các phần tử của một mảng 
//vào một mảng mới ký hiệu là ... (ba chấm)

let days1Cop = [...days1,"A","B","C"];
console.log(days1Cop);
//
function tich3so(a,b,c) {
    return a*b*c;
}
// tich3so(3,4,5);
//sử dụng spreed thì sẽ truyền được 1 mảng có các tham số tương ứng 
let  numbers = [1,2,3];
console.log(tich3so(...numbers));
// 
let arrTeacherPoly = [
    {
       
        name : "Hoang Quang Thang",
        birth : 1996,
        team : 1 // 1 web 
    },
    {
       
        name : "Vu anh tu",
        birth : 1993,
        team : 1 // 1 web 
    },
    {
       
        name : "dang thai son",
        birth : 1993,
        team : 2 // 2 mobile 
    },
];
// tạo ra 2 array object là teacherWeb và teacherMobile có sẵn 
// 3 gv . 
// kiểm tra trong arrTeacherPoly nếu team = 1 nhét vào teacherWeb
// team = 2 nhét vào teacherMobile
let arrTeacherIntern = [
    {
       
        name : "Le van hien",
        birth : 2000,
        score : 5
    },
    {
       
        name : "Nguyen chi hieu ",
        birth : 1993,
        score: 8
    },
    {
       
        name : "Nguyen chi hieu 1",
        birth : 1993,
        score: 9
    },
]

for( let {name,birth,score} of arrTeacherIntern) {
    if(score > 5) {
        arrTeacherPoly = [...arrTeacherPoly,{name,birth}]
    }
}
console.log(arrTeacherPoly);
// kiem tra trong array object arrTeacherIntern neu gv nao co diem >5 
// thi se them vao trong arrTeacherPoly

// REST SPREED PARAMETER
// khi truyền vào 1 hàm và không xác định được trước đối số 
function restTest(...args) {
    console.log(args);
}
restTest(1,"rr",{id:1},4,5,6,7);
