import { Pressable, StyleSheet, Text, View,Image,ImageBackground, useAnimatedValue } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Menuitem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={{margin:10}}> 
     <Pressable onPress={()=> navigation.navigate("Menu",{id: item.id,
            name:item.name,
            image:item.image,
            rating:item.rating,
            time:item.time,
            adress:item.adress,
            cost_for_two:item.cost_for_two,
            cuisines:item.cuisines,
            menu:item.menu,
     })} style={{flexDirection:'row'}}>
      <View>
         <ImageBackground style={{aspectRatio:4/5,height:170}} imageStyle={{borderRadius:6}} source={{uri:item.image}} >
         <AntDesign style={{position:'absolute',right:10,top:10}} name="hearto" size={24} color="white" /> 
         </ImageBackground>
      </View>
      <View style={{marginLeft:10}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>
           {item.name}
        </Text>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{marginLeft:3}}>{item.rating}</Text>
              <Text style={{marginLeft:3}}>*</Text>
              <Text style={{marginLeft:3,fontSize:15,fontWeight:400}}>{item.time}mins </Text>
              </View>
              <Text style={{fontSize:16,color:"gray",marginTop:6}}>{item.adress}</Text>
              <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,

                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
      </View>
     </Pressable>
    </View>
  )
}

export default Menuitem

const styles = StyleSheet.create({})