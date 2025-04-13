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
exports.AdminSchema = exports.Admin = exports.Permission = exports.AdminRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var AdminRole;
(function (AdminRole) {
    AdminRole["ADMIN"] = "admin";
    AdminRole["SUPER_ADMIN"] = "super_admin";
})(AdminRole || (exports.AdminRole = AdminRole = {}));
class Permission {
}
exports.Permission = Permission;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Permission.prototype, "view", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Permission.prototype, "manage", void 0);
let Admin = class Admin extends mongoose_2.Document {
};
exports.Admin = Admin;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: AdminRole, default: AdminRole.ADMIN }),
    __metadata("design:type", String)
], Admin.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "productsPermission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "categoriesPermission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "ordersPermission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "customersPermission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "reviewsPermission", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Permission, default: () => ({}) }),
    __metadata("design:type", Permission)
], Admin.prototype, "customizationPermission", void 0);
exports.Admin = Admin = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Admin);
exports.AdminSchema = mongoose_1.SchemaFactory.createForClass(Admin);
//# sourceMappingURL=admin.schema.js.map