let players = JSON.parse(localStorage.getItem("players")) || [];
let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
let announcements = JSON.parse(localStorage.getItem("announcements")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// ---------- SAVE ----------
function saveAll() {
  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("schedule", JSON.stringify(schedule));
  localStorage.setItem("announcements", JSON.stringify(announcements));
  localStorage.setItem("attendance", JSON.stringify(attendance));
}

// ---------- PLAYERS ----------
function addPlayer() {
  let input = document.getElementById("playerInput");
  if (!input.value) return;

  players.push(input.value);
  input.value = "";
  saveAll();
  render();
}

// ---------- SCHEDULE ----------
function addSchedule() {
  let input = document.getElementById("scheduleInput");
  if (!input.value) return;

  schedule.push(input.value);
  input.value = "";
  saveAll();
  render();
}

// ---------- ANNOUNCEMENTS ----------
function addAnnouncement() {
  let input = document.getElementById("announcementInput");
  if (!input.value) return;

  announcements.push(input.value);
  input.value = "";
  saveAll();
  render();
}

// ---------- ATTENDANCE ----------
function markPresent() {
  let select = document.getElementById("attendanceSelect");

  attendance.push(select.value + " - Present");
  saveAll();
  render();
}

// ---------- RENDER EVERYTHING ----------
function render() {
  // Players
  let playerList = document.getElementById("playerList");
  let select = document.getElementById("attendanceSelect");

  playerList.innerHTML = "";
  select.innerHTML = "";

  players.forEach((p, i) => {
    let li = document.createElement("li");
    li.textContent = p;
    playerList.appendChild(li);

    let option = document.createElement("option");
    option.textContent = p;
    select.appendChild(option);
  });

  // Schedule
  let scheduleList = document.getElementById("scheduleList");
  scheduleList.innerHTML = "";
  schedule.forEach(s => {
    let li = document.createElement("li");
    li.textContent = s;
    scheduleList.appendChild(li);
  });

  // Announcements
  let announcementList = document.getElementById("announcementList");
  announcementList.innerHTML = "";
  announcements.forEach(a => {
    let li = document.createElement("li");
    li.textContent = a;
    announcementList.appendChild(li);
  });

  // Attendance
  let attendanceList = document.getElementById("attendanceList");
  attendanceList.innerHTML = "";
  attendance.forEach(a => {
    let li = document.createElement("li");
    li.textContent = a;
    attendanceList.appendChild(li);
  });
}

// RUN ON START
render();
