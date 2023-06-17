import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form?: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();

    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }

  initForm(){
    this.form = this.fb.group({
      username: null,
      password: null,
    });
  }

  onSubmit(){
    this.service.loginUser(this.form?.value).subscribe(
      (it) => {
        localStorage.setItem('token', it);
        this.service.getCurrentUser().subscribe(
          value => {
            console.log('tvv-current:', value);
            // ADMIN
            if(value?.role == 0){
              this.router.navigate(['dashboard']);
              localStorage.setItem('role', 'ADMIN')
            }else{
              this.router.navigate(['employees/sales']);
              localStorage.setItem('role', 'NV')
            }
          }
        )
      }
    )
  }

}
