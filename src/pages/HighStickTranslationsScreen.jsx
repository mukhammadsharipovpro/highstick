import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import HighStickHeader from '../components/HighStickHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <HighStickHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Tour de France', '03.03 14:00', 'Stage 15')}
        {renderBroadcast('Giro d’Italia', '05.03 16:45', 'Stage 10')}
        {renderBroadcast('Vuelta a España', '07.03 15:30', 'Stage 8')}
        {renderBroadcast('Paris-Roubaix', '09.03 12:00', 'Men’s Elite')}
        {renderBroadcast('UCI Road', '11.03 14:15', 'Individual Time Trial')}
        {renderBroadcast('Critérium du Dauphiné', '13.03 17:00', 'Stage 5')}
        {renderBroadcast('Tirreno-Adriatico', '15.03 18:30', 'Stage 3')}
        {renderBroadcast('Milan-San Remo', '17.03 16:00', 'Men’s Elite')}
        {renderBroadcast('Liège-Bastogne-Liège', '19.03 13:30', 'Women’s Race')}
        {renderBroadcast('Tour of California', '21.03 19:00', 'Stage 6')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
    marginTop: -50,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.background,
    paddingVertical: 5,
  },
});
