function promptForPassword() {
    const correctPassword = "IdontlikeProgramming";
    let userPassword;

    do {
        userPassword = prompt("Enter your password:");

        if (userPassword !== correctPassword) {
            alert("Incorrect, Try again.");
        }
    } while (userPassword !== correctPassword);
    alert ("Acces Granted!");
    
}