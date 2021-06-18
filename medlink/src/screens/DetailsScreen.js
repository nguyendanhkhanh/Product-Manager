import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import styles from '../styles/styleSheet';
//Details Screen
function DetailsScreen({ navigation }) {
  //destructuring es6
  const { item, index } = navigation.state.params;
  const dispatch = useDispatch();

  const [nameProduct, setNameProduct] = useState(item.name);
  const [unitProduct, setUnitProduct] = useState(item.unit);
  const [lotNumber, setLotNumber] = useState(item.lot);
  const [priceProduct, setPriceProduct] = useState(item.price);

  const [direction, setDirection] = useState('');
  const [edit, setEdit] = useState(false);

  const updateProduct = () => {
    const data = {
      name: nameProduct,
      unit: unitProduct,
      lot: lotNumber,
      price: priceProduct,
    };
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: { product: data, index },
    });

  };

  const deleteProduct = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: item.name
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Product Details</Text>
      </View>
      <ScrollView style={styles.topic}>
        <View>
          <Text style={styles.textTopic}>Product name:</Text>
          <TextInput
            editable={edit}
            onBlur
            style={styles.input}
            placeholder="Type here..."
            value={nameProduct}
            onChangeText={(text) => setNameProduct(text)}
          />
        </View>
        <View>
          <Text style={styles.textTopic}>Unit:</Text>
          <TextInput
            editable={edit}
            style={styles.input}
            placeholder="Type here..."
            value={unitProduct}
            onChangeText={(text) => setUnitProduct(text)}
          />
        </View>
        <View>
          <Text style={styles.textTopic}>Lot number:</Text>
          <TextInput
            editable={edit}
            style={styles.input}
            placeholder="Type here..."
            value={lotNumber}
            onChangeText={(text) => setLotNumber(text)}
          />
        </View>
        <View>
          <Text style={styles.textTopic}>Price (VND):</Text>
          <TextInput
            editable={edit}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Type here..."
            value={priceProduct}
            onChangeText={(text) => setPriceProduct(text)}
          />
        </View>
        <View>
          <Text>Image:</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonDetail} onPress={() => setEdit(true)}>
            <Text style={styles.buttonText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDetail}
            onPress={deleteProduct}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
        {edit && (
          <TouchableOpacity style={styles.buttonDetail} onPress={updateProduct}>
            <Text style={styles.buttonText}>Confirm Edit</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
