(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{336:function(t,e,r){"use strict";r.r(e);var c=r(264),n=r(265),o=r(266),d=r(267),h=r(268),m=r(270),l=r(278),f=r(274),$=r(271),y=r(275),k=r(273),C=r(272),w=r(246),_={components:{ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:l.a,ConfirmedCasesAttributesCard:f.a,TestedNumberCard:$.a,PatientsByAge:y.a,PatientsByClusters:k.a,PatientsAndSickbeds:C.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=n.last_update;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=c.last_update;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=c.last_update;break;case"number-of-tested":title=this.$t("検査実施件数"),t=n.last_update;break;case"patients-by-age":title=this.$t("年代別陽性患者数"),t=o.last_update;break;case"patients-by-clusters":title=this.$t("クラスター別陽性患者数"),t=d.last_update;break;case"patients-and-sickbeds":title=this.$t("入院患者数と残り病床数"),t=h.last_update}var data={title:title,updatedTimeStr:Object(w.a)(t)};return data},head:function(){var t="https://stop-covid19-hyogo.org",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),c="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志のクリエイターが開設したものです。公式情報ではないことをご了承ください。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("兵庫県非公式")+" "+this.$t("新型コロナウイルス")+this.$t("まとめサイト")},{hid:"description",name:"description",content:c},{hid:"og:description",property:"og:description",content:c},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},v=r(4),component=Object(v.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"patients-by-age"==this.$route.params.card?e("patients-by-age"):"patients-by-clusters"==this.$route.params.card?e("patients-by-clusters"):"patients-and-sickbeds"==this.$route.params.card?e("patients-and-sickbeds"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);