odoo.define('ks_pos_low_stock_alert.OrderReceipt', function (require) {
    "use strict";

    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');
    const model = require('point_of_sale.models');

    model.load_models('stock.move.line',['lot_id.name'])
    console.log("model",model);
    const OrderReceiptExtend = OrderReceipt => class extends OrderReceipt {
        get receiptEnv () {
            return this._receiptEnv;
        }
        isSimple(line) {
            return (
                line.discount === 0 &&
                line.is_in_unit &&
                line.quantity === 1 &&
                !(
                    line.display_discount_policy == 'without_discount' &&
                    line.price < line.price_lst
                )
            );
        }
    };
    OrderReceipt.template = 'OrderReceipt';
    Registries.Component.add(OrderReceipt);
    return OrderReceipt;
});