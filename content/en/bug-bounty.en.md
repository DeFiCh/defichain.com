---
title: Bug bounty
type: bug-bounty
long_title: DeFiChain Bug Bounty Program
aliases:
    - /bounty
    - /bounty-program
    - /bug-bounty-program
menu:
  # main:
  #   weight: 45
  footer:
    weight: 1000
meta:
  description: DeFiChain Bug Bounty Program
  og:
    title: DeFiChain Bug Bounty Program
    description: Bounty hunters wanted for wanted bugs
    site_name: DeFiChain
    image: /img/og/ogimage_bounty_en.png
    image_type: image/png
    locale: en_US
theme:
  footer: day
content:
  sections:
    hero:
      name: hero
      headline: DeFiChain Bug Bounty Program
      subhead: DeFiChain is engaging with security experts as well as the community to hunt down vulnerabilities. Our bounty program rewards up to USD 50,000.
      cta:
        label: Submit vulnerability
      sub_cta:
        label: How to participate
    leaderboard:
      headline: Leaderboard
      subhead: DeFiChain thanks the following bounty hunters in their efforts to keep DeFiChain secure.
      hunters:
        - name: Dr. Daniel Cagara
          github: muirglacier
          address: dYY5wLEmiawTAzTp2CP5qfrYyjmCVcwPv4
          bounties:
            - title: Masternode mining efficiency exploit
              value_dfi: 5000
              value_usd: 15000
              txid: 3855e22b35f26cc962d154639d3ce1ac14a40286182b0c897cd5dbe8c0b60503
            - title: 3rd-party masternode fund lockup issue
              value_dfi: 1500
              value_usd: 4500
              txid: f715e5ec45ffccbaade5d0de451d18cf00e386b04f0c3d87d8b7a80278e6b709
            - title: Probabilistic side mining exploit
              value_dfi: 2500
              value_usd: 7500
              txid: e2fa3e133e35458328eded333f32e2c525c66861f37ca0be52f5b7e092c96cde
            - title: Dropping of masternode through transaction malleability
              value_dfi: 4000
              value_usd: 12000
              txid: ee46a62e455f6aad526d9664022afb4a5014b4031e034f00bdf53dee3d5a6070
      total_bounty: Total bounty
    participation:
      headline: How to participate
      description:
        p1: There are many ways to get started finding a bug bounty. You can start by connecting to the DeFiChain testnet by running `defid -testnet`. Alternatively, you could study our source code at [GitHub](https://github.com/defich/ain).
        p2: If you find a bug through interacting with our program and/or studying our source code, we can offer a bug bounty of up to _USD 50,000 worth of DFI_ provided that we find the bug significant, and you are able to provide useful info in regards to fixing or reproducing the issue.
        p3: "**Be sure to study the code that is tagged for official releases, not the master branch or other code that is still currently under development.**"
    submission:
      headline: Submission process
      description:
        p1: As security is a sensitive issue, we encourage users not to submit public issues regarding the security of the blockchain. We encourage using your own descretion, if you feel the issue is not something the public can easily exploit, then feel free to create an issue at the repo over at [GitHub](https://github.com/defich/ain). If the issue presents some critical exploit, then please email us instead at [security@defichain.com](mailto:security@defichain.com).
        p2: "In your submission please include:"
        list: 
          - A clear description of the issue
          - A fix for the issue, preferably as a pull request
          - If unable to provide a fix, then please provide clear directions on how to reproduce the issue
          - Your email address or other relevant contact details (e.g. Telegram ID)
          - Your DFI address for receiving the bounty if your submission is approved
---
