import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TemplateComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, ComponentsModule, RouterModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TemplateComponent,
  ],
})
export class LayoutModule {}
