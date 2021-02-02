class Student{
    constructor(sId, sName){
        this.University = "Daffodil International University";
        this.id = sId;
        this.name = sName;

    }

}

const student1 = new Student(2738,  "Mehedi Hasan");
const student2 = new Student(2741,  "Sunny");
const student3 = new Student(2763,  "Abir Hasan");
console.log(student1, student2, student3);