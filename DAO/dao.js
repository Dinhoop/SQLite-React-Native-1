import * as SQLite from 'expo-sqlite'; //SQLite

export default async function executeQuery(query, params) {
  let statement;
  try{
    const db = await SQLite.openDatabaseAsync('example.db');
    db.execSync(
      "CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value INTEGER NOT NULL, intValue INTEGER NOY NULL)"
    );
    console.log("Banco de dados aberto com sucesso");
    try {
      return await db.withTransactionAsync(async (transaction) => {
  
        if(query.trim().toUpperCase().startsWith("SELECT"))
        {
          let rows;
          rows = await db.getAllAsync(query, params);
            console.log(rows);
            return rows;
 
        }
        else{
          try{
            statement = await db.runAsync(query, params);
           console.log(statement.changes);
            return statement;
          }
          catch(error){
            console.log("Erro ao executar comando SQL, Insert, Update, Delete", error.message);  
          }      
        }
  
      });
    } catch (error) {
      console.error('Erro ao executar o comando SQL:', error);
      throw error; 
    }
  }
  catch(error){
    console.log("Erro ao abrir Banco de Dados");
  }  


}