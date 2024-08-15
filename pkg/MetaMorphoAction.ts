import { BigNumberish } from "ethers";
import { MetaMorpho__factory } from "types";
import { MarketAllocationStruct, MarketParamsStruct } from "types/src/MetaMorpho";

const METAMORPHO_INTERFACE = MetaMorpho__factory.createInterface();

export type MetaMorphoCall = string;

export namespace MetaMorphoActions {
  /* CONFIGURATION */

  /**
   * Encodes a call to a MetaMorpho vault to set the curator.
   * @param newCurator The address of the new curator.
   * @returns The encoded function call.
   */
  export function setCurator(newCurator: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setCurator", [newCurator]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to enable or disable an allocator.
   * @param allocator The address of the allocator.
   * @param isAllocator Whether the allocator should be enabled or disabled.
   * @returns The encoded function call.
   */
  export function setIsAllocator(allocator: string, isAllocator: boolean): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setIsAllocator", [allocator, isAllocator]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to set the fee recipient.
   * @param feeRecipient The address of the new fee recipient.
   * @returns The encoded function call.
   */
  export function setFeeRecipient(feeRecipient: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setFeeRecipient", [feeRecipient]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to set the skim recipient.
   * @param skimRecipient The address of the new skim recipient.
   * @returns The encoded function call.
   */
  export function setSkimRecipient(skimRecipient: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setSkimRecipient", [skimRecipient]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to set the fee.
   * @param fee The new fee percentage (in WAD).
   * @returns The encoded function call.
   */
  export function setFee(fee: BigNumberish): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setFee", [fee]);
  }

  /* TIMELOCK */

  /**
   * Encodes a call to a MetaMorpho vault to submit a new timelock.
   * @param timelock The new timelock (in seconds).
   * @returns The encoded function call.
   */
  export function submitTimelock(timelock: BigNumberish): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("submitTimelock", [timelock]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to accept the pending timelock.
   * @returns The encoded function call.
   */
  export function acceptTimelock(): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("acceptTimelock");
  }

  /**
   * Encodes a call to a MetaMorpho vault to revoke the pending timelock.
   * @returns The encoded function call.
   */
  export function revokePendingTimelock(): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("revokePendingTimelock");
  }

  /* SUPPLY CAP */

  /**
   * Encodes a call to a MetaMorpho vault to submit a new supply cap.
   * @param marketParams The market parameters of the market to submit a supply cap for.
   * @param supplyCap The new supply cap.
   * @returns The encoded function call.
   */
  export function submitCap(marketParams: MarketParamsStruct, supplyCap: BigNumberish): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("submitCap", [marketParams, supplyCap]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to accept the pending supply cap.
   * @param marketParams The market parameters of the market to accept the pending supply cap for.
   * @returns The encoded function call.
   */
  export function acceptCap(marketParams: MarketParamsStruct): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("acceptCap", [marketParams]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to revoke the pending supply cap.
   * @param marketId The ID of the market to revoke the pending supply cap for.
   * @returns The encoded function call.
   */
  export function revokePendingCap(marketId: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("revokePendingCap", [marketId]);
  }

  /* FORCED MARKET REMOVAL */

  /**
   * Encodes a call to a MetaMorpho vault to submit a market removal.
   * @param marketParams The market parameters of the market to remove.
   * @returns The encoded function call.
   */
  export function submitMarketRemoval(marketParams: MarketParamsStruct): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("submitMarketRemoval", [marketParams]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to revoke the pending market removal.
   * @param marketId The ID of the market to revoke the pending removal for.
   * @returns The encoded function call.
   */
  export function revokePendingMarketRemoval(marketId: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("revokePendingMarketRemoval", [marketId]);
  }

  /* GUARDIAN */

  /**
   * Encodes a call to a MetaMorpho vault to submit a new guardian.
   * @param guardian The address of the new guardian.
   * @returns The encoded function call.
   */
  export function submitGuardian(guardian: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("submitGuardian", [guardian]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to accept the pending guardian.
   * @returns The encoded function call.
   */
  export function acceptGuardian(): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("acceptGuardian");
  }

  /**
   * Encodes a call to a MetaMorpho vault to revoke the pending guardian.
   * @returns The encoded function call.
   */
  export function revokePendingGuardian(): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("revokePendingGuardian");
  }

  /* MANAGEMENT */

  /**
   * Encodes a call to a MetaMorpho vault to skim ERC20 tokens.
   * @param tokenAddress The address of the ERC20 token to skim.
   * @returns The encoded function call.
   */
  export function skim(tokenAddress: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("skim", [tokenAddress]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to set the supply queue.
   * @param supplyQueue The new supply queue.
   * @returns The encoded function call.
   */
  export function setSupplyQueue(supplyQueue: string[]): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("setSupplyQueue", [supplyQueue]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to update the withdraw queue.
   * @param indexes The indexes of each market in the previous withdraw queue, in the new withdraw queue's order.
   * @returns The encoded function call.
   */
  export function updateWithdrawQueue(indexes: BigNumberish[]): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("updateWithdrawQueue", [indexes]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to reallocate the vault's liquidity across enabled markets.
   * @param allocations The new target allocations for each market.
   * @returns The encoded function call.
   */
  export function reallocate(allocations: MarketAllocationStruct[]): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("reallocate", [allocations]);
  }

  /* ERC4626 */

  /**
   * Encodes a call to a MetaMorpho vault to mint shares.
   * @param shares The amount of shares to mint.
   * @param receiver The address of the shares' receiver.
   * @returns The encoded function call.
   */
  export function mint(shares: BigNumberish, receiver: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("mint", [shares, receiver]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to deposit assets.
   * @param assets The amount of assets to deposit.
   * @param receiver The address of the assets' receiver.
   * @returns The encoded function call.
   */
  export function deposit(assets: BigNumberish, receiver: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("deposit", [assets, receiver]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to withdraw assets.
   * @param assets The amount of assets to withdraw.
   * @param receiver The address of the assets' receiver.
   * @param owner The address of the shares' owner to redeem.
   * @returns The encoded function call.
   */
  export function withdraw(assets: BigNumberish, receiver: string, owner: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("withdraw", [assets, receiver, owner]);
  }

  /**
   * Encodes a call to a MetaMorpho vault to redeem shares.
   * @param shares The amount of shares to redeem.
   * @param receiver The address of the assets' receiver.
   * @param owner The address of the shares' owner to redeem.
   * @returns The encoded function call.
   */
  export function redeem(shares: BigNumberish, receiver: string, owner: string): MetaMorphoCall {
    return METAMORPHO_INTERFACE.encodeFunctionData("redeem", [shares, receiver, owner]);
  }
}

export default MetaMorphoActions;
