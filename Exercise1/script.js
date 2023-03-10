function ChangeName() {
    let text;
    let person = prompt("Please enter your name", "Fern");
    if (person == null || person == "") {
    text = "User cancelled the prompt.";
    } else {
    text = "Hello " + person;
    }
    document.getElementById("inputName").innerHTML = text;
}
