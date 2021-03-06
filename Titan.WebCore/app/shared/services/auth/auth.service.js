"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 1/6/2017.
 */
var core_1 = require('@angular/core');
var AuthService = (function () {
    //currentUser: IUserProfile;
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.isAuthorized = function () {
        return false; //Boolean(this.currentUser.defaultTenantId);
    };
    AuthService.prototype.canLoad = function () {
        this.router.navigate(['/auth']);
        return false;
    };
    AuthService.prototype.onCanActivate = function (canActivate) {
        canActivate = false;
        if (!canActivate) {
            this.router.navigate(['/auth']);
        }
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
