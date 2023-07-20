import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IntroducePage = ({item, screenWidth, uri}) => {

    const imageWidth = screenWidth >= 540 ? 477 : 367;
    const imageHeight = screenWidth >= 540 ? 289 : 228;
    
    const styles = StyleSheet.create({
        image: {
            width: imageWidth,
            height: imageHeight,
        },
        pageItem: {
            justifyContent: 'center',
            alignItems: 'center',
            height: imageHeight,
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