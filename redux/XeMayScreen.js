import { Button, FlatList, StImageyleSheet, Text, View } from 'react-native'
import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListXeMay } from './XeMayAction'
import XeMayItem from './XeMayItem'
import CustomBanner from './components/CustomBanner'

const XeMayScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const xeMays = useSelector(state => state.XeMay.listXeMay)

    useEffect(() => {
        dispatch(getListXeMay());
    }, [dispatch])

  return (
    <View style={{flex: 1, padding: 10}}>
    <Button title='Thêm Xe' onPress={() => navigation.navigate('add')}></Button>
      <Text>XeMayScreen</Text>
      <CustomBanner imageUrl={'https://th.bing.com/th/id/OIP.53WIX2fcS_2xo5F6WYscggHaFj?rs=1&pid=ImgDetMai'} title="Welcome to Xe May"  ></CustomBanner>
      <FlatList
        keyExtractor={(item) => item.id}
        data={xeMays}
        renderItem={({ item }) => (<XeMayItem XeMay={item} />)}
      ></FlatList>
    </View>
  )
}

export default XeMayScreen