import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TrendingCard from '../components/trendingCard';

const TrendingThree = [
  {
    id: 1,
    name: 'Nike Flow Blow 2',
    img: require('../assets/images/nike2.png'),
    bgColor: '#e15050',
    type: 'STREET',
    price: '$186',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: 2,
    name: 'Nike Air Force 6',
    img: require('../assets/images/nike3.png'),
    bgColor: '#faa969',
    type: 'RUNNING',
    price: '$160',
    sizes: [8, 9, 10, 11],
  },
  {
    id: 3,
    name: 'Nike Compton Boom',
    img: require('../assets/images/nike6.png'),
    bgColor: '#fca8a8',
    type: 'TRAINING',
    price: '$218',
    sizes: [5, 7, 9, 11],
  },
];

const Home = () => {
  const [trending, setTrending] = useState(TrendingThree);







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
        renderItem={ ({item, index}) => (
          <TrendingCard item={item} index={index} />
        ) }
        />
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
  trendingBlock:{
    marginTop:10,
    height:260,
  }
});

export default Home;
