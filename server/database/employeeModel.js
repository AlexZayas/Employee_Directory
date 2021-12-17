const {Pool} = require('pg');
const employeeURI = 'postgres://mjryqfmi:3aiAFeDIPBpjyCryo30etQrxlQbgk81p@castor.db.elephantsql.com/mjryqfmi';

const pool = new Pool({
    connectionString: employeeURI
});




module.exports = {
    query: (text, params, callback) => {
        console.log('executed query ', text);
        return pool.query(text, params, callback);
    }
};