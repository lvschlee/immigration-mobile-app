import React from 'react';

import { View, Image, Text } from 'react-native';

import { styles } from './styles';

export type PostType = {
  id: string;
  title: string;
  description: string;
};

export function Post({ title, description }: PostType) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.thumb}
          source={{
            uri: 'https://totpolyglot.com/images/stories/virtuemart/product/978-5-9951-3277-6%20p1.jpg',
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
