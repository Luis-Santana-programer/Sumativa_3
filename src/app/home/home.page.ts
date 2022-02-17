import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  respuesta: any;
  gif: any;
  constructor(private api: ApiService) {}

  New(){
    this.api.getData('').subscribe((result:any)=>{
      this.respuesta=result.answer;
      this.gif=result.image;
      console.log(result.image);
    });
  }

}
