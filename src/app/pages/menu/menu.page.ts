import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SplashPage } from '../splash/splash.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    public router: Router, 
    public modalCtrl: ModalController) { }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: SplashPage
    });
    return await modal.present();
  }

  navigatePage(){
    // console.log('test..');
    this.router.navigateByUrl('/photos');
  }

  ionViewWillLeave(){
    console.log('this page will exit...')
  }

  ngOnInit() {
    this.presentModal();
    console.log('this page just finished loading..')
  }

}
