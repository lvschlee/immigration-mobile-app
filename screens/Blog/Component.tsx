import React from 'react';

import { Box, Center, FlatList, Text } from 'native-base';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

import { db } from '../../firebase';
import { Post } from '../../components';

import { styles } from './styles';


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
