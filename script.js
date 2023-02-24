const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep)
{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }

    else if(currentStep == 2)
    {
       dNone = secondDiv;
    }

    else
    {
        dNone = finalDiv;
    }

    dNone.style.display = 'none';

    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }

    else if(nextStep == 2)
    {
       dBlock = secondDiv;
    }

    else
    {
        dBlock = finalDiv;
    }

    dBlock.style.display = 'block';
}

function validate () 
{
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border ='none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value) 
    {   

        if(!peso.value && !altura.value)
        {
            peso.style.border ='1px solid red';
            altura.style.border ='1px solid red';

            console.log('Sem valores de peso e altura!')
            alert('Preencha todos os campos!')
        }
        else if(!peso.value)
        {
            peso.style.border ='2px solid red';
            console.log('Sem valor de peso');
            alert('Hey! Não esqueça de adicionar o seu peso!');
        }
        else 
        {
            altura.style.border ='2px solid red';
            console.log('Sem valor de altura');
            alert('Hey! Não esqueça de adicionar a sua altura!');
        }
    }

    else {
        let imc = peso.value/(altura.value * altura.value);
        const result = document.getElementById('resultado');

        console.log(imc);

        if(imc < 18.5)
        {
            console.log('Magreza | Obesidade (Grau): 0');
            result.innerHTML = 'Magreza | Obesidade: 0';
            result.style.color = 'orange';
        }

        else if (imc >= 18.5 && imc < 25) 
        {
            console.log('Normal | Obesidade (Grau): 0');
            result.innerHTML = 'Normal | Obesidade: 0';
            result.style.color = 'green';

        }

        else if (imc >= 25 && imc < 30) 
        {
            console.log('Sobrepeso | Obesidade (Grau): 1');
            result.innerHTML = 'Sobrepeso | Obesidade: 1';
            result.style.color = 'orange';

        }

        else if (imc >= 30 && imc < 40) 
        {
            console.log('Obesidade | Obesidade (Grau): 2');
            result.innerHTML = 'Obesidade | Obesidade: 2';
            result.style.color = 'red';
        }

        else if (imc >= 40) 
        {
            console.log('Obesidade Gravíssima | Obesidade (Grau): 3');
            result.innerHTML = 'Obesidade Gravíssima| Obesidade: 3';
            result.style.color = 'red';
        }
        go(2,3);

    }
}