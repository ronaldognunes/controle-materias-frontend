import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { ContaRoutingModule } from "./conta-routing.module";
import { ContaComponent } from "./conta.component";
import { HttpClientModule } from '@angular/common/http';
import { ContaService } from "./Service/conta.service";




@NgModule({
  declarations:[
    ContaComponent
  ],
  imports:[
    CommonModule,
    ContaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers:[
    ContaService
  ]
})

export class ContaModule{

}
