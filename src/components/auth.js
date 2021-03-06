import {auth} from './firebase';
import {createUserDoc} from './firebase-documents';
//signup
export const signUp= async (name, email, password)=>{
    try {
        const {user}= await auth.createUserWithEmailAndPassword(email, password);
        user.updateProfile({displayName: name});
        console.log("succesfully created", user);
        createUserDoc(user, {displayName: name});
    } catch (err) {
        if (err.code=='auth/email-already-in-use') {
            logIn(email, password); 
        };
        console.error(err);
        return (err.message);
    }
};
//logout
export const logOut= async ()=>{
    try {
        await auth.signOut();
        console.log("succesfully logout");
    } catch (error) {
        console.error(error);
    }
};
//login
export const logIn= async (email, password)=>{
    try {
        const {user}= await auth.signInWithEmailAndPassword(email, password);
        console.log("succesfully logined", user);
    } catch (error) {
        console.error(error);
    }
};