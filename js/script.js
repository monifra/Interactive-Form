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
//create change event listener on a design menu
// if the user select JS Puns 
// then display cornflower blue dark slate grey and gold
// else if the user select I love JS
// then display tomato steel blue and dim grey





//hide the 'Select Payment Method' option from drop down menu
const $selectPaymentMethod = $('#payment>option[value="select method"]');
$selectPaymentMethod.attr('disabled', 'true').attr('hidden', 'true');