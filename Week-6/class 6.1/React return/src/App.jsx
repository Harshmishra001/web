
function App() {
    return (
      <div>
        <Header title="my name is harkirat" />
        <Header title="My name is raman" />
      </div>
  
  
  
  // It will show error as we can return only a single top level xml
    //    <div>
    //    <Header title="my name is harkirat" />
    //    <Header title="My name is raman" />
    //  </div>
  
  // To remove extra div we can use
    //    <> or <React.Fragment>
    //    <Header title="my name is harkirat" />
    //    <Header title="My name is raman" />
    //    </> or </React.Fragment>
  
    )
  }
  
  function Header({title}) {
    return <div>
      {title}
    </div>
  }
  
  export default App
  
  // React mein ek component sirf ek single root element return kar sakta hai, jo aam tor pe ek parent container (jaise div) ke andar wrap hota hai. Yeh rule isliye hai kyunki React ko ek single entry point chahiye hota hai taaki wo component ka output render aur manage kar sake.

  // Iska sabse bada reason **Reconciliation** hai. React ka single-root element rule reconciliation process ko asaan banata hai, jahan React efficiently real DOM ko virtual DOM ke changes ke hisaab se update karta hai. Ek single root element hone se, React purane aur naye virtual DOM ke states ko aasani se compare kar pata hai.
  
  // Jabki ek single root element required hai, React ek feature provide karta hai jise **fragments** kaha jata hai (`<>...</>` ya `<React.Fragment>...</React.Fragment>`). Isse aap multiple elements ko group kar sakte hain bina real DOM mein extra node add kiye. Fragments DOM mein koi additional parent create nahi karte, par fir bhi single-root rule ko satisfy karte hain.