import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photoList: Array<any>;
  public photoViews: Array<any>;
  constructor(public api: ApiService) { 
    this.photoList = [];
    this.photoViews = [];
  }

  ngOnInit() {
    this.api.getPhotos().then((data: Array<any> = []) => { 
      this.photoList = data;
      this.extractPhotos();
    })
  }

  extractPhotos(event?: any) {
    setTimeout(() => {

      // let splicedItems: any = this.photoList.slice(0, 30);

      // for (let item of splicedItems){
      //   this.photoViews.push(item);
      // }
      let currentItem = this.photoViews.length;
      for (let i = 0; i < 30; i++){
        currentItem += i;
        this.photoViews.push(this.photoList[currentItem])
      }

      if (event){
        event.target.complete();
        if (this.photoList.length == this.photoViews.length) {
          event.target.disabled = true;
        }
      }

      console.log('data ==> ', this.photoViews);

    }, 500);

  }

}
