import { StyleSheet, Text, View, SafeAreaView, TextInput,ScrollView, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Caroussel from '../components/Caroussel'
import FoodTypes from '../components/FoodTypes'
import QuickFood from '../components/QuickFood'
import { Ionicons } from '@expo/vector-icons';
import hotel from '../data/hotel';
import Menuitem from '../components/Menuitem'

const Homescreen = () => {
  const data = hotel; 
  return (
    <ScrollView style={{marginTop:40}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", borderWidth: 1, margin: 10, padding: 10, borderColor: "C0C0C0", borderRadius: 7 }}>
        <TextInput style={{fontSize:17}} placeholder='Search For Restaurant items or more' />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
<Caroussel/>
<FoodTypes/>
<QuickFood/>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
  <Pressable style={{marginHorizontal:10,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:"D0D0D0",padding:10,borderRadius:20,justifyContent:'center',width:120}}>
  <Text style={{marginRight:6}}>Filter</Text>
  <Ionicons name="filter" size={20} color="black" />
</Pressable>
<Pressable style={{marginHorizontal:10,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:"D0D0D0",padding:10,borderRadius:20,justifyContent:'center',width:120}}>
  <Text>Sort by Rating</Text>
</Pressable>
<Pressable style={{marginHorizontal:10,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:"D0D0D0",padding:10,borderRadius:20,justifyContent:'center'}}>
  <Text>Sort by Price</Text>
</Pressable>
</View>
{data.map((item,index) => (
  <Menuitem key={index} item={item}/>
))}
    </ScrollView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})