import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { fontGSans, FontGSansBold, FontGSansSemiBold } from '../../../../customs/customFont'
import Product from '../../../components/Product'
import { carProductList } from '../../../dummy'
import modules from '../../../modules'
import _styles from '../../../_styles'

interface Props {
    data: any
    title: any
    subTitle: string
}

const HomeProductSection = (props: Props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
            <View style={styles.productContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        props.data.map((i: any) => {
                            return <Product data={i} />
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeProductSection

const styles = StyleSheet.create({
    textButton: {
        color: modules.WHITE,
        ...FontGSansBold
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: modules.BODY_HORIZONTAL * 2,
        borderRadius: modules.RADIUS / 2,
        paddingVertical: modules.BODY_HORIZONTAL / 1.2
    },
    buttonContainer: {
        ..._styles.center,
        marginTop: modules.BODY_HORIZONTAL * 2
    },
    container: {
        marginTop: modules.BODY_HORIZONTAL * 2,
        paddingTop: modules.BODY_HORIZONTAL ,
        borderTopWidth: 1,
        borderColor:'#e0e0e0'
    },
    title: {
        textAlign: 'center',
        fontSize: modules.FONT_H4,
        ...FontGSansSemiBold
    },
    subTitle: {
        fontSize: modules.FONT_H5,
        textAlign: 'center',
        marginHorizontal: modules.BODY_HORIZONTAL * 4,
        marginTop: modules.BODY_HORIZONTAL / 2,

    },
    productContainer: {
        marginTop: modules.BODY_HORIZONTAL
    }
})
