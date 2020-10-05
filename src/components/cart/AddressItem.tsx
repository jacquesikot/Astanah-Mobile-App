import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { DeliveryAddress } from "../../../types";

import { theme, Box, Text, Button } from "../../components";

const { width } = Dimensions.get("window");
const COMPONENT_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: COMPONENT_WIDTH,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
  },
  subView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

interface AddressItemProps {
  address: DeliveryAddress;
}

const AddressItem = ({ address }: AddressItemProps) => {
  const [select, setSelect] = useState(false);
  const { name, addressDetail, phone } = address;
  const borderColor =
    select === false ? theme.colors.light : theme.colors.primary;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelect(!select);
      }}
    >
      <Box style={[styles.container, { borderColor: borderColor }]}>
        <Text variant="h4" color="primary" style={{ marginBottom: 10 }}>
          {name}
        </Text>
        <Text variant="b2" color="grey" style={{ marginBottom: 10 }}>
          {addressDetail}
        </Text>
        <Text variant="b2" color="grey" style={{ marginBottom: 10 }}>
          {phone}
        </Text>
        <Box style={styles.subView}>
          <Button label="Edit" onPress={() => alert("edit")} width={77} />
          <Box style={{ marginLeft: 20 }} />
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default AddressItem;
