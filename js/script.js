const $inputName = $('#name');
$inputName.focus(); //focusing on a first input after page load
const $inputOtherJobRole = $('#other-title');
$inputOtherJobRole.hide(); //hidding other job input field

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
    $colors.each(function(i){
        if($(event.target).val() === 'js puns') { // if the user select JS Puns
            console.log('hi i\'m working');
            $('#color option[value="cornflowerblue"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="darkslategrey"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="gold"]').removeAttr('disabled').removeAttr('hidden');  
        }
        if($(event.target).val() === 'heart js') { // if the user select JS Puns
            console.log('hi i\'m working');
            $('#color option[value="tomato"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="steelblue"]').removeAttr('disabled').removeAttr('hidden');
            $('#color option[value="dimgrey"]').removeAttr('disabled').removeAttr('hidden');  
        }
        
        // else if the user select I love JS
        // then display tomato steel blue and dim grey

    });
});







//hide the 'Select Payment Method' option from drop down menu
const $selectPaymentMethod = $('#payment>option[value="select method"]');
$selectPaymentMethod.attr('disabled', 'true').attr('hidden', 'true');