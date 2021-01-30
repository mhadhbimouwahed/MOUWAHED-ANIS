import { Injectable } from '@angular/core';
import { PARTICIPANTS } from './participants';

@Injectable({
  providedIn: 'root'
})
export class ParticipantNavigService {

  constructor() { }
  get(){return PARTICIPANTS;}
  add(participant){
    PARTICIPANTS.push(participant);
  }
  deleteparticipant(participant){
    let index;
    index=PARTICIPANTS.indexOf(participant);
    if(PARTICIPANTS.indexOf(participant)>=0){
        PARTICIPANTS.splice(index,1);
    }
  }
  getparticipant(id:number){
    return PARTICIPANTS[id-1];
  }
}
