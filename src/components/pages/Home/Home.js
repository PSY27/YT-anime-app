import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { UseGetAllAnime } from '../../common/hooks/getAllAnimeQueries';
import AnimeList from './AnimeList';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  coloumWrapperStyle: {
    justifyContent: "space-between",
    padding: 10,
  }
});

const HomeScreen = () => {
  const { data, isLoading } = UseGetAllAnime();


  const renderItem = ({ item }) => {
    return <AnimeList animeObj={item} />;
  };
  

  return (
   <View>
      {isLoading ? (
        <Text>Loading..</Text>
      ) : data ? (
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.coloumWrapperStyle}
          numColumns={2}
        />
      ) : (
        <Text>Whoops No Data Available</Text>
      )}
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
