import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    MenuComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, AboutUsComponent, ContactUsComponent, MenuComponent],
})
export class ComponentsModule {}
