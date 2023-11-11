import React from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const StarSVG = () => (
  <Svg width="16" height="16" viewBox="0 0 47.94 47.94">
    <Path
      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
      fill="#ED8A19"
    />
  </Svg>
);

const LocationSVG = () => (
  <Svg width="16" height="16" viewBox="0 0 24 24">
    <Path
      d="M12.5,0A9.24,9.24,0,0,0,3,9.41c0,7.88,8.8,15.17,9.17,15.47a.5.5,0,0,0,.65,0C13.21,24.53,22,16.51,22,9.41A9.24,9.24,0,0,0,12.5,0Zm0,14A4.5,4.5,0,1,1,17,9.5,4.5,4.5,0,0,1,12.5,14Z"
      fill="#1191ab"
    />
  </Svg>
);

export default function VerticalSlider(props) {
  const { data } = props;

  const carouselItems = data.map((item, idx) => ({
    name: item.name,
    image: item.image,
    description: item.description,
    // rating:
    // goals: item.goals,
    // category: item.Category.name,
    // address: item.Teacher.address,
  }));

  return (
    <View style={styles.verticalCardContainer}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {carouselItems.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => item}>
            <View style={styles.verticalCard}>
              <Image style={styles.verticalCardImage} source={item.image} />
              <Text style={styles.verticalCardText}>{item.title}</Text>
              <View style={styles.locationContainer}>
                <LocationSVG />
                <Text style={styles.courseLocation}>{item.address}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <StarSVG />
                <Text style={styles.courseRating}>4.5</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalCardContainer: {
    padding: 10,
    marginTop: 10,
  },
  verticalCard: {
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  verticalCardImage: {
    width: screenWidth * 0.9,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  verticalCardText: {
    color: "#0e365c",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Lato-Regular",
    width: screenWidth * 0.9,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Lato-Light",
  },
  courseRating: {
    color: "#0e365c",
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  courseLocation: {
    color: "#6b9ebf",
    marginLeft: 5,
    fontFamily: "Lato-Light",
  },
});
