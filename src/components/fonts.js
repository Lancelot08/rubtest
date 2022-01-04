import * as React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
@font-face {
  font-display: block;
  font-family: "Helvetica-W01-Bold";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f70da45a-a05c-490c-ad62-7db4894b012a.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/f70da45a-a05c-490c-ad62-7db4894b012a.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c5749443-93da-4592-b794-42f28d62ef72.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/73805f15-38e4-4fb7-8a08-d56bf29b483b.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/874bbc4a-0091-49f0-93ef-ea4e69c3cc7a.svg#874bbc4a-0091-49f0-93ef-ea4e69c3cc7a") format("svg");
}
@font-face {
  font-display: block;
  font-family: "Helvetica-W02-Bold";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8c0d8b0f-d7d6-4a72-a418-c2373e4cbf27.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/8c0d8b0f-d7d6-4a72-a418-c2373e4cbf27.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/192dac76-a6d9-413d-bb74-22308f2e0cc5.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/47584448-98c4-436c-89b9-8d6fbeb2a776.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/375c70e5-6822-492b-8408-7cd350440af7.svg#375c70e5-6822-492b-8408-7cd350440af7") format("svg");
}
@font-face {
  font-display: block;
  font-family: "Helvetica-LT-W10-Bold";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9fe262dc-5a55-4d75-91a4-aed76bd32190.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9fe262dc-5a55-4d75-91a4-aed76bd32190.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a3939d0-3833-4db3-8b85-f64c2b3350d2.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b128d6d-126f-4c9c-8f87-3e7d30a1671c.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b791c850-fde1-48b3-adf0-8998d55b0866.svg#b791c850-fde1-48b3-adf0-8998d55b0866") format("svg");
}
@font-face {
  font-display: block;
  font-family: "DIN-Next-W01-Light";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3e0b2cd7-9657-438b-b4af-e04122e8f1f7.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/bc176270-17fa-4c78-a343-9fe52824e501.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3516f91d-ac48-42cd-acfe-1be691152cc4.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d1b1e866-a411-42ba-8f75-72bf28e23694.svg#d1b1e866-a411-42ba-8f75-72bf28e23694") format("svg");
}
@font-face {
  font-display: block;
  font-family: "DIN-Next-W02-Light";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/48e5a0e1-2d56-46e5-8fc4-3d6d5c973cbf.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/07d62b21-8d7a-4c36-be86-d32ab1089972.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/c0050890-bbed-44b9-94df-2611d72dbb06.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9f774d17-c03a-418e-a375-34f3beecbc7a.svg#9f774d17-c03a-418e-a375-34f3beecbc7a") format("svg");
}
@font-face {
  font-display: block;
  font-family: "DIN-Next-W10-Light";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/3d009cd7-c8fe-40c0-93da-74f4ea8c530b.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/a9e95a29-98a7-404a-90ee-1929ad09c696.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0a7663fd-eae8-4e50-a67a-225271f8cceb.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/58ae9be9-5d95-44b6-8b6c-e6da6a46822c.svg#58ae9be9-5d95-44b6-8b6c-e6da6a46822c") format("svg");
}
@font-face {
  font-display: block;
  font-family: "Helvetica-W01-Roman";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ea95b44a-eab7-4bd1-861c-e73535e7f652.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/ea95b44a-eab7-4bd1-861c-e73535e7f652.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/4021a3b9-f782-438b-aeb4-c008109a8b64.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/669f79ed-002c-4ff6-965c-9da453968504.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/d17bc040-9e8b-4397-8356-8153f4a64edf.svg#d17bc040-9e8b-4397-8356-8153f4a64edf") format("svg");
}
@font-face {
  font-display: block;
  font-family: "Helvetica-W02-Roman";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/e4bd4516-4480-43df-aa6e-4e9b9029f53e.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/b56b944e-bbe0-4450-a241-de2125d3e682.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7da02f05-ae8b-43a1-aeb9-83b3c0527c06.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/66cac56e-d017-4544-9d0c-f7d978f0c5c2.svg#66cac56e-d017-4544-9d0c-f7d978f0c5c2") format("svg");
}
@font-face {
  font-display: block;
  font-family: "Helvetica-LT-W10-Roman";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/686a6a06-e711-4bd2-b393-8504a497bb3c.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/6f8d1983-4d34-4fa4-9110-988f6c495757.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/7903ee3f-e9ab-4bdc-b7d2-d232de2da580.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0.svg#9c58e9ea-fdea-4b9c-b0f9-0a2157389ed0") format("svg");
}
@font-face {
  font-family: "wf_b9cf1341b9ec4945852ac0f86";
  src: url("https://static.wixstatic.com/ufonts/d228b9_b9cf1341b9ec4945852ac0f86b827fc1/woff2/file.woff2") format("woff2"),
    url("https://static.wixstatic.com/ufonts/d228b9_b9cf1341b9ec4945852ac0f86b827fc1/woff/file.woff") format("woff"),
    url("https://static.wixstatic.com/ufonts/d228b9_b9cf1341b9ec4945852ac0f86b827fc1/ttf/file.ttf") format("ttf");
}
@font-face {
  font-family: "wf_e4b1e1e4405343d9ad0296011";
  src: url("https://static.wixstatic.com/ufonts/364126_e4b1e1e4405343d9ad02960110373431/woff2/file.woff2") format("woff2"),
    url("https://static.wixstatic.com/ufonts/364126_e4b1e1e4405343d9ad02960110373431/woff/file.woff") format("woff"),
    url("https://static.wixstatic.com/ufonts/364126_e4b1e1e4405343d9ad02960110373431/ttf/file.ttf") format("ttf");
}

@font-face {
  font-display: block;
  font-family: "Lulo-Clean-W01-One-Bold";
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0163ac22-50a7-406e-aa64-c62ee6fbf3d7.eot?#iefix");
  src: url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/0163ac22-50a7-406e-aa64-c62ee6fbf3d7.eot?#iefix") format("eot"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/aee74cb3-c913-4b54-9722-6001c92325f2.woff2") format("woff2"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/80de9d5d-ab5f-40ce-911b-104e51e93d7c.woff") format("woff"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/1b46b05b-cfdd-4d82-8c2f-5c6cfba1fe60.ttf") format("truetype"), url("//static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/be340f0b-a2d4-41df-acb1-4dc124330a88.svg#be340f0b-a2d4-41df-acb1-4dc124330a88") format("svg");
}
@font-face {
  font-family: "Lulo-Clean-W05-One-Bold";
  src: url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff2") format("woff2"),
    url("//static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/Lulo_Clean/v1/LuloCleanW05-OneBold.woff") format("woff");
}
        `}
  />
)

export default Fonts;
