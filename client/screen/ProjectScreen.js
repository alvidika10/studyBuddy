import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import CustomHeader from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import VerticalSlider from "../components/VerticalSlider";
import heroDummy from "../assets/dummy/hero-dummy.jpg";

export default function ProjectScreen() {
  const [filterQuery, setFilterQuery] = useState(""); // Define filterQuery state
  const [locationQuery, setLocationQuery] = useState(""); // Define locationQuery state
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); // Define showCategoryDropdown state
  const [showLocationDropdown, setShowLocationDropdown] = useState(false); // Define showLocationDropdown state
  const [category, setCategory] = useState(""); // Define category state
  const [location, setLocation] = useState(""); // Define location state

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

  return (
    <>
      <CustomHeader title="Project" />
      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Search by Result</Text>

        <View style={styles.filterLocationContainer}>
          <TextInput
            style={styles.filterInput}
            placeholder="Category"
            value={filterQuery}
            onChangeText={(text) => {
              setFilterQuery(text);
              if (text) {
                setShowCategoryDropdown(true);
                setShowLocationDropdown(false);
              } else {
                setShowCategoryDropdown(false);
              }
            }}
            onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 150)}
          />

          {showCategoryDropdown && filteredCategories.length > 0 && (
            <View style={styles.dropdownContainer}>
              <View style={{ flex: 1 }}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 200 }}>
                  {filteredCategories.map((category) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      key={category}
                      onPress={() => {
                        setCategory(category);
                        setFilterQuery(category);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      <Text>{category}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          )}

          <TextInput
            style={styles.locationInput}
            placeholder="Location"
            value={locationQuery}
            onChangeText={(text) => {
              setLocationQuery(text);
              if (text) {
                setShowLocationDropdown(true);
                setShowCategoryDropdown(false);
              } else {
                setShowLocationDropdown(false);
              }
            }}
            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
          />

          {showLocationDropdown && filteredLocations.length > 0 && (
            <View style={[styles.dropdownContainer, { left: "52%" }]}>
              <View style={{ flex: 1 }}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 200 }}>
                  {filteredLocations.map((loc) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      key={loc}
                      onPress={() => {
                        setLocation(loc);
                        setLocationQuery(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      <Text>{loc}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          )}
        </View>
        <VerticalSlider data={data}/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Lato-Bold",
    color: "#333",
  },
  filterLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 9999,
    elevation: 5,
  },
  filterInput: {
    width: "48%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  locationInput: {
    width: "48%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  dropdownContainer: {
    position: "absolute",
    top: 40,
    width: "48%",
    maxHeight: 250,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    zIndex: 9999,
    elevation: 5,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
});
