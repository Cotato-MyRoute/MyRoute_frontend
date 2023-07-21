import { Text, View, Image, StyleSheet, Button, TouchableOpacity, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./Carousel";
import { useState } from "react";

const HomeScreen = () => {

const navigation = useNavigation();
const screenWidth = Math.round(Dimensions.get('window').width);
const imageSize = screenWidth >= 540 ? 477 : 367;

const [searchValue, setSearchValue] = useState('');

const handleChange = (text) => {
  setSearchValue(text);
}

const PAGES = [
  {
    num: 1,
    uri:"추후 추가"
  },
  {
    num: 2,
    uri:"추후 추가"
  },
  {
    num: 3,
    uri:"추후 추가"
  },
];


  return (
    <View
      style={{alignItems:'center'}}
    >
      {/* 헤더 */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection:'row',
            left: 20,
        }}
        >
          <Image
            source={{
              uri: "https://velog.velcdn.com/images/ea_st_ring/post/8726243f-9933-49e7-8949-bec050f069e1/image.png"
            }}
            style={styles.logo}
          />
          
          <Image
            source={{
              uri: 'https://velog.velcdn.com/images/ea_st_ring/post/367ca3c2-aadb-4baf-aea8-0c7b7543eae2/image.png'
            }}
            style={{
              width: 100,
              height: 12,
              marginTop: 10,
              marginLeft:10,
          }}
          />
        </View>
        <TouchableOpacity 
          style={styles.mypage_button}
          onPress={()=> navigation.navigate("MyPageScreen")}
        >
          <Image source={{
            uri : 'https://velog.velcdn.com/images/ea_st_ring/post/787e3300-b025-44b4-90a5-bc8101f0cc37/image.png'
          }}
            style={{
              width: 12,
              height: 12,
              marginRight: 5,
              marginTop:2,
          }}
          />
          <Text style={{fontSize: 12}}>마이페이지</Text>
        </TouchableOpacity>
      </View>

      {/* 소개 */}
      <View
      style={{
        overflow: "hidden",
        width: imageSize,
        height: 420,
        justifyContent: "center",
        alignItems:'center',
        alignSelf:'center',
      }}
      >
        <Text style={styles.intro_title}> 새로운 소품샵이 나왔어요! </Text>
        <Carousel
          gap={0}
          offset={0}
          pages={PAGES}
          pageWidth={screenWidth - (screenWidth - imageSize)}
        />
      </View>

      {/* 검색 */}
      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.search_input} 
          placeholder="상점명을 검색하세요."
          onChangeText={handleChange}
          value={searchValue || " "}
        >
        </TextInput>
        <TouchableOpacity onPress={()=>{
            alert(`후에 ${searchValue} 검색 구현`)
          }}>
        <Image 
          source={{uri : 'https://velog.velcdn.com/images/ea_st_ring/post/d7be86c3-ee37-4e01-a2b0-29f14ece8497/image.png'}}
          style={{
            width: 18,
            height: 18,
            marginRight: 8,
            zIndex:999,
          }}
        />
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default HomeScreen;



const styles = StyleSheet.create({
  header: {
    width:'100%',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'flex-end',
    top: 40,
    marginBottom: 108,
    padding: 20, 
  },
  logo: {
    width: 16.214,
    height: 20.404,
  },
  mypage_button: {
    flexDirection:'row',
    borderRadius:999,
    borderWidth:1,
    borderColor:'rgba(0, 0, 0, 0.30)',
    width: 95,
    height: 30,
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    top: 8,
    right: 16,   
  },
  intro_title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 26,
    color : '#2D2D2D',
  },
  input_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 310,
    height: 49,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 999,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    marginTop: 29,
  },
  search_input: {
    width:210,
    height:39,
    padding:8,
    zIndex:1,
  }
});