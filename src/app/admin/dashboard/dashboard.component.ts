import { Component, OnInit } from '@angular/core';
import { FormateurNavigService } from '../formateur-navig.service';
import { FakeSessionItemService } from '../fake-session-item.service';
import { SESSIONITEMS } from '../Sessions';
import { FORMATEURS } from '../formateurs';
import { PARTICIPANTS } from '../participants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbrSessions=SESSIONITEMS.length;
  nbrFormateurs=FORMATEURS.length;
  nbrParticipants=PARTICIPANTS.length;
  constructor(private sessionItemService : FakeSessionItemService) { }

  ngOnInit(): void {
  }
  meanstack=this.sessionItemService.sessionpartrack("MEAN Stack");
  android=this.sessionItemService.sessionpartrack("Android");
  ionic=this.sessionItemService.sessionpartrack("Ionic");
  angular=this.sessionItemService.sessionpartrack("Angular");
  nodejs=this.sessionItemService.sessionpartrack("NodeJS");
  Xamarin=this.sessionItemService.sessionpartrack("Xamarin");



}
