import {db} from './firebase';

export const createUserDoc= async (user, data)=>{
    if (!user) return;
    const userRef=db.doc(`users/${user.uid}`);
    const snapshot=await userRef.get();
    if (!snapshot.exists) {
        const createdAt=new Date();
        const {displayName, email, photoURL}=user;
        try {
            await userRef.set(
                {displayName, email, photoURL, createdAt,
                ...data}
            );
        } catch (error) {
            console.error ('error creating user, ', error);
        };
    };
};
export const getUserDoc= async (uid)=> {
    if (!uid) return null;
    try {
        const userDoc=await db.collection('users').doc(uid).get();
        return {uid, ...userDoc.data()};
    } catch (error) {
        console.error ('error fetching user, ', error);
    };
};