import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';

const images = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/400',
  // Add more image URLs as needed
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.notificationContainer}>
          <Ionicons name="notifications" size={24} color="white" />
          <View style={styles.notificationBezel}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Social Frame</Text>
        <View style={styles.messagesContainer}>
          <Ionicons name="mail" size={24} color="white" />
          <View style={styles.messagesBezel}>
            <Text style={styles.messagesText}>2</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <Swiper style={styles.wrapper} loop={false} showsPagination={false} horizontal={true}>
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        ))}
      </Swiper>

     {/* Footer */}
     <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBezel: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  notificationText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messagesBezel: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  messagesText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
