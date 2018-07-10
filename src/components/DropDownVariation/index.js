import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class DropDownVariation extends Component {
  constructor (props) {
    super (props);

    this.toggle = this.toggle.bind (this);
    this.state = {
      dropdownOpen: false,
      btnDropLeft: false,
      btnDropRight: false,
    };
  }

  toggle () {
    this.setState ({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render () {
    return (
      <div>
        <Dropdown
          direction="up"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle caret> Dropup </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> Another Action </DropdownItem>
            <DropdownItem> Another Action </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          direction="left"
          isOpen={this.state.btnDropleft}
          toggle={() => {
            this.setState ({btnDropleft: !this.state.btnDropleft});
          }}
        >
          <DropdownToggle caret> Dropleft </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> Another Action </DropdownItem>
            <DropdownItem> Another Action </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          direction="right"
          isOpen={this.state.btnDropright}
          toggle={() => {
            this.setState ({btnDropright: !this.state.btnDropright});
          }}
        >
          <DropdownToggle caret> Dropright </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> Another Action </DropdownItem>
            <DropdownItem> Another Action </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropDownVariation;
