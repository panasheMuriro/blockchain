// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RoleBasedExample is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");

    uint256 public data;

    constructor() {
        // Grant deployer DEFAULT_ADMIN_ROLE and ADMIN_ROLE
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    // Function to set data, accessible only by ADMIN_ROLE
    function setData(uint256 _data) public onlyRole(ADMIN_ROLE) {
        data = _data;
    }

    // Function to view data, accessible only by USER_ROLE
    function viewData() public view onlyRole(USER_ROLE) returns (uint256) {
        return data;
    }

    // Grant USER_ROLE to a specific address
    function grantUserRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(USER_ROLE, account);
    }

    // Grant ADMIN_ROLE to a specific address
    function grantAdminRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(ADMIN_ROLE, account);
    }
}
