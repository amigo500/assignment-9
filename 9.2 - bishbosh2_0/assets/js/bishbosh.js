
function mysubmit()
{
        
        
        var loopnumber = parseInt(document.getElementById("loopnumberInput").value);
        var firstnumber = parseInt(document.getElementById("firstnumberInput").value);
        var secondnumber = parseInt(document.getElementById("secondnumberInput2").value);
    var x;
    var output;
    if ((isNaN(loopnumber) || x < 1) || (isNaN(firstnumber) || x < 1) || (isNaN(secondnumber) || x < 1))
    {
    output = "Wrong input";
      } 
    else {
            console.log(loopnumber);
            var result ="";
            for (var i = 1; i <= loopnumber; i++)
            {
               var n=i;

                if (i%firstnumber===0) 
                {
                 n="Bish";

                }
                if (i%secondnumber===0) 
                {
                 n="Bosh";
                }
                if( (i%firstnumber===0)  && (i%secondnumber===0) )
                {
                  n="Bish-Bosh";
                }

                result = result+n+ " , ";
          
        }
        
      result = result.slice(0, -1);
      output = result;
    }
    result = result.slice(0, -1);
    document.getElementById("result").innerHTML =output;
        
    }
