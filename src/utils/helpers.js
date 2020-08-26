import { AsyncStorage } from 'react-native';
import { showMessage } from "react-native-flash-message";

export const _storeStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify(value),
    );
  } catch (error) {
    showMessage({
      message: error,
      type: 'danger',
    });
  }
};

export const fetchStorageData = async (item) => {
  try {
    const value = await AsyncStorage.getItem(item);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    showMessage({
      message: error,
      type: 'danger',
    });
  }
}

