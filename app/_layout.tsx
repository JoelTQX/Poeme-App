// app/_layout.tsx
import { Stack } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-url-polyfill/auto";
import { supabase, type Session } from "../src/lib/supabase";

type AuthContextType = {
  session: Session | null;
  ready: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  ready: false,
});

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);


export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load current session once
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
      setReady(true);
    });

    // Subscribe to auth state changes ( real-time listener on auth changes )
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ session, ready }}>
      {/* Expo Router discovers the rest of your routes/groups */}
      <Stack screenOptions={{ headerShown: false }} />
    </AuthContext.Provider>
  );
}
