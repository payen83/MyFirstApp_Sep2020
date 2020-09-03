import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';

const { Camera } = Plugins;
@Component({

  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  myImage: any;
  constructor(public sanitizer: DomSanitizer) { 
    this.myImage = null;
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.dataUrl;
    // Can be set to the src of an image now
    // console.log(imageUrl);
    this.myImage = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  ngOnInit() {
  }

}
