import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private http: Http) { }
    apiValues: string[] = [];
    

    ngOnInit() {

        
    }
    
    public submitFiles(text: String[]) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let searchCrit = JSON.stringify('hi');
        this.http.post('/api/values/', searchCrit, options)
            .subscribe(result => {
                console.log(result);
            });
    }

    public receiveParced(): String[] {
        this.http.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
            console.log(this.apiValues);
            
        });
        return this.apiValues;
        
    }
}