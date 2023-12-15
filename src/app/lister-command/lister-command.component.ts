import { Component } from '@angular/core';
import {AjouterClientService} from "../ajouter-client.service";
import {AjouterCommandService} from "../ajouter-command.service";

@Component({
  selector: 'app-lister-command',
  templateUrl: './lister-command.component.html',
  styleUrls: ['./lister-command.component.css']
})
export class ListerCommandComponent {
  studentDetails =null;

  constructor(private clientService: AjouterCommandService,) {
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
        alert("Command a bien été supprimé");
      },
      (err) => console.log(err)
    );
  }
}
