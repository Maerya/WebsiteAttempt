import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcer',
  templateUrl: './parcer.component.html',
  styleUrls: ['./parcer.component.scss']
})
export class ParcerComponent implements OnInit {

  constructor() { }

  text: any;

  changeListener($event): void {
    var text: any;
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onload = e => {
      this.text = myReader.result; 
    };
    myReader.onloadend = function (e) {
      text = myReader.result;
    }
    myReader.readAsText(file);
  }

  ngOnInit() {
  }

}
