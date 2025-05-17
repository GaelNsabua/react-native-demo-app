import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import GuestOnly from "../../components/auth/GuestOnly";

const _layout = () => {
  return (
    <GuestOnly>
      <Stack screenOptions={{ headerShown: false}} />
    </GuestOnly>
  );
};

export default _layout;
