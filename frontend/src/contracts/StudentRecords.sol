//SPDX-License-Identifier: MIT

// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

pragma solidity ^0.8.28;

contract StudentRecords{
    uint256 public studentNumber;
    uint256 public GWA;
    string public studentName;
    string public studentAddress;
    string public studentBday;
    string public course;

    constructor(
        uint256 _studentNumber,
        uint256 _GWA,
        string memory _studentName,
        string memory _studentAddress,
        string memory _studentBday,
        string memory _course
    ){
        studentNumber = _studentNumber;
        GWA = _GWA;
        studentName = _studentName;
        studentAddress = _studentAddress;
        studentBday = _studentBday;
        course = _course;
    }

    function getStudentNumber() external view returns(uint256){
        return studentNumber;
    }

    function getGWA() external view returns(uint256){
        return GWA;
    }

    function getName() external view returns(string memory){
        return studentName;
    }

    function getAddress() external view returns(string memory){
        return studentAddress;
    }

    function getBday() external view returns(string memory){
        return studentBday;
    }

    function getCourse() external view returns(string memory){
        return course;
    }
}