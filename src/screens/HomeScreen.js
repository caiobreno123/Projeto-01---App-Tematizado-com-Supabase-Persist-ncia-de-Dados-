import { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import { supabase } from '../services/supabase'

export default function HomeScreen() {
  const [medicines, setMedicines] = useState([])

  useEffect(() => {
    loadMedicines()
  }, [])

  async function loadMedicines() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { data } = await supabase
      .from('medicines')
      .select('*')
      .or(`user_id.eq.${user.id},is_public.eq.true`)

    setMedicines(data)
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      {medicines.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: '#e3f2fd',
            padding: 15,
            borderRadius: 10,
            marginBottom: 10
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {item.name}
          </Text>

          <Text>
            Dosagem: {item.dosage}
          </Text>

          <Text>
            {item.is_public
              ? 'Público'
              : 'Privado'}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}