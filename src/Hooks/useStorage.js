import { async } from '@firebase/util';
import {useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'; 

const useStorage = (file) =>  { 
 const [progress, setProgress] = useState(0);
 const [error, setError] = useState(null);
 const [url, setUrl] = useState(null);


 useEffect(() => {
// references
const storageRef = projectStorage.Ref(file.name);
const collectionRef = projectFirestore.collection('images');
  // snap : records the time of upload//
storageRef.put(file).on('state changed', (snap) => {
 // percentage of upload 
 let percentage = (snap.BytesTransferred / snap.totalBytes) * 100;
  setProgress(percentage);
}, (err) =>{
    setError(err); 
    // get url of image uploaded
}, async () =>{
    const url = await storageRef.getDownloadURL();
    // call timestamp method
    const createdAt = timestamp();
    // add url & timestamp of docs(imgs)
    collectionRef.add({url, createdAt })
    setUrl(url);

})

 }, [file]);

 return { progress, url, error }
};
export default useStorage;