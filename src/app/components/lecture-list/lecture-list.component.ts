import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {

  lectures: { duration: string; course: string; day: string; year: number; teacher: string }[] = [
    { duration: '1 hour', course: 'Mathematics', day: 'Monday', year: 2024, teacher: 'De Vera' },
    { duration: '2 hours', course: 'Physics', day: 'Wednesday', year: 2024, teacher: 'Kim' }
  ];

  newDuration: string = "";
  newCourse: string = "";
  newDay: string = "";
  newYear: number = 2024;
  newTeacher: string = "";

  addLecture() {
    if (this.newDuration.trim() && this.newCourse.trim() && this.newDay.trim() && this.newYear > 0 && this.newTeacher.trim()) {
      this.lectures.push({ 
        duration: this.newDuration, 
        course: this.newCourse, 
        day: this.newDay, 
        year: this.newYear, 
        teacher: this.newTeacher 
      });
      this.resetInputs();
    }
  }

  deleteLecture(lecture: { duration: string; course: string; day: string; year: number; teacher: string }) {
    this.lectures = this.lectures.filter(l => l.course !== lecture.course);
  }

  resetInputs() {
    this.newDuration = "";
    this.newCourse = "";
    this.newDay = "";
    this.newYear = 2024;
    this.newTeacher = "";
  }
}
