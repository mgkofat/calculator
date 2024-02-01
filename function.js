function addDisplay(x) { 
  if (document.calc.display.value == '0' && x == '00') {
    document.calc.display.value = '0';
  } else {
    if (document.calc.display.value == '0') {
      document.calc.display.value = '';
    }
    document.calc.display.value += x;
  }
}


function clearDisplay(x)
{   
    document.calc.display.value = '0';
}

function delDisplay()
{   if(document.calc.display.value == 'error')
        document.calc.display.value = '0'
    else
        {
         let currentDisplay = document.calc.display.value;
         document.calc.display.value = currentDisplay.slice(0, -1);
         if(document.calc.display.value == '')
            document.calc.display.value = '0';
        }
        
}

function equalDisplay()
{   try{
        document.calc.display.value = eval(document.calc.display.value);
        }   
    catch (error)
        {
         document.calc.display.value = 'error';
        }
}