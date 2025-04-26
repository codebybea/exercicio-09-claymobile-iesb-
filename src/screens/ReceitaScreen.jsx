import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Title, Paragraph, List, Button } from "react-native-paper";

export default function RecipeScreen({ route, navigation }) {
  const { receitas } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: receitas.imagem }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <Title style={styles.title}>{receitas.nome}</Title>
      <Paragraph style={styles.text}>
        Tempo de Preparo: {receitas.tempoPreparo}
      </Paragraph>
      <Paragraph style={styles.text}>Porções: {receitas.porcoes}</Paragraph>

      <List.Section>
        <List.Subheader style={styles.subheader}>Ingredientes</List.Subheader>
        {receitas.ingredientes.map((ingrediente, index) => (
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
        {receitas.modoPreparo.map((passo, index) => (
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8F0",
  },
  title: {
    color: "#000",
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  recipeImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D94F2B",
  },
  text: {
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
  },
  subheader: {
    color: "#D94F2B",
    fontWeight: "bold",
    fontSize: 18,
  },
  listItem: {
    backgroundColor: "#F5E8C7",
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
    margin: 20,
    marginBottom: 50,
    backgroundColor: "#D94F2B",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
