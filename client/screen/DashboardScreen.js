import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../navigators/Authcontext";
import ButtonGrid from "../components/ButtonGrid";
import addProject from "../assets/tap.png";
import History from "../assets/certificate.png";
import Wallet from "../assets/money.png";
import { useNavigation } from "@react-navigation/native";
import { DashboardWidget } from "../components/DashboardWidget";
import DashboardProject from "../components/DashboardProject";
import CustomHeader from "../components/CustomHeader";
import RoleModal from "../components/modal/RoleModal";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../store/actions/actionCreator";

export default function DashboardScreen() {
  const { isLoggedIn, updateUserRoleAndSpec, currentUser } = useAuth();
  console.log("isLoggedIn:", isLoggedIn);
  console.log("currentUser:", currentUser);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const projectDataFromRedux = useSelector((state) => state.projects);
  console.log("projectDataFromRedux:", projectDataFromRedux);

  const [showRoleModal, setShowRoleModal] = useState(false);
  console.log("showRoleModal:", showRoleModal);

  useEffect(() => {
    if (currentUser && !currentUser.role) {
      setShowRoleModal(true);
    }
    dispatch(getProjects());
  }, [currentUser, dispatch]);

  const finishedProjects = projectDataFromRedux
    ? projectDataFromRedux.filter((project) => project.status === "Finished")
    : [];

  const buttonItems = [
    {
      icon: addProject,
      label: "Add Projects",
      size: 60,
      onPress: () => navigation.navigate("AddProject"),
    },
    {
      icon: History,
      label: "Project History",
      size: 60,
      onPress: () => navigation.navigate("Archive", { data: finishedProjects }),
    },
    {
      icon: Wallet,
      label: "Wallet",
      size: 60,
      onPress: () => navigation.navigate("Wallet"),
    },
  ];

  return (
    <>
      <CustomHeader title="Dashboard" />
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={styles.container}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DashboardWidget data="100" isLike={true} title="Overview" />
            <DashboardWidget data="4.6" isReview={true} />
          </View>
          <ButtonGrid items={buttonItems} />
          <DashboardProject projectData={projectDataFromRedux} />
        </ScrollView>

        <RoleModal
          isVisible={showRoleModal}
          onClose={() => setShowRoleModal(false)}
          onSave={(role, specs) => {
            updateUserRoleAndSpec(role, specs);
            setShowRoleModal(false);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFF",
  },
});
