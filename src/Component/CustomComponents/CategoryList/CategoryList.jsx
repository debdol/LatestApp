import { Text, Image, StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { category } from '../../../Datas/CategoryDatas';

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