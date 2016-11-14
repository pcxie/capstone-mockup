var expenses = new Firebase('https://capstone-52a74.firebaseio.com/');

function saveInputs(event) {
		var description = document.getElementById('description').value.trim();
	
		var month_select = document.getElementById('month');
		var month = month_select.options[month_select.selectedIndex].text;
		
		var day_select = document.getElementById('day');
		var day = day_select.options[day_select.selectedIndex].text;

		var amount = document.getElementById('amount').value.trim();

		var category;
		if (document.getElementById('food').checked) {
			category = document.getElementById('category').value;
		} else if (document.getElementById('rent').checked) {
			category = document.getElementById('rent').value;
		} else if (document.getElementById('bills').checked) {
			category = document.getElementById('bills').value;
		} else if (document.getElementById('clothes').checked) {
			category = document.getElementById('clothes').value;
		} else if (document.getElementById('makeup').checked) {
			category = document.getElementById('makeup').value;
		} else if (document.getElementById('gifts').checked) {
			category = document.getElementById('gifts').value;
		} else if (document.getElementById('personal').checked) {
			category = document.getElementById('personal').value;
		} else if (document.getElementById('misc').checked) {
			category = document.getElementById('misc').value;
		}
		
		saveToFB(description, month, day, amount, category);
	
	
}

function saveToFB(description, month, day, amount, category) {
	expenses.push({
		description: description,
		month: month,
		day: day,
		amount: amount,
		category: category
	})
}

/*var input = new Firebase('https://capstone-52a74.firebaseio.com/');

function saveExpense() {
	var description = $('description').text();
	var date = $('date').text();
	var amount = $('amount').text();
	var category = $('category').text();

	firebase.database().set({
		description: description, 
		date: date, 
		amount: amount,
		category: category
	});
}
//var submit = document.getElementsByTagName('button')[0];
//window.onload = function() {
	//submit.onClick = input;
//}

