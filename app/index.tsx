import { Stack, Link } from 'expo-router';
import { useAppSelector } from 'services/state/redux/hooks';
import { YStack } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';
export default function Page() {
  const { userId } = useAppSelector((state) => state.user);
  return (
    <Container>
      <Main>
        <Stack.Screen options={{ title: 'Overview' }} />
        <YStack>
          <Title>Hello World</Title>
          <Subtitle>Redux USER ID TEST: {userId}.</Subtitle>
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button>
            <ButtonText>Show Details</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
