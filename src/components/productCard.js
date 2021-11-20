import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';


const ProductCard = ({item, index}) => {



  return (
    <TouchableOpacity style={styles.card}>
     
      <Image 
      source={item.img} 
      resizeMode="cover" 
      style={styles.image} />
    
        <View style={styles.text}>
          <Text style={styles.text_name}>{item.name}</Text>
          <Text style={styles.text_price}>{item.price}</Text>
        </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection:"row",
    marginBottom:5,
    height: 80,
    width: "100%",
    alignItems:'center',
  },
  image:{
    flex:1,
    width:"70%",
    height:45,
  },
  text:{
    padding:10,
    marginLeft:12,
    flex:2,
    flexDirection:'column',
      
  },
  text_name:{
    fontSize:16,
    fontWeight:'500'
  },
  text_price:{
    fontSize:20,
    color:'#8e8e8e',
    fontWeight:'bold',
  }

});

export default ProductCard;
