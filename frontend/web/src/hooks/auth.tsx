import { createContext, useContext, useState } from "react";
import type { LoginForm, RegisterForm, User } from "../utils/interfaces";
import api from "../services/api";
import { Toast } from '../utils/toast';

interface AuthProps {
  user: User | null,
  token: string | null,
  loading: boolean,
  signIn(event: React.FormEvent<HTMLFormElement>, formState: LoginForm): void
  signUp(event: React.FormEvent<HTMLFormElement>, formState: RegisterForm): void
  logout(): void
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const [loading, setLoading] = useState<boolean>(false)

  const signIn = async (event: React.FormEvent<HTMLFormElement>, formState: LoginForm) => {
    event.preventDefault();

    setLoading(true)

    await api.post('/login', formState)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setToken(response.data.token)
        setUser(response.data.user)
        setLoading(false)

        Toast.fire({
            icon: 'success',
            title: response.data.message
        });
      })
      .catch(error => {
        Toast.fire({
            icon: 'error',
            title: error.response.data.error
        });

        setLoading(false)
      })
  }

  const signUp = async (event: React.FormEvent<HTMLFormElement>, formState: RegisterForm) => {
    event.preventDefault();

    setLoading(true)

    await api.post('/register', formState)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setToken(response.data.token)
        setUser(response.data.user)
        setLoading(false)

        Toast.fire({
            icon: 'success',
            title: response.data.message
        });
      })
      .catch(error => {
        Toast.fire({
            icon: 'error',
            title: error.response.data.error
        });

        setLoading(false)
      })
  }

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{
      user,
      token,
      loading,
      signIn,
      signUp,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthProps {
  const context = useContext(AuthContext)
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

export { AuthProvider, useAuth }
