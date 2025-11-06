function check() {
  const input = document.getElementById("pass").value;
  if(input === "051626") {
    window.location.href = "home.html"; // ← DITO TAMA NA
  } else {
    alert("Wrong password po baby 😅 Try again!");
  }
}
