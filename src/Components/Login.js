import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ncnnfkssccukqcnulcyu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbm5ma3NzY2N1a3FjbnVsY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzMjQ3NTAsImV4cCI6MjAwNjkwMDc1MH0.bTX5Ob0ekyq8tLVquXZeGGjoF0I9crvnVoaOesidVQg';
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        // Handle login error
        console.error('Login failed:', error.message);
      } else {
        // Handle successful login
        console.log('Logged in:', user);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
