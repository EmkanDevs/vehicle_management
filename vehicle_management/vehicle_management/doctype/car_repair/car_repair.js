// Copyright (c) 2025, Finbyz and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Car Repair", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Car Repair', {
	refresh: function(frm,cdt,cdn) {

		if(frm.doc.workflow_state == "Done"){
			frm.add_custom_button(__("Sales Invoice"), function() {	    		
			    frappe.db.insert({
			        "doctype": "Customer",
			        "customer_name": frm.doc.customer_name,
			        "customer_group": "Commercial",
			        "territory": "All Territories"
			    }).then(function(doc) {
			        console.log(doc);
			    });
				frappe.new_doc("Sales Invoice", {
					"customer": cur_frm.doc.customer_name,
					"due_date": frm.doc.date,
					"car_id": frm.doc.name
				});
			}, __("Create"));
		}

	}	
});

frappe.ui.form.on('Car Repair',{
	onload: function(frm) {
		cur_frm.set_query("car_repair_team", function() {
		return {
		"filters": {
			"is_service_manager": ("=", "1")
		}
		};
	});
	}
});

frappe.ui.form.on('Car Repair',{
	onload: function(frm) {
		cur_frm.set_query("technician", function() {
		return {
		"filters": {
			"is_technician": ("=", "1")
		}
		};
	});
	}
});