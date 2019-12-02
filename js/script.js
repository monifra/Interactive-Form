/*************
 Techdegree Project 3 Interactive_Form
 *************/
//Interactive Form Project is an interactive registration form for tech conference.
/***
VARIABLES
***/
const $inputName = $('#name').focus(); //focusing on a first input after page load
//other job section
const $inputOtherJobRole = $('#other-title').attr('hidden', 'true'); //hiding other job input field
const $jobSelectMenu = $('#title');
const $jobs = $('#title>option');
//t-shirt section 
const $selectThemeOption = $('#design>option:first-child').attr('disabled', 'true').attr('hidden', 'true'); //hide select theme in a drop down menu
const $colors = $('#color>option').attr('disabled', 'true').attr('hidden', 'true'); //select colors & hide the colors in a drop down menu
const $updateColorTextbox =$('#color').val('textbox');
const $addColorOption =$('#color').prepend('<option value="selectTheme">Please select a T-shirt</option>'); // update color field to "Please select a T-shirt theme"
const $designSelectMenu = $('#design'); //choose design select element
//avtivity section
//creating an element that displays total cost and append it to a page
let totalCost = 0; //variable that will hold the total cost of users choosen activities
const $appendCost = $('.activities').append('<p class="cost">Total: $'+ totalCost +'</p>'); //appending to a page cost paragraph
const $activitiesParent =$('.activities');
//payment section
const $selectPaymentMethod = $('#payment>option[value="select method"]').attr('disabled', 'true').attr('hidden', 'true'); //hide the 'Select Payment Method' option from drop down menu
const $creditCard = $('#credit-card');
const $payPal = $('#paypal').attr('hidden', 'true');//chose paypal and hide paypal payment info
const $bitcoin = $('#bitcoin').attr('hidden', 'true');// chose bitcoin and hide bitcoin payment info
const $selectedPaymentValue=$('#payment').val('Credit Card');  //set credit card as selected value
const $paymentSelectMenu = $('#payment'); //selects payment menu
//form validation
//adding validators messages to a page
const $nameInput = $('#name');
const $blankNameInputError = $('<p class="error">Name field can\'t be empty</p>').insertAfter($nameInput).hide(); //error message for blank name input
const $nameInputError = $('<p class="error">Can only contain letters</p>').insertAfter($nameInput).hide(); //error message for name input
const $emailInputError = $('<p class="error">Must be a valid email address</p>').insertAfter($('#mail')).hide(); //error message for email input
const $activitiesError = $('<p class="error">Choose at least one activity</p>').insertAfter($('.activities legend')).hide(); //error message for activity section
//adding optional validators messages to a page
const $cardNumberError = $('<p class="error">Credit card number must have between 13 and 16 numbers</p>').insertAfter($('#cc-num')).hide();
const $zipError = $('<p class="error">Zip Code must be 5-digit number</p>').insertAfter($('#zip')).hide();
const $cvvError = $('<p class="error">CVV must be exactly 3 digits long</p>').insertAfter($('#cvv')).hide();
//form submit
const $form = $('form');
/***
FUNCTIONS
***/
//FORM VALIDATION & VALIDATION MESSAGES
const $validateName = () =>{ //name validation

    if($($nameInput).val()===''){ //if ther isn't a value in the name input
        $blankNameInputError.show();
        return false;
    }else{
        $blankNameInputError.hide();
        return true;
    }
};
const $validateEmail = () =>{ //email validation
    const $emailInputVal = $('#mail').val();
    const isValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test($emailInputVal); //if the value of email input is not a valid email 
    if(isValid){
        $emailInputError.hide();
        return true;
    }else{
        $emailInputError.show();
        return false;
    }
};


const $validateActivity = () =>{ //activity validation
    const $checkbox = $('.activities input');
    const $currentActivityChecked=[]; //create an empty array
    $checkbox.each(function(i){ //looping over all of the inputs
        if($($checkbox[i]).prop('checked')){ //if checkbox is checked
            $currentActivityChecked.push($checkbox[i]); //add this to the array
        }
    });
    if($currentActivityChecked.length > 0){ //if array has length
        $activitiesError.hide();
        return true;
    }else{
        $activitiesError.show();
        return false;
    }
};
//ONLY VALIDATED IF THE PAYMENT METHOD IS "CREDIT CARD"
const $validateCreditCardNumber = () =>{ //credit card validation
    const $cardInputVal = $('#cc-num').val();
    const isValid = /^\d{13,16}$/.test($cardInputVal); //test if value from card input is a number between 13-16 numbers
    if(isValid){
        $cardNumberError.hide();
        return true;
    }else{
        $cardNumberError.show();
        return false;
    }
};
const $validateZipCode = () =>{ //zip code validation
    const $zipInputVal = $('#zip').val();
    const isValid = /^\d{5}$/.test($zipInputVal); //test if value form zip input is a 5-digit number
    if(isValid){
        $zipError.hide();
        return true;
    }else{
        $zipError.show();
        return false;
    }
};
const $validateCVV = ()=>{ //CVV validation
    const $cvvInputVal = $('#cvv').val(); 
    const isValid = /^\d{3}$/.test($cvvInputVal); //test if a value from cvv imput is a 3-digit number
    if(isValid){
        $cvvError.hide();
        return true;
    }else{
        $cvvError.show();
        return false;
    }
};
//MASTER VALIDATORS
//function checking credit card validators
const $validateCreditCard=()=>{
    if($($paymentSelectMenu).val() === 'Credit Card' && $validateCreditCardNumber() === false){
        return false;
    }else if($($paymentSelectMenu).val() === 'Credit Card' && $validateZipCode() === false ){
        return false;
    }else if($($paymentSelectMenu).val() === 'Credit Card' && $validateCVV() === false){
        return false;
    }else{
        return true;
    }
};

/***
 EVENT HANDLERS 
 ***/
//REAL-LIFE ERROR EVENT HANDLERS
$('#mail').on('input',function(){
    $validateEmail();
    if($validateEmail()===true){
        $emailInputError.hide();
    }
});
$('#name').on('input',function(){
    $validateName();
    if($validateName()===true){
        $emailInputError.hide();
    }
});
$('.activities').on('input',function(){
    $validateActivity();
    if($validateActivity()===true){
        $activitiesError.hide();
    }
});
$('#cc-num').on('input',function(){
    $validateCreditCardNumber();
    if($validateCreditCardNumber()===true){
        $cardNumberError.hide();
    }
});
$('#zip').on('input',function(){
    $validateZipCode();
    if($validateZipCode()===true){
        $zipError.hide();
    }
});
$('#cvv').on('input',function(){
    $validateCVV();
    if($validateCVV()===true){
        $cvvError.hide();
    }
});
//OTHER JOB SECTION EVENT HANDLER
$jobSelectMenu.change(function(event){ //if there is a change in job select menu
    $jobs.each(function(i){
        if($(event.target).val() === 'other'){ //if other option selected
            $inputOtherJobRole.removeAttr('hidden'); //show other job input 
        }else{
            $inputOtherJobRole.attr('hidden', 'true'); //else hide other job input
        }
    });
});
//T-SHIRT SECTION EVENT HANDLER
$designSelectMenu.change(function(event){ //create change event listener on a design menu
    console.log($(event.target).val());
    $('#color option[value="selectTheme"]').attr('disabled', 'true').attr('hidden', 'true').removeAttr('selected');
    $colors.each(function(i){
        if($(event.target).val() === 'js puns') { // if the user select JS Puns than display cornflowerblue, darkslategrey,gold
            
            $('#color option[value="cornflowerblue"]').removeAttr('disabled').removeAttr('hidden').prop('selected', 'true');
            $('#color option[value="darkslategrey"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="gold"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="tomato"]').attr('disabled', 'true').attr('hidden', 'true').removeProp('selected');
            $('#color option[value="steelblue"]').attr('disabled', 'true').attr('hidden', 'true');
            $('#color option[value="dimgrey"]').attr('disabled', 'true').attr('hidden', 'true');
            
        }
        if($(event.target).val() === 'heart js') { // else if the user select I love JS then display tomato steel blue and dim grey
            
            $('#color option[value="tomato"]').removeAttr('disabled').removeAttr('hidden').prop('selected', 'true');
            $('#color option[value="steelblue"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="dimgrey"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="cornflowerblue"]').attr('disabled', 'true').attr('hidden', 'true').removeProp('selected');
            $('#color option[value="darkslategrey"]').attr('disabled', 'true').attr('hidden', 'true');
            $('#color option[value="gold"]').attr('disabled', 'true').attr('hidden', 'true');
        }
    });
}); 
//ACTIVITY SECTION EVENT HANDLER
$activitiesParent.change(function(event){  //listen for a change in an activity section
    const $activitiesCheckboxClicked = $(event.target); //selecting input elements in activities
    const $checkedCost = $activitiesCheckboxClicked.attr('data-cost');
    const $newCheckedCost = $checkedCost.replace(/[^0-9]/, ''); //every character that is not a number will be removed from a string
    const $newCheckedCostNumber = parseFloat($newCheckedCost); //change variable to a number
    const $activitiesTime = $activitiesCheckboxClicked.attr('data-day-and-time');
    const $checkbox = $('.activities input');
    let $costText = $('.cost'); //selecting p that is holding cost value

    if($activitiesCheckboxClicked.prop('checked')){ // if checkbox is checked
        totalCost += $newCheckedCostNumber; // add the cost
        $costText.text('Total: $' + totalCost); //display the cost
    }else{ // checkbox not checked
        totalCost -= $newCheckedCostNumber; // substract the cost
        $costText.text('Total: $' + totalCost);  //display the cost 
    }

    $checkbox.each(function(i){ //looping over all of the inputs and disabled this which happens at the same time that those which were chosen
        const $currentActivity = $checkbox[i];

        if($($currentActivity).attr('data-day-and-time') === $activitiesTime && $($activitiesCheckboxClicked).attr('name') !== $($currentActivity).attr('name')){
            if($activitiesCheckboxClicked.prop('checked')){
                $($currentActivity).attr('disabled', true);
                $($currentActivity).parent().css('color', '#dddfe0');
            }else{
                $($currentActivity).removeAttr('disabled');
                $($currentActivity).parent().css('color', 'black');
            }
        }
    });
});
//PAYMENT INFORMATION SECTION EVENT HANDLER
$paymentSelectMenu.change(function(event){  //change event handler that shows and hides informations about chosen payment option
    console.log($(event.target).val());

        if($(event.target).val() === 'Credit Card') { //when credit card payment option is chosen

            $creditCard.removeAttr('hidden').prop('selected', 'true'); //show credit card inputs 
            $payPal.attr('hidden', 'true'); //hide paypal info
            $bitcoin.attr('hidden', 'true'); //hide bitcoin info
        }
        if($(event.target).val() === 'PayPal') { //when paypal payment option is chosen
            
            $payPal.removeAttr('hidden').prop('selected', 'true');;
            $creditCard.attr('hidden', 'true');
            $bitcoin.attr('hidden', 'true');
            
        }
        if($(event.target).val() === 'Bitcoin'){ //when bitcoin payment option is chosen
            $bitcoin.removeAttr('hidden').prop('selected', 'true');;
            $creditCard.attr('hidden', 'true');
            $payPal.attr('hidden', 'true');
        }

});
/***
FORM SUBMIT MASTER EVENT HANDLER
 ***/
//Event handler that prevents submitting the form if it's not correct and handles all error messages
$form.submit(function(event){ 
     
        if($validateName() === false || $validateEmail() === false || $validateActivity() === false || $validateCreditCard()=== false){
            event.preventDefault();
            if ($validateName() === false){$validateName()}
            if($validateEmail() === false){$validateEmail()}
            if($validateActivity()=== false){$validateActivity()}
            if($validateCreditCard()===false){$validateCreditCard()}
            if($validateZipCode() === false){$validateZipCode()}
            if($validateCVV() === false){$validateCVV()}
        }
});

