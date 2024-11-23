import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  const users = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 28,
      "profession": "Software Developer",
      "profilePhoto": "https://example.com/profiles/alice.jpg"
    },
    {
      "name": "Bob Smith",
      "city": "Los Angeles",
      "age": 34,
      "profession": "Graphic Designer",
      "profilePhoto": "https://example.com/profiles/bob.jpg"
    },
    {
      "name": "Catherine Lee",
      "city": "Chicago",
      "age": 25,
      "profession": "Marketing Specialist",
      "profilePhoto": "https://example.com/profiles/catherine.jpg"
    },
    {
      "name": "David Kim",
      "city": "Seattle",
      "age": 30,
      "profession": "Data Scientist",
      "profilePhoto": "https://example.com/profiles/david.jpg"
    }
  ]


  return (
    <>
      <Navbar />

      <div className='p-5'>
        {users.map((elem, idx) => {
          return <Card
            key={idx} 
            username={elem.name}
            city={elem.city}
            age={elem.age}
            prof={elem.profession}
            photo={elem.profilePhoto}
          />
        })} 
      </div>

      <Footer />
    </>
  )
}

export default App
