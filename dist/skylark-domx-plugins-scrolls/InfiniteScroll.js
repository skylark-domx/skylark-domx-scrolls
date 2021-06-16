/**
 * skylark-domx-plugins-scrolls - The skylark scrolls plugins library for dom api extension
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx-plugins/skylark-domx-plugins-scrolls/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-browser","skylark-domx-eventer","skylark-domx-noder","skylark-domx-geom","skylark-domx-query","skylark-domx-plugins-base","./scrolls"],function(e,t,n,i,o,l,s,r){"use strict";var c=s.Plugin.inherit({klassName:"InfiniteScroll",pluginName:"lark.scrolls.infinitescroll",options:{dataSource:null,hybrid:!1,percentage:95},_construct:function(t,n){this.overrided(t,n),this.$element=this.$(),this.$element.addClass("infinitescroll"),this.curScrollTop=this.$element.scrollTop(),this.curPercentage=this.getPercentage(),this.fetchingData=!1,this.$element.on("scroll.domx.infinitescroll",e.proxy(this.onScroll,this)),this.onScroll()},destroy:function(){return this.$element.remove(),this.$element.empty(),this.$element[0].outerHTML},disable:function(){this.$element.off("scroll.domx.infinitescroll")},enable:function(){this.$element.on("scroll.domx.infinitescroll",e.proxy(this.onScroll,this))},end:function(e){var t=l('<div class="infinitescroll-end"></div>');e?t.append(e):t.append("---------"),this.$element.append(t),this.disable()},getPercentage:function(){var e="border-box"===this.$element.css("box-sizing")?this.$element.outerHeight():this.$element.height(),t=this.$element.get(0).scrollHeight;return t>e?e/(t-this.curScrollTop)*100:0},fetchData:function(e){var t,n=l('<div class="infinitescroll-load"></div>'),i=this,o=function(){var e={percentage:i.curPercentage,scrollTop:i.curScrollTop},t=l('<div class="loader"></div>');n.append(t),t.loader(),i.options.dataSource&&i.options.dataSource(e,function(e){var t;n.remove(),e.content&&i.$element.append(e.content),e.end&&(t=!0!==e.end?e.end:void 0,i.end(t)),i.fetchingData=!1})};this.fetchingData=!0,this.$element.append(n),this.options.hybrid&&!0!==e?(t=l('<button type="button" class="btn btn-primary"></button>'),"object"==typeof this.options.hybrid?t.append(this.options.hybrid.label):t.append('<span class="glyphicon glyphicon-repeat"></span>'),t.on("click.domx.infinitescroll",function(){t.remove(),o()}),n.append(t)):o()},onScroll:function(e){this.curScrollTop=this.$element.scrollTop(),this.curPercentage=this.getPercentage(),!this.fetchingData&&this.curPercentage>=this.options.percentage&&this.fetchData()}});return s.register(c),r.InfiniteScroll=c});
//# sourceMappingURL=sourcemaps/InfiniteScroll.js.map
