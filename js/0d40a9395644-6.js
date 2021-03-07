(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6], {
        277: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return h
            }));
            var n = a(0),
                r = a.n(n),
                o = a(427),
                i = a(450);

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? d(t) : e
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function f(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var h = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, s = u(p);

                function p(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), f(d(e = s.call(this, t)), "toggleQvImageZoomed", (function(t) {
                        var a = e.state.qvImageZoomed;
                        e.setState({
                            qvImageZoomed: !a
                        });
                        var n = t.clientX - 120,
                            r = t.clientY - 20;
                        e.setState({
                            x: n
                        }), e.setState({
                            y: r
                        })
                    })), f(d(e), "mainImageClick", (function(t) {
                        "QuickViewDisplay" == e.props.contentData.productLayout ? e.toggleQvImageZoomed(t) : e.props.mainImageClicked()
                    })), e.state = {
                        qvImageZoomed: !1,
                        x: null,
                        y: null,
                        newZoomSize: {}
                    }, e
                }
                return e = p, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.quickViewMainImage && "desktop" != this.props.passedAppFunctions.siteFormat && (Object(i.a)(), $("div.qv-pinch-zoom").each((function() {
                            new RTP.PinchZoom($(this), {})
                        })))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.state.qvImageZoomed && $(".main-img-wrapper").scrollTop(this.state.y), this.state.qvImageZoomed && $(".main-img-wrapper").scrollLeft(this.state.x)
                    }
                }, {
                    key: "getAltTextFromAltData",
                    value: function(t) {
                        for (var e = this.props.contentData.altImages || [], a = 0; a < e.length; a++) {
                            var n = e[a];
                            if (t == n.imageName) return n.altText
                        }
                        return ""
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.contentData,
                            e = "",
                            a = "",
                            n = "";
                        this.props.productDisplayEcard, e = "//dimg.dillards.com/is/image/DillardsZoom/mainProduct/" + t.fullImage.imageNameForUrl, a = "".concat(e + "/" + t.fullImage.imageNameNoPath, ".jpg"), n = t.fullImage.altText;
                        var i = this.props.selectedMainImg;
                        !0 === this.props.productDisplayEcard && 4 !== i.length && (i = t.ecardImages[0].imageName), "undefined" != typeof window && window.injectedMainImageFunction && (i = window.injectedMainImageFunction(i)), i && (e = "", !0 === this.props.productDisplayEcard && i.indexOf("$") > -1 ? a = "".concat(e = "//dimg.dillards.com/is/content/DillardsZoom/DillardsZoom", "/ecard_").concat(i, ".gif") : !0 === this.props.productDisplayEcard ? (e = "//dimg.dillards.com/is/image/DillardsZoom/mainProduct/" + t.fullImage.imageNameForUrl, a = "".concat(e, "/ecard_").concat(i, ".jpg")) : (e = "//dimg.dillards.com/is/image/DillardsZoom/mainProduct/" + t.fullImage.imageNameForUrl, a = "".concat(e, "/").concat(i, ".jpg"))), n = this.getAltTextFromAltData(i || this.props.contentData.fullImage.imageNameNoPath) || n;
                        var s = null != this.props.contentData.productLayout ? this.props.contentData.productLayout : "",
                            c = this.props.passedAppFunctions ? this.props.passedAppFunctions.siteFormat : "";
                        switch (s) {
                            case "OutfitDisplay":
                            case "BundleDisplay":
                                var l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 545,
                                    u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 632;
                                break;
                            case "OutfitComponent":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 285, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 331;
                                break;
                            case "ProductDisplay":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 570, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 661;
                                break;
                            case "ProductItemAttrDisplay":
                            case "ProductItemDisplay":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 445, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 516;
                                break;
                            case "ProductDisplayChanel":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 570, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 661;
                                break;
                            case "ProductItemDisplayChanel":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 475, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 551;
                                break;
                            case "QuickViewDisplay":
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 570, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 661;
                                break;
                            default:
                                l = null != this.props.mainImgWidth ? this.props.mainImgWidth : 570, u = null != this.props.mainImgHeight ? this.props.mainImgHeight : 661
                        }
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("figure", {
                            className: "main-img-wrapper",
                            id: "main-img-wrapper"
                        }, this.props.quickViewMainImage && "desktop" != c ? r.a.createElement("div", {
                            className: "pinch-zoom-container"
                        }, r.a.createElement("div", {
                            className: "qv-pinch-zoom"
                        }, r.a.createElement("img", {
                            src: a,
                            alt: n
                        }))) : "desktop" != c && "OutfitComponent" == s || "tablet" === c || "mobile" === c ? r.a.createElement("img", {
                            src: a,
                            alt: n,
                            onClick: this.props.openPhotoSwipe
                        }) : r.a.createElement(o.a, {
                            baseImage: {
                                alt: n,
                                src: a,
                                width: l,
                                height: u
                            },
                            largeImage: {
                                alt: n,
                                src: a,
                                width: 1760,
                                height: 2040
                            },
                            thumbnailImage: {
                                alt: n,
                                src: a
                            }
                        })))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component)
        },
        278: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(129);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        var t = this.props.contentData,
                            e = t.brandNameForTitle,
                            a = t.productName || "",
                            n = t.brandUrl;
                        return t.productLayout.indexOf("Quick"), this.props.isBundle ? r.a.createElement("h2", {
                            className: "product__title m-b-10"
                        }, r.a.createElement("span", {
                            className: "product__title--brand m-b-10"
                        }, r.a.createElement(o.a, {
                            to: n
                        }, e)), r.a.createElement("span", {
                            className: "product__title--desc m-b-10"
                        }, a.split("#double;").join('"').split("&trade;").join("™"))) : r.a.createElement("h1", {
                            className: "product__title m-b-10"
                        }, r.a.createElement("span", {
                            className: "product__title--brand m-b-10"
                        }, r.a.createElement(o.a, {
                            to: n
                        }, e)), r.a.createElement("span", {
                            className: "product__title--desc m-b-10"
                        }, a.split("#double;").join('"').split("&trade;").join("™")))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component)
        },
        279: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return D
            }));
            var n = a(0),
                r = a.n(n),
                o = a(3);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(i, t);
                    var e, a, n, o = u(i);

                    function i() {
                        return s(this, i), o.apply(this, arguments)
                    }
                    return e = i, (a = [{
                        key: "render",
                        value: function() {
                            var t = this.props.contentData,
                                e = t.dept,
                                a = t.mic,
                                n = t.style;
                            return r.a.createElement("div", null, e && a && n ? r.a.createElement("span", {
                                className: "dept-mic-style"
                            }, "DMS: ", e, " ", a, " ", n) : "")
                        }
                    }]) && c(e.prototype, a), n && c(e, n), i
                }(r.a.Component),
                f = a(304),
                h = a(295);

            function y(t) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function b(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e) {
                return (g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = E(t);
                    if (e) {
                        var r = E(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return w(this, a)
                }
            }

            function w(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? S(t) : e
            }

            function S(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function E(t) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var D = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && g(t, e)
                }(s, t);
                var e, a, n, i = v(s);

                function s(t) {
                    var e;
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, s),
                        function(t, e, a) {
                            e in t ? Object.defineProperty(t, e, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = a
                        }(S(e = i.call(this, t)), "descriptionToggled", (function(t) {
                            e.setState({
                                descriptionOpened: !1 !== t && !e.state.descriptionOpened
                            })
                        })), e.state = {
                            descriptionOpened: e.props.open || !1
                        }, e
                }
                return e = s, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "panel product-description-wrapper"
                        }, r.a.createElement("button", {
                            type: "button",
                            onClick: this.descriptionToggled,
                            className: "panel-title product-description-title",
                            "aria-controls": "product-description-".concat(this.props.contentData.productId),
                            "aria-expanded": !0 === this.state.descriptionOpened ? "true" : "false",
                            ref: this.descButton
                        }, "Description", !0 === this.state.descriptionOpened ? r.a.createElement("i", {
                            className: "panel-icon expanded"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.84 48.84"
                        }, r.a.createElement("title", null, "plus"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M47.84,23.41H25.47V1a1,1,0,0,0-2,0v22.4H1a1,1,0,0,0,0,2H23.45v22.4a1,1,0,1,0,2,0V25.43H47.84a1,1,0,1,0,0-2Z"
                        }))))) : r.a.createElement("i", {
                            className: "panel-icon"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.84 48.84"
                        }, r.a.createElement("title", null, "plus"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M47.84,23.41H25.47V1a1,1,0,0,0-2,0v22.4H1a1,1,0,0,0,0,2H23.45v22.4a1,1,0,1,0,2,0V25.43H47.84a1,1,0,1,0,0-2Z"
                        })))))), r.a.createElement("div", {
                            className: "col-sm-12 product-description ".concat(!0 === this.state.descriptionOpened ? "" : "hidden"),
                            id: "product-description-".concat(this.props.contentData.productId)
                        }, r.a.createElement(h.b, {
                            contentData: this.props.contentData
                        }), r.a.createElement(f.b, {
                            contentData: this.props.contentData,
                            passedAppFunctions: this.props.passedAppFunctions
                        }), this.props.contentData.preOrder && this.props.contentData.preOrderText ? r.a.createElement("div", {
                            id: "preorder-alert",
                            className: "alert alert-warning",
                            role: "alert"
                        }, r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.preOrderText
                        })) : "", r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.longDescription
                        }), this.props.contentData.gwpEspot ? r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.gwpEspot
                        }) : "", this.props.contentData.promotionCopy ? r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.promotionCopy
                        }) : "", r.a.createElement(m, {
                            contentData: this.props.contentData
                        }))))
                    }
                }]) && b(e.prototype, a), n && b(e, n), s
            }(r.a.Component)
        },
        280: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return h
            }));
            var n = a(0),
                r = a.n(n),
                o = (a(14), a(129)),
                i = a(5),
                s = a.n(i);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return d(this, a)
                }
            }

            function d(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? m(t) : e
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var h = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e)
                }(c, t);
                var e, a, n, i = p(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = i.call(this, t)).state = {}, e.state.sortOrder = "Newest", e.fetchReviews = e.fetchReviews.bind(m(e)), e.updateSortBy = e.updateSortBy.bind(m(e)), e.goToNextPage = e.goToNextPage.bind(m(e)), e.goToPrevPage = e.goToPrevPage.bind(m(e)), e.goToReviewSection = e.goToReviewSection.bind(m(e)), e
                }
                return e = c, (a = [{
                    key: "scrollToTop",
                    value: function() {
                        $("html, body").animate({
                            scrollTop: 0
                        }, 500)
                    }
                }, {
                    key: "goToReviewSection",
                    value: function() {
                        var t = 115;
                        "mobile" == this.props.passedAppFunctions.siteFormat && (t = 0), $("html, body").animate({
                            scrollTop: $(".review-detail-section").offset().top - t
                        }, 500)
                    }
                }, {
                    key: "goToNextPage",
                    value: function() {
                        this.goToReviewSection(), this.state.pagingFrom = (this.state.pagingFrom || 0) + 10, this.fetchReviews()
                    }
                }, {
                    key: "goToPrevPage",
                    value: function() {
                        this.goToReviewSection(), this.state.pagingFrom = Math.max(this.state.pagingFrom, 10) - 10, this.fetchReviews()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(t, e) {
                        return !(this.state.histogramSizeTrue == e.histogramSizeTrue && this.state.histogramSizeSmall == e.histogramSizeSmall && this.state.histogramSizeBig == e.histogramSizeBig && this.state.liveReviewCount == e.liveReviewCount && this.props.contentData.salePage == t.contentData.salePage && this.props.contentData.productId == t.contentData.productId && !e.apiResponse)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.fetchReviews()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        this.props.contentData.productId && this.props.contentData.productId != t.contentData.productId && (this.state.liveReviewCount = !1, this.state.liveReviewStars = !1, this.state.histogramSizeTrue = !1, this.state.histogramSizeSmall = !1, this.state.histogramSizeBig = !1, this.state.pagingFrom = !1, this.state.sortOrder = "Newest", this.fetchReviews())
                    }
                }, {
                    key: "updateSortBy",
                    value: function(t) {
                        var e = t.target.value;
                        e != this.state.sortOrder && ["LowestRating", "HighestRating", "Oldest", "Newest"].indexOf(e) > -1 && (this.state.sortOrder = e, this.state.pagingFrom = !1, this.fetchReviews())
                    }
                }, {
                    key: "fetchReviews",
                    value: function() {
                        var t = this;
                        try {
                            if (this.props.contentData.partNumber) {
                                var e = this.props.passedAppFunctions.wasParms.powerReviewsMerchantId,
                                    a = this.props.contentData.partNumber,
                                    n = this.props.passedAppFunctions.wasParms.powerReviewsAPIKey,
                                    r = "https://readservices-b2c.powerreviews.com/m/".concat(e, "/l/").concat("en_US", "/product/").concat(a, "/reviews?apikey=").concat(n, "&paging.size=10&sort=").concat(this.state.sortOrder);
                                this.state.pagingFrom && (r += "&paging.from=".concat(this.state.pagingFrom));
                                var o = {
                                    url: r
                                };
                                s()(o).then((function(e) {
                                    var a = e.data,
                                        n = a.results[0],
                                        r = a.paging;
                                    if (n.rollup) {
                                        for (var o = n.rollup.review_count, i = n.rollup.average_rating, s = 0, c = 0, l = 0, u = n.rollup.properties, p = 0; p < u.length; p++) {
                                            var d = u[p];
                                            if ("size" == d.key)
                                                for (var m = 0; m < d.values.length; m++) {
                                                    var f = d.values[m].label;
                                                    "True to size" == f && (s = d.values[m].count), "Runs too small" == f && (l = d.values[m].count), "Runs too big" == f && (c = d.values[m].count)
                                                }
                                        }
                                        t.props.passedFunctions.updateLiveReviewCounts(o, i), t.setState({
                                            apiResponse: n,
                                            apiPaging: r,
                                            liveReviewCount: o,
                                            liveReviewStars: i,
                                            histogramSizeTrue: s,
                                            histogramSizeSmall: l,
                                            histogramSizeBig: c
                                        })
                                    } else r && 0 == (r.total_results || 0) ? (t.props.passedFunctions.updateLiveReviewCounts("0", "0"), t.setState({
                                        liveReviewCount: "0",
                                        liveReviewStars: "0"
                                    })) : t.setState({
                                        apiResponse: n,
                                        apiPaging: r
                                    })
                                }))
                            }
                        } catch (t) {
                            this.setState({
                                liveReviewCount: !1,
                                liveReviewStars: !1
                            })
                        }
                    }
                }, {
                    key: "generateReviewStars",
                    value: function(t, e) {
                        for (var a = t, n = [], o = 0; o <= 4; o++) Math.floor(a) > o ? n.push(r.a.createElement("i", {
                            key: o,
                            className: "icon star-full ".concat(e ? "star-big" : "")
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Full Star"))) : a > o ? n.push(r.a.createElement("i", {
                            key: o,
                            className: "icon star-half ".concat(e ? "star-big" : "")
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Half Star"))) : n.push(r.a.createElement("i", {
                            key: o,
                            className: "icon star-empty ".concat(e ? "star-big" : "")
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Empty Star")));
                        return n
                    }
                }, {
                    key: "timeAgoFromTimestamp",
                    value: function(t) {
                        var e = Math.max(Math.round(((new Date).getTime() - new Date(t).getTime()) / 864e5), 1),
                            a = "year",
                            n = 0;
                        return e <= 30 ? (a = "day", n = e) : e < 365 ? (a = "month", n = Math.round(e / 30)) : n = Math.round(e / 365), "".concat(n, " ").concat(a).concat(n > 1 ? "s" : "", " ago")
                    }
                }, {
                    key: "sizeFitFromReview",
                    value: function(t) {
                        var e = "";
                        if (t && t.details && t.details.properties && t.details.properties.length > 0)
                            for (var a = 0; a < t.details.properties.length; a++) {
                                var n = t.details.properties[a];
                                "size" == n.key && (e = n.value[0])
                            }
                        return e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        this.props.contentData.reviews && this.props.contentData.reviews.reviewURL && this.props.contentData.salePage && "true" == this.props.contentData.salePage && (this.props.contentData.reviews.reviewURL += "&salePage=true");
                        var e = 1 * (this.state.liveReviewCount || this.props.contentData.reviewCount || 0),
                            a = 1 * (this.state.liveReviewStars || this.props.contentData.reviewStars || 0),
                            n = +this.state.histogramSizeTrue + +this.state.histogramSizeSmall + +this.state.histogramSizeBig || 0,
                            i = {
                                width: "".concat(this.state.histogramSizeTrue / n * 100 || 0, "%")
                            },
                            s = {
                                width: "".concat(this.state.histogramSizeSmall / n * 100 || 0, "%")
                            },
                            c = {
                                width: "".concat(this.state.histogramSizeBig / n * 100 || 0, "%")
                            },
                            l = 0;
                        return l = a > 0 ? "".concat(a, " ") : "No reviews", r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "col-sm-12 m-b-30 review-detail-section justify-content-md-center"
                        }, null == this.props.passedFunctions.parentState.reviewCount && this.props.contentData.reviews ? r.a.createElement("div", {
                            className: "noReviewsSection row justify-content-center align-items-center align-items-stretch"
                        }, r.a.createElement("h2", {
                            className: "col-12"
                        }, "Ratings & Reviews"), this.state.histogramSizeTrue > 0 || this.state.histogramSizeBig > 0 || this.state.histogramSizeSmall > 0 ? [r.a.createElement("div", {
                            className: "".concat("mobile" == this.props.passedAppFunctions.siteFormat ? "stars col text-right d-flex align-items-center" : "stars col text-right"),
                            key: "0"
                        }, r.a.createElement("div", {
                            className: "starsWrapper"
                        }, r.a.createElement("span", null, l), this.generateReviewStars(a, !0))), r.a.createElement("div", {
                            className: "fitRating col text-left",
                            key: "1"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("span", {
                            className: "fitRatingLabel"
                        }, "Runs too small"), r.a.createElement("div", {
                            className: "fitRating-histogram-bar"
                        }, r.a.createElement("div", {
                            className: "fitRating-barValue",
                            style: s
                        })), r.a.createElement("span", {
                            className: "fitRatingCount"
                        }, this.state.histogramSizeSmall || 0)), r.a.createElement("li", null, r.a.createElement("span", {
                            className: "fitRatingLabel"
                        }, "True to size"), r.a.createElement("div", {
                            className: "fitRating-histogram-bar"
                        }, r.a.createElement("div", {
                            className: "fitRating-barValue",
                            style: i
                        })), r.a.createElement("span", {
                            className: "fitRatingCount"
                        }, this.state.histogramSizeTrue || 0)), r.a.createElement("li", null, r.a.createElement("span", {
                            className: "fitRatingLabel"
                        }, "Runs too big"), r.a.createElement("div", {
                            className: "fitRating-histogram-bar"
                        }, r.a.createElement("div", {
                            className: "fitRating-barValue",
                            style: c
                        })), r.a.createElement("span", {
                            className: "fitRatingCount"
                        }, this.state.histogramSizeBig || 0))))] : r.a.createElement("div", {
                            className: "stars col border-0"
                        }, r.a.createElement("div", {
                            className: "starsWrapper"
                        }, r.a.createElement("span", null, l), this.generateReviewStars(a, !0))), r.a.createElement("div", {
                            className: "col-12"
                        }, r.a.createElement(o.a, {
                            to: this.props.contentData.reviews.reviewURL += "&pr_headline=Product Review",
                            className: "pr-snippet-write-review-link"
                        }, "Write a Review"))) : null, r.a.createElement("div", {
                            className: "col-sm-12",
                            id: "pr-reviewdisplay"
                        }, this.state.liveReviewCount && e > 0 ? r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-sm-8 p-0"
                        }, r.a.createElement("h3", {
                            id: "reviewed-by"
                        }, "Reviewed by ", e, " customer", e > 1 ? "s" : "")), r.a.createElement("div", {
                            className: "col-sm-4 p-0",
                            id: "pr-rd-sort-by"
                        }, r.a.createElement("label", {
                            htmlFor: "reviewSortBy",
                            className: "sr-only"
                        }, "Sort Reviews By"), r.a.createElement("select", {
                            className: "form-control",
                            onChange: this.updateSortBy,
                            id: "reviewSortBy"
                        }, r.a.createElement("option", {
                            value: "Newest"
                        }, "Most Recent"), r.a.createElement("option", {
                            value: "LowestRating"
                        }, "Lowest Rated"), r.a.createElement("option", {
                            value: "HighestRating"
                        }, "Highest Rated"), r.a.createElement("option", {
                            value: "Oldest"
                        }, "Oldest"))), r.a.createElement("div", {
                            className: "reviews-section col-sm-12 p-0"
                        }, this.state.apiResponse.reviews.map((function(e, a) {
                            return r.a.createElement("div", {
                                key: e.review_id,
                                className: "col-sm-12 row"
                            }, r.a.createElement("div", {
                                className: "col-sm-3",
                                id: "pr-author-details"
                            }, r.a.createElement("div", null, e.details.nickname), r.a.createElement("div", null, e.details.location), "sweepstakes" == e.details.disclosure_code && e.details.comments.indexOf("#sweepstakes") > -1 ? r.a.createElement("div", null, "Submitted as part of a sweepstakes entry") : null), r.a.createElement("div", {
                                className: "col-sm-7",
                                id: "review-comments"
                            }, r.a.createElement("div", null, t.generateReviewStars(e.metrics.rating), " ", r.a.createElement("span", null, e.details.headline)), r.a.createElement("p", null, e.details.comments)), r.a.createElement("div", {
                                className: "col-sm-2"
                            }, r.a.createElement("div", {
                                id: "pr-date"
                            }, t.timeAgoFromTimestamp(e.details.created_date)), e.details.properties && t.sizeFitFromReview(e) ? r.a.createElement("div", {
                                id: "pr-date"
                            }, r.a.createElement("strong", null, "Fit: "), t.sizeFitFromReview(e)) : null, e.details.brand_logo_uri ? r.a.createElement("div", null, r.a.createElement("img", {
                                alt: "Brand Logo",
                                src: "https://images.powerreviews.com".concat(e.details.brand_logo_uri)
                            })) : null))
                        }), this)), r.a.createElement("div", {
                            className: "col-sm-4 reviews-count"
                        }, e > 1 ? 1 == this.state.apiResponse.reviews.length ? ["Displaying review ", this.state.apiPaging.total_results] : ["Displaying reviews ", r.a.createElement("b", {
                            key: "1"
                        }, 10 * (this.state.apiPaging.current_page_number - 1) + 1, "-", Math.min(10 * this.state.apiPaging.current_page_number, this.state.apiPaging.total_results))] : null), r.a.createElement("div", {
                            className: "col-sm-4 reviews-back-top"
                        }, r.a.createElement("button", {
                            className: "btn btn-tertiary",
                            onClick: this.goToReviewSection
                        }, "back to top"), r.a.createElement("span", {
                            className: "sr-only"
                        }, " of ratings and reviews section")), r.a.createElement("div", {
                            className: "col-sm-4 reviews-pagination"
                        }, this.state.apiPaging.pages_total > 1 ? [this.state.apiPaging.current_page_number > 1 ? r.a.createElement("span", {
                            className: "btn btn-tertiary",
                            onClick: this.goToPrevPage,
                            key: "0"
                        }, "Previous") : null, this.state.apiPaging.current_page_number > 1 && this.state.apiPaging.current_page_number < this.state.apiPaging.pages_total ? "|" : null, this.state.apiPaging.current_page_number < this.state.apiPaging.pages_total ? r.a.createElement("span", {
                            className: "btn btn-tertiary",
                            onClick: this.goToNextPage,
                            key: "2"
                        }, "Next") : null] : null)) : null)))
                    }
                }]) && l(e.prototype, a), n && l(e, n), c
            }(r.a.Component);
            e.b = h
        },
        281: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);
            a(459);
            e.a = function(t) {
                var e = t.passedAppFunctions.wasParms.useAfterpay,
                    a = t.passedAppFunctions.wasParms.afterpayMaxOrderAmt,
                    o = 0,
                    i = !1;
                return t.pricing && (o = t.pricing.offerPriceMax, i = "0968" == t.pricing.dept), Object(n.useEffect)((function() {
                    setTimeout((function() {
                        document.querySelectorAll("afterpay-placement").forEach((function(t) {
                            if (null !== t && null !== t.shadowRoot) {
                                var e = document.createElement("style");
                                e.innerHTML = ".afterpay-text1{ margin-right: -10px;!important} .afterpay-logo.black-on-white .afterpay-logo-badge-background{ fill: none;!important} .afterpay-link{margin-left:-12px;} .afterpay-logo{margin: 4px 0 4px -14px !important;}", null !== t.shadowRoot && (t.shadowRoot.appendChild(e), t.shadowRoot.querySelector(".afterpay-link").innerHTML = '<svg width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>')
                            }
                        })), document.querySelectorAll(".overlay").forEach((function(t) {
                            t.classList.remove("overlay")
                        }))
                    }), 800)
                }), []), r.a.createElement(r.a.Fragment, null, "true" == e && !i && ("undefined" == typeof window || "US" == window.DILLARDS.country) && 1 * o < 1 * a && 0 != o ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                    className: "afterPayMessaging"
                }, r.a.createElement("div", {
                    className: "overlay",
                    id: "overlay"
                }), r.a.createElement("afterpay-placement", {
                    "data-locale": "en_US",
                    "data-currency": "USD",
                    "data-badge-theme": "black-on-white",
                    "data-amount": o
                }))) : "")
            }
        },
        282: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(129);
            a(335);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "generateReviewSnippet",
                    value: function(t, e, a) {
                        var n = t,
                            o = [];
                        if (n > 0) {
                            for (var i = 0; i <= 4; i++) Math.floor(n) > i ? o.push(r.a.createElement("i", {
                                key: i,
                                className: "icon star-full"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Full Star"))) : n > i ? o.push(r.a.createElement("i", {
                                key: i,
                                className: "icon star-half"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Half Star"))) : o.push(r.a.createElement("i", {
                                key: i,
                                className: "icon star-empty"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Empty Star")));
                            o.push(r.a.createElement("span", {
                                className: "reviewCount ".concat(a ? "" : "btn btn-tertiary p-0"),
                                key: ++i,
                                onClick: function() {
                                    a ? ($("html, body").animate({
                                        scrollTop: $(".product-review-wrapper").offset().top - 15
                                    }, 500), $(".product-review-wrapper .panel-icon").addClass("expanded"), $(".product-review-wrapper .product-reviews").removeClass("hidden")) : $("html, body").animate({
                                        scrollTop: $(".review-detail-section").offset().top - 115
                                    }, 500)
                                }
                            }, e, " Review", e > 1 ? "s" : ""))
                        }
                        return o
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.contentData.reviewCount,
                            e = this.props.contentData.reviewStars;
                        return this.props.passedFunctions.parentState.liveReviewCount && (t = this.props.passedFunctions.parentState.liveReviewCount), this.props.passedFunctions.parentState.liveReviewStars && (e = this.props.passedFunctions.parentState.liveReviewStars), t = 1 * (t || 0), e = 1 * (e || 0), r.a.createElement("div", {
                            className: "reviewHeader"
                        }, this.props.contentData.reviews ? [0 == t ? r.a.createElement("div", {
                            key: "asdf",
                            className: "".concat((this.props.contentData.unavailableMessage, "beTheFirst"))
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "11",
                            width: "11",
                            viewBox: "0 0 50.77 48.69"
                        }, r.a.createElement("defs", null), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("path", {
                            className: "cls-1",
                            d: "M50.75,19a.49.49,0,0,0-.47-.34H32L25.85.33a.49.49,0,0,0-.93,0L18.81,18.67H.49a.49.49,0,0,0-.28.89L15.27,30.14,9.57,48.06a.49.49,0,0,0,.75.54l15.06-11,15.06,11a.49.49,0,0,0,.75-.54L35.5,30.14,50.56,19.56A.49.49,0,0,0,50.75,19Z",
                            "data-name": "Layer 1"
                        }))), "Be the first to") : "", r.a.createElement("div", {
                            id: "pr-reviewsnippet",
                            key: "1"
                        }, 0 == t ? r.a.createElement(o.a, {
                            key: "asd",
                            className: "pr-snippet-write-review-link ".concat("mobile" != this.props.passedAppFunctions.siteFormat ? "btn btn-tertiary p-0" : ""),
                            to: this.props.contentData.reviews.reviewURL
                        }, "Write A Review") : this.generateReviewSnippet(e, t, "mobile" == this.props.passedAppFunctions.siteFormat))] : null)
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component)
        },
        283: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return d
            }));
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function c(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return l(this, a)
                }
            }

            function l(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? u(t) : e
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && s(t, e)
                }(l, t);
                var e, a, n, o = c(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (e = o.call(this, t)).attemptToAddToBag = e.attemptToAddToBag.bind(u(e)), e
                }
                return e = l, (a = [{
                    key: "generateFieldTwo",
                    value: function() {
                        for (var t = "", e = JSON.parse(JSON.stringify(this.props.passedFunctions.parentState.attributeState)), a = 0; a < e.attributes.length; a++) {
                            var n = e.attributes[a];
                            "" != n.selectedValue && ("" != t && (t += "|"), t += "".concat(n.attrName, ":").concat(n.selectedValueInformation.name))
                        }
                        return t
                    }
                }, {
                    key: "attemptToAddToBag",
                    value: function(t) {
                        return this.props.passedFunctions.ajaxAddToBag(), t.preventDefault(), !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("form", {
                            className: "productDisplay__form \n\t\t\t".concat(null != this.props.contentData.productLayout && "ProductItemDisplayChanel" == this.props.contentData.productLayout || null != this.props.contentData.productLayout && "ProductItemAttrDisplay" == this.props.contentData.productLayout || null != this.props.contentData.productLayout && "ProductItemDisplay" == this.props.contentData.productLayout ? "row m-0" : ""),
                            action: "/webapp/wcs/stores/servlet/OrderItemAdd",
                            method: "post",
                            "data-catentry": this.props.contentData.productId || "",
                            onSubmit: this.attemptToAddToBag
                        }, r.a.createElement("input", {
                            type: "hidden",
                            name: "storeId",
                            value: "301"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "orderId",
                            value: "."
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "catalogId",
                            value: "301"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "langId",
                            value: "-1"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "errorViewName",
                            value: "ProductDisplayView"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "URL",
                            value: "ProductDisplayView"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "rURL",
                            value: "ProductDisplayView"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "catEntryId",
                            value: this.props.contentData.productId
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "productId",
                            value: this.props.contentData.productId
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "limitedAvailability",
                            value: this.props.contentData.limitedAvailability ? "Y" : "N"
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "description",
                            value: "".concat(this.props.contentData.partNumber, "|").concat(this.props.contentData.productId, "|PP-PIP")
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "field2",
                            value: this.generateFieldTwo()
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "field3",
                            value: this.generateFieldTwo()
                        }), r.a.createElement("input", {
                            type: "hidden",
                            name: "subscriptionFrequency",
                            value: this.props.passedFunctions.parentState.subscriptionFrequency
                        }), this.props.children)
                    }
                }]) && i(e.prototype, a), n && i(e, n), l
            }(r.a.Component);
            e.b = d
        },
        284: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return E
            }));
            var n = a(0),
                r = a.n(n),
                o = a(458),
                i = a.n(o),
                s = a(10),
                c = a(2);

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e, a) {
                return e && p(t.prototype, e), a && p(t, a), t
            }

            function m(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && f(t, e)
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
                var e = g();
                return function() {
                    var a, n = v(t);
                    if (e) {
                        var r = v(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(t, e) {
                return !e || "object" !== l(e) && "function" != typeof e ? b(t) : e
            }

            function b(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function g() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function w(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var S = Object(c.a)({
                    resolved: {},
                    chunkName: function() {
                        return "pickRegistryModal"
                    },
                    isReady: function(t) {
                        var e = this.resolve(t);
                        return !0 === this.resolved[e] && !!a.m[e]
                    },
                    importAsync: function() {
                        return a.e(32).then(a.bind(null, 426))
                    },
                    requireAsync: function(t) {
                        var e = this,
                            a = this.resolve(t);
                        return this.resolved[a] = !1, this.importAsync(t).then((function(t) {
                            return e.resolved[a] = !0, t
                        }))
                    },
                    requireSync: function t(e) {
                        var n = this.resolve(e);
                        return a(n)
                    },
                    resolve: function t() {
                        return 426
                    }
                }),
                E = function(t) {
                    m(a, t);
                    var e = h(a);

                    function a(t) {
                        var n;
                        return u(this, a), w(b(n = e.call(this, t)), "componentDidUpdate", (function() {
                            Modernizr.sessionstorage && location.href.indexOf("krypto") > -1 && sessionStorage.getItem("wlAttempt") && n.props.passedFunctions.parentState.wlResponse && (sessionStorage.removeItem("wlAttempt"), $("html, body").animate({
                                scrollTop: $(".wishListMessage").offset().top - 500
                            }, 800)), n.closeMessages()
                        })), w(b(n), "closeMessages", (function() {
                            2 == n.state.clicksToClose && (n.props.passedFunctions.closeWishListMessage(), n.setState({
                                clicksToClose: 0,
                                showAlertMessage: !0,
                                showSuccessMessage: !0
                            }))
                        })), w(b(n), "closeAlertMessage", (function() {
                            n.setState({
                                clicksToClose: n.state.clicksToClose + 1,
                                showAlertMessage: !1
                            })
                        })), w(b(n), "closeSuccessMessage", (function() {
                            "LQTY" == n.props.passedFunctions.parentState.wlResponse.wlInventoryStatus || "QTY2" == n.props.passedFunctions.parentState.wlResponse.wlInventoryStatus || "QTY3" == n.props.passedFunctions.parentState.wlResponse.wlInventoryStatus ? n.setState({
                                clicksToClose: n.state.clicksToClose + 1,
                                showSuccessMessage: !1
                            }) : n.props.passedFunctions.closeWishListMessage()
                        })), n.state = {
                            clicksToClose: 0,
                            showAlertMessage: !0,
                            showSuccessMessage: !0
                        }, n
                    }
                    return d(a, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.parentState.wlResponse && this.props.passedFunctions.parentState.wlResponse.fromMFB ? r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.parentState.wlResponse.JSON.status && "noChanges" != this.props.passedFunctions.parentState.wlResponse.JSON.status[0] ? r.a.createElement(r.a.Fragment, null, "add" == this.props.passedFunctions.parentState.wlResponse.JSON.status[0] ? r.a.createElement("div", {
                                className: "wishListMessage success"
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListMessage",
                                onClick: this.props.passedFunctions.closeWishListMessage
                            }, r.a.createElement(s.c, null)), "Great! This brand has been added. ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLink",
                                href: "/webapp/wcs/stores/servlet/PersonalizationDisplay?storeId=301&catalogId=301&langId=-1"
                            }, "Click here"), " to manage your favorite brands.") : r.a.createElement(r.a.Fragment, null, "remove" == this.props.passedFunctions.parentState.wlResponse.JSON.status[0] ? r.a.createElement("div", {
                                className: "wishListMessage success"
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListMessage",
                                onClick: this.props.passedFunctions.closeWishListMessage
                            }, r.a.createElement(s.c, null)), "This brand has been removed. ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLink",
                                href: "/webapp/wcs/stores/servlet/PersonalizationDisplay?storeId=301&catalogId=301&langId=-1"
                            }, "Click here"), " to manage your favorite brands.") : r.a.createElement("div", {
                                className: "wishListMessage alert"
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListMessage",
                                onClick: this.props.passedFunctions.closeWishListMessage
                            }, r.a.createElement(s.c, null)), "The max number of brands have been selected. ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLinkAlert",
                                href: "/webapp/wcs/stores/servlet/PersonalizationDisplay?storeId=301&catalogId=301&langId=-1"
                            }, "Click here"), " to manage your favorite brands."))) : "") : r.a.createElement(r.a.Fragment, null, !this.props.passedFunctions.parentState.wlResponse || this.props.passedFunctions.parentState.wlResponse.registryAdd || this.props.passedFunctions.parentState.wlResponse.error ? r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.parentState.wlResponse && this.props.passedFunctions.parentState.wlResponse.error ? r.a.createElement("div", {
                                className: "wishListMessage alert"
                            }, r.a.createElement("button", {
                                className: "close closeWishListAlertMessage btn-tertiary",
                                onClick: this.props.passedFunctions.closeWishListMessage,
                                type: "button"
                            }, r.a.createElement(s.c, null)), this.props.passedFunctions.parentState.wlResponse.error) : "", this.props.passedFunctions.parentState.wlResponse && this.props.passedFunctions.parentState.wlResponse.registryResponse && !this.props.passedFunctions.parentState.wlResponse.error ? r.a.createElement("div", {
                                className: "wishListMessage success"
                            }, r.a.createElement("button", {
                                className: "close closeWishListAlertMessage btn-tertiary",
                                onClick: this.props.passedFunctions.closeWishListMessage,
                                type: "button"
                            }, r.a.createElement(s.c, null)), "This item was added to your registry.", r.a.createElement("br", null), " ", r.a.createElement("a", {
                                className: "wlLink",
                                href: this.props.passedFunctions.parentState.wlResponse.manageRegistryURL
                            }, "Click here"), " to manage your registry") : "", this.props.passedFunctions.parentState.wlResponse && this.props.passedFunctions.parentState.wlResponse.modalType && "PickRegistryModal" == this.props.passedFunctions.parentState.wlResponse.modalType ? r.a.createElement(S, {
                                passedFunctions: this.props.passedFunctions,
                                passedAppFunctions: this.props.passedAppFunctions,
                                modalInfo: this.props.passedFunctions.parentState.wlResponse,
                                ajaxAddToRegistry: this.props.passedFunctions.ajaxAddToRegistry,
                                handleCloseModal: this.props.passedFunctions.closeWishListMessage
                            }) : "") : r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.parentState.wlResponse ? r.a.createElement(r.a.Fragment, null, "success" == this.props.passedFunctions.parentState.wlResponse.result ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: "wishListMessage success ".concat(this.state.showSuccessMessage ? "" : "hidden")
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListMessage",
                                onClick: this.closeSuccessMessage
                            }, r.a.createElement(s.c, null)), "This item was added to your wish list. ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLink",
                                href: "/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=301&catalogId=301&langId=-1&orderId=."
                            }, "Click here"), " to view your wish list."), "LQTY" == this.props.passedFunctions.parentState.wlResponse.wlInventoryStatus ? r.a.createElement("div", {
                                className: "wishListMessage alert ".concat(this.state.showAlertMessage ? "" : "hidden")
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListAlertMessage",
                                onClick: this.closeAlertMessage
                            }, r.a.createElement(s.c, null)), "There is only 1 left! ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLinkAlert",
                                href: "/webapp/wcs/stores/servlet/InterestItemDelete?catEntryId=".concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "&calculationUsageId=-1&calculationUsageId=-2&quantity=1&errorViewName=OrderItemDisplayView&URL=OrderItemAdd%3FURL%3DOrderItemDisplay%26addFromCart%3Dtrue%26catEntryId%3D").concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "%26field2%3D").concat(this.props.passedFunctions.parentState.wlResponse.field3, "%26storeId%3D301%26catalogId%3D301%26langId%3D-1")
                            }, "Click here"), " to add it to your bag.") : "", "QTY2" == this.props.passedFunctions.parentState.wlResponse.wlInventoryStatus ? r.a.createElement("div", {
                                className: "wishListMessage alert ".concat(this.state.showAlertMessage ? "" : "hidden")
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListAlertMessage",
                                onClick: this.closeAlertMessage
                            }, r.a.createElement(s.c, null)), "There are only 2 left! ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLinkAlert",
                                href: "/webapp/wcs/stores/servlet/InterestItemDelete?catEntryId=".concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "&calculationUsageId=-1&calculationUsageId=-2&quantity=1&errorViewName=OrderItemDisplayView&URL=OrderItemAdd%3FURL%3DOrderItemDisplay%26addFromCart%3Dtrue%26catEntryId%3D").concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "%26field2%3D").concat(this.props.passedFunctions.parentState.wlResponse.field3, "%26storeId%3D301%26catalogId%3D301%26langId%3D-1")
                            }, "Click here"), " to add it to your bag.") : "", "QTY3" == this.props.passedFunctions.parentState.wlResponse.wlInventoryStatus ? r.a.createElement("div", {
                                className: "wishListMessage alert ".concat(this.state.showAlertMessage ? "" : "hidden")
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListAlertMessage",
                                onClick: this.closeAlertMessage
                            }, r.a.createElement(s.c, null)), "There are only 3 left! ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLinkAlert",
                                href: "/webapp/wcs/stores/servlet/InterestItemDelete?catEntryId=".concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "&calculationUsageId=-1&calculationUsageId=-2&quantity=1&errorViewName=OrderItemDisplayView&URL=OrderItemAdd%3FURL%3DOrderItemDisplay%26addFromCart%3Dtrue%26catEntryId%3D").concat(this.props.passedFunctions.parentState.wlResponse.wlCatentryToAdd, "%26field2%3D").concat(this.props.passedFunctions.parentState.wlResponse.field3, "%26storeId%3D301%26catalogId%3D301%26langId%3D-1")
                            }, "Click here"), " to add it to your bag.") : "") : r.a.createElement(r.a.Fragment, null, "true" == this.props.passedFunctions.parentState.wlResponse.wishlistLimitReached ? r.a.createElement("div", {
                                className: "wishListMessage alert"
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListAlertMessage",
                                onClick: this.props.passedFunctions.closeWishListMessage
                            }, r.a.createElement(s.c, null)), "You have reached the limit of items in your wishlist. ", r.a.createElement("br", null), r.a.createElement("a", {
                                className: "wlLinkAlert",
                                href: "/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=301&catalogId=301&langId=-1&orderId=."
                            }, "Click here"), " to view your wish list.") : r.a.createElement("div", {
                                className: "wishListMessage alert"
                            }, r.a.createElement("button", {
                                type: "button",
                                className: "close closeWishListAlertMessage",
                                onClick: this.props.passedFunctions.closeWishListMessage
                            }, r.a.createElement(s.c, null)), "There was an error adding this item to your wish list. Please try again later."))) : "")))
                        }
                    }]), a
                }(r.a.Component)
        },
        286: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function c(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return l(this, a)
                }
            }

            function l(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? u(t) : e
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function d(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && s(t, e)
                }(l, t);
                var e, a, n, o = c(l);

                function l(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), d(u(e = o.call(this, t)), "handlePinterestClick", (function(t) {
                        return window.open("https://www.pinterest.com/pin/create/button/?url=www.dillards.com/p/".concat(e.props.contentData.productNameForURL, "/").concat(e.props.contentData.productId, "&media=https://dimg.dillards.com/is/image/DillardsZoom/zoom/").concat(e.props.contentData.productNameForURL, "/").concat(e.props.passedFunctions.parentState.selectedMainImg, ".jpg&description=").concat(encodeURIComponent(e.props.contentData.originalProductName), "%20%23Dillards"), "pininterest_share", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"), t.preventDefault(), !1
                    })), d(u(e), "buildTextHREF", (function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i) && !navigator.userAgent.match(/iPhone OS 7|iPhone OS 8/i) ? "sms:&" : "sms:?"
                    })), e
                }
                return e = l, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("ul", {
                            className: "social-icons"
                        }, r.a.createElement("li", {
                            className: "share-email",
                            onClick: this.props.passedFunctions.ajaxShareProductModal
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens a simulated dialog"), r.a.createElement("button", {
                            type: "button",
                            className: "btn-tertiary"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "email",
                            viewBox: "0 0 48.49 32.94"
                        }, r.a.createElement("title", null, "email"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("polygon", {
                            points: "46.15 0 2.34 0 24.24 19.67 46.15 0"
                        }), r.a.createElement("path", {
                            d: "M48.14,1.71l-23,20.68a1.3,1.3,0,0,1-1.74,0L.35,1.71a1.26,1.26,0,0,1-.2-.27A2.22,2.22,0,0,0,0,2.24V30.7a2.24,2.24,0,0,0,2.24,2.24h44a2.24,2.24,0,0,0,2.24-2.24V2.24a2.22,2.22,0,0,0-.15-.79A1.26,1.26,0,0,1,48.14,1.71Z"
                        })))))), r.a.createElement("li", {
                            className: "share-facebook"
                        }, r.a.createElement("a", {
                            href: "https://www.facebook.com/sharer.php?u=https%3a%2f%2fwww.dillards.com%2fp%2f".concat(this.props.contentData.productNameForURL, "%2f").concat(this.props.contentData.productId, "&t=Check+this+out+at+dillards.com"),
                            target: "_blank"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "facebook",
                            viewBox: "0 0 25.23 48.59"
                        }, r.a.createElement("title", null, "facebook"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M16.38,48.59V26.42h7.44l1.11-8.64H16.38V12.27c0-2.5.69-4.2,4.28-4.2h4.57V.34A61.3,61.3,0,0,0,18.57,0C12,0,7.46,4,7.46,11.42v6.37H0v8.64H7.46V48.59h8.92Z"
                        })))))), r.a.createElement("li", {
                            className: "share-twitter"
                        }, r.a.createElement("a", {
                            href: "https://twitter.com/intent/tweet/?text=Check+this+out%3a&via=dillards&url=https%3a%2f%2fwww.dillards.com%2fp%2f".concat(this.props.contentData.productNameForURL, "%2f").concat(this.props.contentData.productId),
                            target: "_blank"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "twitter",
                            viewBox: "0 0 48.12 39.25"
                        }, r.a.createElement("title", null, "twitter"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M0,34.86a20.23,20.23,0,0,0,14.59-4.15,11.09,11.09,0,0,1-1.92-.23,9.84,9.84,0,0,1-6-4A9.62,9.62,0,0,1,5.38,24c0-.14-.06-.19.13-.16a9.91,9.91,0,0,0,4.1-.15l.15,0A9.91,9.91,0,0,1,3,18.51a9.59,9.59,0,0,1-1.12-4.7A9.92,9.92,0,0,0,6.3,15,9.88,9.88,0,0,1,1.94,7.12,9.65,9.65,0,0,1,3.26,1.84c.38.43.74.85,1.11,1.26a28.07,28.07,0,0,0,8.39,6.27,27.78,27.78,0,0,0,7.47,2.42,31.11,31.11,0,0,0,3.23.38c.16,0,.22,0,.18-.19A9.86,9.86,0,0,1,31.16.27,9.65,9.65,0,0,1,40.45,3a.3.3,0,0,0,.32.1A19.94,19.94,0,0,0,46.66.85l.12-.06h.07a10.12,10.12,0,0,1-4.23,5.38,19,19,0,0,0,5.5-1.48c0,.11-.05.15-.09.21a19.92,19.92,0,0,1-4.61,4.76.33.33,0,0,0-.16.32,26.07,26.07,0,0,1,0,3,28.31,28.31,0,0,1-.94,5.42,29.1,29.1,0,0,1-5.81,11.15,26.47,26.47,0,0,1-14,8.81,29.63,29.63,0,0,1-7,.9A28,28,0,0,1,.12,34.94Z"
                        })))))), r.a.createElement("li", {
                            className: "share-pinterest"
                        }, r.a.createElement("a", {
                            href: "https://www.pinterest.com/pin/create/button/?url=www.dillards.com/p/".concat(this.props.contentData.productNameForURL, "/").concat(this.props.contentData.productId, "&media=https://dimg.dillards.com/is/image/DillardsZoom/zoom/").concat(this.props.contentData.productNameForURL, "/").concat(this.props.passedFunctions.parentState.selectedMainImg, ".jpg&description=").concat(encodeURIComponent(this.props.contentData.originalProductName), "%20%23Dillards"),
                            target: "_blank",
                            onClick: this.handlePinterestClick
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "pinterest",
                            viewBox: "0 0 37.8 48.59"
                        }, r.a.createElement("title", null, "pinterest"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M16.47.16C8.4,1.06.35,7.6,0,16.93c-.21,5.7,1.41,10,6.83,11.17C9.2,23.95,6.09,23,5.61,20,3.62,7.72,19.8-.67,28.27,7.92c5.86,5.95,2,24.25-7.45,22.35C11.77,28.45,25.25,13.89,18,11c-5.87-2.32-9,7.11-6.21,11.8-1.63,8.06-5.15,15.65-3.72,25.76,4.62-3.35,6.17-9.76,7.45-16.45,2.32,1.41,3.56,2.87,6.52,3.1,10.92.84,17-10.9,15.52-21.73C36.26,3.91,26.67-1,16.47.16Z"
                        })))))), "mobile" !== this.props.siteFormat ? r.a.createElement("li", {
                            className: "share-print"
                        }, r.a.createElement("button", {
                            className: "btn btn-tertiary",
                            role: "button",
                            type: "button",
                            onClick: function() {
                                window.print()
                            }
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "print",
                            viewBox: "0 0 46.42 48.59"
                        }, r.a.createElement("title", null, "print"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M32.61,42.16H22a1.42,1.42,0,0,1,0-2.83H32.61a1.42,1.42,0,1,1,0,2.83Z"
                        }), r.a.createElement("path", {
                            d: "M32.61,36.5H14.91a1.42,1.42,0,1,1,0-2.83h17.7a1.42,1.42,0,1,1,0,2.83Z"
                        }), r.a.createElement("path", {
                            d: "M43.49,13H38V0H8.42V13H2.92A2.92,2.92,0,0,0,0,15.88V32.45a2.92,2.92,0,0,0,2.92,2.92H8.42V48.59H38V35.38h5.49a2.92,2.92,0,0,0,2.92-2.92V15.88A2.92,2.92,0,0,0,43.49,13ZM35.17,35.38V45.84H11.25V29.69H35.17Zm0-22.43H11.25V2.83H35.17Zm7.35,5.79a1.24,1.24,0,1,1,1.24-1.24A1.24,1.24,0,0,1,42.52,18.74Z"
                        })))))) : "", "mobile" == this.props.siteFormat ? r.a.createElement("li", {
                            className: "share-text"
                        }, r.a.createElement("a", {
                            href: "".concat(this.buildTextHREF(), "body=https://www.dillards.com/p/").concat(this.props.contentData.productNameForURL, "/").concat(this.props.contentData.productId)
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            role: "img",
                            "aria-labelledby": "mobile",
                            viewBox: "0 0 32.66 49.22"
                        }, r.a.createElement("title", null, "mobile"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M26.91,0H5.76A5.76,5.76,0,0,0,0,5.76v37.7a5.76,5.76,0,0,0,5.76,5.76H26.91a5.76,5.76,0,0,0,5.76-5.76V5.76A5.76,5.76,0,0,0,26.91,0Zm-17,3.42H22.78a.62.62,0,0,1,0,1.25H9.88a.62.62,0,0,1,0-1.25ZM16.33,47A1.67,1.67,0,1,1,18,45.37,1.67,1.67,0,0,1,16.33,47Zm12.94-5.56H3.39V7.74H29.27Z"
                        })))))) : "")
                    }
                }]) && i(e.prototype, a), n && i(e, n), l
            }(r.a.Component);
            e.a = m
        },
        287: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return v
            })), a.d(e, "b", (function() {
                return w
            }));
            var n = a(0),
                r = a.n(n),
                o = a(42),
                i = a.n(o);

            function s(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = arguments[e];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e, a) {
                return e && p(t.prototype, e), a && p(t, a), t
            }

            function m(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && f(t, e)
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = g(t);
                    if (e) {
                        var r = g(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return y(this, a)
                }
            }

            function y(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? b(t) : e
            }

            function b(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var v = function(t) {
                    m(a, t);
                    var e = h(a);

                    function a(t) {
                        var n;
                        return u(this, a), (n = e.call(this, t)).state = {
                            showAlts: !1,
                            siteFormat: n.props.passedAppFunctions ? n.props.passedAppFunctions.siteFormat : "",
                            nav: null
                        }, n
                    }
                    return d(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                showAlts: !0
                            }), this.setState({
                                nav: this.altSlider
                            }), setTimeout((function() {
                                window.dispatchEvent(new Event("resize"))
                            }), 0)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            if (this.altSlider && this.shouldFilter && this.colorSelected) {
                                this.altSlider.innerSlider.resizeWindow();
                                for (var t = "", e = 0; e < this.altSlider.props.children.length; e++)
                                    if (this.altSlider.props.children[e].props["data-imagename"] === this.props.selectedMainImg) {
                                        t = ":" + this.altSlider.props.children[e].props.children.props.alt.substring(this.altSlider.props.children[e].props.children.props.alt.indexOf("Color:") + 6).split(" - ")[0] + " -";
                                        break
                                    } var a = -1;
                                for (e = 0; e < this.altSlider.props.children.length; e++) {
                                    if (t === ":" + this.altSlider.props.children[e].props.children.props.alt.substring(this.altSlider.props.children[e].props.children.props.alt.indexOf("Color:") + 6).split(" - ")[0] + " -" && (a += 1), this.altSlider.props.children[e].props["data-imagename"] === this.props.selectedMainImg) break
                                }
                                this.altSlider.slickGoTo(a)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.color = "", this.colorSelected = !1, this.shouldFilter = !1, this.shrinkButton = !1;
                            var e = JSON.parse(JSON.stringify(this.props.contentData.altImages || []));
                            "undefined" != typeof window && window.injectedAltImageFunction && (e = window.injectedAltImageFunction(e, this.props.passedFunctions.parentState.selectedMainImg));
                            var a = "desktop" == this.state.siteFormat,
                                n = (e || []).length > 4,
                                o = 4;
                            "tablet" != this.state.siteFormat && "mobile" != this.state.siteFormat || void 0 === this.props.vertical || this.props.vertical || (n = !1, o = 3.5, a = !1);
                            var s = {
                                dots: !1,
                                infinite: !1,
                                vertical: a,
                                speed: 500,
                                slidesToShow: o,
                                swipeToSlide: !0,
                                swipe: !0,
                                lazyLoad: !1,
                                lazyLoadBuffer: 1,
                                focusOnSelect: !0,
                                arrows: n,
                                responsive: [{
                                    breakpoint: 769,
                                    settings: {
                                        slidesToShow: this.props.qvSlidesToShow || 3.5,
                                        swipeToSlide: !0,
                                        vertical: "desktop" == this.state.siteFormat && this.props.qvAlt || !1,
                                        arrows: "desktop" == this.state.siteFormat && this.props.qvAlt || !1
                                    }
                                }]
                            };
                            if (this.props.passedFunctions.parentState.attributeState)
                                for (var c = 0; c < this.props.passedFunctions.parentState.attributeState.attributes.length; c++) "Color" == this.props.passedFunctions.parentState.attributeState.attributes[c].attrName && "" != this.props.passedFunctions.parentState.attributeState.attributes[c].selectedValue && (this.colorSelected = !0);
                            if (this.props.selectedMainImg && this.altSlider && e) {
                                for (c = 0; c < e.length; c++)
                                    if (e[c].imageName === this.props.selectedMainImg) {
                                        if (void 0 !== this.props.passedFunctions.parentState.attributeState && void 0 !== this.props.passedFunctions.parentState.attributeState.attributes[0] && "00" == this.props.passedFunctions.parentState.attributeState.attributes[0].dept.indexOf("00") && (this.shouldFilter = !0, this.colorSelected)) {
                                            var u = e[c].altText.substring(e[c].altText.indexOf("Color:") + 6).split(" - ");
                                            this.color = ":" + u[0] + " -"
                                        }
                                        this.shouldFilter || this.altSlider.slickGoTo(c)
                                    }
                            } else if (this.props.selectedMainImg && e)
                                for (c = 0; c < e.length; c++)
                                    if (e[c].imageName === this.props.selectedMainImg && void 0 !== this.props.passedFunctions.parentState.attributeState && void 0 !== this.props.passedFunctions.parentState.attributeState.attributes[0] && "00" == this.props.passedFunctions.parentState.attributeState.attributes[0].dept.indexOf("00") && (this.shouldFilter = !0, this.colorSelected)) {
                                        u = e[c].altText.substring(e[c].altText.indexOf("Color:") + 6).split(" - ");
                                        this.color = ":" + u[0] + " -"
                                    } return e && "tablet" == this.state.siteFormat && (this.colorSelected && this.shouldFilter ? "BundleDisplay" != this.props.contentData.productLayout || 3 != (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length && 4 != (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length ? 4 == (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length && "QuickViewDisplay" != this.props.contentData.productLayout && (this.shrinkButton = !0) : this.shrinkButton = !0 : "BundleDisplay" != this.props.contentData.productLayout || 3 != e.length && 4 != e.length ? 4 == e.length && "QuickViewDisplay" != this.props.contentData.productLayout && (this.shrinkButton = !0) : this.shrinkButton = !0), "desktop" != this.props.passedAppFunctions.siteFormat ? this.props.contentData.altImages ? r.a.createElement("aside", {
                                id: "product-alt-wrapper",
                                className: "".concat(s.arrows ? "has-arrows" : "", " ").concat(this.state.showAlts ? "" : "hide")
                            }, (this.colorSelected && this.shouldFilter ? e && (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length > 4 : e && e.length > 4) ? r.a.createElement(i.a, l({
                                ref: function(e) {
                                    return t.altSlider = e
                                }
                            }, s), e && (this.colorSelected && this.shouldFilter ? (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })) : e || []).map((function(e, a) {
                                return r.a.createElement("button", {
                                    className: "btn-tertiary",
                                    key: e.imageName + a,
                                    id: e.imageName,
                                    "data-key": a,
                                    "data-imagename": e.imageName,
                                    onClick: t.props.altImageClicked,
                                    type: "button",
                                    "data-role": "none",
                                    "aria-selected": t.props.passedFunctions.parentState.selectedMainImg == e.imageName ? "true" : null
                                }, r.a.createElement("img", {
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/alt/".concat(t.props.contentData.fullImage.imageNameForUrl, "/").concat(e.overideImageName || e.imageName, ".jpg"),
                                    alt: e.altText
                                }))
                            }))) : e && (this.colorSelected && this.shouldFilter ? (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })) : e || []).map((function(a, n) {
                                return r.a.createElement("button", {
                                    className: t.shrinkButton ? "BundleDisplay" == t.props.contentData.productLayout ? "btn-tertiary btn-mini" : "btn-tertiary btn-small" : "btn-tertiary",
                                    key: a.imageName + n,
                                    id: a.imageName,
                                    "data-imagename": a.imageName,
                                    onClick: t.props.altImageClicked,
                                    type: "button",
                                    "data-role": "none",
                                    "aria-selected": t.props.passedFunctions.parentState.selectedMainImg == a.imageName ? "true" : null
                                }, r.a.createElement("img", {
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/alt/".concat(t.props.contentData.fullImage.imageNameForUrl, "/").concat(a.overideImageName || a.imageName, ".jpg"),
                                    alt: a.altText,
                                    className: "tablet" == t.state.siteFormat && "QuickViewDisplay" == t.props.contentData.productLayout && (t.colorSelected && t.shouldFilter ? e && 4 == (e || []).filter((function(e) {
                                        return e.altText.includes(t.color)
                                    })).length : e && 4 == e.length) ? "img-small" : ""
                                }))
                            }))) : "" : this.props.contentData.altImages ? r.a.createElement("aside", {
                                id: "product-alt-wrapper",
                                className: "".concat(s.arrows ? "has-arrows" : "", " ").concat(this.state.showAlts ? "" : "hide")
                            }, (this.colorSelected && this.shouldFilter ? e && (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length > 0 : e && e.length > 0) ? (this.colorSelected && this.shouldFilter ? e && (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })).length > 4 : e && e.length > 4) || "tablet" == this.state.siteFormat || "mobile" == this.state.siteFormat ? r.a.createElement(i.a, l({
                                ref: function(e) {
                                    return t.altSlider = e
                                }
                            }, s), e && (this.colorSelected && this.shouldFilter ? (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })) : e || []).map((function(e, a) {
                                return r.a.createElement("button", {
                                    className: "btn btn-tertiary btn-alt-img",
                                    key: e.imageName + a,
                                    "data-key": a,
                                    type: "button",
                                    "data-role": "none",
                                    "data-imagename": e.imageName,
                                    "aria-selected": t.props.passedFunctions.parentState.selectedMainImg == e.imageName ? "true" : null,
                                    onClick: t.props.passedFunctions.updateAttributeFromAltClick
                                }, r.a.createElement("img", {
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/alt/".concat(t.props.contentData.fullImage.imageNameForUrl, "/").concat(e.overideImageName || e.imageName, ".jpg"),
                                    alt: e.altText
                                }))
                            }))) : e && (this.colorSelected && this.shouldFilter ? (e || []).filter((function(e) {
                                return e.altText.includes(t.color)
                            })) : e || []).map((function(e, a) {
                                return r.a.createElement("button", {
                                    className: "btn btn-tertiary btn-alt-img",
                                    key: e.imageName + a,
                                    type: "button",
                                    "data-role": "none",
                                    "data-imagename": e.imageName,
                                    "aria-selected": t.props.passedFunctions.parentState.selectedMainImg == e.imageName ? "true" : null,
                                    onClick: t.props.passedFunctions.updateAttributeFromAltClick
                                }, r.a.createElement("img", {
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/alt/".concat(t.props.contentData.fullImage.imageNameForUrl, "/").concat(e.overideImageName || e.imageName, ".jpg"),
                                    alt: e.altText
                                }))
                            })) : null) : ""
                        }
                    }]), a
                }(r.a.Component),
                w = function(t) {
                    m(a, t);
                    var e = h(a);

                    function a(t) {
                        var n;
                        return u(this, a), s(b(n = e.call(this, t)), "slideMainImage", (function(t) {
                            if (n.colorSelected && n.shouldFilter) {
                                n.slider1.innerSlider.resizeWindow();
                                for (var e = 0; e < n.slider1.props.children.length; e++)
                                    if (t == n.slider1.props.children[e].props.children.props["data-imagename"]) {
                                        n.slider1.slickGoTo(e);
                                        break
                                    }
                            } else n.props.contentData.altImages && n.props.contentData.altImages.forEach((function(e, a) {
                                t == e.imageName && n.slider1.slickGoTo(a)
                            }))
                        })), s(b(n), "altWasClicked", (function() {
                            n.slider1.slickGoTo(n.props.altIndex)
                        })), n.state = {
                            showAlts: !1,
                            siteFormat: n.props.passedAppFunctions ? n.props.passedAppFunctions.siteFormat : "",
                            nav: null
                        }, n
                    }
                    return d(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                showAlts: !0
                            }), this.setState({
                                nav: this.altSlider
                            }), this.props.altClicked && this.altWasClicked()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.slideMainImage(this.props.passedFunctions.parentState.selectedMainImg)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this;
                            if (this.color = "", this.colorSelected = !1, this.shouldFilter = !1, void 0 === this.props.contentData.altImages) {
                                var a = [this.props.contentData.fullImage];
                                if (void 0 !== this.props.contentData.fullImage.imageName) {
                                    var n = this.props.contentData.fullImage.imageName.split("/");
                                    a[0].imageName = n[n.length - 1].replace(".jpg", "")
                                }
                                t = JSON.parse(JSON.stringify(a || []))
                            } else t = JSON.parse(JSON.stringify(this.props.contentData.altImages || []));
                            for (var o = {}, s = 0; s < t.length; s++) o[t[s].imageName] = [s];
                            if ("undefined" != typeof window && window.injectedAltImageFunction && (t = window.injectedAltImageFunction(t, this.props.passedFunctions.parentState.selectedMainImg)), this.props.passedFunctions.parentState.attributeState)
                                for (s = 0; s < this.props.passedFunctions.parentState.attributeState.attributes.length; s++) "Color" == this.props.passedFunctions.parentState.attributeState.attributes[s].attrName && "" != this.props.passedFunctions.parentState.attributeState.attributes[s].selectedValue && (this.colorSelected = !0);
                            if (this.slider1 && t)
                                for (s = 0; s < t.length; s++)
                                    if (t[s].imageName === this.props.selectedMainImg && void 0 !== this.props.passedFunctions.parentState.attributeState && void 0 !== this.props.passedFunctions.parentState.attributeState.attributes[0] && "00" == this.props.passedFunctions.parentState.attributeState.attributes[0].dept.indexOf("00") && (this.shouldFilter = !0, this.colorSelected)) {
                                        n = t[s].altText.substring(t[s].altText.indexOf("Color:") + 6).split(" - ");
                                        this.color = ":" + n[0] + " -"
                                    } var c = 0;
                            if ("tablet" == this.props.passedAppFunctions.siteFormat || "mobile" == this.props.passedAppFunctions.siteFormat || "OutfitDisplay" == this.props.contentData.productLayout)
                                if (this.colorSelected && this.shouldFilter)
                                    for (var u = (t || []).filter((function(t) {
                                            return t.altText.includes(e.color)
                                        })), p = 0; p < u.length; p++) u[p].imageName === (this.props.selectedMainImg || this.props.contentData.fullImage.imageNameNoPath) && (c = p);
                                else
                                    for (var d = 0; d < t.length; d++) t[d].imageName === (this.props.selectedMainImg || this.props.contentData.fullImage.imageNameNoPath) && (c = d);
                            var m = {
                                dots: !1,
                                infinite: !1,
                                vertical: !1,
                                speed: 500,
                                slidesToShow: 1,
                                swipeToSlide: !0,
                                swipe: !0,
                                lazyLoad: !0,
                                lazyLoadBuffer: 1,
                                focusOnSelect: !0,
                                initialSlide: null != c ? c : 0,
                                arrows: !1
                            };
                            return r.a.createElement(i.a, l({
                                className: "main-img-wrapper-slider",
                                openPhotoSwipeMonetate: this.props.openPhotoSwipeMonetate,
                                ref: function(t) {
                                    return e.slider1 = t
                                }
                            }, m), (this.colorSelected && this.shouldFilter ? (t || []).filter((function(t) {
                                return t.altText.includes(e.color)
                            })) : t || []).map((function(t, a) {
                                return r.a.createElement("div", {
                                    key: t.imageName + "__" + a,
                                    "data-key": o[t.imageName],
                                    onClick: e.props.openPhotoSwipeMonetate
                                }, r.a.createElement("img", {
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/mainProduct/".concat(e.props.contentData.fullImage.imageNameForUrl, "/").concat(t.overideImageName || t.imageName, ".jpg"),
                                    alt: t.altText,
                                    "data-imagename": t.imageName
                                }))
                            })))
                        }
                    }]), a
                }(r.a.Component)
        },
        288: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i() {
                return (i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = arguments[e];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, o = u(p);

                function p() {
                    return s(this, p), o.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        var t = this.props.passedAppFunctions.wasParms.myFavorites,
                            e = this.props.contentData.personalization.superCatId || this.props.parentPersonalization && this.props.parentPersonalization.superCatId;
                        return r.a.createElement(r.a.Fragment, null, "true" != t || !e || "undefined" != typeof window && "US" != window.DILLARDS.country || "undefined" != typeof window && !Modernizr.localstorage ? "" : r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.thisBrandInMyFavorites() ? r.a.createElement("button", i({
                            className: "btn btn-tertiary",
                            role: "button",
                            type: "button",
                            id: "add-to-favorite",
                            onClick: this.props.passedOnClick || this.props.passedFunctions.ajaxAddToBrandFavorites
                        }, this.props.passedDataIds), r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 50.77 48.69"
                        }, r.a.createElement("title", null, "star-full"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M50.75,19a.49.49,0,0,0-.47-.34H32L25.85.33a.49.49,0,0,0-.93,0L18.81,18.67H.49a.49.49,0,0,0-.28.89L15.27,30.14,9.57,48.06a.49.49,0,0,0,.75.54l15.06-11,15.06,11a.49.49,0,0,0,.75-.54L35.5,30.14,50.56,19.56A.49.49,0,0,0,50.75,19Z"
                        })))), "Remove Brand Favorite") : r.a.createElement("button", i({
                            className: "btn btn-tertiary",
                            role: "button",
                            id: "add-to-favorite",
                            type: "button",
                            onClick: this.props.passedOnClick || this.props.passedFunctions.ajaxAddToBrandFavorites
                        }, this.props.passedDataIds), r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 52.77 50.69"
                        }, r.a.createElement("title", null, "star-outline"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M11,50.69a1.49,1.49,0,0,1-1.42-1.94l5.48-17.21L.63,21.38a1.49,1.49,0,0,1,.86-2.71h17.6L25,1A1.49,1.49,0,0,1,27.8,1l5.89,17.65h17.6a1.49,1.49,0,0,1,.85,2.71L37.68,31.54l5.48,17.22a1.49,1.49,0,0,1-.55,1.66,1.52,1.52,0,0,1-1.75,0L26.39,39.85,11.91,50.41A1.49,1.49,0,0,1,11,50.69Zm.49-1.33h0ZM42,48.79h0ZM26.39,37.61a1,1,0,0,1,.59.19l13.8,10.07L35.55,31.45a1,1,0,0,1,.38-1.12l13.74-9.65H33A1,1,0,0,1,32,20L26.39,3.11,20.76,20a1,1,0,0,1-.95.68H3.11l13.74,9.65a1,1,0,0,1,.38,1.12L12,47.87,25.8,37.8A1,1,0,0,1,26.39,37.61ZM51,19.74h0Zm-49.21,0h0Z"
                        })))), "Add To Brand Favorites")))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component)
        },
        290: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return f
            }));
            var n = a(0),
                r = a.n(n);
            a(456);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? p(t) : e
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, o = l(u);

                function u() {
                    var t;
                    i(this, u);
                    for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                    return m(p(t = o.call.apply(o, [this].concat(a))), "quantityBlur", (function(e) {
                        "" == e.target.getAttribute("value") && (t.props.isProductItem ? t.props.forceItemQuantity(e) : t.props.forceQuantity())
                    })), t
                }
                return e = u, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "qty-wrapper"
                        }, r.a.createElement("div", {
                            className: "m-b-5"
                        }, r.a.createElement("label", {
                            htmlFor: "Quantity__" + this.props.contentData.partNumber,
                            className: "label d-inline"
                        }, "Quantity")), r.a.createElement("div", {
                            className: "quantityInputWrapper"
                        }, r.a.createElement("span", {
                            className: "stepperQtyMinus",
                            "data-value": isNaN(parseInt(this.props.quantity, 10)) ? "0" : 1 * this.props.quantity - 1,
                            "data-minimum": this.props.minimumQuantity ? this.props.minimumQuantity : 1,
                            "data-maximum": this.props.maximumQuantity ? this.props.maximumQuantity : 99,
                            onClick: this.props.updateQuantity,
                            role: "button",
                            "aria-label": "Subtract 1 item",
                            tabIndex: "0"
                        }, "-"), r.a.createElement("input", {
                            id: "Quantity__" + this.props.contentData.partNumber,
                            onChange: this.props.updateQuantity,
                            onBlur: this.quantityBlur,
                            name: "quantity",
                            className: "inputQuantity form-control ".concat(this.props.className ? this.props.className : ""),
                            type: "tel",
                            maxLength: "2",
                            value: isNaN(parseInt(this.props.quantity, 10)) ? "" : parseInt(this.props.quantity, 10),
                            "data-minimum": this.props.minimumQuantity ? this.props.minimumQuantity : 1,
                            "data-maximum": this.props.maximumQuantity ? this.props.maximumQuantity : 99
                        }), r.a.createElement("span", {
                            className: "stepperQtyPlus",
                            "data-value": isNaN(parseInt(this.props.quantity, 10)) ? "2" : 1 * this.props.quantity + 1,
                            "data-minimum": this.props.minimumQuantity ? this.props.minimumQuantity : 1,
                            "data-maximum": this.props.maximumQuantity ? this.props.maximumQuantity : 99,
                            onClick: this.props.updateQuantity,
                            role: "button",
                            "aria-label": "Add 1 item",
                            tabIndex: "0"
                        }, "+")))
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(r.a.Component)
        },
        291: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return f
            }));
            var n = a(0),
                r = a.n(n),
                o = a(5),
                i = a.n(o);

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? d(t) : e
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, o = u(p);

                function p(t) {
                    var e, a, n, r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), e = o.call(this, t), a = d(e), r = function(t) {
                        13 == t.keyCode && e.props.passedFunctions.updateAttribute(t)
                    }, (n = "keyPressSize") in a ? Object.defineProperty(a, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[n] = r, e.state = {
                        showSizes: !1,
                        attrLength: e.props.passedFunctions.parentState.attributeState.attributes.length,
                        productId: e.props.contentData.productId
                    }, e.openSizeChart = e.openSizeChart.bind(d(e)), e.openSizeChartKeypress = e.openSizeChartKeypress.bind(d(e)), e.showSizes = e.showSizes.bind(d(e)), e.hideSizes = e.hideSizes.bind(d(e)), e.click = e.click.bind(d(e)), e.findSize = e.findSize.bind(d(e)), e.findColor = e.findColor.bind(d(e)), e.findSwatch = e.findSwatch.bind(d(e)), e.flatSizeResize = e.flatSizeResize.bind(d(e)), e.setWrapperRef = e.setWrapperRef.bind(d(e)), e.handleClickOutside = e.handleClickOutside.bind(d(e)), e
                }
                return e = p, (a = [{
                    key: "thisAttributeAvailable",
                    value: function(t) {
                        for (var e = !1, a = 0; a < this.props.attribute.availableValues.length; a++) {
                            var n = this.props.attribute.availableValues[a];
                            t.value == n.value && (e = !0)
                        }
                        return e
                    }
                }, {
                    key: "openSizeChartKeypress",
                    value: function(t) {
                        "Enter" == t.key && this.openSizeChart()
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        (this.props.contentData.sizeChartName || "") != (t.contentData.sizeChartName || "") && (this.state.cachedSizeChart = "")
                    }
                }, {
                    key: "openSizeChart",
                    value: function() {
                        var t = this;
                        if (this.state.cachedSizeChart) this.props.passedAppFunctions.setModalInfo(this.state.cachedSizeChart);
                        else {
                            this.props.passedAppFunctions.toggleTransition();
                            var e = {
                                method: "get",
                                url: "/webapp/wcs/stores/servlet/NonCacheESpot?emsName=".concat(this.props.contentData.sizeChartName, "&maxNumDisp=1&storeId=301&catalogId=301&langId=-1")
                            };
                            i()(e).then((function(e) {
                                var a, n = {};
                                try {
                                    n = "object" == s(e.data) ? e.data : JSON.parse(e.data), a = !0
                                } catch (t) {}
                                a ? (t.props.passedAppFunctions.toggleTransition(), n.modalType = "SizeChart", t.state.cachedSizeChart = n, t.props.passedAppFunctions.setModalInfo(n)) : t.props.passedAppFunctions.toggleTransition()
                            }))
                        }
                    }
                }, {
                    key: "setWrapperRef",
                    value: function(t) {
                        this.wrapperRef = t
                    }
                }, {
                    key: "handleClickOutside",
                    value: function(t) {
                        this.wrapperRef && !this.wrapperRef.contains(t.target) && this.hideSizes()
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        $(document).on("mousedown.handleClickOutside", this.handleClickOutside), ("Size" == this.props.attribute.attrName || "Initial" == this.props.attribute.attrName) && this.props.flatAttribute && this.props.passedAppFunctions.quickviewIsOpen && this.flatSizeResize()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.contentData.productId != this.state.productId && this.setState({
                            productId: this.props.contentData.productId
                        }), "Size" != this.props.attribute.attrName && "Initial" != this.props.attribute.attrName || !this.props.flatAttribute || this.flatSizeResize()
                    }
                }, {
                    key: "flatSizeResize",
                    value: function() {
                        var t = 0,
                            e = 0,
                            a = $("#QuickViewDisplay .productDisplay__ul--flatSizeWrapper li"),
                            n = $(".productDisplay__ul--flatSizeWrapper li");
                        $("#QuickViewDisplay").length > 0 ? (a.each((function() {
                            t = Math.max(t, $(this).width())
                        })).width(t), a.each((function() {
                            e = Math.max(e, $(this).height())
                        })).height(e)) : (n.each((function() {
                            t = Math.max(t, $(this).width())
                        })).width(t), n.each((function() {
                            e = Math.max(e, $(this).height())
                        })).height(e))
                    }
                }, {
                    key: "showSizes",
                    value: function(t) {
                        this.state.showSizes || this.setState({
                            showSizes: !0
                        })
                    }
                }, {
                    key: "hideSizes",
                    value: function(t) {
                        this.state.showSizes && this.setState({
                            showSizes: !1
                        })
                    }
                }, {
                    key: "click",
                    value: function(t) {
                        this.hideSizes(t), this.props.passedFunctions.updateAttribute(t), t.stopPropagation()
                    }
                }, {
                    key: "findSize",
                    value: function(t) {
                        for (var e = this.props.passedFunctions.parentState.attributeState.attributes, a = "Size", n = 0; n < e.length; n++) {
                            var r = e[n];
                            "Size" == r.attrName && null != r.selectedValueInformation.name && (a = r.selectedValueInformation.name)
                        }
                        return a
                    }
                }, {
                    key: "findColor",
                    value: function(t) {
                        for (var e = this.props.passedFunctions.parentState.attributeState.attributes, a = "Color", n = 0; n < e.length; n++) {
                            var r = e[n];
                            "Color" == r.attrName && null != r.selectedValueInformation.name && (a = r.selectedValueInformation.name)
                        }
                        return a
                    }
                }, {
                    key: "otherAttrUavailable",
                    value: function(t, e) {
                        for (var a, n, r = this.props.passedFunctions.parentState.attributeState.attributes, o = "", i = "", s = (o = t.attrName, 0); s < r.length; s++) {
                            var c = r[s];
                            c.attrName != t.attrName && (n = c)
                        }
                        return i = n.attrName, a = n.selectedValueInformation.name, "This ".concat(o.toLowerCase(), " not available in ").concat(i.toLowerCase(), ": ").concat(a)
                    }
                }, {
                    key: "findSwatch",
                    value: function(t) {
                        for (var e = this.props.contentData.swatchGroups, a = t.name, n = 0; n < e.length; n++)
                            for (var r = e[n].swatches, o = 0; o < r.length; o++) {
                                var i = r[o],
                                    s = i.colorForSwatch,
                                    c = i.swatchImg;
                                if (a == s) return "//dimg.dillards.com/is/image/DillardsZoom/".concat(c)
                            }
                    }
                }, {
                    key: "getOptionPriceForAttrVal",
                    value: function(t) {
                        for (var e = 0; e < this.props.attribute.availableValues.length; e++)
                            if (this.props.attribute.availableValues[e].value == t.value) return this.props.attribute.availableValues[e].optionPrice ? " ".concat(this.props.passedFunctions.currencySymbol()).concat(this.props.passedFunctions.priceConvert(this.props.attribute.availableValues[e].optionPrice)) : "";
                        return ""
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.attribute,
                            a = this.props.contentData;
                        return this.props.passedFunctions.parentState.formValid, r.a.createElement("div", {
                            className: "form-group ".concat(e.hasError ? "form-group-error" : "")
                        }, r.a.createElement("div", {
                            className: "productDisplay__div--labelWrapper"
                        }, r.a.createElement("label", {
                            className: "label",
                            htmlFor: e.attrName + "__" + a.partNumber
                        }, e.attrName), "Size" == e.attrName && this.props.contentData.sizeChartName && !this.props.quickView ? r.a.createElement("button", {
                            className: "productDisplay__span--sizeChart",
                            tabIndex: "0",
                            onClick: this.openSizeChart,
                            onKeyPress: this.openSizeChartKeypress,
                            type: "button"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 53.48 26.78",
                            width: "14"
                        }, r.a.createElement("title", null, "size chart"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M0,0V26.78H53.48V0ZM51.48,24.78H2V2h9.14v8.07h2V2h12.6V15.12h2V2H40.33v8.07h2V2h9.15Z"
                        })))), "Size Chart", r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens a simulated dialog")) : ""), e.values.length > 1 ? r.a.createElement(r.a.Fragment, null, this.props.flatAttribute && ["Size", "Initial"].indexOf(e.attrName) > -1 ? r.a.createElement(r.a.Fragment, null, r.a.createElement("ul", {
                            id: e.attrName + "__" + a.partNumber,
                            className: "productDisplay__ul--flatSizeWrapper".concat(e.hasError ? " selectHasError" : "").concat(e.hasError && "QuickViewDisplay" == this.props.contentData.productLayout ? " modalSelectError" : ""),
                            tabIndex: "-1",
                            "aria-describedby": e.hasError ? "invalidComboContainer" : ""
                        }, e.values.map((function(a, n) {
                            return r.a.createElement("li", {
                                className: "".concat(t.thisAttributeAvailable(a) ? "available" : "not-available").concat(e.selectedValue == a.value ? " selected" : ""),
                                key: a.name,
                                onClick: t.props.passedFunctions.updateAttribute,
                                onKeyUp: t.keyPressSize,
                                "data-attrval": a.value,
                                "data-attrid": e.attrId,
                                tabIndex: "0",
                                "aria-selected": "".concat(e.selectedValue == a.value ? "true" : "false"),
                                role: "button"
                            }, a.name.split("#double;").join('"'), a.optionPrice ? " ".concat(t.props.passedFunctions.currencySymbol()).concat(t.props.passedFunctions.priceConvert(a.optionPrice)) : "")
                        })))) : r.a.createElement("select", {
                            id: e.attrName + "__" + a.partNumber,
                            className: "form-control".concat(e.hasError ? " selectHasError" : "").concat(e.hasError && "QuickViewDisplay" == this.props.contentData.productLayout ? " modalSelectError" : ""),
                            onChange: this.props.updateAttribute,
                            name: "attrValue",
                            value: e.selectedValue || "",
                            "data-attrid": e.attrId,
                            "aria-describedby": e.hasError ? "invalidComboContainer" : ""
                        }, "Color" != e.attrName || "Color" == e.attrName && "" == e.selectedValue ? r.a.createElement("option", {
                            value: ""
                        }, e.attrName) : null, "Color" == e.attrName && "" != e.selectedValue ? r.a.createElement("option", {
                            value: "",
                            disabled: !0
                        }, "Color") : null, (this.props.flatAttribute ? e.values : e.availableValues).map((function(e, a) {
                            return r.a.createElement("option", {
                                className: t.thisAttributeAvailable(e) ? "available" : "not-available",
                                key: e.value,
                                value: e.value
                            }, "".concat(e.name.split("#double;").join('"')), e.optionPrice ? " - ".concat(t.props.passedFunctions.currencySymbol()).concat(t.props.passedFunctions.priceConvert(e.optionPrice)) : "")
                        })))) : r.a.createElement("span", {
                            className: "one-option"
                        }, e.values[0].name.split("#double;").join('"'), r.a.createElement("input", {
                            type: "hidden",
                            value: e.values[0].value,
                            name: "attrValue"
                        })), r.a.createElement("input", {
                            type: "hidden",
                            value: e.attrId,
                            name: "attrName"
                        }))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component);
            e.b = f
        },
        294: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(3);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "espotWrapper",
                            id: "productLeftRightEspot"
                        }, r.a.createElement("div", null, this.props.contentData.productLeftEspot ? r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.productLeftEspot
                        }) : ""), r.a.createElement("div", null, this.props.contentData.productRightEspot ? r.a.createElement(o.b, {
                            innerHTML: this.props.contentData.productRightEspot
                        }) : ""))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component);
            e.a = m
        },
        295: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return d
            }));
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            a(457);
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, o = l(u);

                function u() {
                    return i(this, u), o.apply(this, arguments)
                }
                return e = u, (a = [{
                    key: "render",
                    value: function() {
                        return this.props.contentData.partNumber ? r.a.createElement("div", null, r.a.createElement("span", {
                            className: "item-number"
                        }, "Item #", this.props.contentData.partNumber)) : null
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(r.a.Component);
            e.b = d
        },
        296: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = (a(460), a(10));

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? p(t) : e
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, i = l(u);

                function u(t) {
                    var e, a, n, r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), e = i.call(this, t), a = p(e), r = function() {
                        e.props.passedFunctions.hideCheckForErrors(), document.body.removeEventListener("click", e.closeTip), document.body.removeEventListener("touchstart", e.closeTip)
                    }, (n = "closeTip") in a ? Object.defineProperty(a, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[n] = r, e
                }
                return e = u, (a = [{
                    key: "componentDidUpdate",
                    value: function() {
                        1 == this.props.passedFunctions.parentState.checkForErrors && (document.body.addEventListener("click", this.closeTip), document.body.addEventListener("touchstart", this.closeTip))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.passedFunctions.parentState,
                            e = null != this.props.itemKey,
                            a = "";
                        if (this.props.passedFunctions.parentState.checkForErrors && !this.props.passedFunctions.parentState.formValid)
                            if (e)
                                for (var n = 0; n < t.attributeState.attributes.length; n++) {
                                    var i = t.attributeState.attributes[n];
                                    "Item" != i.attrName && (a = "Select a ".concat(i.attrName.toLowerCase(), " to continue."))
                                } else if (2 == t.attributeState.attributes.length) {
                                    var s = t.attributeState.attributes[0],
                                        c = t.attributeState.attributes[1];
                                    s.selectedValue && c.selectedValue ? a = "Your combination isn't available at this time. Choose from the available options to continue." : s.selectedValue && !c.selectedValue ? a = "Select a".concat(["a", "e", "i", "o", "u"].indexOf(c.attrName[0].toLowerCase()) > -1 ? "n" : "", " ").concat(c.attrName.toLowerCase(), " to continue.") : !s.selectedValue && c.selectedValue ? a = "Select a".concat(["a", "e", "i", "o", "u"].indexOf(s.attrName[0].toLowerCase()) > -1 ? "n" : "", " ").concat(s.attrName.toLowerCase(), " to continue.") : s.selectedValue || c.selectedValue || (a = "Select a".concat(["a", "e", "i", "o", "u"].indexOf(s.attrName[0].toLowerCase()) > -1 ? "n" : "", " ").concat(s.attrName.toLowerCase(), " and ").concat(c.attrName.toLowerCase(), " to continue."))
                                } else 1 == t.attributeState.attributes.length && (a = "Select a".concat(["a", "e", "i", "o", "u"].indexOf(t.attributeState.attributes[0].attrName[0].toLowerCase()) > -1 ? "n" : "", " ").concat(t.attributeState.attributes[0].attrName.toLowerCase(), " to continue."));
                        return r.a.createElement(r.a.Fragment, null, this.props.passedFunctions.parentState.checkForErrors && null == this.props.itemKey && !this.props.passedFunctions.parentState.formValid ? r.a.createElement("div", {
                            id: "invalidComboContainer",
                            className: "invalidComboContainer",
                            tabIndex: "0",
                            onBlur: this.closeTip
                        }, r.a.createElement("button", {
                            className: "closeTip btn-tertiary",
                            onClick: this.closeTip,
                            type: "button",
                            "data-role": "none"
                        }, r.a.createElement(o.c, {
                            closeIconTitleId: "closeInvalidCombo",
                            closeIconTitleDesc: "Close error"
                        })), r.a.createElement("p", null, r.a.createElement("span", null, "!"), a)) : null, this.props.passedFunctions.parentState.itemNotMonogramEligible ? r.a.createElement("div", {
                            className: "invalidComboContainer",
                            tabIndex: "0",
                            onBlur: this.closeTip
                        }, r.a.createElement("button", {
                            className: "closeTip btn-tertiary",
                            onClick: this.closeTip,
                            type: "button",
                            "data-role": "none"
                        }, r.a.createElement(o.c, {
                            closeIconTitleId: "closeInvalidCombo",
                            closeIconTitleDesc: "Close error"
                        })), r.a.createElement("p", null, r.a.createElement("span", null, "!"), "This selection is not available for Monogramming.")) : null, this.props.passedFunctions.parentState.checkForErrors && null != this.props.itemKey && this.props.itemKey == this.props.indexClicked && !this.props.passedFunctions.parentState.formValid ? r.a.createElement("div", {
                            className: "invalidComboContainer",
                            tabIndex: "0",
                            onBlur: this.closeTip
                        }, r.a.createElement("button", {
                            className: "closeTip btn-tertiary",
                            onClick: this.closeTip,
                            type: "button",
                            "data-role": "none"
                        }, r.a.createElement(o.c, {
                            closeIconTitleId: "closeInvalidCombo",
                            closeIconTitleDesc: "Close error"
                        })), r.a.createElement("p", null, r.a.createElement("span", null, "!"), a)) : null)
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(n.Component)
        },
        297: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(129);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "col-12 p-0"
                        }, r.a.createElement("div", {
                            className: "chanelBanner"
                        }, r.a.createElement(o.a, {
                            to: "/brand/Chanel"
                        }, r.a.createElement("img", {
                            src: "/assets/img/logos/chanelBannerLogo.png",
                            alt: "Chanel"
                        }))))
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component)
        },
        303: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return n
            }));
            var n = function(t) {
                for (var e = {
                        favoriteSuperCat: "",
                        favoriteSuperCatPoints: 0,
                        favoriteBrand: "",
                        favoriteBrandPoints: 0
                    }, a = 0; a < t.length; a++) {
                    var n = t[a],
                        r = localStorage.getItem("personalization".concat(n));
                    if (r) {
                        for (var o = 0, i = (r = r.split("&amp;").join("&")).split("|"), s = 0; s < i.length; s++) {
                            var c = i[s].split(";"),
                                l = c[0].indexOf(":") > -1 ? c[0].split(":")[1] : c[0],
                                u = 1 * c[1];
                            o += u, u > e.favoriteBrandPoints && (e.favoriteBrand = l, e.favoriteBrandPoints = u)
                        }
                        o > e.favoriteSuperCatPoints && (e.favoriteSuperCat = n, e.favoriteSuperCatPoints = o)
                    }
                }
                return e
            };
            e.a = n
        },
        304: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(3);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        var t = [];
                        if (this.props.contentData) {
                            if (this.props.contentData.dropshipVerbiage && t.push(r.a.createElement("div", {
                                    className: "ds-message",
                                    key: t.length
                                }, r.a.createElement(o.b, {
                                    innerHTML: this.props.contentData.dropshipVerbiage
                                }))), this.props.contentData.auxVerbiage1 && "" != this.props.contentData.auxVerbiage1 && t.push(r.a.createElement(o.b, {
                                    innerHTML: this.props.contentData.auxVerbiage1,
                                    key: t.length
                                })), this.props.contentData.auxDescription1 && "" != this.props.contentData.auxDescription1 && t.push(r.a.createElement(o.b, {
                                    innerHTML: this.props.contentData.auxDescription1,
                                    key: t.length
                                })), this.props.contentData.auxDescription2 && "" != this.props.contentData.auxDescription2 && t.push(r.a.createElement(o.b, {
                                    innerHTML: this.props.contentData.auxDescription2,
                                    key: t.length
                                })), this.props.contentData.preOrder && this.props.contentData.preOrder.preOrderMessage && "" != this.props.contentData.preOrder.preOrderMessage && t.push(r.a.createElement("div", {
                                    className: "h_155f8f",
                                    key: t.length
                                }, this.props.contentData.preOrder.preOrderMessage)), this.props.contentData.preOrder && this.props.contentData.preOrder.previewEndDateMessage && "" != this.props.contentData.preOrder.previewEndDateMessage && t.push(r.a.createElement("div", {
                                    className: "h_155f8f",
                                    key: t.length
                                }, this.props.contentData.preOrder.previewEndDateMessage)), this.props.navTile || "LIMITED" != this.props.contentData.limitedAvailability && "Limited Availability" != this.props.contentData.limitedAvailability || t.push(r.a.createElement("div", {
                                    className: "h_155f8f",
                                    key: t.length
                                }, "Limited Availability")), this.props.fromQv || "true" != this.props.contentData.productContainsMonogramEligibleItems || t.push(r.a.createElement("div", {
                                    className: "h_155f8f hide-when-international",
                                    key: t.length
                                }, "Monogramming Available for $5")), "Y" == (this.props.contentData.productSubscriptionEligible || "N") && this.props && this.props.passedAppFunctions && this.props.passedAppFunctions.wasParms) {
                                var e = this.props.passedAppFunctions.wasParms.subscriptionVerbiage;
                                "true" == this.props.passedAppFunctions.wasParms.subscriptionsEnabled && null != e && t.push(r.a.createElement("span", {
                                    className: "h_155f8f hide-when-international",
                                    key: t.length
                                }, e))
                            }
                        } else this.props.auxVerbiage1 && "" != this.props.auxVerbiage1 && t.push(r.a.createElement(o.b, {
                            innerHTML: this.props.auxVerbiage1,
                            key: t.length
                        })), this.props.auxDescription1 && "" != this.props.auxDescription1 && t.push(r.a.createElement(o.b, {
                            innerHTML: this.props.auxDescription1,
                            key: t.length
                        })), this.props.auxDescription2 && "" != this.props.auxDescription2 && t.push(r.a.createElement(o.b, {
                            innerHTML: this.props.auxDescription2,
                            key: t.length
                        })), this.props.preOrderMessage && "" != this.props.preOrderMessage && t.push(r.a.createElement("div", {
                            className: "h_155f8f",
                            key: t.length
                        }, this.props.preOrderMessage));
                        return this.props.navTile && (this.props.contentData.limitedAvail && t.push(r.a.createElement("div", {
                            className: "h_155f8f",
                            key: t.length
                        }, this.props.contentData.limitedAvail)), "1" == this.props.contentData.productContainsMonogramEligibleItems && t.push(r.a.createElement("span", {
                            className: "h_155f8f hide-when-international",
                            key: t.length
                        }, "Monogramming Available"))), r.a.createElement("div", null, t)
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component);
            e.b = m
        },
        305: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(3);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? p(t) : e
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, i = l(u);

                function u(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (e = i.call(this, t)).state = {}, e.state.open = e.props.open, e.toggleOpen = e.toggleOpen.bind(p(e)), e
                }
                return e = u, (a = [{
                    key: "toggleOpen",
                    value: function() {
                        this.setState({
                            open: !this.state.open
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "panel product-shipping-wrapper hide-when-international"
                        }, r.a.createElement("button", {
                            onClick: this.toggleOpen,
                            className: "panel-title product-shipping-title",
                            "aria-controls": "product-shipping-".concat(this.props.contentData.productId),
                            "aria-expanded": this.state.open ? "true" : "false"
                        }, "Shipping and Returns ", this.state.open ? r.a.createElement("i", {
                            className: "panel-icon expanded"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.84 48.84"
                        }, r.a.createElement("title", null, "plus"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M47.84,23.41H25.47V1a1,1,0,0,0-2,0v22.4H1a1,1,0,0,0,0,2H23.45v22.4a1,1,0,1,0,2,0V25.43H47.84a1,1,0,1,0,0-2Z"
                        }))))) : r.a.createElement("i", {
                            className: "panel-icon"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.84 48.84"
                        }, r.a.createElement("title", null, "plus"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M47.84,23.41H25.47V1a1,1,0,0,0-2,0v22.4H1a1,1,0,0,0,0,2H23.45v22.4a1,1,0,1,0,2,0V25.43H47.84a1,1,0,1,0,0-2Z"
                        })))))), this.state.open ? r.a.createElement(o.b, {
                            className: "col-sm-12 product-shipping",
                            innerHTML: this.props.contentData.ES_Shipping_Returns_JSON,
                            espotname: "ES_Shipping_Returns_JSON"
                        }) : "")
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(r.a.Component)
        },
        314: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(37),
                i = a(42),
                s = a.n(i);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l() {
                return (l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = arguments[e];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return m(this, a)
                }
            }

            function m(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var h = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e)
                }(c, t);
                var e, a, n, i = d(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = i.call(this, t)).state = {
                        allSwatchSliders: {}
                    }, e
                }
                return e = c, (a = [{
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        !t.contentData.productId || this.props.contentData.productId == t.contentData.productId && this.props.contentData.salePage == t.contentData.salePage || this.setState({
                            allSwatchSliders: {}
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = JSON.parse(JSON.stringify(this.props.swatchGroups || [])),
                            a = {
                                dots: !1,
                                infinite: !1,
                                vertical: !1,
                                speed: 500,
                                slidesToShow: 6,
                                swipeToSlide: !0,
                                focusOnSelect: !0,
                                lazyLoad: !0,
                                responsive: "desktop" == this.props.passedAppFunctions.siteFormat ? [{
                                    breakpoint: 3e3,
                                    settings: {
                                        slidesToShow: 6,
                                        swipeToSlide: !0,
                                        swipe: !0
                                    }
                                }] : "mobile" == this.props.passedAppFunctions.siteFormat ? [{
                                    breakpoint: 950,
                                    settings: {
                                        slidesToShow: 10,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 750,
                                    settings: {
                                        slidesToShow: 8,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 550,
                                    settings: {
                                        slidesToShow: 7,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 400,
                                    settings: {
                                        slidesToShow: 6,
                                        swipeToSlide: !0
                                    }
                                }] : [{
                                    breakpoint: 1366,
                                    settings: {
                                        arrows: !1,
                                        slidesToShow: 5.5,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 1024,
                                    settings: {
                                        arrows: !1,
                                        slidesToShow: 5.5,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 768,
                                    settings: {
                                        arrows: !1,
                                        slidesToShow: 5.5,
                                        swipeToSlide: !0
                                    }
                                }, {
                                    breakpoint: 480,
                                    settings: {
                                        arrows: !1,
                                        slidesToShow: 5.5,
                                        swipeToSlide: !0
                                    }
                                }]
                            };
                        if (e && e.length > 0 && e.sort((function(t, e) {
                                var a = t.pricing,
                                    n = e.pricing,
                                    r = a.onSpecial,
                                    o = n.onSpecial,
                                    i = void 0 !== r;
                                return void 0 !== r && void 0 !== o || null == r && null == o ? void 0 !== a.offerPriceRange && void 0 !== n.offerPriceRange ? function(t, e) {
                                    var a = t.offerPriceMax,
                                        n = t.offerPriceMin,
                                        r = e.offerPriceMax,
                                        o = e.offerPriceMin;
                                    return parseInt(a) > parseInt(r) ? -1 : parseInt(a) < parseInt(r) ? 1 : parseInt(n) > parseInt(o) ? -1 : parseInt(n) < parseInt(o) ? 1 : 0
                                }(a, n) : 0 : i ? 1 : -1
                            })), this.props.selectedMainImg && this.state.allSwatchSliders[0])
                            for (var n, i, c = 0; c < e.length; c++)
                                for (var u = 0; u < e[c].swatches.length; u++) e[c].swatches[u].fullImage === this.props.selectedMainImg.split("__")[0] && (n = c, i = u, this.state.allSwatchSliders[n].slickGoTo(i));
                        return r.a.createElement("div", {
                            className: "swatch-groups"
                        }, e && e.length > 0 ? e.map((function(n, i) {
                            return r.a.createElement("div", {
                                key: i,
                                className: "productDisplay__div--swatch-group"
                            }, r.a.createElement("ul", {
                                className: "swatches"
                            }, r.a.createElement(s.a, l({
                                ref: function(e) {
                                    return t.state.allSwatchSliders[i] = e
                                },
                                arrows: n.swatches.length > 6
                            }, a), n.swatches.map((function(e) {
                                return r.a.createElement("li", {
                                    key: e.swatchImg,
                                    className: "swatches__item"
                                }, r.a.createElement("span", {
                                    className: "swatches__span".concat(" ", e.available ? "swatches__span--available" : "swatches__span--notAvailable"),
                                    "data-attrval": e.selectedValue,
                                    onClick: t.props.passedFunctions.updateAttribute,
                                    "data-attrid": e.attrId
                                }), r.a.createElement("button", {
                                    className: "btn-tertiary p-0",
                                    onClick: t.props.passedFunctions.updateAttribute,
                                    "data-attrval": e.selectedValue,
                                    "data-attrid": e.attrId,
                                    "aria-selected": "".concat(e.selected ? "true" : "false"),
                                    type: "button",
                                    "data-role": "none"
                                }, r.a.createElement("img", {
                                    className: "swatches__img".concat(" ", e.selected ? " swatches__img--selected" : ""),
                                    key: e.swatchImg,
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/".concat(e.swatchImg),
                                    alt: "Color Swatch - ".concat(e.colorForSwatch)
                                })))
                            })))), e.length > 1 || t.props.contentData.onSpecial ? r.a.createElement(o.a, {
                                pricing: n.pricing
                            }) : "")
                        })) : "")
                    }
                }]) && u(e.prototype, a), n && u(e, n), c
            }(r.a.Component);
            e.a = h
        },
        315: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return d
            }));
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, o = l(u);

                function u() {
                    return i(this, u), o.apply(this, arguments)
                }
                return e = u, (a = [{
                    key: "render",
                    value: function() {
                        var t = this.props.contentData,
                            e = t.chanelNameFirst,
                            a = t.chanelNameSecond,
                            n = t.chanelNameThird;
                        return r.a.createElement(this.props.h2 ? "h2" : "h1", {
                            className: "chanelTitle"
                        }, r.a.createElement("span", {
                            className: "chanelTitle1"
                        }, e), r.a.createElement("span", {
                            className: "chanelTitle2"
                        }, a), r.a.createElement("span", {
                            className: "chanelTitle3"
                        }, n))
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(r.a.Component)
        },
        321: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return b
            }));
            var n = a(0),
                r = a.n(n),
                o = a(129),
                i = a(5),
                s = a.n(i),
                c = a(42),
                l = a.n(c);

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = y(t);
                    if (e) {
                        var r = y(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? h(t) : e
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e)
                }(c, t);
                var e, a, n, i = m(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = i.call(this, t)).state = {
                        showPartialImages: !1
                    }, e.checkMonatateAfterRender = e.checkMonatateAfterRender.bind(h(e)), e
                }
                return e = c, (a = [{
                    key: "populateCurrentCollection",
                    value: function() {
                        var t = "",
                            e = this.props.selectedMainImg.split("__")[0];
                        if (this.props.attributeState && this.props.attributeState.attributes)
                            for (var a = 0; a < this.props.attributeState.attributes.length; a++) {
                                var n = this.props.attributeState.attributes[a];
                                if ("Color" == n.attrName)
                                    if (n.selectedValueInformation && n.selectedValueInformation.name) t = n.selectedValueInformation.name;
                                    else
                                        for (var r = 0; r < n.values.length; r++) {
                                            var o = n.values[r];
                                            o.fullImage == e && (t = o.name)
                                        }
                            }
                        var i = {};
                        if (this.state.collections)
                            for (var s = 0; s < this.state.collections.length; s++) {
                                var c = this.state.collections[s];
                                c.color != t && "groupTag" != c.color || (i = c)
                            }
                        return i
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        this.props.contentData.productId != t.contentData.productId && this.fetchCollection(t.contentData.productId, t.contentData.dept, t.contentData.mic)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("load", this.checkMonatateAfterRender)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.collections && this.populateCurrentCollection();
                        this.props.passedFunctions.setCurrentCollection(t && t.details ? t.details : []);
                        var e = this.props.slidesToShow || 6;
                        (this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage) && "tablet" == this.props.passedAppFunctions.siteFormat && (e += .5);
                        var a = {
                            dots: !1,
                            infinite: !1,
                            vertical: !1,
                            speed: 500,
                            slidesToShow: e,
                            slidesToScroll: 1,
                            swipe: !0,
                            lazyLoad: !1,
                            arrows: this.state.collections && t && t.details && t.details.length > this.props.slidesToShow,
                            responsive: this.props.passedAppFunctions && "tablet" == this.props.passedAppFunctions.siteFormat ? [{
                                breakpoint: 1367,
                                settings: {
                                    arrows: !1,
                                    vertical: !1,
                                    slidesToShow: this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage ? 4.5 : 4,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 1023,
                                settings: {
                                    slidesToShow: 3.5,
                                    slidesToScroll: 3,
                                    vertical: !1,
                                    arrows: !1
                                }
                            }] : ""
                        };
                        e = 2, (this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage) && (e = 2.5);
                        var n = {
                            dots: !1,
                            infinite: !1,
                            vertical: !1,
                            speed: 500,
                            slidesToShow: e,
                            slidesToScroll: 1,
                            swipe: !0,
                            lazyLoad: !1,
                            arrows: !1
                        };
                        return r.a.createElement("div", {
                            className: "collection-area m-t-30 ".concat(a.arrows ? "has-arrows" : "", " ").concat("mobile" != this.props.passedAppFunctions.siteFormat ? "col-sm-12" : "")
                        }, this.state.collections && t && t.details && t.details.length > 0 && "mobile" != this.props.passedAppFunctions.siteFormat ? r.a.createElement("div", null, r.a.createElement("h2", {
                            className: "relative"
                        }, r.a.createElement("span", {
                            className: "shop-the-collection-title"
                        }, "Shop The Collection")), r.a.createElement(l.a, a, t.details.map((function(e, a) {
                            return r.a.createElement("figure", {
                                className: "item",
                                key: "".concat(e.catentryId).concat(e.imageName).concat(a)
                            }, r.a.createElement(o.a, {
                                to: {
                                    pathname: "/p/".concat(e.keyword, "/").concat(e.catentryId),
                                    state: {
                                        qv: !0,
                                        extraQVProps: {
                                            collection: t,
                                            thisCollectionMember: e
                                        }
                                    }
                                }
                            }, r.a.createElement("img", {
                                src: "//dimg.dillards.com/is/image/DillardsZoom/nav/".concat(e.keyword, "/").concat(e.imageName, ".jpg"),
                                alt: e.name
                            }), r.a.createElement("p", {
                                className: "item-title"
                            }, e.name.split("#double;").join('"').split("&quot;").join('"'))))
                        })))) : this.state.collections && t && t.details && t.details.length > 0 && "mobile" == this.props.passedAppFunctions.siteFormat ? r.a.createElement("div", null, r.a.createElement("h6", {
                            className: "relative"
                        }, r.a.createElement("span", {
                            className: "shop-the-collection-title"
                        }, "Shop The Collection")), r.a.createElement(l.a, n, t.details.map((function(e, a) {
                            return r.a.createElement("figure", {
                                className: "item",
                                key: "".concat(e.catentryId).concat(e.imageName).concat(a)
                            }, r.a.createElement(o.a, {
                                to: {
                                    pathname: "/p/".concat(e.keyword, "/").concat(e.catentryId),
                                    state: {
                                        qv: !0,
                                        extraQVProps: {
                                            collection: t,
                                            thisCollectionMember: e
                                        }
                                    }
                                }
                            }, r.a.createElement("img", {
                                src: "//dimg.dillards.com/is/image/DillardsZoom/nav/".concat(e.keyword, "/").concat(e.imageName, ".jpg"),
                                alt: e.name
                            }), r.a.createElement("p", {
                                className: "item-title"
                            }, e.name.split("#double;").join('"').split("&quot;").join('"'))))
                        })))) : "")
                    }
                }, {
                    key: "checkMonatateAfterRender",
                    value: function() {
                        (void 0 !== window.partialImage && !0 === window.partialImage || void 0 !== this.props.passedAppFunctions.testFlags.partialImage && !0 === this.props.passedAppFunctions.testFlags.partialImage) && this.setState((function(t, e) {
                            return {
                                showPartialImages: !0
                            }
                        }))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.fetchCollection(), window.addEventListener("load", this.checkMonatateAfterRender)
                    }
                }, {
                    key: "fetchCollection",
                    value: function(t, e, a) {
                        var n = this;
                        if ("true" == this.props.passedAppFunctions.wasParms.displayCollections) {
                            var r = {
                                method: "get",
                                url: "/data/collections?catentryId=".concat(t || this.props.contentData.productId, "&dept=").concat(e || this.props.contentData.dept, "&mic=").concat(a || this.props.contentData.mic)
                            };
                            s()(r).then((function(t) {
                                var e, a = {};
                                try {
                                    a = "object" == u(t.data) ? t.data.contentData : JSON.parse(t.data.contentData), e = !0
                                } catch (t) {}
                                e && n.setState({
                                    collections: a
                                })
                            }))
                        }
                    }
                }]) && p(e.prototype, a), n && p(e, n), c
            }(r.a.Component)
        },
        322: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(129),
                i = a(5),
                s = a.n(i),
                c = a(42),
                l = a.n(c);

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = y(t);
                    if (e) {
                        var r = y(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? h(t) : e
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e)
                }(c, t);
                var e, a, n, i = m(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = i.call(this, t)).state = {
                        showPartialImages: !1
                    }, e.checkMonatateAfterRender = e.checkMonatateAfterRender.bind(h(e)), e
                }
                return e = c, (a = [{
                    key: "populateCurrentOSSAccessories",
                    value: function() {
                        var t, e = this.props.selectedMainImg;
                        if (this.state.OSSView && this.state.OSSView.accessories)
                            for (var a = 0; a < this.state.OSSView.accessories.length; a++) {
                                var n = this.state.OSSView.accessories[a];
                                n.dil_oss_product_image_name == e && (t = n.dil_oss_accessories)
                            }
                        return t
                    }
                }, {
                    key: "checkMonatateAfterRender",
                    value: function() {
                        (void 0 !== window.partialImage && !0 === window.partialImage || void 0 !== this.props.passedAppFunctions.testFlags.partialImage && !0 === this.props.passedAppFunctions.testFlags.partialImage) && this.setState((function(t, e) {
                            return {
                                showPartialImages: !0
                            }
                        }))
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        this.props.contentData.productId != t.contentData.productId && this.fetchOSS(t.contentData.productId, t.contentData.dept, t.contentData.mic)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.OSSView && this.populateCurrentOSSAccessories();
                        this.props.passedFunctions.setCurrentOSSAccessories(t);
                        var e = {
                            dots: !1,
                            infinite: !1,
                            vertical: !1,
                            speed: 500,
                            slidesToShow: (this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage) && this.state.OSSView && t && t.length > 2 ? 2.5 : 2,
                            slidesToScroll: 1,
                            swipe: !0,
                            lazyLoad: !1,
                            arrows: this.state.OSSView && t && t.length > 2
                        };
                        return r.a.createElement(r.a.Fragment, null, this.state.OSSView && t ? r.a.createElement("div", {
                            className: "our-stylist-suggests ".concat(e.arrows ? "has-arrows" : "")
                        }, r.a.createElement("h2", {
                            className: "relative"
                        }, r.a.createElement("span", {
                            className: "our-stylist-suggests-title"
                        }, "Complete Your Look")), r.a.createElement(l.a, e, t.map((function(e, a) {
                            return r.a.createElement("div", {
                                className: "item cylImageContainer",
                                key: e.dil_oss_acc_fullImage
                            }, r.a.createElement(o.a, {
                                to: {
                                    pathname: "/p/".concat(e.dil_oss_acc_keyword, "/").concat(e.dil_oss_acc_catentry_id),
                                    state: {
                                        qv: !0,
                                        extraQVProps: {
                                            OSS: t
                                        }
                                    }
                                }
                            }, r.a.createElement("img", {
                                src: "//dimg.dillards.com/is/image/DillardsZoom/nav/".concat(e.dil_oss_acc_keyword, "/").concat(e.dil_oss_acc_fullImage, ".jpg"),
                                alt: e.dil_oss_acc_name
                            })), r.a.createElement(o.a, {
                                className: "btn btn-secondary btn-block",
                                to: {
                                    pathname: "/p/".concat(e.dil_oss_acc_keyword, "/").concat(e.dil_oss_acc_catentry_id),
                                    state: {
                                        qv: !0,
                                        extraQVProps: {
                                            OSS: t
                                        }
                                    }
                                }
                            }, "Quick View"))
                        })))) : "")
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.fetchOSS(), window.addEventListener("load", this.checkMonatateAfterRender)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("load", this.checkMonatateAfterRender)
                    }
                }, {
                    key: "fetchOSS",
                    value: function(t, e, a) {
                        var n = this;
                        if ("true" == this.props.passedAppFunctions.wasParms.displayOurStylistSuggests) {
                            var r = {
                                method: "get",
                                url: "/data/oss?catentryId=".concat(t || this.props.contentData.productId, "&dept=").concat(e || this.props.contentData.dept, "&mic=").concat(a || this.props.contentData.mic)
                            };
                            s()(r).then((function(t) {
                                var e, a = {};
                                try {
                                    a = "object" == u(t.data.contentData) ? t.data.contentData : JSON.parse(t.data.contentData), e = !0
                                } catch (t) {}
                                e && n.setState({
                                    OSSView: a
                                })
                            }))
                        }
                    }
                }]) && p(e.prototype, a), n && p(e, n), c
            }(r.a.Component);
            e.a = b
        },
        323: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (a.push(i.value), !e || a.length !== e); n = !0);
                    } catch (t) {
                        r = !0, o = t
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return a
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var a = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === a && t.constructor && (a = t.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(t);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
                return n
            }
            e.a = function(t) {
                var e = o(Object(n.useState)([]), 2),
                    a = e[0],
                    i = e[1],
                    s = function(e) {
                        var a = document.querySelector("#subscription-section select#subFrequencySelect__".concat(t.contentData.partNumber));
                        if ("subscribe" == e) {
                            for (var n = a.options, r = 0; r < n.length; r++) {
                                var o = n[r];
                                "" == o.value && a.removeChild(o)
                            }
                            a.disabled = !1
                        } else a.appendChild(new Option("Select Frequency", "")), a.value = "", a.disabled = !0;
                        t.passedFunctions.updateSubscriptionFrequency(a.value)
                    };
                return Object(n.useEffect)((function() {
                    var e = t.passedAppFunctions.wasParms.subscriptionFreq;
                    null != e && i(e.split(","));
                    var a = document.querySelector("input[name=subFrequencyRadio][value='once']");
                    null != a && (a.checked = !0)
                }), []), "true" == t.passedAppFunctions.wasParms.subscriptionsEnabled ? r.a.createElement("div", {
                    className: "m-10 hide-when-international",
                    id: "subscription-section"
                }, r.a.createElement("div", {
                    className: "form-group "
                }, r.a.createElement("div", {
                    className: "custom-control custom-radio"
                }, r.a.createElement("input", {
                    type: "radio",
                    id: "subFrequencyRadio__" + t.contentData.partNumber + "__once",
                    name: "subFrequencyRadio",
                    className: "custom-control-input",
                    value: "once",
                    defaultChecked: !0,
                    onClick: function(t) {
                        return s(t.target.value)
                    }
                }), r.a.createElement("label", {
                    className: "custom-control-label",
                    htmlFor: "subFrequencyRadio__" + t.contentData.partNumber + "__once"
                }, "ONE TIME PURCHASE")), r.a.createElement("div", {
                    className: "custom-control custom-radio"
                }, r.a.createElement("input", {
                    type: "radio",
                    id: "subFrequencyRadio__" + t.contentData.partNumber + "__subscribe",
                    name: "subFrequencyRadio",
                    className: "custom-control-input",
                    value: "subscribe",
                    onClick: function(t) {
                        return s(t.target.value)
                    }
                }), r.a.createElement("label", {
                    className: "custom-control-label",
                    htmlFor: "subFrequencyRadio__" + t.contentData.partNumber + "__subscribe"
                }, "SUBSCRIBE")), r.a.createElement("div", null, r.a.createElement("select", {
                    className: "form-control",
                    id: "subFrequencySelect__" + t.contentData.partNumber,
                    name: "subFrequencySelect",
                    disabled: "disabled",
                    onChange: function(e) {
                        return t.passedFunctions.updateSubscriptionFrequency(e.target.value)
                    }
                }, r.a.createElement("option", {
                    value: ""
                }, "Select Frequency"), a.map((function(t, e) {
                    return r.a.createElement("option", {
                        key: e,
                        value: t
                    }, "Every ", t, " Days")
                })))))) : null
            }
        },
        324: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n);
            e.a = function(t) {
                return r.a.createElement("button", {
                    className: "btn btn-primary btn-block",
                    id: "add-to-bag",
                    role: "button",
                    type: "button",
                    onClick: t.passedFunctions.checkForErrors
                }, "" == t.passedFunctions.parentState.subscriptionFrequency ? "Add to Bag" : "Add to Bag & Subscribe")
            }
        },
        335: function(t, e, a) {},
        336: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return d
            }));
            var n = a(0),
                r = a.n(n);

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(u, t);
                var e, a, n, o = l(u);

                function u() {
                    return i(this, u), o.apply(this, arguments)
                }
                return e = u, (a = [{
                    key: "render",
                    value: function() {
                        return r.a.createElement("div", {
                            className: "qty-wrapper"
                        }, r.a.createElement("span", {
                            className: "label"
                        }, "Quantity"), r.a.createElement("select", {
                            onChange: this.props.updateQuantity,
                            className: "quantity form-control text-center ".concat(this.props.className ? this.props.className : ""),
                            maxLength: "2",
                            value: this.props.quantity,
                            "data-minimum": this.props.minimumQuantity ? this.props.minimumQuantity : 1,
                            "data-maximum": this.props.maximumQuantity ? this.props.maximumQuantity : 3,
                            title: "Please select a valid quantity",
                            id: "quantityInput",
                            name: "quantity"
                        }, r.a.createElement("option", {
                            value: "1"
                        }, "1"), r.a.createElement("option", {
                            value: "2"
                        }, "2"), r.a.createElement("option", {
                            value: "3"
                        }, "3")))
                    }
                }]) && s(e.prototype, a), n && s(e, n), u
            }(r.a.Component)
        },
        369: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return h
            }));
            var n = a(0),
                r = a.n(n),
                o = a(14),
                i = a.n(o);

            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c() {
                return (c = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = arguments[e];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return d(this, a)
                }
            }

            function d(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? m(t) : e
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var h = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e)
                }(s, t);
                var e, a, n, o = p(s);

                function s(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (e = o.call(this, t)).state = {}, e.onClickWrapperMonogram = e.onClickWrapperMonogram.bind(m(e)), e
                }
                return e = s, (a = [{
                    key: "onClickWrapperMonogram",
                    value: function(t) {
                        this.props.passedFunctions.checkForErrorsMonogram(), this.props.passedOnClick ? this.props.passedOnClick(t) : this.props.passedFunctions.ajaxMonogramPersonalization(t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.passedFunctions.returnItemColorOrTrueIfMonogramEligible();
                        return r.a.createElement(r.a.Fragment, null, "true" == this.props.contentData.productContainsMonogramEligibleItems ? r.a.createElement(i.a, null, r.a.createElement("script", {
                            src: "/master/dist/monogramFunction.js?v=".concat(this.props.passedAppFunctions.wasParms.cacheCallVariable)
                        }), r.a.createElement("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "/master/dist/css/monogramFunction.css?v=".concat(this.props.passedAppFunctions.wasParms.cacheCallVariable)
                        }), r.a.createElement("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "https://client.livedesignerfusion.com/Themes/Light/Css/Style.css",
                            crossorigin: "anonymous"
                        }), r.a.createElement("script", {
                            type: "text/javascript",
                            src: "https://client.livedesignerfusion.com/Scripts/melco.js",
                            crossorigin: "anonymous"
                        })) : null, "true" == this.props.contentData.productContainsMonogramEligibleItems ? r.a.createElement("a", c({
                            className: "btn btn-blue btn-block hide-when-international",
                            id: "monogram-personalization",
                            "data-color": t,
                            onClick: this.onClickWrapperMonogram
                        }, this.props.passedDataIds), "Personalize with a Monogram!") : "")
                    }
                }]) && l(e.prototype, a), n && l(e, n), s
            }(r.a.Component)
        },
        370: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(283),
                i = a(290),
                s = a(37),
                c = a(284),
                l = a(288),
                u = (a(314), a(296));

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = b(t);
                    if (e) {
                        var r = b(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return h(this, a)
                }
            }

            function h(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? y(t) : e
            }

            function y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function b(t) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var g = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(h, t);
                var e, a, n, p = f(h);

                function h(t) {
                    var e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h), (e = p.call(this, t)).state = {}, e.state.thisAttributeError = {}, e.state.thisAttributeError.hasError = !1, e.state.cacheAttrMap = e.generateCacheAttrMap(), e.state.quantities = [], e.state.quantityEvents = [], e.state.colors = [], e.state.colorEvents = [], e.state.swatchGroups = [];
                    for (var a = 0; a < e.props.contentData.itemAttrDisplayInfo.attrGroups.length; a++) {
                        var n = e.props.contentData.itemAttrDisplayInfo.attrGroups[a];
                        e.state.quantities.push({
                            value: 1,
                            errored: !1
                        }), e.state.quantityEvents.push(void 0), e.state.colors.push({
                            value: "",
                            errored: !1
                        }), e.state.colorEvents.push(void 0), e.state.swatchGroups.push(e.initSwatchGroups(n.swatchGroups))
                    }
                    return e.updateAttributeAndAddToBag = e.updateAttributeAndAddToBag.bind(y(e)), e.updateAttributeAndAddToWishlist = e.updateAttributeAndAddToWishlist.bind(y(e)), e.updateAttributeAndAddToRegistry = e.updateAttributeAndAddToRegistry.bind(y(e)), e.updateAttributeAndAddToFavorites = e.updateAttributeAndAddToFavorites.bind(y(e)), e.updateQuantities = e.updateQuantities.bind(y(e)), e.updateColors = e.updateColors.bind(y(e)), e.forceItemQuantity = e.forceItemQuantity.bind(y(e)), e
                }
                return e = h, (a = [{
                    key: "initSwatchGroups",
                    value: function(t) {
                        for (var e = JSON.parse(JSON.stringify(t)), a = 0; a < e.length; a++)
                            for (var n = e[a], r = 0; r < n.swatches.length; r++) {
                                var o = n.swatches[r],
                                    i = this.state.cacheAttrMap[o.colorForSwatch] || {};
                                o.selectedValue = i.selectedValue, o.attrId = i.attrId
                            }
                        return e
                    }
                }, {
                    key: "fakeQuantityObject",
                    value: function() {
                        return {
                            target: {
                                value: "1",
                                getAttribute: function(t) {
                                    return "data-minimum" == t ? 1 : "data-maximum" == t ? 99 : void 0
                                }
                            }
                        }
                    }
                }, {
                    key: "generateCacheAttrMap",
                    value: function() {
                        for (var t = {}, e = 0; e < this.props.contentData.attributes.length; e++)
                            for (var a = this.props.contentData.attributes[e], n = a.attrId, r = 0; r < a.values.length; r++) {
                                var o = a.values[r],
                                    i = o.value;
                                t[o.name] = {
                                    attrId: n,
                                    selectedValue: i
                                }
                            }
                        return t
                    }
                }, {
                    key: "validateParameters",
                    value: function(t, e) {
                        var a = !0,
                            n = this.state.colorEvents[t],
                            r = this.state.quantityEvents[t];
                        return n && "" != n.target.value || (e || (this.state.colors[t].errored = !0), a = !1), r && "" == r.target.value && (e || (this.state.quantities[t].errored = !0), a = !1), a || e || (this.setState({}), this.props.passedFunctions.formNotValid()), a
                    }
                }, {
                    key: "updateAttributeAndAddToBag",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked(), this.props.passedFunctions.checkForErrorsItemAttr();
                        var e = t.target.getAttribute("data-index");
                        this.setState({
                            indexClicked: e
                        }), this.validateParameters(e) ? (this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.updateAttribute(this.state.colorEvents[e]), this.props.passedFunctions.ajaxAddToBag(t)) : this.state.thisAttributeError.hasError = !0
                    }
                }, {
                    key: "updateAttributeAndAddToWishlist",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked(), this.props.passedFunctions.checkForErrorsItemAttr();
                        var e = t.target.getAttribute("data-index");
                        this.setState({
                            indexClicked: e
                        }), this.validateParameters(e) && (this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.updateAttribute(this.state.colorEvents[e]), this.props.passedFunctions.ajaxAddToWishlist(t))
                    }
                }, {
                    key: "updateAttributeAndAddToRegistry",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked(), this.props.passedFunctions.checkForErrorsItemAttr();
                        var e = t.target.getAttribute("data-index");
                        this.setState({
                            indexClicked: e
                        }), this.validateParameters(e) && (this.state.quantityEvents[e] && this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]), this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.updateAttribute(this.state.colorEvents[e]), this.props.passedFunctions.ajaxAddToRegistry(t))
                    }
                }, {
                    key: "updateAttributeAndAddToFavorites",
                    value: function(t) {
                        this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToBrandFavorites(t)
                    }
                }, {
                    key: "updateQuantities",
                    value: function(t, e) {
                        var a = 1 * t.target.getAttribute("data-maximum"),
                            n = 1 * t.target.getAttribute("data-minimum"),
                            r = t.target.value || t.target.getAttribute("data-value");
                        null != r && null != r || (r = "");
                        var o = !isNaN(r),
                            i = o && r.toString().indexOf(" ") > -1,
                            s = r.toString().indexOf(".") > -1;
                        if ("" == r || o && !i && !s && r <= a && r >= n) {
                            var c = JSON.parse(JSON.stringify(this.state.quantities));
                            if (c[e].value = r, c[e].errored = !1, t.target.getAttribute("data-value")) {
                                var l = this.fakeQuantityObject();
                                l.target.value = r, this.state.quantityEvents[e] = l
                            } else this.state.quantityEvents[e] = {
                                target: t.target
                            };
                            this.setState({
                                quantities: c
                            })
                        }
                    }
                }, {
                    key: "forceItemQuantity",
                    value: function(t, e) {
                        var a = JSON.parse(JSON.stringify(this.state.quantities));
                        if (a[e].value = 1, a[e].errored = !1, t.target.getAttribute("data-value")) {
                            var n = this.fakeQuantityObject();
                            n.target.value = 1, this.state.quantityEvents[e] = n
                        } else this.state.quantityEvents[e] = {
                            target: t.target
                        };
                        this.setState({
                            quantities: a
                        })
                    }
                }, {
                    key: "updateColors",
                    value: function(t, e) {
                        var a = JSON.parse(JSON.stringify(this.state.colors));
                        a[e].value = t.target.value || t.target.getAttribute("data-attrval") || "", a[e].errored = !1, this.state.colorEvents[e] = {
                            target: t.target
                        };
                        for (var n = 0; n < this.state.swatchGroups[e].length; n++)
                            for (var r = this.state.swatchGroups[e][n], o = 0; o < r.swatches.length; o++) {
                                var i = r.swatches[o];
                                i.selected = i.selectedValue == a[e].value
                            }
                        this.setState({
                            colors: a
                        })
                    }
                }, {
                    key: "pickSelectedImage",
                    value: function(t, e) {
                        var a, n = !1;
                        if (this.state.swatchGroups[e])
                            for (var r = 0; r < this.state.swatchGroups[e].length; r++)
                                for (var o = this.state.swatchGroups[e][r], i = 0; i < o.swatches.length; i++) {
                                    var s = o.swatches[i];
                                    s.selected && (n = !0, a = s)
                                }
                        return !!n && a.fullImage
                    }
                }, {
                    key: "thisAttributeSelected",
                    value: function(t) {
                        var e = this.props.contentData.attributes[0].values,
                            a = this.props.passedFunctions.parentState.attributeState.attributes[0].selectedValueInformation,
                            n = !1;
                        return a.name ? t.itemName == a.name && (n = !0) : e[0].name == t.itemName && (n = !0), n
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e, a, n, p = this,
                            d = this.props.contentData.itemAttrDisplayInfo;
                        return "mobile" != this.props.siteFormat ? (t = "col-sm-2", e = "col-sm-3", a = "col-sm-4", n = "col-sm-3") : (t = "col-6", e = "col-6", a = "col-12", n = "col-12"), r.a.createElement("div", {
                            className: "row"
                        }, d.attrGroups.map((function(m, f) {
                            return r.a.createElement("div", {
                                className: "col-12 productItem__wrapper",
                                key: f
                            }, r.a.createElement(o.a, {
                                contentData: p.props.contentData,
                                passedFunctions: p.props.passedFunctions
                            }, r.a.createElement("div", {
                                className: "".concat(t, " productItem__img")
                            }, r.a.createElement("img", {
                                src: "//dimg.dillards.com/is/image/DillardsZoom/productItem/".concat(p.props.contentData.productNameForURL, "/").concat(p.pickSelectedImage(m, f) || m.itemImage, ".jpg"),
                                alt: p.props.contentData.brandNameForTitle + " " + p.props.contentData.productName + "-" + m.itemName.split("#double;").join('"')
                            })), r.a.createElement("div", {
                                className: "".concat(e, " productItem__description")
                            }, r.a.createElement("div", {
                                className: "productItem__title"
                            }, r.a.createElement("span", null, m.itemName.split("#double;").join('"')))), r.a.createElement("div", {
                                className: "".concat(a)
                            }, r.a.createElement("div", {
                                className: "p-b-10"
                            }, r.a.createElement("select", {
                                value: p.state.colors[f].value,
                                className: "form-control".concat(1 == p.state.thisAttributeError.hasError ? " selectHasError" : ""),
                                onChange: function(t) {
                                    p.updateColors(t, f)
                                },
                                "data-attrid": p.props.contentData.attributes[1].attrId,
                                "aria-describedby": 1 == p.props.passedFunctions.parentState.checkForErrors ? "invalidComboContainer" : ""
                            }, p.state.colors[f].value ? null : r.a.createElement("option", {
                                value: "",
                                key: "default"
                            }, "Color"), m.colors.map((function(t, e) {
                                return r.a.createElement("option", {
                                    key: e,
                                    value: t.value
                                }, t.display + (t.displayPrice ? " - ".concat(p.props.passedFunctions.currencySymbol()).concat(p.props.passedFunctions.priceConvert(t.displayPrice)) : ""))
                            })))), r.a.createElement("div", null, p.state.swatchGroups[f].map((function(t, e) {
                                return r.a.createElement("div", {
                                    key: e
                                }, r.a.createElement(s.a, {
                                    pricing: t.pricing
                                }), r.a.createElement("ul", {
                                    className: "swatches"
                                }, t.swatches.map((function(t, e) {
                                    return r.a.createElement("li", {
                                        key: t.colorForSwatch,
                                        className: "swatches__item",
                                        "aria-selected": "".concat(t.selected ? "true" : "false"),
                                        role: "button"
                                    }, r.a.createElement("img", {
                                        className: "swatches__img available ".concat(t.selected ? " selected" : ""),
                                        src: "//dimg.dillards.com/is/image/DillardsZoom/".concat(t.swatchImg),
                                        alt: "Color Swatch - ".concat(t.colorForSwatch),
                                        onClick: function(t) {
                                            p.updateColors(t, f)
                                        },
                                        "data-attrval": t.selectedValue,
                                        "data-attrid": t.attrId,
                                        "data-attrvalname": t.colorForSwatch
                                    }))
                                }))))
                            })))), r.a.createElement("div", {
                                className: "".concat(n)
                            }, r.a.createElement(i.a, {
                                className: p.state.quantities[f].errored ? "errored" : "",
                                updateQuantity: function(t) {
                                    p.updateQuantities(t, f)
                                },
                                quantity: p.state.quantities[f].value,
                                quantityErrored: p.state.quantities[f].errored,
                                contentData: p.props.contentData,
                                passedAppFunctions: p.props.passedAppFunctions,
                                isProductItem: "true",
                                forceItemQuantity: function(t) {
                                    p.forceItemQuantity(t, f)
                                }
                            }), r.a.createElement("div", {
                                className: "addToBagContainer"
                            }, r.a.createElement(u.a, {
                                passedFunctions: p.props.passedFunctions,
                                passedAppFunctions: p.props.passedAppFunctions,
                                itemKey: f,
                                indexClicked: p.state.indexClicked
                            }), r.a.createElement("button", {
                                role: "button",
                                type: "button",
                                id: "add-to-bag",
                                className: "btn btn-primary btn-block",
                                "data-attrval": m.attrValue,
                                "data-attrid": d.itemAttrName,
                                "data-index": f,
                                onClick: p.updateAttributeAndAddToBag
                            }, "Add To Bag")), p.thisAttributeSelected(m) ? r.a.createElement(c.a, {
                                passedFunctions: p.props.passedFunctions,
                                passedAppFunctions: p.props.passedAppFunctions
                            }) : "", "undefined" == typeof window || "US" == window.DILLARDS.country ? r.a.createElement("button", {
                                className: "btn btn-tertiary btn-block",
                                type: "button",
                                role: "button",
                                id: "add-to-wishlist",
                                "data-attrval": m.attrValue,
                                "data-attrid": d.itemAttrName,
                                "data-index": f,
                                onClick: p.updateAttributeAndAddToWishlist
                            }, r.a.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 15.58 12.44"
                            }, r.a.createElement("title", null, "heart"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                className: "cls-1",
                                d: "M7.79,12.44a.54.54,0,0,1-.32-.11L1.66,7.46l0,0A4.78,4.78,0,0,1,0,4.14,4.15,4.15,0,0,1,4.14,0,4.13,4.13,0,0,1,7.82,2.14,4.19,4.19,0,1,1,14.3,7.33l-6.19,5A.5.5,0,0,1,7.79,12.44ZM2.32,6.71,7.8,11.29l5.84-4.71a3.15,3.15,0,0,0-2.21-5.4,3,3,0,0,0-3.08,2.4.51.51,0,0,1-.07.17A.64.64,0,0,1,7.83,4a.5.5,0,0,1-.44-.18,1.3,1.3,0,0,1-.14-.29A3,3,0,0,0,4.14,1,3.15,3.15,0,0,0,1,4.14,3.66,3.66,0,0,0,2.32,6.71Z"
                            })))), "Add To Wish List") : "", "undefined" == typeof window || "US" == window.DILLARDS.country ? r.a.createElement("button", {
                                className: "btn btn-tertiary btn-block",
                                role: "button",
                                type: "button",
                                id: "add-to-registry",
                                "data-attrval": m.attrValue,
                                "data-attrid": d.itemAttrName,
                                "data-index": f,
                                onClick: p.updateAttributeAndAddToRegistry
                            }, r.a.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 50.42 49.84"
                            }, r.a.createElement("title", null, "gift"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                d: "M48,9.79H39.64a5.33,5.33,0,0,0-1-9.43,5.3,5.3,0,0,0-4.09.1c-2.16,1-8,7.3-9.37,8.82C23.8,7.76,18,1.42,15.81.46a5.33,5.33,0,0,0-5.1,9.33H2.45A2.45,2.45,0,0,0,0,12.24v4.39a2.45,2.45,0,0,0,2.45,2.45H3a3.46,3.46,0,0,0-.53,1.84V46.35a3.5,3.5,0,0,0,3.49,3.49H44.41a3.5,3.5,0,0,0,3.49-3.49V20.92a3.46,3.46,0,0,0-.53-1.84H48a2.45,2.45,0,0,0,2.45-2.45V12.24A2.45,2.45,0,0,0,48,9.79ZM35.36,2.3A3.32,3.32,0,0,1,38,8.39c-1.2.53-6.12.76-10.05.81C30.68,6.32,34.16,2.83,35.36,2.3ZM10.61,4A3.33,3.33,0,0,1,15,2.3c1.2.53,4.68,4,7.36,6.89-3.93,0-8.85-.28-10.05-.81h0A3.33,3.33,0,0,1,10.61,4ZM2,16.63V12.24a.43.43,0,0,1,.43-.43H24.2v5.26H2.45A.43.43,0,0,1,2,16.63ZM4.47,46.35V20.92a1.48,1.48,0,0,1,1.48-1.48H24.2V47.82H5.94A1.48,1.48,0,0,1,4.47,46.35Zm41.42,0a1.48,1.48,0,0,1-1.48,1.48H26.22V19.44H44.41a1.48,1.48,0,0,1,1.48,1.48Zm2.52-29.71a.43.43,0,0,1-.43.43H26.22V11.81H48a.43.43,0,0,1,.43.43Z"
                            })))), "Add To Registry") : "", r.a.createElement(l.a, {
                                passedAppFunctions: p.props.passedAppFunctions,
                                contentData: p.props.contentData,
                                passedFunctions: p.props.passedFunctions,
                                passedOnClick: p.updateAttributeAndAddToFavorites,
                                passedDataIds: {
                                    "data-attrval": m.attrValue,
                                    "data-attrid": d.itemAttrName,
                                    "data-index": f
                                }
                            }))))
                        })))
                    }
                }]) && d(e.prototype, a), n && d(e, n), h
            }(r.a.Component);
            e.a = g
        },
        371: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(283),
                i = a(290),
                s = a(37),
                c = a(284),
                l = a(288);

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = y(t);
                    if (e) {
                        var r = y(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? h(t) : e
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && d(t, e)
                }(f, t);
                var e, a, n, u = m(f);

                function f(t) {
                    var e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (e = u.call(this, t)).state = {
                        siteFormat: e.props.passedAppFunctions ? e.props.passedAppFunctions.siteFormat : ""
                    }, e.state.quantities = [], e.state.quantityEvents = [];
                    for (var a = 0; a < e.props.contentData.attributes[0].values.length; a++) e.state.quantities.push({
                        value: 1,
                        errored: !1
                    }), e.state.quantityEvents.push(void 0);
                    return e.updateAttributeAndAddToBag = e.updateAttributeAndAddToBag.bind(h(e)), e.updateAttributeAndAddToWishlist = e.updateAttributeAndAddToWishlist.bind(h(e)), e.updateAttributeAndAddToRegistry = e.updateAttributeAndAddToRegistry.bind(h(e)), e.updateAttributeAndAddToFavorites = e.updateAttributeAndAddToFavorites.bind(h(e)), e.updateQuantities = e.updateQuantities.bind(h(e)), e.forceItemQuantity = e.forceItemQuantity.bind(h(e)), e
                }
                return e = f, (a = [{
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        if (t.contentData.productId && (this.props.contentData.productId != t.contentData.productId || this.props.contentData.salePage != t.contentData.salePage)) {
                            this.state.quantities = [], this.state.quantityEvents = [];
                            for (var e = 0; e < t.contentData.attributes[0].values.length; e++) this.state.quantities.push({
                                value: 1,
                                errored: !1
                            }), this.state.quantityEvents.push(void 0)
                        }
                    }
                }, {
                    key: "validateParameters",
                    value: function(t, e) {
                        var a = !0,
                            n = this.state.quantityEvents[t];
                        return n && "" == n.target.value && (e || (this.state.quantities[t].errored = !0), a = !1), a || e || (this.setState({}), this.props.passedFunctions.formNotValid()), a
                    }
                }, {
                    key: "updateAttributeAndAddToBag",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked();
                        var e = t.target.getAttribute("data-index");
                        this.validateParameters(e) && (this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToBag(t))
                    }
                }, {
                    key: "updateAttributeAndAddToWishlist",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked();
                        var e = t.target.getAttribute("data-index");
                        this.validateParameters(e) && (this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToWishlist(t))
                    }
                }, {
                    key: "updateAttributeAndAddToRegistry",
                    value: function(t) {
                        this.props.passedFunctions.addToBagClicked();
                        var e = t.target.getAttribute("data-index");
                        this.validateParameters(e) && (this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToRegistry(t))
                    }
                }, {
                    key: "updateAttributeAndAddToFavorites",
                    value: function(t) {
                        this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToBrandFavorites(t)
                    }
                }, {
                    key: "updateQuantities",
                    value: function(t, e) {
                        var a = 1 * t.target.getAttribute("data-maximum"),
                            n = 1 * t.target.getAttribute("data-minimum"),
                            r = t.target.value || t.target.getAttribute("data-value");
                        null != r && null != r || (r = "");
                        var o = !isNaN(r),
                            i = o && r.toString().indexOf(" ") > -1,
                            s = r.toString().indexOf(".") > -1;
                        if ("" == r || o && !i && !s && r <= a && r >= n) {
                            var c = JSON.parse(JSON.stringify(this.state.quantities));
                            if (c[e].value = r, c[e].errored = !1, t.target.getAttribute("data-value")) {
                                var l = this.fakeQuantityObject();
                                l.target.value = r, this.state.quantityEvents[e] = l
                            } else this.state.quantityEvents[e] = {
                                target: t.target
                            };
                            this.setState({
                                quantities: c
                            })
                        }
                    }
                }, {
                    key: "forceItemQuantity",
                    value: function(t, e) {
                        var a = JSON.parse(JSON.stringify(this.state.quantities));
                        if (a[e].value = 1, a[e].errored = !1, t.target.getAttribute("data-value")) {
                            var n = this.fakeQuantityObject();
                            n.target.value = 1, this.state.quantityEvents[e] = n
                        } else this.state.quantityEvents[e] = {
                            target: t.target
                        };
                        this.setState({
                            quantities: a
                        })
                    }
                }, {
                    key: "fakeQuantityObject",
                    value: function() {
                        return {
                            target: {
                                value: "1",
                                getAttribute: function(t) {
                                    return "data-minimum" == t ? 1 : "data-maximum" == t ? 99 : void 0
                                }
                            }
                        }
                    }
                }, {
                    key: "thisAttributeSelected",
                    value: function(t) {
                        var e = this.props.contentData.attributes[0].values,
                            a = this.props.passedFunctions.parentState.attributeState.attributes[0].selectedValueInformation,
                            n = !1;
                        return a.name ? t.name == a.name && (n = !0) : e[0].name == t.name && (n = !0), n
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.contentData.attributes[0],
                            a = "col-sm-3",
                            n = "col-sm-3",
                            u = "col-sm-3",
                            p = "col-sm-3";
                        return "mobile" == this.state.siteFormat && (a = "col-6", n = "col-6", u = "col-12", p = "col-12"), r.a.createElement("div", null, e.values.map((function(d, m) {
                            return r.a.createElement("div", {
                                className: "col-sm-12 productItem__wrapper",
                                key: m
                            }, r.a.createElement(o.a, {
                                contentData: t.props.contentData,
                                passedFunctions: t.props.passedFunctions
                            }, r.a.createElement("div", {
                                className: "".concat(a, " productItem__img")
                            }, r.a.createElement("img", {
                                src: "//dimg.dillards.com/is/image/DillardsZoom/productItem/".concat(t.props.contentData.productNameForURL, "/").concat(d.image, ".jpg"),
                                alt: t.props.contentData.brandNameForTitle + " " + t.props.contentData.productName + "-" + d.name.split("#double;").join('"')
                            })), r.a.createElement("div", {
                                className: "".concat(n, " productItem__description")
                            }, r.a.createElement("div", {
                                className: "productItem__title"
                            }, r.a.createElement("span", null, d.name.split("#double;").join('"'))), r.a.createElement("div", null, r.a.createElement(s.a, {
                                price: d.itemPrice
                            }))), r.a.createElement("div", {
                                className: "".concat(u)
                            }, r.a.createElement(i.a, {
                                className: t.state.quantities[m].errored ? "errored" : "",
                                updateQuantity: function(e) {
                                    t.updateQuantities(e, m)
                                },
                                quantity: t.state.quantities[m].value,
                                quantityErrored: t.state.quantities[m].errored,
                                contentData: t.props.contentData,
                                passedAppFunctions: t.props.passedAppFunctions,
                                isProductItem: "true",
                                forceItemQuantity: function(e) {
                                    t.forceItemQuantity(e, m)
                                }
                            })), r.a.createElement("div", {
                                className: "".concat(p)
                            }, r.a.createElement("button", {
                                role: "button",
                                type: "button",
                                id: "add-to-bag",
                                className: "btn btn-primary btn-block",
                                "data-attrval": d.value,
                                "data-attrid": e.attrId,
                                "data-index": m,
                                onClick: t.updateAttributeAndAddToBag
                            }, "Add To Bag"), t.thisAttributeSelected(d) ? r.a.createElement(c.a, {
                                passedFunctions: t.props.passedFunctions,
                                passedAppFunctions: t.props.passedAppFunctions
                            }) : "", "undefined" == typeof window || "US" == window.DILLARDS.country ? r.a.createElement("button", {
                                className: "btn btn-tertiary btn-block",
                                role: "button",
                                type: "button",
                                id: "add-to-wishlist",
                                "data-attrval": d.value,
                                "data-attrid": e.attrId,
                                "data-index": m,
                                onClick: t.updateAttributeAndAddToWishlist
                            }, r.a.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 15.58 12.44"
                            }, r.a.createElement("title", null, "heart"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                className: "cls-1",
                                d: "M7.79,12.44a.54.54,0,0,1-.32-.11L1.66,7.46l0,0A4.78,4.78,0,0,1,0,4.14,4.15,4.15,0,0,1,4.14,0,4.13,4.13,0,0,1,7.82,2.14,4.19,4.19,0,1,1,14.3,7.33l-6.19,5A.5.5,0,0,1,7.79,12.44ZM2.32,6.71,7.8,11.29l5.84-4.71a3.15,3.15,0,0,0-2.21-5.4,3,3,0,0,0-3.08,2.4.51.51,0,0,1-.07.17A.64.64,0,0,1,7.83,4a.5.5,0,0,1-.44-.18,1.3,1.3,0,0,1-.14-.29A3,3,0,0,0,4.14,1,3.15,3.15,0,0,0,1,4.14,3.66,3.66,0,0,0,2.32,6.71Z"
                            })))), "Add To Wish List") : "", "undefined" == typeof window || "US" == window.DILLARDS.country ? r.a.createElement("button", {
                                className: "btn btn-tertiary btn-block",
                                role: "button",
                                type: "button",
                                id: "add-to-registry",
                                "data-attrval": d.value,
                                "data-attrid": e.attrId,
                                "data-index": m,
                                onClick: t.updateAttributeAndAddToRegistry
                            }, r.a.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 50.42 49.84"
                            }, r.a.createElement("title", null, "gift"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                d: "M48,9.79H39.64a5.33,5.33,0,0,0-1-9.43,5.3,5.3,0,0,0-4.09.1c-2.16,1-8,7.3-9.37,8.82C23.8,7.76,18,1.42,15.81.46a5.33,5.33,0,0,0-5.1,9.33H2.45A2.45,2.45,0,0,0,0,12.24v4.39a2.45,2.45,0,0,0,2.45,2.45H3a3.46,3.46,0,0,0-.53,1.84V46.35a3.5,3.5,0,0,0,3.49,3.49H44.41a3.5,3.5,0,0,0,3.49-3.49V20.92a3.46,3.46,0,0,0-.53-1.84H48a2.45,2.45,0,0,0,2.45-2.45V12.24A2.45,2.45,0,0,0,48,9.79ZM35.36,2.3A3.32,3.32,0,0,1,38,8.39c-1.2.53-6.12.76-10.05.81C30.68,6.32,34.16,2.83,35.36,2.3ZM10.61,4A3.33,3.33,0,0,1,15,2.3c1.2.53,4.68,4,7.36,6.89-3.93,0-8.85-.28-10.05-.81h0A3.33,3.33,0,0,1,10.61,4ZM2,16.63V12.24a.43.43,0,0,1,.43-.43H24.2v5.26H2.45A.43.43,0,0,1,2,16.63ZM4.47,46.35V20.92a1.48,1.48,0,0,1,1.48-1.48H24.2V47.82H5.94A1.48,1.48,0,0,1,4.47,46.35Zm41.42,0a1.48,1.48,0,0,1-1.48,1.48H26.22V19.44H44.41a1.48,1.48,0,0,1,1.48,1.48Zm2.52-29.71a.43.43,0,0,1-.43.43H26.22V11.81H48a.43.43,0,0,1,.43.43Z"
                            })))), "Add To Registry") : "", r.a.createElement(l.a, {
                                passedAppFunctions: t.props.passedAppFunctions,
                                contentData: t.props.contentData,
                                passedFunctions: t.props.passedFunctions,
                                passedOnClick: t.updateAttributeAndAddToFavorites,
                                passedDataIds: {
                                    "data-attrval": d.value,
                                    "data-attrid": e.attrId,
                                    "data-index": m
                                }
                            }))))
                        })))
                    }
                }]) && p(e.prototype, a), n && p(e, n), f
            }(r.a.Component);
            e.a = b
        },
        372: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return m
            }));
            var n = a(0),
                r = a.n(n),
                o = a(37);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = d(t);
                    if (e) {
                        var r = d(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && l(t, e)
                }(p, t);
                var e, a, n, i = u(p);

                function p() {
                    return s(this, p), i.apply(this, arguments)
                }
                return e = p, (a = [{
                    key: "render",
                    value: function() {
                        var t = this,
                            e = JSON.parse(JSON.stringify(this.props.swatchGroups));
                        return r.a.createElement("div", {
                            className: "swatch-groups"
                        }, e && e.length > 0 ? e.map((function(a, n) {
                            return r.a.createElement("div", {
                                key: n,
                                className: "productDisplay__div--swatch-group"
                            }, e.length > 1 || t.props.contentData.onSpecial ? r.a.createElement(o.a, {
                                pricing: a.pricing
                            }) : "", r.a.createElement("ul", {
                                className: "swatches"
                            }, a.swatches.map((function(e) {
                                return r.a.createElement("li", {
                                    key: e.swatchImg,
                                    className: "swatches__item"
                                }, r.a.createElement("img", {
                                    className: "swatches__img".concat(" ", e.available ? "swatches__img--available" : "swatches__img--notAvailable").concat(e.selected ? " swatches__img--selected" : ""),
                                    key: e.swatchImg,
                                    src: "//dimg.dillards.com/is/image/DillardsZoom/".concat(e.swatchImg),
                                    alt: "Color Swatch - ".concat(e.colorForSwatch),
                                    onClick: t.props.passedFunctions.updateAttribute,
                                    "data-attrval": e.selectedValue,
                                    "data-attrid": e.attrId
                                }))
                            }))))
                        })) : "")
                    }
                }]) && c(e.prototype, a), n && c(e, n), p
            }(r.a.Component);
            e.b = m
        },
        373: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return g
            }));
            var n = a(0),
                r = a.n(n),
                o = a(283),
                i = a(336),
                s = a(37),
                c = a(315),
                l = a(284),
                u = a(288);

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = b(t);
                    if (e) {
                        var r = b(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return h(this, a)
                }
            }

            function h(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? y(t) : e
            }

            function y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function b(t) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var g = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(h, t);
                var e, a, n, p = f(h);

                function h(t) {
                    var e;
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (e = p.call(this, t)).state = {}, e.state.quantities = [], e.state.quantityEvents = [], e.props.contentData.attributes.length > 0)
                        for (var a = 0; a < e.props.contentData.attributes[0].values.length; a++) e.state.quantities.push({
                            value: 1,
                            errored: !1
                        }), e.state.quantityEvents.push(void 0);
                    return e.updateAttributeAndAddToBag = e.updateAttributeAndAddToBag.bind(y(e)), e.updateAttributeAndAddToWishlist = e.updateAttributeAndAddToWishlist.bind(y(e)), e.updateAttributeAndAddToRegistry = e.updateAttributeAndAddToRegistry.bind(y(e)), e.updateAttributeAndAddToFavorites = e.updateAttributeAndAddToFavorites.bind(y(e)), e.updateQuantities = e.updateQuantities.bind(y(e)), e
                }
                return e = h, (a = [{
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        if (t.contentData.productId && this.props.contentData.productId != t.contentData.productId) {
                            this.state.quantities = [], this.state.quantityEvents = [];
                            for (var e = 0; e < t.contentData.attributes[0].values.length; e++) this.state.quantities.push({
                                value: 1,
                                errored: !1
                            }), this.state.quantityEvents.push(void 0)
                        }
                    }
                }, {
                    key: "updateAttributeAndAddToBag",
                    value: function(t) {
                        var e = t.target.getAttribute("data-index");
                        this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToBag(t)
                    }
                }, {
                    key: "updateAttributeAndAddToWishlist",
                    value: function(t) {
                        this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToWishlist(t)
                    }
                }, {
                    key: "updateAttributeAndAddToRegistry",
                    value: function(t) {
                        var e = t.target.getAttribute("data-index");
                        this.state.quantityEvents[e] ? this.props.passedFunctions.updateQuantity(this.state.quantityEvents[e]) : this.props.passedFunctions.updateQuantity(this.fakeQuantityObject()), this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToRegistry(t)
                    }
                }, {
                    key: "updateAttributeAndAddToFavorites",
                    value: function(t) {
                        this.props.passedFunctions.updateAttribute(t), this.props.passedFunctions.ajaxAddToBrandFavorites(t)
                    }
                }, {
                    key: "updateQuantities",
                    value: function(t, e) {
                        var a = 1 * t.target.getAttribute("data-maximum"),
                            n = 1 * t.target.getAttribute("data-minimum");
                        if ("" == t.target.value || !isNaN(t.target.value) && t.target.value <= a && t.target.value >= n) {
                            var r = JSON.parse(JSON.stringify(this.state.quantities));
                            r[e].value = t.target.value, this.state.quantityEvents[e] = {
                                target: t.target
                            }, this.setState({
                                quantities: r
                            })
                        }
                    }
                }, {
                    key: "fakeQuantityObject",
                    value: function() {
                        return {
                            target: {
                                value: "1",
                                getAttribute: function(t) {
                                    return "data-minimum" == t ? 1 : "data-maximum" == t ? 99 : void 0
                                }
                            }
                        }
                    }
                }, {
                    key: "thisAttributeSelected",
                    value: function(t) {
                        var e = this.props.contentData.attributes[0].values,
                            a = this.props.passedFunctions.parentState.attributeState.attributes[0].selectedValueInformation,
                            n = !1;
                        return a.name ? t.name == a.name && (n = !0) : e[0].name == t.name && (n = !0), n
                    }
                }, {
                    key: "liveChatOnClickBeauty",
                    value: function() {
                        insideAPI.post("api/visitor/set_department", {
                            department: "Video"
                        }), window.openChatButtonClick()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.contentData.attributes[0];
                        return r.a.createElement(r.a.Fragment, null, e ? e.values.map((function(a, n) {
                            return r.a.createElement("div", {
                                className: "col-12 chanelItem__wrapper",
                                key: n
                            }, r.a.createElement(o.a, {
                                contentData: t.props.contentData,
                                passedFunctions: t.props.passedFunctions
                            }, r.a.createElement("div", {
                                className: "col-2 col-sm-2 p-l-0 chanelItemImg"
                            }, r.a.createElement("img", {
                                alt: t.props.contentData.chanelNameFirst + " " + t.props.contentData.chanelNameSecond + " " + a.name.toLowerCase(),
                                src: "//dimg.dillards.com/is/image/DillardsZoom/productItem/".concat(t.props.contentData.productNameForURL, "/").concat(a.image, ".jpg")
                            })), r.a.createElement("div", {
                                className: "col-4 col-sm-3 chanelItemDesc"
                            }, r.a.createElement("div", {
                                className: "chanelItem__name"
                            }, r.a.createElement(c.a, {
                                contentData: t.props.contentData,
                                h2: "true"
                            }), r.a.createElement("span", null, a.name.toLowerCase()))), r.a.createElement("div", {
                                className: "col-2 col-sm-2 chanelItemQty"
                            }, r.a.createElement(i.a, {
                                className: t.state.quantities[n].errored ? "errored" : "",
                                updateQuantity: function(e) {
                                    t.updateQuantities(e, n)
                                },
                                quantity: t.state.quantities[n].value
                            })), r.a.createElement("div", {
                                className: "col-2 col-sm-2 chanelItemPrice"
                            }, r.a.createElement(s.a, {
                                price: a.itemPrice
                            })), r.a.createElement("div", {
                                className: "col-12 col-sm-3 p-r-0 chanelItemShopperActions"
                            }, r.a.createElement("button", {
                                role: "button",
                                type: "button",
                                id: "add-to-bag",
                                className: "btn btn-primary btn-block",
                                "data-attrval": a.value,
                                "data-attrid": e.attrId,
                                "data-index": n,
                                onClick: t.updateAttributeAndAddToBag
                            }, "Add To Bag"), "Beauty" == t.props.contentData.superCat ? r.a.createElement("button", {
                                className: "btn btn-secondary btn-block beauty-chat",
                                role: "button",
                                type: "button",
                                onKeyPress: t.liveChatOnClickBeauty,
                                onClick: t.liveChatOnClickBeauty,
                                manual_cm_sp: "video+chat-_-beauty-_-product"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Opens a simulated dialog"), "Chat with a Beauty Expert") : "", t.thisAttributeSelected(a) ? r.a.createElement(l.a, {
                                passedFunctions: t.props.passedFunctions,
                                passedAppFunctions: t.props.passedAppFunctions
                            }) : "", "undefined" == typeof window || "US" == window.DILLARDS.country ? r.a.createElement("button", {
                                role: "button",
                                type: "button",
                                id: "add-to-wishlist",
                                className: "btn btn-block btn-tertiary",
                                "data-attrval": a.value,
                                "data-attrid": e.attrId,
                                "data-index": n,
                                onClick: t.updateAttributeAndAddToWishlist
                            }, r.a.createElement("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 15.58 12.44"
                            }, r.a.createElement("title", null, "heart"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                className: "cls-1",
                                d: "M7.79,12.44a.54.54,0,0,1-.32-.11L1.66,7.46l0,0A4.78,4.78,0,0,1,0,4.14,4.15,4.15,0,0,1,4.14,0,4.13,4.13,0,0,1,7.82,2.14,4.19,4.19,0,1,1,14.3,7.33l-6.19,5A.5.5,0,0,1,7.79,12.44ZM2.32,6.71,7.8,11.29l5.84-4.71a3.15,3.15,0,0,0-2.21-5.4,3,3,0,0,0-3.08,2.4.51.51,0,0,1-.07.17A.64.64,0,0,1,7.83,4a.5.5,0,0,1-.44-.18,1.3,1.3,0,0,1-.14-.29A3,3,0,0,0,4.14,1,3.15,3.15,0,0,0,1,4.14,3.66,3.66,0,0,0,2.32,6.71Z"
                            })))), "Add To Wish List") : "", r.a.createElement(u.a, {
                                passedAppFunctions: t.props.passedAppFunctions,
                                contentData: t.props.contentData,
                                passedFunctions: t.props.passedFunctions,
                                passedOnClick: t.updateAttributeAndAddToFavorites,
                                passedDataIds: {
                                    "data-attrval": a.value,
                                    "data-attrid": e.attrId,
                                    "data-index": n
                                }
                            }))))
                        })) : "")
                    }
                }]) && d(e.prototype, a), n && d(e, n), h
            }(r.a.Component)
        },
        374: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(14);

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = p(t);
                    if (e) {
                        var r = p(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(p, t);
                var e, a, n, u = l(p);

                function p(t) {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), u.call(this, t)
                }
                return e = p, (a = [{
                    key: "shouldComponentUpdate",
                    value: function(t) {
                        return !_.isEqual(this.props, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = {};
                        if (this.props.contentData && "object" == i(this.props.contentData) && this.props.contentData.productLayout && "BundleDisplay" != this.props.contentData.productLayout && "OutfitDisplay" != this.props.contentData.productLayout && "QuickViewError" != this.props.contentData.productLayout && "QuickViewNotAvailable" != this.props.contentData.productLayout && "OldProduct" != this.props.contentData.productLayout && "NotAvailable" != this.props.contentData.productLayout) {
                            t["@context"] = "http://schema.org/", t["@type"] = "Product", t.description = this.props.contentData.longDescription ? this.props.contentData.longDescription.split("#double;").join('"') : "", t.productID = this.props.contentData.partNumber, t.sku = this.props.contentData.style, t.brand = {}, t.brand["@type"] = "Thing", t.brand.name = this.props.contentData.brandNameForTitle, t.image = "https:" + (this.props.contentData.fullImage ? this.props.contentData.fullImage.imageName : ""), t.name = this.props.contentData.originalProductName, this.props.contentData.reviewCount && this.props.contentData.reviewCount > 0 && this.props.contentData.reviewStars && (t.aggregateRating = {}, t.aggregateRating["@type"] = "AggregateRating", t.aggregateRating.reviewCount = this.props.contentData.reviewCount, t.aggregateRating.ratingValue = this.props.contentData.reviewStars), t.offers = {}, t.offers["@type"] = "AggregateOffer", t.offers.priceCurrency = "USD", this.props.contentData.limitedAvailability ? t.offers.availability = "http://schema.org/LimitedAvailability" : this.props.contentData.pricing ? t.offers.availability = "http://schema.org/InStock" : t.offers.availability = "http://schema.org/OutOfStock", this.props.contentData.pricing && (t.offers.lowPrice = this.props.contentData.pricing.offerPriceMin, t.offers.highPrice = this.props.contentData.pricing.offerPriceMax), t.offers.offerCount = (this.props.contentData.itemInfo || []).length, t.offers.offers = [];
                            for (var e = 0; e < (this.props.contentData.itemInfo || []).length; e++) {
                                var a = this.props.contentData.itemInfo[e],
                                    n = {
                                        "@type": "Offer"
                                    };
                                n.availability = this.props.contentData.limitedAvailability ? "http://schema.org/LimitedAvailability" : "http://schema.org/InStock", n.itemCondition = "http://schema.org/NewCondition", n.itemOffered = {}, n.itemOffered["@type"] = "Product";
                                for (var s = 0; s < (a.attributes || []).length; s++) "Color" == a.attributes[s].attrName && (n.itemOffered.color = a.attributes[s].attrValue);
                                n.itemOffered.mpn = a.upc, n.itemOffered.name = this.props.contentData.originalProductName, n.itemOffered.sku = a.sku, n.itemOffered.image = "https:" + (a.image ? a.image : this.props.contentData.fullImage ? this.props.contentData.fullImage.imageName : ""), n.itemOffered.description = this.props.contentData.longDescription ? this.props.contentData.longDescription.split("#double;").join('"') : "", n.itemOffered.brand = {}, n.itemOffered.brand["@type"] = "Thing", n.itemOffered.brand.name = this.props.contentData.brandNameForTitle, this.props.contentData.reviewCount && this.props.contentData.reviewCount > 0 && this.props.contentData.reviewStars && (n.itemOffered.aggregateRating = {}, n.itemOffered.aggregateRating["@type"] = "AggregateRating", n.itemOffered.aggregateRating.reviewCount = this.props.contentData.reviewCount, n.itemOffered.aggregateRating.ratingValue = this.props.contentData.reviewStars), n.itemOffered.offers = {}, n.itemOffered.offers["@type"] = "Offer", n.itemOffered.offers.availability = this.props.contentData.limitedAvailability ? "http://schema.org/LimitedAvailability" : "http://schema.org/InStock", n.itemOffered.offers.itemCondition = "http://schema.org/NewCondition", n.itemOffered.offers.price = a.offerPrice, n.itemOffered.offers.priceCurrency = "USD", n.price = a.offerPrice, n.priceCurrency = "USD", n.itemOffered.offers.url = "https://www.dillards.com/p/" + this.props.contentData.originalProductName.toLowerCase().split(" ").join("-") + "/" + this.props.contentData.productId, t.offers.offers.push(n)
                            }
                        }
                        var c = {
                            meta: []
                        };
                        return this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.ogTitle && c.meta.push({
                            property: "og:title",
                            content: this.props.contentData.seo.ogTitle.split("#double;").join('"')
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.ogDescription && c.meta.push({
                            property: "og:description",
                            content: this.props.contentData.seo.ogDescription.split("#double;").join('"').replace(/Dillards.com/g, "Dillard's")
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.ogImage && c.meta.push({
                            property: "og:image",
                            content: this.props.contentData.seo.ogImage
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.description && c.meta.push({
                            name: "description",
                            content: this.props.contentData.seo.description.split("#double;").join('"')
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.title && (c.title = this.props.contentData.seo.title.split("#double;").join('"')), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.keywords && c.meta.push({
                            name: "keywords",
                            content: this.props.contentData.seo.keywords.split("#double;").join('"')
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.noindex && c.meta.push({
                            name: "robots",
                            content: "noindex"
                        }), this.props.contentData && this.props.contentData.seo && this.props.contentData.seo.canonical && (c.link = [{
                            rel: "canonical",
                            href: this.props.contentData.seo.canonical
                        }]), r.a.createElement(r.a.Fragment, null, r.a.createElement(o.Helmet, c), r.a.createElement("script", {
                            suppressHydrationWarning: !0,
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(t)
                            }
                        }))
                    }
                }]) && s(e.prototype, a), n && s(e, n), p
            }(r.a.Component);
            e.a = d
        },
        375: function(t, e, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(5),
                i = a.n(o),
                s = a(16);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(a), !0).forEach((function(e) {
                        b(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function p(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function d(t, e) {
                return (d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = y(t);
                    if (e) {
                        var r = y(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? h(t) : e
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function y(t) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function b(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            var g = ["410", "430", "425", "480", "445"],
                v = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && d(t, e)
                    }(o, t);
                    var e, a, n, r = m(o);

                    function o(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), b(h(e = r.call(this, t)), "resetFreqRecieveProps", (function() {
                            e.updateSubscriptionFrequency("");
                            var t = document.querySelector("input[name=subFrequencyRadio][value='once']");
                            null != t && (t.checked = !0);
                            var a = document.querySelector("#subscription-section select#subFrequencySelect__".concat(e.props.contentData.partNumber));
                            if (null !== a)
                                if ("subscribe" == a.value) {
                                    for (var n = a.options, r = 0; r < n.length; r++) {
                                        var o = n[r];
                                        "" == o.value && a.removeChild(o)
                                    }
                                    a.disabled = !1
                                } else a.appendChild(new Option("Select Frequency", "")), a.value = "", a.disabled = !0
                        })), b(h(e), "resetFreqOnMount", (function() {
                            e.updateSubscriptionFrequency("");
                            var t = document.querySelector("input[name=subFrequencyRadio][value='once']");
                            null != t && (t.checked = !0);
                            var a = document.querySelector('#subscription-section select[name="subFrequencySelect"]');
                            null !== a && "" !== a.value && (a.appendChild(new Option("Select Frequency", "")), a.value = "", a.disabled = !0)
                        })), b(h(e), "updateSubscriptionFrequency", (function(t) {
                            e.setState({
                                subscriptionFrequency: t
                            })
                        })), b(h(e), "setCurrentOSSAccessories", (function(t) {
                            e.state.currentOSSAccessories = t
                        })), b(h(e), "setCurrentCollection", (function(t) {
                            e.state.currentCollection = t
                        })), e.state = {
                            imageClickedOn: !1,
                            addToBagClicked: !1,
                            showReviews: !1,
                            checkForErrors: !1,
                            subscriptionFrequency: "",
                            isSyndigoLoaded: !1,
                            videoChatAvailable: !1,
                            productId: "",
                            correctPassedAttributes: "",
                            correctContentData: "",
                            possibleIncorrectProductId: !1
                        }, t.contentData.productId && e.initializeStateObjects(e.props.contentData, !0), e.updateQuantity = e.updateQuantity.bind(h(e)), e.forceQuantity = e.forceQuantity.bind(h(e)), e.updateAttribute = e.updateAttribute.bind(h(e)), e.ajaxAddToBag = e.ajaxAddToBag.bind(h(e)), e.ajaxAddToWishlist = e.ajaxAddToWishlist.bind(h(e)), e.ajaxAddToBrandFavorites = e.ajaxAddToBrandFavorites.bind(h(e)), e.validateForm = e.validateForm.bind(h(e)), e.updateSwatchGroups = e.updateSwatchGroups.bind(h(e)), e.updateAttributeFromAltClick = e.updateAttributeFromAltClick.bind(h(e)), e.updateAttributeFromAltSwipe = e.updateAttributeFromAltSwipe.bind(h(e)), e.flatSizesPriceObject = e.flatSizesPriceObject.bind(h(e)), e.closeWishListMessage = e.closeWishListMessage.bind(h(e)), e.mainImageClicked = e.mainImageClicked.bind(h(e)), e.zoomedImageClose = e.zoomedImageClose.bind(h(e)), e.ajaxShareProductModal = e.ajaxShareProductModal.bind(h(e)), e.ajaxAddToRegistry = e.ajaxAddToRegistry.bind(h(e)), e.willHaveFlatAttribute = e.willHaveFlatAttribute.bind(h(e)), e.shouldShowFreeShipping = e.shouldShowFreeShipping.bind(h(e)), e.updateAttributeState = e.updateAttributeState.bind(h(e)), e.thisBrandInMyFavorites = e.thisBrandInMyFavorites.bind(h(e)), e.forceBundleRender = e.forceBundleRender.bind(h(e)), e.addToBagClicked = e.addToBagClicked.bind(h(e)), e.formNotValid = e.formNotValid.bind(h(e)), e.checkForErrorsRegistry = e.checkForErrorsRegistry.bind(h(e)), e.checkForErrors = e.checkForErrors.bind(h(e)), e.checkForErrorsWishlist = e.checkForErrorsWishlist.bind(h(e)), e.hideCheckForErrors = e.hideCheckForErrors.bind(h(e)), e.checkForErrorsItemAttr = e.checkForErrorsItemAttr.bind(h(e)), e.checkForErrorsQV = e.checkForErrorsQV.bind(h(e)), e.returnItemColorOrTrueIfMonogramEligible = e.returnItemColorOrTrueIfMonogramEligible.bind(h(e)), e.ajaxMonogramPersonalization = e.ajaxMonogramPersonalization.bind(h(e)), e.thisItemMonogramEligible = e.thisItemMonogramEligible.bind(h(e)), e.ajaxMonogramPersonalization = e.ajaxMonogramPersonalization.bind(h(e)), e.checkForErrorsMonogram = e.checkForErrorsMonogram.bind(h(e)), e.searchABTracking = e.searchABTracking.bind(h(e)), e.updateLiveReviewCounts = e.updateLiveReviewCounts.bind(h(e)), e.focusFirstAttrError = e.focusFirstAttrError.bind(h(e)), e.updateSubscriptionFrequency = e.updateSubscriptionFrequency.bind(h(e)), e.loadSyndigo = e.loadSyndigo.bind(h(e)), e.checkVideoChat = e.checkVideoChat.bind(h(e)), e.updateDataLayer(e.props), e
                    }
                    return e = o, (a = [{
                        key: "componentWillReceiveProps",
                        value: function(t) {
                            if (!t.contentData.productId || this.props.contentData.productId == t.contentData.productId && this.props.contentData.salePage == t.contentData.salePage) "undefined" != typeof window && window.injectedAttributeStateFunction && this.state.attributeState && this.props.contentData["onSaleInfo_".concat(this.props.contentData.productId)] && this.props.contentData["onSaleInfo_".concat(this.props.contentData.productId)].onSaleItemMap && this.props.contentData.pricing && (this.state.attributeState = window.injectedAttributeStateFunction(JSON.parse(JSON.stringify(this.state.attributeState)), this.props.contentData["onSaleInfo_".concat(this.props.contentData.productId)].onSaleItemMap, this.props.contentData.pricing));
                            else {
                                this.state.checkForErrors = !1, this.state.selectedMainImg = "", this.state.wlResponse = !1, this.resetFreqRecieveProps();
                                var e = this.props.passedAppFunctions.getURLParamValue("di");
                                t.passedAppFunctions.linkToState.di && (e = t.passedAppFunctions.linkToState.di), "OutfitDisplay" != t.contentData.productLayout && "BundleDisplay" != t.contentData.productLayout && "OutfitComponent" != t.contentData.productLayout && e && "" != e && (this.state.selectedMainImg = e), this.state.liveReviewCount = !1, this.state.liveReviewStars = !1, this.state.itemPriceInfo = void 0, this.initializeStateObjects(t.contentData), this.updateDataLayer(t), this.automationExpose(t), this.personalizationTracking(1)
                            }!0 === this.props.passedAppFunctions.quickviewIsOpen && this.loadSyndigo(), this.checkVideoChat()
                        }
                    }, {
                        key: "updateLiveReviewCounts",
                        value: function(t, e) {
                            (t != this.state.liveReviewCount && t != this.props.contentData.reviewCount || e != this.state.liveReviewStars && e != this.props.contentData.reviewStars) && this.setState({
                                liveReviewCount: t,
                                liveReviewStars: e
                            })
                        }
                    }, {
                        key: "shouldShowFreeShipping",
                        value: function() {
                            if (!this.props.contentData.unavailableMessage) {
                                var t = this.willHaveFlatAttribute() ? this.flatSizesPriceObject() : this.props.contentData.pricing,
                                    e = !1,
                                    a = 1 * (this.props.contentData.freeShippingThreshold || 150),
                                    n = this.props.contentData.dil_calcodeIds,
                                    r = "true" == this.props.passedAppFunctions.wasParms.isSaleDay && "false" == this.props.passedAppFunctions.wasParms.isPreviewDay;
                                return this.props.contentData.pricing, this.props.contentData.dil_calcodeIds, r ? e = !1 : 1 * t.offerPriceMin.split(",").join("") >= a && 1 * t.offerPriceMax.split(",").join("") >= a && (e = !0), "true" == n && (e = !1), e
                            }
                            e = !1
                        }
                    }, {
                        key: "willHaveFlatAttribute",
                        value: function() {
                            for (var t = this.state.attributeState.attributes, e = !1, a = 0; a < t.length; a++) {
                                var n = t[a];
                                ["Size"].indexOf(n.attrName) > -1 && (e = !0)
                            }
                            return e
                        }
                    }, {
                        key: "updateDataLayer",
                        value: function(t) {
                            var e = {
                                    ProductDisplay: "PP-PIP",
                                    ProductDisplayChanel: "PP-CPIP",
                                    BundleDisplay: "PP-BUN",
                                    BundleDisplayChanel: "PP-CBUN",
                                    OutfitDisplay: "PP-BUN",
                                    OutfitComponent: "",
                                    ProductItemAttrDisplay: "PP-PIA",
                                    ProductItemDisplay: "PP-PIL",
                                    ProductItemDisplayChanel: "PP-CPIL",
                                    ProductDisplayEcard: "PP-PIP",
                                    QuickViewDisplay: "PP-QV",
                                    QuickViewNotAvailable: "PP-QV-NA",
                                    NotAvailable: "PP-NA",
                                    OldProduct: "PP-PB",
                                    QuickViewOldProduct: "PP-PV-PB"
                                },
                                a = "",
                                n = [];
                            if ("BundleDisplay" == t.contentData.productLayout || "OutfitDisplay" == t.contentData.productLayout || "BundleDisplayChanel" == t.contentData.productLayout) {
                                var r = {};
                                r.name = t.contentData.originalProductName, r.partNumber = t.contentData.partNumber, r.catentryId = t.contentData.productId, r.DMS = "||", r.isQuickView = t.contentData.productLayout.indexOf("Quick") > -1 ? "Y" : "N", r.availableForPurchase = t.contentData.productLayout.indexOf("NotAvailable") > -1 || t.contentData.productLayout.indexOf("OldProduct") > -1 ? "N" : "Y", r.categoryId = t.passedAppFunctions.getURLParamValue("categoryId") || t.passedAppFunctions.linkToState.categoryId || "-10035", r.pageType = e[t.contentData.productLayout], r.bundleProducts = [];
                                for (var o = 0; o < t.contentData.components.length; o++) {
                                    var i = t.contentData.components[o],
                                        s = {};
                                    s.name = i.originalProductName, s.partNumber = i.partNumber, s.catentryId = i.productId, s.limitedAvailability = i.limitedAvailability ? "Y" : "N", s.brand = i.brandNameForTitle, r.brand || (r.brand = i.brandNameForTitle), s.DMS = "".concat(i.dept, "|").concat(i.mic, "|").concat(i.style), s.availableForPurchase = i.productLayout.indexOf("NotAvailable") > -1 || i.productLayout.indexOf("OldProduct") > -1 ? "N" : "Y", s.categoryId = t.passedAppFunctions.getURLParamValue("categoryId") || t.passedAppFunctions.linkToState.categoryId || "-10035", s.itemInfo = i.itemInfo, r.DMS = s.DMS, i.reviews && i.reviews.numOfReviews && i.reviews.numOfStars && (s.starRating = i.reviews.numOfStars, s.numberOfReviews = i.reviews.numOfReviews), r.bundleProducts.push(s), (d = {}).name = s.name, d.SKU = s.partNumber, d.priceTotal = i.pricing.offerPriceMin, (m = {}).DMS = s.DMS.split("|").join(":"), m.availableForPurchase = s.availableForPurchase, m.brand = s.brand, m.categoryId = s.categoryId, m.catentryId = s.catentryId, m.pageType = r.pageType, m.isQuickView = r.isQuickView, m.limitedAvailability = s.limitedAvailability, m.offerPriceMax = i.pricing.offerPriceMax, m.offerPriceMin = i.pricing.offerPriceMin, m.offerPriceRange = i.pricing.offerPriceRange, m.partNumber = s.partNumber, d._additionalVars = m, n.push(d)
                                }
                                t.passedAppFunctions.getURLParamValue("singleProductResult") && (r.singleProductResult = t.passedAppFunctions.getURLParamValue("singleProductResult")), t.passedAppFunctions.setDataLayerInfo("product", r), t.passedAppFunctions.setDataLayerInfo("commerce", {
                                    productViews: {
                                        value: 1
                                    }
                                }), t.passedAppFunctions.setDataLayerInfo("productListItems", n), t.passedAppFunctions.getURLParamValue("singleProductResult") ? (l = "Y", a = "SEARCH: Results Successful", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1") : (l = "N", a = "Product:" + t.contentData.partNumber + ":" + t.contentData.originalProductName)
                            } else if ("OutfitComponent" != t.contentData.productLayout) {
                                var c = {};
                                c.name = t.contentData.originalProductName, c.partNumber = t.contentData.partNumber, c.catentryId = t.contentData.productId, c.limitedAvailability = t.contentData.limitedAvailability ? "Y" : "N", c.brand = t.contentData.brandNameForTitle, c.DMS = "".concat(t.contentData.dept, "|").concat(t.contentData.mic, "|").concat(t.contentData.style), c.isQuickView = t.contentData.productLayout.indexOf("Quick") > -1 ? "Y" : "N", c.availableForPurchase = t.contentData.productLayout.indexOf("NotAvailable") > -1 || t.contentData.productLayout.indexOf("OldProduct") > -1 ? "N" : "Y", c.categoryId = t.passedAppFunctions.getURLParamValue("categoryId") || t.passedAppFunctions.linkToState.categoryId || "-10035", c.pageType = e[t.contentData.productLayout], t.contentData.productLayout.indexOf("Quick") > -1 && (t.contentData.extraQVProps && t.contentData.extraQVProps.OSS && (c.pageType = c.pageType + "-OSS"), t.contentData.extraQVProps && t.contentData.extraQVProps.collection && (c.pageType = c.pageType + "-SC")), t.contentData.reviews && t.contentData.reviews.numOfReviews && t.contentData.reviews.numOfStars && (c.starRating = t.contentData.reviews.numOfStars, c.numberOfReviews = t.contentData.reviews.numOfReviews), t.contentData.pricing && (c.offerPriceMin = t.contentData.pricing.offerPriceMin, c.offerPriceMax = t.contentData.pricing.offerPriceMax, c.offerPriceRange = t.contentData.pricing.offerPriceRange);
                                var l = "",
                                    u = "",
                                    p = "";
                                u = "", p = "", u = "", p = "", t.passedAppFunctions.getURLParamValue("singleProductResult") ? (c.singleProductResult = t.passedAppFunctions.getURLParamValue("singleProductResult"), l = "Y", a = "SEARCH: Results Successful", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1", u = t.passedAppFunctions.getURLParamValue("singleProductResult"), p = "1") : (l = "N", a = "Product:" + t.contentData.partNumber + ":" + t.contentData.originalProductName);
                                var d, m, f = this.searchABTracking();
                                f && f.length > 0 && (c.fromSearchPage = "Y", f.indexOf("UB") > -1 && (c.fromUBSearchPage = "Y")), (d = {}).name = c.name, d.SKU = c.partNumber, d.priceTotal = c.offerPriceMin, (m = {}).DMS = c.DMS.split("|").join(":"), m.availableForPurchase = c.availableForPurchase, m.brand = c.brand, m.categoryId = c.categoryId, m.catentryId = c.catentryId, m.pageType = c.pageType, m.isQuickView = c.isQuickView, m.limitedAvailability = c.limitedAvailability, m.offerPriceMax = c.offerPriceMax, m.offerPriceMin = c.offerPriceMin, m.offerPriceRange = c.offerPriceRange, m.partNumber = c.partNumber, d._additionalVars = m, n.push(d), t.passedAppFunctions.setDataLayerInfo("commerce", {
                                    productViews: {
                                        value: 1
                                    }
                                }), t.passedAppFunctions.setDataLayerInfo("productListItems", n), t.passedAppFunctions.setDataLayerInfo("product", c), t.passedAppFunctions.setDataLayerInfo("itemInfo", t.contentData.itemInfo)
                            }
                            if ("OutfitComponent" != t.contentData.productLayout) {
                                var h = "",
                                    y = "",
                                    b = "",
                                    g = "",
                                    v = "",
                                    w = "",
                                    S = "",
                                    E = "",
                                    D = "";
                                t.passedAppFunctions.linkToState.realSearch && (E = t.passedAppFunctions.linkToState.realSearch || "N", D = "Y"), t.passedAppFunctions.linkToState.searchPosition && (S = t.passedAppFunctions.linkToState.searchPosition + 1 + ""), t.passedAppFunctions.linkToState.actualBreadCrumb && t.passedAppFunctions.linkToState.actualBreadCrumb.length && t.passedAppFunctions.linkToState.actualBreadCrumb[0].breadcrumbValue && (h = t.passedAppFunctions.linkToState.actualBreadCrumb[0].breadcrumbValue.split("&#039;").join("'").split("&amp;").join("&") || " ", g = t.passedAppFunctions.linkToState.actualBreadCrumb[0].breadcrumbCatId, t.passedAppFunctions.linkToState.actualBreadCrumb.length > 1 && (y = t.passedAppFunctions.linkToState.actualBreadCrumb[1].breadcrumbValue.split("&#039;").join("'").split("&amp;").join("&") || "", v = t.passedAppFunctions.linkToState.actualBreadCrumb[1].breadcrumbCatId), t.passedAppFunctions.linkToState.actualBreadCrumb.length > 2 && (b = t.passedAppFunctions.linkToState.actualBreadCrumb[2].breadcrumbValue.split("&#039;").join("'").split("&amp;").join("&") || "", w = t.passedAppFunctions.linkToState.actualBreadCrumb[2].breadcrumbCatId)), t.passedAppFunctions.setDataLayerInfo("page", {
                                    RealSearch: l || E || "N",
                                    name: t.contentData.originalProductName,
                                    pageId: a || "",
                                    categoryId: t.passedAppFunctions.getURLParamValue("categoryId") || t.passedAppFunctions.linkToState.categoryId || "-10035",
                                    type: "Product",
                                    searchTerm: u || "",
                                    searchResultsCount: p || "",
                                    primaryCategory: h || "",
                                    primaryCategoryId: g || "",
                                    subCategory1: y || "",
                                    subCategoryId1: v || "",
                                    subCategory2: b || "",
                                    searchPosition: S || "",
                                    subCategoryId2: w || "",
                                    searchResultsClicked: D || ""
                                })
                            }
                            "BadCatentryId" == this.props.contentData.productLayout && (t.passedAppFunctions.setDataLayerInfo("page", {
                                RealSearch: l || "N",
                                name: t.contentData.originalProductName,
                                pageId: a || "",
                                categoryId: "-10050",
                                type: "Product",
                                searchTerm: u || "",
                                searchResultsCount: p || ""
                            }), t.passedAppFunctions.setDataLayerInfo("product", {
                                categoryId: "-10050"
                            })), "undefined" != typeof window && window.cmCreatePageviewTag && window.receiveSyndecaMessage && window.syndecaTracking && cmCreatePageviewTag(dataLayer.page.pageId, "-10048")
                        }
                    }, {
                        key: "automationExpose",
                        value: function(t) {
                            try {
                                t && this.automationUnexpose(), window.productPageExpose = window.productPageExpose || {}, "BundleDisplay" != this.props.contentData.productLayout && "OutfitDisplay" != this.props.contentData.productLayout && "BundleDisplayChanel" != this.props.contentData.productLayout && (window.productPageExpose["updateAttributeState".concat(this.props.contentData.productId)] = this.updateAttributeState, window.productPageExpose["attributeState".concat(this.props.contentData.productId)] = JSON.parse(JSON.stringify(this.state.attributeState)))
                            } catch (t) {}
                        }
                    }, {
                        key: "automationUnexpose",
                        value: function(t) {
                            try {
                                var e = t || this.props;
                                window.productPageExpose["updateAttributeState".concat(e.contentData.productId)] && (delete window.productPageExpose["updateAttributeState".concat(e.contentData.productId)], delete window.productPageExpose["attributeState".concat(e.contentData.productId)])
                            } catch (t) {}
                        }
                    }, {
                        key: "focusFirstAttrError",
                        value: function(t) {
                            if (1 == this.state.checkForErrors && 0 == this.props.passedAppFunctions.quickviewIsOpen) {
                                var e = document.getElementsByClassName("selectHasError");
                                e.length > 0 && e[0].focus();
                                try {
                                    null != t && t.focus()
                                } catch (t) {}
                            } else if (1 == this.state.checkForErrors && 1 == this.props.passedAppFunctions.quickviewIsOpen) {
                                var a = document.getElementsByClassName("modalSelectError");
                                a.length > 0 && a[0].focus()
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            this.state.possibleIncorrectProductId = !1, t.contentData.productId && t.contentData.productId !== this.props.contentData.productId && this.loadSyndigo(), "relative" === $("#root").css("position") && $("#root").css("position", "");
                            try {
                                t.contentData.productId == this.props.contentData.productId && t.contentData.salePage == this.props.contentData.salePage || (this.automationUnexpose(t), this.powerReviewRender(this.props.contentData)), this.automationExpose()
                            } catch (t) {}
                            if ($("#invalidComboContainer, .invalidComboContainer").length > 0) {
                                var e = $("#invalidComboContainer, .invalidComboContainer").parents("form").find(".selectHasError")[0];
                                this.focusFirstAttrError(e)
                            }
                        }
                    }, {
                        key: "checkVideoChat",
                        value: function() {
                            new MutationObserver((function(t, e) {
                                if (document.getElementById("dillards-tags") && void 0 !== window.insideFrontInterface && void 0 !== insideFrontInterface.getAvailableAssistants) {
                                    var a = window.insideFrontInterface.getAvailableAssistants() || [];
                                    if (a.length > 0)
                                        for (var n = 0; n < a.length; n++)
                                            if ("Video Chat Enabled" === a[n].name) {
                                                var r = document.getElementsByClassName("beauty-chat");
                                                Array.prototype.forEach.call(r, (function(t) {
                                                    t.style.display = "block"
                                                })), e.disconnect()
                                            }
                                }
                            })).observe(document, {
                                childList: !0,
                                subtree: !0
                            })
                        }
                    }, {
                        key: "loadSyndigo",
                        value: function() {
                            null !== document.getElementById("wc-power-page") && !1 === this.props.passedAppFunctions.quickviewIsOpen && "QuickViewDisplay" !== this.props.contentData.productLayout && (document.getElementById("wc-power-page").innerHTML = "", new MutationObserver((function(t, e) {
                                if (void 0 !== window.Webcollage) return window.Webcollage.loadProductContent("dillards", "", {
                                    "power-page": {
                                        reload: !0
                                    }
                                }), void(void 0 !== dataLayer && void 0 !== dataLayer.product.catentryId && (window.Webcollage.loadProductContent("dillards", dataLayer.product.catentryId, {
                                    "power-page": {
                                        reload: !0
                                    }
                                }), e.disconnect()))
                            })).observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function(t) {
                            this.checkVideoChat(), this.automationUnexpose()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.loadSyndigo(), this.checkVideoChat();
                            var t = this.props.passedAppFunctions.getURLParamValue("di");
                            if (this.props.passedAppFunctions.linkToState.di && (t = this.props.passedAppFunctions.linkToState.di), "OutfitDisplay" != this.props.contentData.productLayout && "BundleDisplay" != this.props.contentData.productLayout && "OutfitComponent" != this.props.contentData.productLayout && t && "" != t && this.setState({
                                    selectedMainImg: t
                                }), this.automationExpose(), Modernizr.sessionstorage && this.props.passedAppFunctions.getURLParamValue("krypto")) {
                                var e = sessionStorage.getItem("wlAttempt"),
                                    a = sessionStorage.getItem("regAttempt"),
                                    n = sessionStorage.getItem("mfbAttempt"),
                                    r = sessionStorage.getItem("attemptId");
                                if (e && r == this.props.contentData.productId)
                                    if (sessionStorage.removeItem("attemptId"), "-" == e) this.ajaxAddToWishlist();
                                    else {
                                        for (var o = e.split("|"), i = 0; i < o.length; i++) {
                                            var s = o[i].split(":")[0],
                                                c = o[i].split(":")[1];
                                            this.updateAttributeState(s, c)
                                        }
                                        this.ajaxAddToWishlist()
                                    } if (a && r == this.props.contentData.productId)
                                    if (sessionStorage.removeItem("regAttempt"), sessionStorage.removeItem("attemptId"), "-" == a) this.ajaxAddToRegistry();
                                    else {
                                        for (o = a.split("|"), i = 0; i < o.length; i++) s = o[i].split(":")[0], c = o[i].split(":")[1], this.updateAttributeState(s, c);
                                        this.ajaxAddToRegistry()
                                    } n && r == this.props.contentData.productId && (sessionStorage.removeItem("mfbAttempt"), sessionStorage.removeItem("attemptId"), this.ajaxAddToBrandFavorites())
                            }
                            this.personalizationTracking(1), this.powerReviewRender(this.props.contentData), this.resetFreqOnMount()
                        }
                    }, {
                        key: "initializeStateObjects",
                        value: function(t, e) {
                            if (t.productLayout && -1 == ["OutfitDisplay", "BundleDisplay", "BundleDisplayChanel"].indexOf(t.productLayout)) {
                                var a = {
                                    attributes: []
                                };
                                if (t.attributes)
                                    for (var n = 0; n < t.attributes.length; n++) {
                                        var r = {};
                                        (r = u({}, d = t.attributes[n])).availableValues = d.values, r.notAvailableValues = [], 1 == r.values.length ? (r.selectedValue = r.values[0].value, r.selectedValueInformation = r.values[0]) : (r.selectedValue = "", r.selectedValueInformation = {}), a.attributes.push(r)
                                    }
                                if (this.state.swatchGroups = this.updateSwatchGroups(a, t), this.state.attributeState = a, this.state.quantity = 1, 1 == this.state.attributeState.attributes.length && t.pricing.offerPriceMin != t.pricing.offerPriceMax && "Amount" != this.state.attributeState.attributes[0].attrName) {
                                    for (var o = 0; o < this.state.attributeState.attributes[0].values.length; o++) this.state.attributeState.attributes[0].values[o].optionPrice = this.state.attributeState.attributes[0].values[o].itemPrice;
                                    for (o = 0; o < this.state.attributeState.attributes[0].availableValues.length; o++) this.state.attributeState.attributes[0].availableValues[o].optionPrice = this.state.attributeState.attributes[0].availableValues[o].itemPrice
                                }
                                if (2 == this.state.attributeState.attributes.length) {
                                    if (t.pricing.offerPriceMin != t.pricing.offerPriceMax && 1 == this.state.attributeState.attributes[1].values.length) {
                                        for (o = 0; o < this.state.attributeState.attributes[0].values.length; o++) this.state.attributeState.attributes[0].values[o].optionPrice = this.state.attributeState.attributes[0].values[o].itemPrice;
                                        for (o = 0; o < this.state.attributeState.attributes[0].availableValues.length; o++) this.state.attributeState.attributes[0].availableValues[o].optionPrice = this.state.attributeState.attributes[0].availableValues[o].itemPrice
                                    }
                                    if (t.pricing.offerPriceMin != t.pricing.offerPriceMax && 1 == this.state.attributeState.attributes[0].values.length) {
                                        for (o = 0; o < this.state.attributeState.attributes[1].values.length; o++) this.state.attributeState.attributes[1].values[o].optionPrice = this.state.attributeState.attributes[1].values[o].itemPrice;
                                        for (o = 0; o < this.state.attributeState.attributes[1].availableValues.length; o++) this.state.attributeState.attributes[1].availableValues[o].optionPrice = this.state.attributeState.attributes[1].availableValues[o].itemPrice
                                    }
                                }
                                if (this.state.selectedMainImg && "" != this.state.selectedMainImg || (this.state.selectedMainImg = t.fullImage && t.fullImage.imageNameNoPath), this.state.formValid = this.validateForm(a), this.props.contentData.extraQVProps && this.props.contentData.extraQVProps.OSS) {
                                    for (var i, s = 0; s < this.props.contentData.extraQVProps.OSS.length; s++) {
                                        var c = this.props.contentData.extraQVProps.OSS[s];
                                        c.dil_oss_acc_catentry_id == this.props.contentData.productId && (i = c)
                                    }
                                    if (i && "" != i.dil_oss_vendor_color) {
                                        var l = i.dil_oss_vendor_color,
                                            p = !1;
                                        for (n = 0; n < this.state.attributeState.attributes.length; n++)
                                            for (var d = this.state.attributeState.attributes[n], m = 0; m < d.values.length; m++) {
                                                var f = d.values[m];
                                                l && f && f.name && l.toLowerCase() == f.name.toLowerCase() && (p = !0, this.updateAttributeState(d.attrId, f.value, void 0, !0))
                                            }
                                        p || (this.state.colorNotAvailable = l)
                                    }
                                }
                                if (this.props.contentData.extraQVProps && this.props.contentData.extraQVProps.collection && this.props.contentData.extraQVProps.collection.details) {
                                    var h = this.props.contentData.extraQVProps.thisCollectionMember;
                                    if (h && "" != h.color) {
                                        for (l = h.color, p = !1, n = 0; n < this.state.attributeState.attributes.length; n++)
                                            for (d = this.state.attributeState.attributes[n], m = 0; m < d.values.length; m++) l == (f = d.values[m]).name && (p = !0, this.updateAttributeState(d.attrId, f.value, void 0, !0));
                                        p || (this.state.colorNotAvailable = l)
                                    }
                                }
                                "undefined" != typeof window && window.injectedAttributeStateFunction && this.state.attributeState && t["onSaleInfo_".concat(t.productId)] && t["onSaleInfo_".concat(t.productId)].onSaleItemMap && t.pricing && (this.state.attributeState = window.injectedAttributeStateFunction(JSON.parse(JSON.stringify(this.state.attributeState)), t["onSaleInfo_".concat(t.productId)].onSaleItemMap, t.pricing))
                            }
                        }
                    }, {
                        key: "updateSwatchGroups",
                        value: function(t, e) {
                            "QuickViewDisplay" == e.productLayout ? this.state.possibleIncorrectProductId = !1 : this.state.possibleIncorrectProductId ? this.state.productId != e.productId && (t = this.state.correctPassedAttributes, e = this.state.correctContentData, this.state.possibleIncorrectProductId = !1) : (this.state.productId = e.productId, this.state.correctPassedAttributes = t, this.state.correctContentData = e, this.state.possibleIncorrectProductId = !0), t = JSON.parse(JSON.stringify(t.attributes));
                            for (var a, n = JSON.parse(JSON.stringify(e.swatchGroups || [])), r = 0; r < t.length; r++) {
                                var o = t[r];
                                "Color" == o.attrName && (a = o)
                            }
                            if (a && n.length > 0) {
                                for (var i = 0; i < a.availableValues.length; i++)
                                    for (var s = (d = a.availableValues[i]).name, c = 0; c < n.length; c++)
                                        for (var l = n[c], u = 0; u < l.swatches.length; u++)(f = l.swatches[u]).colorForSwatch && s && f.colorForSwatch == s && (f.available = !0, f.selectedValue = d.value, f.attrId = a.attrId);
                                for (var p = 0; p < a.notAvailableValues.length; p++) {
                                    var d;
                                    for (s = (d = a.notAvailableValues[p]).name, c = 0; c < n.length; c++)
                                        for (l = n[c], u = 0; u < l.swatches.length; u++)(f = l.swatches[u]).colorForSwatch && s && f.colorForSwatch == s && (f.available = !1, f.selectedValue = d.value, f.attrId = a.attrId)
                                }
                                var m = a.selectedValueInformation.name;
                                if (m)
                                    for (c = 0; c < n.length; c++)
                                        for (l = n[c], u = 0; u < l.swatches.length; u++) {
                                            var f;
                                            (f = l.swatches[u]).colorForSwatch == m && (f.selected = !0)
                                        }
                            }
                            return n
                        }
                    }, {
                        key: "validateForm",
                        value: function(t) {
                            for (var e = !0, a = 0; a < t.attributes.length; a++) {
                                var n = t.attributes[a];
                                if (n.selectedValue) {
                                    for (var r = !1, o = 0; o < n.availableValues.length; o++) n.availableValues[o].value == n.selectedValue && (r = !0);
                                    r || (e = !1)
                                } else e = !1
                            }
                            return "" == this.state.quantity && (e = !1), e
                        }
                    }, {
                        key: "currencySymbol",
                        value: function(t) {
                            return "undefined" == typeof window || "US" == window.DILLARDS.country ? "$" : t ? "" : window.DILLARDS.currency + " "
                        }
                    }, {
                        key: "roundUp",
                        value: function(t, e) {
                            var a = Math.pow(10, e);
                            return Math.round(t * a) / a
                        }
                    }, {
                        key: "priceConvert",
                        value: function(t) {
                            if (t = 1 * (t + "").split("$").join(""), "undefined" == typeof window || "US" == window.DILLARDS.country) return t.toFixed(2);
                            var e = window.dillardsIntlObj.countryCode()[window.DILLARDS.country],
                                a = window.dillardsIntlObj.currencyCode()[window.DILLARDS.currency],
                                n = e.getFLC,
                                r = (a.getCurrencyCode, a.getExchangeRate),
                                o = a.getRoundMethod,
                                i = t * r * n;
                            return o < 0 ? parseFloat(this.roundUp(i, o)) : parseFloat(i).toFixed(o)
                        }
                    }, {
                        key: "forceQuantity",
                        value: function() {
                            this.setState({
                                quantity: 1
                            })
                        }
                    }, {
                        key: "updateQuantity",
                        value: function(t) {
                            var e = 1 * t.target.getAttribute("data-maximum"),
                                a = 1 * t.target.getAttribute("data-minimum"),
                                n = t.target.value || t.target.getAttribute("data-value");
                            null != n && null != n || (n = "");
                            var r = "" == n,
                                o = n <= e,
                                i = n >= a,
                                s = !isNaN(n),
                                c = s && n.toString().indexOf(" ") > -1,
                                l = n.toString().indexOf(".") > -1;
                            (r || s && !c && !l && o && i) && (this.state.quantity = n, this.setState({
                                quantity: n,
                                quantityErrored: !1
                            }))
                        }
                    }, {
                        key: "updateAttribute",
                        value: function(t) {
                            var e = t.target.getAttribute("data-attrid"),
                                a = t.target.value || t.target.getAttribute("data-attrval");
                            return this.updateAttributeState(e, a), !1
                        }
                    }, {
                        key: "updateAttributeFromAltClick",
                        value: function(t) {
                            var e, a = t.currentTarget.getAttribute("data-imagename"),
                                n = a.split("__")[0];
                            if (this.state.attributeState)
                                for (var r = 0; r < this.state.attributeState.attributes.length; r++) {
                                    var o = this.state.attributeState.attributes[r];
                                    "Color" == o.attrName && (e = o)
                                }
                            if (e) {
                                for (var i, s = 0; s < e.values.length; s++) {
                                    var c = e.values[s];
                                    n == c.fullImage && (i = c)
                                }
                                this.updateAttributeState(e.attrId, i.value, a)
                            } else this.setState({
                                selectedMainImg: a
                            })
                        }
                    }, {
                        key: "updateAttributeFromAltSwipe",
                        value: function(t) {
                            var e, a = this.props.contentData.altImages[t].imageName,
                                n = a.split("__")[0];
                            if (this.state.attributeState)
                                for (var r = 0; r < this.state.attributeState.attributes.length; r++) {
                                    var o = this.state.attributeState.attributes[r];
                                    "Color" == o.attrName && (e = o)
                                }
                            if (e) {
                                for (var i, s = 0; s < e.values.length; s++) {
                                    var c = e.values[s];
                                    n == c.fullImage && (i = c)
                                }
                                this.updateAttributeState(e.attrId, i.value, a)
                            } else this.setState({
                                selectedMainImg: a
                            })
                        }
                    }, {
                        key: "updateAttributeState",
                        value: function(t, e, a, n) {
                            for (var r = JSON.parse(JSON.stringify(this.state.attributeState)), o = {}, i = !1, s = 0; s < r.attributes.length; s++) {
                                var c = r.attributes[s];
                                c.attrId == t ? (c.hasError = !1, o = c) : i = c
                            }
                            if (o.selectedValue = e, "" != e && null != e) {
                                for (var l = 0; l < o.values.length; l++)(u = JSON.parse(JSON.stringify(o.values[l]))).value == e && (o.selectedValueInformation = u);
                                if (i && i.values.length > 1)
                                    for (l = 0; l < o.availableValues.length; l++) {
                                        var u;
                                        (u = o.availableValues[l]).optionPrice = !1
                                    }
                                if (i && i.values.length > 1) {
                                    var p = o.selectedValueInformation.others,
                                        d = o.selectedValueInformation.othersPrice,
                                        m = !!d && d.split("|");
                                    if (p) {
                                        i.availableValues = [], i.notAvailableValues = [];
                                        for (var f = p.split("|"), h = 0; h < i.values.length; h++) {
                                            var y = JSON.parse(JSON.stringify(i.values[h]));
                                            if (f.indexOf(y.name) > -1) {
                                                if (m)
                                                    for (var b = 0; b < m.length; b++) y.name == m[b].split(":")[0] && (y.optionPrice = m[b].split(":")[1]);
                                                i.availableValues.push(y)
                                            } else i.notAvailableValues.push(y)
                                        }
                                    }
                                }
                            } else i && (i.availableValues = JSON.parse(JSON.stringify(i.values)));
                            var g = this.updateSwatchGroups(r, this.props.contentData);
                            if ("Color" == o.attrName && ("" == e || null == e))
                                for (var v = 0; v < g.length; v++)
                                    for (var w = g[v], S = 0; S < w.swatches.length; S++) w.swatches[S].selected = !1;
                            var E = {
                                swatchGroups: g,
                                attributeState: r,
                                formValid: this.validateForm(r),
                                itemPriceInfo: void 0
                            };
                            if (("Color" == o.attrName || "Initial" == o.attrName) && o.selectedValueInformation && o.selectedValueInformation.fullImage && (E.selectedMainImg = o.selectedValueInformation.fullImage), a && (E.selectedMainImg = a), E.formValid && 2 == r.attributes.length) {
                                var D = this.props.contentData["onSaleInfo_".concat(this.props.contentData.productId)].onSaleItemMap,
                                    A = {},
                                    I = "".concat(i.selectedValueInformation.name).concat(o.selectedValueInformation.name, ":"),
                                    F = D.split(I)[1].split("|")[0];
                                A.itemOnSale = "true" == F, o.selectedValueInformation.othersPrice && (A.itemPrice = o.selectedValueInformation.othersPrice.split("".concat(i.selectedValueInformation.name, ":"))[1].split("|")[0]), E.itemPriceInfo = A
                            }
                            if (n)
                                for (k = 0; k < Object.keys(E).length; k++) O = Object.keys(E)[k], this.state[O] = E[O];
                            else {
                                for (var k = 0; k < Object.keys(E).length; k++) {
                                    var O = Object.keys(E)[k];
                                    this.state[O] = E[O]
                                }
                                this.setState(E)
                            }
                        }
                    }, {
                        key: "addErrorVisuals",
                        value: function(t) {
                            for (var e = JSON.parse(JSON.stringify(this.state.attributeState)), a = (JSON.parse(JSON.stringify(this.state.swatchGroups)), 0); a < e.attributes.length; a++) {
                                for (var n = e.attributes[a], r = [0], o = 0; o < e.attributes[a].notAvailableValues.length; o++) r.push(e.attributes[a].notAvailableValues[o].value);
                                r.indexOf(n.selectedValue) > 0 || "" == n.selectedValue || null == n.selectedValue ? n.hasError = !0 : n.hasError = !1
                            }
                            this.setState({
                                attributeState: e,
                                quantityErrored: "" == this.state.quantity
                            })
                        }
                    }, {
                        key: "generateSharedFormFields",
                        value: function(t) {
                            var e = this.props.contentData.limitedAvailability ? "Y" : "N",
                                a = "";
                            a = {
                                ProductDisplay: "PP-PIP",
                                ProductDisplayChanel: "PP-CPIP",
                                BundleDisplay: "PP-BUN",
                                BundleDisplayChanel: "PP-CBUN",
                                OutfitDisplay: "PP-BUN",
                                OutfitComponent: "",
                                ProductItemAttrDisplay: "PP-PIA",
                                ProductItemDisplay: "PP-PIL",
                                ProductItemDisplayChanel: "PP-CPIL",
                                ProductDisplayEcard: "PP-PIP",
                                QuickViewDisplay: "PP-QV",
                                QuickViewNotAvailable: "PP-QV-NA",
                                NotAvailable: "PP-NA",
                                OldProduct: "PP-PB",
                                QuickViewOldProduct: "PP-PV-PB"
                            } [this.props.contentData.productLayout], "OutfitComponent" != this.props.contentData.productLayout ? this.props.contentData.productLayout.indexOf("Quick") > -1 && (this.props.contentData.extraQVProps && this.props.contentData.extraQVProps.OSS && (a += "-OSS"), this.props.contentData.extraQVProps && this.props.contentData.extraQVProps.collection && (a += "-SC")) : "OutfitComponent" == this.props.contentData.productLayout && (a = "Chanel" == this.props.contentData.brandNameForTitle ? "PP-CBUN" : "PP-BUN");
                            var n = "";
                            n += "storeId=301", n += "&langId=-1", n += "&catalogId=301", n += "&orderId=.", n += "&errorViewName=ProductDisplayView", n += "&URL=" + (t && t.URL ? t.URL : "ProductDisplayView"), n += "&rURL=" + (t && t.rURL ? t.rURL : "ProductDisplayView"), n += "&returnJSON=true", n += "&catEntryId=" + this.props.contentData.productId, n += "&productId=" + this.props.contentData.productId, n += "&limitedAvailability=" + e, n += "&description=".concat(this.props.contentData.partNumber, "|").concat(this.props.contentData.productId, "|").concat(window.receiveSyndecaMessage ? "syndeca" : this.props.passedAppFunctions.getURLParamValue("categoryId") || this.props.passedAppFunctions.linkToState.categoryId || "-10035", "|").concat(a, "|").concat(e);
                            for (var r = JSON.parse(JSON.stringify(this.state.attributeState)), o = 0; o < r.attributes.length; o++) {
                                var i = r.attributes[o];
                                n += "&attrName=" + i.attrId, n += "&attrValue=" + i.selectedValue
                            }
                            return n += "&quantity=" + parseInt(this.state.quantity, 10).toString(), n += "&subscriptionFrequency=" + this.state.subscriptionFrequency
                        }
                    }, {
                        key: "generateCachedAttributes",
                        value: function() {
                            for (var t = "", e = JSON.parse(JSON.stringify(this.state.attributeState)), a = 0; a < e.attributes.length; a++) {
                                var n = e.attributes[a];
                                t.length > 0 && (t += "|"), t += n.attrName, t += ":", t += n.selectedValueInformation.name.split("#double;").join('"')
                            }
                            return t
                        }
                    }, {
                        key: "ajaxAddToBrandFavorites",
                        value: function() {
                            var t = this;
                            this.state.wlResponse = !1;
                            var e = this.props.contentData.personalization && this.props.contentData.personalization.superCatId || this.props.parentPersonalization && this.props.parentPersonalization.superCatId || "";
                            if (e)
                                if ("-1002" != this.props.passedAppFunctions.getUserInformation().userId) {
                                    var a = {
                                        method: "post",
                                        url: "/webapp/wcs/stores/servlet/Personalization",
                                        data: "fromProductPage=true"
                                    };
                                    a.data += this.thisBrandInMyFavorites() ? "&action=remove" : "&action=add", a.data += "&mfName=".concat(e, "|").concat(this.props.contentData.brandNameForTitle.split("&").join("%26")), i()(a).then((function(e) {
                                        var a, n = {};
                                        if ("object" != c(e.data)) try {
                                            n = JSON.parse(e.data), a = !0
                                        } catch (t) {} else n = e.data, a = !0;
                                        if (a) {
                                            var r = JSON.parse(JSON.stringify(n));
                                            r && (r.fromMFB = !0);
                                            for (var o = [], i = 0; i < localStorage.length; i++) 0 == localStorage.key(i).indexOf("myFavoritespersonalization") && o.push(localStorage.key(i));
                                            for (i = 0; i < o.length; i++) localStorage.removeItem(o[i]);
                                            if (r.JSON.dbComments)
                                                for (i = 0; i < r.JSON.dbComments.length; i++)
                                                    for (var s = r.JSON.dbComments[i], l = Object.keys(s), u = 0; u < l.length; u++) {
                                                        var p = l[u],
                                                            d = s[p];
                                                        localStorage["myFavoritespersonalization".concat(p)] = d
                                                    }
                                            t.props.forceBundleRender && t.props.forceBundleRender(), t.setState({
                                                wlResponse: r
                                            })
                                        } else t.setState({
                                            wlResponse: {
                                                JSON: {
                                                    status: ["error"]
                                                },
                                                fromMFB: !0
                                            }
                                        })
                                    }))
                                } else {
                                    var n = "https://".concat(window.location.host, "/webapp/wcs/stores/servlet/LogonForm?");
                                    n += "URL=" + String(window.location).split("?")[0], n += "&rURL=" + String(window.location).split("?")[0], n += "&storeId=301", n += "&langId=-1", n += "&catalogId=301", this.storeAttempt("mfb"), window.location = n
                                }
                        }
                    }, {
                        key: "forceBundleRender",
                        value: function() {
                            this.setState({})
                        }
                    }, {
                        key: "addToBagClicked",
                        value: function() {
                            this.setState({
                                addToBagClicked: !0
                            })
                        }
                    }, {
                        key: "formNotValid",
                        value: function() {
                            this.setState({
                                formValid: !1
                            })
                        }
                    }, {
                        key: "checkForErrorsRegistry",
                        value: function(t) {
                            this.setState({
                                checkForErrors: !0
                            }), this.ajaxAddToRegistry(t)
                        }
                    }, {
                        key: "checkForErrorsWishlist",
                        value: function(t) {
                            this.setState({
                                checkForErrors: !0
                            }), this.ajaxAddToWishlist(t)
                        }
                    }, {
                        key: "checkForErrorsMonogram",
                        value: function() {
                            this.setState({
                                monogramClicked: !0,
                                addToBagClicked: !0,
                                checkForErrors: !0
                            })
                        }
                    }, {
                        key: "displayErrorMonogram",
                        value: function() {
                            this.setState({
                                itemNotMonogramEligible: !0
                            })
                        }
                    }, {
                        key: "checkForErrorsQV",
                        value: function() {
                            this.setState({
                                checkForErrors: !0
                            })
                        }
                    }, {
                        key: "checkForErrors",
                        value: function(t) {
                            this.setState({
                                checkForErrors: !0
                            }), this.ajaxAddToBag(t)
                        }
                    }, {
                        key: "checkForErrorsItemAttr",
                        value: function() {
                            this.setState({
                                checkForErrors: !0
                            })
                        }
                    }, {
                        key: "hideCheckForErrors",
                        value: function() {
                            this.setState({
                                checkForErrors: !1,
                                itemNotMonogramEligible: !1
                            })
                        }
                    }, {
                        key: "searchABTracking",
                        value: function() {
                            var t = "";
                            try {
                                if ("undefined" != typeof window && Modernizr.localstorage && localStorage.getItem("lastSearchTerm")) {
                                    var e = !1;
                                    this.props.passedAppFunctions.linkToState && this.props.passedAppFunctions.linkToState.fromSearchPage && (e = !0);
                                    try {
                                        if (1 == history.length && document.referrer && document.referrer.indexOf("/search-term/") > -1) {
                                            var a = document.referrer.split("?")[0].split(window.location.host)[1],
                                                n = Object(s.a)(localStorage.getItem("lastSearchTerm"));
                                            (a.indexOf("/search-term/".concat(n, "/")) > -1 || a == "/search-term/".concat(n)) && (e = !0)
                                        }
                                    } catch (t) {}
                                    e && (t += "|Search:Y", (this.props.passedAppFunctions.wasParms.ubTestOn = !0) && (t += "|UB:Y"))
                                }
                            } catch (t) {
                                console.log(t)
                            }
                            return t
                        }
                    }, {
                        key: "standardSizeTracking",
                        value: function() {
                            var t = "";
                            try {
                                var e = this.props.contentData.personalization.superCatId;
                                if (e && g.indexOf(e) > -1 && this.state.attributeState && this.state.attributeState.attributes && this.state.attributeState.attributes.length > 0)
                                    for (var a = 0; a < this.state.attributeState.attributes.length; a++) {
                                        var n = this.state.attributeState.attributes[a].selectedValueInformation.standardSize;
                                        n && (t = "|SS:" + n)
                                    }
                            } catch (t) {}
                            return t
                        }
                    }, {
                        key: "ajaxAddToBag",
                        value: function(t) {
                            var e = this,
                                a = this.props.passedAppFunctions.myDillardsInfo && this.props.passedAppFunctions.myDillardsInfo.miniCartInfo && this.props.passedAppFunctions.myDillardsInfo.miniCartInfo.cartItemCount ? this.props.passedAppFunctions.myDillardsInfo.miniCartInfo.cartItemCount : "";
                            if (this.state.addToBagClicked = !0, this.state.wlResponse = !1, this.addErrorVisuals(t), "mobile" == this.props.passedAppFunctions.siteFormat)
                                if (Modernizr.sessionstorage) {
                                    var n = $(document).scrollTop();
                                    sessionStorage.setItem("atbPos", n)
                                } else {
                                    var r = $(document).scrollTop();
                                    Cookies.set("atbPos", r)
                                } if (this.validateForm(this.state.attributeState)) {
                                try {
                                    window.injectedBeforeAddToBag && window.injectedBeforeAddToBag(this.props.contentData.productId)
                                } catch (t) {}
                                this.props.passedAppFunctions.setModalInfo({
                                    modalType: "Loading"
                                });
                                var o = {
                                    method: "post",
                                    url: "/webapp/wcs/stores/servlet/OrderItemAdd"
                                };
                                o.data = this.generateSharedFormFields(), o.data += "&field2=" + this.generateCachedAttributes(), o.data += "&superAddedFrom=" + this.props.contentData.personalization.superCatId + this.searchABTracking() + this.standardSizeTracking() + (window.additionalSuperTracking ? window.additionalSuperTracking : ""), null != t && t.Token && (o.data += "&monogramToken=" + t.Token), this.props.contentData.dropshipVerbiage && (o.data += "&dropship=true");
                                try {
                                    var s = this.props.passedAppFunctions.getCookie("cma");
                                    if ("02140" != s && "02139" != s && "02138" != s) {
                                        var l = window.location.hostname;
                                        "localhost" != window.location.hostname && (l = "." + window.location.hostname), Cookies.set("cma", "02140", {
                                            path: "/",
                                            domain: l
                                        })
                                    }
                                } catch (t) {}
                                i()(o).then((function(t) {
                                    var n, r = {};
                                    try {
                                        r = "object" == c(t.data) ? t.data : JSON.parse(t.data), n = !0
                                    } catch (t) {}
                                    if (n) {
                                        r.selectedMainImg = e.state.selectedMainImg;
                                        try {
                                            window.injectedImageAddToBag && (r.selectedMainImg = window.injectedImageAddToBag(e.state.selectedMainImg))
                                        } catch (t) {}
                                        r.productNameForURL = e.props.contentData.productNameForURL, r.partNumber = e.props.contentData.partNumber, e.props.contentData.productLayout.indexOf("QuickView") > -1 && (!e.props.contentData.extraQVProps || "mobile" == e.props.passedAppFunctions.siteFormat || !e.props.contentData.extraQVProps.OSS && !e.props.contentData.extraQVProps.collection) && e.props.passedAppFunctions.closeQuickView(), r.currentOSSAccessories = e.state.currentOSSAccessories, r.currentCollection = e.state.currentCollection, e.props.passedAppFunctions.setModalInfo(r), e.props.passedAppFunctions.setDataLayerInfo("itemAddedInfo", {
                                            childPartNumber: r.childPartnumberAdded || "",
                                            quantityAdded: r.quantityAdded || "",
                                            priceAdded: r.priceAdded || "",
                                            quantityRequested: r.quantityRequested || "",
                                            fullImage: e.state.selectedMainImg || e.props.contentData.fullImage.imageNameNoPath,
                                            productName: e.props.contentData.productName,
                                            productBrand: e.props.contentData.brandNameForTitle
                                        });
                                        try {
                                            1 * a == 0 ? e.props.passedAppFunctions.setDataLayerInfo("commerce", {
                                                productListOpens: {
                                                    value: 1
                                                }
                                            }) : e.props.passedAppFunctions.setDataLayerInfo("commerce", {
                                                productListAdds: {
                                                    value: 1
                                                }
                                            })
                                        } catch (t) {
                                            e.props.passedAppFunctions.setDataLayerInfo("commerce", {
                                                productListAdds: {
                                                    value: 1
                                                }
                                            })
                                        }
                                        e.props.passedAppFunctions.setDataLayerInfo("productListItems", [{
                                            SKU: r.childPartnumberAdded || "",
                                            quantity: r.quantityAdded || "",
                                            priceTotal: r.priceAdded || "",
                                            name: e.props.contentData.brandNameForTitle + " " + e.props.contentData.productName
                                        }]);
                                        try {
                                            window.injectedAfterAddToBag && window.injectedAfterAddToBag(e.props.contentData.productId)
                                        } catch (t) {}
                                        try {
                                            "undefined" != typeof Bootstrapper && void 0 !== Bootstrapper.ensEvent && Bootstrapper.ensEvent.trigger("ajaxAddedToBag")
                                        } catch (t) {}
                                        e.resetFreqOnMount(), e.personalizationTracking(6)
                                    } else {
                                        $(".errorAddingToBag").remove();
                                        var o = '<div class="errorAddingToBag hidden">Error Adding to cart: ' + t.data + "</div>";
                                        $("#ProductDisplay").append(o), e.props.passedAppFunctions.setModalInfo({
                                            modalType: !1
                                        }), e.setState({
                                            wlResponse: {
                                                error: "There was an error adding this item to your bag. Please try again later."
                                            }
                                        })
                                    }
                                    e.setState({
                                        addToBagClicked: !1
                                    })
                                })).catch((function(t) {
                                    e.props.passedAppFunctions.setModalInfo({
                                        modalType: !1
                                    }), e.setState({
                                        wlResponse: {
                                            error: "There was an error adding this item to your bag. Please try again later."
                                        }
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "ajaxMonogramPersonalization",
                        value: function(t) {
                            window.doTheAjaxMonogramPersonalization(t, this)
                        }
                    }, {
                        key: "ajaxAddToRegistry",
                        value: function() {
                            var t = this;
                            if (this.state.addToBagClicked = !0, this.state.wlResponse = !1, this.addErrorVisuals(), this.validateForm(this.state.attributeState)) {
                                var e = {
                                    method: "post",
                                    url: "/webapp/wcs/stores/servlet/ItemRegistryAdd"
                                };
                                e.data = this.generateSharedFormFields(), e.data += "&field2=" + this.generateCachedAttributes(), i()(e).then((function(e) {
                                    var a, n = {};
                                    try {
                                        n = "object" == c(e.data) ? e.data : JSON.parse(e.data), a = !0
                                    } catch (t) {}
                                    if (a) n.selectedMainImg = t.state.selectedMainImg, n.productNameForURL = t.props.contentData.productNameForURL, n.partNumber = t.props.contentData.partNumber, n.registryAdd = !0, t.setState({
                                        wlResponse: n
                                    });
                                    else {
                                        var r = e.data;
                                        if (r.search("forgot-password") > 0) {
                                            var o = "https://".concat(window.location.host, "/webapp/wcs/stores/servlet/ItemRegistryAdd?");
                                            o += t.generateSharedFormFields({
                                                URL: String(window.location).split("?")[0],
                                                rURL: String(window.location).split("?")[0]
                                            }), t.storeAttempt("reg"), window.location = o
                                        } else r.search("createRegistry") > 0 ? (o = "https://".concat(window.location.host, "/webapp/wcs/stores/servlet/RegistryCreate?"), o += t.generateSharedFormFields({
                                            URL: String(window.location).split("?")[0],
                                            rURL: String(window.location).split("?")[0]
                                        }), t.storeAttempt("reg"), window.location = o) : t.setState({
                                            wlResponse: {
                                                registryAdd: !0,
                                                error: "There was an error adding this item to your registry. Please try again later."
                                            }
                                        })
                                    }
                                    t.setState({
                                        addToBagClicked: !1
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "ajaxShareProductModal",
                        value: function() {
                            var t = this;
                            this.props.passedAppFunctions.setModalInfo({
                                modalType: "Loading"
                            });
                            var e = {
                                method: "post",
                                url: "/webapp/wcs/stores/servlet/ProductEmail",
                                data: "returnJSON=true"
                            };
                            i()(e).then((function(e) {
                                var a, n = {};
                                try {
                                    n = "object" == c(e.data) ? e.data : JSON.parse(e.data), a = !0
                                } catch (t) {}
                                a && (n.selectedMainImg = t.state.selectedMainImg, n.productNameForURL = t.props.contentData.productNameForURL, n.partNumber = t.props.contentData.partNumber, n.productName = t.props.contentData.originalProductName.split("#double;").join('"').split("&quot;").join('"'), n.productId = t.props.contentData.productId, t.props.passedAppFunctions.setModalInfo(n))
                            }))
                        }
                    }, {
                        key: "ajaxAddToWishlist",
                        value: function() {
                            var t = this;
                            if (this.state.addToBagClicked = !0, this.state.wlResponse = !1, this.addErrorVisuals(), this.validateForm(this.state.attributeState)) {
                                var e = {
                                    method: "post",
                                    url: "/webapp/wcs/stores/servlet/InterestItemAdd"
                                };
                                e.data = this.generateSharedFormFields(), e.data += "&field3=" + this.generateCachedAttributes(), this.props.contentData.personalization.superCatId && "" != this.props.contentData.personalization.superCatId && (e.data += "&field2=" + this.props.contentData.personalization.superCatId + (window.additionalSuperTracking ? window.additionalSuperTracking : "")), i()(e).then((function(e) {
                                    var a, n = {};
                                    if ("object" != c(e.data)) try {
                                        n = JSON.parse(e.data), a = !0
                                    } catch (t) {} else n = e.data, a = !0;
                                    if (a) t.setState({
                                        wlResponse: n
                                    }), t.personalizationTracking(12), $(".wishListMessage.success").length > 0 && $(".ReactModal__Overlay").length > 0 && $(".ReactModal__Overlay, .qv-scrollable ").scrollTop($(".ReactModal__Overlay")[0].scrollHeight);
                                    else if (e.data.indexOf("forgot-password") > -1) {
                                        var r = "https://".concat(window.location.host, "/webapp/wcs/stores/servlet/InterestItemAdd?");
                                        r += t.generateSharedFormFields({
                                            URL: String(window.location).split("?")[0],
                                            rURL: String(window.location).split("?")[0]
                                        }).split("&returnJSON=true").join(""), r += "&field3=" + t.generateCachedAttributes(), t.props.contentData.personalization.superCatId && "" != t.props.contentData.personalization.superCatId && (r += "&field2=" + t.props.contentData.personalization.superCatId + (window.additionalSuperTracking ? window.additionalSuperTracking : "")), t.storeAttempt("wl"), window.location = r
                                    } else t.setState({
                                        wlResponse: {
                                            result: "failure"
                                        }
                                    });
                                    t.setState({
                                        addToBagClicked: !1
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "storeAttempt",
                        value: function(t) {
                            if (Modernizr.sessionstorage) {
                                var e = "";
                                if ("mfb" != t)
                                    for (var a = 0; a < this.state.attributeState.attributes.length; a++) {
                                        var n = this.state.attributeState.attributes[a];
                                        e.length > 0 && (e += "|"), e += "".concat(n.attrId, ":").concat(n.selectedValue)
                                    }
                                0 == e.length ? sessionStorage.setItem("".concat(t, "Attempt"), "-") : sessionStorage.setItem("".concat(t, "Attempt"), e), sessionStorage.setItem("attemptId", this.props.contentData.productId)
                            }
                        }
                    }, {
                        key: "flatSizesPriceObject",
                        value: function() {
                            if (this.state.itemPriceInfo) {
                                var t = JSON.parse(JSON.stringify(this.props.contentData.pricing));
                                return this.state.itemPriceInfo.itemOnSale || (t.onSpecial = "0"), this.state.itemPriceInfo.itemPrice && (t.oldOfferPriceMin = t.offerPriceMin, t.oldOfferPriceMax = t.offerPriceMax, t.offerPriceMin = this.state.itemPriceInfo.itemPrice, t.offerPriceMax = this.state.itemPriceInfo.itemPrice), t.flatObject = !0, t
                            }
                            if (2 == this.state.attributeState.attributes.length) {
                                var e = !1,
                                    a = {};
                                if ("Color" == this.state.attributeState.attributes[0].attrName && this.state.attributeState.attributes[0].selectedValue && this.state.attributeState.attributes[0].values.length > 1 && (e = !0, a = this.state.attributeState.attributes[0].selectedValue), "Color" == this.state.attributeState.attributes[1].attrName && this.state.attributeState.attributes[1].selectedValue && this.state.attributeState.attributes[1].values.length > 1 && (e = !0, a = this.state.attributeState.attributes[1].selectedValue), e && !this.state.formValid && this.state.swatchGroups)
                                    for (var n = 0; n < this.state.swatchGroups.length; n++) {
                                        var r = this.state.swatchGroups[n];
                                        if (r.pricing)
                                            for (var o = 0; o < r.swatches.length; o++)
                                                if (r.swatches[o].selectedValue == a) return (t = JSON.parse(JSON.stringify(r.pricing))).onSpecial && (t.onSpecialMessage = this.props.contentData.pricing.onSpecialMessage), t
                                    }
                            }
                            return this.props.contentData.pricing
                        }
                    }, {
                        key: "closeWishListMessage",
                        value: function() {
                            this.setState({
                                wlResponse: !1
                            })
                        }
                    }, {
                        key: "mainImageClicked",
                        value: function() {
                            this.setState({
                                imageClickedOn: !0
                            })
                        }
                    }, {
                        key: "zoomedImageClose",
                        value: function() {
                            this.setState({
                                imageClickedOn: !1
                            })
                        }
                    }, {
                        key: "personalizationTracking",
                        value: function(t) {
                            try {
                                if (Modernizr.localstorage && Modernizr.sessionstorage) {
                                    var e = this.props.contentData.personalization && this.props.contentData.personalization.superCatId || "",
                                        a = this.props.contentData.personalization && this.props.contentData.personalization.brandName || "";
                                    if (a = a.split("&").join("&amp;"), e && e.indexOf("|") > -1 && (e = e.split("|")[0]), e.length > 0 && a.length > 0 && (this.updateStorage(e, "mfName:" + a, t, "mfName"), this.sizePersonalizationTracking(t, e)), a.length > 0 && this.props.contentData.personalization && this.props.contentData.personalization.otherSuperCatIds && this.props.contentData.personalization.otherSuperCatIds.length > 0)
                                        for (var n = this.props.contentData.personalization.otherSuperCatIds.split("|"), r = 0; r < n.length; r++) this.updateStorage(n[r], "mfName:" + a, t, "mfName"), this.sizePersonalizationTracking(t, n[r])
                                }
                            } catch (t) {}
                        }
                    }, {
                        key: "sizePersonalizationTracking",
                        value: function(t, e) {
                            try {
                                if (t > 1 && g.indexOf(e) > -1 && this.state.attributeState && this.state.attributeState.attributes && this.state.attributeState.attributes.length > 0)
                                    for (var a = 0; a < this.state.attributeState.attributes.length; a++) {
                                        var n = this.state.attributeState.attributes[a].selectedValueInformation.standardSize;
                                        n && (n = n.split("&").join("&amp;"), this.updatePersonalizationStorage(e, n, t, localStorage, "ss"))
                                    }
                            } catch (t) {}
                        }
                    }, {
                        key: "updateStorage",
                        value: function(t, e, a, n, r) {
                            "mfName" == n && r && this.updatePersonalizationStorage(t, e, a, localStorage, "personalization", r), "mfName" == n && void 0 === r && this.updatePersonalizationStorage(t, e, a, localStorage, "personalization", r), n && this.updatePersonalizationStorage(t, e, a, localStorage, n + "personalization", r)
                        }
                    }, {
                        key: "updatePersonalizationStorage",
                        value: function(t, e, a, n, r, o) {
                            if (n[r + t]) {
                                var i = n[r + t],
                                    s = "",
                                    c = !1;
                                if ($(i.split("|")).each((function() {
                                        var t = String(this).split("&amp;").join("&").split("&").join("&amp;"),
                                            n = t.split("&amp;").join("&").split(";"); - 1 == s.indexOf(n[0].split("&").join("&amp;")) && (s.length > 0 && (s += "|"), n[0].split("&").join("&amp;") == e && "add" == o ? n[1] >= 1e3 ? (c = !0, s += t) : n[1] < 1e3 && (s += n[0].split("&").join("&amp;") + ";" + String(1 * n[1] + 1 * a), c = !0) : n[0].split("&").join("&amp;") == e && "remove" == o ? 1e3 == n[1] ? (c = !0, s.length > 0 && (s = s.slice(0, -1))) : n[1] > 1e3 ? (s += n[0].split("&").join("&amp;") + ";" + String(1 * n[1] - 1 * a), c = !0) : s += t : n[0].split("&").join("&amp;") != e || o ? s += t : (c = !0, s += n[0].split("&").join("&amp;") + ";" + String(1 * n[1] + 1 * a)))
                                    })), s.length > 0) {
                                    c || "remove" == o || (s += "|" + e + ";" + a);
                                    var l = s.split("|");
                                    l.sort((function(t, e) {
                                        return 1 * t.split("&amp;").join("&").split(";")[1] > 1 * e.split("&amp;").join("&").split(";")[1] ? -1 : 1
                                    })), s = "", $(l).each((function() {
                                        s.length < 1500 && (s.length > 0 && (s += "|"), s += this)
                                    })), n[r + t] = s
                                } else n.removeItem(r + t)
                            } else "remove" != o && (n[r + t] = e + ";" + a)
                        }
                    }, {
                        key: "powerReviewRender",
                        value: function(t) {
                            var e = this;
                            try {
                                if ("ProductDisplay" === t.productLayout || "ProductItemDisplay" === t.productLayout || "ProductItemAttrDisplay" === t.productLayout || "ProductDisplayEcard" === t.productLayout || "ProductItemDisplayChanel" === t.productLayout || "ProductDisplayChanel" === t.productLayout) {
                                    var a = 2 - t.style.length,
                                        n = t.style;
                                    a < 0 && (n = t.style.substring(-1 * a));
                                    var r = {
                                        name: t.originalProductName.split("#double;").join('"').split("&trade;").join("™"),
                                        url: "https://www.dillards.com/p/".concat(t.productNameForURL, "/").concat(t.productId),
                                        description: t.longDescription,
                                        in_stock: 1,
                                        manufacturer_id: n,
                                        image_url: "https:".concat(t.fullImage.imageName),
                                        brand_name: t.brandNameForTitle,
                                        variants: []
                                    };
                                    $.each(t.itemInfo, (function() {
                                        var e = this.upc,
                                            a = !1;
                                        if (null != e && "000" === this.upc.substring(0, 3) && (a = !0), a) {
                                            var n = 12 - e.length;
                                            n < 0 && (e = e.substring(-1 * n))
                                        } else {
                                            var o;
                                            for (e = "", o = 0; o < this.upc.length; o++)
                                                if (0 != this.upc.charAt(o)) {
                                                    e = this.upc.substring(o);
                                                    break
                                                }
                                        }
                                        var i = {
                                            page_id_variant: "".concat(t.partNumber, "-").concat(this.sku),
                                            price: this.offerPrice,
                                            imageURL: "https://dimg.dillards.com/is/image/DillardsZoom/zoom/".concat(t.productNameForURL, "/").concat(this.image, ".jpg"),
                                            upc: e
                                        };
                                        r.variants.push(i)
                                    }));
                                    var o = "";
                                    if (t.superCat && t.superCat.length > 0) {
                                        if (o += t.superCat.split("&#039;").join("'"), t.personalization && t.personalization.catGroups && t.personalization.catGroups.length > 0)
                                            for (var i = 0; i < t.personalization.catGroups.length; i++) t.personalization.catGroups[i] != t.superCat && o.length + t.personalization.catGroups[i].length < 200 && (o += " > ".concat(t.personalization.catGroups[i]));
                                        r.category_name = o
                                    }
                                    var s = {};
                                    window.POWERREVIEWS ? this.powerReviewFeedless(t, r, s) : $.ajax({
                                        url: "https://ui.powerreviews.com/stable/4.0/ui.js",
                                        dataType: "script",
                                        cache: !0,
                                        success: function() {
                                            t && t.reviews && t.reviews.reviewURL && (t.salePage && "true" == t.salePage && (t.reviews.reviewURL += "&salePage=true"), e.powerReviewFeedless(t, r, s))
                                        }
                                    })
                                }
                            } catch (t) {
                                var c = '<div class="hidden power-reviews-error-tracking">caught exception in powerReviewRender:-' + t + "</div>";
                                $("#content_wrapper").append(c)
                            }
                        }
                    }, {
                        key: "powerReviewFeedless",
                        value: function(t, e, a) {
                            window.POWERREVIEWS.stylesLoaded = !0;
                            var n = {
                                api_key: this.props.passedAppFunctions.wasParms.powerReviewsAPIKey,
                                locale: "en_US",
                                merchant_group_id: this.props.passedAppFunctions.wasParms.powerReviewsMerchantGroupId,
                                merchant_id: this.props.passedAppFunctions.wasParms.powerReviewsMerchantId,
                                page_id: t.partNumber,
                                review_wrapper_url: t.reviews.reviewURL,
                                product: e,
                                style_sheet: !1,
                                ENABLE_CONTENT_COLLECTION_MODAL: !1
                            };
                            POWERREVIEWS.display.render(n)
                        }
                    }, {
                        key: "thisBrandInMyFavorites",
                        value: function() {
                            var t = !1;
                            if ("-1002" != this.props.passedAppFunctions.myDillardsInfo.userInformation.userId) {
                                var e = this.props.contentData.brandNameForTitle,
                                    a = this.props.contentData.personalization && this.props.contentData.personalization.superCatId || this.props.parentPersonalization && this.props.parentPersonalization.superCatId || "";
                                try {
                                    var n = localStorage["myFavoritespersonalization" + a];
                                    if (e && a && n)
                                        for (var r = n.split("|"), o = 0; o < r.length; o++) e == r[o].split("mfName:").join("").split("&amp;").join("&") && (t = !0)
                                } catch (t) {}
                            }
                            return t
                        }
                    }, {
                        key: "returnItemColorOrTrueIfMonogramEligible",
                        value: function() {
                            var t, e, a = 0,
                                n = !1;
                            if (this.validateForm(this.state.attributeState)) {
                                for (; a < this.state.attributeState.attributes.length; a++) void 0 === t ? t = this.state.attributeState.attributes[a] : e = this.state.attributeState.attributes[a];
                                if (2 == a && t.selectedValueInformation.othersMonogram)
                                    for (var r = t.selectedValueInformation.othersMonogram.split("|"), o = 0; o < r.length; o++) e.selectedValueInformation.name == r[o].split(":")[0] && "true" == r[o].split(":")[1] && (n = "Color" != e.attrName || e.selectedValueInformation.name);
                                else 1 == a && t.selectedValueInformation.singleAttrMonogram ? "true" == t.selectedValueInformation.singleAttrMonogram && (n = "Color" != t.attrName || t.selectedValueInformation.name) : 0 == a && this.props.contentData.monogramEligible && "true" == this.props.contentData.monogramEligible && (n = !0)
                            }
                            return n
                        }
                    }, {
                        key: "thisItemMonogramEligible",
                        value: function() {
                            var t, e, a = 0,
                                n = !1;
                            if (this.validateForm(this.state.attributeState)) {
                                for (; a < this.state.attributeState.attributes.length; a++) void 0 === t ? t = this.state.attributeState.attributes[a] : e = this.state.attributeState.attributes[a];
                                if (2 == a && t.selectedValueInformation.othersMonogram)
                                    for (var r = t.selectedValueInformation.othersMonogram.split("|"), o = 0; o < r.length; o++) e.selectedValueInformation.name == r[o].split(":")[0] && "true" == r[o].split(":")[1] && (n = !0);
                                else 1 == a && t.selectedValueInformation.singleAttrMonogram ? "true" == t.selectedValueInformation.singleAttrMonogram && (n = !0) : 0 == a && this.props.contentData.monogramEligible && "true" == this.props.contentData.monogramEligible && (n = !0)
                            }
                            return n
                        }
                    }, {
                        key: "passedFunctions",
                        value: function() {
                            var t;
                            return b(t = {
                                parentState: JSON.parse(JSON.stringify(this.state)),
                                currencySymbol: this.currencySymbol,
                                priceConvert: this.priceConvert,
                                updateQuantity: this.updateQuantity,
                                forceQuantity: this.forceQuantity,
                                updateAttribute: this.updateAttribute,
                                updateAttributeFromAltClick: this.updateAttributeFromAltClick,
                                updateAttributeFromAltSwipe: this.updateAttributeFromAltSwipe,
                                ajaxAddToBag: this.ajaxAddToBag,
                                ajaxAddToWishlist: this.ajaxAddToWishlist,
                                ajaxAddToBrandFavorites: this.ajaxAddToBrandFavorites,
                                flatSizesPriceObject: this.flatSizesPriceObject,
                                colorNotAvailable: this.state.colorNotAvailable,
                                closeWishListMessage: this.closeWishListMessage,
                                mainImageClicked: this.mainImageClicked,
                                zoomedImageClose: this.zoomedImageClose,
                                ajaxShareProductModal: this.ajaxShareProductModal,
                                ajaxAddToRegistry: this.ajaxAddToRegistry,
                                shouldShowFreeShipping: this.shouldShowFreeShipping,
                                willHaveFlatAttribute: this.willHaveFlatAttribute,
                                thisBrandInMyFavorites: this.thisBrandInMyFavorites,
                                forceBundleRender: this.forceBundleRender,
                                addErrorVisuals: this.addErrorVisuals,
                                addToBagClicked: this.addToBagClicked,
                                formNotValid: this.formNotValid,
                                returnItemColorOrTrueIfMonogramEligible: this.returnItemColorOrTrueIfMonogramEligible,
                                ajaxMonogramPersonalization: this.ajaxMonogramPersonalization,
                                showReviews: this.showReviews,
                                thisItemMonogramEligible: this.thisItemMonogramEligible
                            }, "ajaxMonogramPersonalization", this.ajaxMonogramPersonalization), b(t, "roundUp", this.roundUp), b(t, "setCurrentOSSAccessories", this.setCurrentOSSAccessories), b(t, "setCurrentCollection", this.setCurrentCollection), b(t, "flatSizeResize", this.flatSizeResize), b(t, "checkForErrorsRegistry", this.checkForErrorsRegistry), b(t, "checkForErrorsWishlist", this.checkForErrorsWishlist), b(t, "checkForErrors", this.checkForErrors), b(t, "hideCheckForErrors", this.hideCheckForErrors), b(t, "checkForErrorsItemAttr", this.checkForErrorsItemAttr), b(t, "checkForErrorsQV", this.checkForErrorsQV), b(t, "checkForErrorsMonogram", this.checkForErrorsMonogram), b(t, "updateLiveReviewCounts", this.updateLiveReviewCounts), b(t, "focusFirstAttrError", this.focusFirstAttrError), b(t, "updateSubscriptionFrequency", this.updateSubscriptionFrequency), b(t, "loadSyndigo", this.loadSyndigo), t
                        }
                    }]) && p(e.prototype, a), n && p(e, n), o
                }(r.a.Component);
            e.a = v
        },
        456: function(t, e, a) {},
        457: function(t, e, a) {},
        458: function(t, e, a) {},
        459: function(t, e, a) {},
        460: function(t, e, a) {}
    }
]);
//# sourceMappingURL=0d40a9395644-6.js.map