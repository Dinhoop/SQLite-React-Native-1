import {View, Text, StyleSheet} from 'react-native';
import Database from '../DAO/dao';
import * as SQLite from 'expo-sqlite';
import executeQuery from '../DAO/dao';



export default function App(){   
    getData();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá mundo!</Text>
        </View>
    );
}

async function getData(){
    let result = await executeQuery(`SELECT * FROM test WHERE id=?`, 2);
  //let result = await executeQuery(`INSERT INTO test (value, intValue) VALUES ('test1', 123);`);
    console.log(result); //=> PORQUE ESTE RESULT DÁ UNDEFINED SE LÁ NO DAO ELE IMPRIME O ARRAY COM OS DADOS DE FORMA NORMAL?
    return result;
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