import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { Fragment } from 'react';
interface Props {
  getData: (data: any) => void;
}
const SearchContent = ({ getData }: Props) => {
  const searchData = [
    {
      id: 1,
      images: [
        require('../storage/images/img1.jpg'),
        require('../storage/images/img2.jpg'),
        require('../storage/images/img3.jpg'),
        require('../storage/images/img4.jpg'),
        require('../storage/images/img4.jpg'),
        require('../storage/images/img5.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../storage/images/img6.jpg'),
        require('../storage/images/img2.jpg'),
        require('../storage/images/img3.jpg'),
        require('../storage/images/img4.jpg'),
        require('../storage/images/img4.jpg'),
        require('../storage/images/img5.jpg'),
        require('../storage/images/img5.jpg'),
        require('../storage/images/img5.jpg'),
        require('../storage/images/img5.jpg'),
      ],
    },
  ];
  const RenderItem = ({ img }: any) => {
    return (
      <TouchableOpacity
        onPressIn={() => getData(img)}
        onPressOut={() => getData(null)}
        style={{ paddingBottom: 2 }}>
        <Image source={img} style={{ width: 128, height: 150 }} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ width: '100%', height: '100%' }}>
      {searchData.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {data.images.map((img, indexImage) => {
              return <RenderItem img={img} key={indexImage} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
