// server.ts
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors'

const app = express();
app.use(cors())
const PORT = 3001;

app.get('/api/calcular', async (req: Request, res: Response) => {
  const num1 = parseFloat(req.query.num1 as string);
  const num2 = parseFloat(req.query.num2 as string);
  const operador = req.query.operador as string;
    console.log(num1, num2, operador);
  if (isNaN(num1) || isNaN(num2) || !operador) {
    res.status(400).json({ error: 'Parámetros inválidos.' });
    return;
  }

  let resultado: number;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        res.status(400).json({ error: 'División entre cero no permitida.' });
      }
      resultado = num1 / num2;
      break;
    default:
      res.status(400).json({ error: 'Operador no válido.' });
      return;
    
  }
console.log(resultado);
  res.status(200).json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//IDENTIFICACION MENSAJE
//CAROLINA ORTEGA A01282386

//ACTIVIDAD CLEINTE SERVIDOR CON FRONT END Y BACK END
//MARZO 13-> ACTIVIDAD EN CLASE 