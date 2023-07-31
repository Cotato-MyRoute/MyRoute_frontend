import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import SearchBar from "./SearchBar";
import { useState } from "react";
import RouteItem from "./RouteItem";

const CommunityScreen = () => {
  const [selected, setSelected] = useState('recent');
  const onPress = (id) => {
    setSelected(id);
  }
  return (
    <View 
      style={{
        alignItems : "center",
        padding: 20,
        }}
    >
      {/* 헤더 */}
      <View style={styles.header}>
        <Image 
          source={{
            uri : 'https://velog.velcdn.com/images/ea_st_ring/post/bb2bc640-b524-4d6d-a581-731f71d3fa97/image.png'
            }}
          style={{
            width: 64,
            height: 64,
            marginRight: 38,
            marginBottom: 10,
          }}
        />
        <SearchBar 
          placeholderText="지역구/유저 이름을 검색하세요."
          searchFunction={() => {alert('후에 구현')}}
        />
      </View>

      {/* 버튼 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 60,
          padding: 40,
        }}
      >
          <Button title="최신순" id="recent" selected={selected} onPress={onPress}/>
          <Button title="인기순" id="popular" selected={selected} onPress={onPress}/>
          <Button title="코멘트 많은 순" width={168} id="comment" selected={selected} onPress={onPress}/>
      </View>

      {/* 루트 리스트 */}
      <View style={styles.route_list}>
        <FlatList
        data={[
          {key: 'Devin', heart: true, heart_count: 131, comment: 108},
          {key: 'Dan', heart: false, heart_count: 128, comment: 98},
          {key: 'Dominic', heart: true, heart_count: 120, comment: 98},
          {key: 'Jackson', heart: false, heart_count: 117, comment: 78},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => 
          <RouteItem 
            image={item.url}
            profile={item.profile}  
            name={item.key} 
            route_name={item.route_name}
            heart={item.heart}
            heart_count={item.heart_count}
            comment={item.comment}
          />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    top: 60, 
  },
  route_list : {
    flexDirection: 'row',
    width: 452,
  },
});

const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: props.width || 112,
        height: 44,
        borderRadius: 999,
        backgroundColor: props.selected === props.id ? '#7B61FF' : '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
      onPress={() => props.onPress(props.id)}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};



export default CommunityScreen;
