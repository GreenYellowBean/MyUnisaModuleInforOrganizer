import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModulesService } from '../modules.service';
import { Moduule } from '../modules.model';
import { ModulesPage } from '../modules.page';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.page.html',
  styleUrls: ['./module-detail.page.scss'],
})
export class ModuleDetailPage implements OnInit {
 loadModule: Moduule;
  constructor(private activatedRoute: ActivatedRoute,
              private modulesService: ModulesService,
              private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('moduleId')) {
        //redirect
        return;
      }
      const moduleId = paramMap.get('moduleId');
      this.loadModule = this.modulesService.getModule(moduleId);
    });
  }

  onDeleteModule(moduleId){
    this.modulesService.deleteModule(moduleId);
    this.router.navigate(['/modules']);
  }

}
