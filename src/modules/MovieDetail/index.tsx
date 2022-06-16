import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';


const MovieDetails: React.FC = () => {

  const { params: routeParams } = useRoute() as any;
  const { params } = routeParams;
  console.log('route', routeParams);
  console.log('id',params.id);

  const nav = useNavigation();

  return (
    <SafeAreaView >
      <ScrollView>
        <Text>'Details'</Text>
        <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'red'}}onPress={() => nav.navigate('Home',{screen: 'Home'} )}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;