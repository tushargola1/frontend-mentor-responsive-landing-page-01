const submitBtn = () => {
     // Prevent the form from being submitted and the page from reloading
    const emailInput = document.getElementsByClassName('input')[0]; // Access the first element of the collection
    const invalidEmailMessage = document.getElementById('error-msg');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    if (emailRegex.test(emailInput.value)) {
        // Valid email
        invalidEmailMessage.style.display = "none";
        emailInput.style.borderColor = ""; // Reset input border color
        emailInput.style.color = ""; 
        emailInput.style.backgroundColor = ""
        window.location.href = 'subscribed-page.html';
    } else {
        // Invalid email
        invalidEmailMessage.style.display = "block";
        invalidEmailMessage.style.color = "red"; // Set error message color to red
        emailInput.style.borderColor = "red"; 
        emailInput.style.border = "1px";
        emailInput.style.color = "red";
        emailInput.style.backgroundColor="red"
        emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
    }
}   


// back to home page

const backToHome = ()=>{
    window.location.href = 'index.html';
}