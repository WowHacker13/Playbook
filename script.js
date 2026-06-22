let players = [];

function addPlayer() {
  let input = document.getElementById("playerInput");
  if (!input.value) return;

  players.push(input.value);
  input.value = "";
  updatePlayers();
}

function updatePlayers() {
  let list = document.getElementById("playerList");
  let select = document.getElementById("attendanceSelect");

  list.innerHTML = "";
  select.innerHTML = "";

  players.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    list.appendChild(li);

    let option = document.createElement("option");
    option.textContent = p;
    select.appendChild(option);
  });
}

function addSchedule() {
  let input = document.getElementById("scheduleInput");
  if (!input.value) return;

  let li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("scheduleList").appendChild(li);

  input.value = "";
}

function markPresent() {
  let select = document.getElementById("attendanceSelect");

  let li = document.createElement("li");
  li.textContent = select.value + " - Present";

  document.getElementById("attendanceList").appendChild(li);
}

function addAnnouncement() {
  let input = document.getElementById("announcementInput");
  if (!input.value) return;

  let li = document.createElement("li");
  li.textContent = input.value;

  document.getElementById("announcementList").appendChild(li);

  input.value = "";
}
