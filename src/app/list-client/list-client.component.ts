import { Component } from '@angular/core';
import {AjouterClientService} from "../ajouter-client.service";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  studentDetails =null;

  constructor(private clientService: AjouterClientService,) {
    this.getProjetDetails();
  }
  ngOnInit(): void {
    this.clientService.getClient().subscribe(

    );
    console.log(name); // or some operation involving `name`

  }
  getProjetDetails() {
    this.clientService.getClient().subscribe(
      (resp:any) => {
        console.log(resp);
        // @ts-ignore
        this.studentDetails = resp;


      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  deleteClient(client: any): void {
    this.clientService.deleteClient(client.id).subscribe(

      (resp) => {
        console.log(resp);
        alert("Client a bien été supprimé");
      },
      (err) => console.log(err)
    );
  }
}
