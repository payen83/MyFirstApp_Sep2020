import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseURL: string;
  public photos: Array<any>;
  constructor(public httpClient: HttpClient) { 
    this.photos = [];
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  searchById(id: any){
    return this.photos.find((photo) => { return photo.id == id});
  }

  getPhotos() {
    let url: string = this.baseURL + 'photos';
    return new Promise ((resolve, reject) => { 
      this.httpClient.get(url).subscribe((response: any) => { 
        // console.log(response);
        this.photos = response;
        resolve(response);
      }, (error: any) => { reject(error); } );
    })
  }


}
