import { Component } from '@angular/core';
import {AjouterClientService} from "../ajouter-client.service";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  studentDetails =null;
  itemsPerPage: number = 8;
  currentPage: number = 1;
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
        this.getProjetDetails();

      },
      (err) => console.log(err)
    );
  }
  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    //   return this.users?.slice(startIndex, endIndex);

    // @ts-ignore
    return this.studentDetails.slice(startIndex, endIndex);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get totalPages(): number {
    // @ts-ignore
    return Math.ceil(this.studentDetails.length / this.itemsPerPage);
  }
}
