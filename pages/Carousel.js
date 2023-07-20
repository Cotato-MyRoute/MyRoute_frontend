import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import IntroducePage from './IntroducePage';

export default function Carousel({pages, pageWidth, gap, offset}) {
    const [page, setPage] = useState(0);

    function renderItem({item}) {
        return (
            <IntroducePage item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
        );
    }

    const onScroll = (e) => {
        const newPage = Math.round(
            e.nativeEvent.contentOffset.x / (pageWidth + gap),
        );
        setPage(newPage);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    height: 220,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <FlatList
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={{
                    // paddingHorizontal: offset + gap / 2 ,
                    // 넷플릭스 같이 옆에 이미지도 보여야 할 때 위의 값 사용하기
                    paddingHorizontal: 0,
                    }}
                    data={pages}
                    decelerationRate="fast"
                    horizontal
                    keyExtractor={(item) => `page__${item.num}`}
                    onScroll={onScroll}
                    pagingEnabled
                    renderItem={renderItem}
                    snapToInterval={pageWidth + 18}
                    snapToAlignment="start"
                    showsHorizontalScrollIndicator={false}
                />
                {/* 이미지 순서를 나타내기 위한 Indicator */}
                <View
                    style={styles.indicators}
                >
                    {Array.from({length: pages.length}, (_, i) => i).map((i) => (
                        <View 
                            style={{
                                ...styles.indicator,
                                backgroundColor:i === page ? '#262626' : '#dfdfdf'
                            }}
                            key={`indicator_${i}`} 
                            focused={i === page} 
                        />
                    ))}       
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicators: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    indicator: {
    width: 4,
    height: 4,
    borderRadius: 4,
    margin : 9,
    }, 
})