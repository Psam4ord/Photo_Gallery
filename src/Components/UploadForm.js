import React, { useState } from 'react';

const UploadForm = () => {
            //initially, file is empty 
    const [file, setFile] = useState(null);
    const [error,setError] = useState(null);


    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
    let selected = e.target.files[0]; 

    if (selected && types.includes(selected.type)) {
        setFile(selected);
        setFile('');
    } else {
        setFile(null);
        setError ('Invalid file type; ( select a png or jpeg format )');
       }
  
    };

    return (
        <form> 
        <label>
        <input type = "file" onChange = {handleChange} />
        <span> + </span>
        </label>
    
        <div className='output'>
        { error && <div className ="error">{error} </div> }
        { file && <div> { file.name } </div> } 
        {file && <progressBar file= {file} setFile= {setFile } />}
        </div>
       
        </form>
    );
};

export default UploadForm;