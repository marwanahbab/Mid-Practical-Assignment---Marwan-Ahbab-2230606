function start() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

   
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all the text boxes before sending the message.");
        return false; 
    } else {
        alert("Message Sent!");
        return true; 
    }
}