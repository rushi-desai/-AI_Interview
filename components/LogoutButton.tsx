'use client'

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { auth } from '@/firebase/client';
import { signOut } from 'firebase/auth';
import { logout } from '@/lib/actions/logout.action'; // server action

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      await logout();      // Clear cookie on server

      router.push('/sign-in'); // Redirect
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button onClick={handleLogout} className="btn btn-primary">
      Logout
    </Button>
  );
};

export default LogoutButton;
