import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
/*import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { CurrentAccountComponent } from './current-account/current-account.component';**/



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    /*SavingsAccountComponent,
    CurrentAccountComponent,**/
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
