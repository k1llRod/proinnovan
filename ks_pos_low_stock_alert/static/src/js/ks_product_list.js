/*
    @Author: KSOLVES India Private Limited
    @Email: sales@ksolves.com
*/

odoo.define('ks_pos_low_stock_alert.ks_product_list', function (require) {
    "use strict";
    const KsProductItem = require('point_of_sale.ProductItem');
    const Registries = require('point_of_sale.Registries');
    const models = require('point_of_sale.models');

    console.log('MODELO',models);
    const ks_product_item = (KsProductItem) =>
        class extends KsProductItem {
            addOverlay (){
                var self = this;
                var option_config = self.env.pos.config.allow_order_when_product_out_of_stock;
                var task;
                clearInterval(task);
               task = setTimeout(function () {
                   if(option_config == false) {
                       $(".overlay").parent().addClass('pointer-none');
                   }
               }, 100);
            }
        };

    Registries.Component.extend(KsProductItem,ks_product_item);
    return KsProductItem;
})