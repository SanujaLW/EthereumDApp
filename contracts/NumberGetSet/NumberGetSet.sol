pragma solidity >=0.4.22 <0.7.0;

contract NumberGetSet {

    uint value;
    constructor() public {
        value = 0;
    }
    function setValue(uint newValue) public {
        value = newValue;
    }
    function getValue() public view returns (uint){
        return value;
    }
}