import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './chatList/chatList.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { ChatServiceService } from './service/chatService.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    ChatListComponent,
    ChatMessageComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
