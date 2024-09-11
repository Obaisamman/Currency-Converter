import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Container, Typography, Box, Paper, IconButton } from '@mui/material';
import { SwapHoriz } from '@mui/icons-material'; 

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const apiKey = 'KEY_HERE'; 

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies([...Object.keys(data.conversion_rates)]);
      })
      .catch((error) => console.error('Error fetching currencies:', error));
  }, [apiKey]);

  useEffect(() => {
    if (amount > 0) {
      fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
        .then((res) => res.json())
        .then((data) => {
          setConvertedAmount(data.conversion_result);
        })
        .catch((error) => console.error('Error converting currency:', error));
    }
  }, [fromCurrency, toCurrency, amount, apiKey]);

  
  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '30px', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Currency Converter
        </Typography>

        <Box mb={2}>
          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Box>

        <Box mb={2} display="flex" alignItems="center">
          <TextField
            select
            label="From"
            fullWidth
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </TextField>

          <IconButton
              onClick={swapCurrencies}
              aria-label="swap currencies"
              sx={{
                mx: 2,
                transition: 'transform 0.3s ease', 
                '&:hover': { transform: 'rotate(180deg)' }, 
              }}
            >
            <SwapHoriz />
          </IconButton>

          <TextField
            select
            label="To"
            fullWidth
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {convertedAmount && (
          <Typography variant="h6" mt={3}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default App;
