import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function NavBar(props) {
  return (
    <View style={styles.NavWrapper}>
      <View style={styles.NavCon}>
        <View style={styles.MenuItem}>
          <TouchableOpacity
            style={styles.MenuItemIcon}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <View style={styles.MenuItemDeco}></View>
        </View>
        <View style={styles.MenuItem}>
          <TouchableOpacity
            style={styles.MenuItemIcon}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Text>2</Text>
          </TouchableOpacity>
          <View style={styles.MenuItemDeco}></View>
        </View>

        <View style={styles.MenuItem}>
          <TouchableOpacity
            style={styles.MenuItemIcon}
            onPress={() => props.navigation.navigate("Settings")}
          ></TouchableOpacity>
          <View style={styles.MenuItemDeco}></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  NavWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  NavCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "58.13333333333334%",
  },
  MenuItem: {
    height: 55,
    width: 50,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  MenuItemIcon: {
    height: 20,
    width: "100%",
    backgroundColor: "green",
  },
  MenuItemDeco: {
    height: 7,
    width: "100%",
    backgroundColor: "#000119",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
