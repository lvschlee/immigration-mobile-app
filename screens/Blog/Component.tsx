import React from 'react';

import { View, Text, FlatList } from 'react-native';

import { Post, PostType } from '../../components';

import { styles } from './styles';



import { initializeApp } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';

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
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
