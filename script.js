function getFormvalue() {
    //Write your code here
	  const form = document.getElementById("myForm");
  const fname = form.elements["fname"].value;
  const lname = form.elements["lname"].value;
  alert("First Name: " + fname + "\nLast Name: " + lname);


}
