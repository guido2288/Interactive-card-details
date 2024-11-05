const form = document.querySelector('form');
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const errorMsgs = document.querySelectorAll(".error-msg")
const btnSubmit = document.querySelector('button');
const formContainer = document.querySelector('.form-container');
const submitModal = document.querySelector('.submit-modal');
const name = document.getElementById('name');
const number = document.getElementById('number');
const monthDisplay = document.getElementById('month-display');
const yearDisplay = document.getElementById('year-display');
const cvcDisplay = document.getElementById('cvc-display');

const validateCardNumber = (num) => {
    const regex = new RegExp("^[0-9]{16}$");
    if(!regex.test(num)){
        return false;
    }
    return true
};

const validateName = (name) => {
    return /^[A-Za-z]*$/.test(name);
}

const containsOnlyDigits = (str) =>  {
    return /^\d+$/.test(str);
}

cardName.addEventListener('change', (e) => {
    name.innerHTML = e.target.value 
})

cardNumber.addEventListener('change', (e) => {
    let string = e.target.value;

    if(string.length === 16 ) {
        let first = string.slice(0,4)
        let second = string.slice(4,8)
        let third = string.slice(8, 12)
        let four = string.slice(12)

        number.innerHTML = `${first} ${second} ${third} ${four}`
    }

    
})

month.addEventListener('change', (e) => {
    monthDisplay.innerHTML = e.target.value 
})

year.addEventListener('change', (e) => {
    yearDisplay.innerHTML = e.target.value 
})

cvc.addEventListener('change', (e) => {
    cvcDisplay.innerHTML = e.target.value 
})

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    if(!validateName(cardName.value)){
        errorMsgs[0].innerHTML = "Wrong format, letters only"
    }else{
        errorMsgs[0].innerHTML = ""
    }

    if(!validateCardNumber(cardNumber.value)){
        errorMsgs[1].innerHTML = "Wrong format"
    }else{
        errorMsgs[1].innerHTML = ""
    }

    if(!containsOnlyDigits(month.value)){
        errorMsgs[2].innerHTML = "Wrong format"
    }else{
        errorMsgs[2].innerHTML = ""
    }

    if(!containsOnlyDigits(year.value) ){
        errorMsgs[3].innerHTML = "Wrong format"
    }else{
        errorMsgs[3].innerHTML = ""
    }

    if(!containsOnlyDigits(cvc.value) || cvc.value.length < 3 ){
        errorMsgs[4].innerHTML = "Wrong format"
    }else{
        errorMsgs[4].innerHTML = ""
    }
    
    const data = {
        name: cardName.value,
        number: cardNumber.value,
        month: month.value,
        year: year.value,
        cvc: cvc.value
    }

    let error = [];

    errorMsgs.forEach(element => {
        
        if(element.innerHTML !== ""){
            error.push(element.innerHTML)
        }
        
    });

    if( error.length == 0 ) {
        submitModal.style.display = "flex"
        formContainer.style.display = "none"
    }

})
