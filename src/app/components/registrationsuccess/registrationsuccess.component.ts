import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrationsuccess',
  templateUrl: './registrationsuccess.component.html',
  styleUrls: ['./registrationsuccess.component.css']
})
export class RegistrationsuccessComponent implements OnInit {

  constructor(private router : Router,  private route: ActivatedRoute) { }
  paramName: string | null = "";
  ngOnInit(): void 
  {

        // Access the parameter using paramMap
        this.route.paramMap.subscribe(params => {
          this.paramName = params.get('paramName');
        });
    setTimeout(() => {
      this.router.navigate(['login', this.paramName]);
  }, 7000);
  }

}
