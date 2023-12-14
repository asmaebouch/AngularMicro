import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {AjouterClientService} from "../ajouter-client.service";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  studentDetails = null;

  constructor(private clientService: AjouterClientService) {}

  ngOnInit(): void {
    this.clientService.getClient().subscribe(
      (resp: any) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  register(registerForm: NgForm): void {
    const formData = { ...registerForm.value };

    // Include headers for CORS
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Credentials': 'true'
    };

    this.clientService.EnregistrerClient(formData, headers).subscribe(
      (resp: any) => {
        console.log(resp);
        // alert("Projet a bien été enregistré");
        registerForm.reset(); // Reset the form
        // this.getProjetDetails();
        // Handle the success response if needed
      },
      (err: any) => {
        console.log(err);
        // Handle the error response if needed
      }
    );
  }
}
