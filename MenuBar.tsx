import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MenuBar = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Beranda</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Percakapan</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Panggilan</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#BE3D4A',
  },
  logo: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    // flex: 1,
    // marginLeft: 10,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
});

export default MenuBar;