$(document).on("click","#btnSave",function(event)
{
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	var status = validateBillingForm();
	if(status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	var type = ($("#hidBillIDSave").val() == "") ? "POST" : "PUT";
	$.ajax(
		{
			url : "BillingAPI",
			type : type,
			data : $("#formBilling").serialize(),
			dataType : "text",
			complete : function(response, status)
			{
				onBillSaveComplete(response.responseText, status);
			}
		});
});

function onBillSaveComplete(response, status)
{
	if(status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successsfully saved.");
			$("#alertSuccess").show();
			
			$("#divBillingGrid").html(resultSet.data);
		}else if(resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}else if(status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	}else
	{
		$("#alertError").text("Unknown error while saving.");
		$("#alertError").show();
	}
	$("#hidBillIDSave").val("");
	$("#formBilling")[0].reset();
}

$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidBillIDSave").val($(this).data("billingid"));
	$("#meterNumber").val($(this).closest("tr").find('td:eq(0)').text());
	$("#consumerName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#address").val($(this).closest("tr").find('td:eq(2)').text());
	$("#durationPeriod").val($(this).closest("tr").find('td:eq(3)').text());
	$("#noOfUnits").val($(this).closest("tr").find('td:eq(4)').text());
	$("#totalAmount").val($(this).closest("tr").find('td:eq(5)').text());
});


$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
		{
			url : "BillingAPI", 
 			type : "DELETE", 
 			data : "billingID=" + $(this).data("billingid"),
 			dataType : "text", 
 			complete : function(response, status)
 			{
				onBillDeleteComplete(response.responseText, status);
			}
		});
});


function onBillDeleteComplete(response, status)
{
	if(status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successsfully deleted.");
			$("#alertSuccess").show();
			$("#divBillingGrid").html(resultSet.data);
		}else if(resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}else if(status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	}else
	{
		$("#alertError").text("Unknown error while deleting.");
		$("#alertError").show();
	}
}

function validateBillingForm(){
	if ($("#meterNumber").val().trim() == "")
	{
		return "Insert Meter Number";
	}
	else
	{
		$("#meterNumber")
	}
	
	if ($("#consumerName").val().trim() == "")
	{
		return "Insert Consumer Name"
	}
	
	if ($("#address").val().trim() == "")
	{
		return "Insert Address";
	}
	
	if ($("#durationPeriod").val().trim() == "")
	{
		return "Insert Duration Period";
	}
	
	if ($("#noOfUnits").val().trim() == "")
	{
		return "Insert Number of units";
	}
	
	if ($("#totalAmount").val().trim() == "")
	{
		return "Insert total amount";
	}
	
	return true;
}