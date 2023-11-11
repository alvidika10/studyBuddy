import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import CustomHeader from "../components/CustomHeader";
import { Rating } from "react-native-ratings";

export default function DetailScreen({ route }) {
  const navigation = useNavigation();
  const [project, setProject] = useState(route.params.project);
  const [price, setPrice] = useState("");
  const [studentFeedback, setStudentFeedback] = useState("");
  const [buddyFeedback, setBuddyFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const userRole = "Buddy";

  const handleAcceptProposal = () => {
    setProject({ ...project, status: "Accepted" });
  };

  const handlePayProject = () => {
    navigation.push("Payment");
  };

  const handleFinishProject = () => {
    setProject({ ...project, status: "Finished" });
  };

  const handleUpdateLearningMaterial = (text, index) => {
    const updatedMaterials = [...project.learningMaterials];
    updatedMaterials[index].text = text;
    setProject({ ...project, learningMaterials: updatedMaterials });
  };

  const handleRemoveMaterial = (index) => {
    const newMaterials = [...project.learningMaterials];
    newMaterials.splice(index, 1);
    setProject({ ...project, learningMaterials: newMaterials });
  };

  const handleToggleMaterialChecked = (index) => {
    const updatedMaterials = [...project.learningMaterials];
    updatedMaterials[index].checked = !updatedMaterials[index].checked;
    setProject({ ...project, learningMaterials: updatedMaterials });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <CustomHeader title="Project Detail" />

      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Project Name</Text>
        <View style={styles.container}>
          <Text>{project.title}</Text>
        </View>

        <Text style={styles.label}>Project Description</Text>
        <View style={styles.containerBig}>
          <Text>{project.description}</Text>
        </View>

        <Text style={styles.label}>Category</Text>
        <View style={styles.container}>
          <Text>{project.category}</Text>
        </View>

        <Text style={styles.label}>Goals</Text>
        <View style={styles.containerBig}>
          <Text>{project.goals}</Text>
        </View>

        {userRole === "Buddy" && project.status === "Submitted" && (
          <>
            <Text style={styles.label}>Proposal Price</Text>
            <TextInput
              style={styles.editableContainer}
              placeholder="Enter Price"
              value={price}
              onChangeText={setPrice}
            />
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={handleAcceptProposal}
            >
              <Text style={styles.buttonText}>Accept Project Proposal</Text>
            </TouchableOpacity>
          </>
        )}

        {project.status === "Accepted" && userRole === "Student" && (
          <TouchableOpacity onPress={handlePayProject} style={styles.payButton}>
            <Text style={styles.buttonText}>Proceed Payment</Text>
          </TouchableOpacity>
        )}

        {(project.status === "Paid" || project.status === "On Progress") && (
          <>
            <Text style={styles.label}>To-Do List</Text>
            {project.learningMaterials.map((material, index) => (
              <View key={index} style={styles.todoItem}>
                <CheckBox
                  isChecked={material.checked}
                  onClick={() => handleToggleMaterialChecked(index)}
                  disabled={userRole === "Buddy"} // Buddy ga bisa ceklis, hanya Student
                />
                <TextInput
                  style={styles.editableTodoText}
                  value={material.text}
                  onChangeText={(text) =>
                    handleUpdateLearningMaterial(text, index)
                  }
                  editable={
                    userRole === "Buddy" &&
                    (project.status === "Paid" ||
                      project.status === "On Progress")
                  } // Hanya Buddy yang bisa edit
                />
                {userRole === "Buddy" &&
                  (project.status === "Paid" ||
                    project.status === "On Progress") && (
                    <TouchableOpacity
                      onPress={() => handleRemoveMaterial(index)}
                    >
                      <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                  )}
              </View>
            ))}
          </>
        )}

        {project.status === "To Review" && (
          <>
            {userRole === "Student" && (
              <>
                <Text style={styles.label}>Student Feedback</Text>
                <TextInput
                  style={styles.editableContainer}
                  placeholder="Enter feedback"
                  value={studentFeedback}
                  onChangeText={setStudentFeedback}
                />
                <Text style={styles.label}>Student Rating</Text>
                <Rating
                  showRating
                  onFinishRating={handleRatingChange}
                  style={{ paddingVertical: 10 }}
                />
                <TouchableOpacity style={styles.submitFeedbackButton}>
                  <Text style={styles.buttonText}>Submit Feedback</Text>
                </TouchableOpacity>
              </>
            )}

            {userRole === "Buddy" && (
              <>
                <Text style={styles.label}>Buddy Feedback</Text>
                <TextInput
                  style={styles.editableContainer}
                  placeholder="Enter feedback"
                  value={buddyFeedback}
                  onChangeText={setBuddyFeedback}
                />
                <Text style={styles.label}>Buddy Rating</Text>
                <Rating
                  showRating
                  onFinishRating={handleRatingChange}
                  style={{ paddingVertical: 10 }}
                />
                <TouchableOpacity
                  onPress={() => {
                    // Handle Multer
                  }}
                  style={styles.uploadDocumentationButton}
                >
                  <Text style={styles.buttonText}>Upload Documentation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleFinishProject}
                  style={styles.finishProjectButton}
                >
                  <Text style={styles.buttonText}>Finish Project</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        )}

        {project.status === "Finished" && (
          <Image
            source={{
              uri: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KuGlXZjyTw7q38uzY_aZRA.png",
            }}
            style={styles.projectImage}
          />
        )}
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
  container: {
    width: "100%",
    height: 40,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  containerBig: {
    width: "100%",
    height: 100,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  editableContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 4,
  },
  todoText: {
    flex: 1,
    marginLeft: 8,
    color: "#555",
  },
  editableTodoText: {
    flex: 1,
    marginLeft: 8,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    color: "#333",
  },
  removeText: {
    color: "red",
    marginLeft: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#6b9ebf",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  payButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  submitFeedbackButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  finishProjectButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  uploadDocumentationButton: {
    backgroundColor: "#808080",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  projectImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 16,
  },
});
