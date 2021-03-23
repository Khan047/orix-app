import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import * as font from "expo-font";
import NavBar from "./NavBar";
export default function Home(props) {
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
              source={require("../assets/girl.png")}
            />
          </View>
        </View>
        <View style={styles.ContentWrapper}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>File </Text>
            <Text style={styles.TitleText2}>Manager</Text>
            <Text style={styles.subHead}>
              Let’s clean and
              <Text style={styles.subHeadYellow}> manage your files.</Text>
            </Text>
          </View>
          <View style={styles.MainCardContainer}>
            <View style={styles.StorageTabs}>
              <Text style={styles.TabOne}>Open Internal Storage</Text>
              <View style={styles.MidSection}>
                <View style={styles.MidSectionSquare}></View>
              </View>
              <Text style={styles.TabTwo}>External Storage</Text>
            </View>
            <View style={styles.MainCardWrapper}>
              <View style={styles.MainCard}>
                <View style={styles.CardTitleContainer}>
                  <Text style={styles.CardTitleText}>Storage</Text>
                  <View style={styles.Icon}>
                    <Image
                      style={styles.tinyLogo}
                      source={require("../assets/f.png")}
                    />
                  </View>
                </View>
                <View style={styles.DonutChartcontainer}>
                  <Image
                    style={styles.DonutChart}
                    source={require("../assets/circle.png")}
                  />
                </View>

                <View style={styles.StorangeButtonOuter}>
                  <View style={styles.StorangeButtonInner}>
                    <Text style={styles.StorageButtonText}>Storage</Text>
                  </View>
                </View>
              </View>

              <View style={styles.MainCardDeco}></View>
            </View>
          </View>
        </View>
        <NavBar navigation={props.navigation} />
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
    height: "75%",
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
    justifyContent: "space-between",
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
    paddingBottom: 0,
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
    paddingTop: 0,
  },
  TitleText: {
    fontFamily: "MulishRegular",
    color: "white",
    fontSize: 32,
    // fontWeight: 700,
  },
  TitleText2: {
    fontFamily: "MulishRegular",
    color: "white",
    fontSize: 32,
  },
  subHead: {
    fontFamily: "MulishRegular",
    color: "white",
    fontSize: 13,
    marginTop: "1%",
  },
  subHeadYellow: {
    fontFamily: "MulishRegular",
    color: "yellow",
    fontSize: 13,
  },
  MainCardContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "auto",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  MainCardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 422,
    width: "60%",
    marginRight: "15%",
  },
  MainCard: {
    backgroundColor: "#E3001A",
    height: 422,
    width: "100%",
    borderRadius: 26,
    justifyContent: "space-between",
    alignItems: "center",
  },
  MainCardDeco: {
    backgroundColor: "#E3001A",
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
    // width: "6.13333333333333%",
    width: "10%",
    height: "85%",
    opacity: 0.6,
  },
  CardTitleContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  CardTitleText: {
    fontFamily: "MulishRegular",
    fontSize: 21,
    color: "white",
  },
  Icon: {
    width: 30,
    height: 30,
  },
  StorangeButtonOuter: {
    width: 115,
    height: 51,
    backgroundColor: "rgba(255, 255, 255, 0.46);",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
    borderRadius: 26,
  },
  StorangeButtonInner: {
    width: 102,
    height: 39,
    backgroundColor: "#000119",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  StorageButtonText: {
    color: "white",
    fontSize: 12,
  },
  StorageTabs: {
    width: 54,
    height: 330,
    backgroundColor: "transparent",
    justifyContent: "space-around",
    alignItems: "center",
  },
  TabOne: {
    color: "yellow",
    width: 140,
    fontSize: 16,
    flexDirection: "row",
    flexWrap: "nowrap",
    fontFamily: "MulishRegular",
    transform: [{ rotate: "-90deg" }],
  },
  TabTwo: {
    width: 140,
    fontSize: 16,
    color: "white",
    flexDirection: "row",
    flexWrap: "nowrap",
    fontFamily: "MulishRegular",
    transform: [{ rotate: "-90deg" }],
  },
  MidSection: {
    width: 50,
    height: 5,
    backgroundColor: "white",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    overflow: "visible",
    alignItems: "center",
  },

  MidSectionSquare: {
    width: 5,
    height: 10,
    backgroundColor: "white",
  },
  DonutChartcontainer: {
    height: "auto",
    width: "auto",
  },
  DonutChart: {
    height: 218,
    width: 218,
  },
});
