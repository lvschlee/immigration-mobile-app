import React from 'react';

import { Box, Image, Text } from 'native-base';

import { styles } from './styles';

export type PostType = {
  id: string;
  title: string;
  description: string;
};

export function Post({ title, description }: PostType) {
  const _description = description.length > 128 ? description.slice(0, 128).concat('...') : description;
  return (
    <Box style={styles.container}>
      <Box>
        <Image
          style={styles.thumb}
          alt={title}
          source={{
            uri: 'https://totpolyglot.com/images/stories/virtuemart/product/978-5-9951-3277-6%20p1.jpg',
          }}
        />
      </Box>
      <Box style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{_description}</Text>
      </Box>
    </Box>
  );
}
