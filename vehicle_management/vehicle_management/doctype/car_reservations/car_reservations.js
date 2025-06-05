// Copyright (c) 2025, Finbyz and contributors
// For license information, please see license.txt

frappe.ui.form.on('Car Reservations',{
	onload: function(frm) {
		cur_frm.set_query("vehicle", function() {
		return {
			"filters": {
				"workflow_state": ("=", "Registered"),
			}
		};
	});
}
});


frappe.ui.form.on('Car Reservation', {
    validate: function (frm) {
        // Get the selected car and reservation dates
        var vehicle = frm.doc.vehicle;
        var start_time = frm.doc.start_time;
        var end_time = frm.doc.end_time;
        console.log(":::::::::::::::::::::::::::",vehicle);
        console.log(":::::::::::::::::::::::::::",start_time);
        console.log(":::::::::::::::::::::::::::",end_time);

        // Check if there are existing reservations for the same car and period
        frappe.call({
            method: 'car_reservation.car_reservation.doctype.car_reservation.car_reservation.check_conflicting_reservations',
            args: {
                vehicle: vehicle,
                start_time: start_time,
                end_time: end_time
            },
            callback: function (r) {
                if (r.message && r.message.conflicting_reservations.length > 0) {
                    // Show an error message
                    frappe.msgprint(__('Conflicting reservations found. Please choose a different car or adjust the reservation dates.'));
                    // Clear the form or take appropriate action
                    frm.clear();
                }
            }
        });
    }
});
