import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
user:any={};
userId='';
image:any;
username='';
  constructor(private _auth:AuthadminService, private datas:DataService,private router :Router) { }
  isLoggedIn = false;
  ngOnInit(): void {
    this.isLoggedIn = this.datas.isLoggedIn();
    this.user=this.datas.getUser();
    this.userId=this.user.id;
    //display the user to bring the image and the username
    const user =this.datas.getUserById(this.userId).subscribe((data)=>{
      this.image=data.image;
      this.username=data.userName;
    })
  }
  navigateToProfile() {
    this.router.navigate(['/admin/profile'], { queryParams: { id: this.userId } });
  }
  isHRManagementOpen: boolean = false;

  toggleHRManagement(): void {
    this.isHRManagementOpen = !this.isHRManagementOpen;
  }
  initSidebarToggle(): void {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        const sidebar = document.querySelector("#sidebar");
        if (sidebar) {
          sidebar.classList.toggle("collapsed");
        }
      });
    }
  }

  toggleTheme(): void {
    this.toggleLocalStorage();
    this.toggleRootClass();
  }

  toggleRootClass(): void {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
  }

  toggleLocalStorage(): void {
    if (this.isLight()) {
      localStorage.removeItem("light");
    } else {
      localStorage.setItem("light", "set");
    }
  }

  isLight(): boolean {
    return !!localStorage.getItem("light");
  }
  menuItems = [
    { label: 'Logout', iconClass: 'fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400 btn-primary' },
    // Add more menu items with different icons here
];

handleItemClick(item: any) {
    // Handle item click logic here
    console.log('Item clicked:', item.label);
}
logout(): void {
  this._auth.logout().subscribe({
    next: (res: any) => {
      // console.log(res);
      this.datas.clean();
      window.location.reload();
      // this._router.navigate(['/login']);
    },
    error: err => {
      console.log(err);
    }
  });
  this.isLoggedIn=false;
}
}
