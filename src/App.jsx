import { Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import TextInput from './components/TextInput'


const App = () => {
  // Keywords extracted, modal state, loader state
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = (text) => {
    console.log(text)
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      
    }
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;

