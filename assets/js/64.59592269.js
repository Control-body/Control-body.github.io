(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{467:function(_,t,v){"use strict";v.r(t);var s=v(56),a=Object(s.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("TCP 和 UDP 是今天应用最广泛的传输层协议，拥有最核心的垄断地位。今天互联网的整个"),v("strong",[_._v("传输层")]),_._v("，几乎都是基于这两个协议打造的。无论是应用开发、框架设计选型、做底层和优化，还是定位线上问题，只要碰到网络，就逃不开 TCP 协议相关的知识。在面试中 TCP 一直是一个高频考察内容，外加 TCP 关联的知识比较多，因此面试题五花八门。")]),_._v(" "),v("h2",{attrs:{id:"一、tcp-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、tcp-协议"}},[_._v("#")]),_._v(" 一、TCP 协议")]),_._v(" "),v("p",[_._v("TCP（Transport Control Protocol）是一个"),v("strong",[_._v("传输层协议")]),_._v("，提供 Host-To-Host 数据的可靠传输，支持全双工，是一个连接导向的协议。\n这里面牵涉很多概念，比如主机到主机、连接、会话、双工/单工及可靠性等，接下来我会为你逐一解释。")]),_._v(" "),v("h3",{attrs:{id:"_1-主机到主机-host-to-host"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-主机到主机-host-to-host"}},[_._v("#")]),_._v(" 1.主机到主机（Host-To-Host）")]),_._v(" "),v("p",[_._v("TCP 提供的是 Host-To-Host 传输，一台主机通过 TCP 发送数据给另一台主机。这里的主机（Host）是一个抽象的概念，可以是手机、平板、手表等。收发数据的设备都是主机，所以双方是平等的。\n"),v("img",{attrs:{src:"/upload/2022/04/image-1cd28caaf543456fb9f81ee276fabe30.png",alt:"image.png"}})]),_._v(" "),v("h3",{attrs:{id:"_2-tcp-协议往上是应用到应用-application-to-application-的协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp-协议往上是应用到应用-application-to-application-的协议"}},[_._v("#")]),_._v(" 2.TCP 协议往上是应用到应用（Application-To-Application）的协议")]),_._v(" "),v("p",[_._v("什么是应用到应用的协议呢？比如你用微信发信息给张三，你的微信客户端、微信聊天服务都是应用。微信有自己的聊天协议，微信的聊天协议是应用到应用的协议；如果微信的聊天协议想要工作，就需要一个主机到主机的协议帮助它实现通信。\n因此 TCP 上层的应用层协议使用 TCP 能力的时候，需要告知 TCP 是哪个应用——这就是"),v("strong",[_._v("端口号")]),_._v("。"),v("strong",[_._v("端口号用于区分应用")]),_._v("，\nTCP 要实现主机到主机通信，就需要知道主机们的网络地址（IP 地址），但是 TCP 不负责实际"),v("strong",[_._v("地址到地址")]),_._v("（Address-To-Address）的传输，因此 TCP 协议把 IP 地址给底层的"),v("strong",[_._v("互联网层处理")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"_3-互联网层-也叫网络层-network-layer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-互联网层-也叫网络层-network-layer"}},[_._v("#")]),_._v(" 3.互联网层，也叫网络层（Network Layer）")]),_._v(" "),v("p",[_._v("提供"),v("strong",[_._v("地址到地址")]),_._v("的通信，IP 协议就在这一层工作。互联网层解决地址到地址的通信，但是不负责信号在具体两个设备间传递。因此，网络层会调用下方的链路层在两个相邻设备间传递信息。当信号在两个设备间传递的时候，科学家又设计出了"),v("strong",[_._v("物理层封")]),_._v("装最底层的物理设备、传输介质等，由最下方的物理层提供最底层的传输能力。")]),_._v(" "),v("h2",{attrs:{id:"二、什么是连接和会话"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是连接和会话"}},[_._v("#")]),_._v(" 二、什么是连接和会话？")]),_._v(" "),v("p",[_._v("下一个关联的概念是"),v("strong",[_._v("连接（Connection）")]),_._v("——连接是数据传输双方的契约。\n连接是通信双方的一个约定，目标是让两个在通信的程序之间产生一个默契，"),v("strong",[_._v("保证两个程序都在线")]),_._v("，而且尽快地响应对方的请求，这就是连接（Connection）。")]),_._v(" "),v("p",[_._v("设计上，连接是一种传输数据的行为。传输之前，建立一个连接。具体来说，数据收发双方的内存中都建立一个用于"),v("strong",[_._v("维护数据传输状态的对象")]),_._v("，比如双方 IP 和端口是多少？现在发送了多少数据了？状态健康吗？传输速度如何？等。所以，"),v("strong",[_._v("连接是网络行为状态的记录。")])]),_._v(" "),v("p",[_._v("和连接关联的还有一个名词，叫作"),v("strong",[_._v("会话（Session）")]),_._v("，"),v("strong",[_._v("会话是应用的行为")]),_._v("。比如微信里张三和你聊天，那么张三和你建立一个会话。你要和张三聊天，你们创建一个聊天窗口，这个就是会话。你开始 Typing，开始传输数据，你和微信服务器间建立一个连接。如果你们聊一段时间，各自休息了，约定先不要关微信，1 个小时后再回来。那么连接会断开，因为聊天窗口没关，所以会话还在。\n在有些系统设计中，会话会自动重连（也就是重新创建连接），或者帮助创建连接。 此外，会话也负责在多次连接中保存状态，比如 HTTP Session 在多次 HTTP 请求（连接）间保持状态（如用户信息）。\n总结下，"),v("strong",[_._v("会话是应用层的概念，连接是传输层的概念。")])]),_._v(" "),v("h2",{attrs:{id:"三、双工-单工问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、双工-单工问题"}},[_._v("#")]),_._v(" 三、双工/单工问题")]),_._v(" "),v("p",[_._v("接下来我们聊聊什么是双工/单工。")]),_._v(" "),v("p",[_._v("在任何一个时刻，如果数据只能单向发送，就是"),v("strong",[_._v("单工")]),_._v("，所以单工需要至少一条线路。如果在某个时刻数据可以向一个方向传输，也可以向另一个方向反方向传输，而且交替进行，叫作"),v("strong",[_._v("半双工")]),_._v("；半双工需要至少 1 条线路。最后，如果任何时刻数据都可以双向收发，这就是"),v("strong",[_._v("全双工")]),_._v("，全双工需要大于 1 条线路。当然这里的线路，是一个抽象概念，你可以并发地处理信号，达到模拟双工的目的。")]),_._v(" "),v("p",[_._v("TCP 是一个双工协议，数据任何时候都可以双向传输。这就意味着客户端和服务端可以平等地发送、接收信息。正因为如此，客户端和服务端在 TCP 协议中有一个平等的名词——Host（主机）。")]),_._v(" "),v("h2",{attrs:{id:"四、什么是可靠性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、什么是可靠性"}},[_._v("#")]),_._v(" 四、什么是可靠性？")]),_._v(" "),v("p",[_._v("上文提到 TCP 提供可靠性，那么可靠性是什么？\n可靠性指数据保证无损传输。如果发送方按照顺序发送，然后数据无序地在网络间传递，就必须有一种算法在接收方将"),v("strong",[_._v("数据恢复原有的顺序")]),_._v("。另外，如果发送方同时要把消息发送给多个接收方，这种情况叫作多播，可靠性要求每个接收方都无损收到相同的副本。多播情况还有强可靠性，就是如果有一个消息到达任何一个接收者，那么所有接受者都必须收到这个消息。说明一下，本专栏中，我们都是"),v("strong",[_._v("基于单播讨论可靠性。")])]),_._v(" "),v("h2",{attrs:{id:"五、tcp-的握手和挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、tcp-的握手和挥手"}},[_._v("#")]),_._v(" 五、TCP 的握手和挥手")]),_._v(" "),v("p",[_._v("TCP 是一个连接导向的协议，设计有建立连接（握手）和断开连接（挥手）的过程。"),v("strong",[_._v("TCP 没有设计会话（Session）")]),_._v("，因为会话通常是一个应用的行为。")]),_._v(" "),v("h3",{attrs:{id:"_1-tcp-协议的基本操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp-协议的基本操作"}},[_._v("#")]),_._v(" 1.TCP 协议的基本操作")]),_._v(" "),v("p",[_._v("TCP 协议有这样几个基本操作：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果一个 Host 主动向另一个 Host 发起连接，称为 SYN（Synchronization），请求同步；")])]),_._v(" "),v("li",[v("p",[_._v("如果一个 Host 主动断开请求，称为 FIN（Finish），请求完成；")])]),_._v(" "),v("li",[v("p",[_._v("如果一个 Host 给另一个 Host 发送数据，称为 PSH（Push），数据推送。")])])]),_._v(" "),v("p",[_._v("以上 3 种情况，接收方收到数据后，都"),v("strong",[_._v("需要给发送方一个 ACK")]),_._v("（确认收到请求）（Acknowledgement）响应。请求/响应的模型是可靠性的要求，如果一个请求没有响应，发送方可能会认为自己需要重发这个请求。")]),_._v(" "),v("h3",{attrs:{id:"_2-建立连接的过程-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立连接的过程-三次握手"}},[_._v("#")]),_._v(" 2.建立连接的过程（三次握手）")]),_._v(" "),v("p",[_._v("因为要保持连接和可靠性约束，TCP 协议要保证每一条发出的数据必须给返回，返回数据叫作 ACK（也就是响应）。\n按照这个思路，你可以看看建立连接是不是需要 3 次握手：\n"),v("img",{attrs:{src:"/upload/2022/04/image-269b55aa60a94d9697d41559a4814766.png",alt:"image.png"}}),_._v("\n客户端发消息给服务端（SYN）")]),_._v(" "),v("p",[_._v("服务端准备好进行连接")]),_._v(" "),v("p",[_._v("服务端针对客户端的 SYN 给一个 ACK （服务端已经准备好了）")]),_._v(" "),v("p",[_._v("你可以能会问，到这里不就可以了吗？2 次握手就足够了。"),v("strong",[_._v("但其实不是，因为服务端还没有确定客户端是否准备好了")]),_._v("。比如步骤 3 之后，服务端马上给客户端发送数据，这个时候客户端可能还没有准备好接收数据。因此还需要增加一个过程。\n接下来还会发生以下操作：")]),_._v(" "),v("p",[_._v("服务端发送一个 SYN 给客户端（是否准备好接受数据了）")]),_._v(" "),v("p",[_._v("客户端准备就绪")]),_._v(" "),v("p",[_._v("客户端给服务端发送一个 ACK")]),_._v(" "),v("p",[_._v("你可能会问，上面不是 6 个步骤吗？ 怎么是 3 次握手呢？下面我们一起分析一下其中缘由。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("步骤 1 是 1 次握手；")])]),_._v(" "),v("li",[v("p",[_._v("步骤 2 是服务端的准备，不是数据传输，因此不算握手；")])]),_._v(" "),v("li",[v("p",[_._v("步骤 3 和步骤 4，因为是"),v("strong",[_._v("同时发生的")]),_._v("，可以合并成一个 SYN-ACK 响应，作为一条数据传递给客户端，因此是第 2 次握手；")])]),_._v(" "),v("li",[v("p",[_._v("步骤 5 不算握手；")])]),_._v(" "),v("li",[v("p",[_._v("步骤 6 是第 3 次握手。")])])]),_._v(" "),v("p",[_._v("为了方便你理解步骤 3 和步骤 4，这里我画了一张图。可以看到下图中 SYN 和 ACK 被合并了，因此建立连接一共需要 3 次握手，过程如下图所示：\n"),v("img",{attrs:{src:"/upload/2022/04/image-90877c2541e946ecb3531ccf6715dd2c.png",alt:"image.png"}}),_._v("\n从上面的例子中，你可以进一步思考 SYN、ACK、PSH 这些常见的标识位（Flag）在传输中"),v("strong",[_._v("如何表示")]),_._v("。")]),_._v(" "),v("p",[_._v("一种思路是为 TCP 协议增加协议头。在协议头中取多个位（bit），其中 SYN、ACK、PSH 都占有 1 个位。比如 SYN 位，1 表示 SYN 开启，0 表示关闭。因此，SYN-ACK 就是 SYN 位和 ACK 位都置 1。这种设计，我们也称为标识（Flag）。标识位是放在 TCP 头部的，关于标识位和 TCP 头的内容，我会在“04 | TCP 的稳定性：滑动窗口和流速控制是怎么回事？”中详细介绍。")]),_._v(" "),v("h3",{attrs:{id:"_3-断开连接的过程-4-次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-断开连接的过程-4-次挥手"}},[_._v("#")]),_._v(" 3.断开连接的过程（4 次挥手）")]),_._v(" "),v("p",[_._v("继续上面的思路，如果断开连接需要几次握手？给你一些提示，你可以在脑海中这样构思。")]),_._v(" "),v("p",[_._v("客户端要求断开连接，发送一个断开的请求，这个叫作（FIN）。")]),_._v(" "),v("p",[_._v("服务端收到请求，然后给客户端一个 ACK，作为 FIN 的响应。")]),_._v(" "),v("p",[_._v("这里你需要思考一个问题，可不可以像握手那样马上传 FIN 回去？\n其实这个时候服务端不能马上传 FIN，因为"),v("strong",[_._v("断开连接要处理的问题比较多")]),_._v("，比如说服务端可能还有发送出去的消息没有得到 ACK；也有可能服务端自己有资源要释放。因此断开连接不能像握手那样操作——将两条消息合并。所以，"),v("strong",[_._v("服务端经过一个等待")]),_._v("，确定可以关闭连接了，再发一条 FIN 给客户端。")]),_._v(" "),v("p",[_._v("客户端收到服务端的 FIN，同时客户端也可能有自己的事情需要处理完，比如客户端有发送给服务端没有收到 ACK 的请求，客户端自己处理完成后，再给服务端发送一个 ACK。")]),_._v(" "),v("p",[_._v("经过以上分析，就可以回答上面这个问题了。是不是刚刚好 4 次挥手？过程如下图所示：\n"),v("img",{attrs:{src:"/upload/2022/04/image-27d16b289cbd4beea465782f71821b9d.png",alt:"image.png"}})]),_._v(" "),v("h3",{attrs:{id:"_4-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[_._v("#")]),_._v(" 4.总结")]),_._v(" "),v("p",[_._v("在学习 3 次握手、4 次挥手时，你一定要理解为什么这么设计，而不是死记硬背。最后。我们一起总结一下今天的重点知识。")]),_._v(" "),v("p",[_._v("TCP 提供连接（Connection），让双方的"),v("strong",[_._v("传输更加稳定、安全")]),_._v("。")]),_._v(" "),v("p",[_._v("TCP 没有直接提供会话，因为应用对"),v("strong",[_._v("会话的需求")]),_._v("多种多样，比如聊天程序会话在保持双方的聊天记录，电商程序会话在保持购物车、订单一致，所以会话通常在 TCP 连接上进一步封装，在应用层提供。")]),_._v(" "),v("p",[_._v("TCP 是一个面向"),v("strong",[_._v("连接的协议")]),_._v("（Connection -oriented Protocol），说的就是 TCP 协议参与的双方（Host）在收发数据之前会先建立连接。后面我们还会学习 UDP 协议，UDP 是一个面向报文（Datagram-oriented）的协议——协议双方不需要"),v("strong",[_._v("建立连接")]),_._v("，直接传送报文（数据）。")]),_._v(" "),v("p",[_._v("最后，连接需要消耗更多的资源。比如说，在传输数据前，必须先协商建立连接。因此，不是每种场景都应该用连接导向的协议。像视频播放的场景，如果使用连接导向的协议，服务端每向客户端推送一帧视频，客户端都要给服务端一次响应，这是不合理的。（有些时候需要用tcp 有些使用用udp）")]),_._v(" "),v("p",[v("strong",[_._v("那么通过这一讲的学习，你现在可以尝试来回答本讲关联的面试题目：TCP 为什么是 3 次握手，4 次挥手？")])]),_._v(" "),v("p",[v("strong",[_._v("【解析】")]),_._v(" TCP 是一个双工协议，为了让双方都保证，建立连接的时候，连接双方都需要向对方发送 SYC（同步请求）和 ACK（响应）。\n握手阶段双方都没有烦琐的工作，因此一方向另一方发起同步（SYN）之后，另一方可以将自己的 ACK 和 SYN 打包作为一条消息回复，因此是 3 次握手——需要 3 次数据传输。\n到了挥手阶段，双方都可能有未完成的工作。收到挥手请求的一方，必须马上响应（ACK），表示接收到了挥手请求。类比现实世界中，你收到一个 Offer，出于礼貌你先回复考虑一下，然后思考一段时间再回复 HR 最后的结果。最后等所有工作结束，再发送请求中断连接（FIN），因此是 4 次挥手。")])])}),[],!1,null,null,null);t.default=a.exports}}]);