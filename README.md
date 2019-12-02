Techdegree Project 3 Interactive_Form

Interactive Form Project is an interactive registration form for tech conference. In this project I'm using jQuery library.
Form is using some customise behaviours, such as hiding unnecessary input fields or unnecessary select options. 
All of the validations for this form are powered by javaScript and provide helpful informations when the users informations are invalid.
I'm using Progressive Enhancement technique to make this form work, even if the user has enabled javaScript.

When user visit the page it automatically focus on a first name input. Then there is a job section, when the user selects other job option, the input for other job appears. In the t-shirt section form allows you to select only t-shirt colour that is possible in your selected t-shirt theme. Until theme is selected you can't select the colour. In activities section you have to choose at least one activity, form automatically disabled activities that are scheduled at the same time as your already selected activity. The last section is payment. As a default it is set to show Credit Card as payment option. You can change payment option to PyPal or Bitcoin and you will see payment information for chosen payment option. When you click submit button and some information are invalid you will see error messages. When you try to submit an empty form you will see an error message for all required fields.

I've decided to work with provided CSS and make it my own. I've worked with fonts, colours, backgrounds and input transitions.

Used techniques:

-Progressive Enhancement,
-Unobtrusive JavaScript,
-jQuery Library,
-Regular Expressions

Extra Credit Feautures:
-Hide colors select menu untill t-shirt theme is chosen
-All of the inputs have real-time error messages,
-Name Input error message changes depending on the error.
 
