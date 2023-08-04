// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.21;

import {IERC3156FlashLender} from "./interfaces/IERC3156FlashLender.sol";
import {IERC3156FlashBorrower} from "./interfaces/IERC3156FlashBorrower.sol";

import {SafeTransferLib, ERC20} from "@solmate/utils/SafeTransferLib.sol";

import {BaseBulker} from "./BaseBulker.sol";

abstract contract ERC3156Bulker is BaseBulker, IERC3156FlashBorrower {
    using SafeTransferLib for ERC20;

    /* CONSTANTS */

    bytes32 private constant FLASHLOAN_CALLBACK = keccak256("ERC3156FlashBorrower.onFlashLoan");

    /* CALLBACKS */

    function onFlashLoan(address, address asset, uint256 amount, uint256 fee, bytes calldata data)
        external
        callback(data)
        returns (bytes32)
    {
        ERC20(asset).safeApprove(msg.sender, amount + fee);

        return FLASHLOAN_CALLBACK;
    }

    /* INTERNAL */

    /// @dev Triggers a flash loan on Maker.
    function _erc3156FlashLoan(IERC3156FlashLender lender, address asset, uint256 amount, bytes calldata data)
        internal
    {
        lender.flashLoan(address(this), asset, amount, data);
    }
}
