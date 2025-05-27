/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from 'react';

// implement a Student component here

export interface StudentType {}

export function StudentFn({ student }) {
  return (
    <div data-testid="student">
      <div className="student-card-container">
        <h2>{student.grade}</h2>
        <div>
          {student.name} - {student.age}
        </div>
      </div>
    </div>
  );
}

export class StudentClass extends Component {
  render() {
    return <div data-testid="student">Student</div>;
  }
}
