import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { MemberModule } from './member/member.module';
import { BoardModule } from './board/board.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
    /* custom module */
    AppRoutingModule,
    CoreModule,
    MainModule,
    MemberModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }