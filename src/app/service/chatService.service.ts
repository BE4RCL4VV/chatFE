import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { ChatMessage } from '../models/chat';
import { map, tap } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  //public obs: Observable<number> = interval(5000);
  //public message: Observable<ChatMessage[]> = [];
  public data: ChatMessage[] = [];

  public chatMessage: ChatMessage = {
    username: "",
    message: "",
    id: "",
    created_on: new Date,
    updated_on: new Date,
    channel: ""
  };

  private apiUrl = "http://73.19.65.35:3500/api/";

  constructor(private http: HttpClient) {

   }
   public createNewMessage(message: ChatMessage) {
     this.data.push(message)
   }
   public getMessage(): Observable<ChatMessage[]> {
    return of(this.data); 
   }
   public updateChannelName(channel: string, name: string) {
     this.http.get(`${this.apiUrl}/channel/${channel}`)
     this.data.push();
   }

   public getMessagesByChannel(channel: string): Observable<any> {
     return this.http.get(`${this.apiUrl}/channel/${channel}`);    
   }
   public getAllChannel(): Observable<any> {
    return this.http.get(`${this.apiUrl}/channel/`);    
  }
   public getAllMessages(): any {
     return this.data;
   }
   public getChannels(): Observable<any> {
    // return a string array of the channe names as an observable
    return this.http.get(this.apiUrl + "channel/").pipe(
      tap((data) => {
        console.log("the channel list is: ", data);
      }),
      map((data) => {
        return data;
      })
    );
   }


}
