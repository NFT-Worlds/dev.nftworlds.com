"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[369],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2678:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const l={sidebar_position:6},o="Portals Between Worlds",s={unversionedId:"portals",id:"portals",isDocsHomePage:!1,title:"Portals Between Worlds",description:"Server transfer mod image",source:"@site/docs/portals.md",sourceDirName:".",slug:"/portals",permalink:"/portals",editUrl:"https://github.com/NFT-Worlds/dev.nftworlds.com/edit/main/docs/portals.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"NPC Shopkeeper",permalink:"/example-projects/npc"}},i=[{value:"How does this work?",id:"how-does-this-work",children:[],level:2},{value:"Installing the plugin",id:"installing-the-plugin",children:[],level:2},{value:"Adding the dependency",id:"adding-the-dependency",children:[],level:2},{value:"Code sample: transferring a player",id:"code-sample-transferring-a-player",children:[],level:2}],p={toc:i};function c(e){let{components:r,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"portals-between-worlds"},"Portals Between Worlds"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server transfer mod image",src:t(4157).Z})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"NFT Worlds Server Transfer Mod")," allows developers to transfer players to another server that's not on the same network!\nThis will allow players using the NFT Worlds Launcher to enjoy seamless transfers between servers in the NFT Worlds metaverse!"),(0,a.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,a.kt)("p",null,"With vanilla Minecraft, it's impossible to transfer players to a server that's not under the same network programatically. Normally players are required to manually disconnect and reconnect to their desired server. Part of the NFT Worlds vision is to be able to travel through in-game portals between sovereignly controlled worlds."),(0,a.kt)("p",null,"It has two components, a server-side plugin and a client-side mod which is included by default for all players using the NFT Worlds Launcher. The server plugin (implemented using the Spigot API) establishes a communication channel with the client mod (which uses the Fabric API). The following process is used to transfer players between servers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Player enters portal which leads to another server/world OR developer calls function in plugin to transfer player."),(0,a.kt)("li",{parentName:"ol"},"Server sends message to player's client instructing them to connect to another server. If the player is not using the NFT Worlds Launcher this will fail silently."),(0,a.kt)("li",{parentName:"ol"},"While the player remains connected to the server, their client will attempt to connect to the destination server in the background. If successful, the player will be immediately transported to the new server."),(0,a.kt)("li",{parentName:"ol"},"If the player's client fails to connect to the server, they will receive an error message and remain connected to their current server.")),(0,a.kt)("h2",{id:"installing-the-plugin"},"Installing the plugin"),(0,a.kt)("p",null,"You can download the latest release of the plugin ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WorldQL/server-transfer-fabric-spigot/releases/tag/v0.1.0"},"from GitHub"),'. Be sure to download the "server-transfer-',(0,a.kt)("strong",{parentName:"p"},"plugin"),'" and not the mod. The mod is automatically included for players using the NFT Worlds Launcher.'),(0,a.kt)("p",null,"Then, place the file in your plugins folder and you'll be ready to go."),(0,a.kt)("h2",{id:"adding-the-dependency"},"Adding the dependency"),(0,a.kt)("p",null,"Add the following dependency to your project's pom.xml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n...\n\n    <dependency>\n        <groupId>com.nftworlds</groupId>\n        <artifactId>server-transfer-plugin</artifactId>\n        <version>0.1.0</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n")),(0,a.kt)("h2",{id:"code-sample-transferring-a-player"},"Code sample: transferring a player"),(0,a.kt)("p",null,"This code sample is taken from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WorldQL/server-transfer-fabric-spigot/tree/trunk/ExampleTransferPlugin"},"example plugin")," that implements a command for transferring players. The API accepts a string for the destination server\nand a handle to the player."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, String label, String[] args) {\n    if (label.equalsIgnoreCase("connect")) {\n        if (!(sender instanceof Player)) {\n            sender.sendMessage("Only players can run this command!");\n            return true;\n        }\n\n        Player player = (Player) sender;\n        if (args.length == 0) {\n            player.sendMessage("Incorrect Usage: /connect <host>");\n            return true;\n        } else {\n            // send transfer packet to player with host(args[0])\n            ServerTransferPlugin.sendTransferPacket(args[0], player);\n        }\n    }\n\n    return true;\n}\n')),(0,a.kt)("p",null,"The API for transferring players as simple as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.nftworlds.server_transfer.plugin.ServerTransferPlugin;\n// ...inside your method\nPlayer player = someone;\n// use the static method on ServerTransferPlugin\nServerTransferPlugin.sendTransferPacket("play.example.com", player);\n')),(0,a.kt)("p",null,"Once you call this function the communication channel managed by the ServerTransferPlugin will send the correct information to the player's client and they'll be sent to the correct destination server."))}c.isMDXComponent=!0},4157:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/portal-mod-a0f2746a027f1545c03410a83f84f183.png"}}]);