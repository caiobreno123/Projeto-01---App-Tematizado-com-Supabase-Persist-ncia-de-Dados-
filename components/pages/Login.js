import { Pressable } from "react-native";
import { Text, TextInput, View } from "react-native-web";

export default function Login() {
    return(
        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>

            <Text>Email:</Text>
            <TextInput style={{ borderWidth: 2, borderRadius: 6, textIndent: 12, margin: 10, padding: 5 }} />

            <Text>Senha:</Text>
            <TextInput style={{ borderWidth: 2, borderRadius: 6, textIndent: 12, margin: 10, padding: 5 }} />

            <Pressable style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: 'darkblue', marginBottom: 10, borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Cadastro</Text>
            </Pressable>

            <Pressable style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: 'darkblue', marginBottom: 10, borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Login</Text>
            </Pressable>
        </View>
    )
}