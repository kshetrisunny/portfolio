import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'fr']);
    this._translateService.setDefaultLang('fr');
  }

  ngOnInit(): void {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", 'en');
    }
    let lang:any=localStorage.getItem("lang"); 
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  }

}
