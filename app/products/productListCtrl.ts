module app.productList {

	interface IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];
		toggleImage(): void;
	}

	class ProductListCtrl implements IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];
	
		/**
		 * Constructor of ProductListCtrl
		 */
		constructor() {
			this.title = "Product List";
			this.showImage = false;
			this.products = [];

			var newProduct = new app.domain.Product(5,
				"Hammer",
				"TBX-0048",
				new Date(2013, 4, 21), 8.99,
				"Curved claw steel hammer",
				"http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");

			this.products.push(newProduct);

		}

		toggleImage(): void {
			this.showImage = !this.showImage;
		}
	}

	angular.module("productManagement")
		.controller("productListCtrl", ProductListCtrl);
}