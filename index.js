    var N;
    var Res;
    var Result = document.getElementById("Res");
    var C
function chet()
{
    var fir = document.getElementById("First").value;
    var M = document.getElementById("Second").value;
    var fou = document.getElementById("Fourth").value;
    var thi = document.getElementById("Third").value;
    var N2 = ((fir - 1) * (thi - 1));
    console.log("N2 = " +N2);
    var flag = false;
    for(var i = 2; i < fou; i++)
    {   
            console.log(i);
        if(fou % i != 0 || N2 % i != 0 && N2 % fou != 0)
        {

            flag = true;
            
        }
        else
        {
            console.log("E не взаимно простые с (p - 1)(q-1)");
        }
  
    if(fir != " " && flag )
    {   
        
        fir = Number(fir);
        thi = Number(thi);
            if(fir % thi >= 1)
            {
                 N = fir * thi;
                 console.log("N = " + N);
                 console.log("Ключ(" + fou +","+ N+")")
                  
            }
            else
            {
                Result.innerHTML = "Результат: P и Q не взаимно простые";
                
            }
    
   
            var Rol = M ** fou;
            console.log("M = "+M);
            console.log("Rol = "+Rol) 
             if(Rol % N >= 1)
                {
                     C =  Rol % N;
                    Result.innerHTML = "Результат: " + C;
                    break;
                    
                }
                
        }     
        }

    
}

function unchet()
{ 
    var fir = document.getElementById("First").value;
    var fou = document.getElementById("Fourth").value;
    var thi = document.getElementById("Third").value;
    var d ;
    var N = ((fir - 1) * (thi - 1));
    var N2 = thi * fir;
    
    console.log("N2 = " + N2);
    d = fou % N;
    console.log("d = "+d);
        
    
    if(N % fou != 0)
    {
        
       var m = fou * d;
        console.log("m = "+m);
        
        if(m % N != 0) 
        {   
            console.log("C = "+ C + "d = " + d)
            var M = C ** d;
            console.log("M = "+ M );
            var Ma = M % N2;
            console.log("N2 = " + N2);
            console.log("Ma = "+Ma);
            Result.innerHTML = ("Результат: "+ "M = " + Ma );
             
        }
        
         
    }
    else
    {
        console.log("Ошибка в результате");
    }
}

