function Check():void{
    const n1:HTMLInputElement=document.getElementById("n1") as HTMLInputElement;
    const num:number=parseInt(n1.value);
    console.log(num);
    if(num%2==0)
    {
        alert(`${num} is an Even Number`);
    }
    else
    {
        alert(`${num} is an Odd Number`);
    }
}