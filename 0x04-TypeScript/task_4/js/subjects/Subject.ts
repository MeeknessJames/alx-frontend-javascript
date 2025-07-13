namespace Subjects {
  export class Subject {
    teacher: Teacher | null = null;

    set setTeacher(value: Teacher) {
      this.teacher = value;
    }
  }
}
