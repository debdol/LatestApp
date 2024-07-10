import { FlatList, StyleSheet, Text, View, Modal, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import { getApiData } from '../../../Redux/Action';
import Header from '../../CustomComponents/Header/Header';
import ProductList from '../../CustomComponents/ProductList/ProductList';
import Loader from '../../Loader/Loader';
import CategoryList from '../../CustomComponents/CategoryList/CategoryList';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.getApiDataReducer) || [];
  const [modalVisible, setModalVisible] = useState(true);
  const [productData, setProductData] = useState([])

  useEffect(() => {
    dispatch(getApiData())
  }, []);

  useEffect(() => {
    console.log("apiData.data:", apiData);
    if (apiData[0].data) {
      console.log("apidataLength:", apiData[0].data);
      setProductData(apiData[0].data)
    }
  }, [apiData])

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
                  {productData.length != 0 ?
                    <FlatList
                      numColumns={2}
                      contentContainerStyle={styles.productList}
                      style={{ flexGrow: 1 }}
                      data={productData}
                      renderItem={({ item, index }) =>
                        <ProductList item={item} index={item.id} navigation={navigation} />
                        // console.log("item:", item)
                      }
                      keyExtractor={(item) => item.id.toString()}
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
  // ...........................Modal Style........................................
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "rgba(0, 71, 67, 0.7)",
    height: 40,
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: "black"
  },
  textStyle: {
    color: 'Black',
    textAlign: 'center',
  },
})
export default Home