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

import { isValidName } from '../validate/validate';
import { isValidUnit } from '../validate/validate';
import { isValidLotNumber } from '../validate/validate';
import { isValidPrice } from '../validate/validate';

//Create Screen
function CreatScreen({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  // const [img, setImg] = useState('')
  const [lot, setLot] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  var checkValid =
    isValidName(name) &&
    isValidUnit(unit) &&
    isValidLotNumber(lot) &&
    isValidPrice(price);
  var checkValidName = isValidName(name);
  var checkValidUnit = isValidUnit(unit);
  var checkValidLot = isValidLotNumber(lot);
  var checkValidPrice = isValidPrice(price);

  function submitForm() {
    if (checkValid) onSaveProduct();
    else alert('Please check agian');
  }

  function onSaveProduct() {
    // navigation.state.params.createProduct({ name, price, unit, lot })
    dispatch({
      type: 'CREATE_PRODUCT',
      payload: {
        id: name,
        name,
        price,
        unit,
        lot,
      },
    });
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Create new Product</Text>
      </View>
      <ScrollView style={styles.topic}>
        <View>
          <Text style={styles.textTopic}>Product name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={name}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={styles.textTopic}>Unit:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={unit}
            onChangeText={setUnit}
          />
        </View>
        <View>
          <Text style={styles.textTopic}>Lot:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Type here..."
            value={lot}
            onChangeText={(text) => setLot(text)}
          />
        </View>
        <View>
          <Text>Price (VND):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Type here..."
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          // disabled={checkValid ? false : true}
          onPress={() => submitForm()}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreatScreen;
