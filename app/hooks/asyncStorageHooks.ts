import { UnistylesThemes } from "react-native-unistyles";
import { asyncStorageUtil } from "@hooks";

// Function to fetch user preferred theme from AsyncStorage
export const getUserPreferredTheme = async (): Promise<keyof UnistylesThemes> => {
    try {
        const theme = await asyncStorageUtil.getData('userPreferredTheme');
        if (theme === 'light' || theme === 'dark' || theme === 'premium') {
            return theme as keyof UnistylesThemes;
        }
    } catch (error) {
        console.error('Error fetching user theme from AsyncStorage:', error);
    }

    // Default to 'light' if theme is not valid or AsyncStorage error occurs
    return 'light';
};

export const setUserPreferredTheme = async (theme: keyof UnistylesThemes): Promise<void> => {
    try {
        await asyncStorageUtil.saveData('userPreferredTheme', theme);
    } catch (error) {
        console.error('Error setting user theme in AsyncStorage:', error);
    }
};