frappe.ui.form.on('Car Diagnosis',{
	refresh: function(frm) {
		cur_frm.set_query("item_code", "service_checklist", function() {
		return {
		"filters": {
			"is_service_item": ("=", "1")
		}
		};
	});
	}
});
