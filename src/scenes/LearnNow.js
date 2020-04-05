import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, CardItem, Button, Icon } from 'native-base'

import DetailView from '../components/organisms/word-view/DetailsView'
import { Colors, Mixins, Typography } from '../styles'
const LearnNow = () => {
  const [isShowTranslate, setIsShowTranslate] = useState(true)
  const [isRemembered, setisRemembered] = useState(false)

  const toggleShowTranslate = () => {
    setIsShowTranslate((preState) => !preState)
  }
  const toggleRemember = () => {
    setisRemembered(true)
  }
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <DetailView isShowTranslate={isShowTranslate} />
        <Button full style={styles.button} onPress={toggleShowTranslate}>
          <Text style={styles.text}>{isShowTranslate ? 'Ẩn nghĩa' : 'Xem nghĩa'}</Text>
        </Button>
      </Card>
      <View style={styles.inLineView}>
        <Button style={styles.buttonLeft}>
          <Icon name="arrowleft" type="AntDesign" style={styles.icon} />
        </Button>
        <Button
          style={isRemembered ? styles.buttonRemembered : styles.buttonRemember}
          onPress={toggleRemember}
        >
          <Icon
            name="check"
            type="AntDesign"
            style={isRemembered ? styles.textRemembered : styles.textRemember}
          />
          <Text style={isRemembered ? styles.textRemembered : styles.textRemember}>
            NHỚ
          </Text>
        </Button>
        <Button style={styles.buttonRight}>
          <Icon name="arrowright" type="AntDesign" style={styles.icon} />
        </Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    height: Mixins.WINDOW_HEIGHT * 0.6,
    borderRadius: 10,
    borderColor: Colors.BLUE_DARK,
  },
  button: {
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    width: 335,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: Colors.BLUE_DARK,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: 'bold',
  },
  inLineView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  buttonLeft: {
    justifyContent: 'flex-start',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: Colors.BLUE_DARK,
    marginLeft: 30,
  },
  buttonRemember: {
    backgroundColor: Colors.GREEN_MEDIUM,
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  textRemember: {
    color: Colors.WHITE,
    marginRight: 20,
  },
  textRemembered: {
    color: Colors.GREEN_MEDIUM,
    marginRight: 20,
  },
  buttonRemembered: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GREEN_MEDIUM,
    borderWidth: 1,
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  buttonRight: {
    justifyContent: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.BLUE_DARK,
    marginRight: 30,
  },
  icon: {
    fontSize: 22,
    textAlign: 'center',
  },
})
export default LearnNow