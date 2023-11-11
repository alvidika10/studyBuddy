import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../navigators/Authcontext";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import profileImage from "../assets/dummy/hero-dummy.jpg";
import pdfIcon from "../assets/icons/pdf.png";
import imageIcon from "../assets/icons/images.png";
import { useSelector, useDispatch } from "react-redux";
import { getStudentProfile } from "../store/actions/actionCreator";

export default function AccountScreen() {
  const { studentProfile } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { logout } = useAuth();
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    role: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    dispatch(getStudentProfile())
      .then(() => {
        setUserProfile(studentProfile)
      })
  }, [])

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  const handleChange = (field, value) => {
    setUserProfile({
      ...userProfile,
      [field]: value,
    });
  };

  const handleEditSaveProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView
        style={styles.contentContainerStyle}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.username}>{studentProfile.username}</Text>
        </View>

        <Text style={styles.fieldTitle}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{studentProfile.email}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Role:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.role}
            onChangeText={(text) => handleChange("role", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{studentProfile.role}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Phone:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.phoneNumber}
            onChangeText={(text) => handleChange("phone", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{studentProfile.phoneNumber}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Address:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.address}
            onChangeText={(text) => handleChange("address", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{studentProfile.address}</Text>
          </View>
        )}

        <Button
          text={isEditing ? "Save" : "Edit Profile"}
          onPress={handleEditSaveProfile}
          style={isEditing ? styles.saveButton : styles.editButton}
        />
        {
          !isEditing && (
            <Button
              text="Logout"
              onPress={handleLogout}
              style={styles.logoutButton}
            />
          )
        }
      </ScrollView >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    padding: 30,
    backgroundColor: "white",
    paddingBottom: 40,
    borderRadius: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "Lato-Regular",
    color: "#333",
  },
  fieldTitle: {
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "Lato-Bold",
    color: "#6b9ebf",
  },
  input: {
    height: 40,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    backgroundColor: "#F5F5F5",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#E0E0E0",
  },
  documentInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  documentInputContainer: {
    flex: 1,
  },
  documentInput: {
    marginVertical: 5,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
  },
  documentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 140,
    height: 140,
    marginTop: 30,
    resizeMode: "cover",
    borderRadius: 70,
  },
  editButton: {
    backgroundColor: "#6b9ebf",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  documentInputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  documentInput: {
    flex: 1,
    marginEnd: 5,
    marginStart: 5,
  },
  roundRemoveButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderRadius: 15,
    marginLeft: 10,
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#0e365c",
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
  },

  saveButton: {
    backgroundColor: "#6b9ebf",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  logoutButton: {
    backgroundColor: "#8B0000",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
});
