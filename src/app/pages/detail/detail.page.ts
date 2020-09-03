import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public photoInfo: any;
  public id: any;
  constructor(
    public activatedRoute: ActivatedRoute, 
    public api: ApiService) { 
    this.photoInfo = {
      title: null,
      id: null,
      url: null,
      thumbnailUrl: null
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id ==> ', this.id);

  }

  ngOnInit() {
    let data = this.api.searchById(this.id);
    // console.log(data);
    this.photoInfo = data;
  }

}
