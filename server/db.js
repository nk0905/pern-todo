import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: 'kth18822',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

export default pool;