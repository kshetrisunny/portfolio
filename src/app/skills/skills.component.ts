import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: 'HTML5, CSS3, BootStrap', percent: 90, remark: 'excellent' },
      {
        name: 'JavaScript, Angular',
        percent: 90,
        remark: 'excellent',
      },
      { name: 'Ionic Framework, Cordova', percent: 80, remark: 'very-good' },
      { name: 'Node.js, Express.js', percent: 30, remark: 'low-avg' },
      
    ],
    tools: [
      { name: 'Git, Bitbucket', percent: 90, remark: 'excellent' },
      { name: 'Figma', percent: 70, remark: 'good' },
      { name: 'JIRA', percent: 80, remark: 'very-good' },
      { name: 'Android, XCode', percent: 80, remark: 'very-good' },
      { name: 'Linux, Windows, Mac', percent: 80, remark: 'very-good' },
      { name: 'MySql, MongoDB', percent: 30, remark: 'low-avg' },
    ],
    methodologies: [
      { name: 'Scrum', percent: 90, remark: 'excellent' },
      { name: 'Code Reviews', percent: 70, remark: 'good' },
      { name: 'Design Thinking', percent: 70, remark: 'good' },
      { name: 'DevOps', percent: 50, remark: 'average' },
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {}
}
