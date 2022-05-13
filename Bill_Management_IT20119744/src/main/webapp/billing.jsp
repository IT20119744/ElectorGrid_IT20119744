<%@ page import="com.Billing"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Billing Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/billing.js"></script>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-6">

<h1>Billing Management</h1>

<form id="formBilling" name="formBilling" >

Meter Number:
<input id="meterNumber" name="meterNumber" type="text" class="form-control form-control-sm">
<br>

Consumer Name:
<input id="consumerName" name="consumerName" type="text" class="form-control form-control-sm">
<br>

Address:
<input id="address" name="address" type="text" class="form-control form-control-sm">
<br>

Duration Period:
<input id="durationPeriod" name="durationPeriod" type="text" class="form-control form-control-sm">
<br>

Number of Units:
<input id="noOfUnits" name="noOfUnits" type="text" class="form-control form-control-sm">
<br>

Total Amount:
<input id="totalAmount" name="totalAmount" type="text" class="form-control form-control-sm">
<br>

<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">

<input type="hidden" id="hidBillIDSave" name="hidBillIDSave" value="">

</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>

<div id="divBillingGrid">
<%
Billing billObj = new Billing();
out.print(billObj.readBills());
%>
</div>

</div>
</div>
</div>
</body>
</html>