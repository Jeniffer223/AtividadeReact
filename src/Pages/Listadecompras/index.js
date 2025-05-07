import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const categorias = [
  { id: '1', nome: 'Frutas', cor: '#D5E6C3', img: require('../../../assets/imagem-1.png') },
  { id: '2', nome: 'Diversos', cor: '#AFCBFF', img: require('../../../assets/img-diversos.png') },
  { id: '3', nome: 'Açougue', cor: '#F5C4C4', img: require('../../../assets/img-acougue.png') },
];

const compras = [
  { id: '1', nome: 'Frutas', data: '27/04/2024', total: 'R$ 50,00', itens: 5, img: require('../../../assets/imagem-1.png') },
  { id: '2', nome: 'Diversos', data: '25/04/2024', total: 'R$ 35,40', itens: 6, img: require('../../../assets/img-diversos.png') },
  { id: '3', nome: 'Açougue', data: '23/04/2024', total: 'R$ 56,44', itens: 3, img: require('../../../assets/img-acougue.png') },
];

export default function Listadecompras() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={18} color="#000" />
          <Text>Taboão da Serra, SP</Text>
        </View>
      <Text style={styles.title1}> Seja bem-vindo, </Text>
      <Text style={styles.title}>Vamos pedir itens fresquinhos para você?</Text>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categoriasContainer}>
        {categorias.map((cat) => (
          <View key={cat.id} style={[styles.categoriaCard, { backgroundColor: cat.cor }]}>
            <Image source={cat.img} style={styles.categoriaImg} />
            <Text style={styles.categoriaTexto}>{cat.nome}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Minhas Compras</Text>
      <FlatList
        data={compras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.compraItem}>
            <Image source={item.img} style={styles.compraImg} />
            <View style={styles.compraInfo}>
              <Text style={styles.compraNome}>{item.nome}</Text>
              <Text style={styles.compraData}>{item.data}</Text>
            </View>
            <View style={styles.compraValor}>
              <Text style={styles.valor}>{item.total}</Text>
              <Text style={styles.itens}>{item.itens} itens</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 80,
  },
  location: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title1:{
    color: '#828B93',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#050609',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
  },
  categoriasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoriaCard: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriaImg: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoriaTexto: {
    fontSize: 12,
  },
  compraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  compraImg: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  compraInfo: {
    flex: 1,
  },
  compraNome: {
    fontSize: 14,
    fontWeight: '600',
  },
  compraData: {
    fontSize: 12,
    color: '#888',
  },
  compraValor: {
    alignItems: 'flex-end',
  },
  valor: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itens: {
    fontSize: 12,
    color: '#777',
  },
});
