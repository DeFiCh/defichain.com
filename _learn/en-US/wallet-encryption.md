---
title: Wallet encryption
description: How to encrypt your wallet via the console
---

**Notice**: Encrypting your wallet via the console will cause your mnemonic phrase to change, do not rely on your mnemonic phrase as a backup if you follow this guide, instead make a backup after enabling encryption using backup files and store them in a secure location.

At the time of this writing, v2.1.4, the app does not yet have a graphical UI built-in to facilitate wallet encryption or locking. This can be a serious risk as your wallets can be compromised by any person or system having access to your `wallet.dat` file at your DeFi folder. 

As DeFiChain node is a fork of Bitcoin Core, it has an inherited wallet encryption that you are able to manage with relative ease.

This guide shows how you can perform the wallet encryption and decryption, also known as wallet locking and unlocking through the Console access available via DeFiChain app. 

**Disclaimer**: Verify and understand all commands that you are about to enter at Console, especially from untrusted sources. The author of this guide is not responsible for any loss of funds. 

## 1. Securing your wallet

1. Back up your existing `wallet.dat` somewhere safe. This file is very important to recover your DFI and DeFi Standard Tokens (DSTs) should things go wrong. The file can usually be located at the following paths:
  `~/.defi/wallets` for Linux
  `~/Library/Application Support/DeFi/wallets` for Mac
  `<root>\Users\<username>\AppData\Roaming\DeFi Blockchain\wallets` for Windows
  Remember that this file is _unencrypted_! Keep it absolutely safe!

2. To secure your wallet for the first time, generate a nice long random passphrase. For illustration purposes, this guide will be using the following passphrase `REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE`. You can use any random passphrase generator, ideally offline ones. Write it down securely.

3. Lock your wallet by typing the following at the Console: 

    ```
    encryptwallet REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE
    ```

    It should take a few seconds and you should see a message `wallet encrypted`.  At this point onwards, your wallet, i.e. `wallet.dat` file will be encrypted by default. 

    Your DeFi App will function as normal for view-only, and your DeFi liquidity mining rewards will be streamining in as usual. Try to send some DFI or DST, you should now be seeing the following message: `Add-on auth TX failed: Can't sign TX`. This shows that your wallet keys are now encrypted. Hacker having access to your wallet at this stage would only be able to view your holdings, but unable to spend it.

## 2. Unlocking your wallet

As your wallet state is now locked and encrypted by default, you now need to unlock your wallet every time you want to make a transaction, e.g. sending DFI or DST, performing DEX swap, adding liquidity, etc.

To unlock, go to Console, and enter:

```
walletpassphrase REPLACE_THIS_WITH_A_LONG_SECURE_PASSPHRASE 60
```

This will unlock your wallet for 60 seconds. Thereafter it would automatically revert itself to locked state again.

Now you can go to your app and make any transaction you desire to make, within 60 seconds. If you find yourself getting the `Add-on auth TX failed: Can't sign TX` as you are trying to make a transaction, it means that your wallet is now locked again, you will have to unlock it again with `walletpassphrase` as above.

## 3. Locking your wallet

If you find that you complete your transaction in a shorter time and you want to ensure that your wallet is locked immediately without waiting for timeout, simply enter

```
walletlock
```

This immediately locks your wallet and prevent any further transactions from carried out!

## 4. Checking your wallet encryption status

To ensure that your wallet is really locked and encrypted, you can enter:

```
getwalletinfo
```

For an encrypted wallet, you should be seeing a response that includes `"unlocked_until": 1609145224`. When a wallet is locked, `unlocked_until` should show `0`. When it is unlocked, it would show a [UNIX timestamp](https://www.epochconverter.com).

For an unencrypted wallet, `unlocked_until` is missing. It would not even show `0`.

---

## Tips

1. Once you are sure that your wallet is securely encrypted, make sure you dispose of your unencrypted `wallet.dat` that you backed up earlier. You do not need it anymore.

2. To change passphrase, use `walletpassphrasechange "oldpassphrase" "newpassphrase"`.

3. The steps described in this guide will be integrated in future releases of DeFiChain's app. Also, hardware wallet support via Ledger is also under work.
