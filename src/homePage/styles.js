import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "relative",
    paddingTop: 80,
  },
  title:{
    color: 'black',
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerAtividades: {
    backgroundColor: "white",
    height: "78%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCriarAtividade: {
    backgroundColor: "white",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  criarAtividadeButton: {
    backgroundColor: "#ff007f",
    height:90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80,
    elevation: 2,
    shadowColor: "#f1f6ce",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#0d0f36",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
