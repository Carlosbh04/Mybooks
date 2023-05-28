import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './pages/books/books.component';
import { BookCodePipe } from './pipes/book-code.pipe';
<<<<<<< HEAD
=======
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksService } from './service/books.service';
import { CommonModule } from '@angular/common';
import { UpdateBookComponent } from './pages/update-book/update-book.component';


>>>>>>> dia5






@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    BookCodePipe,
<<<<<<< HEAD
=======
    CardComponent,
    AddBookComponent,
    UpdateBookComponent
   
>>>>>>> dia5
   
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
=======
    CommonModule,
   
>>>>>>> dia5
    

  
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
