'use server';

import { cookies } from 'next/headers';

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.set('session', '', {
    maxAge: 0,
    path: '/',
  });

  return { success: true };
}