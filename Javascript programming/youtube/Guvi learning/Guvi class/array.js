var arr=[1,2,3,4,"hi",23.4567,true];
console.log(arr);
var arr=[1,2,3,4,"hi",23.4567,true];
var arr1=arr;
arr1[2]="hello everyone"
console.log(arr);
console.log(arr1);
var arr=[1,2,3];
arr[2]=6;
console.log(arr);
console.log(typeof(arr));
console.log(arr.length);
var arr=[1,2,3,4,"hi",23.4567,true];
arr[99]="guvi greek";
console.log(arr.length);
var arr=[1,2,3,4];
for(var i=0;i<arr.length;i++){
    console.log(arr[i])   
}

var arr=[1,2,3,4];
for(var i=0;i<arr.length;i++){
    console.log(arr.toString())   
}


var student={
    name:"ram",
    age:21,
    Dob:"02/01/2001",
    roll_num:231
};
student.attendance=["mon","tue","thur"];
//printing the name of the student
//objectname.propertyname
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.attendance[0]);
console.log(student.attendance);
console.log(student.attendance[0]);
console.log(student.attendance[1]);
console.log(student.attendance[2]);
//you cant print it three times as a programmer you can use loops
for(var i=0;i<student.attendance.length;i++){
    console.log(student.attendance[i]);
}
//I want to update thursday as wednesday?
student.attendance[2]="wed";
console.log(student.attendance);
//I want to update thursday as wednesday?
student.attendance[3]="fri";
console.log(student.attendance);
//without replacing anything how to add a array
student.attendance.splice(2,0,"wed");
console.log(student.attendance);
//i want to delete monday....mon is in index 0
//remove 1 element at the index position 0
student.attendance.splice (0,1);
console.log(student.attendance);
student.demo=["dance","singer","dance"];
student.demo.splice(2,2);
console.log(student.demo);


var student={
    name:"ram",
    age:21,
    Dob:"02/01/2001",
    roll_num:231
};
console.log(student["name"]);
for(var i in student){
    console.log(i+" "+student[i]);
}

var student={
    name:"ram",
    age:21,
    Dob:"02/01/2001",
    roll_num:231
};

for(var i in student){
    console.log(i);
    console.log(i+" "+student[i]);
}


