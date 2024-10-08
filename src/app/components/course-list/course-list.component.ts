import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  course: string[] = ['BSMT', 'BSCS', 'BSIT'];
  newCourse: string = '';

  addCourse(){
    if (this.newCourse.trim()){
      this.course.push(this.newCourse);
      this.newCourse = ''; // clear input after adding
    }
  }
  deleteCourse(course: string){
    this.course = this.course.filter(f => f != course); // remove course from list
  }
}
