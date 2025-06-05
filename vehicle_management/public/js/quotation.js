frappe.ui.form.on("Quotation", {
    car_id: function(frm, cdt, cdn) {
	            frm.clear_table("items");
	            frappe.call({
	                method: "frappe.client.get",
	                args: {
	                    name: frm.doc.car_id,
	                    doctype: "Car Diagnosis"
	                },
	                callback(r) {
	                    if (r.message) {
	                        console.log("-------------", r.message);
	                        for (var row in r.message.service_checklist) {
	                            var child = frm.add_child("items");
	                            var cli = r.message.service_checklist[row];
	                            frappe.model.set_value(child.doctype, child.name, "item_code", cli.item_code);
	                            frappe.model.set_value(child.doctype, child.name, "qty", cli.qty);
	                            frm.refresh_field("items");
	                        }
	                    }
	                }
	            });
    }
});
frappe.ui.form.on("Quotation", {
    car_id: function(frm, cdt, cdn) {
	            frm.clear_table("car_line");
	            frappe.call({
	                method: "frappe.client.get",
	                args: {
	                    name: frm.doc.car_id,
	                    doctype: "Car Diagnosis"
	                },
	                callback(r) {
	                    if (r.message) {
	                        console.log("-----CCCCCCCCCC--------", r.message);
	                        for (var row in r.message.table_15) {
	                        	console.log("-----CCCCCCCCCC--------", row);
	                            var child = frm.add_child("car_line");
	                            var cli = r.message.table_15[row];
	                            frappe.model.set_value(child.doctype, child.name, "car", cli.car);
	                            frm.refresh_field("car_line");
	                        }
	                    }
	                }
	            });
    }
});

