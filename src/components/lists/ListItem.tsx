import React, { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Box, Text } from "../Theme";
import { theme } from "..";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
  },
});

interface ListItemProps {
  label: string;
  icon: ReactNode;
}

const ListItem = ({ label, icon }: ListItemProps) => {
  return (
    <Box style={styles.container}>
      {icon ? <Box>{icon}</Box> : <Box style={styles.circle} />}
      <Text variant="b3B" color="primary" marginLeft="m">
        {label}
      </Text>
    </Box>
  );
};

export default ListItem;
