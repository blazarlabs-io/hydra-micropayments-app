import { Colors } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";

export interface AvatarProps {
  image?: string;
  size?: number;
  name?: string;
}

export const Avatar = ({
  image,
  size = 40,
  name = "John Doe",
}: AvatarProps) => {
  const theme = useColorScheme() ?? "light";
  const [initials, setInitials] = useState<string>("JD");
  const mountRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      if (name) {
        const nameArray = name.split(" ");
        if (nameArray.length > 1) {
          setInitials(`${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`);
        } else {
          setInitials(`${nameArray[0].charAt(0)}${nameArray[0].charAt(1)}`);
        }
      }
    }
  }, [name]);
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed")}
      style={{
        backgroundColor: Colors[theme].foreground,
      }}
      className="flex h-12 w-12 items-center justify-center rounded-full"
    >
      {image === null || image === undefined ? (
        <Text style={{ color: Colors[theme].background }}>{initials}</Text>
      ) : (
        <Image source={{ uri: image }} className="h-12 w-12 rounded-full" />
      )}
    </TouchableOpacity>
  );
};
