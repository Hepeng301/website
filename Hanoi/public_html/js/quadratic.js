
function quadratic(a,b,c)
{
    if(a == 0)
    {
        if(b == 0)
        {
            if(c == 0)
            {
                document.write("a=b=c:any x solves the equation<br>");
            }
            else
            {
                 alter("a=b=0,c!=0:the equation has no solutions<br>");
            }
        }
        else
        {
            document.write("a = 0,b!=0: the solution is x="+0+"<br>");
        }
    }
    else
    {
        let delta = Math.pow(b,2) - 4*a*c;
        if (delta < 0)
        {
            document.write("delta<0: the solution has no solution<br>");
        }
        else if (delta == 0)
        {
            document.write("delta-0: the only solution is x="+(-b/2/a)+"<br>");
        }
        else
        {
            document.write("delta-0: two solution x1"+((-b+Math.sqrt(delta))/2/a)+
            +",x2="
            +((-b-Math.sqrt(delta)/2/a)+"<br>"));
        }
    }
    quadratic(1,0,-1);
    quadratic(5,2,3);
    for (let i=0; i<100; i++)
    {
        quadratic(Math.random(),Math.random(),Math.random());
    }
    function monthName2Number(monthName)
    {
        switch(monthName)
        {
            case"Jan":
            case"jan":
            case"January":
                num = 1;
                break;
            case"Feb":
            case"feb":
            case"February":
                num=2;
                break;
            case"Apr":
            case"apr":
            case"April":
                num=4;
                break;
            case"May":
                num=5;
                break;
            case"June":
                num=6;
                break;
            case"July":
                num = 7;
                break;
            case"Aug":
                num = 8;
                break;
            case"Sep":
                num = 9;
            case"OCt":
                num = 10;
                break;
            case"Nov":
                num = 11;
                break
            case"DEc":
                num = 12;
                break;
            default:
                num = -1;
        }
        return num;
    }
document.write("Feb is month"+monthNameNumber('Feb')+"<br>");
document.write("xyz is month"+monthNameNumber('xyz')+"<br>");
let mn2d = {"Jan":1,"Feb":2,"Mar":3,
            "Apr":4,"May":5,"JUN":6,
            "july":7,"Aug":8,"Sep":9,
            "Oct":10,"Nov":11,Dec:"12"};
 function monthName2Num(monthName)
 {
    let i  = mn2d[monthName];
    if (i == null) return -1;
    return i;
 }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    