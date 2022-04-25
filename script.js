

function checkEmail() {
    let error_img = document.getElementById('error-img');
    error_img.style.display = "none";
    let error_info = document.getElementById('error-info');
    error_info.style.display = "none";

    let emailField = document.getElementById("email-field");
    let email = emailField.value;
    
    if (email.length > 7 && email.contains('@') && email.contains('.') ) {
        emailField.style.border = '0.25px solid #f96262';
        error_info.style.display = "block";
        error_img.style.display="inline";
    } else {
        emailField.style.border = '1.25px solid #abd499';
    }
}
