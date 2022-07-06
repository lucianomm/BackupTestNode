import knex from "knex";
import {DefaultAzureCredential, ManagedIdentityCredential} from '@azure/identity';
import {SecretClient} from '@azure/keyvault-secrets';

// Replace value with your Key Vault name here
const vaultName = "rmpgccoenp01euwrgluckv";
const url = `https://${vaultName}.vault.azure.net/`;
const credential = new ManagedIdentityCredential();
// const credential = new DefaultAzureCredential()
  
const client = new SecretClient(url, credential);



// Replace value with your secret name here
const secretName = "DatabaseName";
const secret = await client.getSecret(secretName);

export default knex({

    client: "mssql",
    
    //connection: "Server=tcp:rm-pg-ccoe-np-01-euw-rg-luciano-test-server.database.windows.net,1433;Initial Catalog=rm-pg-ccoe-np-01-euw-rg-luciano-test-database;Persist Security Info=False;User ID=SuperAdmin;Password=Testes1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
    connection: {
        server : 'rm-pg-ccoe-np-01-euw-rg-luciano-test-server.database.windows.net',
        user : 'SuperAdmin',
        password : 'Testes1!',
        database : secret.value,
        encrypt: true,
        options: {
            port: 1433
          }
      }
    });