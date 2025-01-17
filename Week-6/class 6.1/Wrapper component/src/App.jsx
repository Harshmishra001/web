function App() {

  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}

export default App

// React mein **wrapper components** ka use kiya jata hai taaki common styling ya thematic elements ko encapsulate aur group kiya ja sake, jo application ke different parts mein consistently apply karne ki zarurat hoti hai. Yeh components specific content ke liye containers ki tarah kaam karte hain, jisme hum styling ya layout ko manage kar sakte hain.