function MenuChoice()
{
     if (document.getElementById("menu").value == "New Customer")
     {
        document.getElementById("newcust").style.visibility = "visible";
        document.getElementById("shipchange").style.visibility = "hidden";
        document.getElementById("deletecust").style.visibility = "hidden";
     }
     else if (document.getElementById("menu").value == "Change Ship-To")
     {
        document.getElementById("newcust").style.visibility = "hidden";
        document.getElementById("shipchange").style.visibility = "visible";
        document.getElementById("deletecust").style.visibility = "hidden";
     }
     else if (document.getElementById("menu").value == "Delete Customer")
     {
        document.getElementById("newcust").style.visibility = "hidden";
        document.getElementById("shipchange").style.visibility = "hidden";
        document.getElementById("deletecust").style.visibility = "visible";
     }
     else
     {
      document.getElementById("newcust").style.visibility = "hidden";
      document.getElementById("shipchange").style.visibility = "hidden";
      document.getElementById("deletecust").style.visibility = "hidden";
     }
}


////////////////////////

function MakeNewCustomer()
{
    
     var objRequest = new XMLHttpRequest();
     var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer"
     
      var customerid = document.getElementById("custid").value;
       var customername = document.getElementById("custname").value;
       var customercity = document.getElementById("custcity").value;
       
       
       var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'", "CustomerCity":"' + custcity +'"}';
       
       objRequest.onreadystatechange = function()
       {
            if (objRequest.readyState == 4 && objRequest.status == 200)
                {
                    var result = JSON.parse(objRequest.responseText);
                    OperationResult(result);
                }
       }
      
       objRequest.open("POST", url, true);
      objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
       objRequest.send(newcustomer);
       
       function OperationResult(output)
       {
         if (output.WasSuccessful == 1)
         {
             document.getElementById("result").innerHTML = "The operation was successful!"
         }
         else
         {
            document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception
         }
       }
       
}




///////////////////////////////////

function ChangeShip()

{
      var objRequest = new XMLHttpRequest();
     var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress"
     
      var customerid = document.getElementById("orderid").value;
       var shiptoname = document.getElementById("shipname").value;
       var shiptoaddress = document.getElementById("shipaddress").value;
       var shiptocity = document.getElementById("shipcity").value;
       var shiptocode = document.getElementById("postcode").value;
       
       
       var updateship = '{"OrderID":"' + orderid + '", "ShipAddress":"' + shipaddress +'","ShipCity":"' + shipcity +'","ShipName":"' + shipname +'","ShipPostcode":"' + postcode +'"}';
       
       objRequest.onreadystatechange = function()
       {
            if (objRequest.readyState == 4 && objRequest.status == 200)
                {
                    var result = JSON.parse(objRequest.responseText);
                    OperationResult(result);
                }
       }
      
       objRequest.open("POST", url, true);
      objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
       objRequest.send(updateship);
       
       function OperationResult(output)
       {
        if (output.WasSuccessful == 1)
         {
             document.getElementById("result2").innerHTML = "The operation was successful!"
         }
         else
         {
            document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception
         }
       }
    
}

////////////////////////////////////

function DeleteCustomer()

{
      var objRequest = new XMLHttpRequest();
      var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
      url += document.getElementById("deleteid").value;
      var x = confirm("Are you sure you want to delete this user?");


      objRequest.onreadystatechange = function(){
             if (objRequest.readyState == 4 && objRequest.status == 200){
                  var result = JSON.parse(objRequest.responseText);
                  if(x == true){
                       
                        if (result.WasSuccessful == 1)     {
                              document.getElementById("result3").innerHTML = "The operation was successful!";
                        }
                        else{
                              document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + result.Exception;
                        }
                  }
            }
      }
        objRequest.open("GET", url, true);
        objRequest.send();
      
}







