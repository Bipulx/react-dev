// import React, { useState, Fragment, useEffect } from "react";

// const ImageFetch = () => {
//   const [imageData, setImageData] = useState("");

//   useEffect(() => {
//     fetch("s3domain/relative-path/filename.jpg")
//       .then((response) => response.blob())
//       .then((image) => {
//         // Create a local URL of that image
//         const localUrl = URL.createObjectURL(image);
//         setImageData(localUrl);
//       });
//   }, []);

//   return (
//     <Fragment>
//       <img src={imageData} alt="image of post" />
//     </Fragment>
//   );
// };

// export default ImageFetch;
