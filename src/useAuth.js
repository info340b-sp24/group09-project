import { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { collection } from 'firebase/firestore'; // Import collection function from Firestore

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (newUser) => {
      if (newUser) {
        // Get user role from Firestore
        const userRef = collection(db, 'users').doc(newUser.uid); // Use collection function
        const snapshot = await userRef.get();
        const userData = snapshot.data();
        setUser({ ...newUser, role: userData ? userData.role : 'user' });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
