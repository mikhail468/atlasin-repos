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
var http_1 = require("@angular/http"); //#1 to use HttpService
var TopicsService = /** @class */ (function () {
    function TopicsService(_http) {
        this._http = _http;
        this.topicsUrl = 'http://localhost:56214/api/allpackages';
        this.topicsUrlname = 'http://localhost:38997/api/topics';
    } //#2 to use HttpService
    TopicsService.prototype.getAllTopics = function () {
        return this._http.get(this.topicsUrl); //#3 to use Http Service
    };
    TopicsService.prototype.getTopicsByName = function () {
        return this._http.get(this.topicsUrlname);
    };
    TopicsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TopicsService);
    return TopicsService;
}());
exports.TopicsService = TopicsService;
//# sourceMappingURL=topics.service.js.map