(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7], {
        312: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return h
            }));
            var n = o(0),
                r = o.n(n),
                a = o(5),
                i = o.n(a),
                s = o(313);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
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
                    var o, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return d(this, o)
                }
            }

            function d(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? f(t) : e
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
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
                    }), e && l(t, e)
                }(d, t);
                var e, o, n, a = p(d);

                function d(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), (e = a.call(this, t)).state = {
                        zone: "",
                        rec_attributes: [],
                        target_header_txt: "",
                        priceNumber: ""
                    }, e.setRecState = e.setRecState.bind(f(e)), e.forceRerender = e.forceRerender.bind(f(e)), e.forceRenderRecentlyViewed = e.forceRenderRecentlyViewed.bind(f(e)), e.forceRerenderNewArrivals = e.forceRerenderNewArrivals.bind(f(e)), e.mapArrayToObject = e.mapArrayToObject.bind(f(e)), e
                }
                return e = d, (o = [{
                    key: "setRecState",
                    value: function(t, e, o, n, r, a, i, s, c, u) {
                        this.state.didUnmount || (a && a.length > 0 && this.setState({
                            zone: e,
                            rec_attributes: a,
                            target_header_txt: s
                        }), this.props.getRecAttributes((this.state.rec_attributes || []).length))
                    }
                }, {
                    key: "mapArrayToObject",
                    value: function(t) {
                        for (var e = [], o = 0; o < t.length; o++) e.push({
                            productName: t[o][0],
                            productUrl: t[o][1],
                            productImg: "https://dimg.dillards.com/is/image/DillardsZoom/productRec/".concat(t[o][13], "/").concat(t[o][2].split("dimg").length > -1 ? t[o][2].split("/")[t[o][2].split("/").length - 1].split(".jpg").join("") : t[o][2], ".jpg"),
                            shipInternational: t[o][8],
                            productCatentryId: t[o][9],
                            productBrandName: t[o][12],
                            keyword: t[o][13]
                        });
                        return e
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(t, e) {
                        return !(!this.props.contentData || this.props.contentData.productId == t.contentData.productId) || !_.isEqual(e, this.state)
                    }
                }, {
                    key: "forceRenderRecentlyViewed",
                    value: function() {
                        var t = [];
                        try {
                            t = JSON.parse(localStorage.getItem("recentlyViewed") || []);
                            for (var e = 0; e < t.length; e++) this.props.contentData && this.props.contentData.productId && t[e][9] == this.props.contentData.productId && t.splice(e, 1)
                        } catch (t) {
                            localStorage.removeItem("recentlyViewed")
                        }
                        this.forceRerender(t)
                    }
                }, {
                    key: "forceRerenderNewArrivals",
                    value: function() {
                        var t = this;
                        try {
                            var e = {
                                method: "get",
                                url: "/data/personalizedProducts?superCatId=".concat(this.props.superCat, "&mfName=").concat(this.props.mfName, "&orderBy=6")
                            };
                            i()(e).then((function(e) {
                                if (!t.state.didUnmount) {
                                    var o = {};
                                    try {
                                        o = "object" == c(e.data.contentData) ? e.data.contentData : JSON.parse(e.data.contentData), cmdRespIsJSON = !0
                                    } catch (t) {}
                                    t.forceRerender(o.products)
                                }
                            }))
                        } catch (t) {
                            console.log(t)
                        }
                    }
                }, {
                    key: "forceRerender",
                    value: function(t) {
                        this.setState({
                            rec_attributes: t
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.state.didUnmount = !1, (this.props.zoneName || "PDPZ2_RV" == this.props.zone) && Modernizr.localstorage ? ($(window).on("recentlyViewedUpdate", this.forceRenderRecentlyViewed), this.state.zone = "PDPZ2_RV", this.forceRenderRecentlyViewed()) : this.props.zoneName || "HMPZ3" == this.props.zone ? (this.state.zone = "HMPZ3_P", this.forceRerenderNewArrivals()) : this.props.zoneName || "TopSellerSuperCats" == this.props.zone ? this.forceRerender(this.props.products) : (this.makeRecRequest(this.props.zoneName || this.props.zone, this.props.zoneModifier || this.props.categoryId || "", this.props.attribute || ""), this.props.getRecAttributes((this.state.rec_attributes || []).length))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.getRecAttributes((this.state.rec_attributes || []).length)
                    }
                }, {
                    key: "makeRecRequest",
                    value: function(t, e, o) {
                        cmRecRequest(t, this.props.productId || "", e, "", "", o || ""), window["".concat(t, "_zp")] = this.setRecState, cmDisplayRecs()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window["".concat((this.props.zoneName || this.props.zone, this.props.zoneModifier || this.props.categoryId, this.props.topBrand || this.props.attribute || ""), "_zp")] = function() {}, $(window).off("recentlyViewedUpdate", this.forceRerender), this.state.didUnmount = !0
                    }
                }, {
                    key: "render",
                    value: function() {
                        return "true" == this.props.passedAppFunctions.wasParms.useIBMProductRecommendations ? r.a.createElement(s.a, {
                            productsPerRow: this.props.productsPerRow,
                            rows: this.props.rows,
                            scrollable: this.props.scrollable,
                            title: this.props.title,
                            showProductTitle: this.props.showProductTitle,
                            cmsp: this.props.cmsp,
                            products: this.mapArrayToObject(this.state.rec_attributes),
                            passedAppFunctions: this.props.passedAppFunctions,
                            contentData: this.props.contentData,
                            zone: this.props.zoneName || this.props.zone
                        }) : null
                    }
                }]) && u(e.prototype, o), n && u(e, n), d
            }(r.a.Component)
        },
        313: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return z
            }));
            var n = o(0),
                r = o.n(n),
                a = o(129),
                i = o(42),
                s = o.n(i);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u() {
                return (u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f(t, e, o) {
                return e && d(t.prototype, e), o && d(t, o), t
            }

            function m(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function g(t) {
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
                    var o, n = b(t);
                    if (e) {
                        var r = b(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return y(this, o)
                }
            }

            function y(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? v(t) : e
            }

            function v(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function b(t) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var w = function(t) {
                    m(o, t);
                    var e = g(o);

                    function o() {
                        return p(this, o), e.apply(this, arguments)
                    }
                    return f(o, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
                                onClick: this.props.onClick,
                                className: this.props.className,
                                type: "button",
                                "data-role": "none"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Previous")))
                        }
                    }]), o
                }(n.Component),
                S = function(t) {
                    m(o, t);
                    var e = g(o);

                    function o() {
                        return p(this, o), e.apply(this, arguments)
                    }
                    return f(o, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
                                onClick: this.props.onClick,
                                className: this.props.className,
                                type: "button",
                                "data-role": "none"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Next")))
                        }
                    }]), o
                }(n.Component),
                z = function(t) {
                    m(o, t);
                    var e = g(o);

                    function o(t) {
                        var n;
                        return p(this, o), l(v(n = e.call(this, t)), "lazyLoadCarousel", (function() {
                            setTimeout((function() {
                                var t = [].slice.call(document.querySelectorAll(".productRecs"));
                                if (null !== t) {
                                    t.forEach((function(t) {
                                        if (t.getBoundingClientRect().top <= window.innerHeight + 400 && t.getBoundingClientRect().bottom >= 0) {
                                            var e = [].slice.call(t.querySelectorAll(".slick-slide img"));
                                            e.forEach((function(t) {
                                                void 0 !== t.dataset.original && (t.src = t.dataset.original, e = e.filter((function(e) {
                                                    return e !== t
                                                })))
                                            }))
                                        }
                                    }))
                                }
                            }), 0)
                        })), l(v(n), "getTitle", (function() {
                            return n.props.title ? n.props.title.trim() : ""
                        })), n.state = {
                            showPartialImages: !1
                        }, n.checkMonatateAfterRender = n.checkMonatateAfterRender.bind(v(n)), n
                    }
                    return f(o, [{
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
                            this.lazyLoadCarousel, window.addEventListener("scroll", _.debounce(this.lazyLoadCarousel, 400)), window.addEventListener("load", this.checkMonatateAfterRender)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.lazyLoadCarousel, window.addEventListener("scroll", _.debounce(this.lazyLoadCarousel, 400))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {
                            this.lazyLoadCarousel, window.addEventListener("scroll", _.debounce(this.lazyLoadCarousel, 400))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.lazyLoadCarousel), window.removeEventListener("load", this.checkMonatateAfterRender)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.getTitle().replace(/\s+/g, "-").toLowerCase();
                            if ("tablet" == this.props.passedAppFunctions.siteFormat) {
                                var e = this.props.productsPerRow;
                                (this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage) && (e = this.props.productsPerRow + .5);
                                var o = {
                                    dots: !1,
                                    infinite: !1,
                                    vertical: !1,
                                    speed: 500,
                                    slidesToShow: e,
                                    slidesToScroll: 1,
                                    swipeToSlide: !0,
                                    swipe: !0,
                                    lazyLoad: !0,
                                    arrows: !1,
                                    rows: this.props.rows,
                                    slidesPerRow: 1,
                                    zone: this.props.zoneName || this.props.zone,
                                    afterChange: function(t) {
                                        var e = [].slice.call(document.querySelectorAll(".productRecs"));
                                        null !== e && e.forEach((function(t) {
                                            var e = [].slice.call(t.querySelectorAll(".slick-slide img"));
                                            e.forEach((function(t) {
                                                void 0 !== t.dataset.original && (t.src = t.dataset.original, e = e.filter((function(e) {
                                                    return e !== t
                                                })))
                                            }))
                                        }))
                                    }
                                }
                            } else if ("mobile" == this.props.passedAppFunctions.siteFormat) {
                                e = 2;
                                (this.state.showPartialImages || this.props.passedAppFunctions.testFlags.partialImage) && (e = 2.5);
                                o = {
                                    dots: !1,
                                    infinite: !1,
                                    vertical: !1,
                                    speed: 500,
                                    slidesToShow: e,
                                    slidesToScroll: 2,
                                    swipe: this.props.scrollable,
                                    lazyLoad: !0,
                                    arrows: this.props.scrollable,
                                    zone: this.props.zoneName || this.props.zone,
                                    afterChange: function(t) {
                                        var e = [].slice.call(document.querySelectorAll(".productRecs"));
                                        null !== e && e.forEach((function(t) {
                                            var e = [].slice.call(t.querySelectorAll(".slick-slide img"));
                                            e.forEach((function(t) {
                                                void 0 !== t.dataset.original && (t.src = t.dataset.original, e = e.filter((function(e) {
                                                    return e !== t
                                                })))
                                            }))
                                        }))
                                    }
                                }
                            } else o = {
                                dots: !1,
                                infinite: !1,
                                vertical: !1,
                                speed: 500,
                                slidesToShow: this.props.productsPerRow,
                                slidesToScroll: 1,
                                swipe: this.props.scrollable,
                                lazyLoad: !0,
                                arrows: this.props.scrollable && this.props.products.length > this.props.productsPerRow,
                                prevArrow: r.a.createElement(w, null),
                                nextArrow: r.a.createElement(S, null),
                                rows: this.props.rows,
                                slidesPerRow: 1,
                                zone: this.props.zoneName || this.props.zone,
                                afterChange: function(t) {
                                    var e = [].slice.call(document.querySelectorAll(".productRecs"));
                                    null !== e && e.forEach((function(t) {
                                        var e = [].slice.call(t.querySelectorAll(".slick-slide img"));
                                        e.forEach((function(t) {
                                            void 0 !== t.dataset.original && (t.src = t.dataset.original, e = e.filter((function(e) {
                                                return e !== t
                                            })))
                                        }))
                                    }))
                                }
                            };
                            return r.a.createElement("aside", {
                                className: "productRecs ".concat(o.arrows ? "has-arrows" : "", " ").concat(this.props.contentData && "TopCategoriesDisplay" == this.props.contentData.parentFile ? "splashProdRecs" : "")
                            }, r.a.createElement("div", {
                                id: "product-carousel",
                                className: this.getTitle().replace(/\s+/g, "-").toLowerCase()
                            }, this.props.products.length > 0 ? [this.getTitle() ? r.a.createElement("h2", {
                                className: "".concat(0 == this.getTitle().length ? "horzRecNoBorder" : "pr-title-wrapper"),
                                key: "0"
                            }, r.a.createElement("span", {
                                className: "pr-title"
                            }, this.getTitle())) : null, r.a.createElement(s.a, u({}, o, {
                                key: "1"
                            }), this.props.products && this.props.products.length ? this.props.products.map((function(e, o) {
                                return t.props.contentData && t.props.contentData.productId && t.props.contentData.productId == e.productCatentryId ? null : r.a.createElement("div", {
                                    className: "item",
                                    key: e.productCatentryId
                                }, r.a.createElement("div", null, r.a.createElement(a.a, {
                                    to: {
                                        pathname: e.productUrl,
                                        state: {
                                            categoryId: t.props.zone ? t.props.zone : t.props.zoneName ? t.props.zoneName : "",
                                            qv: -1 == e.productName.toLowerCase().indexOf("chanel") && -1 == e.productName.toLowerCase().indexOf("egift")
                                        }
                                    },
                                    manual_cm_sp: t.props.cmsp || null
                                }, r.a.createElement("img", {
                                    src: "",
                                    className: "lazy-extended",
                                    "data-original": e.productImg,
                                    alt: e.productName.split("&trade;").join("™")
                                }), t.props.showProductTitle ? r.a.createElement("div", {
                                    className: "item-title"
                                }, e.productBrandName.split("#double;").join('"').split("&quot;").join('"')) : null)))
                            })) : "")] : null))
                        }
                    }]), o
                }(r.a.Component)
        },
        325: function(t, e, o) {
            "use strict";
            var n = o(0),
                r = o.n(n),
                a = o(42),
                i = o.n(a);

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
                        var o = arguments[e];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function l(t, e) {
                return (l = Object.setPrototypeOf || function(t, e) {
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
                    var o, n = m(t);
                    if (e) {
                        var r = m(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return d(this, o)
                }
            }

            function d(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? f(t) : e
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            n.Component
        },
        427: function(t, e, o) {
            "use strict";
            var n = o(1),
                r = o.n(n),
                a = o(0),
                i = o.n(a),
                s = o(428),
                c = o.n(s);

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, e);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === o && t.constructor && (o = t.constructor.name);
                    if ("Map" === o || "Set" === o) return Array.from(t);
                    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return p(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
                return n
            }

            function d(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(o), !0).forEach((function(e) {
                        w(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function m(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function h(t, e) {
                return (h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function g(t) {
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
                    var o, n = b(t);
                    if (e) {
                        var r = b(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return y(this, o)
                }
            }

            function y(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? v(t) : e
            }

            function v(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function b(t) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function w(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            var S = {
                    position: "relative",
                    zIndex: 1
                },
                z = {
                    position: "relative",
                    transitionProperty: "z-index",
                    width: "100%",
                    height: "100%"
                },
                R = {
                    position: "absolute",
                    top: 0
                },
                O = {
                    position: "absolute",
                    top: 0,
                    backgroundColor: "transparent",
                    backgroundRepeat: "no-repeat"
                },
                P = function(t, e) {
                    var o = !0;
                    return t.forEach((function(t, n) {
                        (t <= 0 || t >= e[n]) && (o = !1)
                    })), o
                },
                k = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && h(t, e)
                    }(a, t);
                    var e, o, n, r = g(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), w(v(e = r.call(this, t)), "updateZoomWrapperSize", (function() {
                            null !== e.zoomContainer && (e.zoomContainer.style.width = e.zoomContainer.offsetWidth + "px", e.zoomContainer.style.height = e.zoomContainer.offsetHeight + "px", e.zoomImg.style.width = e.zoomContainer.offsetWidth + "px", e.zoomImg.style.height = e.zoomContainer.offsetHeight + "px", e.setState({
                                baseImage: f(f({}, e.props.baseImage), {}, {
                                    width: parseInt(e.zoomContainer.style.width),
                                    height: parseInt(e.zoomContainer.style.height)
                                })
                            }))
                        })), w(v(e), "startZoom", (function(t, o) {
                            if (o && e.setState({
                                    calcMovementFromDrag: !0
                                }), ! function(t, e) {
                                    for (var o = 0; o < t.length; o++)
                                        if (t[o] !== e[o]) return !1;
                                    return !0
                                }(e.state.viewWindowPosition, t)) {
                                var n = e.props,
                                    r = n.baseImage.width,
                                    a = n.largeImage,
                                    i = a.width,
                                    s = a.height,
                                    c = [i, s],
                                    u = o ? t.map((function(t) {
                                        return t * (i / r)
                                    })) : t;
                                o && !P(u, c) && (l = c, u = u.map((function(t, e) {
                                    return Math.min(t, l[e])
                                }))), e.setState({
                                    viewWindowPosition: u,
                                    lastClickToZoomPosition: t,
                                    calcMovementFromDrag: o
                                })
                            }
                            var l;
                            e.setState({
                                zoomed: 1,
                                zoomLevel: e.state.defaultZoomLevel,
                                pageClickHandlersAreAdded: !0,
                                isStartingZoom: !0
                            }), setTimeout((function() {
                                e.addBodyClickHandlers(), e.setState({
                                    transitionZoomBackground: !1,
                                    isStartingZoom: !1
                                })
                            }), e.props.zoomTransitionTime)
                        })), w(v(e), "endZoom", (function(t) {
                            t.preventDefault(), t.stopPropagation();
                            var o = e.props.baseImage.width / e.props.largeImage.width;
                            e.removeBodyClickHandlers(), e.setState({
                                zoomed: 0,
                                zoomLevel: o,
                                pageClickHandlersAreAdded: !1,
                                transitionZoomBackground: !0,
                                isEndingZoom: !0
                            }), setTimeout((function() {
                                e.setState({
                                    isEndingZoom: !1
                                })
                            }), e.props.zoomTransitionTime)
                        })), w(v(e), "onZoomWindowTouchStart", (function(t) {
                            t.preventDefault(), t.stopPropagation(), t.targetTouches && e.setState({
                                isDragging: !0,
                                previousDragPosition: [t.targetTouches[0].clientX, t.targetTouches[0].clientY]
                            }), e.checkForTap()
                        })), w(v(e), "onTouchEnd", (function(t) {
                            e.state.listeningForSingleClick ? e.endZoom(t) : (t.stopPropagation(), t.preventDefault()), e.setState({
                                isDragging: !1
                            })
                        })), w(v(e), "addBodyClickHandlers", (function() {
                            document && document.querySelector && (e.bodyElement || (e.bodyElement = document.querySelector("body")), e.bodyClickHandlers.forEach((function(t) {
                                var o;
                                (o = e.bodyElement).addEventListener.apply(o, l(t))
                            })))
                        })), w(v(e), "removeBodyClickHandlers", (function() {
                            try {
                                document && document.querySelector && e.bodyClickHandlers.forEach((function(t) {
                                    var o;
                                    (o = e.bodyElement).removeEventListener.apply(o, l(t))
                                }))
                            } catch (t) {}
                        })), w(v(e), "calcBackgroundOffsetFromMouse", (function(t) {
                            if (!e.state.isDragging && t.nativeEvent) {
                                e.state.calcMovementFromDrag && e.setState({
                                    calcMovementFromDrag: !1
                                });
                                var o = t.nativeEvent,
                                    n = [o.offsetX, o.offsetY];
                                window.requestAnimationFrame((function() {
                                    e.setState({
                                        viewWindowPosition: n
                                    })
                                }))
                            }
                        })), w(v(e), "calcBackgroundOffsetFromKey", (function(t) {
                            console.log("KEYCODE")
                        })), w(v(e), "calcBackgroundOffsetFromDrag", (function(t) {
                            t.preventDefault(), t.stopPropagation(), e.state.calcMovementFromDrag || e.setState({
                                calcMovementFromDrag: !0
                            });
                            var o = e.state,
                                n = o.zoomLevel,
                                r = o.previousDragPosition,
                                a = o.viewWindowPosition,
                                i = e.props.largeImage,
                                s = [i.width, i.height];
                            if (t.targetTouches) {
                                var u = [t.targetTouches[0].clientX, t.targetTouches[0].clientY],
                                    l = 3 / (n * n),
                                    p = c()(a, u, r, (function(t, e, o) {
                                        return t + (o - e) * l
                                    }));
                                P(p, s) && window.requestAnimationFrame((function() {
                                    e.setState({
                                        viewWindowPosition: p,
                                        previousDragPosition: u
                                    })
                                }))
                            }
                        })), w(v(e), "checkForTap", (function() {
                            e.setState({
                                listeningForSingleClick: !0
                            }), setTimeout((function() {
                                return e.setState({
                                    listeningForSingleClick: !1
                                })
                            }), 200)
                        })), w(v(e), "pauseZoom", (function() {
                            return e.setState({
                                isCalculatingZoom: !0
                            })
                        })), w(v(e), "resumeZoom", (function() {
                            return e.setState({
                                isCalculatingZoom: !1
                            })
                        })), w(v(e), "handleZoom", (function(t) {
                            t.preventDefault();
                            var o = e.state.zoomLevel;
                            !e.state.isCalculatingZoom && o <= 2 && o >= 0 && (("pinchout" === t.type || t.deltaY < 0) && o < 2 ? e.zoom(.05) : ("pinchin" === t.type || t.deltaY > 0) && o > 1 && e.zoom(-.05))
                        })), w(v(e), "zoom", (function(t) {
                            e.pauseZoom();
                            var o = Math.round(100 * (e.state.zoomLevel + t)) / 100;
                            e.setState({
                                zoomLevel: o
                            }, e.resumeZoom)
                        })), e.state = {
                            zoomed: 0,
                            zoomLevel: t.baseImage.width / t.largeImage.width,
                            defaultZoomLevel: 1.2,
                            viewWindowPosition: [0, 0],
                            dragFocalPoint: [0, 0],
                            lastClickToZoomPosition: [-1, -1],
                            isCalculatingZoom: !1,
                            isDragging: !1,
                            calcMovementFromDrag: !1,
                            pageClickHandlersAreAdded: !1,
                            transitionZoomBackground: !0,
                            isStartingZoom: !1,
                            isEndingZoom: !1,
                            baseImage: f(f({}, e.props.baseImage), {}, {
                                width: e.props.baseImage.width,
                                height: e.props.baseImage.height
                            })
                        }, e.calcBackgroundOffsetFromKey = e.calcBackgroundOffsetFromKey.bind(v(e)), e
                    }
                    return e = a, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            window.addEventListener("load", this.updateZoomWrapperSize), window.addEventListener("resize", _.debounce((function() {
                                t.updateZoomWrapperSize()
                            }), 300)), this.bodyClickHandlers = [
                                ["click", this.endZoom],
                                ["touchstart", this.checkForTap],
                                ["touchend", this.onTouchEnd]
                            ];
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function() {}
                                });
                                document.querySelector("body").addEventListener("test", null, e)
                            } catch (t) {}
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("load", this.updateZoomWrapperSize), window.removeEventListener("resize", this.updateZoomWrapperSize), this.removeBodyClickHandlers()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this,
                                e = this.props,
                                o = e.baseImage,
                                n = e.largeImage,
                                r = (e.thumbnailImage, e.displayMap, e.zoomTransitionTime),
                                a = (e.mapBorderColor, e.mapScaleFactor, this.state),
                                s = a.zoomed,
                                c = a.viewWindowPosition,
                                u = a.zoomLevel,
                                l = a.calcMovementFromDrag,
                                p = a.transitionZoomBackground,
                                d = a.isStartingZoom,
                                m = a.listeningForSingleClick,
                                h = a.isEndingZoom,
                                g = a.isTouch,
                                y = this.state.baseImage,
                                v = y.width,
                                b = y.height,
                                w = n.width,
                                P = n.height,
                                k = l ? [w, P] : [v, b],
                                E = c.map((function(t, e) {
                                    return Math.round(t / k[e] * 1e3) / 10
                                }));
                            return i.a.createElement("div", {
                                "data-name": "wrapper",
                                style: f(f({}, S), {}, {
                                    width: v,
                                    height: b,
                                    cursor: "".concat(s ? "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 48.92 47.58'><title>zoom-out</title><g data-name='Layer 2'><g data-name='Layer 1'><path d='M48.6,45.85,32.28,30.5a18.56,18.56,0,1,0-1.4,1.43L47.23,47.31a1,1,0,1,0,1.37-1.46ZM2,18.42A16.42,16.42,0,1,1,18.42,34.83,16.44,16.44,0,0,1,2,18.42Z'/><path d='M27.26,17.92H9a.89.89,0,1,0,0,1.79H27.26a.89.89,0,1,0,0-1.79Z'/></g></g></svg>\")" : "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 48.92 47.58'><g data-name='Layer 2'><g data-name='Layer 1'><path d='M48.6,45.85,32.28,30.5a18.56,18.56,0,1,0-1.4,1.43L47.23,47.31a1,1,0,1,0,1.37-1.46ZM2,18.42A16.42,16.42,0,1,1,18.42,34.83,16.44,16.44,0,0,1,2,18.42Z'/><path d='M27.26,17.92H9a.89.89,0,1,0,0,1.79H27.26a.89.89,0,1,0,0-1.79Z'/><path d='M19,27.82V9.59a.89.89,0,0,0-1.79,0V27.82a.89.89,0,1,0,1.79,0Z'/></g></g></svg>\")", ", pointer")
                                }),
                                onMouseDown: function(e) {
                                    var o;
                                    "which" in (e = e || window.event) ? o = 3 == e.which: "button" in e && (o = 2 == e.button), o || s || g || t.startZoom([e.nativeEvent.offsetX, e.nativeEvent.offsetY], !1), t.calcBackgroundOffsetFromKey
                                },
                                onTouchStart: function(e) {
                                    s || (e.preventDefault(), e.stopPropagation(), t.setState({
                                        listeningForSingleClick: !0,
                                        isTouch: !0
                                    }), setTimeout((function() {
                                        t.setState({
                                            listeningForSingleClick: !1
                                        })
                                    }), 200), setTimeout((function() {
                                        t.setState({
                                            isTouch: !1
                                        })
                                    }), 2e3))
                                },
                                onTouchEnd: function(e) {
                                    if (e.preventDefault(), e.stopPropagation(), !s && m && !h) {
                                        var o = e.target.getBoundingClientRect(),
                                            n = o.x,
                                            r = o.y;
                                        t.startZoom([e.changedTouches[0].clientX - (n || 0), e.changedTouches[0].clientY - (r || 0)], !0)
                                    }
                                },
                                onMouseLeave: function(e) {
                                    1 != t.state.zoomed || d || t.endZoom(e)
                                }
                            }, i.a.createElement("img", {
                                id: "main-product-image",
                                src: o.src,
                                alt: o.alt,
                                style: f(f({}, z), {}, {
                                    zIndex: s ? -1 : 1,
                                    transitionDelay: "".concat(r, "ms")
                                })
                            }), i.a.createElement("div", {
                                "data-name": "zoom-wrapper",
                                id: "zoom-wrapper",
                                ref: function(e) {
                                    t.zoomContainer = e
                                },
                                onMouseMove: this.calcBackgroundOffsetFromMouse,
                                style: f(f({}, R), {}, {
                                    width: v,
                                    height: b,
                                    zIndex: 100 * s
                                })
                            }, i.a.createElement("div", {
                                "data-name": "zoom-image",
                                onClick: function(e) {
                                    s && !d && t.endZoom(e)
                                },
                                ref: function(e) {
                                    t.zoomImg = e
                                },
                                style: f(f({
                                    width: v,
                                    height: b,
                                    zIndex: 110 * s,
                                    backgroundImage: "url(".concat(s ? n.src.split("/mainProduct/").join("/zoom/") : n.src, ")"),
                                    backgroundPosition: E.map((function(t) {
                                        return "".concat(t, "%")
                                    })).join(" "),
                                    backgroundSize: "".concat(Math.round(w * u), "px ").concat(Math.round(P * u), "px")
                                }, O), {}, {
                                    transition: p ? "background-size ".concat(r, "ms ease-in-out") : "none"
                                })
                            }), this.state.zoomed ? i.a.createElement("div", {
                                className: "zoom-close"
                            }, i.a.createElement("span", null, "×")) : ""))
                        }
                    }]) && m(e.prototype, o), n && m(e, n), a
                }(a.Component),
                E = {
                    alt: r.a.string.isRequired,
                    src: r.a.string.isRequired
                },
                C = f(f({}, E), {}, {
                    width: r.a.number.isRequired,
                    height: r.a.number.isRequired
                });
            k.propTypes = {
                baseImage: r.a.shape(C).isRequired,
                displayMap: r.a.bool,
                largeImage: r.a.shape(C).isRequired,
                mapBorderColor: r.a.string,
                mapScaleFactor: r.a.number,
                thumbnailImage: r.a.shape(E),
                zoomTransitionTime: r.a.number
            }, k.defaultProps = {
                zoomTransitionTime: 300,
                displayMap: !0,
                mapBorderColor: "grey",
                mapScaleFactor: .2,
                thumbnailImage: {
                    alt: "",
                    src: ""
                }
            }, e.a = k
        }
    }
]);
//# sourceMappingURL=0d40a9395644-7.js.map