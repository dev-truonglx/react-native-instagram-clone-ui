import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Status: { userId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Status'>;
