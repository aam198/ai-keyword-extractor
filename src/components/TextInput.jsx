import {useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const TextInput = () => {
  // To store text that the user inputs and updating text state from Textarea onChange
  const [text, setText] = useState('');

  const submitText = () => {
    console.log('submit');
  }
  
  return(
    <>
      <Textarea 
        bg='blue.400' 
        padding={4} 
        marginTop={6}
        height={200} 
        color='white' 
        value={text} 
        onChange={(e) => setText(e.target.value)}/>

      <Button 
        bg='blue.500' 
        color='white'
        marginTop={4} 
        width='100%' 
        _hover={{ bg: 'blue.700' }} 
        onClick={submitText}>
        
        Extract Keywords
      </Button>
    </>
  )
}

export default TextInput;