import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar-circle-line',
  templateUrl: './progress-bar-circle-line.component.html',
  styleUrls: ['./progress-bar-circle-line.component.scss']
})
export class ProgressBarCircleLineComponent implements OnInit {

  @Input() state:number=4;
  stateName:string='';
  @Input() line:boolean=true;
  @Output() clicked= new EventEmitter()
  constructor() {    
}

  ngOnInit(): void {
    this.stateName = "test"
    

  }




  clickedCircle(){
    this.clicked.emit();
  }

}
