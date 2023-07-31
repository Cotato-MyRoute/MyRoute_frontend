import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
/**
 * 커뮤니티 루트 리스트의 아이템 컴포넌트를 생성합니다.
 * @function
 * @property {string} image - 지도 이미지의 url 주소
 * @property {string} profile - 프로필 이미지의 url 주소
 * @property {string} name - 사용자 이름
 * @property {string} route_name - 루트의 이름
 * @property {boolean} heart - 좋아요 버튼 클릭 여부
 * @property {number} heart_count - 루트에 눌린 좋아요 개수
 * @property {number} comment - 루트에 작성된 코멘트 개수
 */
const RouteItem = (props) => {

  const [heart, setHeart] = useState(props.heart || false);
  const [heartCount, setHeartCount] = useState(props.heart_count || 110);

  return (
    <View style={styles.container}>
      
      {/* 배경 이미지 */}
      <Image
        source={{ uri: 'https://velog.velcdn.com/images/ea_st_ring/post/defcc808-a333-4e12-b29c-80912f27914b/image.png' }}
        style={styles.background_img}
      />

      {/* 지도 이미지 */}
      <Image
        source={{ uri: 'https://velog.velcdn.com/images/ea_st_ring/post/3cb7714f-1984-495b-9136-2b02cff23866/image.png' }}
        style={styles.map_img}
      />

      {/* 프로필 */}
      <View style={styles.profile}>
        <Image
          style={styles.profile_img}
          source={{ uri: 'https://velog.velcdn.com/images/ea_st_ring/post/a256fc03-28e7-457d-8a07-402f9d322301/image.png' }}
        />
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
          <Text> {props.name} 님의 {'\n'} </Text> 
          <Text style={{ fontWeight: 'bold' }}>
            {props.route_name || props.name} {heart}짱 루트
          </Text>
        </Text>
      </View>

      {/* 정보 */}
      <View style={styles.info}>
        <TouchableOpacity
          style={styles.heart_btn}
          onPress={
            () => {
              setHeart(!heart);
              heart ? setHeartCount(heartCount - 1) : setHeartCount(heartCount + 1);
              // 좋아요 Api 요청 코드 작성 부분
              }
            }
        >
        <Image
          style={{ width: 24, height: 24 }}
          source={
            {
              uri: heart ?
                'https://velog.velcdn.com/images/ea_st_ring/post/ac1e55ea-cd4f-43db-90ef-1f37fcc5bbfa/image.png'
                :
                'https://velog.velcdn.com/images/ea_st_ring/post/deff558f-bff6-4286-a90b-b027941d07e5/image.png'
            }
          }
        />
        <Text style={{ color: 'black', fontSize: 12, textAlign: 'center' }}>
          {heartCount}
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginTop: 60 }}>
        <Image
          style={{ width: 12, height: 12, marginRight: 4 }}
          source={
            { uri: 'https://velog.velcdn.com/images/ea_st_ring/post/cecb1d0c-e002-4e36-90b2-b6e31f792ac5/image.png' }}
        />
        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>
          {props.comment || 98}
        </Text>
      </View>
    </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  background_img: {
    width: 452,
    height: 152,
    position: 'relative',
    borderRadius: 10,
    top: 4,
    left: 0,
  },
  map_img: {
    width: 188,
    height: 152,
    borderRadius: 10,
    position: 'relative',
    left: -452,
    top: 0,
  },
  profile_img: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 152,
    position: 'relative',
    width: 148,
    left: -420,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    position: 'relative',
    left: -396,
    top: 10,
  },
  heart_btn: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.60)',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
export default RouteItem;