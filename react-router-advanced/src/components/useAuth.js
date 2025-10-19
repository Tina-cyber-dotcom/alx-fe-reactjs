export default function useAuth() {
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
}
