import { View, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../services/supabase'

export default function ProfileScreen() {
  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Usuário Logado
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#f44336',
          padding: 15,
          borderRadius: 10
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  )
}