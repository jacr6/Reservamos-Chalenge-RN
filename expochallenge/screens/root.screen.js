import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useOpenWeather } from '../hooks/useOpenWeather'
import { useReservamosPlaces } from '../hooks/useReservamosPlaces'
const Root = (props) => {
  const { OpenWeather, setOpenWeather } = useOpenWeather()
  const { ReservamosPlaces, setReservamosPlaces } = useReservamosPlaces()
  const [selectedId, setSelectedId] = useState(null);

  const ParsedPlace = ReservamosPlaces.length > 0 ? ReservamosPlaces.map((place) => {

    return { ...place, id: String(place.id) }



  }) : [];

  console.log("ParsedPlace: ", ParsedPlace);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

 
    if (OpenWeather&&OpenWeather.current) {
      alert(JSON.stringify(OpenWeather));
    }
 

  useEffect(() => {
    let reg = ParsedPlace.find(place => place.id === selectedId);
    console.log("REG: ", reg)
    console.log("OpenWeather: ", OpenWeather)



    if (selectedId ) {
    
    
      if (reg.id) {
        setOpenWeather({ lat: Number(reg.lat).toFixed(4), lon: reg.long })
        // setReservamosPlaces({ q: reg.slug })
      }
     
    }

  }, [selectedId])

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.display}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <div>

      <SafeAreaView style={styles.container}>
      <FlatList
        data={ParsedPlace}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
     </SafeAreaView>
    </div >
  )
}
export default Root;
