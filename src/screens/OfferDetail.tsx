import React from "react";
import { StyleSheet } from "react-native";

import { Box, Text } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface OfferDetailProps {}

const OfferDetail = () => {
  return (
    <Box style={styles.container}>
      <Text>OfferDetail</Text>
    </Box>
  );
};

export default OfferDetail;
