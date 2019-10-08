

var checkboxes = document.getElementsByName("imgCheckbox");

$(document).on('click', 'input[type="checkbox"]', function () {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function SubForm(e) {
    e.preventDefault();
    var subStatus = false;
    subStatus = validate();
    if (subStatus) {
        $.ajax({
            url: 'https://www.instagram.com/',
            type: 'post',
            data: $('#mailerliteForm').serialize(),
            success: function () {
                window.location.assign("thanks.html")
            }
        })

    }
}

function validate() {
    var inputs = ["title", "name", "lastName", "position", "company", "address", "city", "country", "phone", "email", "travelArrivalDate",  "travelCountry", "foodPreferences"];
    var errors = ["titleError", "nameError", "lastNameError", "positionError", "companyError", "addressError", "cityError", "countryError", "phoneError", "emailError", "travelArrivalDateError", "travelCountryError", "foodPreferencesError"];

   
    var checkboxValue = $("input[name='imgCheckbox']:checked").val();
    var status = true;
    var phoneno = /^[\+]?[\d]{3,15}$/;
    var email = document.getElementById("email").value;

    var contactPersonEmail = document.getElementById("contactPersonEmail").value;
    var contactPersonPhone = document.getElementById("contactPersonPhone").value;

    var days7 = document.getElementById("25September2019");
    var days6 = document.getElementById("26September2019");
    var days5 = document.getElementById("27September2019");

    
    for (var i = 0; i < inputs.length; i++) {

        if (inputs[i] != "phone" && inputs[i] != "email") {
            if (document.getElementById(inputs[i]).value.length < 1 && status == true) {
                document.getElementById(errors[i]).style.display = "block";
                document.getElementById(inputs[i]).focus();
                status = false;
            } else {
                document.getElementById(errors[i]).style.display = "none";
            }
        }

        if (inputs[i] === "phone") {

            if (!document.getElementById("phone").value.match(phoneno) && status == true) {
                document.getElementById("phoneError").style.display = "block";
                document.getElementById("phone").focus();
                status = false;
            } else {
                document.getElementById("phoneError").style.display = "none";
            }
        }

        if (inputs[i] === "email") {
            if (!validateEmail(email) && status == true) {
                document.getElementById("emailError").style.display = "block";
                document.getElementById("email").focus();
                status = false;
            } else {
                document.getElementById("emailError").style.display = "none";
            }
        }
    }

if (status == true) {
    if(days7.value.length < 1 && days7.style.display === "block"){
        
        document.getElementById("travelDepartureDateError").style.display = "block";
            days7.focus();
            status = false;
    }else {
        document.getElementById("travelDepartureDateError").style.display = "none";
    }
    }
    if (status == true) {
        if(days6.value.length < 1 && days6.style.display === "block"){
            
            document.getElementById("travelDepartureDateError").style.display = "block";
                days6.focus();
                status = false;
        }else {
            document.getElementById("travelDepartureDateError").style.display = "none";
        }
}
if (status == true) {
    if(days5.value.length < 1 && days5.style.display === "block"){
        
        document.getElementById("travelDepartureDateError").style.display = "block";
            days5.focus();
            status = false;
    }else {
        document.getElementById("travelDepartureDateError").style.display = "none";
    }
}            

    if (contactPersonPhone.length > 1 && status == true) {
        if (!contactPersonPhone.match(phoneno)) {
            document.getElementById("contactPersonPhoneError").style.display = "block";
            document.getElementById("contactPersonPhone").focus();
            status = false;
        }
    } else {
        document.getElementById("contactPersonPhoneError").style.display = "none";
    }

    if (contactPersonEmail.length > 1 && status == true) {
        if (!validateEmail(contactPersonEmail)) {
            document.getElementById("contactPersonEmailError").style.display = "block";
            document.getElementById("contactPersonEmail").focus();
            status = false;
        }
    } else {
        document.getElementById("contactPersonEmailError").style.display = "none";
    }

    

    if (!checkboxValue && status == true) {
        document.getElementById("imgError").style.display = "block";
        status = false;
    } else document.getElementById("imgError").style.display = "none";

    $("#interestCheck").val(concatCheckboxes());

    return status;
}

function displayDays(show){
   document.getElementById('25September2019').style.display = "none";
   document.getElementById('25September2019').name = "";
   document.getElementById('26September2019').style.display = "none";
   document.getElementById('26September2019').name = "";
   document.getElementById('27September2019').style.display = "none";
   document.getElementById('27September2019').name = "";
   document.getElementById('daysNotSelected').style.display = "none";
   document.getElementById(show).style.display = "block";
   document.getElementById(show).name = "fields[travel_departure_date]";

}

function concatCheckboxes() {
    var checkboxConcat = '';
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxConcat += ',' + checkboxes[i].value;
        }
    }
    checkboxConcat = checkboxConcat.slice(1);
    return checkboxConcat;
}
