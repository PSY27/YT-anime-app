import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {UseGetAllAnime} from '../../common/hooks/getAllAnimeQueries';
import { useNavigation } from '@react-navigation/native';

const AnimeList = ({animeObj}) => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
    },
    tinyLogo: {
      height: 300,
      width: 150,
      borderRadius: 10,
    },
    logo: {
      width: 66,
      height: 58,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.48)',
    },
    pushTextToBottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    textStyles: {
      color: 'white',
    },
  });
  const navigation = useNavigation();
 

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('SelectedAnime', {
          selectedAnimeObj: animeObj,
        });
      }}>
      <ImageBackground
        source={{uri: animeObj.images.jpg.image_url}}
        style={styles.tinyLogo}>
        <View style={styles.overlay}>
          <View style={styles.pushTextToBottom}>
            <Text style={styles.textStyles} adjustsFontSizeToFit={true}>
              {animeObj.title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AnimeList;
