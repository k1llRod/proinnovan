odoo.define('ks_pos_low_stock_alert.receipt', function (require) {
    'use strict';
    const models = require('point_of_sale.models');
    const PosComponent = require('point_of_sale.PosComponent');

    models.load_fields('res.partner', 'name');
    models.load_fields('stock.picking', 'name','lot_id');
    console.log("models",models);
    // class OrderReceipt extends PosComponent {
    //     isSimple(line){
    //         return (
    //             line.discount === 0 &&
    //             line.is_in_unit &&
    //             line.quantity === 1 &&
    //             !(
    //                 line.display_discount_policy == 'without_discount' &&
    //                 line.price < line.price_lst
    //             )
    //
    //         );
    //     }
    // }

});


