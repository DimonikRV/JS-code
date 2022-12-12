export const studentsBirthDays = students => {
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

  const sortStudents = students
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .reduce((acc, student) => {
      const monthOfBorn = month[new Date(student.birthDate).getMonth()];

      return {
        ...acc,
        [monthOfBorn]: acc[monthOfBorn] ? acc[monthOfBorn].concat(student.name) : [student.name],
      };
    }, {});
  return sortStudents;
};
// students.map(student => {});
console.log(
  studentsBirthDays([
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/05/2005' },
    { name: 'Bob', birthDate: '02/15/2007' },
    { name: 'Ann', birthDate: '02/08/2007' },
  ]),
);
//  => {Jan: ['Tom','Ben'], Mar: ['Sam']}
