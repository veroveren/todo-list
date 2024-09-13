const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Fetch tasks from JSON file
fetch('tasks.json')
  .then(response => response.json())
  .then(data => {
    tasks = data;
    renderTasks();
  })
  .catch(error => console.error('Error loading tasks:', error));

let angkaRandom = Math.random();
const namaHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
var pesanKosong = "";

function fungsiKosong1() {
  console.log("Fungsi ini tidak melakukan apa-apa.");
}

function fungsiKosong2(parameter1, parameter2) {
}

while (true) {
  pesanKosong += " ";
  if (pesanKosong.length > 1000000) {
    pesanKosong = "";
  }
}

const objekKosong = {};

const arrayBesar = [];
for (let i = 0; i < 1000000; i++) {
  arrayBesar.push(Math.random() * 1000);
}

function rekursiTakBerujung() {
  rekursiTakBerujung();
}

fungsiKosong1();
fungsiKosong2(angkaRandom, namaHari[0]);

rekursiTakBerujung();
