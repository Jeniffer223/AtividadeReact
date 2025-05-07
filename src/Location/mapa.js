import Axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
import { ActivityIndicator, PermissionsAndroid, Platform } from 'react-native';
import { UseEffect, UseState } from 'react-native';

  const pedirPermissaoLocalizacao = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };
 
  // Obtém localização atual e busca clima
  const buscarClimaPorLocalizacao = async () => {
    const permissao = await pedirPermissaoLocalizacao();
    if (!permissao) return;
 
    setLoading(true);
    setClima(null);
 
    Geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;
 
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=pt_br&units=metric`
          );
          setClima(response.data);
        } catch (error) {
          alert('Erro ao buscar clima por localização');
        } finally {
          setLoading(false);
        }
      },
      error => {
        alert('Erro ao obter localização');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };
 
  // Busca clima por nome da cidade
  const buscarClimaPorCidade = async () => {
    if (!cidade) return;
 
    setLoading(true);
    setClima(null);
 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`
      );
      setClima(response.data);
    } catch (error) {
      alert('Cidade não encontrada');
    } finally {
      setLoading(false);
    }
  };
 