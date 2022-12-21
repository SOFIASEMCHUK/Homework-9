//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
//2 Вивести квадрати чисел від 10 до 20.
//3 Вивести таблицю множення на 7.
//4 Знайти суму всіх цілих чисел від 1 до 15.
//5 Знайти добуток усіх цілих чисел від 15 до 35.
//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//10 Визначити кількість його парних дільників.
//11 Знайти суму його парних дільників.
//12 Надрукувати повну таблицю множення від 1 до 10.

//1 
console.log('Завдання 1:');
let result = [];

for (let i = 10; i <= 20; i++) {
    if(i !== 10) {
        result += ', ' + i; 
    } else {
        result += i;
    }
    //result.push(i) 
}
console.log(result);

//2
console.log('Завдання 2:');
for(let i = 10; i < 20; i++) {
    console.log(i*i);
}

//3
console.log('Завдання 3:');
let table = '';

for(let i = 1; i <= 10; i++) {
    table += i + '*7' + '=' + i * 7 + ' ';
}
console.log(table);

//4 
console.log('Завдання 4:');
let count = 0;

for(let i = 1; i <= 15; i++) {
    if(i%1 === 0){
        count+=i
    }
}
console.log(count);

//5 
console.log('Завдання 5:');
let mult = 1;

for(let i = 15; i <= 35; i++){
    if(i%1 === 0){
        mult *= i;
    }
} 
console.log(mult); 


//6
console.log('Завдання 6:');
let count2 = 0;

for(let i = 1; i <= 500; i++) {
    if(i%1 === 0) {
        count2+=i;
    }
}
console.log('Середнє арифметичне чисел: ' + count2/500);

//7
console.log('Завдання 7:');
for(let i = 30; i <= 80; i=i+2)
console.log(i);

//8
console.log('Завдання 8:');
for(let i = 100; i <= 200; i++){
    if(i%3 === 0) {
        console.log(i);
    }
}

//9 
console.log('Завдання 9:');
let naturNum = 10;

for(let i = 0; i <= naturNum; i++){
    if(naturNum%i === 0) {
        console.log(i); 
    }
}

//10 Визначити кількість його парних дільників.
console.log('Завдання 10:');
let naturNum1 = 10;
let count3 = 0;
for(let i = 0; i <= naturNum1; i++){
    if(naturNum1%i === 0) {
        if(i%2 === 0) {
            count3++;
            
        }
    } 
}
console.log(count3); 
// //11
console.log('Завдання 11:');
let naturNum3 = 10;
let sum4 = 0;

for(let i = 0; i <= naturNum3; i++){
    if(naturNum3%i === 0) {
        if(i%2 === 0) {
            sum4+=i;
        }
    }
}
console.log(sum4);

//12 Надрукувати повну таблицю множення від 1 до 10.
console.log('Завдання 12:');

for(let i = 1; i <= 10; i++) {
    let tableMult = '';

    for(let j = 1; j <= 10; j++) {
        tableMult += i + '*' + j + '=' +(j * i) + ' ';
    }
   console.log(i + 'x');
   console.log(tableMult);
}

