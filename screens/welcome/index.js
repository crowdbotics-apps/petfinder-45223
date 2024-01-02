import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";

const Screen = () => {
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials&client_id=STiO2SlkIVygqlo3fbm9xa1ArLZ12ych47aWxxyizZ0V9Qmke4&client_secret=KeknUMacrZtftvr6FGB6U4PrgSLo7zI2NLmUcS0q"
    });
    const data = await response.json();
    setToken(data.access_token);
  };

  return <SafeAreaView style={styles.container}>
      <Button title="Fetch Token" onPress={fetchToken} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Screen;