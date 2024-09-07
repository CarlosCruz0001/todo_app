
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../homePage";
import CreateTaskPage from "../createTask";
import EditTaskPage from "../editPage/index"; 

const Stack = createStackNavigator();

export default function Routes() {
  const [taskData, setTaskData] = useState([]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "",
          headerTintColor: "#fff",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Task"
        component={CreateTaskPage}
        options={{
          title: "",
          headerTintColor: "#fff",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskPage}
        options={{
          title: "",
          headerTintColor: "#fff",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
