import knex from "knex"

export default knex({

    client: "mssql",
    
    //connection: "Server=tcp:rm-pg-ccoe-np-01-euw-rg-luciano-test-server.database.windows.net,1433;Initial Catalog=rm-pg-ccoe-np-01-euw-rg-luciano-test-database;Persist Security Info=False;User ID=SuperAdmin;Password=Testes1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
    connection: {
        server : 'rm-pg-ccoe-np-01-euw-rg-luciano-test-server.database.windows.net',
        user : 'SuperAdmin',
        password : 'Testes1!',
        database : 'rm-pg-ccoe-np-01-euw-rg-luciano-test-database',
        encrypt: true,
        options: {
            port: 1433
          }
      }
    });