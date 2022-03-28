import React from 'react';
import useFirestore from '../Hooks/UseFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({SelectedImg }) =>  {
const { docs } = useFirestore('images');

console.log( docs );


  return (
    <motion.div className='img-grid'>
    {docs && docs.map(docs => (
      <div className='img-wrap' key={docs.id}
      whileHover={ { opacity:1 } }
      layout
       onClick = {()=>(docs.url)} >  
      
      <motion.img src={docs.url} alt ="Uploaded pic"
      initial ={ {opacity: 0} }
      animate ={ {opacity: 1} }
      transition= { {delay: 1} }
      /> 
      </div>
    ))}
    </motion.div>
  );
};

export default ImageGrid;