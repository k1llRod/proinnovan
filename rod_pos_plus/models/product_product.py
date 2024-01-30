# Agregar un nuevo campo a la tabla de productos
from odoo import fields, models

class ProductProduct(models.Model):
    _inherit = 'product.product'

    new_field = fields.Char(string='New Field')

# Agregar un nuevo botón a la vista de factura

class PosOrder(models.Model):
    _inherit = 'pos.order'

    def action_new_button(self):
        # Acciones que se deben realizar al presionar el botón
        pass