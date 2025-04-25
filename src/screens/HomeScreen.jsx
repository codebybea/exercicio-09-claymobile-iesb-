import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card, Title, Button } from "react-native-paper";

const recipes = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    ingredientes: [
      "1kg de feijão preto",
      "500g de carne seca",
      "300g de linguiça",
      "200g de costelinha",
      "2 laranjas",
      "200g de bacon",
      "Arroz para acompanhar",
    ],
    modoPreparo: [
      "1. Deixe o feijão de molho por 12 horas",
      "2. Cozinhe o feijão na panela de pressão",
      "3. Adicione as carnes e cozinhe até ficarem macias",
      "4. Sirva com arroz, couve e laranja",
    ],
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    ingredientes: [
      "1kg de peito de frango",
      "2 caixas de creme de leite",
      "2 colheres de extrato de tomate",
      "2 colheres de mostarda",
      "Champignon a gosto",
      "Batata palha para acompanhar",
    ],
    modoPreparo: [
      "1. Corte o frango em cubos",
      "2. Doure o frango na panela",
      "3. Adicione os molhos e o champignon",
      "4. Adicione o creme de leite",
      "5. Sirva com arroz e batata palha",
    ],
  },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.nome}</Title>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Recipe", { recipe: item })}
        >
          Ver Detalhes
        </Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.title}
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    color: "#000",
  },
});

export default HomeScreen;
