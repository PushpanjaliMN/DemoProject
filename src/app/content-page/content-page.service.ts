import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContentPageService {
    constructor(private http: HttpClient){}

    getData(requestBody): Observable<any>{
        let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options     = new RequestOptions({ headers: headers }); // Create
      this.http.post("data.json",requestBody)
      .map((res:Response) => res.json())
    //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}