const form = document.querySelector('form')
const frontNum = document.querySelector('.front-num')
const name1 = document.getElementById('name')
const date = document.getElementById('date')
const backNum = document.getElementById('back-num')
const cardHolderName = document.getElementById('back-name')
const cardHolderNumber = document.getElementById('number')
const dateFront = document.getElementById('date-front')
const sumbitBtn = document.querySelector('button')
const cvc = document.getElementById('back-num')
const cvcHolder = document.getElementById('cvc')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const digitsLength = document.getElementById('error2.2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const formContainer = document.querySelector('.form-container')
const completeForm = document.querySelector('.complete-form')
const conTinue = document.getElementById('continue')


cardHolderName.style.borderColor = 'black'

sumbitBtn.addEventListener('click',function(e){
  e.preventDefault()
  name1.innerText = cardHolderName.value
  frontNum.innerText = cardHolderNumber.value
  dateFront.innerText = date.value
  cvc.innerText = cvcHolder.value
   checkInput() 
   


       
})

cardHolderNumber.addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^\w]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

function checkInput(){


    if(cardHolderName.value.length === 0){
      error1.innerHTML = '<p class="error">Please input your fullname</p>'
      cardHolderName.style.borderColor = 'red'
      name1.textContent = 'Your Name'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
      console.log('false')
    }
    else{
      cardHolderName.style.borderColor = 'black'
    }
    
  
    if(containsAnyLetters(cardHolderNumber.value)){
      error2.innerHTML = '<p class="error">Wrong format, numbers only</p>'
      cardHolderNumber.style.borderColor = 'red'
      frontNum.textContent = '0000 0000 0000 0000'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
   
    }
    else if(cardHolderNumber.value.length === 0||cardHolderNumber.value.length<19){
      error2.innerHTML = '<p class="error">Please input 16 digits number</p>'
      cardHolderNumber.style.borderColor = 'red'
      frontNum.textContent = '0000 0000 0000 0000'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
    }else if(cardHolderNumber.value.length > 19){
      error2.innerHTML = '<p class="error">Please input 16 digits number only</p>'
      cardHolderNumber.style.borderColor = 'red'
      frontNum.textContent = '0000 0000 0000 0000'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
    }
     else{
      cardHolderNumber.style.borderColor = 'black'
    }
  
  
    if(date.value === ''){
      error3.innerHTML = `<p class="error">Can't be blank</p>`
      date.style.borderColor = 'red'
      dateFront.textContent = '00/00/00'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
    } else{
      date.style.borderColor = 'black'
    }
  
  
    if(cvcHolder.value ===''){
      error4.innerHTML = `<p class="error">Can't be blank</p>`
      cvcHolder.style.borderColor = 'red'
      backNum.textContent = '000'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
    }
    else if(containsAnyLetters(cvcHolder.value)){
      error4.innerHTML = `<p class="error">Please input numbers only</p>`
      backNum.textContent = '000'
      cvcHolder.style.borderColor = 'red'
    }
    else if(cvcHolder.value.length > 3){
      error4.innerHTML = `<p class="error">Please input only 3 digits</p>`
      backNum.textContent = '000'
      cvcHolder.style.borderColor = 'red'
      setTimeout(() => document.querySelector('.error').remove(), 2000 )
    }
    else{
      cvcHolder.style.borderColor = 'black'
      completeFormResult()
    }
    
  
}

function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}

function completeFormResult(){
  form.style.display = 'none'
  completeForm.style.display = 'flex'
  cardHolderName.value = ''
  cardHolderNumber.value = ''
  date.value = ''
  cvcHolder.innerText = ''
}
 
 conTinue.addEventListener('click',function(){
  name1.innerText = 'Your Name'
  frontNum.innerText = '0000 0000 0000 0000'
  dateFront.innerText = '00/00/00'
  cvc.innerText = '000'
  completeForm.style.display = 'none'
  form.style.display = 'flex'
 })  
  
