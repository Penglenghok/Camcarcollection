import * as React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FontGSansBold, FontGSansSemiBold, SFProTextHeavy, SFProTextMedium, SFProTextSemibold } from '../../../customs/customFont'
import { carProductList, carProductListTwo, homeBanner, homeBannerTwo } from '../../dummy'
import modules from '../../modules'
import _styles from '../../_styles'
import DealerCardSection from './Components/DealerCardSection'
import HomeProductSection from './Components/HomeProductSection'
import HomeSwiper from './Components/HomeSwiper'


export interface Props { }

export default function HomeScreen(props: Props): React.ReactElement {

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.headerContainer}>
        <Image style={styles.imglogo} source={require("./../../../assets/images/logocar.png")} />
      </View>

      <ScrollView>
        <HomeSwiper data={homeBanner} />
        <HomeProductSection title="New In" subTitle="Top collection sport cars around the world and America" data={carProductList} />
        <HomeSwiper data={homeBannerTwo} />
        <HomeProductSection title="Recommended" subTitle="Discover new cars just for you" data={carProductListTwo} />
        <DealerCardSection />

        <ImageBackground style={styles.ButtonMore} source={{ uri: "https://images.unsplash.com/photo-1582834202430-ddcd18987a61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Discover more</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.fakeBottom} />
      </ScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:modules.FONT_H2,
    ...FontGSansBold
  },
  textButton: {
    ...FontGSansSemiBold
  },
  button: {
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL * 1.5,
    paddingVertical: modules.BODY_HORIZONTAL / 1.5,
    borderRadius: modules.RADIUS / 2
  },
  ButtonMore: {
    width: modules.VIEW_PORT_WIDTH - modules.BODY_HORIZONTAL * 2,
    height: modules.BODY_HORIZONTAL * 7,
    marginLeft: modules.BODY_HORIZONTAL,
    ..._styles.center,
    marginTop: modules.BODY_HORIZONTAL * 2
  },
  fakeBottom: {
    height: modules.VIEW_PORT_HEIGHT / 4
  },
  container: {
    backgroundColor: modules.WHITE
  },
  safeArea: {
    backgroundColor: modules.WHITE
  },
  headerContainer: {
    ..._styles.center,
    backgroundColor: modules.WHITE,  
  },
  imglogo: {
    width: modules.VIEW_PORT_WIDTH / 2,
    resizeMode: 'contain'
  }

})
