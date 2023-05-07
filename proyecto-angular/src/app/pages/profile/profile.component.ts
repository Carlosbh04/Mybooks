
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { __values } from 'tslib';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent{
  @ViewChild('msgActu') changes: ElementRef;
  @ViewChild('msgNoActualizado') nochanges:ElementRef

  public user:User;
  
  constructor() {
    this.user = new User (26,'Carlos','hernandez','Carloselgamer00@gmail.com','https://thumbs.dreamstime.com/b/fot%C3%B3grafo-en-roca-15840594.jpg','carlos')

  }
    public enviar(name:string,last_name:string, email:string, photo:string){
    this.user.name = name;
    this.user.last_name = last_name;
    this.user.email = email;
    this.user.photo = photo;
  }
  }

