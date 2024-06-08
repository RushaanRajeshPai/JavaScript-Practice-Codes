//Objects and Prototypes
const employee = {                              //object1
    calctax() {
        console.log("Tax Rate is 10%");
    }
};

const rushaanPai = {                            //object2
    salary : 50000000,
};

rushaanPai.__proto__ = employee; //Method : object2.__proto__ = object1

console.log(employee);

console.log(rushaanPai);
//type rushaanPai.calctax() on console window

const vidhiShah = {                             //object3
    salary : 6000000,
};
vidhiShah.__proto__ = employee;
console.log(vidhiShah);

const sejalYadav = {            //object4(with the same function inside it)
    salary : 7000000,
    calctax(){
        console.log("Tax rate is 20%");
    }
}
sejalYadav.__proto__ = employee;
console.log(sejalYadav);



//Class
class Toyotacar {             //Method : class Myclass {......}
    start(){
        console.log("Car starts");
    }

    stop(){
        console.log("Car stops");
    }

    setBrand(brand){
        this.brandName = brand;   //you can also write brandName as brand
    }
}

let innova = new Toyotacar();  //Method : let object = new Myclass;
//                                        new is the keyword here
console.log(innova.start());
console.log(innova.stop());  

innova.setBrand("Toyota Innova");
console.log(innova);



//Constructors
class Hondacar {
    constructor(name,mileage){
        this.name = name;
        this.mileage = mileage;
    }
}

let civic = new Hondacar("Civic", 15);
console.log(civic);



//Inheritance              
class Human {                       //class Parent{}
    constructor(){
        this.species = "Homo-sapiens";
    }               
    eat(){
        console.log("Eats");
    }
    
    sleep(){
        console.log("Sleeps");
    }

    work(){                        //Method overriding
        console.log("Profession");
    }
}

class Doctor extends Human{       //class Child extends Parent{}
    work(){                       //
        console.log("Treats patients");
    }
}
let rishiShah = new Doctor();
console.log(rishiShah);
console.log(rishiShah.work());  
//will show the output of child class instead of parent class

class Cricketer extends Human{
    score(){
        console.log("715 runs scored");
    }
}
let rohitSharma = new Cricketer();
console.log(rohitSharma);



//Exception Handling
let a = 10;
let b = 0;
console.log("a+b", a+b);
console.log("a-b", a-b);
console.log("a*b", a*b);
try{
    console.log("a+c", a+c);
}catch(err){
    console.log(err);
}
