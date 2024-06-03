import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { R } from '@fullcalendar/core/internal-common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit{
  data: any = {};
  message: string = '';
  messageColor: string = 'red';
  verificationSent: boolean = false;
  forgotPasswordMode: boolean = false;

  constructor(private datas: DataService,private router :Router) {}
ngOnInit():void{}
  toggleForgotPasswordMode() {
    this.forgotPasswordMode = !this.forgotPasswordMode;
    this.verificationSent = false;
  }

  sendVerificationCode() {
    this.datas.sendVerificationCode(this.data.email)
      .subscribe(
        (response: any) => {
          this.message = 'Code de vérification envoyé à votre adresse e-mail.';
          this.messageColor = 'green';
          this.verificationSent = true;
        },
        (error: any) => {
          this.message = 'Erreur lors de l\'envoi du code de vérification.';
          this.messageColor = 'red';
        }
      );
  }

  onSubmit() {
    if (this.forgotPasswordMode) {
      if (this.verificationSent) {
        this.datas.verifyCodeAndResetPassword(this.data)
          .subscribe(
            (response: any) => {
              this.message = 'Mot de passe réinitialisé avec succès.';
              this.messageColor = 'green';
              this.router.navigate(['/']); 
            },
            (error: any) => {
              this.message = error.error.error;
              this.messageColor = 'red';
            }
          );
      } else {
        this.sendVerificationCode();
      }
    } else {
      this.datas.changepassword(this.data)
        .subscribe(
          (response: any) => {
            this.message = 'Mot de passe réinitialisé avec succès.';
            this.messageColor = 'green';
            this.router.navigate(['/']); 
          },
          (error: any) => {
            if (error.status === 400) {
              this.message = 'Les mots de passe ne correspondent pas.';
            } else if (error.status === 401) {
              this.message = 'Email ou mot de passe invalide.';
            } else {
              this.message = 'Erreur lors de la réinitialisation du mot de passe.';
            }
            this.messageColor = 'red';
          }
        );
    }
  }
  }
 
  

