const form=document.querySelector('form');

form.addEventListener('submit',function(e){
   e.preventDefault();

    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.getElementById('weight').value);
    let result=document.querySelector('#results');
    let bmi;

    if(height=='' || height < 0 || isNaN(height))
    {
        //result.value="give valid height";  or
        document.querySelector('#results').value="give valid height";
    }
  
    else if(weight=='' || weight < 0 || isNaN(weight))
    {
        result.value="give valid weight";
    }
    else
    {
        bmi=(weight/((height*height)/10000)).toFixed(2);
        //results
        result.value=`${bmi}`;
    }

    const giude=document.getElementById('guide');
    if(bmi<=18.6)
    {
        giude.innerHTML="<h2>Under Weight</h2>"
        giude.style.color='white';
    }
    else if(bmi>18.6 && bmi<=24.9)
    {
        giude.innerHTML="<h2>NORMAL Weight</h2>"
        giude.style.color='white';
    }
    else
    {
        giude.innerHTML="<h2>OverWeight Weight</h2>"
        giude.style.color='white';
    }
});