const $inputName = $('#name');
$inputName.focus(); //focusing on a first input after page load

//OTHER JOB SECTION

const $inputOtherJobRole = $('#other-title');
$inputOtherJobRole.attr('hidden', 'true'); //hidding other job input field
console.log($inputOtherJobRole);
const $jobSelectMenu = $('#title');
const $jobs = $('#title>option');

$jobSelectMenu.change(function(event){
    $jobs.each(function(i){
        if($(event.target).val() === 'other'){
            $inputOtherJobRole.removeAttr('hidden');
        }else{
            $inputOtherJobRole.attr('hidden', 'true');
        }
    });
});

//T-SHIRT SECTION
//hide select theme in a drop down menu
const $selectThemeOption = $('#design>option:first-child');
$selectThemeOption.attr('disabled', 'true').attr('hidden', 'true');
// hide the colors in a drop down menu
const $colors = $('#color>option');
$colors.attr('disabled', 'true').attr('hidden', 'true');
// update color field to "Please select a T-shirt theme"
$('#color').val('textbox');
$('#color').prepend('<option value="selectTheme">Please select a T-shirt</option>');

//choose design select element
const $designSelectMenu = $('#design');

//create change event listener on a design menu

$designSelectMenu.change(function(event){
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

//ACTIVITY SECTION

//creating an element that displays total cost and append it to a page
let totalCost = 0; //variable that will hold the total cost of users choosen activities
const $appendCost = $('.activities').append('<p class="cost">Total: $'+ totalCost +'</p>');

const $activitiesParent =$('.activities');

$activitiesParent.change(function(event){  //listen for a change in an activity section
    const $activitiesCheckboxClicked = $(event.target); //selecting input elements in activities
    
    const $checkedCost = $activitiesCheckboxClicked.attr('data-cost');
    //console.log($checkedCost);
    const $newCheckedCost = $checkedCost.replace(/[^0-9]/, ''); //every character that is not a number will be removed from a string
    //console.log($newCheckedCost);
    $newCheckedCostNumber = parseFloat($newCheckedCost); //change variable to a number
    //console.log($newCheckedCostNumber);
    
    const $activitiesTime = $activitiesCheckboxClicked.attr('data-day-and-time');
    // console.log($activitiesTime);

    const $checkbox = $('.activities input');
    // console.log($checkbox);

    let $costText = $('.cost'); //selecting p that is holding cost value

    if($activitiesCheckboxClicked.prop('checked')){ // if checkbox is checked
        totalCost += $newCheckedCostNumber; // add the cost
        $costText.text('Total: $' + totalCost); //display the cost
    }else{ // checkbox not checked
        totalCost -= $newCheckedCostNumber; // substract the cost
        $costText.text('Total: $' + totalCost);  //display the cost 
    }
    //console.log(totalCost);

    $checkbox.each(function(i){ //looping over all of the inputs
        const $currentActivity = $checkbox[i];

        // console.log($currentActivity);
        
        // console.log($currentActivityTime);
        
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
//PAYMENT INFORMATION

//hide the 'Select Payment Method' option from drop down menu
const $selectPaymentMethod = $('#payment>option[value="select method"]');
$selectPaymentMethod.attr('disabled', 'true').attr('hidden', 'true');

$creditCard = $('#credit-card');
$payPal = $('#paypal');
$bitcoin = $('#bitcoin');

$('#payment').val('Credit Card');
$creditCard.prop('selected', 'true');

$payPal.attr('hidden', 'true');
$bitcoin.attr('hidden', 'true');

$paymentSelectMenu = $('#payment');
const $payments = $('#payment>option');

$paymentSelectMenu.change(function(event){
    console.log($(event.target).val());

        if($(event.target).val() === 'Credit Card') { 

            $creditCard.removeAttr('hidden').prop('selected', 'true');
            $payPal.attr('hidden', 'true');
            $bitcoin.attr('hidden', 'true');
        }
        if($(event.target).val() === 'PayPal') { 
            
            $payPal.removeAttr('hidden').prop('selected', 'true');;
            $creditCard.attr('hidden', 'true');
            $bitcoin.attr('hidden', 'true');
            
        }
        if($(event.target).val() === 'Bitcoin'){
            $bitcoin.removeAttr('hidden').prop('selected', 'true');;
            $creditCard.attr('hidden', 'true');
            $payPal.attr('hidden', 'true');
        }

});

//FORM VALIDATION & VALIDATION MESSAGES

const $validateName = () =>{ //name validation
    $nameInput = $('#name');
    if($($nameInput).val()===''){
        $('<p class="error">Name field can\'t be empty</p>').insertAfter($nameInput);
        return false;
    }else{
        return true;
    }
};

const $validateEmail = () =>{ //email validation
    const $emailInputVal = $('#mail').val();
    const isValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test($emailInputVal);
    if(isValid){
        return true;
    }else{
        $('<p class="error">Must be a valid email address</p>').insertAfter($('#mail'));
        return false;
    }
};

const $validateActivity = () =>{ //activity validation
    const $checkbox = $('.activities input');
    const $currentActivityChecked=[];
    $checkbox.each(function(i){ //looping over all of the inputs
        if($($checkbox[i]).prop('checked')){
            $currentActivityChecked.push($checkbox[i]);
        }
    });
    if($currentActivityChecked.length > 0){
        return true;
    }else{
        $('<p class="error">Choose at least one activity</p>').insertAfter($('.activities legend'));
        return false;
    }
};

/***
 ONLY VALIDATED IF THE PAYMENT METHOD IS "CREDIT CARD"
 ***/

const $validateCreditCardNumber = () =>{ //credit card validation
    const $cardInputVal = $('#cc-num').val();
    const isValid = /^\d{13,16}$/.test($cardInputVal);
    if(isValid){
        return true;
    }else{
        $('<p class="error">Credit card number must have between 13 and 16 numbers</p>').insertAfter($('#cc-num'));
        return false;
    }
};
const $validateZipCode = () =>{
    const $zipInputVal = $('#zip').val();
    const isValid = /^\d{5}$/.test($zipInputVal);
    if(isValid){
        return true;
    }else{
        $('<p class="error">Zip Code must be 5-digit number</p>').insertAfter($('#zip'));
        return false;
    }
};
const $validateCVV = ()=>{
    const $cvvInputVal = $('#cvv').val();
    const isValid = /^\d{3}$/.test($cvvInputVal);
    if(isValid){
        return true;
    }else{
        $('<p class="error">CVV must be exactly 3 digits long</p>').insertAfter($('#cvv'));
        return false;
    }
};


const $validatePayment = ()=>{
    if ($paymentSelectMenu.val() == "PayPal" || "Bitcoin") {
    return true;
    } else {
        return false;
    }
  };


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


const $validateAll = () => {
    if($validateName() === false || $validateEmail() === false || $validateActivity() === false || $validateCreditCard()=== false || $validatePayment() === false){
        return false;
    }
};


const $validateEmpty = () => {
    if($validateName() === false && $validateEmail() === false && $validateActivity() === false && $validateCreditCard()=== false && $validateZipCode() === false && $validateCVV() === false && $validatePayment() === false){
        
        return false;
    }
    
};


$form = $('form');


$form.submit(function(event){
    if($validateEmpty() === false){
        
        event.preventDefault();
    } 
    if($validateAll() === false){
        event.preventDefault();
    }  
});

// $nameP = $('#name p');
// $nameP.attr('hidden', 'true');

// TO DO DON't DISPLAY NAME VALIDATION TWICE


