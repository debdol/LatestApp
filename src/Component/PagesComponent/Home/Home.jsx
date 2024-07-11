import { FlatList, StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getApiData } from '../../../Redux/Action';
import Header from '../../CustomComponents/Header/Header';
import ProductList from '../../CustomComponents/ProductList/ProductList';
import Loader from '../../Loader/Loader';
import CategoryList from '../../CustomComponents/CategoryList/CategoryList';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.getApiDataReducer) || [];
  const [productData, setProductData] = useState([])

  useEffect(() => {
    dispatch(getApiData())
  }, []);

  useEffect(() => {
    if (apiData[0].data) {
      setProductData(apiData[0].data)
    }
  }, [apiData]);
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
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
                  {productData.length != 0 ?
                    <FlatList
                      numColumns={2}
                      contentContainerStyle={styles.productList}
                      style={{ flexGrow: 1 }}
                      data={productData}
                      renderItem={({ item, index }) =>
                        <ProductList item={item} index={item.id} navigation={navigation} />
                      }
                      keyExtractor={(item, index) => item.id}
                      showsVerticalScrollIndicator={false}
                    /> :
                    <Loader />
                  }
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
  },
})
export default Home