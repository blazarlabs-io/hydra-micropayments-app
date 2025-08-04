import { TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Icons } from "../Icon";
import { ThemedText } from "../Text/ThemedText";
import { cn } from "@/utils/cn";

type ColorKey = keyof typeof Colors.light; // or keyof typeof Colors.dark

export interface BenefitCardProps {
  icon: any;
  label: string;
  title: string;
  bgColor: ColorKey;
  onPress: () => void;
  className?: string;
}

export const BenefitCard = ({
  icon,
  label,
  title,
  bgColor,
  onPress,
  className,
}: BenefitCardProps) => {
  const theme = useColorScheme() ?? "light";

  const Icon: any = Icons[icon as keyof typeof Icons];
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "mt-2 min-h-[96px] min-w-[96px] rounded-[16px] border p-2",
        className
      )}
      style={{
        backgroundColor: Colors[theme][bgColor as ColorKey],
      }}
    >
      <Icon size="24" />
      <View className="mt-2">
        <ThemedText className="text-xs">{label}</ThemedText>
        <ThemedText className="text-base font-bold">{title}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};
