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
function safeRenderList(listId, items) {
  let list = document.getElementById(listId);
  list.innerHTML = "";
  items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function render() {
  // Players + dropdown
  let playerList = document.getElementById("playerList");
  let select = document.getElementById("attendanceSelect");

  playerList.innerHTML = "";
  select.innerHTML = "";

  players.forEach(p => {
    let li = document.createElement("li");
    li.textContent = "👤 " + p;
    playerList.appendChild(li);

    let option = document.createElement("option");
    option.textContent = p;
    select.appendChild(option);
  });

  safeRenderList("scheduleList", schedule.map(s => "📅 " + s));
  safeRenderList("announcementList", announcements.map(a => "📢 " + a));
  safeRenderList("attendanceList", attendance.map(a => "✅ " + a));
}

render();
