"use strict";

var Product = React.createClass({
  displayName: "Product",

  render: function render() {
    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement(
          "div",
          { className: "product__img-wrapper" },
          React.createElement("img", { className: "product__img", src: "img/shoe1.jpg" })
        ),
        React.createElement(
          "a",
          { className: "product__add" },
          React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
        ),
        React.createElement(
          "div",
          { className: "product__price" },
          "$299"
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          "Marana E-Lite"
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var product = {
      name: "Jameson Vulc",
      price: 64.99,
      imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
      gender: "man"
    };

    return React.createElement(
      "div",
      { className: "products" },
      React.createElement(Product, { Product: product })
    );
  }
});

window.onload = function () {
  React.render(React.createElement(Products, null), document.querySelector(".site__content"));
};
