/* eslint-disable react/display-name */
import React, { memo, useState, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, RefreshControl } from 'react-native';
// import { Modal, Provider } from '@ant-design/react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = memo(() => {
  const dispatch = useDispatch();

  return (
    <ScrollView
    >
      <View><Text>555599</Text></View>
    </ScrollView>
  );
});

export default HomeScreen;
