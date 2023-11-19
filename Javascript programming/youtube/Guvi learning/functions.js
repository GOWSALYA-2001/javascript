function mul(a,b,console){
    return a*b*c;
    //100 lines console.log it doesnot execute before give return
    console.log("hello")
 }
 console.log(mul(12,13,98));


 function mul(a,b){
    console.log(a*b);
    //100 lines console.log it doesnot execute before give return
    console.log("hello")
 }
 console.log(mul(12,13));

 function mul(a,b){
    return a*b*c;
    //100 lines console.log it doesnot execute before give return
    
 }
 var a=parseInt(userInput[0]);
 var b=parseInt(userInput[1]);
 console.log(mul(a,b));

 function add(a,b){
    return a+b;
    //100 lines console.log it doesnot execute before give return
    
 }
 
 console.log(add(10,10));

 //anonymoys,IIFE
var compute=function(){
    return "hello guvi";
}
console.log(compute());

var compute=function(a,b){
    return a*b;
}
console.log(compute(12,13));

//anonymoys,IIFE
var arr=[1,2,3,4];
var compute=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
}
compute(arr);

//IIFE
var arr=[1,2,3,4];
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
})(arr);

//es6->arrow functions
//single line
var res=()=>"hello world";
//multiple line means
var res=()=>{
    var res=20;
    return "hello world";
}
console.log(res());
//passing the parameter
var res=(a,b)=>a*b;
console.log(res(12,13));

//anonymoys function
var res=function(s){
    return "hello"+s;
}
console.log(res("guvi"));
//arrow function---using concatenation
var res=(s)=>"hello"+s
console.log(res("guvi"));

//IIFE
(function(){
    console.log("hello")
})();
(function(a,b){
    console.log(a*b);
})(12,13)
