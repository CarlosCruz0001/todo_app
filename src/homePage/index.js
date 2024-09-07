// HomePage.js
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Task from "../components/taskComponent";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function HomePage({ route, navigation }) {
  const [tasks, setTasks] = React.useState(route.params?.tasks || []);

  React.useEffect(() => {
    if (route.params?.tasks) {
      setTasks(route.params.tasks);
    }
  }, [route.params?.tasks]);

  const handleEdit = (index) => {
    const task = tasks[index];
    navigation.navigate("EditTask", { task, index, tasks });
  };

  const handleComplete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    navigation.navigate("Home", { tasks: updatedTasks });
  };

  const handleCancel = (index) => {
    handleComplete(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades</Text>
      <View style={styles.containerAtividades}>
        <ScrollView>
          {tasks.map((task, index) => (
            <Task
              key={index}
              titulo={task.titulo}
              descricao={task.descricao}
              data={task.data}
              onComplete={() => handleComplete(index)}
              onEdit={() => handleEdit(index)}
              onCancel={() => handleCancel(index)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.containerCriarAtividade}>
        <TouchableOpacity
          style={styles.criarAtividadeButton}
          onPress={() => navigation.navigate("Task", { tasks })}
        >
          <FontAwesome name="plus" color={'white'}  size={40}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
