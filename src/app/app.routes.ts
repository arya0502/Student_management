import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModel } from '@angular/forms';
import { DeptpageComponent } from './deptpage/deptpage.component';
import { DeptstaffattandanceComponent } from './deptstaffattandance/deptstaffattandance.component';
import { DeptstaffmarksComponent } from './deptstaffmarks/deptstaffmarks.component';
import { DeptstafftoppersComponent } from './deptstafftoppers/deptstafftoppers.component';
import { AboutdeptComponent } from './aboutdept/aboutdept.component';
import { StudenhomepageComponent } from './studenhomepage/studenhomepage.component';
import { TrackappComponent } from './trackapp/trackapp.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'sign-in', component: SignInComponent},
    {path: 'deptpage', component:DeptpageComponent},
    {path: 'deptstaffatt', component:DeptstaffattandanceComponent},
    {path: 'deptstaffmarks', component:DeptstaffmarksComponent},
    {path: 'deptstafftopper', component:DeptstafftoppersComponent},
    {path: 'aboutdept', component: AboutdeptComponent},
    {path: 'student', component: StudenhomepageComponent},
    {path: 'track', component:TrackappComponent},
    {path: 'registration', component:RegistrationComponent},
    {path: 'admin', component:AdminhomeComponent}
  ];