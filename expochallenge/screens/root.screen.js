import React,{useEffect} from 'react';
import {
  FlatList
} from 'react-native';
// import {
//   View,
//   Text,
//   TouchableOpacity
// } from 'react-native-ui-lib';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOpenWeather } from '../hooks/useOpenWeather'
import { useReservamosPlaces } from '../hooks/useReservamosPlaces'
const Root = (props) => {
  const { OpenWeather, setOpenWeather } = useOpenWeather()
  const { ReservamosPlaces, setReservamosPlaces } = useReservamosPlaces()
  const [selectedId, setSelectedId] = React.useState(null)
  useEffect(() => {
    if (selectedId&&selectedId.lat&&selectedId.long) {
      setOpenWeather({ lat: selectedId.lat, long: selectedId.long })
    setReservamosPlaces({ q: selectedId.slug })
    }
    
  }, [selectedId])

  
  return (
    <div>
      <View bg-blue30 paddingV-30 marginV-1>
        <Text text30>{JSON.stringify(OpenWeather)}</Text>
      </View>
      <View flex>
        <FlatList
          data={ReservamosPlaces}
          extraData={selectedId}
          renderItem={(item) =>
            <TouchableOpacity
              // for single item
              onPress={() => setSelectedId(item)}
              style={item.id === selectedId ? styles.selected : null}
            >
              <Text>{item.slug}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </div >
  )
}
export default Root;
