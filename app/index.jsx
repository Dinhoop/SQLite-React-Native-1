import {View, Text, StyleSheet} from 'react-native';
import Database from '../DAO/dao';
import * as SQLite from 'expo-sqlite';
import executeQuery from '../DAO/dao';



export default function App(){

    let result = getData();
    if(result!=null || result!=[])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá mundo!</Text>
        </View>
    );
}

async function getData(){
   try{
    let result = await executeQuery(`SELECT * FROM test WHERE id=?`, 1);
   // let result = await executeQuery(`INSERT INTO test (value, intValue) VALUES ('test1', 123);`);
    
      console.log(result);
      return result;
   }
   catch(error)
    {
        console.log("ERRO: ", error.message);
   }
   return [];
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
        text :
        {
            fontSize: 45,
            color:  'blue'
        }
    }
)