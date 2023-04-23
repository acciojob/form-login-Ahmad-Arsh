function getFormvalue() {
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  alert(`First name: ${firstName}\nLast name: ${lastName}`);
}
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  getFormvalue();
});
