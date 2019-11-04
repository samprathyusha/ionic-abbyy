import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbbyyRTR } from '@ionic-native/abbyy-rtr';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController,private abbyyRTR: AbbyyRTR) {


  

  }
  takepicture(){
    
    this.abbyyRTR.startTextCapture(options)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }


}
