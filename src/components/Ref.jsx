
// const Ref = () => {
//     const Input = useRef(null)

//     useEffect(()=>{
//         if(Input.current){
//             Input.current.focus()
//         }
//     },[])

//     function Clickhandle(){
//       alert(`hello mr ${Input.current.value}`)
//     }

//   return (
//     <div>
//       <input type="text" ref={Input}  />
//       <button onClick={Clickhandle}>OK</button>
//       {/* <input type="text" autoFocus/> */}
//     </div>
//   )
// }

// export default Ref

import { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul className='ul-ref'>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
