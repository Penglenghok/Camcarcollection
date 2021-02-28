import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { homeBanner } from '../../../dummy'
import modules from '../../../modules'

interface Props {
    data: any
}

const HomeSwiper = (props: Props) => {
    return (
        <View style={styles.swiperContainer}>
            <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
                {
                    props.data.map((i:any) => {
                        return <View style={styles.slide1}>
                            <Image style={styles.imgBanner} source={{ uri: i.img }} />
                        </View>
                    })
                }
            </Swiper>
        </View>
    )
}

export default HomeSwiper

const styles = StyleSheet.create({
    swiperContainer: {
        height: modules.VIEW_PORT_HEIGHT / 2.5,
        marginTop: modules.BODY_HORIZONTAL * 2
    },
    wrapper: {

    },
    slide1: {
        marginHorizontal: modules.BODY_HORIZONTAL * 2,
        overflow: 'hidden',

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imgBanner: {
        width: modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL * 4,
        height: modules.VIEW_PORT_HEIGHT / 2,
        resizeMode: 'cover'
    }
})
