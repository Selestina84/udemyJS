'use strict'
let money, time;
function start() {   
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    };
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
};
start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true   
};
function chooseExpensive(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b; 
            } else {
               i = i-1;
            };
           
        };
};
chooseExpensive();

appData.moneyPerDay = (appData.budget/30).toFixed();

alert(`Ежедневный бюджет  ${appData.moneyPerDay}`);
    if (appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
    } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
        alert('Средний уровень достатка');
    } else if(appData.moneyPerDay > 1000){
        alert('Высокий уровень уровень достатка');
    } else { alert('Ошибка, переданы неверные данные')};

function checkSavings() {
    if(appData.savings == true){
        let save = +prompt('Какова сумма Ваших накоплений?'),
            percent = +prompt('КАков процент в месяц?');
         appData.savings = (save/100/12*percent).toFixed();  
         alert(`Доход с Ваших накоплений составляет ${appData.savings}`);
    };
};
checkSavings();