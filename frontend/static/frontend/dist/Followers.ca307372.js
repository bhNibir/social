parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"coG0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=E(require("react")),t=require("react-redux"),l=require("react-router-dom"),r=E(require("@material-ui/core/Typography")),a=E(require("../../components/AuthLayout")),u=E(require("../../components/BackButton")),o=E(require("../../components/FollowNav")),n=E(require("../../components/Heading")),s=E(require("../../components/Loading")),d=E(require("../../components/NextButton")),i=E(require("../../components/NoData")),c=E(require("../../components/PageTitle")),f=E(require("../../components/UserList")),m=E(require("../../components/UserSlug")),p=E(require("../../hooks/useProfileUser")),g=E(require("../../hooks/useUI")),q=require("../../redux/profile"),y=require("../../redux/user");function E(e){return e&&e.__esModule?e:{default:e}}var h=function(){var E=(0,t.useDispatch)(),h=(0,l.useParams)().slug,x=(0,t.useSelector)(function(e){return(0,q.selectFollowers)(e,h)}),v=(0,t.useSelector)(y.selectUser),w=(0,p.default)(h),U=w.profileUser,_=w.profileUserLoading,k=(0,g.default)(q.key.followers(h),q.key.followersNext(h)),b=k.fetched,F=k.loading,L=k.nextLoading;e.default.useEffect(function(){b||E((0,q.getFollowers)(h))},[h]);return e.default.createElement(e.default.Fragment,null,e.default.createElement(c.default,{title:"People following ".concat(U.display_name||h)}),e.default.createElement(a.default,null,e.default.createElement(n.default,null,e.default.createElement(u.default,null),e.default.createElement("div",null,e.default.createElement(r.default,{variant:"h6"},U.display_name||h),!_&&e.default.createElement(m.default,{profileUser:U}))),e.default.createElement(o.default,{active:"followers",slug:h}),F?e.default.createElement(s.default,null):x.results.length?e.default.createElement(f.default,{list:x.results}):e.default.createElement(i.default,null,e.default.createElement(r.default,{paragraph:!0,variant:"h6"},v.slug===h?"You aren't":"".concat(U.display_name||h," isn't")," ","followed by anyone"),e.default.createElement(r.default,{color:"textSecondary",paragraph:!0,variant:"body2"},"When"," ",v.slug===h?"you're":"".concat(U.display_name||h," is")," ","followed by someone they'll show up here.")),e.default.createElement(d.default,{callback:function(){E((0,q.getFollowers)(h,x.next))},loading:L,nextUrl:x.next})))},x=h;exports.default=x;
},{"react":"dmLA","react-redux":"h1WH","react-router-dom":"eu5S","@material-ui/core/Typography":"l2jE","../../components/AuthLayout":"VZr3","../../components/BackButton":"YYiI","../../components/FollowNav":"I6ih","../../components/Heading":"oTXS","../../components/Loading":"eIQF","../../components/NextButton":"Wt1G","../../components/NoData":"bmZh","../../components/PageTitle":"KsuC","../../components/UserList":"BoSD","../../components/UserSlug":"GRuB","../../hooks/useProfileUser":"J9ZG","../../hooks/useUI":"cL7R","../../redux/profile":"gvSt","../../redux/user":"hw6E"}],"sncq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./Followers"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./Followers":"coG0"}]},{},[], null)
//# sourceMappingURL=/Followers.ca307372.js.map