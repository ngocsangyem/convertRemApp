




document.getElementById('numberInput').addEventListener('input',function(e){
	// get input default number id

	const myInputNumber = document.getElementById('numberDefaultInput')

	// get default number value
	const defaultNumber = myInputNumber.value;
	// get rem number value
	const rems = e.target.value;

	// if defaul null

	// if (myInputNumber == null || myInputNumber == "") {
	// 	myInputNumber.value = "14"
	// }

	// rem / default value
	document.getElementById('remOutput').innerHTML = Math.round((rems/defaultNumber)*100)/100 + " rem";


})