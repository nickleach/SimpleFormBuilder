var person = {
  name : "Nick",
  location: "Atlanta"
}

var templateString = $('#personFormatting').text();

var templateFunction = _.template(templateString);

var finalHTML = templateFunction(person);
console.log(finalHTML);





var form1 = [
  { type: 'text', label: 'First Name' },
  { type: 'text', label: 'Last Name' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'password', label: 'Password Verify' },
  { type: 'submit', label: 'Register'}
];

function formBuilder (data) {

  var formHTML = $('#formElement').text();

  var formFunction = _.template(formHTML);

  data.forEach ( function (elem){
    $('#registrationForm').append(formFunction(elem));



  });

}

formBuilder(form1);


