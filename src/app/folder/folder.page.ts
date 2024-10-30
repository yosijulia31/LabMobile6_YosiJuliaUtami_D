import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  goToDetail() {
    this.navCtrl.navigateForward('/detail');
  }

  async showContactInfo() {
    const alert = await this.alertController.create({
      header: 'Kontak Saya',
      message: 'Email: yosi.utami@mhs.unsoed.ac.id',
      buttons: ['OK']
    });

    await alert.present();
  }
}
