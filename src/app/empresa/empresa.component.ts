import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmpresaService } from '../empresa.service';
import { empresa } from './empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresa: empresa[] = [];
  formGroupClient: FormGroup;

  constructor(private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
    });


  }
  ngOnInit(): void {
    this.loadEmpresa();
  }
  loadEmpresa() {
    this.empresaService.getEmpresa().subscribe(
      {
        next: data => this.empresa = data,
        error: () => console.log("Erro ao  chamar endpoint")
      }
    )
  }
  save() {
    this.empresaService.save(this.formGroupClient.value).subscribe(
      {
        next: data => {
          this.empresa.push(data);
          this.formGroupClient.reset();

        }
      }
    )
  }
  remove(empresa: empresa): void {
    this.empresaService.remove(empresa).subscribe({
      next: () => this.loadEmpresa()
    })
  }
}



