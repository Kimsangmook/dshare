// class Human {
//     gender = 'male';
//     printGender=()=>{
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//         name = 'Max';
//         gender = 'femaile';

//     printMyname=()=>{
//         console.log(this.name);
//     }
// }
 
// const person = new Person();
// person.printMyname();
// person.printGender();

const numbers = [1,2,3];
const newnumbers = [...numbers,4];
console.log(newnumbers);

const person = {
    name: 'Max',
};

const newPerson = {
    ...person,
    age: 28
}

// console.log(newPerson);

const filter = (...args)=>{
    console.log(args);
    return args.filter(el=>el===1);
}

console.log(filter(1,2,3));

// const number = [1,2,3];
// [num1,num2]=numbers;
// console.log(num1,num2);

// const myObj = {
//     name : 'Max',
//     age : 28
// }

// const {name}=myObj;
// console.log(myObj);

const person = {
    name : 'Max'
};
const secondPerson = {
    ...person
};
// person.name = 'Manu';

// console.log(secondPerson);
// console.log(person);

const numbers = [1,2,3];

const doubleNumArray = numbers.map((num)=>{
    return num*2;
});