import {Component, OnInit} from '@angular/core';
import {TalkToEndpointsService, Toggle} from '../services/talk-to-endpoints.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss'],
  providers: [TalkToEndpointsService]
})
export class FlagsComponent implements OnInit {

  toggles: Toggle[];
  selectedDate: Date;

  constructor(private endpointsService: TalkToEndpointsService) {
  }

  ngOnInit(): void {
    this.getAllToggles();
  }

  flipToggle(toggleId: string) {
    this.endpointsService.flipToggle(toggleId)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

  getAllToggles() {
    // uncomment to test locally without BE
    // this.toggles = JSON.parse('[{"id":"provide2021PDF","allowPercentage":99.0,"numberOfTimesRequested":1,"plannedSwitchDate":null,"plannedSwitchValue":false,"lastRequested":"2021-04-14T13:38:29.59","creationDate":"2021-04-14T13:38:29.449","allowedNumberOfTimes":2,"active":false},{"id":"test","allowPercentage":10.0,"numberOfTimesRequested":108,"plannedSwitchDate":null,"plannedSwitchValue":false,"lastRequested":"2021-05-03T13:25:32.509","creationDate":"2021-04-27T13:08:52.135","allowedNumberOfTimes":0,"active":false}]');
    this.endpointsService.getAllToggles()
    .subscribe(data => {
      this.toggles = data;
    });
  }

  planSwitch(toggleId: string, plannedSwitchValue: boolean, plannedSwitchDate: Date) {
    this.endpointsService.planSwitch(toggleId, plannedSwitchValue, plannedSwitchDate)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

  setRestriction(toggleId: string, value: string) {
    const allowedNumberOfTimes: number = parseInt(value, 10);
    this.endpointsService.setEnableAmount(toggleId, allowedNumberOfTimes)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

  deleteToggle(toggleId: string) {
    this.endpointsService.deleteToggle(toggleId)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

  addToggle(toggleId: string) {
    console.log('adding toggle: ' + toggleId);
    this.endpointsService.getValue(toggleId)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

  setTogglePercentage(toggleId: string, togglePercentage: number) {
    console.log('setting percentage toggle for: ' + toggleId + 'to: ' + togglePercentage);
    this.endpointsService.setPercentage(toggleId, togglePercentage)
    .subscribe(() => {
      this.getAllToggles();
    });
  }

}
