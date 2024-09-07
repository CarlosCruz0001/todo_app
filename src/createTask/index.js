// CreateTaskPage.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

export default function CreateTaskPage({ route, navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  // Obtém as tarefas existentes do parâmetro de rota, se houver
  const existingTasks = route.params?.tasks || [];

  const handleTask = () => {
    if (!titulo || !descricao || !data) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    const newTask = { titulo, descricao, data };
    const updatedTasks = [...existingTasks, newTask];
    console.log(newTask);

    navigation.navigate('Home', { tasks: updatedTasks });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        placeholder="Data de Expiração"
        style={styles.input}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={styles.botao} onPress={handleTask}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
