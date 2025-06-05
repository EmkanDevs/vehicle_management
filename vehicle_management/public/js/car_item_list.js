frappe.ui.form.on('Car Repair',{
	onload: function(frm) {
		cur_frm.set_query("item_code", "car_item_list", function() {
		return {
		"filters": {
			"is_car_parts": ("=", "1")
		}
		};
	});
	}
});
