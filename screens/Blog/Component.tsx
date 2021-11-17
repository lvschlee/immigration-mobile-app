import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Box, Center, FlatList, Text } from 'native-base';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

import { db } from '../../firebase';
import { Post } from '../../components';

import { styles } from './styles';


export function BlogScreen({ navigation }: any) {
  const [posts, loading] = useCollectionData(collection(db, 'posts'), {
    idField: 'id',
  });

  console.info(navigation);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('PostDetails', {
      post: item
    }) }>
      <Post key={item.id} {...item} />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    );
  }

  return (
    <Box p={4} style={styles.container}>
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
