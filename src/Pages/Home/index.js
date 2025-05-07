import {View,Text,Image, Button, Alert,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App(){
  const navigation = useNavigation();

  return(
   <View>
      <Image
            source={require('../../../assets/img-frutas.png')}
            style={{
              width: 220,
              height: 320,
              alignSelf: 'center',
              marginTop: 200,
            }}
       />   
      <Text style={styles.txt}>
       Entregamos{'\n'} 
       mantimentos à{'\n'} 
       sua porta 
      </Text> 
      <Text style={styles.txt2}> A mercearia oferece vegatais e frutas secas.{'\n'}
      Encomende itens frescos na mercearia. </Text> 
      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Pesquisa')}>
            <Text style={styles.button_txt}>INICIAR</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#050609',
    textAlign: 'center',
    padding: 10,
  },
  txt2:{
    fontWeight: 'montserrat',
    fontSize: 12,
    color: '#828B93',
    textAlign: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#7785DB',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
    fontWeight: 'montserrat',
    marginLeft: 100,
  },
})