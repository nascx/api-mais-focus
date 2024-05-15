var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/db.ts
var db_exports = {};
__export(db_exports, {
  pool: () => pool
});
module.exports = __toCommonJS(db_exports);
var import_pg = require("pg");
var pool = new import_pg.Pool({
  user: "postgres",
  host: "viaduct.proxy.rlwy.net",
  database: "railway",
  password: "GjQNPEapxGpDHZCGkywBnsqHGzWvLOeC",
  port: 34764
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  pool
});
