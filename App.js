import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CommunicationsApp = () => {
  const [NumTel, setPhoneNumber] = useState('');
  const [Correo, setEmail] = useState('');

  const handleSendTextMessage = () => {
    Communications.text(NumTel, null, 'Mensaje de texto enviado desde la app');
  };

  const handleSendEmail = () => {
    Communications.email([Correo], null, 'setEmail', 'Asunto predeterminado', 'Cuerpo del correo electrónicoooooooooooo');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#33FFD1', padding: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}></Text>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Ingrese un número de teléfono"
          value={NumTel}
          onChangeText={setPhoneNumber}
          
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={handleSendTextMessage} style={{ backgroundColor: '#33FFD1', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Icon name="message" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSendEmail} style={{ backgroundColor: '#33FFD1', padding: 10, borderRadius: 5 }}>
            <Icon name="email" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommunicationsApp;