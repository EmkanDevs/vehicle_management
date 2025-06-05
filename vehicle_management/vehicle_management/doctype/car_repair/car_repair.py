# Copyright (c) 2025, Finbyz and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class CarRepair(Document):
	pass

def validate(self,cdt):
	test_d = frappe.db.get_value("Vehicle",{'name':self.name},'name')
	if not test_d:
		vals = frappe.get_doc({
			"doctype": "Vehicle",
			"license_plate":self.name,
			"make":self.car_manufacturing_year,
			"model":self.car_model,
			"last_odometer": "0",
			"fuel_type": "Petrol",
			"uom": "Litre",
		})
		vals.insert()
