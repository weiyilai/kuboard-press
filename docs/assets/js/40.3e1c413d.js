(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{377:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"从客户端电脑远程管理-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从客户端电脑远程管理-kubernetes","aria-hidden":"true"}},[t._v("#")]),t._v(" 从客户端电脑远程管理 Kubernetes")]),t._v(" "),e("p",[t._v("日常工作中，您可能需要在自己的笔记本电脑上执行 kubectl 命令管理远程 Linux 服务器上的 Kubernetes 集群。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("从客户端电脑使用 kubectl 远程管理 Kubernetes，这个步骤并不是使用 Kuboard 的必要步骤。"),e("span",{staticStyle:{color:"red","font-weight":"500"}},[t._v("可以忽略")])])]),t._v(" "),e("h2",{attrs:{id:"在客户端电脑安装-kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在客户端电脑安装-kubectl","aria-hidden":"true"}},[t._v("#")]),t._v(" 在客户端电脑安装 kubectl")]),t._v(" "),e("p",[t._v("Kubernetes 官网文档参照 "),e("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 kubectl"),e("OutboundLink")],1),t._v(" 安装时，经常会失败，因为国内访问 google 的镜像仓库存在问题。")]),t._v(" "),e("p",[t._v("请参考下述内容，完成 kubectl 的安装")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"Linux",lazy:""}},[e("p",[e("strong",[t._v("配置K8S的yum源")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("EOF "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/yum.repos.d/kubernetes.repo\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Kubernetes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("repo_gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])]),e("p",[e("strong",[t._v("安装kubectl")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y kubectl-1.15.0\n")])])]),e("p",[e("strong",[t._v("验证安装")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl version\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Windows",lazy:""}},[e("p",[t._v("待完善")])]),t._v(" "),e("Tab",{attrs:{label:"Mac",lazy:""}},[e("p",[t._v("待完善")])])],1),t._v(" "),e("h2",{attrs:{id:"获取-kubectl-config-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-kubectl-config-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 kubectl config 文件")]),t._v(" "),e("p",[t._v("如果您参考 "),e("a",{attrs:{href:"install-k8s"}},[t._v("安装 Kubernetes 单Master节点")]),t._v(" 或 "),e("a",{attrs:{href:"install-kubernetes"}},[t._v("安装 Kubernetes 高可用")]),t._v(" 完成了 Kubernetes 安装，"),e("strong",[t._v("请在 demo-master-a-1 节点上执行如下命令")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/kubernetes/admin.conf\n")])])]),e("p",[t._v("输出内容如下所示：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certificate-authority-data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LS0tLS1CRxpJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRFNU1EY3hPREEzTURFMU1Gb1hEVEk1TURjeE5UQTNNREUxTUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWxfY05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTUlvCit1TDVvWWFaMUc5UVR2SS9Cd0RNWWNNOTVqVkdNN2E1eWZIQWtBTVptOThWNGdDamNTd0NhOWFEbHJOKzliSUkKK054OXc3L0phdG1mb1ZwYlNoZ3dqc0lBT3QrTXlxQTh1WFVvMXlwSGFBd2NkaXhYbk81ZlVRRTlKN2xDbm9NZApKM0RYNmhNWnVmNmxwRVVBK2JkaVVTYzdkOEFKVDRpSm41bDAyL21pd3hRZUJweWwzQXFGVUZUQTQxUlNLbnBECjBuTzdoaEk3cE02aUVUTVBSa29lZkZrcHFtSEhqd0g5MGZQVzhETGgwdG5ENUlTM0VUUlVjMDdHbms0ZWh1OWMKamNhRXoxK1Roe3JhcWFTRmpTdUVSMGxhU3BYOXQyd3k1S3NxZFVBRkQySGNDK0Y1eUsvTXppL2krS01FdTM0SQpiTHJNUy90L3lta1V5RTQ3T3FrQ0F3RUFBYU1qTUNFd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZ0QU1CQWY4d0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFFbXRORFVVZ2FhRWs3Z0lSMnE1MkRxZ21FRkMKZW1xR21rT3U5UERvVmZ0Z0Nva3VBUXEzZzBVdzA3cTJTQnhSZzJDNzQ2Y08wbkdURFZlL2ecXNmeVBFK2RFbApPQWJmQ3R1QUlKTHVQWDB6OVBUdDBKekhobnk1ODk5RE81ODdLMm5VdXd3S01xeEYvdWRHMUNtWUkza2g2cS9RCmN0WDI5RjlhTWhDRXluWU1lVU5EUVQ4cGN0TkOpNm4rYjg0NDlmMU5RWG9kVzM0TVRrL25pd3JuQ3pDUUE5M0wKR3YxelhRL2pwTTZVeVo5dU9ZNWEzK096UjJCTzRtZ2RiL0xoam5rL0hxTGs5RUszZmhJak5Tc2h0RWsrf9NpVApPQ3JTQkRHVk5ueHIzeGRwYzltRWNCeDlQdVBqVE1ER1ZkYlowUlZHbGVVODN3dVpUaTdJdUZaR2Jicz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//apiserver.demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6443")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contexts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin@kubernetes\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("current-context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin@kubernetes\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Config\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preferences")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("users")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-certificate-data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM4akNDQxxRxZ0F3SUJBZ0lJY0JpMFhjUWJNWm93RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB4T1RBM01UZ3dOekF4TlRCYUZ3MHlNREEzTVRjd056QXhOVEZhTURReApGekFWQmdOVkJBb1REbk41YzNSbGJUcHRZWE4wWlhKek1Sa3dGd1lEVlFRREV4QnJkV0psY201bGRHVnpMV0ZrCmJXbHVNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQW9CYzZvMHRCekIyRUlldW4KcmhONTVoaU1EaEplcUpxMWxlT3VUSjRic0dqVnlrQVJQVCtGZDlTR3llRjNFZS9NS1ZBcUQ4ZzRXeHNoTTRrdAp1dnVNalNTeit3bnMySnR2TWtJWStLT2FhZFBFSUx6U3dyamxucGRQbjMvQmtTbjc1SnVzRWFLR0NCN0c5Skk3CnJOK3lkc2ZLT29KQTE1ak8vR2VvdC90UGpWNGQ4MldCbVltWitSa1labW43STFPOHh4aFpjVDNDT0QxeVp3OS8KTjBYVnZQYkFzY1QweU91ZG5JMWpFQ3p1cHdKWnZRTENiMEJHb1MxSGxpVDFnL1o0WjBuYW5LdythYkdXamptNQpGbmZTZ2JQblNzOTI5NWNzQW5KQy9MRXZFTE90NEUxQkVHa2JkZTBuNXJnKzhKVjhDOWFPWkFOxhP2aU5iMExuCkdpQ2p6UUlEQVFBQm95Y3dKVEFPQmdOVkhROEJBZjhFQkFNQ0JhQXdFd1lEVlIwbEJBd3dDZ1lJS3dZQkJRVUgKQXdJd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFJYnd3RFJ6VExUbXNrV3R0NEZLbG1xK0NNYTRWZUFqL2x4bQpuaEdITTlTaXpFR1VDRDJ5UjEyQUV0YUdka0R5KzNuT3Q3aS9Db3Jwcm5ocnkwZHMzck81Q3BvMXAwdHNyQnZ5CkRiM1dDTDRkN2x0alplNklZQ0xGNmJCVkJmejJjY0FpZEdieW1UaVhwQU5pK25hOE8wZ3NBTmNUS1JaNG1nNDgKUXpWQktlUnZZWnhwcEV5T2JoelI2NTVoRE1aR3AzdG5pQW9NL3Z6QjA3R2dybzAxVTAvaUVOQnZaeG10S2RxRApFY0JVTzJRTHh3QlZaMFlMb0p2MmJWSTVMYWdmRDNwVFVDQ3A5MURGcDAwbmVHRUM0cDZmQXJwSG9YWU8yYVIyCjZtbEREdVhGNmg2Um53frkxU3N6MWZtSXVzZ2FXaHZUaGgrVGxQVVVTclFkZnQ2S0d4bz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client-key-data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBb0JjNm8wdEJ6QjJFSWV1bnJoTjU1aGlNRGhKZXFKcTFsZU91VEo0YnNHalZ5a0FSClBUK0ZkOVNHeWVGM0VlL01LVkFxRDhnNFd4c2hNNGt0dXZ1TWpTU3ord25zMkp0dk1rSVkrS09hYWRQRUlMelMKd3JqbG5wZFBuMy9Ca1NuNzVKdXNFYUtHQ0I3RzlKSTdyTit5ZHNmS09vSkExNWpPL0dlb3QvdFBqVjRkODJXQgptWW1aK1JrWVptbjdJMU84eHhoWmNUM0NPRDF5Wnc5L04wWFZ2UGJBc2NUMHlPdWRuSTFqRUN6dXB3Slp2UUxDCmIwQkdvUzFIbGlUMWcvWjRaMG5hbkt3K2FiR1dqam01Rm5mU2diUG5TczkyOTVjc0FuSkMvTEV2RUxPdDRFMUIKRUdrYmRlMG41cmcrOEpWOEM5YU9aQU5NRHZpTmIwTG5HaUNqelFJREFRQUJBb0lCQUFPOHh4ZXMyQnBsemdIawp1SU50M1Bpc05naldFUE9xdVBhSTNEYlpzaGZLT3NOLy8yY0lwcHNIa1NZQlo0QTVzdkI3K0o5cHN6Y2RTUWNrCityWlV6UkUyZkNVdU5DTlNiYVXsdXVTREhVVy9OZUwxeFkzYU56SWVvak05RGszUFJ4d3RMalV6TUNIY1poU3IKblUwSjQrYTEvMWlpVmRVeXNoSmVjU2ZxYkE4R3pBUlpLUjlYdDZlU01qQXZqdlp4QUtVMVFYWDlHL3JPNnRqUwpXNjJ5aTlkaG5vYjRBR3ovTlhmN29JZld0dW9SUTcxOFdmxm5kZWZYeVp6MnNwc3V4ZGttRUtrQW9qZ2NqbjI3CnRCeFBlUFcveWRqQ3IzTTA3WGVWVDAyaG5UQXptVnFtcUFhbG5rYkpqT0Z5dkQxNE5Cck9Lc2FoK21CUkZLTUEKSjErdUlZRUNnWUVBeTNCZGMrNTJ0SkhGQm8vL1BjU0FMOHhRQVZXTjFoakZ1Nk1BY2Q5WVF6NkhWNWdDYU1oQwpUWFZrNmt5TC9qcEdYS1E1MmVpbTBrOFUvYWc2VXVlV0Uzek45ZDJ3ci9oeDljUjFLUUxmMlpJUmNrN3ZTRUhnEct0ejFWVlhMRDZBTHlKeThGRHhMbFV0ZGRJb3R6YUNOM1d2UXhybTRYV2pCYi82UnBDQTlWLzBDZ1lFQXlYUEcKaldxdXEvYnFCMlphMGNpVUh5NnJIbGQrRVBKNXg0cWlRc0JaUnpZK085TmxuajJnaU5lcU9mRHVjeU5yQ2JBRwo2RkRSTkMrdG9TVVVpWWhtNmgyeXpuc3JOS0pQbHdqN2VGQ1JadFFSb0ErSHpWajBaTnRuQjBNRnhzcUsyeTdSClGnVVlXWmRaTmJSSFVyeTJ0VFk3RHM5UHlITncyU2p5ZERJd3ZCRUNnWUFOczYyM3B6SDdpMjNYdVU4Vm0raCsKVDZaNzBJVlREQ3dWTFM5VWZCUjN3dmhlbi9CWm1sTk00RUZCdnBJWE4xbVIxOFhGdFhPMjZuaWhkUGtvcUV4bApWNXlQbUxUVHhVbjNvWm02ZjJVUVJGUkVmS2lGRjFyR3lYY0VubGlrM3NTc2FGSUtrdDBNV3gwYVFrdy9jemJhCjJPNGcxRlZraFMreUdWVTUxcW9MQ1FLQmdDOHdwN3BJMjFIOUxTVStuTmUzbkxzUk81U0gra2dPQk9qeFdNRTYKUGErb3pUdEdjZTkza0R0K0NhbzQvaUtLa1hCYmc4SzM2OG5Gd1c2V09SRmVtbjBOSisybWZLQi94UlVrVFlRSgptNFh5OTQzL0ZWak5GYkxxa2wvcEcxbE42T2tmTm5rRCtBaEVvK2tvcWc4cTljSE5TbGhWeCtLMDZDSjJyUlQ3CkROK0JBb0dB63h1R3g5OHc0MENESWlHWmhDWGY0ZTRxTllWdVhTcm9YTDVpeWFKTDZka3BLSE9UUk5VSlBmSVYKZ1FDMy9rN0xYZkFjbTNqTktSS1huQ2cveWxTd2N6RjFGYkZKb1hjNW9ackc5TE8yQXNSdGcxanByN1ZpRlZNYwo0LzB5cEFSTmJqRzA4Y0I5bzBrbVBjUVExUHd4Q05EeXVONVRQYzRKejN3OHR5SnhTN289Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg==\n")])])]),e("h2",{attrs:{id:"配置-kubectl-客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubectl-客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 kubectl 客户端")]),t._v(" "),e("p",[t._v("在客户端电脑完成如下配置，即可远程管理 Kubernetes 集群")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"Linux",lazy:""}},[e("p",[e("strong",[t._v("执行命令")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.kube/config\n")])])]),e("p",[t._v("将前面获得的 "),e("code",[t._v("/etc/kubernetes/admin.conf")]),t._v(" 文件的内容粘贴进该文件并保存")]),t._v(" "),e("p",[e("strong",[t._v("配置 hosts")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x.x.x.x    apiserver.demo"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts\n")])])]),e("blockquote",[e("ul",[e("li",[t._v("将 x.x.x.x 替换成 demo-master-a-1 的实际 IP 地址")]),t._v(" "),e("li",[t._v("将 apiserver.demo 替换成前面获得 "),e("code",[t._v("/etc/kubernetes/admin.conf")]),t._v(" 文件中 "),e("code",[t._v("clusters/cluster/server")]),t._v(" 中 URL 里 host 对应的部分")])])]),t._v(" "),e("p",[e("strong",[t._v("验证安装结果")])]),t._v(" "),e("p",[t._v("执行命令")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("kubectl get nodes\nkubectl get pods -n kube-system\n")])])]),e("Tab",{attrs:{label:"Windows",lazy:""}},[e("p",[t._v("待完善")])])],1),t._v(" "),e("Tab",{attrs:{label:"Mac",lazy:""}},[e("p",[t._v("待完善")])])],1)],1)},[],!1,null,null,null);a.default=n.exports}}]);