function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("welcomeText").textContent = `Welcome, ${username}!`;
  } else {
    alert("Please enter both username and password.");
  }
}

function logout() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
}

function showMessage() {
  alert("Student support will contact you shortly.");
}

function filterGrades() {
  const selected = document.getElementById("filterSubject").value;
  const rows = document.querySelectorAll("#gradesTable tr[data-subject]");

  rows.forEach(row => {
    if (selected === "all" || row.dataset.subject === selected) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
