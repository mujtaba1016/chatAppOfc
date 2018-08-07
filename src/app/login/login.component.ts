import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router,NavigationEnd } from '@angular/router';

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public loginStatus = true;

  constructor(private socialAuthService: AuthService, private router: Router) {
  	this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.url == '/login') {
          this.loginStatus = false;
          }
          console.log(this.loginStatus)
        }
    });
   }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    //  else if (socialPlatform == "linkedin") {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // }

     this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
       // Now sign-in with userData
        console.log(socialPlatform+" sign in data : " , userData);
		
        localStorage.setItem("currentUser", userData.token);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("image", userData.image);

        this.router.navigate(['/dashboard']);

      }
    );
  }

  logout(){

  }

  ngOnInit() {

  }

  // loginuser(event){
  // 	event.preventDefault()

  // 	const target = event.target
  // 	const email = target.querySelector("#email").value
  // 	const password = target.querySelector("#password").value
  	
  // 	this.auth.userLogin(email, password);
  // 	// console.log(email, password);
  // }
}
