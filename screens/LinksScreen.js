import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            HELLO WORLD LINKS.
          </Text>
        </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
