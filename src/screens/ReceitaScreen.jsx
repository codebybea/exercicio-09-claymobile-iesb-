import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Title, Paragraph, List, Button } from "react-native-paper";

const RecipeScreen = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>{recipe.nome}</Title>
      <Paragraph style={styles.text}>
        Tempo de Preparo: {recipe.tempoPreparo}
      </Paragraph>
      <Paragraph style={styles.text}>Porções: {recipe.porcoes}</Paragraph>

      <List.Section>
        <List.Subheader style={styles.subheader}>Ingredientes</List.Subheader>
        {recipe.ingredientes.map((ingrediente, index) => (
          <List.Item
            key={index}
            title={ingrediente}
            titleStyle={styles.listText}
            style={styles.listItem}
          />
        ))}
      </List.Section>

      <List.Section>
        <List.Subheader style={styles.subheader}>
          Modo de Preparo
        </List.Subheader>
        {recipe.modoPreparo.map((passo, index) => (
          <List.Item
            key={index}
            title={passo}
            titleStyle={styles.listText}
            style={styles.listItem}
          />
        ))}
      </List.Section>

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Voltar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    color: "#000",
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
  },
  subheader: {
    color: "#6200ee",
    fontWeight: "bold",
    fontSize: 18,
  },
  listItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 5,
    paddingVertical: 5,
  },
  listText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200ee",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RecipeScreen;
