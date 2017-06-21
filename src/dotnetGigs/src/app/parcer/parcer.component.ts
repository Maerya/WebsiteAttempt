import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'parcer',
  templateUrl: './parcer.component.html',
  styleUrls: ['./parcer.component.scss']
})
export class ParcerComponent implements OnInit {

  constructor(public http: Http) { }

  text: String[];
  parced: String[];
  holder: String[]

  changeListener($event): void {
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();

    let test = new AppComponent(this.http);

    myReader.onload = e => {
      this.text = myReader.result;
      test.submitFiles(this.text);
      
    };

    

    let holder = test.receiveParced();
    console.log(holder);
    myReader.readAsText(file);

  }

  ngOnInit() {
  }

}
