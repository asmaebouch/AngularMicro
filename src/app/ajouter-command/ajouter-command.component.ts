import { Component } from '@angular/core';
import {AjouterClientService} from "../ajouter-client.service";
import {NgForm} from "@angular/forms";
import {AjouterCommandService} from "../ajouter-command.service";

@Component({
  selector: 'app-ajouter-command',
  templateUrl: './ajouter-command.component.html',
  styleUrls: ['./ajouter-command.component.css']
})
export class AjouterCommandComponent {
  studentDetails = null;
  commandId: number[] = []; // Initialize as an empty array

  constructor(private clientService: AjouterCommandService) {}

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
         alert("Commande a bien été enregistré");
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
