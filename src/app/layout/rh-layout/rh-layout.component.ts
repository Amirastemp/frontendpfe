import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { DataService } from 'src/app/views/service/data.service';
import { Output, EventEmitter,HostListener } from '@angular/core';
import { SocketServiceService } from 'src/app/views/service/socket-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Notification } from './notification';
@Component({
  selector: 'app-rh-layout',
  templateUrl: './rh-layout.component.html',
  styleUrls: ['./rh-layout.component.css']
})
export class RHLayoutComponent implements OnInit {
  notifications: any= [];
  socket: any;
  notif:any={};
  searchResults: any[] = [];
  searchQuery:string='';
  totalelement=0;
  searchPerformed: boolean = false;
  menuOpen=false;
  isContextMenuOpen: boolean = false;
  timeElapsed: number = 0;
  timer:any;
  username='';
  user:any={};
  @Output() userSelected = new EventEmitter<any>();

  constructor(private datas : DataService,private socketService: SocketServiceService,private router: Router, private route: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.socketService.onNotification((notification: any) => {
      // Récupérer le nom de l'utilisateur à partir de son ID
      this.datas.getUserById(notification.requestData.id_emp).subscribe((user: any) => {
        // Créer une nouvelle instance de Notification pour chaque notification
        const newNotification = new Notification(user.userName, notification.requestData.createdAt, notification.requestData.cause);


        // Ajouter le nom de l'utilisateur et la date de mise à jour à la nouvelle notification
        newNotification.userName = user.userName;
        newNotification.date = notification.requestData.createdAt;
        newNotification.cause = notification.requestData.cause;

        // Ajouter la nouvelle notification à la liste des notifications
        this.notifications.push(newNotification);
      });
    });

  this.user=this.datas.getUser();
  console.log(this.user);
  this.username=this.user.username;
  console.log(this.username);
  this.getTimeElapsed(this.notif.date);

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

/******************************notification******************************************* */
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







/******************searching***************************************** */
@HostListener('document:click', ['$event'])
onClick(event: MouseEvent) {
  // Check if the click event occurred outside of the search input and search results container
  const target = event.target as HTMLElement;
  const isInputOrResults = target.closest('.search-input') || target.closest('.search-results');
  // If the click event occurred outside of the search input and search results container, hide the results
  if (!isInputOrResults) {
    this.clearSearchResults();
  }

}
onSearch(): void {
     this.datas.search(this.searchQuery)
          .subscribe((data:any) => {
            console.log(data)
              this.searchResults = data.results;
              this.totalelement=data.totalElements;

              this.searchPerformed=true;
          }, (error:any) => {
              console.error('Error fetching search results:', error);
      });
  }


  selectUser(user: any) {
    this.userSelected.emit(user);
    this.router.navigate(['/rh/employees'], { queryParams: { id: user._id } });
  }

  onInput(event: any) {
    // Clear search results when search input is empty
      this.clearSearchResults();
  }
  clearSearchResults() {
    this.searchResults = [];
    this.searchPerformed = false;
  }
}



