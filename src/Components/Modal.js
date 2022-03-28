import React from "react";
import { motion } from "framer-motion";

const Modal = ( {selectedImg, setSelectedImg}  ) => {

// click around  the img to close 
   const handleClick = (e) =>{
       if(e.target.classlist.contains('backdrop')) {
        setSelectedImg(null);
       };
       
    };
    return(
        <motion.div className="backdrop" onClick = {handleClick}
        initial ={ { opacity: 0}}
        animate ={ {opacity: 1} }
        > 
        <motion.img src ={ selectedImg } alt ="Zoomed pic" 
        initial = { { y:"-100vh" }}
        animate ={ { y: 0 } }
        />
        </motion.div>
    );
};

export default Modal;