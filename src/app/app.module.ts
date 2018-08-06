import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChannelsComponent } from './channels/channels.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { ChatsComponent } from './chats/chats.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
// import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("672998839726997")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          }
      ]);
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponent,
    ChannelsComponent,
    SearchModalComponent,
    ChatsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent],
    entryComponents: [
      SearchModalComponent
    ]
})
export class AppModule { }
