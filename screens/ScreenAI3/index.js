import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const ProductsScreen = ({
  navigation
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(response => response.json()).then(data => setProducts(data));
  }, []);

  const handleProductClick = id => {
    fetch(`https://dummyjson.com/products/${id}`).then(response => response.json()).then(data => {
      navigation.navigate("ProductDetail", {
        product: data
      });
    });
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={products} keyExtractor={item => item.id.toString()} renderItem={({
      item
    }) => <TouchableOpacity style={styles.productCard} onPress={() => handleProductClick(item.id)}>
            <Image source={{
        uri: item.thumbnail
      }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.title}</Text>
            </View>
          </TouchableOpacity>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  productCard: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden"
  },
  productImage: {
    width: 100,
    height: 100
  },
  productInfo: {
    flex: 1,
    padding: 10
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default ProductsScreen;