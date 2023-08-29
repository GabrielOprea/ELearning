import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/quiz';
import { ProfessorService } from 'src/app/services/professor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
  loggedUser = '';
  currRole = '';
  courseid: string = '';
  quizlist: Observable<Quiz[]> | undefined;
  constructor(private route: ActivatedRoute, private _service: ProfessorService, private userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser') || '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    this.courseid = this.route.snapshot.paramMap.get('courseid')!
    this.quizlist = this.userService.getQuizlist(this.courseid);
  }

  addQuiz() {
    console.log('aici')
  }
  editQuiz(id: number) {
    console.log('aici')
  }
  attemptQuiz(id: number) {
    console.log('aici')
  }
}
