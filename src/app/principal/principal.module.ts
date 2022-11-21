import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrincipalRoutingModule } from "./principal-routing.module";
import { PrincipalComponent } from "./principal.component";
import { RelatorioComponent } from './relatorio/relatorio.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { PoloComponent } from './polo/polo.component';
import { MaterialComponent } from './material/material.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    PrincipalComponent,
    RelatorioComponent,
    OrdemServicoComponent,
    PoloComponent,
    MaterialComponent
  ],
  imports:[
    CommonModule,
    PrincipalRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule{}
