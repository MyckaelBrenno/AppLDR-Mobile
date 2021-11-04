import React from 'react'
import { SafeAreaView, View, Text, ImageBackground } from 'react-native'
import { Button, Card, TextInput, Avatar } from 'react-native-paper'
import { loginstyle } from './login.style';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={loginstyle.content}>
      <View style={loginstyle.view}>
      
        <Card>
          <Avatar.Image size={50} source={require('../../assets/ldr.png')} style={{margin: 15, backgroundColor:"white"}}
          />
          <Card.Title title= "Lembre do Remédio" titleStyle={loginstyle.cardTitle}></Card.Title>
            <Card.Content>
              <TextInput label="CNPJ" keyboardType="number-pad"> </TextInput>
              <TextInput label="Senha" secureTextEntry={true}> </TextInput>
              <Button mode="contained" style={{backgroundColor:"blue"}}>
              Agendar
              </Button>
            </Card.Content>
        </Card>
      </View>
    </SafeAreaView>

  );
}