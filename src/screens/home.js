import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TrendingCard from '../components/trendingCard';
import ProductCard from '../components/productCard';

const TrendingThree = [
  {
    id: 651,
    name: 'Nike Flow Blow 2',
    img: require('../assets/images/nike2.png'),
    bgColor: '#e15050',
    type: 'STREET',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 275,
    name: 'Nike Air Force 6',
    img: require('../assets/images/nike3.png'),
    bgColor: '#faa969',
    type: 'RUNNING',
    price: '$160',
    sizes: [8, 9, 10, 11],
  },
  {
    id: 355,
    name: 'Nike Compton Boom',
    img: require('../assets/images/nike6.png'),
    bgColor: '#fca8a8',
    type: 'TRAINING',
    price: '$218',
    sizes: [5, 7, 9, 11],
  },
];

const ProductsList = [
  {
    id: 8434,
    name: 'Nike Air Naked Waked IX',
    img: require('../assets/images/nike8.png'),
    bgColor: '#e15050',
    type: 'STREET',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 2522,
    name: 'Nike Slow Jordish',
    img: require('../assets/images/nike7.png'),
    bgColor: '#faa969',
    type: 'RUNNING',
    price: '$160',
    sizes: [8, 9, 10, 11],
  },
  {
    id: 3335,
    name: 'Nike Lakers Low-Flex',
    img: require('../assets/images/nike2.png'),
    bgColor: '#fca8a8',
    type: 'TRAINING',
    price: '$218',
    sizes: [5, 7, 9, 11],
  },
  {
    id: 1322,
    name: 'Nike Cross Country II',
    img: require('../assets/images/nike5.png'),
    bgColor: '#e15050',
    type: 'STREET',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 255,
    name: 'Nike Air Planes X',
    img: require('../assets/images/nike4.png'),
    bgColor: '#faa969',
    type: 'RUNNING',
    price: '$160',
    sizes: [8, 9, 10, 11],
  },
  {
    id: 6563,
    name: 'Nike Motion Lazy IV',
    img: require('../assets/images/nike1.png'),
    bgColor: '#fca8a8',
    type: 'TRAINING',
    price: '$218',
    sizes: [5, 7, 9, 11],
  },
];

const Home = () => {
  const [trending, setTrending] = useState(TrendingThree);
  const [products, setProducts] = useState(ProductsList);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TRENDING</Text>

      {/*Trending scrollable*/}
      <View style={styles.trendingBlock}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={trending}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TrendingCard item={item} index={index} />
          )}
        />
      </View>

      {/*Other products*/}
      <View style={styles.productsBlock}>
        <View style={styles.sideTitle}>
          <Text style={styles.sideTitle_text}>TOP   RATED</Text>
        </View>
        <View style={styles.productListArea}>
          <FlatList 
            keyExtractor={item => item.id.toString()}
            data={products}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item, index}) => (
              <ProductCard item={item} index={index} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 25,
    padding: 5,
    margin: 10,
    fontWeight: 'bold',
  },
  trendingBlock: {
    marginTop: 5,
    height: 260,
  },
  productsBlock: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 15,
  },
  sideTitle: {
    flex: 0.5,
    padding:1,
    margin:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  sideTitle_text: {
    width:300,
    textAlign:'center',
    fontSize:20,
    fontWeight:'500',
    color:'#b2aeae',
    transform:[{
      rotate:'270deg'
    }],

  },
  productListArea: {
    flex: 3,
  },
});

export default Home;
