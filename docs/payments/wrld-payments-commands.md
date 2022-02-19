---
sidebar_position: 2
---

# $WRLD Commands Plugin

The [WRLD Commands Plugin](https://github.com/NFT-Worlds/wrld-payment-tester-plugin) provides an interface for the WRLD Payments API through Minecraft commands. This is useful for a number of scenarios:

1. It allows you to create payment requests without writing a Java plugin. This means you can integrate the WRLD Payments API with command blocks, Citizens NPCs, and more!
2. Developing and testing custom integrations without repeatedly sending real transactions.

## Features

### Manually creating a server-to-player payment request
**Usage**: /createrequest &lt;amount&gt; &lt;reason&gt;

### Viewing pending transactions 
**Usage**: /listrequests

For example, if your world has three pending requests with values 25, 0.25, and 2.0 WRLD the output of this command would display: 
![listrequests output](/img/listrequests.png)

### Manually confirming a transaction
**Usage**: /simulatetx &lt;id&gt;
During the process of building a $WRLD integration, you likely want to rapidly test your transaction handlers without sending a real transaction on Polygon each time. The WRLD Commands plugin makes this easy! Run the above command and provide the short ID for the pending transaction to simulate a sucessful payment.
