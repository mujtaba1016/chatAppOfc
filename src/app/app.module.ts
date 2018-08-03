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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponent,
    ChannelsComponent,
    SearchModalComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  SearchModalComponent
]
})
export class AppModule { }
