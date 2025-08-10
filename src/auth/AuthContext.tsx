import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const USERS_KEY = "aurora:users"; // Record<username, password>
const SESSION_KEY = "aurora:session"; // { username }

export type User = { username: string };

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function readUsers(): Record<string, string> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function writeUsers(users: Record<string, string>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

function writeSession(user: User | null) {
  if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  else localStorage.removeItem(SESSION_KEY);
}

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(readSession());
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const users = readUsers();
    if (!users[username] || users[username] !== password) {
      throw new Error("Invalid credentials");
    }
    const newUser = { username };
    setUser(newUser);
    writeSession(newUser);
  }, []);

  const signup = useCallback(async (username: string, password: string) => {
    const users = readUsers();
    if (users[username]) {
      throw new Error("Username already exists");
    }
    users[username] = password; // NOTE: plaintext for demo only
    writeUsers(users);
    const newUser = { username };
    setUser(newUser);
    writeSession(newUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    writeSession(null);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, login, signup, logout }),
    [user, login, signup, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
