/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HeaderApp from './Header';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const styles = StyleSheet.create({
  chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#666',
    width: 245
  },
  hovered: {
    backgroundColor: '#f0f0f0',
  },
  time: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    position: 'absolute',
    // top: 10,
    right: 12,
  },
  textGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4, // Add some space between the text group and message
  },
});

const chats = [
  // { id: '1', name: 'Uzi', message: 'Hello there!', time: '12:00' },
  { id: '1', name: 'Rhyuzi', message: 'Hey, how are you klasdklafsklnafslnkafslfnasklfasknfsaklafskfasknlfknla?', time: '12:00 AM' },
  { id: '2', name: 'Azi', message: 'What\'s up?', time: '12:00 PM' },
  { id: '3', name: 'Razi', message: 'What\'s up?', time: '12:00 AM' },
  { id: '4', name: 'Sae', message: 'What\'s up?', time: '12:00 PM' },
];

function App(): JSX.Element {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const handleMouseEnter = (itemId: any) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const renderItem = ({ item }: { item: { id: string; name: string; message: string ; time: string}}) => (
    <TouchableWithoutFeedback
    onPressIn={() => handleMouseEnter(item.id)}
    onPressOut={handleMouseLeave}
    >
    <View style={[styles.chatItem, item.id === hoveredItemId && styles.hovered]}>
        <View style={styles.contentContainer}>
          <Image source={require('./assets/image/person.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <View style={styles.textGroup}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.message} numberOfLines={1} ellipsizeMode='tail'>{item.message}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
   <>
      <HeaderApp />
      <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
   </>
  );

}
export default App;
