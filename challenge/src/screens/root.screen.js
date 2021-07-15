import React from 'react';
import {
  FlatList,
  TouchableOpacity
} from 'react-native';
import {
  View,
  Text
} from 'react-native-ui-lib';
import { useOpenWeather } from '../hook/useOpenWeather'
import { useReservamosPlaces } from '../hook/useReservamosPlaces'
const Root = (props) => {
  const { OpenWeather, setOpenWeather } = useOpenWeather()
  const { ReservamosPlaces, setReservamosPlaces } = useReservamosPlaces()
  const [selectedId, setSelectedId] = React.useState(null)
  useEffect(() => {
    setOpenWeather({ lat: selectedId.lat, long: selectedId.long })
    setReservamosPlaces({ q: selectedId.slug })
  }, [selectedId])


  
  return (
    <div>
      <View bg-blue30 paddingV-30 marginV-1>
        <Text text30>{json.stringify(OpenWeather)}</Text>
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
