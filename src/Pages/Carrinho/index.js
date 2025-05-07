     import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const items = [
  { id: 1, name: 'Frutas', price: 50.00, quantity: 5, image: require('../../../assets/imagem-1.png') },
  { id: 2, name: 'Diversos', price: 60.40, quantity: 6, image: require('../../../assets/img-diversos.png') },
  { id: 3, name: 'Açougue', price: 56.44, quantity: 3, image: require('../../../assets/img-acougue.png') },
];

export default function Carrinho() {
  const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Meu carrinho</Text>

      <ScrollView>
        {items.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>R$ {item.price.toFixed(2)} · {item.quantity} itens</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total a pagar</Text>
          <Text style={styles.totalPrice}>R$ {total}</Text>
        </View>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pagar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'montserrat',
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    marginLeft: 'auto',
  },
  editText: {
    color: '#7081e0',
  },
  footer: {
    backgroundColor: '#7081e0',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalLabel: {
    color: '#dcdde0',
    fontSize: 14,
  },
  totalPrice: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#ffffff20',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
