# Tugas Praktikum Pemmob

![(screenshot.png)](https://github.com/yosijulia31/LabMobile6_YosiJuliaUtami_D/blob/main/Screenshot%20(146).png)
![(screenshot.png)](https://github.com/yosijulia31/LabMobile6_YosiJuliaUtami_D/blob/main/Screenshot%20(147).png)

Berikut adalah penjelasan lebih detail tentang cara menambahkan komponen di halaman Ionic
### 1. Buka Halaman yang Ingin Diedit
   - Arahkan ke file halaman yang akan diberi komponen, misalnya `home.page.html` untuk halaman beranda.
   - Biasanya di dalam folder `src/app/home/`.

### 2. Tambahkan Komponen di home.page.html
   - Pada file `home.page.html`, tambahkan komponen **ion-card** yang akan memuat gambar avatar, tombol, dan teks profil.
   - Berikut adalah contoh struktur kode yang dapat digunakan:
     ```html
        <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Detail Profil</ion-title>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      
      <ion-content [fullscreen]="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Halaman Utama</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Yosi Julia Utami</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p><strong>Jurusan:</strong> Informatika</p>
              <p><strong>Angkatan:</strong> 2021</p>
              <p><strong>NIM :</strong> H1D021022</p>
            </ion-card-content>
          </ion-card>
          <!-- Tombol untuk menampilkan informasi kontak -->
          <ion-button expand="block" color="secondary" (click)="showContactInfo()">
            Kontak Saya
          </ion-button>
      </ion-content>
     ```
   - **Penjelasan**:
     - `ion-card`: Digunakan untuk membuat kartu yang berisi informasi profil.
     - `ion-avatar`: Digunakan untuk menampilkan gambar profil pengguna.
     - `ion-button`: Tombol untuk navigasi ke halaman lain dan untuk menampilkan informasi kontak.
     - `ion-text`: Menampilkan teks nama dan NIM.

### 3. Tambahkan Logika di home.page.ts
   - Buka file `home.page.ts` di folder yang sama (`src/app/home/`).
   - Tambahkan metode yang akan digunakan untuk mengatur logika saat tombol ditekan.

     ```typescript
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
     ```

   - **Penjelasan**:
     - `goToDetail()`: Fungsi untuk navigasi ke halaman detail. Memanfaatkan `NavController` untuk berpindah halaman.
     - `showContactInfo()`: Fungsi untuk menampilkan popup informasi kontak menggunakan `AlertController`.

### 4. Jalankan Aplikasi
   - Setelah semua selesai, Anda bisa menjalankan aplikasi Ionic untuk melihat hasilnya.
   - Gunakan perintah berikut di terminal untuk menjalankan aplikasi:
     ```bash
     ionic serve
     ```

---

