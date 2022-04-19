import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

type StatusParamList = {
  Status: { name: string; image: any };
};
const Status = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StatusParamList, 'Status'>>();
  const [progress, setProgress] = useState(new Animated.Value(0));
  const { name, image } = route.params;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          backgroundColor: 'black',
          height: '100%',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 3,
              width: '95%',
              borderRadius: 1,
              backgroundColor: 'gray',
              top: 10,
            }}>
            <Animated.View
              style={{
                height: '100%',
                backgroundColor: 'white',
                width: progressAnimation,
              }}
            />
          </View>
          <View
            style={{
              paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
              width: '95%',
            }}>
            <View
              style={{
                borderRadius: 100,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={image}
                style={{
                  borderRadius: 100,
                  backgroundColor: 'orange',
                  resizeMode: 'cover',
                  width: '92%',
                  height: '92%',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '95%',
                paddingHorizontal: 20,
              }}>
              <Text style={{ color: 'white', fontSize: 10 }}>{name}</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionic
                  name="close"
                  style={{ fontSize: 20, color: 'white', opacity: 1 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexGrow: 1, width: '100%', marginTop: 10 }}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              maxHeight: 600,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            height: 80,
            // paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="Send message"
            placeholderTextColor="white"
            style={{
              borderColor: 'white',
              borderRadius: 25,
              width: '85%',
              height: 50,
              borderWidth: 1,
              fontSize: 20,
              color: 'white',
              paddingLeft: 20,
            }}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="navigation"
              style={{ fontSize: 30, color: 'white' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Status;
