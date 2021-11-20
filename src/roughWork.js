// import { storage } from "firebase";
// import React, { useState } from "react";

// import { firebase } from '../../Backend/firebase';


// const LoginUser = (props) => {
//     console.log(props)

//     const [img, setImg] = useState(null);

//     const handleChange = (e) => {
//         if(e.target.files[0]) setImg(e.target.files[0]);
//     }

//     const handleUpload = () => {
//         const uploadTask = firebase.storage().ref(`/images/${img.name}`).put(img);
//         uploadTask.on(
//             "state_changed",
//             snapshot => {},
//             error=> {
//                 console.log(error);
//             },
//             () => {
//                 storage.ref("images").child(img.name)
//                 .getDownloadURL().then( url => console.log(url) )
//             }
//         )
//     }

//     // console.log(`The Image URL path:/${img.name}`);

//     return (
//         <div>

//             <input id="f02" type='file' placeholder="Image" onChange={handleChange} />
//             <label for="f02">Add Image</label>

//             <button onClick={handleUpload} style={{marginLeft: "134px"}}>Send</button>

//         </div>
//     )
// }

// // export default LoginUser;