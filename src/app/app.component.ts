import { Component } from '@angular/core';
import { Contact } from './contact';

const CONTACT: Contact[] = [
  { id: 1, firstname: 'Robert', lastname:'Lebon',tel: '0000000000'},
  { id: 2, firstname: 'Pierre', lastname:'Lebut',tel: '1111111111'},
  { id: 3, firstname: 'Paul', lastname:'Lebar',tel: '2222222222'},
  { id: 4, firstname: 'Jacques', lastname:'Lebeau',tel: '3333333333'},
  { id: 5, firstname: 'Patrick', lastname:'Legros',tel: '4444444444'},
  { id: 6, firstname: 'Nico', lastname:'Leblond',tel: '5555555555'},
  { id: 7, firstname: 'François', lastname:'Lebleu',tel: '6666666666'},
  { id: 8, firstname: 'Jean', lastname:'Lebien',tel: '7777777777'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>Mes contacts</h2>
  <ul class="contacts">
    <li *ngFor="let contact of contacts"
    (click)="onSelect(contact)"
    [class.selected]="contact === selectedContact">
      <span class="badge">{{contact.id}}</span> {{contact.firstname}} {{contact.lastname}}
    </li>
  </ul>
  <div *ngIf="selectedContact">
    <h2>Informations de {{selectedContact.firstname}}</h2>
    <div class="modify">
        <label>Modifications: </label>
        <input [(ngModel)]="selectedContact.firstname" placeholder="Prénom"/>
        <input [(ngModel)]="selectedContact.lastname" placeholder="Nom"/>
        <input [(ngModel)]="selectedContact.tel" placeholder="Numéro de téléphone"/>
    </div>
  </div>
  `,
  
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: #333333;
  }
  .contacts {
    margin: 0 auto;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .contacts li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color:#616161;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .contacts li.selected:hover {
    background-color: darkgrey !important;
    color: white;
  }
  .contacts li:hover {
    color: grey;
    background-color: #DDD;
    left: .1em;
  }
  .contacts .text {
    position: relative;
    top: -3px;
  }
  .contacts .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: rgb(255, 88, 88);
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .modify{
    display: flex;
    flex-direction: column;
  }
`]
})


export class AppComponent {
  title = 'Répertoire téléphonique';
  contacts = CONTACT;
  selectedContact: Contact;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}

