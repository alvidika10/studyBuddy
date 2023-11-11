import { Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import heroDummy from "../assets/dummy/hero-dummy.jpg";
import dummy1 from "../assets/dummy/dummy1.png";
import dummy2 from "../assets/dummy/dummy2.png";
import dummy3 from "../assets/dummy/dummy3.png";

const screenWidth = Dimensions.get("window").width;

export default function HeroCarousel() {
  const carouselItems = [
    { text: "Ini Nama Project 1", image: heroDummy },
    { text: "Ini Nama Project 2", image: dummy1 },
    { text: "Ini Nama Project 3", image: dummy2 },
    { text: "Ini Nama Project 4", image: dummy3 },
  ];

  return (
    <Carousel
      data={carouselItems}
      renderItem={({ item, index }) => (
        <Image
          key={index}
          style={{
            width: screenWidth - 60,
            height: 200,
            resizeMode: "cover",
            borderRadius: 15,
          }}
          source={item.image}
        />
      )}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 50}
      inactiveSlideScale={1}
      inactiveSlideOpacity={0.7}
      activeSlideAlignment={"center"}
      loop={true}
      autoplay={true}
      autoplayInterval={5000}
    />
  );
}
