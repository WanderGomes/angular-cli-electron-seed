import { Component } from '@angular/core';
import {ElectronService} from './providers/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  constructor(private _electronService: ElectronService) {
    console.log(this._electronService.remote);
    console.log(this._electronService.fs);
  }
}
