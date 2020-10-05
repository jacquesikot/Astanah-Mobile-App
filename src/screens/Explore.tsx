import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ExploreNavParamList } from "../../types";
import { Box, theme, HomeCategory, StackHeader } from "../components";
import { categories } from "../data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ExploreProps {}

const Explore = ({
  navigation,
}: StackScreenProps<ExploreNavParamList, "Explore">) => {
  return (
    <SafeAreaView style={styles.container}>
      <StackHeader title="Explore" />
      <ScrollView>
        <Box style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity onPress={() => navigation.navigate('CategoryDetail', {category: category})}>
              <HomeCategory key={category.id.toString()} category={category} />
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
