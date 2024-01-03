import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth, firestore} from '../firebase/firebase-config'
import { doc , setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
function useSignUpWithEmail() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const signUp = async (inputs) => {
    if(!inputs.email || !inputs.password  || !inputs.username || !inputs.fullName){
     showToast('Fields error' , 'please fill all the fields' ,'error' , '4000' , true)
      return
    }
    try{
      const newUser = await createUserWithEmailAndPassword(inputs.email , inputs.password)
      if(!newUser && error){
        console.log(error)
        return
      }
      if(newUser){
        const userDoc = {
          uid : newUser.user.uid,
          username: inputs.username,
          fullName : inputs.fullName,
          email : inputs.email ,
          password:inputs.password , 
          bio : '',
          followers : [],
          following : [],
          posts :[],
          profilePicUrl : '',
          createdAt : Date.now()
        }
        await setDoc(doc(firestore ,'users' ,newUser.user.uid),userDoc)
        localStorage.setItem('user-info' , JSON.stringify(userDoc))
      }

    }catch(error){
      console.log(error);
    }
  }
  return {loading , error , signUp}
}

export default useSignUpWithEmail