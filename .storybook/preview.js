import * as React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { View } from 'react-native';

addDecorator((storyFn) => <View style={{ height: '100vh' }}>{storyFn()}</View>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone5',
  },
});
