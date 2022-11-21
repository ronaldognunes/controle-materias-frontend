import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialComponent } from "./material/material.component";
import { OrdemServicoComponent } from "./ordem-servico/ordem-servico.component";
import { PoloComponent } from "./polo/polo.component";
import { PrincipalComponent } from "./principal.component";
import { RelatorioComponent } from "./relatorio/relatorio.component";


const routes : Routes =[
  {
    path:'' ,
    component:PrincipalComponent,
    children:[
      { path:'relatorio', component: RelatorioComponent},
      { path:'ordem-servico', component: OrdemServicoComponent},
      { path:'polo', component: PoloComponent},
      { path:'material', component: MaterialComponent}
    ]

  },

]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class PrincipalRoutingModule{}
