import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container } from '../src/container';
import { Text } from 'react-native';

export default {
  title: 'Container',
};

export const defaultView = () => (
  <Container
    style={{
      margin: 20,
      maxHeight: 200,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 28 }}>Your content here</Text>
  </Container>
);

// On-Device Register
storiesOf('Container', module).add('Default', defaultView);
