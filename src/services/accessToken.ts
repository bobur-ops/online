import { useLocalStorage } from "usehooks-ts";

export const accessTokenName = "access-token";

export function getAccessToken() {
  const token = window.localStorage.getItem(accessTokenName);
  return (token ? JSON.parse(token) : token) as string | null;
}

export function setAccessToken(token: string | null) {
  console.log(token);
  if (token !== null) {
    window.localStorage.setItem(accessTokenName, JSON.stringify(token));
  } else {
    window.localStorage.removeItem(accessTokenName);
  }
  // because in useAccessToken I used useLocalStorage from usehooks-ts, I need to dispatch custom event
  window.dispatchEvent(new Event('local-storage'));
}

export function useAccessToken() {
  const [token, _] = useLocalStorage<string | null>(accessTokenName, null);

  return token ?? null;
}
