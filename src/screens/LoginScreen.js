import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import { supabase } from '../services/supabase'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (error) {
      Alert.alert(error.message)
      return
    }

    navigation.navigate('App')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        Controle de Medicamentos
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
          backgroundColor: '#2196f3',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Register')
        }
      >
        <Text style={{ textAlign: 'center' }}>
          Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  )
}