import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public isCollapsedMat = true;
  public isCollapsedPolo = true;
  public isCollapsedRel = true;
  public isCollapsedOrd = true;
  public isCollapsedUsu = true;
  faCoffee = faCoffee;
  constructor() {

  }

  ngOnInit(): void {
  }
  teste():void{
    alert('teste');
  }

}
