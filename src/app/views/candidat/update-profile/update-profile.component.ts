import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthcandidatService } from '../../service/authcandidat.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  professionalExperiences: any[] = [{ title: '', company: '', startDate: '', endDate: '',description:''}];
  academicExperiences: any[] = [{ degree: '', institution: '', startDate: '', endDate: '', description: '' }];
  skills: any[] = [{ name: '', proficiency: 'Beginner' }];
  candidat:any={};
  selectedUserId:string='';
  candidatData:any={};
  professionalExp: any = {}
  academicExp: any = {};
  skill: any ={};
  cvFile='';
  // profilePhotoPreview:any='';

  constructor(private routeA:ActivatedRoute, private authCandidat:AuthcandidatService,private datas:DataService,) { }

  ngOnInit(): void {
    this.routeA.queryParams.subscribe(params => {
      this.selectedUserId = params['id'];
      console.log(this.selectedUserId);
      this.getCandidat()

    });

  }



 getCandidat(){
  this.authCandidat.getcandidatbyid(this.selectedUserId).subscribe((data:any)=>{
    console.log(data);
    this.candidatData=data;

      this.datas.getUserById(data.user).subscribe((user:any)=>{
      this.candidat=user;
      console.log(this.candidat);
    });
  });
 }
  // addAcademicExperience(): void {
  //   // Add a new empty academic experience object to the array
  //   this.academicExperiences.push({ degree: '', institution: '', startDate: '', endDate: '', description: '' });
  // }
  // addSkill(): void {
  //   // Add a new empty skill object to the array
  //   this.skills.push({ name: '', proficiency: 'Beginner' });
  // }
    // addExperience(): void {
    //   // Add a new empty experience object to the array
    //   this.professionalExperiences.push({ title: '', company: '', startDate: '', endDate: '' ,description:''});
    // }
    onSubmit(): void {
      // Update the candidate data
      this.authCandidat.updateuserById(this.candidat._id, this.candidat).subscribe((data: any) => {
        console.log('Candidate data successfully updated');
      });

      // Save professional experiences
      this.authCandidat.addExperienceProbyId(this.selectedUserId, this.professionalExp).subscribe((data: any) => {
        console.log(this.professionalExp);
        console.log('Professional experiences successfully saved');
      });

      // Save academic experiences
      this.authCandidat.addExperienceAcabyId(this.selectedUserId, this.academicExp).subscribe((data: any) => {
        console.log(this.academicExp);
        console.log('Academic experiences successfully saved');
      });

      // Save skills
      this.authCandidat.addskillsbyId(this.selectedUserId, this.skill).subscribe((data: any) => {
        console.log(this.skill);
        console.log('Skills successfully saved');
      });
      this.authCandidat.updateCandidat(this.selectedUserId,this.cvFile).subscribe((data:any)=>{
        console.log("update successfully ");
      })
    }









    // onPhotoChange(event: any) {
    //   const file = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       this.profilePhotoPreview = reader.result as string;
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }


}
