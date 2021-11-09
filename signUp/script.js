let fpass1 = document.getElementById('fpass1')
let fpass2 = document.getElementById('fpass2')
let passMatch = document.getElementById('passMatch')

function checkPass(){
    if(fpass1.value !== fpass2.value){
        passMatch.style.color = "red";
        passMatch.innerHTML = "Passwords don't match!"
    }else{
        passMatch.style.color = "green";
        passMatch.innerHTML = "Passwords match!"
    }
}

/*const register = (e) =>{
    e.preventDefault()

    const {femail, fnumber, fpass1, fpass2} = e.target.elements

    console.log(femail.value)
 }

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var data = new FormData(form);
  const {fnumber} = data
  console.log(data.fnumber.value)
  console.log(fnumber)
  for (const [name,value] of data) {
     console.log(name,value)
  }
});*/
