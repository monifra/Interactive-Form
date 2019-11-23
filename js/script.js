const $inputName = $('#name');
$inputName.focus(); //focusing on a first input after page load

//OTHER JOB SECTION

const $inputOtherJobRole = $('#other-title');
$inputOtherJobRole.hide(); //hidding other job input field

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
            console.log('hi i\'m working');
            
            $('#color option[value="cornflowerblue"]').removeAttr('disabled').removeAttr('hidden').prop('selected', 'true');
            $('#color option[value="darkslategrey"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="gold"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="tomato"]').attr('disabled', 'true').attr('hidden', 'true').removeAttr('selected');
            $('#color option[value="steelblue"]').attr('disabled', 'true').attr('hidden', 'true');
            $('#color option[value="dimgrey"]').attr('disabled', 'true').attr('hidden', 'true');
            
        }
        if($(event.target).val() === 'heart js') { // else if the user select I love JS then display tomato steel blue and dim grey
            console.log('hi i\'m working');
            
            $('#color option[value="tomato"]').removeAttr('disabled').removeAttr('hidden').prop('selected', 'true');
            $('#color option[value="steelblue"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="dimgrey"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="cornflowerblue"]').attr('disabled', 'true').attr('hidden', 'true').removeAttr('selected');
            $('#color option[value="darkslategrey"]').attr('disabled', 'true').attr('hidden', 'true');
            $('#color option[value="gold"]').attr('disabled', 'true').attr('hidden', 'true');
        }
    });
});

//ACTIVITY SECTION

//creating an element that displays total cost and append it to a page
let totalCost = 0; //variable that will hold the total cost of users choosen activities
const $appendCost = $('.activities').append('<p>Total: $'+ totalCost +'</p>');

const $activitiesParent =$('.activities');

$activitiesParent.change(function(event){  //listen for a change in an activity section
    const $activitiesCheckboxClicked = $(event.target); //selecting input elements in activities
    console.log($activitiesCheckboxClicked);
    const $checkedCost = $activitiesCheckboxClicked.attr('data-cost');
    console.log($checkedCost);
    const $newCheckedCost = $checkedCost.replace(/[^0-9]/, ''); //every character that is not a number will be removed from a string
    console.log($newCheckedCost);
    $newCheckedCostNumber = parseFloat($newCheckedCost); //change variable to a number
    console.log($newCheckedCostNumber);
    
    let $costText = $('.activities p'); //selecting p that is holding cost value

    if($activitiesCheckboxClicked.prop('checked')){ // if checkbox is checked
        totalCost += $newCheckedCostNumber; // add the cost
        $costText.text('Total: $' + totalCost); //display the cost
    }else{ // checkbox not checked
        totalCost -= $newCheckedCostNumber; // substract the cost
        $costText.text('Total: $' + totalCost);  //display the cost 
    };
    console.log(totalCost);
});







//hide the 'Select Payment Method' option from drop down menu
const $selectPaymentMethod = $('#payment>option[value="select method"]');
$selectPaymentMethod.attr('disabled', 'true').attr('hidden', 'true');