//class and object
class car{
    constructor(name,year,color){
        this.name=name;
        this.year=year;
        this.color=color;
    }
}
let r1=new car("audi",2019,"black");
let r2=new car("benz",2017,"yellow");
//let r2=r1;
//r2 and r1 pointing to same object r1
console.log(r1.name);
console.log(r1.year);
console.log(r1.color);
console.log(r2.name);
console.log(r2.year);
console.log(r2.color);


//class and object
class car{
    constructor(name,year,color,model){
        this.name=name;
        this.year=year;
        this.color=color;
        this.model=model;
    }
    //method
    getmodel(){
        return this.model;
    }
}
let r1=new car("audi",2019,"black","a6");
//update
r1.model="a7";
let modelno=r1.getmodel();
console.log(modelno);
