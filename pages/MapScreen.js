import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';


const MapScreen = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const category_titles = ['잡화', '공방', '의류']
  const categories = [
      {'잡화' : [
        {
          'name' : '골동품',
          'key' :  'antique',
        },
        {
          'name' : '생활용품',
          'key' :  'daily',
        },
        {
          'name' : '미술공예',
          'key' :  'art',
        },
        {
          'name' : '문구',
          'key' :  'stationery',
        },
        {
          'name' : '기념품샵',
          'key' :  'souvenir',
        },
        {
          'name' : '완구',
          'key' :  'toy',
        },
        {
          'name' : '소품샵',
          'key' :  'goods',
        },
        {
          'name' : '액세서리',
          'key' :  'accessory',
        }
    ]}
    ,{'공방' : 
      [
        {
          'name' : '베이킹',
          'key' :  'baking',
        },
        {
          'name' : '향수',
          'key' :  'perfume',
        },
        {
          'name' : '제로 웨이스트',
          'key' :  'zerowaste',
        },
        {
          'name' : '인테리어',
          'key' :  'interior',
        },
        {
          'name' : '도자기',
          'key' :  'pottery',
        },
        {
          'name' : '주얼리',
          'key' :  'jewelry',
        },
      ]}
    ,{'의류': [
        {
          'name' : '쇼룸',
          'key' :  'showroom',
        },
        {
          'name' : '빈티지',
          'key' :  'vintage',
        },
        {
          'name' : '편집샵',
          'key' :  'edit',
        },
        {
          'name' : '액세서리',
          'key' :  'accessory',
        }
    ]}
  ]

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Location permission is not granted');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setInitialRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      // 지도 스케일
      latitudeDelta: 0.050,
      longitudeDelta: 0.050,
      
    });
  };

  return (
    <View style={{flex: 1}}>
      {initialRegion && (
        <MapView
          style={{flex: 1, width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation={true}
          followsUserLocation={true}
        />
      )}

        {category_titles.map((title, index) => (
          <TouchableOpacity
            key={title}
            style={[
              styled.category_btn,
              {bottom: 40, left: 20 + 120 * index},
            ]}
            onPress={() => {
              isSelected === title ? 
                setIsSelected(null) :
                setIsSelected(title)
            }}
          >
            <Text style={styled.category_title}>{title}</Text>
          </TouchableOpacity>
        ))}
        <View>
          {categories.map((category, index) => {
            const categoryKey = Object.keys(category)[0];
            const items = category[categoryKey];
            // 카테고리 키와 아이템 가져오기

            // 일치하는 items만 return
            return(
              isSelected === categoryKey && (
                <View 
                  style={[
                    styled.category_items,
                    {left : 20 + (120 * index)}
                ]}>
                    {items.map((item) => (
                      <TouchableOpacity 
                        key={item.key}
                        style={styled.category_item}
                        onPress={() => {
                          setIsSelected(null);
                          setSelectedItem(item.name);
                          // 후에 카테고리별로 필터링
                        }}
                        >
                        <Text
                          style={{
                            fontSize: 18,
                            color: selectedItem === item.name ? '#7B61FF' : 'black'
                          }}
                        >{item.name}</Text>
                      </TouchableOpacity>
                    ))}
                </View>
              )
            )
            })
          }
        </View>
    </View>
  );
};

const styled = StyleSheet.create({
  category_btn: {
    position: 'absolute',
    width: 110,
    height: 40,
    borderRadius: 999,
    backgroundColor: '#7B61FF',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  category_title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  category_items:{
    position: 'absolute',
    flexDirection: 'column',
    width: 110,
    borderRadius: 10,
    backgroundColor: 'white',
    zIndex: 100,
    bottom: 100, 
    left: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  category_item: {
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default MapScreen;
