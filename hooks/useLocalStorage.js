export const useLocalStorage = (nameStorage) => {
  const storage = JSON.parse(sessionStorage.getItem(nameStorage)) || [];
  return { storage }
}