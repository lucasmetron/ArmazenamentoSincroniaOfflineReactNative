import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import fs from 'react-native-fs'

const App = () => {

  async function salvar(texto, enconding) {
    const path = fs.DocumentDirectoryPath + '/text.txt' //caminho do arquivo, esse caminho fica dentro do diretorio do proprio app
    await fs.writeFile(path, texto, enconding);
  }

  async function ler(path, enconding) {
    const caminho = fs.DocumentDirectoryPath + path //caminho do arquivo, esse caminho fica dentro do diretorio do proprio app
    let content = await fs.readFile(caminho, enconding);
    console.log('Arquivo: ', content)
  }

  fs.moveFile(path, newPath) //move o arquivo de um lugar para o outro
  fs.copyFile(path, destinoPath) //copia o arquivo e salva em outro lugar. Caso o lugar seja o mesmo, vc pode apenas trocar o nome do arquivo
  fs.unlink(path) //deleta arquivo

  useEffect(() => {
    // salvar('Texto dentro do arquivo', 'utf8')
    ler('/text.txt', 'utf8')
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
