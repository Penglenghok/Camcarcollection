import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontGSansSemiBold } from '../../customs/customFont'
import modules from '../modules'
import { formatMoney } from '../services/format.service'
import _styles from '../_styles'

interface Props {
    data: any
}

const Product = (props: Props) => {
    const { data } = props
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={{ uri: data.img }} />
            </View>
            <Text style={styles.collectionText}>New Collection</Text>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.shortDesc}>{data.shortDescription}</Text>
            <Text style={styles.price}>${formatMoney(data.price)}</Text>
        </TouchableOpacity>
    )
}

export default Product

const styles = StyleSheet.create({
    price: {
        fontSize: modules.FONT_H6,
        marginTop: modules.BODY_HORIZONTAL / 2
    },
    shortDesc: {
        fontSize: modules.FONT_H6,
        marginTop: modules.BODY_HORIZONTAL / 4
    },
    collectionText: {
        color: modules.SUB_TITLE,
        marginTop: modules.BODY_HORIZONTAL / 1.5,
        fontSize: modules.FONT_H6
    },
    container: {
        width: modules.VIEW_PORT_WIDTH / 2,
        marginLeft: modules.BODY_HORIZONTAL,
        overflow: 'hidden',
        ..._styles.center,
        flexDirection: 'column',
    },
    imgContainer: {
        backgroundColor: "#F7F7F7",
        padding: modules.BODY_HORIZONTAL,
        height: modules.VIEW_PORT_WIDTH / 2.5,
        ..._styles.center
    },
    image: {
        width: modules.BODY_HORIZONTAL * 12,
        height: modules.BODY_HORIZONTAL * 6,
        resizeMode: 'contain',
    },
    name: {
        marginTop: modules.BODY_HORIZONTAL / 4,
        fontSize: modules.FONT_H6,
        ...FontGSansSemiBold
    }
})
