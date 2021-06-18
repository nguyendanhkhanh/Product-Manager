import React, { useState, useEffect } from 'react';
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
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { createproduct, deleteproduct } from '../redux/productsApp';
//ProductScreen

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
    />
  );
};

function ProductScreen({ navigation }) {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [tempProducts, setTempProducts] = useState(products);

  const createProduct = (product) => dispatch(createproduct(product));
  const deleteProduct = (id) => dispatch(deleteproduct(id));

  const toChar = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); //trim
    str = str.toLowerCase();

    const from =
      'aáàảạãăẳắặằẵâấầậẩẫeèéẻẹẽêếềễểệiíỉịĩìyỳỹỷỵýuùúủụũưứừửựũoóòỏọõôốồổộỗơớờởợõđ';
    const to =
      'aaaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiiiyyyyyyuuuuuuuuuuuuooooooooooooooooood';

    for (let i = 0; i < from.length; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return str;
  };

  useEffect(() => {
    setTempProducts(products);
  }, [products]);

  const comparedArr = (arr, value) => {
    let newArr = [...arr];

    return newArr.filter((x) => {
      //lay ra mang cac tu cua ten item hien tai   
      let nameArr = x.name.split(' ');
    // => ['2', 'len', 'top', 'roi']
      let check = 0;
      nameArr.forEach((item) => {
        value.split(' ').forEach((valueItem) => {
          if (toChar(item) === valueItem) check++;
        });
      });
      //
      return (check >= value.split(' ').length);
    });
  };

  const searchHandle = (e) => {
    const { value } = e.target;
    //check neu value rong => k searhc, hien thi tat ca item
    if (value?.length === 0 || value === '') {
      setTempProducts(products);
      return;
    }

    let newList = comparedArr([...products], toChar(value));

    setTempProducts(newList);
  };

  const Item = ({ item, index, onPress }) => (
    <TouchableOpacity
    // truyen vao 
      onPress={() => navigation.navigate('DetailsScreen', { item, index })}
      style={(styles.item, styles.row)}>
      <Image style={styles.img} source={require('../img/images1.jpg')} />
      <View style={styles.spaceAround}>
        <Text style={styles.itemTextName}>{item.name}</Text>
        <Text style={[styles.itemTextPrice]}>Price: {item.price} VND</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = (item, index) => {
    return <Item item={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Products List</Text>
        <TouchableOpacity
          style={(styles.buttonCreate, styles.absolute)}
          onPress={() =>
            navigation.navigate('CreateScreen', {
              createProduct,
            })
          }>
          <MaterialIcons name="library-add" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.topic}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          onChange={searchHandle}></TextInput>

        <FlatList
          data={tempProducts}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
export default ProductScreen;
