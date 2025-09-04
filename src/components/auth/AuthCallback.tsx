import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase/cliente';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Get the current URL parameters
      const params = new URLSearchParams(window.location.search);
      const type = params.get('type');

      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;

        // Check if this is an email verification callback
        if (params.has('email_confirm') || type === 'email_verification') {
          navigate('/verification');
          return;
        }

        // For other auth flows, redirect to dashboard if session exists
        if (session) {
          navigate('/dashboard');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  // Show loading state while processing
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Processing authentication...</p>
    </div>
  );
};

export default AuthCallback;