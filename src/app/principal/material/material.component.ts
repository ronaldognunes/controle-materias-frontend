import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  materialForm!: FormGroup;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {

    this.materialForm = this.fb.group(
      {
        nome:['',Validators.required],
        unidadeMedida:['',Validators.required]
      }
    );
  }


  adicionar(){

  }

}
