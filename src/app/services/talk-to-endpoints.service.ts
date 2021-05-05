import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

export interface Toggle {
  id: string;
  active: boolean;
  allowPercentage: number;
  numberOfTimesRequested: number;
  plannedSwitchDate: Date;
  plannedSwitchValue: boolean;
  lastRequested: Date;
  creationDate: Date;
  allowedNumberOfTimes: number;
}

@Injectable({
  providedIn: 'root'
})
export class TalkToEndpointsService {

  url: string = environment.url;
  headers = new HttpHeaders({
    'Access-Control-Request-Method': 'POST'
  });
  options = {headers: this.headers};

  constructor(private http: HttpClient) {
  }

  getFullToggle(toggleId: string) {
    return this.http.get(this.url + '/toggles/' + toggleId + '/full');
  }

  getAllToggles() {
    return this.http.get<Toggle[]>(this.url + '/toggles/dashboard');
  }

  flipToggle(toggleId: string) {
    return this.http.get(this.url + '/toggles/' + toggleId + '/toggle');
  }

  deleteToggle(toggleId: string) {
    return this.http.get(this.url + '/toggles/' + toggleId + '/delete');
  }

  planSwitch(toggleId: string, plannedSwitchValue: boolean, plannedSwitchDate: Date) {
    const url: string = this.url + '/toggles/' + toggleId + '/planSwitch';
    const body = {
      toggleId, plannedSwitchValue, plannedSwitchDate
    };
    return this.http.post(url, body);
  }

  setEnableAmount(toggleId: string, allowedNumberOfTimes: number) {
    const url: string = this.url + '/toggles/' + toggleId + '/enable';
    const body = {
      toggleId, allowedNumberOfTimes
    };
    return this.http.post(url, body);
  }

  getValue(toggleId: string) {
    return this.http.get(this.url + '/toggles/' + toggleId + '/value');
  }

  setPercentage(toggleId: string, togglePercentage: number) {
    const url: string = this.url + '/toggles/' + toggleId + '/percentage';
    const body = {
      toggleId, togglePercentage
    };
    return this.http.post(url, body);
  }
}
