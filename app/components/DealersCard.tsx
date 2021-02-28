import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontGSansBold, FontGSansSemiBold } from '../../customs/customFont'
import modules from '../modules'
import _styles from '../_styles'

interface Props {
    data: any
}

const DealersCard = (props: Props) => {
    const { data } = props
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={{ uri: data.img }} />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.subTitle}>Discover more from {data.name}</Text>
        </TouchableOpacity>
    )
}

export default DealersCard

const styles = StyleSheet.create({
    subTitle: {
        marginTop: modules.BODY_HORIZONTAL / 3
    },
    container: {
        width: modules.VIEW_PORT_WIDTH / 1.5,
        marginLeft: modules.BODY_HORIZONTAL,
        ..._styles.center
    },
    img: {
        width: modules.VIEW_PORT_WIDTH / 1.5,
        height: modules.VIEW_PORT_WIDTH
    },
    name: {
        fontSize: modules.FONT_H4,
        ...FontGSansSemiBold,
        marginTop: modules.BODY_HORIZONTAL / 2
    }
})
