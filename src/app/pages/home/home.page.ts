import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public sstAmount: any;
  public price: number;

  constructor(public alertCtrl: AlertController) {
    this.sstAmount = null;
  }

  btnClick(){
    this.sstAmount = (this.calculateSST()).toFixed(2);
    this.presentAlert(this.sstAmount);
  }

  async presentAlert(result: any){
    const alert = await this.alertCtrl.create({
      header: 'Result',
      message: 'The SST Amount is: ' + result,
      buttons: ['OK']
    });
    return await alert.present();
  }

  calculateSST(){
    let sst_percent = 0.06;
    return this.price * sst_percent;
  }

}
