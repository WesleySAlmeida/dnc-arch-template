import { createContext, useState } from "react"
import languagesData from "../components/data/language.js"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem("lang")

  const [language, setLanguage] = useState(savedLanguage ?? "br")
  const [languages] = useState(languagesData)
  const [loading] = useState(false)

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        languages,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}