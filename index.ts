import exprees from 'express'


const app = exprees();
app.use(exprees.json());

app.get("/",(req, res) => {
    res.send('Hello World');
    
  });

app.post("/calcular",(req, res) => {
  const operacion = req.body;
  console.log(operacion);

  if (operacion.operacion === "suma"){

    return res.send({resultado: operacion.a + operacion.b});

  }else if(operacion.operacion === "resta"){

    return res.send({resultado: operacion.a - operacion.b});
  }else if(operacion.operacion === "division"){

    return res.send({resultado: operacion.a / operacion.b});
  }else if(operacion.operacion === "multiplicacion"){

    return res.send({resultado : operacion.a * operacion.b});
  }


});

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});


