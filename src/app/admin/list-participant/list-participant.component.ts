import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'
import { ParticipantNavigService } from '../participant-navig.service';
@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  participants;
  constructor(private ParticipantService : ParticipantNavigService) { }

  ngOnInit(): void {
    this.participants=this.ParticipantService.get();
  }

}