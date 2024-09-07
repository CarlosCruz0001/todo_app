// EditTaskPage.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";

export default function EditTaskPage({ route, navigation }) {
  const { task, index, tasks } = route.params;

  // Verifica se tasks está definido e é um array
  if (!Array.isArray(tasks)) {
    Alert.alert('Erro', 'Tarefas não encontradas.');
    navigation.goBack(); // Volta para a tela anterior se houver erro
    return null;
  }

  const [titulo, setTitulo] = useState(task.titulo);
  const [descricao, setDescricao] = useState(task.descricao);
  const [data, setData] = useState(task.data);

  const handleSave = () => {
    if (!titulo || !descricao || !data) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    const updatedTask = { titulo, descricao, data };
    const updatedTasks = tasks.map((t, i) => (i === index ? updatedTask : t));

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
      <TouchableOpacity style={styles.botao} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
