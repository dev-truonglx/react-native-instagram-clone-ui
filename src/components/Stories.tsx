import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Stories = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const storyItems = [
    {
      id: 1,
      name: 'add story',
      image: require('../storage/images/userProfile.jpeg'),
    },
    {
      id: 2,
      name: 'truonglx',
      image: require('../storage/images/img1.jpg'),
    },
    {
      id: 3,
      name: 'truonglx',
      image: require('../storage/images/img2.jpg'),
    },
    {
      id: 4,
      name: 'truonglx',
      image: require('../storage/images/img3.jpg'),
    },
    {
      id: 5,
      name: 'truonglx',
      image: require('../storage/images/img4.jpg'),
    },
    {
      id: 6,
      name: 'truonglx',
      image: require('../storage/images/img5.jpg'),
    },
    {
      id: 7,
      name: 'truonglx',
      image: require('../storage/images/img6.jpg'),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}>
      {storyItems.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.push('Status', {
                name: item.name,
                image: item.image,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {item.id === 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderRadius: 100,
                  borderWidth: 1.8,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    alignItems: 'center',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: item.id === 1 ? 1 : 0.5,
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
