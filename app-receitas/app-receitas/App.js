import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

const receitas = [
  {id: 1, titulo: 'Morango Haute Sélection', image: {uri: ''}},
  {id: 2, titulo: 'Morango Haute Sélection', image: {uri: ''}},
  {id: 3, titulo: 'Morango Haute Sélection', image: {uri: ''}},
  {id: 4, titulo: 'Morango Haute Sélection', image: {uri: ''}},
];

export default function App(){
  return (
    <View style={StyleSheet.container}>
      <StatusBar barStyle="light-content"/>

      <View style={StyleSheet.header}>
      <View style={StyleSheet.logoCircle}>

      <Image source={require('./assets/logo.png')}
      style={style.logoImage}   
    />
      </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.titulo}>Receitas atuais</Text>

        <View style={styles.listaContainer}></View>
        {receitas.map((item) =>(
          <TouchableOpacity key={item.id} activeOpacity={0.8} style={styles.cardWrapper}>
            <ImageBackground
            source={item.image}
            style={styles.cardImage}
            imageStyle={styles.cardImageRadius}></ImageBackground>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicione uma nova receita</Text>
      </TouchableOpacity>
    </View>
  );
}