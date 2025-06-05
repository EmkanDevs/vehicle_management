// Copyright (c) 2025, Finbyz and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Vehicles", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Vehicles', {
	update_odometer: function(frm,cdt,cdn) {
		frappe.call({
			method: "car_reservation.car_reservation.doctype.vehicles.vehicles.update_odometer",
			 args: {
				docname: frm.doc.name
			 },
			callback: function(r) {
				frappe.model.set_value(cdt, cdn, 'last_odometer_value', r.message);
			}
		});
	}
});