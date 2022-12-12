const studentsBirthDays = students => {
  const sortedObj = {};
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Lul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const studentsBday = students.map(student => {
    const monthOfBorn = month[new Date(student.birthDate).getMonth()];
    return { ...student, birthDate: monthOfBorn };
  });
  console.log(studentsBday);

  studentsBday.forEach(student => {
    sortedObj.hasOwnProperty(student.birthDate)
      ? (sortedObj[student.birthDate] = [student.name].concat(student.name))
      : (sortedObj[student.birthDate] = [student.name]);
  });
  return sortedObj;
};

console.log(
  studentsBirthDays([
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/05/2005' },
  ]),
);
//  => {Jan: ['Tom','Ben'], Mar: ['Sam']}
