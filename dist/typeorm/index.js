"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dead = exports.Post = void 0;
const post_entity_1 = require("./post.entity");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return post_entity_1.Post; } });
const dead_entity_1 = require("./dead.entity");
Object.defineProperty(exports, "Dead", { enumerable: true, get: function () { return dead_entity_1.Dead; } });
const entities = [dead_entity_1.Dead, post_entity_1.Post];
exports.default = entities;
//# sourceMappingURL=index.js.map