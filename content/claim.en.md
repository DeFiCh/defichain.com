---
title: Claim My DFI
type: claim
long_title: Claim your DFI in the DFI Airdrop
cta_to: Claim My DFI
menu:
  main:
    weight: 80
meta:
  description: Claim your DFI in the DFI Airdrop
  og:
    title: Claim My DFI
    description: Claim your DFI in the DFI Airdrop
    site_name: DeFi Blockchain
    image: /img/og/ogimage-claim.png
    image_type: image/png
    locale: en_US
theme: dark smoke
content:
  sections:
    hero:
      name: hero
      headline: DFI Airdrop is happening now.
      subhead: Receive 500 DFI for every BTC you own, absolutely free.
    how_much:
      name: how-much
      headline: How much will I get?
      prefix: If I own
      examples:
        - icon: /static/svg/icons/amount/amount-low.svg
          btc: 0.1 BTC
          dfi: 50 DFI
        - icon: /static/svg/icons/amount/amount-mid.svg
          btc: 1 BTC
          dfi: 500 DFI
        - icon: /static/svg/icons/amount/amount-high.svg
          btc: 100 BTC
          dfi: 50,000 DFI
    claim_wizard:
      headline: Claim your DFI now.
      step1:
        headline: "Step 1: Get a DFI Wallet"
        options:
          - headline: DeFi Blockchain client
            cta:
              label: Download
              url: http://blah
          - headline: Pool by Cake DFI wallet
            cta:
              label: Sign up
              url: https://pool.cakedefi.com/
      step2:
        headline: "Step 2: Enter details of your DFI and BTC wallets"
        dfi_field:
          label: DFI address
          hint: 12-digit DFI address
          helper: Address of DFI wallet obtained in step 1
        btc_field:
          label: BTC address
          helper: Address of BTC wallet
        button:
          label: Continue
      step3:
        headline: "Step 3: Signing mesage"
        subhead1: "From your Bitcoin client, Sign a Message using the following values:"
        values:
          bitcoin_address: 
            label: Bitcoin address
            value: Your bitcoin wallet private key
          message:
            label: Message
            copy_button:
              label: Copy to clipboard
        subhead2: A Signature will be generated upon signing.
        button:
          label: I've done these steps
      step4:
        headline: "Step 4: Signature"
        subhead: Enter the signature generated in step 3.
        form:
          signature:
            label: Signature
          button: Complete Claiming My DFI
    #white paper in /
    #subscribe in /
    #closer_look in /
---
