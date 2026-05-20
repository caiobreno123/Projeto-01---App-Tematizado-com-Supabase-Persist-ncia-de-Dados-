import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import { supabase } from '../services/supabase'

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      Alert.alert(error.message)
      return
    }

    Alert.alert('Conta criada')
    navigation.navigate('Login')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        Cadastro
      </Text>

      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#4caf50',
          padding: 15,
          borderRadius: 10
        }}
        onPress={handleRegister}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}