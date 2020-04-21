let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
	
	let money, time;
	let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
		savings: false,
	};

	startBtn.addEventListener('click', function(){
		time = prompt("Введите дату в формате YYYY-MM-DD", '');
		money = +prompt("Ваш бюджет на месяц?", '');
		while(isNaN(money) || money == '' || money == null){
			money = +prompt("Ваш бюджет?Вводите цифры", '');
		}
		appData.budget = money;
		appData.time = time;
		budgetValue.textContent = money.toFixed();
		yearValue.value = new Date(Date.parse(time)).getFullYear();
		monthValue.value = new Date(Date.parse(time)).getMonth()+1;
		dayValue.value =new Date(Date.parse(time)).getDate();

	});

	expensesBtn.addEventListener('click', function(){
		let sum = 0;
		for (let i = 0; i < expensesItem.length; i++) {
			let a = expensesItem[i].value,
				b = expensesItem[++i].value;
			if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && b != '' && a.length < 50){
				appData.expenses[a] = b; 
				sum += +b;
			} else {
			i = i-1;
			}
		  }
		expensesValue.textContent=sum;
	});

	optionalExpensesBtn.addEventListener('click', function(){
		for (let i=0; i<optionalExpensesItem.length; i++){
			let c = optionalExpensesItem[i].value;
				appData.optionalExpenses[i] = c; 
				optionalExpensesValue.textContent += appData.optionalExpenses[i] + ", ";
		}	
	});

	countBtn.addEventListener('click', function(){
		let sum = +expensesValue.textContent;
		appData.moneyPerDay = ((appData.budget-sum)/30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000){
			levelValue.textContent = 'Средний уровень достатка';
		} else if(appData.moneyPerDay > 1000){
			levelValue.textContent = 'Высокий уровень уровень достатка';
		} else { 
			levelValue.textContent = 'Ошибка, переданы неверные данные';
		} 
	});

	incomeItem.addEventListener('change', function(){
		let  items = incomeItem.value;
		appData.income = items.split(', ');
		incomeValue.textContent = appData.income;
	});

	checkSavings.addEventListener('change', function(){
		if(appData.savings == true) {
			appData.savings =false;
		} else {
			appData.savings =true;
		}
	});

	sumValue.addEventListener('change', function(){
		if(appData.savings == true){
			let sum = sumValue.value,
				percent = percentValue.value;
			appData.yearIncome = (sum/100*percent).toFixed(); 
			appData.monthIncome = (sum/100/12*percent).toFixed(); 
			monthSavingsValue.textContent = appData.yearIncome ;
			yearSavingsValue.textContent = appData.monthIncome;
		}
	});

	percentValue.addEventListener('change', function(){
		if(appData.savings == true){
			let sum = sumValue.value,
				percent = percentValue.value;
			appData.yearIncome = (sum/100*percent).toFixed(); 
			appData.monthIncome = (sum/100/12*percent).toFixed(); 
			monthSavingsValue.textContent = appData.yearIncome ;
			yearSavingsValue.textContent = appData.monthIncome;
		}
	});





