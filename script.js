


/*
1. Вычисли произведение всех чисел от start до end, включительно.

*/




/*
let nimber1 = prompt('введите желаемое число ');
rerurn1 = 1;
for(let i=1; i<=nimber1; i++){
    rerurn1*=i;
}
alert(произведение чсел от 1 до ${nimber1} = ${rerurn1});

*/

/*
let number2 = prompt('ввчеди число ');
return2 = 1;
for(let i=1; i<=number2; i+=2 ){
    return2+=i;
                                                                    //??
}

alert(`произведение чисел от ${1} до  ${number2}  = ${return2 -1}`)
*/

/*

3. Напечатай квадратные числа от 1 до п. Например, если n = 25, то вывод будет: 1, 4, 9, 16, 25.


*/
/*
let number3 = prompt('введи число ');
let  return2=1;
for(let i =1; i<=number3 && return2!=25; i++ ){
    console.log(return2=i*i);
}
    */



/*
Посчитай сумму всех чисел от 1 до n, увеличивая число на 3 на каждом шаге. 7. Генерируй n числа Фибоначчи и выводи на экран
Работа со строками через цикл for

*/


/*
let number4 = prompt('введи число ');
let return2 = 1;
for(let i = 1; i <=number4 ; i+=3){
    return2+=i;
}
alert(`сумма чисел от 1 до ${number4} с шагом '3'  = ${return2}`);
*/

/*
    7. Генерируй n числа Фибоначчи и выводи на экран
    Работа со строками через цикл for
*/

/*
    let n  = prompt('введи число ');
    let f1=0;
    let f2=1;
    let return2 = 1;

for(let i=0;  i<= n; i++){
    
  console.log(return2=f1+f2);
    f1=f2;
    f2=return2;
  
    
}
console.log(return2)
*/




// Работа со строками через цикл for 


/*

1. Напиши код, который инвертирует строку, полученную от пользователя (например, превращает "hello" в "olleh").


*/


/*

let usetr = prompt('введи тескт')
for(let i = usetr.length-1; i>=0; i--){
    console.log(usetr[i])
}
*/


/*

2. Посчитай, сколько раз конкретный символ выбранный пользователем встречается в строке введенной пользователем.

*/


/*

let user1= prompt('введи текст');
let user2 = prompt('выбери символ ');
let count = 0;
for(let i = 0; i <=user1.length; i++){
    if(user1.charAt(i)===user2)
        count++;
}
alert( `${count} символов `)

*/