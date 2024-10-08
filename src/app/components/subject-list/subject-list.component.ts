import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {

  subject: string [] = ["Math", "Science", "History"];
  newSubject: string = '';

  addSubject(){
    if (this.newSubject.trim()){
      this.subject.push(this.newSubject);
      this.newSubject = '';   
    }
  }
  deleteSubject(subject:string){
    this.subject = this.subject.filter(s => s != subject) //delete
  }
}
