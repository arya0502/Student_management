import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DeptpageComponent } from '../deptpage/deptpage.component';
import { RouterOutlet } from '@angular/router';
import { StudenhomepageComponent } from '../studenhomepage/studenhomepage.component';
import { AdminhomeComponent } from '../adminhome/adminhome.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [DeptpageComponent, RouterModule, RouterOutlet, StudenhomepageComponent, AdminhomeComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
