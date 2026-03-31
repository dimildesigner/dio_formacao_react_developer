import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

// C - Limpar tudo
  const handleOnClear = () => {
    setCurrentNumber('0') 
    setFirstNumber('0')
    setOperation('') 
  };

// CE - Limpa apenas o último número clicado
  const handleClearEntry = () => {
    setCurrentNumber('0');
  };

 // +/- - Inverte o sinal do número atual
  const handleToggleSign = () => {
    setCurrentNumber(prev => String(Number(prev) * -1));
  };

// % - Porcentagem
  const handlePercentage = () => {
    setCurrentNumber(prev => String(Number(prev) / 100));
  };

// Adicionar números
  const handleAddNumber = (num) => {
    // A verificação deve acontecer ANTES de qualquer tentativa de atualização de estado
    if (num === '.' && currentNumber.includes('.')) return;

    setCurrentNumber(prev => `${prev === '0' && num !== '.' ? '' : prev}${num}`)
  };

// Soma
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')      
    }
  };

// Subtração
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }
    else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')      
    }
  };

// Multiplicação
  const handleMultiNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }
    else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')      
    }
  };

  // Divisão
  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }
    else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')      
    }
  };
  
  // Igual
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;

          case '-':
            handleMinusNumbers();
            break;

          case '*':
            handleMultiNumbers();
            break;

          case '/':
            handleDivNumbers();
            break;

          default:
            break;
        }
    }
  };


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        
        <Row>
          <Button label="%" onClick={handlePercentage} />
          <Button label="CE" onClick={handleClearEntry} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={handleDivNumbers} />          
        </Row>        
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={handleMultiNumbers} />          
        </Row>        
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />          
        </Row>        
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />          
        </Row>
        <Row>
          <Button label="+/-" onClick={handleToggleSign} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />          
        </Row>

      </Content>      
    </Container>
  );
}

export default App;