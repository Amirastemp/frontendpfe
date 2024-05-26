import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/service/data.service';
import { AuthCandidatComponent } from '../auth-candidat/auth-candidat.component';
import { AuthcandidatService } from 'src/app/views/service/authcandidat.service';
import { SocketServiceService } from 'src/app/views/service/socket-service.service';
import { JobserviceService } from 'src/app/views/service/jobservice.service';
import { Notification } from './notification';
@Component({
  selector: 'app-candidat-layout',
  templateUrl: './candidat-layout.component.html',
  styleUrls: ['./candidat-layout.component.css']
})
export class CandidatLayoutComponent implements OnInit {
  user:any={};
  username='';
  candidatId='';
  profileCompletion: number = 0;
  notifications: any= [];
 jobPostId='';
 date='';
 status=""
 title="";
 Date=new Date();
 image:any;
 menuOpen=false;
  constructor(private datas:DataService,private authCandidate:AuthcandidatService,private socketService:SocketServiceService,private job:JobserviceService){}
  ngOnInit(): void {
    this.user=this.datas.getUser();
    this.candidatId=this.user.id;
    //display the user to bring the image and the username
    const user =this.datas.getUserById(this.candidatId).subscribe((data)=>{
      this.image=data.image;
      this.username=data.userName;
    })
    console.log(this.username);

    //Obtenir le pourcentage de complétion du profil du candidat depuis le service
        this.authCandidate.getProfileCompletion(this.candidatId).subscribe(completion => {
          this.profileCompletion = completion;
          console.log(this.profileCompletion);
        });
        this.socketService.onNotification((notification: any) => {
          this.jobPostId=notification.requestData.jobPost
          this.status=notification.requestData.status;
          this.date=notification.requestData.appliedAt;
          this.job.getJobPostDetails(this.jobPostId).subscribe(data=>{
            console.log(data);
            this.title=data.data.title;
                          // Créer une nouvelle instance de Notification pour chaque notification
          const newNotification = new Notification(this.status, this.date, this.title);
                          // Ajouter la nouvelle notification à la liste des notifications
          this.notifications.push(newNotification);

          })
        console.log(this.notifications)
          console.log(notification);


        })
  }
  toggleMenu() {

    this.menuOpen = !this.menuOpen;
  }
  getTimeElapsed(notificationDate: Date): string {
    const currentTime = Date.now();
    const notificationTime = new Date(notificationDate).getTime();
    const elapsedTime = currentTime - notificationTime;

    // Convertir le temps écoulé en une chaîne lisible
    const seconds = Math.floor(elapsedTime / 1000);
    if (seconds < 60) {
      return seconds + 's';
    } else {
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) {
        return minutes + 'mn';
      } else {
        const hours = Math.floor(minutes / 60);
        return hours + 'h';
      }
    }
  }
  // Déclarer une variable pour stocker l'indice de l'élément sélectionné
selectedItemIndex: number = -1;

handleNotificationClick(index: number) {
  // Vérifier si l'élément actuellement sélectionné est différent de l'élément cliqué
  if (this.selectedItemIndex !== index) {
    // Mettre à jour l'indice de l'élément sélectionné
    this.selectedItemIndex = index;
  } else {
    // Si l'élément cliqué est déjà sélectionné, désélectionner
    this.selectedItemIndex = -1;
  }
}
deleteNotification(notification: any) {
  // Implémentez le code pour supprimer la notification de la liste
  // Par exemple, si notifications est un tableau, vous pouvez utiliser splice() pour le supprimer
  const index = this.notifications.indexOf(notification);
  if (index !== -1) {
    this.notifications.splice(index, 1);
  }
}
}
