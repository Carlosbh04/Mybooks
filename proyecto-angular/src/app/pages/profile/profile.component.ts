import { style } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { __values } from 'tslib';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('msgActu') changes: ElementRef;
  @ViewChild('msgNoActu') noChanges: ElementRef;

  public profile: User;

  constructor(private renderer2: Renderer2, public userService: UserService){
    this.profile = this.userService.user;
    if (this.profile.photo == null) {
      this.profile.photo = "../../../assets/img/foto-perfil.jpg";
    }
  }

  modify(name:string,last_name:string,email:string,photo:string){
    const msgActu = this.changes.nativeElement;
    const msgNoActu = this.noChanges.nativeElement;
    let modify:boolean = false;

    if (name != '') {
      this.profile.name = name;
      modify = true;
    }
    if (last_name != '') {
      this.profile.last_name = last_name;
      modify = true;
    }
    if (email != '') {
      this.profile.email = email;
      modify = true;
    }
    if (photo != '') {
      this.profile.photo = photo;
      modify = true;
    }

    if (modify == true) {
      this.renderer2.setStyle(msgNoActu, 'display', 'none');
      this.renderer2.setStyle(msgActu, 'display', 'block');
      modify = false;
    }else{
      this.renderer2.setStyle(msgActu, 'display', 'none');
      this.renderer2.setStyle(msgNoActu, 'display', 'block');
    }

    setTimeout(()=>{
      this.renderer2.setStyle(msgNoActu, 'display', 'none');
      this.renderer2.setStyle(msgActu, 'display', 'none');
    }, 3000);
  }
}