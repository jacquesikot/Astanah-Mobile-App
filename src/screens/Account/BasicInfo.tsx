import React from "react";
import { StyleSheet } from "react-native";

import { Box, Text, theme } from "../../components";

const styles = StyleSheet.create({
  container: {},
});

interface BasicInfoProps {}

const BasicInfo = () => {
  return (
    <Box style={styles.container}>
      <Text>hi</Text>
    </Box>
  );
};

export default BasicInfo;
