import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import SearchContent from '../components/SearchContent';
import Ant from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  const [image, setImage] = useState(null);

  const getData = (data: any) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <SearchBox />
        <SearchContent getData={getData} />
        <TouchableOpacity
          style={{
            // margin: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ant name="pluscircleo" style={{ fontSize: 40, opacity: 0.5 }} />
        </TouchableOpacity>
      </ScrollView>
      {image && (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: 350,
              height: 465,
              zIndex: 1,
              elevation: 50,
              borderRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: '600' }}>
                  username
                </Text>
              </View>
            </View>
            <Image source={image} style={{ width: '100%', height: '80%' }} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignContent: 'center',
                width: '100%',
                padding: 8,
              }}>
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 26 }}
              />
              <Feather name="navigation" style={{ fontSize: 26 }} />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
