function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(celsiusValue)) {
      const fahrenheit = (celsiusValue * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
    
    if (!isNaN(fahrenheitValue)) {
      const celsius = (fahrenheitValue - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  