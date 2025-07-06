import { defaultTheme, initialTheme, getTheme } from './theme';
import { IThemePreference } from '../../../definitions/ITheme';

// Mock the problematic modules
jest.mock('react-native-navigation-bar-color', () => jest.fn());
jest.mock('rn-root-view', () => jest.fn());
jest.mock('../userPreferences', () => ({
	getMap: jest.fn(() => null)
}));

describe('Theme Helper Functions', () => {
	describe('defaultTheme', () => {
		it('should always return dark mode', () => {
			expect(defaultTheme()).toBe('dark');
		});
	});

	describe('initialTheme', () => {
		it('should return dark theme as default', () => {
			const theme = initialTheme();
			expect(theme.currentTheme).toBe('dark');
			expect(theme.darkLevel).toBe('black');
		});
	});

	describe('getTheme', () => {
		it('should return black theme when currentTheme is dark', () => {
			const themePreferences: IThemePreference = {
				currentTheme: 'dark',
				darkLevel: 'black'
			};
			expect(getTheme(themePreferences)).toBe('black');
		});

		it('should return dark theme when currentTheme is dark and darkLevel is dark', () => {
			const themePreferences: IThemePreference = {
				currentTheme: 'dark',
				darkLevel: 'dark'
			};
			expect(getTheme(themePreferences)).toBe('dark');
		});

		it('should return light theme when currentTheme is light', () => {
			const themePreferences: IThemePreference = {
				currentTheme: 'light',
				darkLevel: 'black'
			};
			expect(getTheme(themePreferences)).toBe('light');
		});

		it('should return dark theme when currentTheme is automatic (system)', () => {
			const themePreferences: IThemePreference = {
				currentTheme: 'automatic',
				darkLevel: 'black'
			};
			expect(getTheme(themePreferences)).toBe('black');
		});
	});
}); 