   function getFormvalue() {
        let firstName = document.querySelector('[name="firstname"]').value;
        let lastName = document.querySelector('[name="lastname"]').value;
        alert(`${firstName} ${lastName}`);
    }