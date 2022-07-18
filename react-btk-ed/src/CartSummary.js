import React, { Component } from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink } from "reactstrap";

export default class CartSummary extends Component {
  // eğer sepet boş ise hiç ekranda gösterilmemsi için renderSummary fonksiyonu yazıldı
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {" "}
                {cartItem.product.productName}
                <Badge color="success"> {cartItem.quantity} </Badge>{" "}
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}</div>;
  }
}
