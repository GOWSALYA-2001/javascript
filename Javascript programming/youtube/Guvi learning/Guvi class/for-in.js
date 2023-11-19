var obj={
    username:"guvi",
    password:123,
    attendance:["mon","tue","wed"],
    gender:"male"
};
//for in one way loop to print the objects.....
//for(variable in objectname){
    //printing
//}
obj.address="chennai";
//for-in
for(var key in obj){
    console.log(key,obj[key]);
}
//do you want concatenate
for(var key in obj){
    console.log(key+"-"+obj[key]);
}
