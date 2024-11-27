var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Cascade, Collection, Entity, OneToMany, PrimaryKey, Property, } from "@mikro-orm/core";
import { Torneo } from "../torneo/torneo.entity.js";
let Estado_torneo = class Estado_torneo {
    constructor() {
        this.torneos = new Collection(this);
    }
};
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Estado_torneo.prototype, "nombre_estado", void 0);
__decorate([
    PrimaryKey({ unique: true }),
    __metadata("design:type", Number)
], Estado_torneo.prototype, "id", void 0);
__decorate([
    OneToMany(() => Torneo, torneo => torneo.estado_torneo, { cascade: [Cascade.ALL] }),
    __metadata("design:type", Object)
], Estado_torneo.prototype, "torneos", void 0);
Estado_torneo = __decorate([
    Entity()
], Estado_torneo);
export { Estado_torneo };
//# sourceMappingURL=estado_torneo.entity.js.map