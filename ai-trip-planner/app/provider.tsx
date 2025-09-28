"use client"
import Header from './_components/Header';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { useUser } from '@clerk/nextjs';
import { useContext, useEffect, useState } from 'react';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Createuser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>(); 
  const {user} = useUser();

  useEffect (() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    // save new user if not exits
    if(user) {
      const newUser = await Createuser({
        email: user?.primaryEmailAddress?.emailAddress ?? '',
        imageUrl: user?.imageUrl ?? '',
        name: user?.fullName ?? '',
      });
    }
  }


  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
    <div>
        <Header />
        {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  return useContext(UserDetailContext);
}