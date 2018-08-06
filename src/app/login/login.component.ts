import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

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
      // 	if (userData.success) {
        console.log(socialPlatform+" sign in data : " , userData);
		    // }else{
		    // window.alert(userData.message)	
		    // }
      		
        // Now sign-in with userData
        // ...
            
      }
    );
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
