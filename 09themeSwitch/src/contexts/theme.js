import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

//hook to access properties and functions directly
export default function useTheme() {
    return useContext(ThemeContext)
}

