import { useEffect, useState } from "react";
import { CONTENT_TYPE, UserType } from "../content_types";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
interface props {
  type: CONTENT_TYPE;
}
const Content: React.FC<props> = ({ type }) => {
  const [users, setUsers] = useState<any[] | UserType[]>([]);
  const getUsers = async () => {
    const users: any[] = [];
    try {
      await getDocs(collection(db, "users")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsers(newData);
      });
    } catch (error) {
      alert("Error fetching items");
      return null;
    }
  };
  const getUsersById = async (userId:string) =>{
    try {
        const userDocRef = doc(db,"users",userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if(userDocSnapshot.exists()){
            return {...userDocSnapshot.data(),id:userDocSnapshot.id};
        }else{
            alert("No such user document with ID");
            return null;
        }
    } catch (error:any) {
        alert(`Something went wrong \n ${error['message']}`);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div>
      {type == CONTENT_TYPE.MODERATORS && (
        <div>
          <h1>Moderators</h1>
          {users.map((user) => {
  
            return <span>{}</span>;
          })}
        </div>
      ) }
      {
            type == CONTENT_TYPE.SITES && (
                <div>
                    <h1>Forbidden Sites</h1>
                </div>
            )
      }
      {type == CONTENT_TYPE.MODERATING &&(
        <div>
            <h1>Moderated by me</h1>
        </div>
      )}
    </div>
  );
};

export default Content;
