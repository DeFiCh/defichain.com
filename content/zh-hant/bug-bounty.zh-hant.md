---
title: 漏洞懸賞
type: bug-bounty
long_title: 遞飛鏈漏洞懸賞計畫
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
  description: 遞飛鏈漏洞懸賞計畫
  og:
    title: 遞飛鏈漏洞懸賞計畫
    description: Bounty hunters wanted for wanted bugs
    site_name: DeFiChain
    image: /img/og/ogimage_bounty_en.png
    image_type: image/png
    locale: zh_Hant
theme:
  footer: day
content:
  sections:
    hero:
      name: hero
      headline: 遞飛鏈漏洞懸賞計畫
      subhead: 遞飛鏈正與安全專家以及社區合作尋找漏洞。賞金計畫獎勵高達五萬美元。
      cta:
        label: 提交漏洞
      sub_cta:
        label: 如何參與
    leaderboard:
      headline: 排行榜
      subhead: 遞飛鏈感謝以下的賞金獵人們努力保持將遞飛鏈更安全。
      hunters:
        - name: Dr. Daniel Cagara
          github: muirglacier
          address: dYY5wLEmiawTAzTp2CP5qfrYyjmCVcwPv4
          bounties:
            - title: Masternode mining efficiency exploit
              value_dfi: 7500
              value_usd: 26250
              txid: 3855e22b35f26cc962d154639d3ce1ac14a40286182b0c897cd5dbe8c0b60503
            - title: 3rd-party masternode fund lockup issue
              value_dfi: 2250
              value_usd: 7875
              txid: f715e5ec45ffccbaade5d0de451d18cf00e386b04f0c3d87d8b7a80278e6b709
            - title: Probabilistic side mining exploit
              value_dfi: 3750
              value_usd: 13125
              txid: e2fa3e133e35458328eded333f32e2c525c66861f37ca0be52f5b7e092c96cde
            - title: Dropping of masternode through transaction malleability
              value_dfi: 6000
              value_usd: 21000
              txid: ee46a62e455f6aad526d9664022afb4a5014b4031e034f00bdf53dee3d5a6070
            - title: Masternode quorum anchor confirmation bug
              value_dfi: 4500
              value_usd: 15750
              txid: 471c0e3e1c6e06375be6eef63eb51cc068ecf765301366f1d3d82c7446b8c0e3
            - title: Masternode boost with infinite timelock
              value_dfi: 6000
              value_usd: 21000
              txid: 3e8bef9fc348183d6f7f685d105ced7693dfa6bc5f94431c3abba7d47271eb08
        - name: (anonymous)
          github: (anonymous)
          address: dF3iyyrwGqYuiRXXcn7KTDjUC4CJgNL498
          bounties:
            - title: Atomic swap bug
              value_dfi: 10500
              value_usd: 31500
              txid: d12dde9f5235f7787022f21601aff0a7ba9e4f4b46102d37c65a741be2fa867c
        - name: Alex Andreae
          github: sourcecoast
          address: dFRdtWWcDRqdSKadjjer48tpSdd9qJeVVa
          bounties:
            - title: Bitcoin anchor fee validation issue
              value_dfi: 3000
              value_usd: 10500
              txid: 770e0ae17a4ae5158ccd8d716d2c256deeaad101625b2fb1784b3f60317b84c3
      total_bounty: 賞金總額
    participation:
      headline: 如何參與
      description:
        p1: 有很多方法可以開始尋找漏洞懸賞。您可以通過運行defid-testnet連接到遞飛鏈測試網開始。或者，您可以在[GitHub](https://github.com/defich/ain)學習初始程式碼。
        p2: 如果您通過與程式互動或研究初始程式碼發現一個漏洞，遞飛鏈可以提供高達 _五萬美元DFI_ 的漏洞賞金，前提是要發現缺陷的嚴重性，和您能夠提供關于修複或複制等有用的資訊。
        p3: "**請注意要研究和確認標記的是正式發布的程式碼，而不是主分支或其他仍在開發中的程式碼。**"
    submission:
      headline: 提交過程
      description:
        p1: 基于安全有一定的敏感性，我們鼓勵抓漏洞者不要公開提交有關區塊鏈安全性等議題。遞飛鏈鼓勵您自行決定，如果您覺得這個問題不是公衆可以輕易利用的，那麽可以在[GitHub](https://github.com/defich/ain)的回購中創建議題。如果議題有可能會被他人利用並是個關鍵，那麽請給我們發郵件[security@defichain.com](mailto:security@defichain.com)。
        p2: "在您提交的文件中，請包含："
        list: 
          - 對于問題的清楚描述。
          - 對于問題的修複，最好是以請求代碼合並。
          - 如果無法提供修複程式，請提供有關如何重現問題的明確說明。
          - "您的郵件地址或其他相關聯系方式（如: 電報群 ID)。"
          - 如果您的申請獲得批准，您的DFI地址將用于接收賞金。
---
