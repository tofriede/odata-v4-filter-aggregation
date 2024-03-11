sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterType",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (
    Controller,
    FilterType,
    Filter,
    FilterOperator
) {
    "use strict";
    return Controller.extend("core.App", {
        onInit: function() {
            const oItemsBinding = this.getView().oTable.getBinding("items");
            oItemsBinding.setAggregation({
                aggregate: {
                    UnitPrice_avg: {
                        name: "UnitPrice",
                        with: "average"
                    }
                },
                group: {
                    CategoryID: {},
                }
            });
        },

        filterRows: function () {
            const oItemsBinding = this.getView().oTable.getBinding("items");
            const oFilter = new Filter({
                path: "UnitPrice_avg",
                operator: FilterOperator.GT,
                value1: 30
            });
            oItemsBinding.filter(oFilter, FilterType.Application);
        }
    });
});