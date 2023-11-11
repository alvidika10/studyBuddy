import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeroCarousel from "../components/HeroCarousel";
import ButtonGrid from "../components/ButtonGrid";
import HorizontalSlider from "../components/HorizontalSlider";
import { Platform } from "react-native";
import allProject from "../assets/public.png";
import highschool from "../assets/highschool.png";
import university from "../assets/university.png";
import browseLocation from "../assets/location.png";
import topProject from "../assets/top-projects.png";
import topBuddy from "../assets/top-teacher.png";
import heroDummy from "../assets/dummy/hero-dummy.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../store/actions/actionCreator";
import { useNavigation } from "@react-navigation/native";

export default function LandingPageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { projects } = useSelector((state) => state.projectReducer)
  useEffect(() => {
    dispatch(getProjects())
  }, [])

  const insets = useSafeAreaInsets();
  const paddingTop = Platform.OS === "ios" ? insets.top + 120 : 220;
  const buttonItems = [
    { icon: allProject, label: "All Projects", size: 60, onPress: () => navigation.navigate("Project") },
    { icon: highschool, label: "School Projects", size: 60, onPress: () => navigation.navigate("Project") },
    {
      icon: university,
      label: "University Projects",
      size: 60,
      onPress: () => navigation.navigate("Project"),
    },
    {
      icon: browseLocation,
      label: "Projects Near Me",
      size: 60,
      onPress: () => navigation.navigate("Project"),
    },
    { icon: topProject, label: "Top Projects", size: 60, onPress: () => navigation.navigate("Project") },
    { icon: topBuddy, label: "Top Buddy", size: 60, onPress: () => navigation.navigate("Project") },
  ];

  const [data, setData] = useState([
    {
      _id: "653532cff2b47d804e0ac5fc",
      name: "bikin candi",
      image: heroDummy,
      studentId: "653523e987023b83cd76a60f",
      teacherId: "653523aa87023b83cd76a60e",
      startDate: "2023-10-22T14:33:51.702Z",
      endDate: null,
      status: "submitted",
      likes: 0,
      description: "buat candi dalam waktu 3 hari",
      published: false,
      goals: "jadi legenda di nusantara",
      feedback: null,
      Category: {
        _id: "65353253f2b47d804e0ac5f9",
        name: "Matematika",
      },
      Teacher: {
        _id: "653523aa87023b83cd76a60e",
        username: "buddy",
        email: "buddy@buddy.com",
        phoneNumber: "0808080808",
        role: "buddy",
        address: "jakarta",
      },
      Student: {
        _id: "653523e987023b83cd76a60f",
        username: "student",
        email: "student@student.com",
        phoneNumber: "0808080808",
        role: "student",
        address: "jakarta",
      },
    },
  ]);

  // Filter top teacher
  const topTeachers = data
    .slice()
    .sort((a, b) => {
      return a.Teacher.likes - b.Teacher.likes;
    })
    .reverse()
    .slice(0, 5);

  // Filter top students
  const topStudents = data
    .slice()
    .sort((a, b) => {
      return a.Student.likes - b.Student.likes;
    })
    .reverse()
    .slice(0, 5);

  // Filter top ratings
  const topRatings = data
    .slice()
    .sort((a, b) => { })
    .reverse()
    .slice(0, 5);

  // Filter top lokasi terdekat
  const userLocation = "lokasi_user";
  const topLocations = data
    .slice()
    .sort((a, b) => {
      const distanceA = calculateDistance(a.Teacher.address, userLocation);
      const distanceB = calculateDistance(b.Teacher.address, userLocation);
      return distanceA - distanceB;
    })
    .slice(0, 5);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Riska 👋</Text>
        <Text style={styles.headerSubText}>Welcome to StudyBuddy!</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Looking for your next project?"
        />
      </View>
      <ScrollView
        style={[styles.scrollContainer, { paddingTop: paddingTop }]}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View style={styles.carouselContainer}>
          <HeroCarousel />
        </View>
        <ButtonGrid items={buttonItems} />
        <HorizontalSlider data={topTeachers} title="Top Teachers" />
        <HorizontalSlider data={topStudents} title="Top Students" />
        <HorizontalSlider data={topRatings} title="Top Ratings" />
        <HorizontalSlider data={topLocations} title="Top Locations" />
        {/* <VerticalSlider /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  carouselContainer: {
    marginTop: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#bddded",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 30,
    zIndex: 1000,
  },
  headerText: {
    fontSize: 24,
    color: "#0e365c",
    fontWeight: "bold",
    marginTop: 50,
    fontFamily: "Lato-Bold",
  },
  headerSubText: {
    fontSize: 17,
    color: "#4781a5",
    fontFamily: "Lato-Regular",
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
