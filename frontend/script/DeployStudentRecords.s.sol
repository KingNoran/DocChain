//SPDX-License-Identifier: MIT


pragma solidity ^0.8.28;

import {Script} from "../lib/forge-std/src/Script.sol";
import {StudentRecords} from "../src/contracts/StudentRecords.sol";

contract DeployStudentRecords is Script{
    function run() external returns (StudentRecords){
        vm.startBroadcast();

        StudentRecords studentRecords = new StudentRecords(
            12378,
            199,
            "Ken",
            "Bacoor",
            "June10",
            "CS"
        );

        vm.stopBroadcast();

        return studentRecords;
    }
}