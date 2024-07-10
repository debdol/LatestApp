import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiData } from '../../../Redux/Action';
import Header from '../../CustomComponents/Header/Header';
import ProductList from '../../CustomComponents/ProductList/ProductList';
import Loader from '../../Loader/Loader';
import CategoryList from '../../CustomComponents/CategoryList/CategoryList';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.getApiDataReducer);

  useEffect(() => {
    dispatch(getApiData())
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={[1, 1]}
        renderItem={({ item, index }) => {
          return (
            <View>
              {
                index === 0 && <CategoryList />
              }
              {
                index === 1 &&
                <View style={styles.productMainView}>
                  {apiData[0].loading === true ?
                    <Loader /> :
                    !apiData[0].error ?
                      <FlatList
                        numColumns={2}
                        contentContainerStyle={styles.productList}
                        style={{ flexGrow: 0 }}
                        data={apiData[0].data}
                        renderItem={({ item, index }) =>
                          <ProductList item={item} index={index} navigation={navigation} />
                        }
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                      /> : <Text style={{ color: "black", fontSize: 30 }}>Error</Text>}
                </View>
              }
            </View>
          )
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  productMainView: {
    flex: 1
  },
  productList: {
    width: "100%",
  }
})
export default Home