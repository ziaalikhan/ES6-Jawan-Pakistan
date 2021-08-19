// class Msg {

//     constructor(name, age, year) {
//         this.name = name;
//         this.age = age;
//         this.year = year
//     }

//     name = "osama"

//     static value = 'this is my value'

//     static printName() {
//         console.log('My name is: ', this.name)
//     }

// }

// const newObj = new Msg("basit", 24, 2021);


// console.log(newObj.name);
// console.log(Msg.value);

// class AnotherMsg extends Msg {
//     constructor(name, age, year, profession) {
//         super(name, age, year)
//         this.profession = profession
//     }
// }

// const myObj = new AnotherMsg("osama", 31, 2021, 'YouTuber');
// const myObj1 = new AnotherMsg("Sir Ali", 18, 2021, 'Master');
// console.log(myObj);
// console.log(myObj1);



// class Students{

//     constructor(name,age,roll){
//         this.myAge = age;
//         this.myRoll = roll;
//     }

//     biodata(){
//        console.log(`hi my name is ${this.myName} ande my age is ${this.myAge} and my Roll is ${this.myRoll}`);
     
//     }
// }

// let obj1 = new Students('zia ur rehman',20,34567);
// obj1.biodata()


// class Student{
//     constructor(name,age){
//         this.myName = name
//         this.myAge = age

//     }

//     biodata(){
//         console.log(`hi${this.myName} and ${this.myAge}  and my game is ${this.myGame}`);
//     }

// }


// class player extends Student{
//     constructor(name,age,game){
//         super(name,age)
//         this.myGame = game;

//     }

// }

// let obj1 = new player('zia ali'  ,20, 'footbal');

// obj1.biodata();



