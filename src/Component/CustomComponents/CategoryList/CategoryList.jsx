import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
const category = [
  {
    id: 1,
    title: "Furniture",
    image: 'https://5.imimg.com/data5/TestImages/VC/NS/MT/SELLER-63223529/wooden-office-tables.jpg'
  },
  {
    id: 2,
    title: "Offer",
    image: 'https://cdn1.vectorstock.com/i/1000x1000/88/55/special-offer-tag-star-sticker-icon-for-sale-vector-1758855.jpg'
  },
  {
    id: 4,
    title: "Coins",
    image: 'https://img.freepik.com/free-vector/money-bag-background-with-shiny-coins_23-2147630138.jpg'
  },
  {
    id: 3,
    title: "Offer",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvTxdC-mpkVKlctyZ6_n-ZubThJWtNqiBgA&s'
  },
  {
    id: 5,
    title: "Phones",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmG-lAwP3Pyu62zaY0k-zAIkL03yHKJYF4A&s'
  },
  {
    id: 6,
    title: "Fashion",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuR2g-Hrd-52LM4JMOyICX0rQkEAa-_d9gw&s'
  }
]
const CategoryList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.conatiner}
      style={{ flexGrow: 0 }}
      data={category}
      renderItem={({ item, index }) =>
        <Animatable.View animation={'lightSpeedIn'} duration={2000} delay={index * 300} style={{ padding: 9, }}>
          <View
            key={item.id}
            style={styles.category}>
            <Image
              source={{ uri: item.image }}
              style={styles.imgStyle}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </Animatable.View>
      }
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}


const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#FFFFFFFF',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: 'Black',
    fontFamily: "MontserratAlternates-Regular"
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
})
export default CategoryList