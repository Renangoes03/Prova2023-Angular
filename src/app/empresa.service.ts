import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empresa } from './empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = "http://localhost:3000/empresa";

  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<empresa[]> {
    return this.http.get<empresa[]>(this.url);
  }
  save(empresa: empresa): Observable<empresa> {
    return this.http.post<empresa>(this.url, empresa); 
  }

    }
  
