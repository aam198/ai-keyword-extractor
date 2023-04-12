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

  const extractKeywords = async (text) => {
    console.log(text)
    // Will open modal and display loading spinner
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        // Setting OpenAi model
        model: 'text-davinci-003',
        // Passing in a prompt with direction prior to actual text from user input.
        prompt: 
          'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas: \n\n' + 
          text + '',
        //Temperature controls random and creative responses. 
        temperature: 0.5,
        // Max number of words with response from api
        max_tokens: 60,
        // control the diversity of returned text
        top_p: 1.0,
        // decrease repeated phrases or words another 0-1 range
        frequency_penalty: 0.8,
        // decreases words used in the phrase
        presence_penalty: 0.0,
      }),
    }
    
    try {
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
      const json = await response.json();
      console.log(json.choices[0].text.trim());
      setKeywords(json.choices[0].text.trim());
      setLoading(false);
    }
    catch (error){
      console.log(error);
    }
  };

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

