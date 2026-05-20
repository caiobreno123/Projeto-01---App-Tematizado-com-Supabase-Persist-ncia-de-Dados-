import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native'

import { supabase } from '../services/supabase'

export default function AddMedicineScreen() {
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState('')
  const [isPublic, setIsPublic] = useState(false)

  async function handleAdd() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('medicines')
      .insert([
        {
          name,
          dosage,
          is_public: isPublic,
          user_id: user.id
        }
      ])

    if (error) {
      Alert.alert(error.message)
      return
    }

    Alert.alert('Medicamento cadastrado')

    setName('')
    setDosage('')
    setIsPublic(false)
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nome do remédio"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <TextInput
        placeholder="Dosagem"
        value={dosage}
        onChangeText={setDosage}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Text style={{ marginBottom: 10 }}>
        Público
      </Text>

      <Switch
        value={isPublic}
        onValueChange={setIsPublic}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2196f3',
          padding: 15,
          borderRadius: 10,
          marginTop: 20
        }}
        onPress={handleAdd}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  )
}