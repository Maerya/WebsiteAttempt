import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private http: Http) { }
    private url = 'api/values';

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    ngOnInit() {
    }

    public submitFiles(input: String[]) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, { input }, options)
            .toPromise()
            .then(this.extractData)
    }

    public receiveParced(): Observable<String[]> {
        let hold;
        this.http.get(this.url).subscribe(result => {
            console.log(result);
            hold = result;
        });
        return hold;
    }
}

