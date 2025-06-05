frappe.ui.form.on("Sales Invoice", {
    car_id: function(frm, cdt, cdn) {
	            frm.clear_table("items");
	            frappe.call({
	                method: "frappe.client.get",
	                args: {
	                    name: frm.doc.car_id,
	                    doctype: "Car Repair"
	                },
	                callback(r) {
	                    if (r.message) {
	                        for (var row in r.message.car_item_list) {
	                            var child = frm.add_child("items");
	                            var cli = r.message.car_item_list[row];
	                            frappe.model.set_value(child.doctype, child.name, "item_code", cli.item_code);
	                            frappe.model.set_value(child.doctype, child.name, "qty", cli.qty);
	                            frm.refresh_field("items");
	                        }
	                    }
	                }
	            });
    }
});