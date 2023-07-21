
/*const menuItem = document.querySelectorAll('.menu-item');
const menu = document.querySelectorAll('.menu');

menu.forEach(elem => {
  elem.addEventListener('mousedown', showMenu);
});
menuItem.forEach((menuList) => menuList.addEventListener('mouseleave', closeMenu))

function showMenu(e) {
  e.target.closest('.menu-item').querySelector('.uls').classList.add('ulsopen')
}
function closeMenu(e) {
  e.target.querySelector('.uls').classList.remove('ulsopen')
  
}
*/




/*for(let i = 0; i< element.length; i++){
  element[i].addEventListener('mousedown',mouseOn);

  element[i].addEventListener('mouseleave', mouseOff)
}



function mouseOn() {
  if(this.children.length > 1){
      this.children[1].style.opacity = '1'
      this.children[1].style.overflow = 'visible'
      this.children[1].style.height = 'auto'
  }
}

function mouseOff(){
  if(this.children.length > 1){
      this.children[1].style.opacity = '0'
      this.children[1].style.overflow = 'hidden'
      this.children[1].style.height = '0'
  }





/*
allmenu.forEach(e=>{
    const menu = e.querySelectorAll('.menu')
    const submenu = e.querySelectorAll('.submenu');
    
    menu.addEventListener('mousedown', ()=>{
        submenu.classList.toggle('submenu-open')

    })
    
})
*/



/*for(let i = 0; i< element.length; i++){
    element[i].addEventListener('mousedown',mouseOn);

    element[i].addEventListener('mouseleave', mouseOff)
}



function mouseOn() {
    if(this.children.length > 1){
        this.children[1].style.opacity = '1'
        this.children[1].style.overflow = 'visible'
        this.children[1].style.height = 'auto'
    }
}

function mouseOff(){
    if(this.children.length > 1){
        this.children[1].style.opacity = '0'
        this.children[1].style.overflow = 'hidden'
        this.children[1].style.height = '0'
    }
}*/



/**{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}

body{
  height: 100vh;
  background: yellowgreen;
  background-size: cover;
  background-position: center;
}
nav{

}
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: aliceblue;
  display: flex;
justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  box-shadow: 0 5px 10px black;
}

header .logo{
  font-size: 20px;
  font-weight: 900;
  color: black;
  transition: 0.5s;
}

header .logo:hover{
  transform: scale(1.2);
}

.allmenu{

}

.allmenu li{
  position: relative;
  float: left;
  min-width: 16em;
}

.allmenu li a{
  padding: 15px;
  color: black;
  font-size: 16px;
  display: block;
}

.allmenu li a:hover{
  background-color: blueviolet;
  color: antiquewhite;
}
.submenu{
  position: absolute;
  left: 0;
  width: 180px;
  color: aliceblue;
  opacity: 0;
  overflow: hidden;
}
.submenu li{
  width: 100%;
  
}*/

//let endec = new TextEncoder();
//console.log(endec.encode("hello"));


/*let link = document.createElement('a');
link.download = 'hello.txt';
let blob = new Blob(['Hello all'], {type:'text/plain'});
link.href = URL.createObjectURL(blob);
link.innerHTML = "Hello"
document.body.append(link)

link.revokeObjectURL(link.href)*/



/*let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

let reader = new FileReader();
reader.readAsDataURL(blob); // конвертирует Blob в base64 и вызывает onload

reader.onload = function() {
  link.href = reader.result; // url с данными
  link.click();
};*/



/*(function neddLeters() {

  const inp = document.querySelector('#input-field');


let leters ={},
    val,
    lastVal,
    oldChar;

inp.addEventListener('keyup', (e)=>{
  val = this.value
  if(e.keyCode === 8){
    lastVal = oldChar.slice(-1).toUpperCase();
    letters[letter] = leters[letter] - 1;
    if(letters[lastVal] ==0) {
      delete letters[lastVal]
    }
  }else if(e.keyCode >= 65 && e.keyCode <= 90){
    if(val.length){
      strArr(val)
    }
  }
  oldChar = val
  console.log(leters)
});
function strArr(str) {
  let arr = str.split(''),
  letter = arr[arr.length - 1].toUpperCase()
  if(letters[letter]){
    letters[letter] = leters[letter] +1
  }else {
    letters[letter] = 1
  }
}

})()*/

let btnLeft = document.querySelector('.button__project');
let btnRight = document.querySelector('.button__talk');

btnLeft.addEventListener('mousemove', onBtnLeft);
btnRight.addEventListener('mousemove',onBtnRight )

function onBtnLeft() {

  
  btnRight.style.background = "black";
  btnRight.style.color = 'white'
  btnLeft.style.background = "#F2F1EF";
  btnLeft.style.color = '#161513'
}

function onBtnRight() {

  btnLeft.style.background = "black";
  btnLeft.style.color = "white";
  btnRight.style.color = '#161513'
  btnRight.style.background = "#F2F1EF";
}

/*------------------------*/
const openPopUp = document.querySelector('#pop-up__open');
const  closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
const popUpPass = document.querySelector('.pop-up__pass')
const popUpEmail = document.querySelector('.pop-up__email')
const err = document.querySelector('.err');
const errTwo = document.querySelector('.errtwo')

popUpEmail.addEventListener('blur', ()=>{
  if(!popUpEmail.value.includes('@')){
    popUpEmail.classList.add('invalid');
    err.innerHTML = "Пожалуйста, введите правильный email."
  }
    
})
popUpEmail.addEventListener('focus', ()=>{
    err.innerHTML = "";
})
popUpPass.addEventListener('blur', ()=>{
  
    let re = /[!@#$%^&*()]/;
    let word = /[A-Za-z]/
    if(popUpPass.value.match(re) )   {
      errTwo.style.color = 'red'
      errTwo.innerHTML = "Пароль содержит не коректные символы"
    }
    if(popUpPass.value.length < 10){
      errTwo.innerHTML = "Пароль слилком короткий"
      errTwo.style.color = 'red'
    }
    if(!popUpPass.value.match(word)){
      errTwo.innerHTML = "Пароль должен содержать буквы"
      errTwo.style.color = 'red'
    }
})

popUpPass.addEventListener('focus', ()=>{
  errTwo.innerHTML = "";
})
popUpPass.addEventListener('paste',()=>{
  return false
})

openPopUp.addEventListener('click',function(e) {
  e.preventDefault();
  popUp.classList.add('active')
})
closePopUp.addEventListener('click', ()=>{
  popUp.classList.remove('active');
})



