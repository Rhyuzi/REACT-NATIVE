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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text>Helloo Tes aplikasi nih</Text>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', // Vertically center align items
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
  },
  hovered: {
    backgroundColor: '#f0f0f0',
  },
  time: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 15,
    right: 12,
  },
});

const chats = [
  { id: '1', name: 'John', message: 'Hello there!', time: '12:00' },
  { id: '2', name: 'Alice', message: 'Hey, how are you?', time: '12:00' },
  { id: '3', name: 'Bob', message: 'What\'s up?', time: '12:00' },
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
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  </View>
    </TouchableWithoutFeedback>
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );

}
export default App;
