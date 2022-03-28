import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection)=>{

    const [ docs, setDocs ] = useState([]);

    useEffect (()=>{ 
                                                     // sort out
const unsub = projectFirestore.collection(collection)
.orderBy('createdAt', 'desc')
.onsnapshop((snap) => {
    //empty docs/array
let documents = [];
snap.forEach( doc=> {
    // document's data and id
    documents.push({...doc.data(), id: doc.id});
});

setDocs(documents);
});
return () => unsub();

    }, [collection ])

    return {docs};

};

export default useFirestore;