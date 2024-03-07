import { StyleSheet, Text,SafeAreaView,View } from 'react-native'
import React, { useRef } from 'react'
import moment from 'moment'
import MapView from 'react-native-maps'

const OrderScreen = () => {
const time = moment().format('LT');
const  mapview = useRef(null);
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:80,backgroundColor:'#fc9019',padding:10}}>
            <View style={{marginLeft:10}}>
      <Text style={{color:'white',fontSize:17,fontWeight:"600"}}>Delivery in 20min</Text>
      <Text style={{color:'white',fontSize:17,fontWeight:"600",marginTop:4}}>Order placed at {time}</Text>
      </View>
      <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>HELP</Text>
      </View>
     <MapView ref={mapview}
      style={{width:"100%",height:400}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
     
     </MapView>
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})