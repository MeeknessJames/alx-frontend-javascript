interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Meekness',
  lastName: 'James',
  age: 25,
  location: 'Port Harcourt',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'Lagos',
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement('table');
  table.border = '1';

  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  students.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
