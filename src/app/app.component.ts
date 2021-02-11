import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'AcmeBank-App';
  li:any; 
  lis=[]; 

  public total:number;
  public num:number;

  constructor(private http : HttpClient){ 
  }

  ngOnInit(): void { 
    this.http.get('http://localhost:8080/api/accounts') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li;  
    }); 




    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }

  calculateTotal(){
 this.total = this.total + this.num;
  }
}
