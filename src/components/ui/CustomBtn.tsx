import { Pressable, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomBtnProps {
  onPress: () => void;
  label: string;
}
export const CustomBtn: React.FC<CustomBtnProps> = ({ onPress, label }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex items-center  rounded-full bg-black p-2 h-10"
    > <LinearGradient
          colors={['#0057b8', '#fff', '#ffd600']}
          start={{ x: 0.7, y: 0.3 }}
          end={{ x: 0, y: 1 }}
          className={`flex flex-1 w-full items-center justify-center rounded-full`}
      >
      <Text className="text-[12px] text-slate-900">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};
