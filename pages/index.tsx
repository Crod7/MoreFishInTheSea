import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
        <img src={user.picture} alt='none' />
        <Link href="/fish">
          Go to Fish Page
        </Link>
      </div>
    );
  }

  return (
    <div>
      <a href="/api/auth/login">Login</a>
    </div>
  );
}