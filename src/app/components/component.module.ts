import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { CustomTextComponent } from './custom-text/custom-text.component';
// import { HomePage } from './home.page';
// import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ToolbarHeaderComponent, CustomTextComponent],
  declarations: [ToolbarHeaderComponent, CustomTextComponent]
})
export class ComponentModule {}
