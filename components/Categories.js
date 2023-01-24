import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;