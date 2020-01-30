function getPcNumber(){           // генерация случайного числа и запись его в массив
let pcnum =[]
do {
    let a = Math.floor(Math.random()*10)
    if (pcnum.indexOf(a) < 0){
        pcnum.push(a)
        } 
    } while(pcnum.length < 4)  
    return pcnum
}
let pcNumber = getPcNumber()
console.log(pcNumber)     // Вывод числа компьютера для проверки работоспособности
let usernum,userarr
function check(){                     // проверка числа вводимого пользователем, здесь не понял надо ли было переводить массив строк в числа
     usernum = prompt("Введите число 4 значное число")
     userarr = []
    if (usernum != isNaN && usernum <= 9999 && usernum >= 0){
        userarr = [...usernum]           // метод spread
    } else {
        alert ("Ошибка ввода")
    }
}

let bull = 0
let cow = 0

function compare(a,b) {      // функция сравнения массивов
        for (let i = 0; i < 4; i++){
            if (a[i] == b[i]){
                bull++
            } else {
                for (let j = 0; j < 4; j++){
                    if(a[j]==b[i]){
                    cow++
                    }
            }        
        }  
    } 
}

function result(){       // наверное здесь можно как то упростить функцию)
let attemp = 0    
while (attemp < 10 ){
    check()
        compare(userarr,pcNumber)
        console.log(userarr)
        alert (" Быков: " + bull + " Коров: " + cow)
        if ( bull == 4 ){
            alert ("Победа")
            break
        }
        attemp++
        bull = 0
        cow = 0
        if (attemp >=10 ){
            alert ("Кончились ходы (:")
            break
        }
    }
}
  result()





// Первое задание  


let numObj = {
      ed: 0,
      des: 0,
      sot: 0
  }
let userNumber = +prompt("Введите число от 1 до 999")
function getObj (a){
    if (a > 0 && a <= 9){
        numObj.ed = a
    } else if (a > 9 && a <= 999){
        numObj.ed = Math.floor(a % 10)
        numObj.des = Math.floor((a/10) % 10)
        numObj.sot = Math.floor((a/100) % 10)   
    } else{
        console.log("Что-то пошло не так " + numObj)
    }
}
getObj (userNumber)
console.log(numObj)