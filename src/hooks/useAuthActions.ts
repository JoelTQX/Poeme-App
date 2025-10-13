import { useState } from 'react';
import { sendPasswordReset, signInWithEmail, signOut, signUpWithEmail } from '../services/authServices';

export function useAuthActions() {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    async signIn(email: string, password: string) {
      setLoading(true);
      try { return await signInWithEmail(email, password); }
      finally { setLoading(false); }
    },
    async signUp(email: string, password: string, fname: string, lname: string, phone: string, age: string, gender: string) {
      setLoading(true);
      try { return await signUpWithEmail(email, password, fname, lname, phone, age, gender); }
      finally { setLoading(false); }
    },
    async reset(email: string) {
      setLoading(true);
      try { return await sendPasswordReset(email); }
      finally { setLoading(false); }
    },
    async logout() {
      setLoading(true);
      try { return await signOut(); }
      finally { setLoading(false); }
    },
  };
}
