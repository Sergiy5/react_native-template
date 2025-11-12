import LinearGradient from 'react-native-linear-gradient';
import { cssInterop } from 'nativewind';
import { Container } from '@/components/ui/Container';
import { SafeAreaContainer } from '@/components/ui/SafeAreaContainer';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { CustomBtn } from '@/components/ui/CustomBtn';

cssInterop(LinearGradient, {
  className: {
    target: 'style',
  },
});

const HomeScreen: React.FC = () => {
    // const handleLink = () => {
    //   Linking.openURL('https://google.com');
    //     };
  return (
    <SafeAreaContainer className="relative">
      <ScrollView className="flex flex-col w-full">
        <Container className="w-full">
          <View>
            <Text>Section</Text>Section
          </View>
          <CustomBtn onPress={() => {}} label="Button" />
        </Container>
      </ScrollView>
      {false && (
        <ActivityIndicator
          size="large"
          color={'#0057b9'}
          className="absolute top-1/2 left-1/2"
        />
      )}
    </SafeAreaContainer>
  );
};

export default HomeScreen;
