import { Button } from '@nextui-org/react';
import { auth } from '@/auth'; 
import { signIn, signOut } from '@/action';

export default async function Home() {
  const session = await auth();
console.log(session?.user);

  return (
    <div>
      <form action={signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

    </div>
  );
}
