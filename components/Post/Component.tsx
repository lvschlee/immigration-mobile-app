import React from 'react';

import { Box, Image, Text, Spinner } from 'native-base';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';

import { storage } from '../../firebase';

import { styles } from './styles';

export type PostType = {
  id: string;
  title: string;
  thumb: string;
  description: string;
};

export function Post({ title, description, thumb }: PostType) {
  const [uri, loading] = useDownloadURL(ref(storage, thumb));
  const fallbackImgURI =
    'https://firebasestorage.googleapis.com/v0/b/immigration-6a56d.appspot.com/o/b9ebecfa74ba38d612c2286545893dde.jpg?alt=media&token=3d00d817-18f2-4aeb-b194-17061d02a341';

  const _description =
    description.length > 128
      ? description.slice(0, 128).concat('...')
      : description;

  return (
    <Box style={styles.container}>
      <Box height={185} justifyContent="center">
        {loading ? (
          <Spinner />
        ) : (
          <Image
            height={185}
            source={{ uri: loading ? fallbackImgURI : uri }}
            alt={title}
            fallbackSource={{ uri: fallbackImgURI }}
          />
        )}
      </Box>
      <Box style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{_description}</Text>
      </Box>
    </Box>
  );
}
