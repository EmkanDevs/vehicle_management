from __future__ import unicode_literals
from frappe import _

# Copyright (c) 2024, Solufy and contributors
# For license information, please see license.txt

def get_data():
	return {
		"heatmap": True,
		"heatmap_message": (
			"This is based on transactions against this vehicles. See timeline below for details"
		),
		"transactions": [{"items": ["Car Info"]}, {"items": ["Service Type"]},{"items": ["Car Photos"]}],
	}