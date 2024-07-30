import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DeptstaffattandanceComponent } from '../deptstaffattandance/deptstaffattandance.component';
import { DeptstafftoppersComponent } from '../deptstafftoppers/deptstafftoppers.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RouterOutlet } from '@angular/router';
import { AboutdeptComponent } from '../aboutdept/aboutdept.component';


@Component({
  selector: 'app-deptpage',
  standalone: true,
  imports: [DeptstaffattandanceComponent, DeptstaffattandanceComponent, DeptstafftoppersComponent, SignInComponent, RouterOutlet, AboutdeptComponent, DeptpageComponent],
  templateUrl: './deptpage.component.html',
  styleUrl: './deptpage.component.css'
})
export class DeptpageComponent {

}
