// Copyright (c) 2025, Finbyz and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Car Diagnosis", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Car Diagnosis', {
	refresh: function(frm,cdt,cdn) {

		if(frm.doc.workflow_state == "Done" || frm.doc.workflow_state == "Draft"){
			frm.add_custom_button(__("Sales Quotation"), function() {	    		
				frappe.new_doc("Quotation", {
					"party_name": cur_frm.doc.customer_name,
					"transaction_date": frm.doc.date,
					"car_id": frm.doc.name,
				});
			}, __("Create"));
		}

	}	
});

frappe.ui.form.on('Car Diagnosis',{
	onload: function(frm) {
		cur_frm.set_query("assigned_to", function() {
		return {
		"filters": {
			"is_technician": ("=", "1")
		}
		};
	});
	}
});

frappe.ui.form.on('Car Diagnosis',{
	onload: function(frm) {
		cur_frm.set_query("approver", function() {
		return {
		"filters": {
			"is_service_manager": ("=", "1")
		}
		};
	});
	}
});

