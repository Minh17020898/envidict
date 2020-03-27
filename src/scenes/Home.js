import React, { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { Text, View, Button, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import MainLayout from '../components/templates/MainLayout'
import WordOfTheDay from '../components/molecules/word/WordOfTheDay'
import { backHandleToExitApp } from '../utils'
import RecentWords from '../components/molecules/home/RecentWords'
import { Colors } from '../styles'
import CurrentVocabularies from '../components/molecules/home/CurrentVocabularies'

const Home = () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout>
      <WordOfTheDay />
      <RecentWords />
      <View style={styles.buttonWrapper}>
        <Button style={buttonStyle} iconLeft block>
          <Icon name="earth" type="MaterialCommunityIcons" />
          <Text>Dịch online</Text>
        </Button>
      </View>
      <CurrentVocabularies />
    </MainLayout>
  )
}

const buttonStyle = {
  backgroundColor: Colors.BLUE_DARK,
  width: 300
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderTopColor: Colors.WHITE
  }
})

export default Home
