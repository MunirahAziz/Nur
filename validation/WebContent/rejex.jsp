<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
     String email = (String)request.getParameter("email");
     int checking = 0;
     String password = (String)request.getParameter("password");
     char[] emailch = email.toCharArray();
     char[] passwordch = password.toCharArray();

     for(int x = 0; x < email.length(); x++){
       if(emailch[x] == '*' || emailch[x] == '%' || emailch[x] == '^' ||  emailch[x] == '#' || emailch[x] == '$' || emailch[x] == '!' || emailch[x] == '+' || emailch[x] == '='){checking = 1;}
     }

     for(int x = 0; x < password.length(); x++){
        if(passwordch[x] == '*' || passwordch[x] == '%' || passwordch[x] == '^' ||  passwordch[x] == '#' || passwordch[x] == '$' || passwordch[x] == '!' || passwordch[x] == '+' || passwordch[x] == '='){checking = 1;}
     }

    if(checking == 1){
      %> You cannot use special characters (*, %, ^, #, $, !, +, =). <br> <%
    }
    if(email.equals("Abrar") && password.equals("Abrar") && checking == 0){
      %>Welcome Abrar!<%
    }
    else if(email.equals("Abrar")){
      %>Wrong Password, please try again.<%
    }
    else{
      %>Incorrect information or input! please try again.<%
    }


    //out.println("email:" + email + " password:" + password);
    %>

    <form class="" action="rejex.jsp" method="post">
      <input type="submit" name="" value="return">
    </form>
</body>
</html>