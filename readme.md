```javascript
 fetch(`https://viacep.com.br/ws/${userCep}/json`)
    .then((response) => response.json())
    .then((endereco) => {
        box.value = endereco.
    })
})
```