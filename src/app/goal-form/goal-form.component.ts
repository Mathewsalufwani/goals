import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goa } from '../goa';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goa(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goa>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
