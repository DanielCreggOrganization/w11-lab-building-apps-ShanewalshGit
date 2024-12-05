import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton } from '@ionic/angular/standalone';
import { DeviceInfoService } from '../services/device-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton],
})
export class HomePage {
  deviceInfo: any;

  constructor(private deviceInfoService: DeviceInfoService) {}

  async getDeviceInfo() {
    this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
  }
}
