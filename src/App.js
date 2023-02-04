import './App.css';
import { useEffect, useState } from 'react';
import { app, database, storage } from './firebaseConfig' 
import {addDoc, collection, getDocs, onSnapshot, query, where} from 'firebase/firestore'

//Realtime database
export default function App() {
  const [data, setData ] = useState({})

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({...data, ...newInput})
  };

  const collectionRef = collection(database, 'users');
  const ageQuery = query(collectionRef, where('age', '<', 25))

  const handleSubmit = () => {
    addDoc(collectionRef, {
      name: data.name,
      email: data.email,
      age: Number(data.age)
    })
    .then(() => {
      alert("Data Added")
    })
    .catch((err) => {
      alert(err.message);
    })
  };

  const getData = () => {
    // getDocs(collectionRef).then((data) => {
    //   console.log(data.docs.map((item) => {
    //     return item.data();
    //     })
    //   )
    // })
    onSnapshot(ageQuery, (data) => {
      console.log(data.docs.map((item) => {
        return item.data();
      }))
    })
  }

    useEffect(() => {
      getData();

    }, []);

    return (
      <div className='App'>
        <input 
          name='name'
          placeholder='name'
          onChange={(event) => handleInput(event)}
        />
        <input 
          name='email'
          placeholder='Email'
          onChange={(event) => handleInput(event)}
        />
        <input 
          name='age'
          placeholder='Age'
          onChange={(event) => handleInput(event)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
    )
  }




//Storage
// import { 
//   ref, 
//   uploadBytesResumable, 
//   getDownloadURL 
// } from 'firebase/storage';

// function App() {
//   const [data, setData] = useState({});
  
//   const storageRef = ref(storage, `images/${data.name}`);
 
  
//   const handleSubmit = () => {
//     const uploadTask = uploadBytesResumable(storageRef, data);
//     uploadTask.on('state_changed', (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//     },
//     (error) => {
//       console.log(error.message)
//     }, () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL)
//       })
//     }
//     )
//   }

//   return (
//     <div className='App-header'>
//         <input type='file' onChange={(event) => setData(event.target.files[0])}/>
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

//Database
// import { 
//   collection, 
//   addDoc, 
//   getDocs, 
//   doc, 
//   updateDoc, 
//   deleteDoc,
// } from 'firebase/firestore'
 // const collectionRef = collection(database, 'users');

  // const handleInputs = (event) => {
  //   let inputs = {[event.target.name]: event.target.value}
  //   setData({ ...data, ...inputs })
  // }
  // const handleInputs = () => {
  //   console.log(data)
  // }
  // const handleSubmit = () => {
  //   addDoc(collectionRef, {
  //     email: data.email,
  //     password: data.password
  //   })
  //   .then(() => {
  //     alert('Data Added')
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   })
  // };

  // const getData = () => {
  //   getDocs(collectionRef)
  //   .then((response) => {
  //     console.log(response.docs.map((item) => {
  //       return {...item.data(), id: item.id};
  //     }))
  //   })
  // }

  // const updateData = () => {
  //   const docToUpdate = doc(database, 'users', 'dt8Wz3RLmltjE6LolQt4')
  //   updateDoc(docToUpdate, {
  //     email: 'ABC',
  //     password: 12345
  //   })
  //   .then(() => {
  //     alert('Data Updated')
  //   })
  //   .catch((err) => {
  //     alert(err.message)
  //   })
  // }

  //  const deleteData = () => {
  //     const docTodelete = doc(database, 'users', 'dt8Wz3RLmltjE6LolQt4')
  //     deleteDoc(docTodelete)
  //     .then(() => {
  //       alert('Data Deleted')
  //     })
  //     .catch((err) => {
  //       alert(err.message)
  //     })
  //  }
  // const addData = () => {
  //   signInWithEmailAndPassword(auth, data.email, data.password)
  // }
  // const handlelogout = () => [
  //   signOut(auth)
  // ]

  // return (
  //   <div className="App-header">
  //     <input 
  //       placeholder='Email'
  //       name="email"
  //       type="email"
  //       className='input-fields'
  //       onChange={event => handleInputs(event)}
  //     />
  //     <button onClick={handleSubmit}>Submit</button>
      
      {/* <input 
        placeholder='password'
        name="password"
        type="password"
        className='input-fields'
        onChange={event => handleInputs(event)}
      /> */}

      {/* <button onClick={addData}>Log In</button>
      <button onClick={handlelogout}>Log out</button> */}
      
      
//     </div>
//   );
// }

// export default App;
