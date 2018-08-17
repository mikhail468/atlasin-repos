"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var package_service_1 = require("./package.service"); //#1 use TopicsService
var AppComponent = /** @class */ (function () {
    function AppComponent(_packageService) {
        this._packageService = _packageService;
        this.commit = {
            name: name
        };
    } //#3 to use TopicsService
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._packageService.getAllTopics().subscribe(function (result) { _this.package = result.json(); });
        this._packageService.getAllTopics().subscribe(function (result) { _this.globPackage = result.json(); });
        //this.dbPackages = this.packages;
    };
    AppComponent.prototype.commits = function (link) {
        var _this = this;
        this._packageService.coms(link).subscribe(function (result) { _this.package = result.json(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <button (click)=\"sortReps()\" class=\"btn btn-success my-2 my-sm-0\">Sort</button>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n         <th>Rep name</th>\n         <th>Full name</th>\n         <th>Created on</th>\n         <th>Link to commits</th>\n        </tr>\n       </thead>\n   <tbody>\n       <tr  *ngFor=\"let p of package.values\">\n            <td>{{p.name}}</td>\n            <td>{{p.full_name}}<img src=\"{{p.links.commits.avatar}}\"/></td>\n            <td>{{p.created_on}}</td>\n            <td>{{p.links.commits.href}}</td>\n        </tr>\n   </tbody>\n</table>\n<table>\n   <tr>\n      \n   </tr>\n</table>\n",
            providers: [package_service_1.PackageService] //#2 use TopicsService
        }),
        __metadata("design:paramtypes", [package_service_1.PackageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map