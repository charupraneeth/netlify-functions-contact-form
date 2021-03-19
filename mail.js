const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("form");
async function sendMail() {
  const response = await fetch("/.netlify/functions/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fromEmail: email.value,
      fromName: name.value,
      fromMessage: message.value,
      subject: "contact mail",
    }),
  });
  console.log(response);
  if (response.status == 200) {
    myFunction("message sent successfully");
  } else myFunction("error sending message, try again later");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
});

// snack bar function
function myFunction(msg) {
  // Get the snackbar DIV
  const x = document.getElementById("snackbar");
  x.textContent = msg;
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
