import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./assets/image/cavanero.jpg')} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rhyuzi</Text>
      </View>
      <Image source={require('./assets/image/search-icon.png')} style={styles.searchIcon} />
      <Image source={require('./assets/image/search-icon.png')} style={styles.menuIcon} />
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
    backgroundColor: '#075e54',
  },
  logo: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
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

export default Header;