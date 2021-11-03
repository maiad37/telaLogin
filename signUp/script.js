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
