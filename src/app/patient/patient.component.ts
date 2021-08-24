import { Component, OnInit } from '@angular/core';
import { PatientSService } from '../patient-s.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public service : PatientSService) { }

  ngOnInit() {
    this.service.getAllPatients();
    console.log(this.service.patientsArry)
  }

}
