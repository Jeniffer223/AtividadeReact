import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../Pages/Home/index';
import Carrinho from '../Pages/Carrinho/index';
import Listadecompras from '../Pages/Listadecompras/index';
import Pesquisa from '../Pages/Pesquisa/index';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Home}
        options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name='home' color={'#828B93'} size={size} />;
          }
        }}
         />
        <Tab.Screen name="Pesquisa" 
        component={Pesquisa}
        options={{ headerShown: false,
          tabBarIcon:({ color, size }) => {
            return <Feather name='search' color={'#828B93'} size={size}/>;
          },
        }} 
        />
        <Tab.Screen name="Lista de compras" 
        component={Listadecompras}
        options={{ headerShown: false,
          tabBarIcon:({ color, size }) => {
            return <Feather name='list' color={'#828B93'} size={size}/>;
          },
        }} 
        />
         <Tab.Screen name="Carrinho" 
        component={Carrinho}
        options={{ headerShown: false,
          tabBarIcon:({ color, size }) => {
            return <Feather name='shopping-cart' color={'#828B93'} size={size}/>;
          },
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}