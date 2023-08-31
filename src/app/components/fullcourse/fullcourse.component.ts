import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/models/chapter';
import { UserService } from 'src/app/services/user.service';
import * as $ from 'jquery';
import { Course } from 'src/app/models/course';
import { HttpClient } from '@angular/common/http';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-fullcourse',
  templateUrl: './fullcourse.component.html',
  styleUrls: ['./fullcourse.component.css']
})
export class FullcourseComponent implements OnInit {

  video = 'P2wNzig_SLA';
  courseName = 'springboot';
  chapterlist :Chapter[] | undefined
  courselist : Observable<Course[]> | undefined;
  chapter = new Chapter();
  fileToDownload = '';
  showQA = false;
  showDownloads = false;
  showAnnouncements = false;
  showNotes = false;

  constructor(private _router : Router, private _service : UserService, private activatedRoute: ActivatedRoute, private _http : HttpClient) { }

  ngOnInit(): void {

    $("#qa, #notes, #announcements, #questions, #notestxt, #downloads").hide();
    this.courseName = this.activatedRoute.snapshot.params['coursename'];

    this._service.getChappterListByCourseName(this.courseName).subscribe(
    data => {
      this.chapterlist = data;
      console.log("chapter added Successfully !!!");
    },
    error => {
      console.log("chapter adding Failed !!!");
      console.log(error.error);
    });

    this.courselist = this._service.getCourseListByName(this.courseName);

  }

  openQandA()
  {

    if(!this.showQA) {
      $("#qa").show();
    } else {
      $("#qa").hide();
    }
    this.showQA = !this.showQA;
  }
  openNotes()
  {
    if(!this.showNotes) {
      $("#notes").show();
    } else {
      $("#notes").hide();
    }
    this.showNotes = !this.showNotes;
  }
  openAnnouncements()
  {
    if(!this.showAnnouncements) {
      $("#announcements").show();
    } else {
      $("#announcements").hide();
    }
    this.showAnnouncements = !this.showAnnouncements;
  }
  openDownloads()
  {
    if(!this.showDownloads) {
      $("#downloads").show();
    } else {
      $("#downloads").hide();
    }
    this.showDownloads = !this.showDownloads;
  }
  newQuestion()
  {
    $("#questions").toggle();
  }
  newNotes()
  {
    $("#notestxt").toggle();
  }

  set1()
  {
    $(".box1").css("background-color","green");
    $(".chapter1").addClass("selected");
    $(".box2,.box3,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set2()
  {
    $(".box2").css("background-color","green");
    $(".chapter2").addClass("selected");
    $(".box1,.box3,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set3()
  {
    $(".box3").css("background-color","green");
    $(".chapter3").addClass("selected");
    $(".box1,.box2,.box4,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter4,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set4()
  {
    $(".box4").css("background-color","green");
    $(".chapter4").addClass("selected");
    $(".box1,.box2,.box3,.box5,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter5,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set5()
  {
    $(".box5").css("background-color","green");
    $(".chapter5").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box6,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter6,.chapter7,.chapter8").removeClass("selected");
  }
  set6()
  {
    $(".box6").css("background-color","green");
    $(".chapter6").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box7,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter7,.chapter8").removeClass("selected");
  }
  set7()
  {
    $(".box7").css("background-color","green");
    $(".chapter7").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box6,.box8").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter8").removeClass("selected");
  }
  set8()
  {
    $(".box8").css("background-color","green");
    $(".chapter8").addClass("selected");
    $(".box1,.box2,.box3,.box4,.box5,.box6,.box7").css("background-color","white");
    $(".chapter1,.chapter2,.chapter3,.chapter4,.chapter5,.chapter6,.chapter7").removeClass("selected");
  }

  openChapter(chapterid : string)
  {
    this.fileToDownload = chapterid;
    console.log(chapterid);
    this.video = chapterid.split("watch?v=")[1];
  }

  isScriptLoaded(target: string): boolean
  {
    return document.querySelector('script[src="' + target + '"]') ? true : false
  }

  downloadPdf() {
    
    // const pdfUrl = './assets/Introduction to Spring MVC.pdf';
    // const pdfName = 'Introduction to Spring MVC';
    // FileSaver.saveAs(pdfUrl, pdfName);
    console.log(this.fileToDownload);
 
    window.open("http://localhost:8080/files/" + this.fileToDownload);
  }

  openDoc() {
    const pdfUrl = './assets/Introduction to Spring MVC.pdf';
    window.open(pdfUrl + '#page=1', '_blank', '');
  }

  showMenu(id: string) {
  }
}
