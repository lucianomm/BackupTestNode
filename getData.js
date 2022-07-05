import database from"./connection.js";

export const getData = () => {

return database.select('*').from('data').then(a => a);

};