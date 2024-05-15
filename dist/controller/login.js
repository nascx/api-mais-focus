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

// src/controller/login.ts
var login_exports = {};
__export(login_exports, {
  createAccount: () => createAccount,
  login: () => login
});
module.exports = __toCommonJS(login_exports);

// src/config/db.ts
var import_pg = require("pg");
var pool = new import_pg.Pool({
  user: "postgres",
  host: "viaduct.proxy.rlwy.net",
  database: "railway",
  password: "GjQNPEapxGpDHZCGkywBnsqHGzWvLOeC",
  port: 34764
});

// src/model/login.ts
var insertUserDB = async (name, email, password) => {
  const q = "INSERT INTO users (email, name, password) VALUES ($1, $2, $3)";
  const values = [email, name, password];
  try {
    return new Promise((resolve, reject) => {
      pool.query(q, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Data entered successfully");
        }
      });
    });
  } catch (err) {
    throw err;
  }
};
var getPasswordByEmail = (email) => {
  const q = "SELECT password FROM users WHERE email = $1";
  try {
    return new Promise((resolve, reject) => {
      pool.query(q, [email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (data.rows && data.rows.length > 0) {
          resolve(data.rows[0].password);
        } else {
          reject("Not found");
        }
      });
    });
  } catch (error) {
    throw error;
  }
};

// src/controller/login.ts
var createAccount = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const response = await insertUserDB(name, email, password);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ message: "Error internal", error });
  }
};
var login = async (req, res) => {
  const { email, password } = req.query;
  const correctPassword = await getPasswordByEmail(email);
  correctPassword === password ? res.status(200).json({ message: "Correct credentials" }) : res.status(200).json({ message: "Invalid credentials" });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAccount,
  login
});
