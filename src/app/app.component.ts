import { OnInit, Component } from '@angular/core';
import { PackageService } from './package.service'; //#1 use TopicsService
import { Package } from './package';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="sortReps()" class="btn btn-success my-2 my-sm-0">Sort</button>
    <table class="table">
      <thead class="thead-dark">
        <tr>
         <th>Rep name</th>
         <th>Full name</th>
         <th>Avatar</th>
         <th>Created on</th>
         <th>Link to commits</th>
        </tr>
       </thead>
   <tbody>
       <tr  *ngFor="let p of package.values">
            <td>{{p.name}}</td>
            <td>{{p.full_name}}</td>
            <td><img src="{{p.links.avatar.href}}" style="width:30px;height:30px" /></td>
            <td>{{p.created_on}}</td>
            <td>{{p.links.commits.href}}<button (click)="commits(p.links.commits.href)">show commits</button></td>
        </tr>
   </tbody>
</table>
   <ul *ngIf="commit">
      <li *ngFor="let c of commit.values">{{c.hash}}</li>
   </ul>
`,
  providers: [PackageService]
})

export class AppComponent implements OnInit  {
  package: Package;
  commit: Package;
  constructor(private _packageService: PackageService) { }

  ngOnInit() {//app is initialized here
    this._packageService.getAllTopics().subscribe(result => { this.package = result.json() });
  }

  commits(link: string) {
    
    this._packageService.coms(link).subscribe(result => { this.commit = result.json() });
    console.log(this.commit);
    if (this.commit.values.length == 0) {
      this.commit.values =
      {
        hash: "No commits"
      }
    }
    console.log(this.commit);
  }

  sortReps(): void {

    this.package.values = this.package.values.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  }
}
