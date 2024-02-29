import { firestore, auth } from "../Firebase";
import { getDoc ,doc} from "firebase/firestore";
import { collection, addDoc, getDocs ,query,where} from "firebase/firestore";

export const UPDATE_NAME = 'UPDATE_NAME';

// Define the action creator function
export const updateName = (newName) => {
  return {
    type: UPDATE_NAME,
    payload: newName
  };
};

export const fetchNameFromFirebase = (email) => {
    return async (dispatch) => {
        try {
            if (!email) {
                throw new Error("Email is undefined or null");
            }

            const docRef = collection(firestore, "users");
            const q = query(docRef, where("email", "==", email)); // Use where function to filter by email
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                dispatch(updateName(data.name));
                console.log("Name:", data.name);
            });
        } catch (error) {
            console.error("Error fetching document: ", error);
        }
    };
};

  
  
  
  
  