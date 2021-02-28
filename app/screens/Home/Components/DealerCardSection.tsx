import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DealersCard from '../../../components/DealersCard'
import { BigCartList } from '../../../dummy'
import modules from '../../../modules'

interface Props {

}

const DealerCardSection = (props: Props) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {BigCartList.map((i) => {
                    return <DealersCard data={i} />
                })}
            </ScrollView>

        </View>
    )
}

export default DealerCardSection

const styles = StyleSheet.create({
    container: {
        marginTop: modules.BODY_HORIZONTAL * 2
    }
})
