function start(){
  var str = String(document.getElementById('inp').value);
  const val = document.getElementById('ans');
  var k=0, j=0, i=0, z=0, c=0;
  var user_inp = str.split("");
  console.log(user_inp);
  var stack = [];
  function setCharAt(str,index,chr) {
      if(index > str.length-1) return str;
      return str.substring(0,index) + chr + str.substring(index+1);
  }
  function check(){
      
   for(z=0; z<str.length; z++)
     if(stack[z]=='i' && stack[z+1]=='d')
       {
         stack[z]='E';
         stack[z+1]='\0';
         let st = stack.join(" ");
          let inp = user_inp.join(" ");
         ans +="<tr><td>"+st+"</td><td>"+inp+"</td><td>REDUCE</td></tr>";
         j++;
       }
       for(z=0; z<str.length; z++)
     if(stack[z]=='(' && stack[z+1]=='E' && stack[z+2]==')')
       {
         stack[z]='E';
         stack[z+1]='\0';
         stack[z+2]='\0';
         let st = stack.join(" ");
            let inp = user_inp.join(" ");
         ans += "<tr><td>"+st+"</td><td>"+inp+"</td><td>REDUCE</td></tr>";
         i=i-2;
       }
   
   for(z=0; z<str.length; z++)
     if(stack[z]=='E' && stack[z+1]=='*' && stack[z+2]=='E')
       {
         stack[z]='E';
         stack[z+1]='\0';
         stack[z+2]='\0';
         let st = stack.join(" ");
            let inp = user_inp.join(" ");
         ans += "<tr><td>"+st+"</td><td>"+inp+"</td><td>REDUCE</td></tr>";
         i=i-2;
       }
   
       for(z=0; z<str.length; z++)
       if(stack[z]=='E' && stack[z+1]=='+' && stack[z+2]=='E')
         {
           stack[z]='E';
           stack[z+1]='\0';
           stack[z+2]='\0';
           let st = stack.join(" ");
              let inp = user_inp.join(" ");
           ans += "<tr><td>"+st+"</td><td>"+inp+"</td><td>REDUCE</td></tr>";
           i=i-2;
         }
  }
  let ans = '<table>';
  ans += "<tr><th>Stack</th><th>Input</th><th>Action</th></tr>";
  for(k=0,i=0;j<str.length;k++,i++,j++){
      if(user_inp[j]=='i' && user_inp[j+1]=='d')
         {
            stack[i]=user_inp[j];
            stack[i+1]=user_inp[j+1];
            stack[i+2]='\0';
            user_inp[j]=' ';
            user_inp[j+1]=' ';
            let st = stack.join(" ");
            let inp = user_inp.join(" ");
            ans += "<tr><td>"+st+"</td><td>"+inp+"</td><td>SHIFT</td></tr>";
            check();
         }
       else
         {
            stack[i]=user_inp[j];
            stack[i+1]='\0';
            user_inp[j]=' ';
            let st = stack.join(" ");
            let inp = user_inp.join(" ");
            ans += "<tr><td>"+st+"</td><td>"+inp+"</td><td>SHIFT</td></tr>";
            
            check();
         }
  }
  check();
  if(stack[0] == 'E' && stack[1] == '\0'){
      ans += "<tr><td>ACCEPTED</td><td>ACCEPTED</td><td>ACCEPTED</td></tr></table>";
  }
else{
      ans += "<tr><td>REJECTED</td><td>REJECTED</td><td>REJECTED</td></tr></table>";
  }
  val.innerHTML=ans;
  

  
  
}



