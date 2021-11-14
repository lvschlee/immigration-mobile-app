import React from 'react';

import { Box, Center, FlatList, Text } from 'native-base';

import { initializeApp } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';

import { Post, PostType } from '../../components';

import { styles } from './styles';


import { firebaseConfig } from '../../config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function BlogScreen() {
  const [posts, loading] = useCollectionData(collection(db, 'posts'), {
    idField: 'id',
  });

  const renderItem = ({ item }: any) => <Post key={item.id} {...item} />;

  if (loading) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    );
  }

  return (
    <Box style={styles.container}>
      {posts && posts.length > 0 ? (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Center flex={1}>
          <Box>На данный момент нет доступных записей</Box>
        </Center>
      )}
    </Box>
  );
}
