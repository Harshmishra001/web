import React, { useState, useCallback, memo } from 'react';

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback( () => {      //usecallback lgagya taaki baar baar handleclick function recreate na ho memory m
    console.log('Button clicked!');
  },[]);    // yha agr dependency khali ni rkhenge toh jbjb button p click krenge childcomponene rendering dikhega console p

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increase count</button>
      <p>Count: {count}</p>
      <ChildComponent handleclick={handleClick} />   {/* // click me btn h ye */}
    </div>
  );
};

const ChildComponent = memo(({handleclick}) => { // memo is needed to prevent child re-rendering
  // jo concole p button click likkha ara h btn clik krte hi or jitni baar kr re h bdh ra h vhi toh memo yaad rkh ra h ki 2 baar bdha kyuki 2 baar click kiya bnde n...
  console.log('ChildComponent rendering...');
  return <button onClick={handleclick}>click me</button>;
});

export default CallbackExample;

// `useCallback` hook React mein functions ko memoize karne ke liye use hota hai, taaki har render ke saath functions ka naya instance create na ho. Yeh tab beneficial hota hai jab aap functions ko child components ko props ke roop mein pass karte ho, kyunki yeh performance ko optimize kar sakta hai aur unnecessary re-renders ko avoid kar sakta hai.

// Agar aap `useCallback` ka use nahi karte, toh `handleClick` function har render pe dobara recreate hota hai. Jaise hi `CallbackExample` component render hota hai (for example, jab `count` state change hota hai), `handleClick` ka ek naya instance memory mein create hota hai. Chahe function ka logic same rahe, lekin uska reference change ho jata hai, iska matlab hai ki yeh pehle wale `handleClick` se referentially equal nahi hota. Agar aap yeh naya `handleClick` function `ChildComponent` ko prop ke roop mein pass karte ho, toh React isse ek naya prop samajhta hai (kyunki reference change ho gaya), aur child component ko dobara render kar dega.

// **`useCallback` ke saath:** Jab aap `handleClick` ko `useCallback` se wrap karte ho, toh yeh ensure hota hai ki `handleClick` ka reference render ke across same rahega, jab tak dependencies change nahi hoti (is case mein, dependency array khali hai, matlab yeh kabhi change nahi hoga). Iska matlab hai ki `handleClick` har bar `CallbackExample` ke render hone par same reference rakhega, aur React ise `ChildComponent` ke liye ek naya prop nahi samjhega, isliye child component ko unnecessary render nahi hoga.