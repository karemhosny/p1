import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }
  switchLanguage(language: string) {
    var body = document.body;

    if (language == 'ar') {
      body.classList.add("rtl");
      document.getElementById("arabicbutton").style.display = "none";
      document.getElementById("englishbuttin").style.display = "block";

    }
    else{
      body.classList.remove("rtl");
      document.getElementById("arabicbutton").style.display = "block";
      document.getElementById("englishbuttin").style.display = "none";

    }
    this.translate.use(language);
  }
}
