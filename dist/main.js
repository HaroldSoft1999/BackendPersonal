"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seeder_service_1 = require("./seeder/seeder.service");
const roles_guard_1 = require("./auth/roles.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const seederService = app.get(seeder_service_1.SeederService);
    await seederService.seed();
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new roles_guard_1.RolesGuard(reflector));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map