import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default function dropdown() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Another action</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}