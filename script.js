'use strict'

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false    
};
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b; 
        } else {
            alert ('Вводите данные правильно');
        };
       
    };
    appData.moneyPerDay = appData.budget/30

alert(`Ежедневный бюджет  ${appData.moneyPerDay}`);
if (appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка');
} else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
    alert('Средний уровень достатка');
} else if(appData.moneyPerDay > 1000){
    alert('Высокий уровень уровень достатка');
} else { alert('Ошибка, переданы неверные данные')}