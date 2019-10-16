import { Component, OnInit } from '@angular/core';
import { Moduule } from './modules.model';
import { ModulesService } from './modules.service';
import { ModuleDetailPage } from './module-detail/module-detail.page';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {
      modules: Moduule[];
  constructor(private modulesService: ModulesService, private router: Router) { }

  ngOnInit() {
    this.modules = this.modulesService.getAllModules();
    
  }
  modDetails(moduleId){
    console.log("I have been clicked!");
    console.log(moduleId);
    this.router.navigateByUrl('/modules/'+ moduleId);
 
  }

}
