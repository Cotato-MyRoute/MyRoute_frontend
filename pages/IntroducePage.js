import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IntroducePage = ({item, uri}) => {

    const styles = StyleSheet.create({
        image: {
            width: 324,
            height: 200,
        },
        pageItem: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 200, 
            // 전체 높이
        }
    });

    return (
        <View style={styles.pageItem}>
            <Image
                source={{
                    // uri는 추후 props로 받을 예정
                    uri: 'https://velog.velcdn.com/images/ea_st_ring/post/e492cde1-dbc1-491b-afca-a2ac97339d14/image.png'
                }}
                style={styles.image}
            />
        </View>
    );
};

export default IntroducePage;