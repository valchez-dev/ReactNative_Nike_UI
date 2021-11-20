import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';

const DetailsCard = ({item, onPress}) => {


  return (
    <View style={styles.card}>
      <View style={[styles.coloredBlock, {backgroundColor: item.bgColor}]}>
        <View style={styles.textBlock}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={styles.sizeBlock}>
          <Text style={styles.sizeText}>Select Size</Text>
        </View>

        <TouchableOpacity 
        onPress={onPress}
        style={styles.button}>
          <Text style={styles.button_text}>Add To Cart</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.image} source={item.img} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 6,
    height: '60%',
    width: '80%',
    justifyContent: 'center',
    alignItems:'center'
  },
  coloredBlock: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  textBlock: {
    flexDirection: 'column',
    height: '30%', 
  },
  name: {
    padding: 5,
    margin: 5,
    width: '90%',
    color: '#ffffff',
    fontSize: 27,
    fontStyle: 'italic',
  },
  price: {
    padding: 5,
    margin: 5,
    fontSize: 30,
    width: '50%',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    position: 'absolute',
    width: '99%',
    height: 160,
    top: 10,
    right: 5,
    transform: [{rotate: '-15deg'}],
  },
  sizeBlock: {
    flexDirection: 'row',
  },
  sizeText: {
    color: '#ffffff',
    fontSize: 15,
    padding: 5,
    marginBottom: 15,
  },
  button: {
    padding: 20,
    margin: 0,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  button_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default DetailsCard;
