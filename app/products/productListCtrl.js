var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = (function () {
            /**
             * Constructor of ProductListCtrl
             */
            function ProductListCtrl() {
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var newProduct = new app.domain.Product(5, "Hammer", "TBX-0048", new Date(2013, 4, 21), 8.99, "Curved claw steel hammer", "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
                this.products.push(newProduct);
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            return ProductListCtrl;
        })();
        angular.module("productManagement")
            .controller("productListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
