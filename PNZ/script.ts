function pnz()
{
    const numref:HTMLInputElement=document.getElementById("num") as HTMLInputElement;
    const n:number=parseInt(numref.value);
    if(n>0)
    {
        alert(`The given number ${n} is Positive`);
    }
    else if(n==0)
    {
        alert(`The given number ${n} is Zero`);
    }
    else
    {
        alert(`The given number ${n} is Negative`);
    }
}