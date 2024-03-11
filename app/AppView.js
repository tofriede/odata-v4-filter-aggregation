sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/App",
    "sap/m/Page",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/ColumnListItem",
    "sap/m/Text",
    "sap/m/Toolbar",
    "sap/m/Button"
], function (
    View,
    App,
    Page,
    Table,
    Column,
    ColumnListItem,
    Text,
    Toolbar,
    Button
) {
    "use strict";

    return View.extend("core.AppView", {

        getControllerName: function () {
            return "core.App";
        },

        createContent: function (oController) {
            this.oTable = new Table({
                headerToolbar: new Toolbar({
                    content: new Button({
                        text: "Filter rows (triggers bug)",
                        press: () => oController.filterRows()
                    })
                }),
                columns: [
                    new Column({ header: new Text({ text: "Category" } )}),
                    new Column({ header: new Text({ text: "Average Unit Price" } )})
                ],
                items: {
                    path: "/Products",
                    template: new ColumnListItem({
                        cells: [
                            new Text({ text: "{CategoryID}" }),
                            new Text({ 
                                text: {
                                    parts: [{
                                        path: "UnitPrice_avg",
                                        type: "sap.ui.model.odata.type.Decimal"
                                    }],
                                    formatter: function (sProductID) {
                                        return `${sProductID} €`;
                                    }
                                }
                            })
                        ]
                    })
                }
            });

            return new App(this.createId("app"), {
                pages: new Page({
                    title: "{i18n>title}",
                    content: [this.oTable],
                })
            });
        },
    });
});
