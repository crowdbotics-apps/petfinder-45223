import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const animalsData = [{
  id: 124,
  organization_id: "NJ333",
  url: "https://www.petfinder.com/cat/nebula-124/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1",
  type: "Cat",
  species: "Cat",
  breeds: {
    primary: "American Shorthair"
  },
  colors: {
    primary: "Tortoiseshell"
  },
  age: "Young",
  gender: "Female",
  size: "Medium",
  name: "Nebula",
  description: "Nebula is a shorthaired, shy cat. She is very affectionate once she warms up to you.",
  photos: [{
    small: "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=100",
    medium: "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=300"
  }],
  status: "adoptable",
  attributes: {
    spayed_neutered: true
  },
  environment: {
    children: false,
    dogs: true,
    cats: true
  },
  contact: {
    email: "petfindertechsupport@gmail.com",
    phone: "555-555-5555",
    address: {
      address1: "a1",
      address2: "a2"
    }
  }
}];

const AnimalList = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AnimalDetail', {
    animal: item
  })}>
      <Image source={{
      uri: item.photos[0].medium
    }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={animalsData} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f1'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14
  }
});
export default AnimalList;