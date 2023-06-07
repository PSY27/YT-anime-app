import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {UseGetSelectedAnimeInfo} from '../../common/hooks/getSelectedAnimeInfoQuery';
import YoutubeIframe from 'react-native-youtube-iframe';
const styles = StyleSheet.create({
  coloumWrapperStyle: {
    justifyContent: 'space-between',
    padding: 10,
  },
});
const dimensionsForScreen = Dimensions.get('screen');
const SelectedAnimeScreen = ({route}) => {
  const selectedAnimeData = route.params.selectedAnimeObj;
  const [playing, setPlaying] = useState(false);
  const {data, isLoading} = UseGetSelectedAnimeInfo(selectedAnimeData.mal_id);

  const onStateChanged = useCallback(state=>{
    if(state ==="ended"){
      setPlaying(false)
    }
    if(state ==="playing"){
      setPlaying(true)
    }
    if(state ==="paused"){
      setPlaying(false);
    }
  })

  return (
    <View style={{backgroundColor:playing? "black":"transparent",height:dimensionsForScreen.height,width:dimensionsForScreen.width}}>
      <Text>{selectedAnimeData.title}</Text>
      <Text>{selectedAnimeData.title_japanese}</Text>
      <Text>{selectedAnimeData.approved}</Text>
      {isLoading ? (
        <Text>Loading..</Text>
      ) : data ? (
        <View >
          {data.data.trailer.youtube_id ? (
            <YoutubeIframe
              height={500}
              width={dimensionsForScreen.width}
              play={playing}
              videoId={data.data.trailer.youtube_id}
              onChangeState={onStateChanged}
            />
          ) : (
            <Text>No Trailer Available</Text>
          )}
        </View>
      ) : (
        <Text>No Data Available</Text>
      )}
    </View> 
  );
};

export default SelectedAnimeScreen;
