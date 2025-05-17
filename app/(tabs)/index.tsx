import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

const placeholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppsOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  // Image picker
  const pickImageAsync = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!response.canceled) {
      setSelectedImage(response.assets[0]?.uri);
      setShowAppsOptions(true);
    } else {
      alert("You did not selected any image");
    }
  };

  // Functions
  function onReset() {
    setShowAppsOptions(false);
    setPickedEmoji(undefined);
  }

  function onAddSticker() {
    setIsModalVisible(true);
  }

  function onModalClose() {
    setIsModalVisible(false);
  }

  async function onSaveImageAsync() {
    // Later
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          defaultImage={placeholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker stickerSource={pickedEmoji} imageSize={40} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose an image"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this image"
            onPress={() => setShowAppsOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#222222",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 28,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 40,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
