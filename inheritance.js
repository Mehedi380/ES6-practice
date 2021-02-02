class Parent {
    constructor(){
        this.fatherName = "Mehedi Hasan";
    }
}
class Child extends Parent {
    constructor(Name){
        super();
        this.name = Name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}

const baby = new Child("Hafcha");
const baby2 = new Child("Muhammad");
console.log(baby.getFullName());
console.log(baby2);