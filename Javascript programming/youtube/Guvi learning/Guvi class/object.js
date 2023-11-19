var obj={
    username:"guvi",
    password:123,
    attendance:["mon","tue","wed"],
    gender:"male"
};
console.log(obj)
console.log(obj.username)
console.log(obj.attendance)
obj.address="chennai";
obj.address="bangalore"
obj.attendance[0]="thurs"; 
console.log(obj);
//another method
//objectname["keyname"]
console.log(obj["username"]);
obj["attendance"][1]="fri"
console.log(obj["atendance"]);
