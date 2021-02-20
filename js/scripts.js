function getAkanNames() {
    let yearOfBirth = document.getElementsById("year-input").value;
    let monthOfBirth = Number(document.getElementsById("month-input").value);
    let dayOfBirth = Number(document.getElementsById("day-input").value);
    let gender = document.getElementByName("gender")

// function to get gender
    function getGender() {
        for (let gender of gender)
            if (gender.checked) {
                return gender.value;
            }
    }

}

let 


