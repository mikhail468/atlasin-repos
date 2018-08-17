import { Injectable } from '@angular/core';
import { Http } from '@angular/http';//#1 to use HttpService


@Injectable()
export class PackageService {

  private topicsUrl: string = 'https://api.bitbucket.org/2.0/repositories';

  constructor(private _http: Http) { } //#2 to use HttpService

  getAllTopics() {
    return this._http.get(this.topicsUrl); //#3 to use Http Service
  }
  coms(com:string) {
    return this._http.get(com);
  }

}
