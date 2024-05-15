import {Pool} from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'viaduct.proxy.rlwy.net',
  database: 'railway',
  password: 'GjQNPEapxGpDHZCGkywBnsqHGzWvLOeC',
  port: 34764,
})

