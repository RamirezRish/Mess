import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LangSelectComponent } from '../components/lang-select/lang-select.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    LangSelectComponent
  ],
  exports:[
    ChatComponent
  ]
  // providers:[DatePipe]
})
export class ChatModule { }
