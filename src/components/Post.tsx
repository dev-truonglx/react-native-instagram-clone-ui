import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

const Post = () => {
  const [like, setLike] = useState(false);
  const posts = [
    {
      id: 1,
      title: 'post title',
      authorImage: require('../storage/images/userProfile.jpeg'),
      image: require('../storage/images/img1.jpg'),
      likes: 678,
      isLiked: true,
    },
    {
      id: 2,
      title: 'post title',
      authorImage: require('../storage/images/userProfile.jpeg'),
      image: require('../storage/images/img2.jpg'),
      likes: 678,
      isLiked: true,
    },
    {
      id: 3,
      title: 'post title',
      authorImage: require('../storage/images/userProfile.jpeg'),
      image: require('../storage/images/img3.jpg'),
      likes: 678,
      isLiked: true,
    },
    {
      id: 4,
      title: 'post title',
      authorImage: require('../storage/images/userProfile.jpeg'),
      image: require('../storage/images/img4.jpg'),
      likes: 678,
      isLiked: true,
    },
    {
      id: 5,
      title: 'post title',
      authorImage: require('../storage/images/userProfile.jpeg'),
      image: require('../storage/images/img5.jpg'),
      likes: 678,
      isLiked: true,
    },
  ];
  return (
    <View style={{ marginBottom: 80 }}>
      {posts.map(post => {
        return (
          <View
            key={post.id}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={post.authorImage}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {post.title}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={post.image}
                style={{ width: '100%', height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                paddingVertical: 15,
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      padding: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Like by {like ? 'you and' : ''}{' '}
                {like ? post.likes + 1 : post.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                }}>
                If enjoy the video ! please like and Subscribe :)
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={post.authorImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{ opacity: 0.5 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Entypo
                    name="emoji-happy"
                    style={{
                      fontSize: 15,
                      color: 'lightgreen',
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{ fontSize: 15, color: 'pink', marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{ fontSize: 15, color: 'red' }}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
