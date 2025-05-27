import { Component } from 'react';
import { StudentType, StudentFn, StudentClass } from './Student';
import usersData from '../users.json';
/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// implement a StudentsList component here

const students = [
  {
    id: 1,
    name: 'John',
    age: 20,
    grade: 'A',
  },
  {
    id: 2,
    name: 'Jane',
    age: 21,
    grade: 'B',
  },
  {
    id: 3,
    name: 'Jack',
    age: 22,
    grade: 'C',
  },
];
export function StudentsListFn() {
  return (
    <div>
      {students.map((student) => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}

export class StudentsListClass extends Component {
  render() {
    return <div>Students List</div>;
  }
}
