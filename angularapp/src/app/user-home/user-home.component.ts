import { UserAuthService } from './../services/user-auth.service';
import { AddIssue } from './../model/add-issue';
import { RegisterIssueService } from './../services/register-issue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
   issueList!:AddIssue[];
   user = new User();
   userIssue!:AddIssue[];
  constructor(private service:RegisterIssueService,private userAuthService:UserAuthService, private router: Router) { }

  ngOnInit(): void {
    // this.service.fetchIssueList().subscribe(
    //   data=>{
    //     this.issueList = data;
    //     console.log("Response recieved")
    //     console.log(data)
    //   },
    //   error=>console.log("Exception occured")
    //  )

    
     //fetch issue of specific user
    this.service.getIssueList(this.userAuthService.getUser()).subscribe(//
    data=>{
      this.userIssue = data;
      console.log("Response recieved")
      console.log(data)
    },
    error=>console.log("Exception occured")
  )
  }
   public logout(){
    this.user.active=false;
    this.router.navigate(['/login'])
   return this.userAuthService.clear();
      
  }

}
