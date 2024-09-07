// Task.js
import React from "react";
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Task({ titulo, descricao, data, onComplete, onEdit, onCancel }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <View>
        <Text style={styles.textValues}>Título: {titulo}</Text>
        <Text style={styles.textValues}>Descrição: {descricao}</Text>
        <Text style={styles.textValues}>Prazo: {data}</Text>

        <View style={styles.conatinerBotao}>
          <TouchableOpacity style={styles.botaoFeito} onPress={onComplete}>
          <MaterialIcons name="done" color={'white'}  size={40}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoEditar} onPress={onEdit}>
          <MaterialIcons name="edit" color={'white'}  size={40}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCancelar} onPress={onCancel}>
          <MaterialCommunityIcons name="cancel" color={'white'}  size={40}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
