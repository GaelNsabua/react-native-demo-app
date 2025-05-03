import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false}} />
    </>
  );
};

export default _layout;
