import {View,Text,Image,Button,Alert,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function Pesquisa() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={18} color="#000" />
          <Text style={styles.locationText}>Taboão da Serra, SP</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput placeholder="Buscar" style={styles.input} />
          <Ionicons name="search-outline" size={20} color="#888" />
        </View>

        <View style={styles.grid}>
          <Category
            title="Frutas"
            color="#D4E8C2"
            image={require('../../../assets/imagem-1.png')}/>
          <Category
            title="Diversos"
            color="#BFD6F8"
            image={require('../../../assets/img-diversos.png')}/>
          <Category
            title="Açougue"
            color="#F8CBCB"
            image={require('../../../assets/img-acougue.png')}/>
        </View>
      </View>
    </View>
  );
}
const Category = ({ title, color, image }) => (
  <TouchableOpacity style={[styles.category, { backgroundColor: color }]}>
    <Image source={image} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 80,
  },
  header: {
    justifyContent: 'space-between',
  },
  location: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationText: {},
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  category: {
    width: '47%',
    height: 100,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
