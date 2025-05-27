const [role, setRole] = useState(null);
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

useEffect(() => {
  const getUserAndProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      setRole(profile?.role);
    }
  };

  getUserAndProfile();
}, []);


  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
  };

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
{user ? (
  <div>
    <p>Hello, {user.email}</p>
    <p>Role: {role}</p>
    {role === 'admin' && <p>Welcome, Administrator</p>}
    <button onClick={handleSignOut}>Sign Out</button>
  </div>
) : (
  // sign in / sign up UI
)}

  return (
    <div>
      <h1>Welcome to Navi</h1>
      {user ? (
        <div>
          <p>Hello, {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </>
      )}
    </div>
  );
}
