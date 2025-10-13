import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type AuthResult = {
    session: Session | null;
    user: User | null;
};

export async function signInWithEmail(email: string, password: string): Promise<AuthResult> {
    const { data, error } = await  supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return { session: data.session, user: data.user };
}

export async function signUpWithEmail(email: string, password: string, fname: string, lname: string, phone: string, age: string, gender: string): Promise<AuthResult> {
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: fname }} });
    if (error) throw error;

    const user = data.user;
    if (!user) {
        throw new Error('User not found after sign up');
    }

    const profileData = {
        userid: user.id,
        fname: fname,
        lname: lname,
        age: Number(age),
        gender: "Male",
        role: 'patient',
        phone: phone
    }
    

    const { error: profileError } = await supabase
        .from('account')
        .upsert(profileData, { onConflict: 'userid' });

    if (profileError) {
        // Optionally, you might want to delete the user if profile creation fails
        console.error("Failed to insert user profile:", profileError);
        throw profileError;
    }

    return { session: data.session, user: data.user };
}

 export async function signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
 }

 export async function sendPasswordReset(email: string): Promise<void> {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
 }