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

  const studentsBday = students.reduce((acc, student) => {
    const monthOfBorn = month[new Date(student.birthDate).getMonth()];
    return {
      ...acc,
      [monthOfBorn]: [],
    };
  }, {});
  console.log(studentsBday);
  // if(month.includes(studentsBday[]))
};
console.log(
  studentsBirthDays([
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/05/2005' },
    { name: 'Bob', birthDate: '02/05/2007' },
    { name: 'Ann', birthDate: '02/08/2007' },
  ]),
);
//  => {Jan: ['Tom','Ben'], Mar: ['Sam']}
