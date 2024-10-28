function SortingName () {
	var userName = window.prompt("write your name:");
	console.log ("username =", userName) ;

	var nameArray = userName.split('');
	console.log ("nameArray =", nameArray);

	var nameArraySort = nameArray.sort();
	console.log ("nameArraySort =", nameArraySort);

	var nameSorted = nameArraySort.join('');
	console.log ("nameSorted =", nameSorted);

	return nameSorted;
}

document.writeln("Here is your fixed name: ",
SortingName(), "<br>");
