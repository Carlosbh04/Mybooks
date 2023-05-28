import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
<<<<<<< HEAD
import { BooksComponent } from './pages/books/books.component';
=======
import { BooksComponent } from './pages/books/books.component'
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
>>>>>>> dia5


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'footer' , component:FooterComponent},
  {path:'profile', component:ProfileComponent},
<<<<<<< HEAD
  {path:'books',component:BooksComponent}
=======
  {path:'books',component:BooksComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'update-book/:id',component:UpdateBookComponent},
>>>>>>> dia5
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
