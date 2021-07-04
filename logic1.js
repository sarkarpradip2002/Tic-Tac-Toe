
function symbol1(){
    change=document.getElementById('firstblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((first=='x'&&second=='x'&&third=='x') || (first=='o'&&second=='o'&&third=='o'))
    {
        if(first=='x'&&second=='x'&&third=='x')
          alert("User win the match")   ;
        else
          alert("Computer win the match")
    }
    else if((first=='x'&&fourth=='x'&&seventh=='x') || (first=='o'&&fourth=='o'&&seventh=='o'))
    {
        if(first=='x'&&fourth=='x'&&seventh=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else if((first=='x'&&fifth=='x'&&ninth=='x') || (first=='o'&&fifth=='o'&&ninth=='o'))
    {
        if(first=='x'&&fifth=='x'&&ninth=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else
    {
    setTimeout(() => {
     if(document.getElementById('secondblockinput').innerHTML=='2' )
    {
        document.getElementById('secondblockinput').innerHTML='o';
    }
    else if(document.getElementById('fourthblockinput').innerHTML=='4')
    {
        document.getElementById('fourthblockinput').innerHTML='o';
    }
    else if(document.getElementById('fifthblockinput').innerHTML=='5')
    {
        document.getElementById('fifthblockinput').innerHTML='o';
    }
    else if(document.getElementById('sixthblockinput').innerHTML=='6')
    {
        document.getElementById('sixthblockinput').innerHTML='o';
    }
    else if(document.getElementById('eighthblockinput').innerHTML=='8')
    {
        document.getElementById('eighthblockinput').innerHTML='o';
    }
    else if(document.getElementById('thirdblockinput').innerHTML=='3')
    {
        document.getElementById('thirdblockinput').innerHTML='o';
    }
    else if(document.getElementById('seventhblockinput').innerHTML=='7')
    {
        document.getElementById('seventhblockinput').innerHTML='o';

    }
    else if(document.getElementById('ninthblockinput').innerHTML=='9')
    {
        document.getElementById('ninthblockinput').innerHTML='o';
    }
},1000);}
}

function symbol2(){
    change=document.getElementById('secondblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((first=='x'&&second=='x'&&third=='x') || (first=='o'&&second=='o'&&third=='o'))
    {
        if(first=='x'&&second=='x'&&third=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((second=='x'&&fifth=='x'&&eighth=='x') || (second=='o'&&fifth=='o'&&eighth=='o'))
    {
        if(second=='x'&&fifth=='x'&&eighth=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else
    {
    setTimeout(() => {
         if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
     else if(document.getElementById('firstblockinput').innerHTML=='1')
    {
        document.getElementById('firstblockinput').innerHTML='o';
    }
    else if(document.getElementById('eighthblockinput').innerHTML=='8')
    {
        document.getElementById('eighthblockinput').innerHTML='o';
    }
    else if(document.getElementById('thirdblockinput').innerHTML=='3')
    {
        document.getElementById('thirdblockinput').innerHTML='o';
    }
    else if(document.getElementById('fourthblockinput').innerHTML=='4')
    {
        document.getElementById('fourthblockinput').innerHTML='o';
    }
    else if(document.getElementById('sixthblockinput').innerHTML=='6')
    {
        document.getElementById('sixthblockinput').innerHTML='o';
    }
    else if(document.getElementById('seventhblockinput').innerHTML=='7')
    {
        document.getElementById('seventhblockinput').innerHTML='o';

    }
    else if(document.getElementById('ninthblockinput').innerHTML=='9')
    {
        document.getElementById('ninthblockinput').innerHTML='o';
    }
},1000);}
}

function symbol3(){
    change=document.getElementById('thirdblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((first=='x'&&second=='x'&&third=='x') || (first=='o'&&second=='o'&&third=='o'))
    {
        if(first=='x'&&second=='x'&&third=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((third=='x'&&sixth=='x'&&ninth=='x') || (third=='o'&&sixth=='o'&&ninth=='o'))
    {
        if(third=='x'&&sixth=='x'&&ninth=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else if((third=='x'&&fifth=='x'&&seventh=='x') || (third=='o'&&fifth=='o'&&seventh=='o'))
    {
        if(third=='x'&&fifth=='x'&&seventh=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else
    {
    setTimeout(() => {
     if(document.getElementById('secondblockinput').innerHTML=='2')
    {
        document.getElementById('secondblockinput').innerHTML='o';
    }
    else if(document.getElementById('sixthblockinput').innerHTML=='6')
    {
        document.getElementById('sixthblockinput').innerHTML='o';
    }
    else if(document.getElementById('fifthblockinput').innerHTML=='5')
    {
        document.getElementById('fifthblockinput').innerHTML='o';
    }
    else if(document.getElementById('firstblockinput').innerHTML=='1')
    {
        document.getElementById('firstblockinput').innerHTML='o';
    }
    else if(document.getElementById('ninthblockinput').innerHTML=='9')
    {
        document.getElementById('ninthblockinput').innerHTML='o';
    }
    else if(document.getElementById('seventhblockinput').innerHTML=='7')
    {
        document.getElementById('seventhblockinput').innerHTML='o';

    }
    else if(document.getElementById('fourthblockinput').innerHTML=='4')
    {
        document.getElementById('fourthblockinput').innerHTML='o';
    }
    else if(document.getElementById('eighthblockinput').innerHTML=='8')
    {
        document.getElementById('eighthblockinput').innerHTML='o';
    }
},1000);}
}

function symbol4(){
    change=document.getElementById('fourthblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((first=='x'&&fourth=='x'&&seventh=='x') || (first=='o'&&fourth=='o'&&seventh=='o'))
    {
        if(first=='x'&&fourth=='x'&&seventh=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((fourth=='x'&&fifth=='x'&&sixth=='x') || (fourth=='o'&&fifth=='o'&&sixth=='o'))
    {
        if(fourth=='x'&&fifth=='x'&&sixth=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else
    {
    setTimeout(() => {
         if(document.getElementById('firstblockinput').innerHTML=='1' )
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
        else if(document.getElementById('sixthblockinput').innerHTML=='6')
        {
            document.getElementById('sixthblockinput').innerHTML='o';
        }
        else if(document.getElementById('seventhblockinput').innerHTML=='7')
        {
            document.getElementById('seventhblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
        else if(document.getElementById('ninthblockinput').innerHTML=='9')
        {
            document.getElementById('ninthblockinput').innerHTML='o';
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
        else if(document.getElementById('eighthblockinput').innerHTML=='8')
        {
            document.getElementById('eighthblockinput').innerHTML='o';
        }
   
},1000);}
}

function symbol5(){
    change=document.getElementById('fifthblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

   
    if((fourth=='x'&&fifth=='x'&&sixth=='x') || (fourth=='o'&&fifth=='o'&&sixth=='o'))
    {
        if(fourth=='x'&&fifth=='x'&&sixth=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((second=='x'&&fifth=='x'&&eighth=='x') || (second=='o'&&fifth=='o'&&eighth=='o'))
    {
        if(second=='x'&&fifth=='x'&&eighth=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else if((first=='x'&&fifth=='x'&&ninth=='x') || (first=='o'&&fifth=='o'&&ninth=='o'))
    {
        if(first=='x'&&fifth=='x'&&ninth=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else if((seventh=='x'&&fifth=='x'&&third=='x') || (seventh=='o'&&fifth=='o'&&third=='o'))
    {
        if(seventh=='x'&&fifth=='x'&&third=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else
    {
    setTimeout(() => {
         if(document.getElementById('firstblockinput').innerHTML=='1')
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
        else if(document.getElementById('seventhblockinput').innerHTML=='7')
        {
            document.getElementById('seventhblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('ninthblockinput').innerHTML=='9')
        {
            document.getElementById('ninthblockinput').innerHTML='o';
        }
        else if(document.getElementById('fourthblockinput').innerHTML=='4')
        {
            document.getElementById('fourthblockinput').innerHTML='o';
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
        else if(document.getElementById('sixthblockinput').innerHTML=='6')
        {
            document.getElementById('sixthblockinput').innerHTML='o';
        }
        else if(document.getElementById('eighthblockinput').innerHTML=='8')
        {
            document.getElementById('eighthblockinput').innerHTML='o';
        }
   
},1000);}
}

function symbol6(){
    change=document.getElementById('sixthblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((third=='x'&&ninth=='x'&&sixth=='x') || (third=='o'&&ninth=='o'&&sixth=='o'))
    {
        if(third=='x'&&ninth=='x'&&sixth=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((fourth=='x'&&fifth=='x'&&sixth=='x') || (fourth=='o'&&fifth=='o'&&sixth=='o'))
    {
        if(fourth=='x'&&fifth=='x'&&sixth=='x')
        alert("User win the match")
        else
        alert('Computer win the match')
    }
    else{
    setTimeout(() => {
        if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
        else if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
        else if(document.getElementById('ninthblockinput').innerHTML=='9')
        {
            document.getElementById('ninthblockinput').innerHTML='o';
        }
        else if(document.getElementById('fourthhblockinput').innerHTML=='4')
        {
            document.getElementById('fourthblockinput').innerHTML='o';
        }
        else if(document.getElementById('firstblockinput').innerHTML=='1')
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('eighthblockinput').innerHTML=='8')
        {
            document.getElementById('eighthblockinput').innerHTML='o';
        }
        else if(document.getElementById('seventhblockinput').innerHTML=='7')
        {
            document.getElementById('seventhblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
   
},1000);}
}

function symbol7(){
    change=document.getElementById('seventhblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((seventh=='x'&&fifth=='x'&&third=='x') || (seventh=='o'&&fifth=='o'&&third=='o'))
    {if(seventh=='x'&&fifth=='x'&&third=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((seventh=='x'&&ninth=='x'&&eighth=='x') || (seventh=='o'&&ninth=='o'&&eighth=='o'))
    {
        if(seventh=='x'&&ninth=='x'&&eighth=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else if((first=='x'&&fourth=='x'&&seventh=='x') || (first=='o'&&fourth=='o'&&seventh=='o'))
    {
        if(first=='x'&&fourth=='x'&&seventh=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else{
    setTimeout(() => {
         if(document.getElementById('fourthblockinput').innerHTML=='4')
        {
            document.getElementById('fourthblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
        else if(document.getElementById('eighthblockinput').innerHTML=='8')
        {
            document.getElementById('eighthblockinput').innerHTML='o';
        }
        else  if(document.getElementById('firstblockinput').innerHTML=='1')
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
        else if(document.getElementById('ninthblockinput').innerHTML=='9')
        {
            document.getElementById('ninthblockinput').innerHTML='o';
        }
        else if(document.getElementById('sixthblockinput').innerHTML=='6')
        {
            document.getElementById('sixthblockinput').innerHTML='o';
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
   
},1000);}
}

function symbol8(){
    change=document.getElementById('eighthblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((second=='x'&&fifth=='x'&&eighth=='x') || (second=='o'&&fifth=='o'&&eighth=='o'))
    {
        if(second=='x'&&fifth=='x'&&eighth=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((seventh=='x'&&ninth=='x'&&eighth=='x') || (seventh=='o'&&ninth=='o'&&eighth=='o'))
    {
        if(seventh=='x'&&ninth=='x'&&eighth=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else{
    setTimeout(() => {
        if(document.getElementById('ninthblockinput').innerHTML=='9')
        {
            document.getElementById('ninthblockinput').innerHTML='o';
        }
        else if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
        else if(document.getElementById('seventhblockinput').innerHTML=='7')
        {
            document.getElementById('seventhblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
       else  if(document.getElementById('firstblockinput').innerHTML=='1')
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('sixthblockinput').innerHTML=='6')
        {
            document.getElementById('sixthblockinput').innerHTML='o';
        }
        else if(document.getElementById('fourthblockinput').innerHTML=='4')
        {
            document.getElementById('fourthblockinput').innerHTML='o';
        }
        else if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
   
},1000);}
}

function symbol9(){
    change=document.getElementById('ninthblockinput').innerHTML='x';
    var first=document.getElementById('firstblockinput').innerHTML;
    var second=document.getElementById('secondblockinput').innerHTML;
var third=document.getElementById('thirdblockinput').innerHTML;
var fourth=document.getElementById('fourthblockinput').innerHTML;
var fifth=document.getElementById('fifthblockinput').innerHTML;
var sixth=document.getElementById('sixthblockinput').innerHTML;
var seventh=document.getElementById('seventhblockinput').innerHTML;
var eighth=document.getElementById('eighthblockinput').innerHTML; 
var ninth=document.getElementById('ninthblockinput').innerHTML;

    if((third=='x'&&ninth=='x'&&sixth=='x') || (third=='o'&&ninth=='o'&&sixth=='o'))
    {
        if(third=='x'&&ninth=='x'&&sixth=='x')
       alert("User win the match")   ;
       else
       alert("Computer win the match")
    }
    else if((seventh=='x'&&ninth=='x'&&eighth=='x') || (seventh=='o'&&ninth=='o'&&eighth=='o'))
    {
        if(seventh=='x'&&ninth=='x'&&eighth=='x')
        alert("User win the match")
        else
        alert("Computer win the match")
    }
    else if((first=='x'&&fifth=='x'&&ninth=='x') || (first=='o'&&fifth=='o'&&ninth=='o'))
    {
        if(first=='x'&&fifth=='x'&&ninth=='x')
        alert("User win the match");
        else
        alert("Computer win the match")
    }
    else{
    setTimeout(() => {
        if(document.getElementById('sixthblockinput').innerHTML=='6')
        {
            document.getElementById('sixthblockinput').innerHTML='o';
        }
        else if(document.getElementById('fifthblockinput').innerHTML=='5')
        {
            document.getElementById('fifthblockinput').innerHTML='o';
        }
        else if(document.getElementById('eighthblockinput').innerHTML=='8')
        {
            document.getElementById('eighthblockinput').innerHTML='o';
        }
         else if(document.getElementById('firstblockinput').innerHTML=='1')
        {
            document.getElementById('firstblockinput').innerHTML='o';
        }
        else if(document.getElementById('thirdblockinput').innerHTML=='3')
        {
            document.getElementById('thirdblockinput').innerHTML='o';
        }
        else if(document.getElementById('seventhblockinput').innerHTML=='7')
        {
            document.getElementById('seventhblockinput').innerHTML='o';
    
        }
        else if(document.getElementById('fourthblockinput').innerHTML=='4')
        {
            document.getElementById('fourthblockinput').innerHTML='o';
        }
        else if(document.getElementById('secondblockinput').innerHTML=='2')
       {
           document.getElementById('secondblockinput').innerHTML='o';
       }
   
},1000);}
}





