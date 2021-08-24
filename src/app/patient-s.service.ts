import { Injectable } from '@angular/core';
import { Patients } from './patients.model';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientSService {
  url :string ="http://localhost:6774/api/Patient";
  patientsArry : Patients[]; //////////////////////////

  constructor( private http:HttpClient) { }

  getAllPatients(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.patientsArry = res as  Patients[] ;
      }
    )
  }
}
