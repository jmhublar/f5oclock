import {
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const maxW = useBreakpointValue({
    base: 'container.xl',
    sm: 'container.xl',
    md: 'container.xl',
    xl: 'container.xl',
    '2xl': '1600px',
  });
  return (
    <Container
      as={Stack}
      maxW={maxW}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Text>
        Maintained with &#10084; by{' '}
        <Link href="https://github.com/bsord" isExternal>
          bsord
        </Link>{' '}
        and{' '}
        <Link href="https://fairbanks.io" isExternal>
          jonfairbanks
        </Link>
      </Text>
      <Stack direction={'row'} spacing={6}>
        <Link
          href="https://github.com/Fairbanks-io/f5-client/issues/new"
          isExternal
        >
          Request a subreddit <Icon as={FaGithub} mx="2px" />
        </Link>
      </Stack>
    </Container>
  );
}