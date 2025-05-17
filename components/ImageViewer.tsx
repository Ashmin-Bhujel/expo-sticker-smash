import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  defaultImage: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ defaultImage, selectedImage }: Props) {
  const imageSource = selectedImage ? selectedImage : defaultImage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
