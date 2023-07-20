import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
const navigation = useNavigation();

  return (
    <View>
      {/* Header */}
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
      <View>

      </View>


    </View>
  );
};
export default HomeScreen;



const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'flex-end',
    top: 30,
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
  }
});