import React, { Component } from "react";

export default class ProductList extends Component {
  // burada constructor oluşturulmadı çünkü yeni react versiyonlarda bu zorunluluk kaldırılmıştır. Gösterim amacıyla CategoryList componentindekini kaldırmadım
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
