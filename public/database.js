//var expenses = new Firebase('https://capstone-52a74.firebaseio.com/');

function saveInputs() {
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
		
		debugger;
		saveToFB(description, month, day, amount, category);
	
	
}

function saveToFB(description, month, day, amount, category) {
	//expenses.push({
	firebase.database.ref("capstone-52a74/").push({
		description: description,
		month: month,
		day: day,
		amount: amount,
		category: category
	})
}

function testInput() {
    	var expense = {
        description: "pluckers",
        month: "October",
        day: 30,
        amount: 10,
        category: "Food"
    }
    database.ref().push(expense);
}

function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li>' + list[i] + '</li>';
    };
    document.getElementById('listOutput').innerHTML = lis;
};



database.ref().on('value', function(snapshot) {
	console.log(snapshot.val());

  	var data = snapshot.val();
	var list = [];
	for (var key in data) {
    	console.log(key);
        if (data.hasOwnProperty(key)) {
            description = data[key].description ? data[key].description : '';
            console.log(description);
            if (description.trim().length > 0) {
                var output = "$" + description;
                list.push(output);
            }
        }
    }
    console.log(list);
    // refresh the UI
    refreshUI(list);

});



