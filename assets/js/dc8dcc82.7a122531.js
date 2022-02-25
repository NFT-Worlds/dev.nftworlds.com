"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[512],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},s="Tutorial: Creating and processing transactions",c={unversionedId:"payments/tx-flow",id:"payments/tx-flow",isDocsHomePage:!1,title:"Tutorial: Creating and processing transactions",description:"This article will describe the lifecycle of a transaction as it's created and processed by a Spigot plugin written in Java. For an overview of how $WRLD payments work, refer to this section.",source:"@site/docs/payments/tx-flow.md",sourceDirName:"payments",slug:"/payments/tx-flow",permalink:"/payments/tx-flow",editUrl:"https://github.com/NFT-Worlds/dev.nftworlds.com/edit/main/docs/payments/tx-flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"$WRLD Commands Plugin",permalink:"/payments/wrld-payments-commands"},next:{title:"Selling Plots of Land for $WRLD",permalink:"/example-projects/plots"}},p=[{value:"Creating plugin, initializing wallet",id:"creating-plugin-initializing-wallet",children:[],level:2},{value:"Defining transaction types and payloads",id:"defining-transaction-types-and-payloads",children:[],level:2},{value:"Creating a payment request",id:"creating-a-payment-request",children:[],level:2},{value:"Writing a transaction handler",id:"writing-a-transaction-handler",children:[],level:2},{value:"Player Wallets &amp; Live Payment Testing",id:"player-wallets--live-payment-testing",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-creating-and-processing-transactions"},"Tutorial: Creating and processing transactions"),(0,i.kt)("p",null,"This article will describe the lifecycle of a transaction as it's created and processed by a Spigot plugin written in Java. For an overview of how $WRLD payments work, refer to ",(0,i.kt)("a",{parentName:"p",href:"/architecture/arch#wrld-token-interaction-example"},"this section"),"."),(0,i.kt)("h2",{id:"creating-plugin-initializing-wallet"},"Creating plugin, initializing wallet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class WRLDPaymentsCommands extends JavaPlugin {\n    private static WRLDPaymentsCommands plugin;\n    private static WalletAPI wallet;\n\n    public static WRLDPaymentsCommands getInstance() {\n        return plugin;\n    }\n    public static WalletAPI getPayments() {\n        return wallet;\n    }\n\n    public void onEnable() {\n        plugin = this;\n        wallet = new WalletAPI();\n\n        // We create this event handler below\n        getServer().getPluginManager().registerEvents(new PlayerTransactEventListener(), this);\n\n    }\n}\n")),(0,i.kt)("h2",{id:"defining-transaction-types-and-payloads"},"Defining transaction types and payloads"),(0,i.kt)("p",null,"Transactions are defined by a payload class which is automatically associated with the transaction and sent back to the server when the player completes payment. Payload classes serve two purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"They allow the server to differentiate between multiple transaction types."),(0,i.kt)("li",{parentName:"ol"},"Developers can store any arbitrary data they want and associate it with their transaction.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class PlayerBuyItemPayload {\n    public ItemStack items;\n\n    public PlayerBuyItemPayload(ItemStack items) {\n        this.items = items;\n    }\n}\n")),(0,i.kt)("h2",{id:"creating-a-payment-request"},"Creating a payment request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'PlayerBuyItemPayload payload = new PlayerBuyItemPayload(new ItemStack(Material.APPLE, 64));\ndouble price = 15.0;\nWRLDShopkeeperPlugin.getPayments().getNFTPlayer(player).requestWRLD(\n        price, Network.POLYGON, "Purchasing an apple", payload\n);\n')),(0,i.kt)("a",{href:"/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html",target:"_blank"},"Javadocs for this example"),(0,i.kt)("h2",{id:"writing-a-transaction-handler"},"Writing a transaction handler"),(0,i.kt)("p",null,"Incoming transactions are processed by a Spigot event handler like the one below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class PlayerTransactEventListener implements Listener {\n\n    @EventHandler\n    public void onPlayerTransact(PlayerTransactEvent<?> e) {\n        if (e.getPayload() instanceof PlayerBuyItemPayload payload) {\n            e.getPlayer().sendMessage("Transaction complete!");\n            e.getPlayer().getInventory().addItem(payload.items);\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"player-wallets--live-payment-testing"},"Player Wallets & Live Payment Testing"),(0,i.kt)("p",null,"If you want to test live payments, you need to connect your wallet that will spend $WRLD to your Minecraft account for NFT Worlds. You can do that through your NFT Worlds account page: ",(0,i.kt)("a",{parentName:"p",href:"https://nftworlds.com/login"},"https://nftworlds.com/login")),(0,i.kt)("p",null,"Connecting your wallet allows the NFT Worlds ecosystem to globally recognize your player UUID and the wallet address(es) associated with it. This is how payment receipt & the target player who paid is determined by the wrld payments api."))}d.isMDXComponent=!0}}]);