// первый способ:
// document.querySelector('button').onclick = myClick;

// второй способ:
document.querySelector('button').addEventListener('click', myClick);

function myClick(){
	//console.log('work');
let a = document.querySelector('.i-1').value;
console.log(a);
document.querySelector('.out').innerHTML += a;
}