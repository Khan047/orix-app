import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import * as font from "expo-font";

export default function Profile() {
  useEffect(() => {
    font.loadAsync({
      MulishRegular: require("../assets/fonts/Mulish-Regular.ttf"),
    });
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app yes!</Text> */}
      <View style={styles.Background1}>
        <View style={styles.Background2}></View>
        <View style={styles.Background3}>
          <View style={styles.Background4}></View>
        </View>
      </View>
      <StatusBar style="auto" />
      <View style={styles.MainContent}>
        <View style={styles.NavHeader}>
          <View style={styles.NavButton}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/n.png")}
            />
          </View>
          <View style={styles.Profile}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/f.png")}
            />
          </View>
        </View>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>My Profile </Text>
        </View>
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileImg}>
            <Image style={styles.Img} source={require("../assets/girl.png")} />
          </View>
          <Text style={styles.ProfileText}>Florence Katty</Text>
          <Text style={styles.ProfileText2}>Team Leader</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  Background2: {
    backgroundColor: "#000119",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "60%",
    width: "100%",
    borderBottomRightRadius: 100,
  },
  Background1: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  Background4: {
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 80,
    width: "100%",
    alignSelf: "flex-start",
    borderTopLeftRadius: 1000,
    zIndex: 5,
  },
  Background3: {
    backgroundColor: "#000119",
    width: "50%",
  },
  MainContent: {
    zIndex: 3,
    height: "100%",
    width: "100%",

    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  NavHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    width: "100%",
    zIndex: 5,

    marginTop: "2%",
    padding: 30,
    paddingBottom: 15,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  Profile: {
    width: 40,
    height: 40,
  },
  NavButton: {
    width: 40,
    height: 40,
  },
  Title: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    width: "100%",

    padding: 30,
  },
  TitleText: {
    fontFamily: "MulishRegular",
    color: "white",
    fontSize: 32,
    // fontWeight: 700,
  },
  ProfileContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  ProfileImg: {
    height: 80,
    width: 80,
    borderRadius: 21,
  },
  Img: {
    width: "100%",
    height: "100%",
  },
  ProfileText: {
    color: "white",
    fontSize: 18,
    marginTop: "4%",
  },
  ProfileText2: {
    color: "yellow",
    fontSize: 12,
    marginTop: "1%",
  },
});
