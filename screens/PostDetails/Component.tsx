import React from 'react';

import { Box, Image, Heading, Text, Spinner } from 'native-base';
import { ref } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';

import { storage } from '../../firebase';

import { styles } from './styles';

export function PostDetails({ route }: any) {
  const { post } = route.params;
  const [uri, loading] = useDownloadURL(ref(storage, post.thumb));
  const fallbackImgURI =
    'https://firebasestorage.googleapis.com/v0/b/immigration-6a56d.appspot.com/o/b9ebecfa74ba38d612c2286545893dde.jpg?alt=media&token=3d00d817-18f2-4aeb-b194-17061d02a341';

  return (
    <Box style={styles.container}>
      <Box height={185} mb="2" justifyContent="center">
        {loading ? (
          <Spinner />
        ) : (
          <Image
            height={185}
            source={{ uri: loading ? fallbackImgURI : uri }}
            alt={post.title}
            fallbackSource={{ uri: fallbackImgURI }}
          />
        )}
      </Box>

      <Box p={4}>
        <Heading mb="2" textAlign="center">{post.title}</Heading>
        <Text >{post.description}</Text>
      </Box>
    </Box>
  );
}
