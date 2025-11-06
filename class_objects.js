/*class ToyotaCar{
    constructor(brand){
        console.log("Creating New Object");
        this.brand = brand;
    }

    start(){
        console.log("strat");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner");
let lexus = new ToyotaCar("lexus");
*/

/*class Person{
    constructor(){
        this.species = "homo sapiens";
    }

    est(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}*/


/*class Parent
{
    constructor(name){
        this.spicies="homo sapiens";
        this.name=" ";
    }
    eat(){
        console.log("Human Being");
    }
}

class child extends Parent{
    constructor(name){
        super(eat);
    }
}
class engineer extends Parent{
    constructor(name){
        super(name);
    }    

    work(){
        super.eat();
        console.log("working")
    }
}

let enjObj = new engineer("ABCD");
*/

let Data = "security information";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data", Data)
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "some changes";
    }
}

let student1 = new user("ABCD","abc@gmail.com");
let student2 = new user("EFGH","efg@gmail.com");

let admin1 = new Admin("5O5","wemail.com");