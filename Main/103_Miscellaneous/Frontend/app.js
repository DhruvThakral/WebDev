// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${name}`);
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve", 24);

// console.log(p1.talk === p2.talk);



class Person{
    constructor(name,age){
        console.log("Person constructor being called");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("Student constructor being called");

        super(name,age);        // Parent class constructor is being called
        this.marks = marks;
    }
}

let s1 = new Student("Dhruv",21,100);

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher constructor being called");

        super(name,age);
        this.subject = subject;
    }
}

let t1 = new Teacher("Amit",32,"PEA");