document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('login-page').classList.add('hidden');
  document.getElementById('home-page').classList.remove('hidden');
});

function showSection(sectionId) {
  document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('student-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const studentData = {
    name: document.getElementById('student-name').value,
    roomNo: document.getElementById('room-no').value,
    parentsName: document.getElementById('parents-name').value,
    studentMobile: document.getElementById('student-mobile').value,
    parentMobile: document.getElementById('parent-mobile').value,
    yearOfStudy: document.getElementById('year-of-study').value,
    department: document.getElementById('department').value,
    address: document.getElementById('address').value
  };

  const table = document.getElementById('student-data-table');
  const tbody = table.querySelector('tbody');

  const row = document.createElement('tr');
  for (const key in studentData) {
    const cell = document.createElement('td');
    cell.textContent = studentData[key];
    row.appendChild(cell);
  }

  tbody.appendChild(row);
  table.classList.remove('hidden');
  document.getElementById('student-form').reset();
  document.getElementById('student-form').classList.add('hidden');
});
