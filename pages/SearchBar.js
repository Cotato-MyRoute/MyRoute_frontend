import {View, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';


/**
 * 검색 기능이 있는 입력창 컴포넌트를 생성합니다.
 * @function
 * @property {string} placeholderText - 입력창의 플레이스홀더 텍스트
 * @property {function} searchFunction - 검색 버튼 클릭 시 실행되는 함수
 */
const SearchBar = (props) => {

  const [searchValue, setSearchValue] = useState('');
  const handleChange = (text) => {
    setSearchValue(text);
  }
  return (
    <View style={styles.input_wrapper}>
        <TextInput
          style={styles.search_input}
          placeholder={props.placeholderText}
          onChangeText={handleChange}
          value={searchValue || ""}
        >
        </TextInput>
        <TouchableOpacity onPress={props.searchFunction}>
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
  );
};

const styles = StyleSheet.create({
  input_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 49,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 999,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    marginTop: 29,
    marginBottom: 48,
    backgroundColor: 'white',
  },
  search_input: {
    width:210,
    height:39,
    padding:8,
    zIndex:1,
  },
});

export default SearchBar;