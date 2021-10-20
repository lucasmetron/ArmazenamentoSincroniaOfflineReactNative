import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {

  async function salvar(chave, texto) {
    await AsyncStorage.setItem(chave, texto)
  }

  async function pegar(chave) {
    let cont = await AsyncStorage.getItem(chave)
    console.log(`${chave}: `, cont)
  }

  async function deletar(chave) {
    await AsyncStorage.removeItem(chave)
  }

  async function deletarTudo() {
    await AsyncStorage.clear()
  }

  useEffect(() => {
    salvar('meuTexto', '123465 abc')
    salvar('nome', 'Lucas Rosa')
    pegar('meuTexto')
    pegar('nome')
    deletar('meuTexto')
    pegar('meuTexto')
    pegar('nome')
    deletarTudo()
    pegar('meuTexto')
    pegar('nome')

  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>teste</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
