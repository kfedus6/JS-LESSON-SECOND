/*
let students = {};
let name;
let age;

for (let i = 0; i < 2; i++) {
   name = prompt("name");
   age = prompt("age");
   students[i] = { name: name, age: age };
}

for (let i = 0; i < 2; i++) {
   console.log(students[i]);
}*/


/*
function cout(text_one, text_two) {
   console.log(text_one + " " + text_two);
}

cout("hello", "world");

* /
/*
function num(a = 5, b = 5) {
   console.log(a + b);
}

num(2);
*/

/*
function sum() {
   let result = 0;
   for (const n of arguments) {
      result += n;
   }
   console.log(result);
}

sum(1, 7, 6, 1, 23, 57);
*/

/*
function display(season, ...temps) {
   let result = "";
   for (idx in temps) {
      result += " " + temps[idx];
   }
   console.log(season + ": " + result);
}

display("Лето", "Купаться", "Отдыхать");
display("Зима", "Работать", "Учиться");

function sum(text, ...numbers) {
   let result = 0;
   for (let s in numbers) {
      result += numbers[s];
   }
   console.log(text + result);
}

sum("Результат: ", 5, 1, 2, 4);
*/

/*
function sum(n1, n2) {
   return n1 + n2;
}

let result = sum(1, 2);
console.log(sum(5, 4));
alert(sum(7, 7));
*/

/*
function sum(a) {
   return a ** 2;
}

console.log(sum(4)) // 16
alert(sum(5));
*/

/*
function go(x1, x2) {
   return x1 ** x2;
}
*/

/*
function plus(a, b) {
   return a + b;
}

function minus(z, c) {
   return z - c;
}

function operation(n1, n2, func) {
   return (func(n1, n2));
}

console.log(operation(4, 4, plus)); //8
console.log(operation(9, 4, minus)); //5
*/


/*
//1 - Привет
//2 - Пока
let n = prompt()

function menu(n) {
   if (parseInt(n) === 1) {
      return function () {
         console.log("Привет")
      }
   }
   if (parseInt(n) === 2) {
      return function () {
         console.log("Пока")
      }
   }
}

let res = menu(n);
res();
*/
/*
let t = 5;

function test(n) {
   if (n === 5) {
      let x = 5;
      console.log(x);
   }
   //console.log(x);
}

test(5);
*/
/*
let contacts = [{ name: "kolya", phone: "0636800022" }];
let name;
let phone;

function cont() {
   for (let c of contacts) {
      console.log(c);
   }
};

function addCont() {
   for (let i = 0; i < 2; i++) {
      name = prompt("name");
      phone = prompt("phone");
      contacts[i] = { name: name, phone: phone };
   }
   for (let i = 0; i < 1; i++) {
      console.log(contacts[i]);
   }
}
let menu1;
let question;
function showMenu() {
   do {
      if (confirm("Посмотреть список контактов?") === true) {
         cont();
      } else if (confirm("Добавить новый контакт?") === true) {
         addCont();
      } else if (question = confirm("Выйти?") === false) {
      } else {
         alert("ви вийшли");
      }
      question
   } while (question == true)
}
showMenu();
*/


/*
function cont() {
   for (let c of contacts) {
      console.log(c);
   }
};

let name, age;

let contacts = [""];
let exit = false;
let menu;


do {
   menu = parseInt(prompt())

   switch (menu) {
      case 1: {
         cont();
         break;
      }
      case 2: {
         name = prompt("Имя");
         age = parseInt(prompt("Возраст"))
         contacts[contacts.length] = { Name: name, Age: age }
         break;
      }
      case 3: {
         name = prompt("Введите имя, кого хотите изменить");

         for (item of contacts) {
            if (item.Name == name) {
               name = prompt("Новое имя: ");
               age = parseInt(prompt("Возраст: "));
               item.Name = name;
               item.Age = age;
            }
         }

         break;
      }
      case 4: {
         exit = true;
         break;
      }
      default: {
         console.log("error");
         break;
      }
   }

} while (!exit)
*/

/*
function getFibonachi(n) {
   if (n === 0) {
      return 0;
   }

   else if (n === 1) {
      return 1;
   }

   else {
      return getFibonachi(n - 1) + getFibonachi(n - 2);
   }
}

var result = getFibonachi(8);
console.log(result);


function factorial(n) {

   if (n === 1) {
      return 1;
   }
   else {
      return n * factorial(n - 1);
   }
}

console.log(factorial(5)) // 120   - 1*2*3*4*5
*/

/*
function sumPlusOne() {
   let x = 0;
   function tmp() {
      x++;
      console.log(x)
   }
   return tmp;
}

let fn = sumPlusOne();

fn();
fn();
fn();
fn();
*/

function sum() {
   let v = 0;
   function qw() {
      v++;
      console.log(v ** 3)
   }
   return qw;
}

let result = sum();
result();
result();
result();

/*

function multiply(n) {
   var x = n;
   return function (m) {
      return x * m;
   };
}


var res = multiply(4)(6);
console.log(res);

function mul(s) {
   let c = s;
   return function (z) {
      return c / z;
   };
}

let result = mul(10)(2);
console.log(result);
*/