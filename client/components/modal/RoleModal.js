import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";

const RoleModal = ({ isVisible, onClose, onSave }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [specialization, setSpecialization] = useState([]);
  const dummySpecializations = ["Math", "Science", "Literature"];

  const handleSelectRole = (role) => {
    console.log("Selected role:", role);
    setSelectedRole(role);
    if (role === "Student") {
      onSave(role, []);
      onClose();
    }
  };

  const toggleSpecialist = (spec) => {
    if (specialization.includes(spec)) {
      setSpecialization((prev) => prev.filter((item) => item !== spec));
    } else {
      setSpecialization((prev) => [...prev, spec]);
    }
  };

  const handleDone = () => {
    if (selectedRole === "Buddy") {
      onSave(selectedRole, specialization);
      onClose();
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select your role</Text>

          {selectedRole === null && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("Student")}
              >
                <Text>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("Buddy")}
              >
                <Text>Buddy</Text>
              </TouchableOpacity>
            </>
          )}

          {selectedRole === "Buddy" &&
            dummySpecializations.map((spec, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  specialization.includes(spec) && styles.selectedButton,
                ]}
                onPress={() => toggleSpecialist(spec)}
              >
                <Text>{spec}</Text>
              </TouchableOpacity>
            ))}

          {selectedRole === "Buddy" && specialization.length > 0 && (
            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
              <Text>Done</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: "#4CAF50",
  },
  doneButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default RoleModal;
