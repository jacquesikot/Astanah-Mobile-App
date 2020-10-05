import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import {
  Box,
  Button,
  StackHeader,
  theme,
  ProfileHead,
  ListItem,
} from "../../components";
import { StackScreenProps } from "@react-navigation/stack";
import { AccountNavParamList } from "../../../types";
import {
  CardTransferIcon,
  GenderIcon,
  LocationIcon,
  LockIcon,
  ProfileIcon,
} from "../../Svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
  },
});

interface ProfileProps {}

const Profile = ({
  navigation,
}: StackScreenProps<AccountNavParamList, "Profile">) => {
  return (
    <Box style={styles.container}>
      <StackHeader title="Account" />
      <ProfileHead />
      <ScrollView decelerationRate={16} showsVerticalScrollIndicator={false}>
        <ListItem
          label="Basic Information"
          icon={<GenderIcon color={theme.colors.primary} />}
          onPress={() => navigation.navigate("BasicInfo")}
        />
        <ListItem
          label="Addresses"
          icon={<LocationIcon color={theme.colors.primary} />}
          onPress={() => navigation.navigate("AddressInfo")}
        />
        <ListItem
          label="Payments"
          icon={<CardTransferIcon color={theme.colors.primary} />}
          onPress={() => navigation.navigate("PaymentInfo")}
        />
        <ListItem
          label="Passwords"
          icon={<LockIcon color={theme.colors.primary} />}
          onPress={() => navigation.navigate("BasicInfo")}
        />
      </ScrollView>
    </Box>
  );
};

export default Profile;
