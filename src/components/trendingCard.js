import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';

const TrendingCard = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.type}>{item.type}</Text>

      <View style={[styles.coloredBlock, {backgroundColor: item.bgColor}]}>
        <View style={styles.textBlock}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.triangle}>
        <Svg height="100%" width="100%">
          <Polygon points="-10, 0 170, 0 170, 130" fill="white" />
        </Svg>
      </View>

      <Image style={styles.image} source={item.img} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 6,
    height: 240,
    width: 180,
    justifyContent: 'center',
  },
  type: {
    marginLeft: 10,
    color: '#b2aeae',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
    textAlign: 'left',
  },
  triangle: {
    position: 'absolute',
    top: 20,
    width: '95%',
    right: 0,
    height: '100%',
  },
  coloredBlock: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
    marginRight: 5,
    padding: 10,
  },

  textBlock: {
    height: '35%',
    justifyContent: 'space-between',
  },
  name: {
    color: '#ffffff',
    fontSize: 17,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    position: 'absolute',
    width: '95%',
    height: 90,
    top: 50,
    right: 7,
    transform: [{rotate: '-15deg'}],
  },
});

export default TrendingCard;
