odoo.define('rod_pos_plus.ProductItem', function(require) {
    "use strict";
    console.log('FUNCIONA');
    alert('FUNCIONA');
    var rod_models = require('point_of_sale.models');
    const ProductItem = require('point_of_sale.ProductItem');
    const Registries = require('point_of_sale.Registries');

    // rod_models.load_fields('product.product', ['type', 'qty_available']);
    // var rod_super_pos = rod_models.PosModel.prototype;
    rod_models.load

    const ProductItemInherit = ProductItem => class extends ProductItem{
        constructor() {
            super(...arguments);
            console.log("ProductItemInherit");
        }
    };
    Registries.Component.extends(ProductItem, ProductItemInherit);
    return ProductItem;

});