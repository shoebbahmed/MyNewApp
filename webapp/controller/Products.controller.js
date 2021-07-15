sap.ui.define(["ns/products/controller/BaseController"], function (Controller) {
  "use strict";

  return Controller.extend("ns.products.controller.Products", {
    handleListItemPress: function (oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var selectedProductId = oEvent
        .getSource()
        .getBindingContext()
        .getProperty("ProductID");
      oRouter.navTo("ProductDetail", {
        productId: selectedProductId,
      });
    },
  });
});
