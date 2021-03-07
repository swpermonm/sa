(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [16], {
        117: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(128),
                s = n(119),
                i = n(121),
                c = n(57),
                l = n(14),
                u = n.n(l),
                p = n(122),
                d = n(20),
                m = n(123),
                h = n(2);

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function g(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), e
            }

            function b(e, t, n) {
                return (b = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var a = w(e, t);
                    if (a) {
                        var r = Object.getOwnPropertyDescriptor(a, t);
                        return r.get ? r.get.call(n) : r.value
                    }
                })(e, t, n || e)
            }

            function w(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = A(e)););
                return e
            }

            function E(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                var t = I();
                return function() {
                    var n, a = A(e);
                    if (t) {
                        var r = A(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return D(this, n)
                }
            }

            function D(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? k(e) : t
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function I() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function A(e) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n(267);
            var O = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopProductDetail"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6), n.e(7), n.e(8), n.e(9), n.e(21)]).then(n.bind(null, 140))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 140
                    }
                }),
                F = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopProductDisplayEcard"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 135))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 135
                    }
                }),
                C = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopLayouts"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4), n.e(19)]).then(n.bind(null, 138))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 138
                    }
                }),
                M = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopStoreDetail"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(23).then(n.bind(null, 145))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 145
                    }
                }),
                N = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopStoreHome"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(13).then(n.bind(null, 136))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 136
                    }
                }),
                R = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopChangeCountry"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(10).then(n.bind(null, 61))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 61
                    }
                }),
                L = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopContactUs"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(11).then(n.bind(null, 62))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 62
                    }
                }),
                P = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "Views-Shared-Content-StorePurchaseReturns-StorePurchaseReturns"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(1), n.e(15)]).then(n.bind(null, 63))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 63
                    }
                }),
                T = Object(h.a)({
                    resolved: {},
                    chunkName: function() {
                        return "Views-Shared-Content-Member-Subscriptions"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(0), n.e(1), n.e(14)]).then(n.bind(null, 60))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 60
                    }
                }),
                x = function(e) {
                    E(n, e);
                    var t = S(n);

                    function n(e) {
                        return y(this, n), t.call(this, e)
                    }
                    return g(n, [{
                        key: "passedAppFunctionsWithChunks",
                        value: function() {
                            var e = b(A(n.prototype), "passedAppFunctions", this).call(this);
                            return e.chunks = {
                                Layouts: C,
                                ProductDetail: O,
                                ProductDisplayEcard: F,
                                StoreDetail: M,
                                StoreHome: N,
                                ChangeCountry: R,
                                ContactUs: L,
                                StorePurchaseReturns: P,
                                Subscriptions: T
                            }, e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                id: "app_wrapper",
                                className: "".concat(this.props.initialState.siteFormat, "Page")
                            }, r.a.createElement(l.Helmet, {
                                meta: [{
                                    charset: "utf-8"
                                }],
                                title: "Dillards.com",
                                link: [{
                                    rel: "canonical",
                                    href: "https://www.dillards.com"
                                }]
                            }), "US" != this.state.country ? r.a.createElement("style", {
                                type: "text/css"
                            }, "\n                  .hide-when-international {\n                    display:none!important;\n                  }\n                  .show-when-international {\n                    display:block;\n                  }\n                ") : r.a.createElement("style", {
                                type: "text/css"
                            }, "\n                  .show-when-international {\n                    display:none!important;\n                  }\n                "), r.a.createElement(p.a, {
                                passedAppFunctions: this.passedAppFunctions(),
                                contentData: this.state.contentData
                            }, r.a.createElement(o.a, {
                                headerData: this.state.headerFooterData,
                                myDillardsInfo: this.state.myDillardsInfo,
                                passedAppFunctions: this.passedAppFunctions(),
                                siteFormat: this.props.initialState.siteFormat
                            })), r.a.createElement(d.a, {
                                passedAppFunctions: this.passedAppFunctions(),
                                contentData: this.state.contentData,
                                quickViewData: this.state.quickViewData
                            }, r.a.createElement(s.a, {
                                contentData: this.state.contentData,
                                quickViewData: this.state.quickViewData,
                                passedAppFunctions: this.passedAppFunctionsWithChunks()
                            })), r.a.createElement(m.a, {
                                passedAppFunctions: this.passedAppFunctions(),
                                contentData: this.state.contentData
                            }, r.a.createElement(i.a, {
                                footerData: this.state.headerFooterData,
                                passedAppFunctions: this.passedAppFunctions()
                            })))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/) ? $("html").addClass("internet-explorer") : /Edge/.test(navigator.userAgent) ? $("html").addClass("microsoft-edge") : navigator.userAgent.indexOf("Firefox") > -1 && $("html").addClass("firefox"), setTimeout((function() {
                                var e = $(".panel-group").find(".panel-title").find("a");
                                $(".panel-collapse");
                                $.each(e, (function() {
                                    e.off("click.panel"), e.on("click.panel", (function(e) {
                                        e.stopPropagation(), $(this).hasClass("collapsed") ? ($(this).removeClass("collapsed"), $(this).parents(".panel-default").find(".panel-collapse").removeClass("collapse")) : ($(this).addClass("collapsed"), $(this).parents(".panel-default").find(".panel-collapse").addClass("collapse"))
                                    }))
                                })), $(".footer-top-link-section.footer-closed").off("click.openFooter"), $(".footer-top-link-section.footer-closed").on("click.openFooter", (function() {
                                    $(this).toggleClass("footer-open")
                                }))
                            }), 400), this.bindPreloadRequiredChunk(["/p/:name/:productId", "/p/:name/:productId/outfit", "/p/:name/:productId/sale"].sort().join("|"), O), this.bindPreloadRequiredChunk(["/brand/:manufacturer", "/brand/:manufacturer/:categoryName", "/brand/:manufacturer/:categoryName/:pathModifier", "/c/:pathToken", "/c/:pathToken/:pathModifier", "/c/:pathToken/:pathModifier/:color", "/search-term/:searchTerm", "/search-term/:searchTerm/:categoryName", "/search-term/:searchTerm/:categoryName/:pathModifier", "/chanel/c/:pathToken", "/"].sort().join("|"), C), this.bindPreloadRequiredChunk("ecard", F), this.bindPreloadRequiredChunk("/changecountry", R), this.bindPreloadRequiredChunk("/contactus", L), this.bindPreloadRequiredChunk("/returns", P), this.bindPreloadRequiredChunk("/member/subscriptions", T), this.bindPreloadRequiredChunk("/stores/:name/:storeNum", M), this.bindPreloadRequiredChunk(["/stores", "/stores/:stateName"].sort().join("|"), N), b(A(n.prototype), "componentDidMount", this).call(this)
                        }
                    }]), n
                }(c.a);
            t.a = x
        },
        119: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(14),
                s = n.n(o),
                i = n(23),
                c = n.n(i),
                l = n(56),
                u = n(19),
                p = n(20),
                d = n(2);

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function y(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), e
            }

            function v(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
                var t = _();
                return function() {
                    var n, a = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return w(this, n)
                }
            }

            function w(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? E(e) : t
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = Object(d.a)({
                    resolved: {},
                    chunkName: function() {
                        return "desktopModals"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5), n.e(20)]).then(n.bind(null, 142))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var a = this.resolve(t);
                        return n(a)
                    },
                    resolve: function e() {
                        return 142
                    }
                }),
                k = function(e) {
                    v(n, e);
                    var t = b(n);

                    function n(e) {
                        var a;
                        return h(this, n), (a = t.call(this, e)).state = {
                            breadcrumbItems: {}
                        }, a
                    }
                    return y(n, [{
                        key: "componentWillReceiveProps",
                        value: function() {
                            void 0 !== localStorage && this.setState({
                                breadcrumbItems: localStorage.getItem("breadcrumbItems")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.passedAppFunctions.contentSwitchPath;
                            this.props.contentData.JSONError && (e = "JSONError");
                            var t = this.props.passedAppFunctions.chunks.Layouts,
                                n = this.props.passedAppFunctions.chunks.ProductDetail,
                                a = this.props.passedAppFunctions.chunks.StoreDetail,
                                s = this.props.passedAppFunctions.chunks.StoreHome,
                                i = this.props.passedAppFunctions.chunks.ChangeCountry,
                                d = this.props.passedAppFunctions.chunks.ContactUs,
                                m = this.props.passedAppFunctions.chunks.StorePurchaseReturns,
                                h = this.props.passedAppFunctions.chunks.Subscriptions;
                            return r.a.createElement("section", {
                                id: "content_wrapper",
                                className: "p-t-10"
                            }, r.a.createElement("div", {
                                className: "".concat("tablet" == this.props.passedAppFunctions.siteFormat ? "container" : "container-fluid")
                            }, {
                                "/stores/:name/:storeNum": r.a.createElement(a, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/stores": r.a.createElement(s, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/stores/:stateName": r.a.createElement(s, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/p/:name/:productId": r.a.createElement(n, {
                                    breadCrumbs: this.state.breadcrumbItems,
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/p/:name/:productId/outfit": r.a.createElement(n, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/p/:name/:productId/sale": r.a.createElement(n, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/brand/:manufacturer": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/brand/:manufacturer/:categoryName": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/brand/:manufacturer/:categoryName/:pathModifier": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/c/:pathToken": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/c/:pathToken/:pathModifier": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/c/:pathToken/:pathModifier/:color": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/search-term/:searchTerm": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/search-term/:searchTerm/:categoryName": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/search-term/:searchTerm/:categoryName/:pathModifier": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/chanel/c/:pathToken": r.a.createElement(t, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/changecountry": r.a.createElement(i, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/contactus": r.a.createElement(d, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/returns": r.a.createElement(m, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                "/member/subscriptions": r.a.createElement(h, {
                                    contentData: this.props.contentData,
                                    passedAppFunctions: this.props.passedAppFunctions
                                }),
                                JSONError: r.a.createElement("div", null, r.a.createElement(o.Helmet, {
                                    meta: [{
                                        name: "robots",
                                        content: "noindex"
                                    }]
                                }), r.a.createElement(p.a, {
                                    error: this.props.contentData.JSONError
                                }))
                            } [e]), this.props.quickViewData ? r.a.createElement("div", null, r.a.createElement(c.a, {
                                isOpen: void 0 !== this.props.quickViewData.contentData.productLayout && "Loading" != this.props.quickViewData.contentData.productLayout,
                                className: "QvModal__Content ReactModal__KeepOpenFor_OSS",
                                overlayClassName: "QvModal__Overlay ReactModal__KeepOpenFor_OSS",
                                onRequestClose: this.props.passedAppFunctions.closeQuickView,
                                onAfterOpen: this.props.passedAppFunctions.afterOpenModal,
                                shouldReturnFocusAfterClose: !0
                            }, r.a.createElement(n, {
                                contentData: this.props.quickViewData.contentData,
                                passedAppFunctions: this.props.passedAppFunctions
                            })), void 0 === this.props.quickViewData.contentData.productLayout || "Loading" == this.props.quickViewData.contentData.productLayout ? r.a.createElement(u.a, {
                                passedAppFunctions: this.props.passedAppFunctions
                            }) : "") : "", this.props.passedAppFunctions.modalInfo && this.props.passedAppFunctions.modalInfo.modalType && "Loading" == this.props.passedAppFunctions.modalInfo.modalType ? r.a.createElement(u.a, {
                                passedAppFunctions: this.props.passedAppFunctions
                            }) : null, this.props.passedAppFunctions.modalInfo && this.props.passedAppFunctions.modalInfo.modalType ? r.a.createElement(D, {
                                passedAppFunctions: this.props.passedAppFunctions
                            }) : null, this.props.passedAppFunctions.transition ? r.a.createElement(u.a, {
                                passedAppFunctions: this.props.passedAppFunctions
                            }) : "", r.a.createElement(l.a, {
                                showUnder: 160
                            }, r.a.createElement("button", {
                                className: "btn-scroll--top"
                            }, r.a.createElement("i", {
                                className: "icon i-btn-scroll-top"
                            }, r.a.createElement("svg", {
                                role: "img",
                                "aria-labelledby": "backToTop",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 48.77 25.39",
                                width: "16",
                                height: "16"
                            }, r.a.createElement("title", {
                                id: "backToTop"
                            }, "Return to top"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                d: "M47.77,25.39a1,1,0,0,1-.71-.29L24.39,2.41,1.71,25.09A1,1,0,0,1,.29,23.68L23.68.29a1,1,0,0,1,1.41,0L48.48,23.68a1,1,0,0,1-.71,1.71Z"
                            }))))))))
                        }
                    }]), n
                }(r.a.Component);
            t.a = k
        },
        121: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(3);

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function l(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = p(e);
                    if (t) {
                        var r = p(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return u(this, n)
                }
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(u, e);
                var t, n, a, s = l(u);

                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (t = s.call(this, e)).state = {}, t.state.storedIsInternational = t.props.passedAppFunctions.isInternational(), t.state.storedCountry = t.props.passedAppFunctions.country, t.state.storedCurrency = t.props.passedAppFunctions.currency, t
                }
                return t = u, (n = [{
                    key: "liveChatOnClick",
                    value: function() {
                        window.openChatButtonClick()
                    }
                }, {
                    key: "emailSignUpSubmit",
                    value: function() {
                        return window.emailValidation(), !1
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        var n = !1;
                        return !window._ || (_.isEqual(e.passedAppFunctions.testFlags, this.props.passedAppFunctions.testFlags) || (n = !0), this.props.passedAppFunctions.isInternational() != this.state.storedIsInternational && (this.state.storedIsInternational = this.props.passedAppFunctions.isInternational(), n = !0), this.props.passedAppFunctions.country == this.state.storedCountry && this.props.passedAppFunctions.currency == this.state.storedCurrency || (this.state.storedCountry = this.props.passedAppFunctions.country, this.state.storedCurrency = this.props.passedAppFunctions.currency, n = !0), n)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement("section", {
                            id: "footer_wrapper"
                        }, r.a.createElement("footer", {
                            id: "footer",
                            className: "footer"
                        }, r.a.createElement("div", {
                            className: "container-fluid"
                        }, r.a.createElement("div", {
                            className: "row m-t-10 m-b-10"
                        }, r.a.createElement("div", {
                            className: "col-md-3 col-sm-6  footer-content-section footer__contentSection"
                        }, r.a.createElement(o.a, {
                            innerHTML: this.props.footerData.JSON.ES_Footer_1,
                            espotname: "ES_Footer_1"
                        })), r.a.createElement("div", {
                            className: "col-md-3 col-sm-6  footer-content-section footer__contentSection"
                        }, r.a.createElement(o.a, {
                            innerHTML: this.props.footerData.JSON.ES_Footer_2,
                            espotname: "ES_Footer_2"
                        })), r.a.createElement("div", {
                            className: "col-md-3 col-sm-6  footer-content-section footer__contentSection"
                        }, r.a.createElement(o.a, {
                            innerHTML: this.props.footerData.JSON.ES_Footer_3,
                            espotname: "ES_Footer_3"
                        })), r.a.createElement("div", {
                            className: "col-md-3 col-sm-6  footer-content-section footer__contentSection"
                        }, r.a.createElement(o.a, {
                            innerHTML: this.props.footerData.JSON.ES_Footer_4,
                            espotname: "ES_Footer_4"
                        }))), r.a.createElement("div", {
                            className: "row m-t-10 m-b-10 border-top"
                        }, r.a.createElement("div", {
                            id: "lets-chat",
                            className: "col-sm-4  hide-when-international"
                        }, r.a.createElement("h6", null, "Questions or comments?"), r.a.createElement("button", {
                            id: "openChatButtonParent",
                            tabIndex: "0",
                            onKeyPress: this.liveChatOnClick,
                            onClick: this.liveChatOnClick,
                            manual_cm_sp: "customerservice-_-LiveChat-_-null",
                            type: "button",
                            name: "letsChat"
                        }, r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens a simulated dialog"), r.a.createElement("svg", {
                            role: "img",
                            "aria-labelledby": "letsChatIcon",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 73 64.92",
                            height: "120",
                            width: "120"
                        }, r.a.createElement("title", {
                            id: "letsChatIcon"
                        }, "Let's chat!"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M40.07,37.38a1.4,1.4,0,0,0-.63,1.26,1.23,1.23,0,0,0,.37,1,1.57,1.57,0,0,0,1.1.34,2.42,2.42,0,0,0,1.71-.59,2.15,2.15,0,0,0,.64-1.67v-.8l-1.18,0A4,4,0,0,0,40.07,37.38Z"
                        }), r.a.createElement("path", {
                            d: "M32.14,16.37a2,2,0,0,0-1.49.59A2.81,2.81,0,0,0,30,18.68h4.17A2.54,2.54,0,0,0,33.6,17,1.87,1.87,0,0,0,32.14,16.37Z"
                        }), r.a.createElement("path", {
                            d: "M36.5,0C16.34,0,0,12.54,0,28,0,42.39,14.16,54.25,32.38,55.82l4,9.1,4.17-9.1C58.82,54.26,73,42.4,73,28,73,12.54,56.66,0,36.5,0ZM19.13,38.58a3.33,3.33,0,0,0,2.73,1.15,7.2,7.2,0,0,0,1.5-.15q.72-.15,1.5-.39v1.7a9.11,9.11,0,0,1-3.24.54,5.18,5.18,0,0,1-4.09-1.62,6.76,6.76,0,0,1-1.43-4.62,7.47,7.47,0,0,1,.69-3.31,5,5,0,0,1,2-2.18,6.07,6.07,0,0,1,3.08-.76,7.65,7.65,0,0,1,3.44.78l-.71,1.65a10.76,10.76,0,0,0-1.3-.51,4.69,4.69,0,0,0-1.44-.22,3.27,3.27,0,0,0-2.69,1.21,5.18,5.18,0,0,0-1,3.35A5.22,5.22,0,0,0,19.13,38.58ZM26.6,24.24H19.47V12.1h2V22.54H26.6Zm8.75,17h-2V35.6A2.47,2.47,0,0,0,33,34a1.65,1.65,0,0,0-1.36-.52,2.16,2.16,0,0,0-1.81.73,4.05,4.05,0,0,0-.58,2.46v4.56h-2V28.33h2v3.28a15.32,15.32,0,0,1-.1,1.69h.12a2.71,2.71,0,0,1,1.11-1A3.58,3.58,0,0,1,32,31.9q3.34,0,3.34,3.36Zm.72-21.16H29.94a3,3,0,0,0,.72,2.06,2.52,2.52,0,0,0,1.92.72,7.07,7.07,0,0,0,1.52-.15,8,8,0,0,0,1.51-.51v1.59a6,6,0,0,1-1.45.48,8.85,8.85,0,0,1-1.67.14,4.44,4.44,0,0,1-3.35-1.25,4.74,4.74,0,0,1-1.21-3.44,5.21,5.21,0,0,1,1.12-3.54,3.87,3.87,0,0,1,3.08-1.29A3.79,3.79,0,0,1,35,16a4.22,4.22,0,0,1,1.05,3Zm20.66,9-.42,8.46H54.85l-.43-8.46ZM37.21,15.67,38.56,15,39.22,13h1.2v2H43v1.48H40.42v4.92a1.37,1.37,0,0,0,.35,1,1.28,1.28,0,0,0,.93.34,4.75,4.75,0,0,0,1.43-.22v1.47a4,4,0,0,1-.83.24,5.77,5.77,0,0,1-1.06.1q-2.77,0-2.77-2.92v-5H37.21Zm8,25.58h-1.4L43.42,40h-.07A3.76,3.76,0,0,1,42,41.12a4.23,4.23,0,0,1-1.73.3,2.92,2.92,0,0,1-2.11-.73,2.73,2.73,0,0,1-.76-2.07,2.43,2.43,0,0,1,1.06-2.14,6.08,6.08,0,0,1,3.21-.79l1.59,0v-.49a1.86,1.86,0,0,0-.41-1.32,1.67,1.67,0,0,0-1.27-.44,4.41,4.41,0,0,0-1.35.21,10.16,10.16,0,0,0-1.25.49l-.63-1.4A6.81,6.81,0,0,1,40,32.1a7.53,7.53,0,0,1,1.68-.2,4,4,0,0,1,2.65.76,3,3,0,0,1,.89,2.4Zm0-25H43.78q.57-2.4.83-4.16h1.92l.12.18A24,24,0,0,1,45.19,16.26Zm7.59,24.83a4,4,0,0,1-.83.24,5.77,5.77,0,0,1-1.06.1q-2.77,0-2.77-2.92v-5H46.86v-.86L48.2,32,48.87,30h1.2v2h2.62v1.48H50.07v4.92a1.37,1.37,0,0,0,.35,1,1.28,1.28,0,0,0,.93.34,4.75,4.75,0,0,0,1.43-.22Zm.66-17.4a4.69,4.69,0,0,1-2.81.72,6.64,6.64,0,0,1-2.95-.56V22.17a7.24,7.24,0,0,0,3,.75q1.8,0,1.8-1.09a.86.86,0,0,0-.2-.58,2.36,2.36,0,0,0-.66-.48,11.29,11.29,0,0,0-1.27-.56A5.87,5.87,0,0,1,48.23,19a2.27,2.27,0,0,1-.56-1.59,2.1,2.1,0,0,1,1-1.83,4.51,4.51,0,0,1,2.59-.65,7.33,7.33,0,0,1,3.06.66L53.64,17a6.81,6.81,0,0,0-2.5-.61q-1.55,0-1.54.88A.89.89,0,0,0,50,18a8.89,8.89,0,0,0,1.76.82,8,8,0,0,1,1.65.81,2.4,2.4,0,0,1,.76.84,2.44,2.44,0,0,1,.25,1.14A2.4,2.4,0,0,1,53.44,23.69Zm3,17.46a1.17,1.17,0,0,1-.9.34,1.23,1.23,0,0,1-.92-.33,1.29,1.29,0,0,1-.33-.95A1.13,1.13,0,0,1,55.57,39a1.19,1.19,0,0,1,.91.33,1.29,1.29,0,0,1,.32.92A1.32,1.32,0,0,1,56.47,41.15Z"
                        })))))), r.a.createElement("div", {
                            id: "connect-follow",
                            className: "col-sm-4  footer-content-section footer__contentSection"
                        }, r.a.createElement("section", {
                            className: "footer-links footer__section--footerLinks hide-when-international"
                        }, r.a.createElement("h6", null, "Stay In Touch."), r.a.createElement("p", null, "Get updates about new products & the latest trends!"), r.a.createElement("form", {
                            id: "emailSignUpModal",
                            "data-recaptcha": "false",
                            className: "form-inline hide-when-international",
                            action: "none",
                            method: "post",
                            name: "emailSignUpModal",
                            onSubmit: this.emailSignUpSubmit
                        }, r.a.createElement("div", {
                            className: "d-flex justify-content-center form-group emailInput m-0"
                        }, r.a.createElement("input", {
                            name: "storeId",
                            type: "hidden",
                            value: "301"
                        }), r.a.createElement("input", {
                            name: "catalogId",
                            type: "hidden",
                            value: "301"
                        }), r.a.createElement("input", {
                            name: "langId",
                            type: "hidden",
                            value: "-1"
                        }), r.a.createElement("label", {
                            htmlFor: "recipientEmail",
                            className: "sr-only"
                        }, "Email Signup"), r.a.createElement("input", {
                            className: "form-control footer__input--email",
                            id: "recipientEmail",
                            maxLength: "254",
                            name: "recipientEmail",
                            title: "Email Address",
                            "data-validate": "required, email",
                            type: "email",
                            placeholder: "Enter your email",
                            "aria-describedby": "emailError"
                        }), r.a.createElement("button", {
                            role: "button",
                            className: "btn footerSubmit",
                            "data-toggle": "modal",
                            "data-target": " ",
                            "data-modal-title": " ",
                            "data-modal-body": 'ajaxEmailSignup({"formId":"emailSignUpModal"})'
                        }, r.a.createElement("i", {
                            className: "icon i-arrow-right"
                        }, r.a.createElement("svg", {
                            role: "img",
                            "aria-labelledby": "arrowRightEmailSignUp",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 25.39 48.77"
                        }, r.a.createElement("title", {
                            id: "arrowRightEmailSignUp"
                        }, "arrow-right"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M1,48.77a1,1,0,0,1-.71-1.71L23,24.39.29,1.71A1,1,0,0,1,1.71.29L25.09,23.68a1,1,0,0,1,0,1.41L1.71,48.48A1,1,0,0,1,1,48.77Z"
                        }))))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Submit")))))), r.a.createElement("div", {
                            id: "social-icons",
                            className: "col-sm-4  footer-content-section footer__contentSection"
                        }, r.a.createElement("section", {
                            className: "footer-icons footer__footerIcons"
                        }, r.a.createElement("ul", null, r.a.createElement("li", {
                            className: "footer-facebook"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Facebook",
                            href: "https://www.facebook.com/Dillards",
                            title: "Facebook"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.9 48.9",
                            height: "35",
                            width: "35",
                            role: "img",
                            "aria-labelledby": "facebookFooterIcon"
                        }, r.a.createElement("title", {
                            id: "facebookFooterIcon"
                        }, "facebook"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("polygon", {
                            points: "24.45 48.9 24.45 48.9 24.45 48.9 24.45 48.9"
                        }), r.a.createElement("path", {
                            d: "M24.45,0a24.44,24.44,0,0,0-4.26,48.51V30.61H14V23.48h6.15V18.23c0-6.1,3.73-9.42,9.17-9.42a50.58,50.58,0,0,1,5.5.28v6.37H31.09c-3,0-3.53,1.41-3.53,3.47v4.55h7.06l-.92,7.13H27.55V48.68A24.44,24.44,0,0,0,24.45,0Z"
                        })))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens Dillard's Facebook in a new window"))), r.a.createElement("li", {
                            className: "footer-twitter"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Twitter",
                            href: "https://twitter.com/Dillards",
                            title: "Twitter"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.9 48.9",
                            height: "35",
                            width: "35",
                            role: "img",
                            "aria-labelledby": "twitterFooterIcon"
                        }, r.a.createElement("title", {
                            id: "twitterFooterIcon"
                        }, "twitter"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M24.45,0A24.45,24.45,0,1,0,48.9,24.45,24.45,24.45,0,0,0,24.45,0Zm14.3,17.12q0,.47,0,1c0,9.75-7.42,21-21,21h0A20.89,20.89,0,0,1,6.47,35.75a15,15,0,0,0,1.76.1,14.8,14.8,0,0,0,9.17-3.16,7.39,7.39,0,0,1-6.89-5.13,7.37,7.37,0,0,0,3.33-.13,7.38,7.38,0,0,1-5.92-7.23s0-.06,0-.09a7.33,7.33,0,0,0,3.34.92A7.39,7.39,0,0,1,9,11.19,21,21,0,0,0,24.18,18.9a7.38,7.38,0,0,1,12.57-6.73,14.8,14.8,0,0,0,4.69-1.79,7.4,7.4,0,0,1-3.24,4.08,14.71,14.71,0,0,0,4.24-1.16A15,15,0,0,1,38.75,17.12Z"
                        })))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens Dillard's Twitter in a new window"))), r.a.createElement("li", {
                            className: "footer-pinterest"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Pinterest",
                            href: "https://www.pinterest.com/dillards/",
                            title: "Pinterest"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.71 48.71",
                            height: "35",
                            width: "35",
                            role: "img",
                            "aria-labelledby": "pinterestFooterIcon"
                        }, r.a.createElement("title", {
                            id: "pinterestFooterIcon"
                        }, "pintrest"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M24.36,0a24.35,24.35,0,0,0-9.63,46.72c-.94-8.49,2-15,3.38-21.87-2.46-4.13.3-12.46,5.48-10.41C30,17,18.06,29.82,26,31.43,34.39,33.11,37.79,17,32.62,11.71c-7.47-7.58-21.75-.18-20,10.68.43,2.65,3.17,3.46,1.1,7.12-4.78-1.06-6.21-4.83-6-9.86.29-8.23,7.39-14,14.51-14.79,9-1,17.46,3.31,18.62,11.78,1.31,9.55-4.06,19.91-13.69,19.17-2.61-.2-3.7-1.49-5.75-2.74C20.33,38.63,19,43.94,15.47,47A24.35,24.35,0,1,0,24.36,0Z"
                        })))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens Dillard's Pinterest in a new window"))), r.a.createElement("li", {
                            className: "footer-youtube"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer YouTube",
                            href: "https://www.youtube.com/user/Dillards",
                            title: "YouTube"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.76 48.76",
                            height: "35",
                            width: "35",
                            role: "img",
                            "aria-labelledby": "youtubeFooterIcon"
                        }, r.a.createElement("title", {
                            id: "youtubeFooterIcon"
                        }, "youtube"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("polygon", {
                            points: "20.99 29.79 29.78 24.38 20.99 18.96 20.99 29.79"
                        }), r.a.createElement("path", {
                            d: "M24.38,0A24.38,24.38,0,1,0,48.76,24.38,24.38,24.38,0,0,0,24.38,0ZM41.26,32.77a4.75,4.75,0,0,1-3.33,3.13c-2.75.72-13.56.67-13.56.67s-10.81.07-13.56-.67a4.86,4.86,0,0,1-3.38-3.13c-.74-2.73-.67-8.39-.67-8.39s-.07-5.66.67-8.39a4.81,4.81,0,0,1,3.38-3.13c2.75-.72,13.56-.67,13.56-.67s11,0,13.76.72A4.38,4.38,0,0,1,41.24,16,45.52,45.52,0,0,1,42,24.38S42,30.06,41.26,32.77Z"
                        })))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens Dillard's YouTube in a new window"))), r.a.createElement("li", {
                            className: "footer-instagram"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Instagram",
                            href: "https://www.instagram.com/dillards/",
                            title: "Instagram"
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.9 48.9",
                            height: "35",
                            width: "35",
                            role: "img",
                            "aria-labelledby": "instagramFooterIcon"
                        }, r.a.createElement("title", {
                            id: "instagramFooterIcon"
                        }, "instagram"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M38.45,16.67a7.15,7.15,0,0,0-1-3.4,5.65,5.65,0,0,0-4.16-2.66,39.71,39.71,0,0,0-4.6-.31c-2.81,0-5.63,0-8.45,0-1.38,0-2.76.09-4.13.22A6.19,6.19,0,0,0,12.56,12a5.68,5.68,0,0,0-2,3.67,42.15,42.15,0,0,0-.3,4.56c0,2.83,0,5.66,0,8.48,0,1.38.08,2.76.23,4.13a6.08,6.08,0,0,0,2,4.08,6.61,6.61,0,0,0,4.17,1.57c2.57.13,7.72.18,7.72.16,1.41,0,2.82,0,4.22,0s2.79-.07,4.17-.23a5.87,5.87,0,0,0,5.48-5.18,34.67,34.67,0,0,0,.3-4.68c0-2.68,0-5.36,0-8Q38.58,18.58,38.45,16.67Zm-14,16.66a8.87,8.87,0,1,1,8.88-8.84A8.85,8.85,0,0,1,24.42,33.34Zm9.25-16a2.07,2.07,0,1,1,0-4.13,2.07,2.07,0,0,1,0,4.13Z"
                        }), r.a.createElement("path", {
                            d: "M24.47,18.71a5.76,5.76,0,1,0,5.72,5.81A5.75,5.75,0,0,0,24.47,18.71Z"
                        }), r.a.createElement("path", {
                            d: "M24.45,0A24.45,24.45,0,1,0,48.9,24.45,24.45,24.45,0,0,0,24.45,0ZM41.61,31.6A11.91,11.91,0,0,1,40.73,36a8.81,8.81,0,0,1-6.31,5.28,16.56,16.56,0,0,1-3.91.42c-3.64,0-7.28.06-10.91,0A23.76,23.76,0,0,1,15,41.38,9.07,9.07,0,0,1,7.39,33c-.16-1.67-.21-3.36-.23-5q0-4.12,0-8.25a23.24,23.24,0,0,1,.45-5.23,8.85,8.85,0,0,1,4.55-6,10.65,10.65,0,0,1,4.39-1.17c4-.25,7.94-.16,11.91-.13,1.51,0,3,.06,4.53.22a9.12,9.12,0,0,1,6.72,3.72,9.32,9.32,0,0,1,1.74,4.77c.14,1.66.18,3.34.23,5C41.74,22.1,41.68,29.22,41.61,31.6Z"
                        })))), r.a.createElement("span", {
                            className: "sr-only"
                        }, "Opens Dillard's Instagram in a new window"))))))))), r.a.createElement("div", {
                            id: "footer_tippy_bottom",
                            className: "footer__tippyBottom"
                        }, r.a.createElement("div", {
                            className: "container-fluid"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-sm-12 p-0"
                        }, r.a.createElement("section", {
                            className: "footer-links footer__section--footerLinks"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-sitemap",
                            href: "/c/sitemap",
                            manual_cm_sp: "customerservice-_-sitemap-_-null"
                        }, "Site Map")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-terms-of-use",
                            href: "/c/faqs-notices-policies?#q=NOTICES",
                            manual_cm_sp: "customerservice-_-terms+of+use-_-null"
                        }, "Terms Of Use")), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-terms-of-use",
                            href: "/c/faqs-notices-policies?#q=int-policies-notices-question-legal-terms-of-use",
                            manual_cm_sp: "customerservice-_-terms+of+use-_-null"
                        }, "Terms Of Use")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "privacy-policy",
                            href: "/privacy",
                            manual_cm_sp: "customerservice-_-privacy+policy-_-null"
                        }, "Dillard's Privacy Policy")), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "privacy-policy",
                            href: "/privacy",
                            manual_cm_sp: "customerservice-_-privacy+policy-_-null"
                        }, "Dillard's Privacy Policy")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-california",
                            href: "/c/faqs-notices-policies?#q=policies-notices-question-california",
                            manual_cm_sp: "customerservice-_-CATransparencyAct-_-null "
                        }, "California Transparency in Supply Chains Act")), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-california",
                            href: "/c/faqs-notices-policies?#q=int-policies-notices-question-california",
                            manual_cm_sp: "customerservice-_-CATransparencyAct-_-null "
                        }, "California Transparency in Supply Chains Act")), r.a.createElement("li", null, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Careers",
                            href: "https://careers.dillards.com/Careers/"
                        }, "Careers")), r.a.createElement("li", null, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Investor Relations",
                            href: "https://investor.dillards.com/overview/default.aspx"
                        }, "Investor Relations")))), r.a.createElement("p", null, "Prices and sale offers may vary by store location, including Dillards.com, and are subject to change. © ", (new Date).getFullYear(), " Dillard's"))))))
                    }
                }, {
                    key: "updateFlagIcon",
                    value: function() {
                        if ("US" != this.props.passedAppFunctions.country) {
                            var e = "/assets/img/flags/" + this.props.passedAppFunctions.country + ".gif";
                            0 == $("#flag-icon-footer-image").length ? $("#footer-flag-img-span").prepend('<img id="flag-icon-footer-image" class="flag-intl" src=' + e + "></img>") : $("#footer-flag-img-span img").attr("src", e), 0 == $("#flag-icon-mobile-image").length ? $("#flag-icon-mobile-span").prepend('<img id="flag-icon-mobile-image" class="flag-intl-mobile" src=' + e + "></img>") : $("#flag-icon-mobile-span img").attr("src", e)
                        } else $("#footer-flag-img-span img").remove(), $("#flag-icon-mobile-span img").remove()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.updateFlagIcon()
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.updateFlagIcon()
                    }
                }]) && i(t.prototype, n), a && i(t, a), u
            }(a.Component);
            t.a = d
        },
        122: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            }));
            var a = n(0),
                r = n.n(a),
                o = n(27),
                s = n(44),
                i = n.n(s),
                c = n(28),
                l = n.n(c),
                u = n(29),
                p = n.n(u),
                d = n(8),
                m = n.n(d);

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = w(e);
                    if (t) {
                        var r = w(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return g(this, n)
                }
            }

            function g(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? b(e) : t
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(s, e);
                var t, n, a, o = v(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).stripSearchCharacters = t.stripSearchCharacters.bind(b(t)), t.handleChange = t.handleChange.bind(b(t)), t.handleSubmit = t.handleSubmit.bind(b(t)), t
                }
                return t = s, (n = [{
                    key: "stripSearchCharacters",
                    value: function(e) {
                        for (var t = "", n = "[\\w\\d\\!\\@\\_\\*\\(\\)\\-\\:\\.\\,\\[\\]\\# \\/\\'\\" + String.fromCharCode(201) + "\\" + String.fromCharCode(232) + "\\" + String.fromCharCode(233) + "\\" + String.fromCharCode(234) + "\\" + String.fromCharCode(244) + "\\" + String.fromCharCode(216) + "\\" + String.fromCharCode(248) + "]", a = 0; a < e.length; a++) {
                            var r = e.charAt(a);
                            r.search(n) > -1 && (t += r)
                        }
                        return t
                    }
                }, {
                    key: "handleChange",
                    value: function(e) {
                        var t = this.stripSearchCharacters(e.target.value).split("  ").join(" "),
                            n = this.state.searchTerm;
                        t != n && t.length <= 60 && (this.setState({
                            searchTerm: t
                        }), t.trim())
                    }
                }, {
                    key: "handleSubmit",
                    value: function(e) {
                        (!this.state.searchTerm || this.state.searchTerm.trim().length < 3) && e.preventDefault()
                    }
                }, {
                    key: "menuData",
                    value: function() {
                        var e = [];
                        return e.push({
                            display: "Women",
                            link: "women"
                        }), e.push({
                            display: "Juniors",
                            link: "juniors"
                        }), e.push({
                            display: "Shoes",
                            link: "shoes"
                        }), e.push({
                            display: "Handbags",
                            link: "handbags"
                        }), e.push({
                            display: "Accessories",
                            link: "accessories"
                        }), e.push({
                            display: "Lingerie",
                            link: "lingerie"
                        }), e.push({
                            display: "Beauty",
                            link: "beauty"
                        }), e.push({
                            display: "Men",
                            link: "men"
                        }), e.push({
                            display: "Kids",
                            link: "kids"
                        }), e.push({
                            display: "Home",
                            link: "home"
                        }), e
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.error ? r.a.createElement("div", null, r.a.createElement("section", {
                            id: "header_desktop_wrapper"
                        }, r.a.createElement("div", {
                            id: "my_dillards_bar_wrapper"
                        }, r.a.createElement("div", {
                            className: "container-fluid"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-sm-12"
                        }, r.a.createElement("ul", null, r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            href: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&langId=-1&catalogId=301"
                        }, "Login / My Account")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            href: "/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=301&catalogId=301&langId=-1"
                        }, "My Wish List")), r.a.createElement("li", null, r.a.createElement("a", {
                            href: "/webapp/wcs/stores/servlet/OrderItemDisplay?storeId=301&catalogId=301&langId=-1"
                        }, "Shopping Bag"))))))), r.a.createElement("div", {
                            className: "container-fluid"
                        }, r.a.createElement("header", {
                            id: "header"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-sm-3"
                        }, r.a.createElement("a", {
                            href: "/",
                            manual_cm_sp: "Header-_-Logo-_-ImageLink",
                            id: "logo-espot"
                        }, r.a.createElement("img", {
                            src: "/images/StyleOfYourLifeLogo.png",
                            alt: "Shop Dillards.com"
                        }))), r.a.createElement("div", {
                            className: "col-sm-4"
                        }), r.a.createElement("div", {
                            className: "col-sm-5"
                        }, r.a.createElement("div", {
                            id: "quick_links"
                        }, r.a.createElement("div", null, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("a", {
                            href: "/c/sale-clearance",
                            manual_cm_sp: "Header-_-SaleClearance-_-TextLink",
                            className: "sale-clearance"
                        }, "Sale and Clearance")), r.a.createElement("li", null, r.a.createElement("a", {
                            href: "/c/shopbybrand",
                            manual_cm_sp: "Header-_-ShopByBrand-_-TextLink"
                        }, "Shop By Brand")), r.a.createElement("li", null, r.a.createElement("a", {
                            href: "/c/limited-availability",
                            manual_cm_sp: "Header-_-LimitedAvailability-_-TextLink",
                            style: {
                                color: "#267cb5"
                            }
                        }, "Limited Availability")))), r.a.createElement("div", {
                            className: "search-area"
                        }, r.a.createElement(l.a, {
                            inline: !0,
                            onSubmit: this.handleSubmit,
                            action: "/search-term/".concat(encodeURIComponent(this.state.searchTerm)),
                            method: "GET"
                        }, r.a.createElement(p.a, null, r.a.createElement(m.a, {
                            type: "text",
                            value: this.state.searchTerm || "",
                            onChange: this.handleChange,
                            className: "form-control search-input search-enabled"
                        }), r.a.createElement(i.a, {
                            "data-twist": "search-button",
                            className: "btn btn-search",
                            title: "Search Dillards.com",
                            type: "submit"
                        }), "undefined" != typeof window && "US" != window.DILLARDS.country ? r.a.createElement(m.a, {
                            type: "hidden",
                            name: "facet",
                            value: "dil_shipinternational:Y"
                        }) : ""))))))))), r.a.createElement("section", {
                            id: "menu_wrapper"
                        }, r.a.createElement("div", {
                            className: "".concat("tablet" == this.props.passedAppFunctions.siteFormat ? "container" : "container-fluid")
                        }, r.a.createElement("nav", {
                            id: "main_nav"
                        }, r.a.createElement("ul", {
                            className: "menu"
                        }, this.menuData().map((function(e, t) {
                            return r.a.createElement("li", {
                                key: t
                            }, r.a.createElement("a", {
                                href: "/c/".concat(e.link),
                                id: "topcat_".concat(e.display),
                                "data-supername": e.display
                            }, e.display))
                        })))))), this.renderHiddenError("Header")) : this.props.children
                    }
                }]) && f(t.prototype, n), a && f(t, a), s
            }(o.a)
        },
        123: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var a = n(0),
                r = n.n(a);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = u(e);
                    if (t) {
                        var r = u(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return l(this, n)
                }
            }

            function l(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t)
                }(l, e);
                var t, n, a, o = c(l);

                function l(e) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), o.call(this, e)
                }
                return t = l, (n = [{
                    key: "render",
                    value: function() {
                        return this.state.error ? r.a.createElement("section", {
                            id: "footer_wrapper"
                        }, r.a.createElement("footer", {
                            id: "footer",
                            className: "footer"
                        }, r.a.createElement("div", {
                            className: "container-fluid"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            id: "customer-service",
                            className: "col-md-3 col-sm-6 footer-content-section footer__contentSection"
                        }, r.a.createElement("section", null, r.a.createElement("h6", {
                            "data-twist": "footer-customer-service-header"
                        }, "Customer Service")), r.a.createElement("section", {
                            className: "footer-links"
                        }, r.a.createElement("ul", {
                            className: "hide-when-international"
                        }, r.a.createElement("li", {
                            "data-twist": "footer-customer-service-telephone"
                        }, "Call 1-800-DILLARD (800-345-5273)"), r.a.createElement("li", {
                            "data-twist": "footer-customer-service-hours-1"
                        }, "Monday-Saturday: 7AM-Midnight ", r.a.createElement("abbr", {
                            className: "timezone"
                        }, "CST")), r.a.createElement("li", {
                            "data-twist": "footer-customer-service-hours-2"
                        }, "Sunday: 9AM-7PM ", r.a.createElement("abbr", {
                            className: "timezone"
                        }, "CST")), r.a.createElement("li", null), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-contact-us",
                            href: "/contactus",
                            manual_cm_sp: "customerservice-_-ContactUS-_-null"
                        }, "Contact Us Via Email")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-check-order-status",
                            href: "/webapp/wcs/stores/servlet/OrderStatusLoginChk?storeId=301&catalogId=301&langId=-1",
                            manual_cm_sp: "customerservice-_-orderstatus-_-null",
                            rel: "nofollow"
                        }, "Order Status")), r.a.createElement("li", null, r.a.createElement("button", {
                            type: "button",
                            "data-twist": "footer-return-policy",
                            className: "btn-tertiary",
                            onclick: 'Dillards.triggerModal("/static/html/modals/_returns.html","Online Return Policy",".modal")',
                            "data-relative-href": "c/faqs-notices-policies?",
                            "data-cmsp": "customerservice-_-returnpolicy-_-null"
                        }, "Return Policy")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-faq",
                            href: "/c/faqs-notices-policies",
                            manual_cm_sp: "customerservice-_-faq-_-null"
                        }, "FAQ, Notices & Policies")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-california",
                            href: "/c/faqs-notices-policies#q=policies-notices-question-california",
                            manual_cm_sp: "customerservice-_-CATransparencyAct-_-null "
                        }, "California Transparency in Supply Chains Act")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-recalls",
                            href: "/c/faqs-notices-policies",
                            manual_cm_sp: "customerservice-_-Recalls-_-null"
                        }, "Product Recalls"))), r.a.createElement("ul", {
                            className: "show-when-international"
                        }, r.a.createElement("li", {
                            "data-twist": "footer-customer-service-international-number-1"
                        }, r.a.createElement("a", {
                            href: "tel:1-817-831-5482"
                        }, "Call 1-817-831-5482")), r.a.createElement("li", {
                            "data-twist": "footer-customer-service-international-hours-1"
                        }, "Monday-Saturday: 7AM-10PM GMT-6"), r.a.createElement("li", {
                            "data-twist": "footer-customer-service-international-hours-2"
                        }, "Sunday: 12PM-6PM GMT-6"), r.a.createElement("li", null)), r.a.createElement("ul", {
                            className: "show-when-international"
                        }, r.a.createElement("li", {
                            "data-twist": "footer-international-contact-us"
                        }, r.a.createElement("a", {
                            href: "/contactus",
                            manual_cm_sp: "customerservice-_-ContactUS-_-null"
                        }, "Contact Us Via Email")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-international-check-order",
                            href: "https://tracking.borderfree.com"
                        }, "Check Order Status")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-international-faq",
                            href: "/c/faqs-notices-policies"
                        }, "FAQ, Notices & Policies")), r.a.createElement("li", null, r.a.createElement("a", {
                            "data-twist": "footer-international-california",
                            href: "/c/faqs-notices-policies?#q=int-policies-notices-question-california",
                            manual_cm_sp: "Footer-_-Int-_-CAtransparencyAct"
                        }, "California Transparency in Supply Chains Act")), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-recalls",
                            href: "/c/faqs-notices-policies",
                            manual_cm_sp: "customerservice-_-Recalls-_-null"
                        }, "Product Recalls"))))), r.a.createElement("div", {
                            id: "credit-card-and-company",
                            className: "col-md-3 col-sm-6 footer-content-section footer__contentSection"
                        }, r.a.createElement("section", {
                            className: "hide-when-international"
                        }, r.a.createElement("h6", null, "Dillard's Credit Card")), r.a.createElement("section", {
                            className: "footer-links hide-when-international"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("button", {
                            className: "exit-link wf-exit-link btn-tertiary",
                            "data-exitlink": "Footer Pay Bill Online",
                            "data-toggle": "modal",
                            "data-target": ".wf-speedbump",
                            "data-modal-title": "Page Loading",
                            "data-modal-body": 'wellsFargoSpeedbump({"wellsLink": "/credit-services/online-access"})',
                            manual_cm_sp: "customerservice-_-PayMyBill-_-null",
                            target: "_blank"
                        }, "Pay Bill Online")), r.a.createElement("li", null, r.a.createElement("a", {
                            className: "exit-link",
                            "data-exitlink": "Footer View Credit Account",
                            href: "/c/DillardsCard",
                            manual_cm_sp: "Footer-_-ViewCreditAccount-_-CreditServices",
                            target: "_blank"
                        }, "View Credit Account")))), r.a.createElement("section", null, r.a.createElement("h6", null, "Company")), r.a.createElement("section", {
                            className: "footer-links"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("a", {
                            target: "_blank",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Investor Relations",
                            href: "https://investor.dillards.com/overview/default.aspx"
                        }, "Investor Relations")), r.a.createElement("li", null, r.a.createElement("a", {
                            target: "_blank",
                            className: "exit-link yesOL",
                            "data-exitlink": "Footer Careers",
                            href: "https://careers.dillards.com/Careers/"
                        }, "Careers")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            href: "/c/faqs-notices-policies?#q=policies-notices-question-privacy-policy",
                            manual_cm_sp: "customerservice-_-privacy+policy-_-null"
                        }, "Dillard&#39s Privacy Policy")), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("a", {
                            href: "/c/faqs-notices-policies?#q=int-policies-notices-question-privacy-policy",
                            manual_cm_sp: "customerservice-_-privacy+policy-_-null"
                        }, "Dillard&#39s Privacy Policy"))))), r.a.createElement("div", {
                            id: "more-way-to-shop",
                            className: "col-md-3 col-sm-6 footer-content-section footer__contentSection"
                        }, r.a.createElement("section", null, r.a.createElement("h6", {
                            "data-twist": "footer-more-ways-to-shop-header"
                        }, "More Ways To Shop")), r.a.createElement("section", null, r.a.createElement("ul", null, r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-registry",
                            href: "/registry",
                            manual_cm_sp: "EspotFooterBar-_-Registry-_-TextLink0212"
                        }, "Registry - Wedding, Baby, and Gift")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-gift-card",
                            href: "/c/giftcard",
                            manual_cm_sp: "EspotFooterBar-_-GiftCards-_-TextLink0212"
                        }, " Gift Cards")), r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            "data-twist": "footer-store-locator",
                            href: "/stores",
                            manual_cm_sp: "EspotFooterBar-_-StoreLocator-_-TextLink0212"
                        }, "Store Locations")), r.a.createElement("li", {
                            id: "flag-icon-footer"
                        }, r.a.createElement("a", {
                            href: "/changecountry",
                            manual_cm_sp: "Footer-_-Int-_-ChangeCountry"
                        }, r.a.createElement("i", {
                            "data-twist": "footer-change-country",
                            alt: "Flag Icon"
                        }, r.a.createElement("span", {
                            id: "footer-flag-img-span"
                        })), r.a.createElement("span", null, "Change Country"))), r.a.createElement("li", {
                            className: "show-when-international"
                        }, r.a.createElement("button", {
                            type: "button",
                            className: "btn-tertiary",
                            "data-toggle": "modal",
                            "data-target": ".apo-fpo",
                            "data-modal-title": "Shipping to an APO or FPO address?",
                            "data-modal-body": "/assets/_APO_FPO-modal.html"
                        }, "APO / FPO"))))), r.a.createElement("div", {
                            id: "connect-follow",
                            className: "col-md-3 col-sm-6 footer-content-section footer__contentSection"
                        })))), r.a.createElement("div", {
                            id: "footer_tippy_bottom",
                            className: "footer__tippyBottom"
                        }, r.a.createElement("div", {
                            className: "".concat("tablet" == this.props.passedAppFunctions.siteFormat ? "container" : "container-fluid")
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-sm-12"
                        }, r.a.createElement("p", null, "Prices and sale offers may vary by store location, including Dillards.com, and are subject to change. © ", (new Date).getFullYear(), " Dillard's"))))), this.renderHiddenError("Footer")) : this.props.children
                    }
                }]) && s(t.prototype, n), a && s(t, a), l
            }(n(27).a)
        },
        128: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(5),
                s = n.n(o),
                i = n(42),
                c = n.n(i),
                l = n(1),
                u = n.n(l),
                p = n(129),
                d = n(37),
                m = n(83),
                h = n(10);

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return w(this, n)
                }
            }

            function w(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? E(e) : t
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function D(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            r.a.Component;
            var k = n(55),
                I = n.n(k),
                A = (n(27), n(3));

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function F(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function M(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = L(e);
                    if (t) {
                        var r = L(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return N(this, n)
                }
            }

            function N(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? R(e) : t
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && C(e, t)
                }(s, e);
                var t, n, a, o = M(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        showMyDillardsLogo: !1,
                        showAccountDD: !1,
                        disableClick: !1
                    }, t.state.mouseover = !1, t.onMouseOver = t.onMouseOver.bind(R(t)), t.onMouseOut = t.onMouseOut.bind(R(t)), t.showAccountDD = t.showAccountDD.bind(R(t)), t.hideAccountDD = t.hideAccountDD.bind(R(t)), t.toggleAccountDD = t.toggleAccountDD.bind(R(t)), t.handleShowDillardsLogo = t.handleShowDillardsLogo.bind(R(t)), t.handleDoubleClick = t.handleDoubleClick.bind(R(t)), t
                }
                return t = s, (n = [{
                    key: "onMouseOver",
                    value: function() {
                        "US" == window.DILLARDS.country && this.setState({
                            mouseover: !0
                        })
                    }
                }, {
                    key: "onMouseOut",
                    value: function() {
                        this.setState({
                            mouseover: !1
                        })
                    }
                }, {
                    key: "handleDoubleClick",
                    value: function() {
                        this.state.disableClick || this.setState({
                            disableClick: !0
                        })
                    }
                }, {
                    key: "toggleAccountDD",
                    value: function() {
                        this.setState({
                            showAccountDD: !this.state.showAccountDD
                        })
                    }
                }, {
                    key: "showAccountDD",
                    value: function() {
                        this.setState({
                            showAccountDD: !0
                        })
                    }
                }, {
                    key: "hideAccountDD",
                    value: function() {
                        this.setState({
                            showAccountDD: !1
                        })
                    }
                }, {
                    key: "handleShowDillardsLogo",
                    value: function() {
                        "desktop" == this.props.passedAppFunctions.siteFormat && ((window.pageYOffset || document.documentElement.scrollTop) >= 100 ? this.state.showMyDillardsLogo || this.setState({
                            showMyDillardsLogo: !0
                        }) : this.state.showMyDillardsLogo && this.setState({
                            showMyDillardsLogo: !1
                        }))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.props.passedAppFunctions.testFlags.Test1 = !1, window.addEventListener("scroll", this.handleShowDillardsLogo)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("scroll", this.handleShowDillardsLogo)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.mouseover.mouseover, void 0 !== this.props.passedAppFunctions.testFlags && this.props.passedAppFunctions.testFlags.hasOwnProperty("Test1") && 1 == this.props.passedAppFunctions.testFlags.Test1 && alert(1), r.a.createElement("div", {
                            id: "my_dillards_bar_wrapper",
                            tabIndex: "-1",
                            className: "dillardsBarPromo ".concat(this.state.showMyDillardsLogo ? "backgroundBlack" : ""),
                            onTouchEnd: this.props.closeMenu
                        }, r.a.createElement("div", {
                            className: "".concat("tablet" == this.props.passedAppFunctions.siteFormat ? "container" : "container-fluid")
                        }, r.a.createElement("div", {
                            className: "mdbContainer__row row"
                        }, r.a.createElement("div", {
                            className: "col-sm-12"
                        }, r.a.createElement("ul", {
                            className: "barItems"
                        }, "desktop" == this.props.passedAppFunctions.siteFormat && 1 == this.state.showMyDillardsLogo ? r.a.createElement(p.a, {
                            to: "/",
                            rel: "nofollow",
                            className: "logo-spot"
                        }, r.a.createElement("img", {
                            className: "myDillardsLogo",
                            src: "/assets/img/logos/smallDillardsLogo.png"
                        })) : "", 0 == this.state.showMyDillardsLogo ? r.a.createElement(A.b, {
                            className: "ES_Consolidated_Header",
                            innerHTML: this.props.headerData.JSON.ES_Consolidated_Header,
                            espotname: "ES_Consolidated_Header"
                        }) : null, r.a.createElement(I.a, {
                            onMouseOver: this.showAccountDD,
                            onMouseOut: this.hideAccountDD
                        }, r.a.createElement("li", {
                            className: "barItems__li hide-when-international myAccountDD"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&langId=-1&catalogId=301",
                            rel: "nofollow",
                            "aria-label": "login",
                            "aria-describedby": "login menu",
                            "aria-expanded": "false",
                            "aria-controls": "login menu"
                        }, "-1002" == this.props.myDillardsInfo.userInformation.userId ? "Login" : "My Account"), r.a.createElement("button", {
                            onClick: this.toggleAccountDD,
                            className: "btn-tertiary",
                            type: "button"
                        }, r.a.createElement(h.a, {
                            downArrowTitleId: "loginMenu",
                            downArrowTitleDesc: "Login Menu Dropdown"
                        })), r.a.createElement("div", {
                            id: "accountDDContainer",
                            className: "accountDDContainer ".concat(this.state.showAccountDD ? "accountDDShowContainer" : "")
                        }, r.a.createElement("div", {
                            className: "accountDD"
                        }, r.a.createElement("ul", null, "-1002" == this.props.myDillardsInfo.userInformation.userId ? r.a.createElement("li", {
                            className: "hide-when-international login"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&langId=-1&catalogId=301",
                            rel: "nofollow"
                        }, "Login")) : "", "-1002" == this.props.myDillardsInfo.userInformation.userId || "tablet" == this.props.siteFormat ? r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&langId=-1&catalogId=301",
                            rel: "nofollow"
                        }, "My Dillard's Account")) : r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement("a", {
                            href: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&langId=-1&catalogId=301",
                            rel: "nofollow"
                        }, "My Dillard's Account")), "-1002" == this.props.myDillardsInfo.userInformation.userId ? r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/LogonForm?storeId=301&catalogId=301&langId=-1&rURL=InterestItemDisplay",
                            rel: "nofollow"
                        }, "My Wish List")) : r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/InterestItemDisplay?storeId=301&catalogId=301&langId=-1",
                            rel: "nofollow"
                        }, "My Wish List")), "-1002" != this.props.myDillardsInfo.userInformation.userId && this.props.myDillardsInfo.userInformation.DefaultRegistry ? r.a.createElement("li", {
                            className: "hide-when-international"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/RegistryManageProducts?catalogId=301&langId=-1&storeId=301&actionCode=M&registryNumber=".concat(this.props.myDillardsInfo.userInformation.DefaultRegistry),
                            rel: "nofollow"
                        }, "My Registry")) : "", "-1002" == this.props.myDillardsInfo.userInformation.userId ? "" : r.a.createElement("li", {
                            className: "hide-when-international logout"
                        }, r.a.createElement(p.a, {
                            to: "/webapp/wcs/stores/servlet/Logoff?URL=/",
                            rel: "nofollow"
                        }, "Logout"))))))), r.a.createElement("li", {
                            className: "barItems__li barItems__li--noborders shopping-bag-count-container"
                        }, r.a.createElement(p.a, {
                            onClick: this.handleDoubleClick,
                            style: this.state.disableClick ? {
                                pointerEvents: "none"
                            } : {},
                            className: "d-inline-block",
                            to: "/webapp/wcs/stores/servlet/OrderItemDisplay?storeId=301&catalogId=301&langId=-1",
                            rel: "nofollow"
                        }, r.a.createElement(h.d, null), r.a.createElement("span", {
                            className: "cartItemCount"
                        }, this.props.myDillardsInfo.miniCartInfo.cartItemCount), r.a.createElement("span", {
                            className: "sr-only"
                        }, " items in cart"))))))))
                    }
                }]) && F(t.prototype, n), a && F(t, a), s
            }(a.Component);
            P.propTypes = {
                handleMyDillardsBoxClick: u.a.func
            };
            var T = n(84),
                x = (n(12), n(11)),
                j = n.n(x),
                B = [{
                    value: 0,
                    display: "Women",
                    link: "women",
                    manual_cm_sp: "Womens-_-header-_-nav"
                }, {
                    value: 1,
                    display: "Juniors",
                    link: "juniors",
                    manual_cm_sp: "Juniors-_-header-_-nav"
                }, {
                    value: 4,
                    display: "Shoes",
                    link: "shoes",
                    manual_cm_sp: "Shoes-_-header-_-nav"
                }, {
                    value: 5,
                    display: "Handbags",
                    link: "handbags",
                    manual_cm_sp: "handbags-_-header-_-nav"
                }, {
                    value: 6,
                    display: "Accessories",
                    link: "accessories",
                    manual_cm_sp: "accessories-_-header-_-nav"
                }, {
                    value: 7,
                    display: "Lingerie",
                    link: "lingerie",
                    manual_cm_sp: "lingerie-_-header-_-nav"
                }, {
                    value: 9,
                    display: "Beauty",
                    link: "beauty",
                    manual_cm_sp: "Beauty-_-header-_-nav"
                }, {
                    value: 2,
                    display: "Men",
                    link: "men",
                    manual_cm_sp: "Mens-_-header-_-nav"
                }, {
                    value: 3,
                    display: "Kids",
                    link: "kids",
                    manual_cm_sp: "Kids-_-header-_-nav"
                }, {
                    value: 8,
                    display: "Home",
                    link: "home",
                    manual_cm_sp: "Home-_-header-_-nav"
                }];
            n(249);

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function V(e, t, n) {
                return t && H(e.prototype, t), n && H(e, n), e
            }

            function W(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Z(e, t)
            }

            function Z(e, t) {
                return (Z = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function J(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = G(e);
                    if (t) {
                        var r = G(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return K(this, n)
                }
            }

            function K(e, t) {
                return !t || "object" !== q(t) && "function" != typeof t ? Y(e) : t
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function G(e) {
                return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q = function(e) {
                    W(n, e);
                    var t = J(n);

                    function n(e) {
                        var a;
                        return U(this, n), (a = t.call(this, e)).state = {}, a.sortCats = a.sortCats.bind(Y(a)), a.handleDropshadowOnSticky = a.handleDropshadowOnSticky.bind(Y(a)), a
                    }
                    return V(n, [{
                        key: "handleDropshadowOnSticky",
                        value: function() {
                            "desktop" == this.props.passedAppFunctions.siteFormat && ((window.pageYOffset || document.documentElement.scrollTop) >= 130 ? this.state.showDropshadow || this.setState({
                                showDropshadow: !0
                            }) : this.state.showDropshadow && this.setState({
                                showDropshadow: !1
                            }))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.NavMegaMenuData(), window.addEventListener("scroll", this.handleDropshadowOnSticky)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.handleDropshadowOnSticky)
                        }
                    }, {
                        key: "adaskipNavigation",
                        value: function() {
                            $(".header_promo").focus().css("outline-color", "transparent")
                        }
                    }, {
                        key: "formatURLsIfNeeded",
                        value: function(e) {
                            return e.indexOf("dillards.com") > -1 && (e = e.split("dillards.com")[1]), e
                        }
                    }, {
                        key: "sortCats",
                        value: function(e) {
                            return function(t, n) {
                                return 1 * (t[e] < n[e] ? -1 : t[e] > n[e] ? 1 : 0)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.megaMenuState.superCats;
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", {
                                id: "menu_wrapper",
                                className: "".concat(this.state.showDropshadow ? "dropShadow" : "")
                            }, "desktop" == this.props.passedAppFunctions.siteFormat ? r.a.createElement("div", {
                                className: "container-fluid"
                            }, r.a.createElement(I.a, {
                                onMouseOver: this.props.onMouseOver,
                                onMouseOut: this.props.onMouseOut
                            }, r.a.createElement("nav", {
                                id: "main_nav"
                            }, r.a.createElement("ul", {
                                className: "menu"
                            }, B.sort(this.sortCats("value")).map((function(n, a) {
                                return r.a.createElement("li", {
                                    key: a,
                                    className: "".concat("Beauty" == n.display ? "hide-when-international" : "")
                                }, r.a.createElement(p.a, {
                                    to: t ? t[n.display].link : e.formatURLsIfNeeded("/c/".concat(n.link)),
                                    id: "topcat_".concat((t ? t[n.display] : n).display),
                                    className: "topCatLink",
                                    manual_cm_sp: t ? t[n.display].manual_cm_sp : null,
                                    "data-supername": (t ? t[n.display] : n).display,
                                    onKeyDown: e.props.handleKeyPress,
                                    onMouseOver: e.props.handleSelectedMenuState,
                                    onClick: e.adaskipNavigation
                                }, (t ? t[n.display] : n).display))
                            }))), "" == this.props.getSelectedMenuState ? "" : r.a.createElement(z, {
                                megaMenuState: this.props.getSelectedMenuState,
                                menuHoverIntent: this.props.menuOpen,
                                formatURLsIfNeeded: this.formatURLsIfNeeded,
                                passedAppFunctions: this.props.passedAppFunctions,
                                closeMenu: this.props.closeMenu
                            })))) : r.a.createElement("div", {
                                className: "container"
                            }, r.a.createElement("nav", {
                                id: "main_nav"
                            }, r.a.createElement("ul", {
                                className: "menu"
                            }, B.sort(this.sortCats("value")).map((function(n, a) {
                                return r.a.createElement("li", {
                                    key: a,
                                    className: "".concat("Beauty" == n.display ? "hide-when-international" : "")
                                }, r.a.createElement(p.a, {
                                    to: t ? t[n.display].link : e.formatURLsIfNeeded("/c/".concat(n.link)),
                                    id: "topcat_".concat((t ? t[n.display] : n).display),
                                    className: "topCatLink",
                                    manual_cm_sp: t ? t[n.display].manual_cm_sp : null,
                                    "data-supername": (t ? t[n.display] : n).display,
                                    onTouchStart: e.props.handleSelectedMenuState,
                                    onTouchEnd: e.props.checkIt,
                                    onClick: e.adaskipNavigation
                                }, (t ? t[n.display] : n).display))
                            }))), "" == this.props.getSelectedMenuState ? "" : r.a.createElement(z, {
                                megaMenuState: this.props.getSelectedMenuState,
                                menuHoverIntent: this.props.menuOpen,
                                formatURLsIfNeeded: this.formatURLsIfNeeded,
                                passedAppFunctions: this.props.passedAppFunctions,
                                closeTabletMenu: this.props.closeTabletMenu,
                                closeMenu: this.props.closeMenu
                            })))), this.props.menuOpen && "tablet" === this.props.passedAppFunctions.siteFormat ? r.a.createElement("div", {
                                className: "TabletMenu__backdrop",
                                onClick: this.props.closeTabletMenu
                            }) : "")
                        }
                    }]), n
                }(a.Component),
                z = function(e) {
                    W(n, e);
                    var t = J(n);

                    function n() {
                        return U(this, n), t.apply(this, arguments)
                    }
                    return V(n, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.megaMenuState.columns;
                            return r.a.createElement("section", {
                                className: j()("mega-menu-wrapper", {
                                    "mega-menu-wrapper-open": this.props.menuHoverIntent
                                }),
                                "data-menucat": ""
                            }, r.a.createElement("div", {
                                className: "row"
                            }, t.map((function(t, n) {
                                return r.a.createElement("div", {
                                    className: "".concat(e.props.megaMenuState.columns.length > 3 ? "col-sm-3" : "col-sm-4"),
                                    key: n
                                }, t.groupings.map((function(t) {
                                    return r.a.createElement("ul", {
                                        className: "children",
                                        key: t.display + t.manual_cm_sp
                                    }, r.a.createElement("li", {
                                        className: "menuCat"
                                    }, "desktop" == e.props.passedAppFunctions.siteFormat ? r.a.createElement(p.a, {
                                        to: e.props.formatURLsIfNeeded(t.link),
                                        manual_cm_sp: t.manual_cm_sp,
                                        onClick: e.props.closeMenu
                                    }, t.display) : r.a.createElement(p.a, {
                                        to: e.props.formatURLsIfNeeded(t.link),
                                        manual_cm_sp: t.manual_cm_sp,
                                        onClick: e.props.closeTabletMenu
                                    }, t.display)), t.items.map((function(t, n) {
                                        return r.a.createElement("li", {
                                            key: n + t.display
                                        }, r.a.createElement(p.a, {
                                            to: e.props.formatURLsIfNeeded(t.link),
                                            className: "topCatSubLink",
                                            manual_cm_sp: t.manual_cm_sp,
                                            onClick: e.props.closeMenu
                                        }, t.display))
                                    })))
                                })))
                            }))))
                        }
                    }]), n
                }(a.Component),
                X = n(59),
                ee = n(41);

            function te(e) {
                return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ne(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ae(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function re(e, t, n) {
                return t && ae(e.prototype, t), n && ae(e, n), e
            }

            function oe(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && se(e, t)
            }

            function se(e, t) {
                return (se = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ie(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = le(e);
                    if (t) {
                        var r = le(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return ce(this, n)
                }
            }

            function ce(e, t) {
                return !t || "object" !== te(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function le(e) {
                return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n(251);
            var ue = function(e) {
                    oe(n, e);
                    var t = ie(n);

                    function n(e) {
                        return ne(this, n), t.call(this, e)
                    }
                    return re(n, [{
                        key: "render",
                        value: function() {
                            return this.state.content ? r.a.createElement("div", {
                                className: "perm-tippy-top desktop-perm-tippy-top",
                                onTouchEnd: this.closeMenu
                            }, r.a.createElement(A.b, {
                                className: "perm-tippy-top-contents",
                                innerHTML: this.state.content
                            })) : null
                        }
                    }]), n
                }(ee.c),
                pe = (ee.b, ue);

            function de(e) {
                return (de = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function me() {
                return (me = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function he(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function fe(e, t) {
                return (fe = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ye(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = be(e);
                    if (t) {
                        var r = be(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return ve(this, n)
                }
            }

            function ve(e, t) {
                return !t || "object" !== de(t) && "function" != typeof t ? ge(e) : t
            }

            function ge(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function be(e) {
                return (be = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n(182);
            var we = "/webapp/wcs/stores/servlet/",
                Ee = "storeId=301&langId=-1&catalogId=301&caller=node",
                _e = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && fe(e, t)
                    }(i, e);
                    var t, n, a, o = ye(i);

                    function i(e) {
                        var t, n, a, r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), t = o.call(this, e), n = ge(t), r = function() {
                            var e = t.props.myDillardsInfo.miniCartInfo.cartItemCount !== (t.state.miniCartPopoutData ? t.state.miniCartPopoutData.productInfo.length : "");
                            !t.state.fetchMiniCartRunning && e && "US" == window.DILLARDS.country && "true" == t.props.passedAppFunctions.wasParms.isMiniCartPopoutOn && (t.state.fetchMiniCartRunning = !0, Object(X.a)("post", "".concat(we, "MiniCartPopoutCmd"), Ee).then((function(e) {
                                t.props.passedAppFunctions.updateStateWithCookies(), t.setState({
                                    miniCartPopoutData: e.data,
                                    fetchMiniCartRunning: !1
                                })
                            })))
                        }, (a = "fetchMiniCart") in n ? Object.defineProperty(n, a, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[a] = r, t.state = {
                            myDillardsBoxOpened: !1,
                            activeTab: "1",
                            megaMenuState: {},
                            miniCartPopoutData: "",
                            myDillardsWishlistInfo: "",
                            myDillardsOrderInfo: "",
                            headerClicked: null,
                            menuOpen: !1,
                            previousCatClicked: null,
                            getSelectedMenuState: "",
                            slideIndex: 0,
                            updateCount: 0,
                            isMiniCartOpen: !1,
                            isPlaying: !0,
                            initialStatePosition: !1
                        }, t.handleMyDillardsBoxOver = t.handleMyDillardsBoxOver.bind(ge(t)), t.handleMyDillardsBoxLeave = t.handleMyDillardsBoxLeave.bind(ge(t)), t.handleClickOpenMiniCart = t.handleClickOpenMiniCart.bind(ge(t)), t.handleClickCloseMiniCart = t.handleClickCloseMiniCart.bind(ge(t)), t.toggle = t.toggle.bind(ge(t)), t.NavMegaMenuData = t.NavMegaMenuData.bind(ge(t)), t.handleNavMegaMenuData = t.handleNavMegaMenuData.bind(ge(t)), t.removeItemFromBag = t.removeItemFromBag.bind(ge(t)), t.moveItemToWishList = t.moveItemToWishList.bind(ge(t)), t.removeItemFromWishList = t.removeItemFromWishList.bind(ge(t)), t.moveItemToBag = t.moveItemToBag.bind(ge(t)), t.closeTabletMenu = t.closeTabletMenu.bind(ge(t)), t.handleSelectedMenuState = t.handleSelectedMenuState.bind(ge(t)), t.handleKeyPress = t.handleKeyPress.bind(ge(t)), t.checkIt = t.checkIt.bind(ge(t)), t.onMouseOver = t.onMouseOver.bind(ge(t)), t.onMouseOut = t.onMouseOut.bind(ge(t)), t.closeMenu = t.closeMenu.bind(ge(t)), t.handleTippyPausePlay = t.handleTippyPausePlay.bind(ge(t)), t.state.storedMyDillardsInfo = JSON.parse(JSON.stringify(t.props.myDillardsInfo)), t.state.storedIsInternational = t.props.passedAppFunctions.isInternational(), t.state.storedCountry = t.props.passedAppFunctions.country, t.state.storedCurrency = t.props.passedAppFunctions.currency, t.forceHeaderRender = t.forceHeaderRender.bind(ge(t)), t.scrollToContent = t.scrollToContent.bind(ge(t)), t.handleMenuScroll = t.handleMenuScroll.bind(ge(t)), t
                    }
                    return t = i, (n = [{
                        key: "forceHeaderRender",
                        value: function() {
                            this.setState({
                                force: !0
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.forceHeaderRender = this.forceHeaderRender, window.addEventListener("scroll", this.handleMenuScroll)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.handleMenuScroll)
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            var n = !1;
                            return _.isEqual(e.passedAppFunctions.testFlags, this.props.passedAppFunctions.testFlags) || (n = !0), _.isEqual(e.myDillardsInfo, this.state.storedMyDillardsInfo) || (this.state.storedMyDillardsInfo = JSON.parse(JSON.stringify(this.props.myDillardsInfo)), n = !0), this.props.passedAppFunctions.isInternational() != this.state.storedIsInternational && (this.state.storedIsInternational = this.props.passedAppFunctions.isInternational(), n = !0), this.props.passedAppFunctions.country == this.state.storedCountry && this.props.passedAppFunctions.currency == this.state.storedCurrency || (this.state.storedCountry = this.props.passedAppFunctions.country, this.state.storedCurrency = this.props.passedAppFunctions.currency, n = !0), _.isEqual(this.state, t) || (n = !0), n
                        }
                    }, {
                        key: "handleMenuScroll",
                        value: function() {
                            "desktop" == this.props.passedAppFunctions.siteFormat && ((window.pageYOffset || document.documentElement.scrollTop) >= 100 ? this.state.initialStatePosition || this.setState({
                                initialStatePosition: !0
                            }) : this.state.initialStatePosition && this.setState({
                                initialStatePosition: !1
                            })), this.setState({
                                menuOpen: !1,
                                previousCatClicked: null
                            }), null !== document.activeElement && document.activeElement.blur()
                        }
                    }, {
                        key: "handleMyDillardsBoxOver",
                        value: function(e) {
                            var t = this;
                            this.state.myDillardsBoxOpened || (this.fetchMiniCart(), setTimeout((function() {
                                t.setState({
                                    myDillardsBoxOpened: !0
                                })
                            }), 500))
                        }
                    }, {
                        key: "handleMyDillardsBoxLeave",
                        value: function(e) {
                            this.setState({
                                myDillardsBoxOpened: !1
                            })
                        }
                    }, {
                        key: "handleClickOpenMiniCart",
                        value: function(e) {
                            document.body.classList.add("minicart-open"), e.stopPropagation(), this.setState({
                                isMiniCartOpen: !0
                            }), this.fetchMiniCart()
                        }
                    }, {
                        key: "handleClickCloseMiniCart",
                        value: function(e) {
                            e.stopPropagation(), this.state.isMiniCartOpen && (this.setState({
                                isMiniCartOpen: !1
                            }), document.body.classList.remove("minicart-open"))
                        }
                    }, {
                        key: "fetchMyDillardsWishlistInfo",
                        value: function() {
                            var e = this;
                            this.state.fetchMyDillardsWishlistInfoRunning || this.state.myDillardsWishlistInfo || (this.state.fetchMyDillardsWishlistInfoRunning = !0, Object(X.a)("post", "".concat(we, "MyDillardsInterestItems"), Ee).then((function(t) {
                                e.state.fetchMyDillardsWishlistInfoRunning = !1, e.setState({
                                    myDillardsWishlistInfo: t.data
                                })
                            })))
                        }
                    }, {
                        key: "fetchMyDillardsOrderInfo",
                        value: function() {
                            var e = this;
                            this.state.fetchMyDillardsOrderInfoRunning || this.state.myDillardsOrderInfo || (this.state.fetchMyDillardsOrderInfoRunning = !0, Object(X.a)("post", "".concat(we, "MyDillardsOrderHistoryList"), Ee).then((function(t) {
                                e.state.fetchMyDillardsOrderInfoRunning = !1, e.setState({
                                    myDillardsOrderInfo: t.data
                                })
                            })))
                        }
                    }, {
                        key: "toggle",
                        value: function(e) {
                            this.state.activeTab !== e && (this.fetchMyDillardsWishlistInfo(), this.fetchMyDillardsOrderInfo(), this.fetchMiniCart(), this.setState({
                                activeTab: e
                            }))
                        }
                    }, {
                        key: "NavMegaMenuData",
                        value: function() {
                            var e = this,
                                t = {
                                    method: "get",
                                    url: "/html/dropdown.json?v=" + this.props.headerData.JSON.wasParms.cacheCallVariable
                                };
                            s()(t).then((function(t) {
                                var n = t.data;
                                "string" == typeof n && (n = n.replace(/[\u0000-\u001f]/g, ""), n = JSON.parse(n)), e.setState({
                                    megaMenuState: n
                                })
                            }))
                        }
                    }, {
                        key: "handleNavMegaMenuData",
                        value: function(e) {
                            var t = this;
                            setTimeout((function() {
                                t.NavMegaMenuData()
                            }), 500)
                        }
                    }, {
                        key: "moveItemToWishList",
                        value: function(e) {
                            var t = this,
                                n = (e.currentTarget.getAttribute("data-index"), e.currentTarget.getAttribute("data-attributes").split("#double;").join('"').split("#back;").join("\\")),
                                a = e.currentTarget.getAttribute("data-catentryid"),
                                r = e.currentTarget.getAttribute("data-orderitemid"),
                                o = "/webapp/wcs/stores/servlet/InterestItemAdd?";
                            o += "orderItemId=" + r + "&orderId=.&updatePrices=1&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&productId=" + a + "&field3=" + n + "&catEntryId=" + a + "&errorViewName=InterestItemDisplay&wlFromAjaxBag=true", o += "&URL=InterestItemAdd%3fURL%3dInterestItemDisplay", o += "&rURL=InterestItemAdd%3FwlFromAjaxBag%3Dtrue%26orderId%3d.%26field3%3d" + n + "%26orderItemId%3d" + r + "%26langId%3d-1%26storeId%3d301%26catalogId%3d301%26catEntryId%3d" + a + "%26productId%3d" + a + "%26URL%3dInterestItemDisplay", $.ajax({
                                type: "POST",
                                url: o,
                                success: function(e, n) {
                                    return e.indexOf("Verify Your Password") >= 0 ? window.location = o : e.indexOf("You have reached the limit of items in your wishlist") >= 0 ? t.setState({
                                        shoppingBagMessage: "You have reached the limit of items in your wishlist"
                                    }) : (t.state.miniCartPopoutData = !1, t.state.myDillardsWishlistInfo = !1, t.fetchMiniCart()), !1
                                },
                                error: function(e, t, o) {
                                    var s = "/webapp/wcs/stores/servlet/InterestItemAdd?";
                                    s += "orderItemId=" + r + "&orderId=.&updatePrices=1&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&productId=" + a + "&field3=" + n + "&catEntryId=" + a + "&errorViewName=3DInterestItemDisplay&wlFromAjaxBag=true", s += "&URL=InterestItemAdd%3fURL%3dInterestItemDisplay", s += "&rURL=InterestItemAdd%3FwlFromAjaxBag%3Dtrue%26orderId%3d.%26field3%3d" + n + "%26orderItemId%3d" + r + "%26langId%3d-1%26storeId%3d301%26catalogId%3d301%26catEntryId%3d" + a + "%26productId%3d" + a + "%26URL%3dInterestItemDisplay", window.location = s
                                }
                            })
                        }
                    }, {
                        key: "removeItemFromBag",
                        value: function(e) {
                            var t = this,
                                n = (e.currentTarget.getAttribute("data-index"), e.currentTarget.getAttribute("data-catentryid")),
                                a = e.currentTarget.getAttribute("data-orderitemid"),
                                r = "/webapp/wcs/stores/servlet/OrderItemDelete?";
                            r += "orderItemId=" + a + "&orderId=.&updatePrices=1&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&productId=" + n + "&errorViewName=OrderItemDisplayView", r += "&URL=OrderCalculate%3FURL%3DOrderItemDisplay%26location%3DMyDillards", $.ajax({
                                type: "POST",
                                url: r,
                                dataType: "json",
                                success: function(e, n) {
                                    t.state.miniCartPopoutData = !1, t.fetchMiniCart()
                                },
                                error: function(e, t, r) {
                                    var o = "/webapp/wcs/stores/servlet/OrderItemDelete?";
                                    return o += "orderItemId=" + a + "&orderId=.&updatePrices=1&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&productId=" + n + "&errorViewName=OrderItemDisplayView", o += "&URL=OrderCalculate%3FURL%3DOrderItemDisplay", window.location = o, !1
                                }
                            })
                        }
                    }, {
                        key: "moveItemToBag",
                        value: function(e) {
                            var t = this,
                                n = (e.target.getAttribute("data-index"), e.target.getAttribute("data-attributes").split("#double;").join('"').split("#back;").join("\\")),
                                a = e.target.getAttribute("data-catentryid"),
                                r = "/webapp/wcs/stores/servlet/InterestItemDelete?";
                            r += "catEntryId=" + a + "&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&calculationUsageId=-2&updatePrices=1&quantity=1&errorViewName=InterestItemDisplayView", r += "&URL=OrderItemAdd%3FURL%3DOrderCalculate%3FURL%3DOrderItemDisplay%26location%3DMyDillards%26cm_vc%3Dwishlist%26myDillardsBar%3Dtrue%26catEntryId%3D" + a + "&field2=" + n, $.ajax({
                                type: "POST",
                                url: r,
                                dataType: "json",
                                success: function(e, n) {
                                    return t.state.myDillardsWishlistInfo = !1, t.state.miniCartPopoutData = !1, t.fetchMyDillardsWishlistInfo(), t.props.passedAppFunctions.updateStateWithCookies(), !1
                                },
                                error: function(e, t, n) {
                                    var r = "/webapp/wcs/stores/servlet/InterestItemDelete?";
                                    return r += "catEntryId=" + a + "&storeId=301&catalogId=301&langId=-1&calculationUsageId=-1&calculationUsageId=-2&updatePrices=1&quantity=1&errorViewName=InterestItemDisplayView", r += "&URL=OrderItemAdd%3FURL%3DOrderCalculate%3FURL%3DOrderItemDisplay%26cm_vc%3Dwishlist%26catEntryId%3D" + a, window.location = r, !1
                                }
                            })
                        }
                    }, {
                        key: "removeItemFromWishList",
                        value: function(e) {
                            var t = this,
                                n = (e.target.getAttribute("data-index"), e.target.getAttribute("data-catentryid")),
                                a = "/webapp/wcs/stores/servlet/InterestItemDelete?";
                            a += "catEntryId=" + n + "&listId=.&storeId=301&catalogId=301&langId=-1&location=RemoveOnly&URL=InterestItemDisplay", $.ajax({
                                type: "POST",
                                url: a,
                                dataType: "json",
                                success: function(e, n) {
                                    return t.state.myDillardsWishlistInfo = !1, t.fetchMyDillardsWishlistInfo(), !1
                                },
                                error: function(e, t, a) {
                                    var r = "/webapp/wcs/stores/servlet/InterestItemDelete?";
                                    return r += "catEntryId=" + n + "&listId=.&storeId=301&catalogId=301&langId=-1&URL=InterestItemDisplay", window.location = r, !1
                                }
                            })
                        }
                    }, {
                        key: "myDillardsBarFunctions",
                        value: function() {
                            return {
                                moveItemToWishList: this.moveItemToWishList,
                                removeItemFromBag: this.removeItemFromBag,
                                moveItemToBag: this.moveItemToBag,
                                removeItemFromWishList: this.removeItemFromWishList,
                                shoppingBagMessage: this.state.shoppingBagMessage
                            }
                        }
                    }, {
                        key: "closeTabletMenu",
                        value: function(e) {
                            this.setState({
                                menuOpen: !1,
                                previousCatClicked: null
                            })
                        }
                    }, {
                        key: "closeMenu",
                        value: function() {
                            this.setState({
                                menuOpen: !1,
                                previousCatClicked: null
                            })
                        }
                    }, {
                        key: "onMouseOver",
                        value: function() {
                            "desktop" == this.props.passedAppFunctions.siteFormat && this.setState({
                                menuOpen: !0
                            })
                        }
                    }, {
                        key: "onMouseOut",
                        value: function() {
                            "desktop" == this.props.passedAppFunctions.siteFormat && this.setState({
                                menuOpen: !1
                            })
                        }
                    }, {
                        key: "handleSelectedMenuState",
                        value: function(e) {
                            var t = e.target.dataset.supername;
                            0 != t && this.state.megaMenuState.superCats && this.setState({
                                getSelectedMenuState: this.state.megaMenuState.superCats[t]
                            })
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            "Enter" == e.key ? (e.preventDefault(), this.handleSelectedMenuState(e), this.onMouseOver) : this.onMouseOut
                        }
                    }, {
                        key: "checkIt",
                        value: function(e) {
                            var t = e.target.dataset.supername;
                            "tablet" == this.props.passedAppFunctions.siteFormat && (this.setState({
                                previousCatClicked: t
                            }), $(e.target).removeClass("noHover"), t == this.state.previousCatClicked ? (this.closeTabletMenu(), this.setState({
                                previousCatClicked: null
                            }), $(e.target).addClass("noHover")) : (e.preventDefault(e), $(e.target).addClass("topCatHover"), $(".mega-menu-wrapper").attr("data-menucat", "".concat(e.target.text)), this.setState({
                                menuOpen: !0
                            }))), $("input").trigger("blur")
                        }
                    }, {
                        key: "handleTippyPausePlay",
                        value: function() {
                            this.state.isPlaying ? (this.setState({
                                isPlaying: !1
                            }), this.slider.slickPause()) : (this.setState({
                                isPlaying: !0
                            }), this.slider.slickPlay())
                        }
                    }, {
                        key: "scrollToContent",
                        value: function() {
                            "desktop" == this.props.passedAppFunctions.siteFormat && $("html, body").animate({
                                scrollTop: $("#content_wrapper").offset().top - 70
                            }, 50)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = {
                                    infinite: !0,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: !0,
                                    vertical: !0,
                                    speed: 500,
                                    autoplaySpeed: 5e3,
                                    arrows: !1,
                                    pauseOnHover: "tablet" != this.props.passedAppFunctions.siteFormat,
                                    onInit: function() {
                                        "undefined" != typeof window && ($(".promoWrapper a").attr("tabindex", "-1"), $(".slick-current .promoWrapper a").removeAttr("tabindex"))
                                    },
                                    afterChange: function() {
                                        "undefined" != typeof window && ($(".promoWrapper a").attr("tabindex", "-1"), $(".slick-current .promoWrapper a").removeAttr("tabindex"))
                                    }
                                };
                            try {
                                if ("undefined" != typeof window)
                                    for (var n = navigator.userAgent, a = ["Googlebot", "Chrome-Lighthouse", "PTST", "AdsBot-Google", "DuckDuckBot", "Slurp", "Baiduspider", "YandexBot", "Facebot", "facebookexternalhit", "ia_archiver", "LinkedInBot", "Google Page Speed Insights", "Search Console", "Sogou web spider", "bingbot", "Twitterbot", "YandexMobileBot", "Pingdom.com_bot", "SpeedCurve"], o = 0; o < a.length; o++)
                                        if (n.indexOf(a[o]) > -1) {
                                            t.autoplay = !1;
                                            break
                                        }
                            } catch (e) {}
                            var s = [];
                            if (this.props.headerData.JSON.ES_Header_Promo_JSON && Array.isArray(this.props.headerData.JSON.ES_Header_Promo_JSON) && (s = this.props.headerData.JSON.ES_Header_Promo_JSON), "undefined" != typeof window && window.injectHeaderPromos) try {
                                s = window.injectHeaderPromos(s)
                            } catch (e) {
                                console.log(e)
                            }
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement(pe, {
                                closeMenu: this.closeMenu
                            }), r.a.createElement("div", {
                                id: "headerPromo",
                                className: "header_promo",
                                tabIndex: "-1"
                            }, r.a.createElement("a", {
                                className: "skipNavigation",
                                href: "#content_wrapper",
                                title: "Skip to main content",
                                onClick: this.scrollToContent
                            }, "Skip to main content"), r.a.createElement("div", {
                                className: "header_promo_wrapper",
                                onTouchEnd: this.closeMenu
                            }, r.a.createElement(c.a, me({
                                ref: function(t) {
                                    return e.slider = t
                                }
                            }, t), s.map((function(e, t) {
                                return r.a.createElement(r.a.Fragment, {
                                    key: t
                                }, r.a.createElement(A.a, {
                                    className: "promoWrapper",
                                    innerHTML: t > 0 ? e.split("tabindex").join("asdindex") : e
                                }))
                            }))), r.a.createElement("button", {
                                className: "button",
                                onClick: this.handleTippyPausePlay
                            }, this.state.isPlaying ? [r.a.createElement("svg", {
                                className: "pauseButtonTippy",
                                role: "img",
                                "aria-labelledby": "pauseButton",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 45 47",
                                width: "15",
                                key: "0"
                            }, r.a.createElement("title", {
                                id: "pauseButton"
                            }, "pause promo"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("rect", {
                                width: "17",
                                height: "47",
                                rx: "2.2"
                            }), r.a.createElement("rect", {
                                x: "28",
                                width: "17",
                                height: "47",
                                rx: "2.2"
                            })))), "Pause"] : [r.a.createElement("svg", {
                                className: "playButtonTippy",
                                role: "img",
                                "aria-labelledby": "playButton",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 42.43 48.31",
                                width: "15",
                                key: "0"
                            }, r.a.createElement("title", {
                                id: "playButton"
                            }, "play promo"), r.a.createElement("g", {
                                "data-name": "Layer 2"
                            }, r.a.createElement("g", {
                                "data-name": "Layer 1"
                            }, r.a.createElement("path", {
                                d: "M2.63.46,42,23.06a1.54,1.54,0,0,1,0,2.19L2.63,47.86A1.54,1.54,0,0,1,0,46.76V1.55A1.54,1.54,0,0,1,2.63.46Z"
                            })))), "Play"]))), r.a.createElement(P, {
                                handleMyDillardsBoxOver: this.handleMyDillardsBoxOver,
                                handleMyDillardsBoxLeave: this.handleMyDillardsBoxLeave,
                                myDillardsBoxOpened: this.state.myDillardsBoxOpened,
                                toggle: this.toggle,
                                activeTab: this.state.activeTab,
                                myDillardsInfo: this.props.myDillardsInfo,
                                handleClickOpenMiniCart: this.handleClickOpenMiniCart,
                                handleClickCloseMiniCart: this.handleClickCloseMiniCart,
                                isMiniCartOpen: this.state.isMiniCartOpen,
                                fetchMiniCart: this.fetchMiniCart,
                                miniCartPopoutData: this.state.miniCartPopoutData,
                                myDillardsWishlistInfo: this.state.myDillardsWishlistInfo,
                                myDillardsOrderInfo: this.state.myDillardsOrderInfo,
                                myDillardsBarFunctions: this.myDillardsBarFunctions(),
                                domainName: this.props.passedAppFunctions.wasParms.domainName,
                                passedAppFunctions: this.props.passedAppFunctions,
                                siteFormat: this.props.siteFormat,
                                headerData: this.props.headerData,
                                closeMenu: this.closeMenu
                            }), "desktop" == this.props.siteFormat && 1 == this.state.initialStatePosition && null != this.props.passedAppFunctions.testFlags.headerRedesign && 1 == this.props.passedAppFunctions.testFlags.headerRedesign ? r.a.createElement(Q, {
                                passedAppFunctions: this.props.passedAppFunctions,
                                NavMegaMenuData: this.NavMegaMenuData,
                                megaMenuState: this.state.megaMenuState,
                                handleNavMegaMenuData: this.handleNavMegaMenuData,
                                checkIt: this.checkIt,
                                menuOpen: this.state.menuOpen,
                                onMouseOut: this.onMouseOut,
                                onMouseOver: this.onMouseOver,
                                getSelectedMenuState: this.state.getSelectedMenuState,
                                handleSelectedMenuState: this.handleSelectedMenuState,
                                closeTabletMenu: this.closeTabletMenu,
                                closeMenu: this.closeMenu
                            }) : "", r.a.createElement("section", {
                                id: "header_desktop_wrapper",
                                className: "header_desktop_wrapper_promo",
                                onTouchEnd: this.closeMenu
                            }, r.a.createElement("div", {
                                className: "".concat("tablet" == this.props.passedAppFunctions.siteFormat ? "container" : "container-fluid")
                            }, r.a.createElement("header", {
                                id: "header",
                                onClick: this.closeTabletMenu,
                                className: "row ".concat(null != this.props.passedAppFunctions.testFlags.headerRedesign && 1 == this.props.passedAppFunctions.testFlags.headerRedesign ? "inline-header align-items-center" : "")
                            }, r.a.createElement("div", {
                                className: "".concat(null != this.props.passedAppFunctions.testFlags.headerRedesign && 1 == this.props.passedAppFunctions.testFlags.headerRedesign && "desktop" == this.props.passedAppFunctions.siteFormat ? "col-sm-2 inline-logo" : "col-sm-2")
                            }, r.a.createElement(A.a, {
                                innerHTML: this.props.headerData.JSON.ES_Logo,
                                espotname: "ES_Logo"
                            })), "desktop" == this.props.siteFormat && 0 == this.state.initialStatePosition && null != this.props.passedAppFunctions.testFlags.headerRedesign && 1 == this.props.passedAppFunctions.testFlags.headerRedesign ? r.a.createElement("div", {
                                className: "col inline-nav p-0"
                            }, r.a.createElement(Q, {
                                passedAppFunctions: this.props.passedAppFunctions,
                                NavMegaMenuData: this.NavMegaMenuData,
                                megaMenuState: this.state.megaMenuState,
                                handleNavMegaMenuData: this.handleNavMegaMenuData,
                                checkIt: this.checkIt,
                                menuOpen: this.state.menuOpen,
                                onMouseOut: this.onMouseOut,
                                onMouseOver: this.onMouseOver,
                                getSelectedMenuState: this.state.getSelectedMenuState,
                                handleSelectedMenuState: this.handleSelectedMenuState,
                                closeTabletMenu: this.closeTabletMenu,
                                closeMenu: this.closeMenu
                            })) : "", r.a.createElement("div", {
                                className: "".concat(null != this.props.passedAppFunctions.testFlags.headerRedesign && "desktop" == this.props.passedAppFunctions.siteFormat && 1 == this.props.passedAppFunctions.testFlags.headerRedesign ? "col-sm-3 inline-search" : "col-sm-10")
                            }, r.a.createElement(T.a, {
                                passedAppFunctions: this.props.passedAppFunctions
                            }))))), null == this.props.passedAppFunctions.testFlags.headerRedesign || null != this.props.passedAppFunctions.testFlags.headerRedesign && 0 == this.props.passedAppFunctions.testFlags.headerRedesign || "tablet" == this.props.siteFormat ? r.a.createElement(Q, {
                                passedAppFunctions: this.props.passedAppFunctions,
                                NavMegaMenuData: this.NavMegaMenuData,
                                megaMenuState: this.state.megaMenuState,
                                handleNavMegaMenuData: this.handleNavMegaMenuData,
                                checkIt: this.checkIt,
                                menuOpen: this.state.menuOpen,
                                onMouseOut: this.onMouseOut,
                                onMouseOver: this.onMouseOver,
                                getSelectedMenuState: this.state.getSelectedMenuState,
                                handleSelectedMenuState: this.handleSelectedMenuState,
                                closeTabletMenu: this.closeTabletMenu,
                                closeMenu: this.closeMenu
                            }) : "")
                        }
                    }]) && he(t.prototype, n), a && he(t, a), i
                }(a.Component);
            t.a = _e
        },
        182: function(e, t, n) {},
        249: function(e, t, n) {},
        251: function(e, t, n) {},
        83: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n(0),
                r = n.n(a);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = p(e);
                    if (t) {
                        var r = p(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return l(this, n)
                }
            }

            function l(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? u(e) : t
            }

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t)
                }(l, e);
                var t, n, a, o = c(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = o.call(this, e)).cartTimerRef = r.a.createRef(), t.startTimer = t.startTimer.bind(u(t)), t
                }
                return t = l, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.startTimer()
                    }
                }, {
                    key: "startTimer",
                    value: function() {
                        if (this.cartTimerRef.current && null != this.cartTimerRef.current && "true" == this.props.passedAppFunctions.wasParms.activateCartTimer) var e = 1 * this.props.passedAppFunctions.wasParms.cartTimerTimeOutValue,
                            t = this.cartTimerRef.current,
                            n = t.dataset.carttimer,
                            a = new Date(1 * n).getTime(),
                            r = new Date(a + 6e4 * e).getTime(),
                            o = setInterval((function() {
                                var e = (new Date).getTime(),
                                    n = r - e,
                                    a = Math.floor(n % 36e5 / 6e4),
                                    s = Math.floor(n % 6e4 / 1e3);
                                null != t && (t.innerText = "Reserved  " + a + ":" + function(e, t) {
                                    for (var n = e + ""; n.length < t;) n = "0" + n;
                                    return n
                                }(s, 2)), n < 0 && (clearInterval(o), null != t && (t.innerHTML = "<i></i>"))
                            }), 1e3)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.a.createElement(r.a.Fragment, null, this.props.timeStamp && this.props.timeStamp.length && "" != this.props.timeStamp && "true" == this.props.passedAppFunctions.wasParms.activateCartTimer ? r.a.createElement("span", {
                            id: "cartTimer",
                            "data-carttimer": this.props.timeStamp,
                            className: "cartTimer hide-when-international",
                            ref: this.cartTimerRef
                        }) : "")
                    }
                }]) && s(t.prototype, n), a && s(t, a), l
            }(a.Component);
            t.b = d
        },
        84: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return D
            }));
            var a = n(0),
                r = n.n(a),
                o = n(44),
                s = n.n(o),
                i = n(28),
                c = n.n(i),
                l = n(29),
                u = n.n(l),
                p = n(8),
                d = n.n(p),
                m = n(129),
                h = (n(5), n(52)),
                f = n(10),
                y = n(16);

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return E(this, n)
                }
            }

            function E(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? _(e) : t
            }

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && b(e, t)
                }(i, e);
                var t, n, a, o = w(i);

                function i(e) {
                    var t, n, a, s;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), t = o.call(this, e), n = _(t), s = function(e) {
                        var n = e.keyCode;
                        if (13 == n && (t.clearSearchTerm(), t.searchInputFocus(), e.preventDefault()), 9 == n) return e.preventDefault(), t.searchBtnFocus(), !1
                    }, (a = "checkForClear") in n ? Object.defineProperty(n, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[a] = s, t.handleKeyDown = t.handleKeyDown.bind(_(t)), t.searchBtnRef = r.a.createRef(), t.exBtnRef = r.a.createRef(), t.searchInputRef = r.a.createRef(), t.searchBtnFocus = t.searchBtnFocus.bind(_(t)), t.clearIconFocus = t.clearIconFocus.bind(_(t)), t.suggestionsTab = t.suggestionsTab.bind(_(t)), t
                }
                return t = i, (n = [{
                    key: "searchBtnFocus",
                    value: function() {
                        this.searchBtnRef.current.focus()
                    }
                }, {
                    key: "clearIconFocus",
                    value: function() {
                        this.exBtnRef.current.focus()
                    }
                }, {
                    key: "searchInputFocus",
                    value: function() {
                        this.searchInputRef.current.focus()
                    }
                }, {
                    key: "suggestionsTab",
                    value: function() {
                        this.clearIconFocus()
                    }
                }, {
                    key: "handleKeyDown",
                    value: function(e) {
                        var t = e.keyCode;
                        if ([38, 40, 9, 13].indexOf(t) > -1)
                            if (this.state.searchTerm.length <= 0 && 9 == t && $(".btn-search-react").focus(), this.state.searchTerm.length > 0 && 9 == t && 0 == this.state.suggestionView.entry.length && this.clearIconFocus(), this.state.suggestionView.entry.length > 0 && $("#suggestions-wrapper ul li:last-of-type").hasClass("highlighted-suggestion") && 13 != t && this.suggestionsTab(), e.shiftKey && 9 == t && $(".text--limitedAvailability").focus(), 13 != t && e.preventDefault(), 38 == t)
                                if (this.state.highlightedSuggestion.number > 0) {
                                    var n = this.state.suggestionView.entry[this.state.highlightedSuggestion.number - 1];
                                    this.setState({
                                        highlightedSuggestion: {
                                            number: this.state.highlightedSuggestion.number - 1,
                                            url: n.responseURL
                                        }
                                    })
                                } else this.setState({
                                    highlightedSuggestion: {
                                        number: -1,
                                        url: void 0
                                    }
                                });
                        else 40 == t || 9 == t ? this.state.suggestionView.entry.length - 1 > this.state.highlightedSuggestion.number && (n = this.state.suggestionView.entry[this.state.highlightedSuggestion.number + 1], this.setState({
                            highlightedSuggestion: {
                                number: this.state.highlightedSuggestion.number + 1,
                                url: n.responseURL
                            }
                        })) : 13 == t && this.handleSubmit(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.a.createElement("div", {
                            className: this.state.emptyTermSubmit ? "search-area-react has-error" : "search-area-react"
                        }, r.a.createElement(c.a, {
                            inline: !0,
                            onSubmit: this.handleSubmit,
                            action: this.state.highlightedSuggestion.url || this.state.registryUrl || "/search-term/".concat(Object(y.a)(this.state.searchTerm)),
                            method: "GET"
                        }, r.a.createElement(u.a, null, this.state.emptyTermSubmit ? r.a.createElement("label", {
                            htmlFor: "headerSiteSearch",
                            className: "sr-only"
                        }, "Enter a valid search term") : r.a.createElement("label", {
                            htmlFor: "headerSiteSearch",
                            className: "sr-only"
                        }, "Search"), r.a.createElement(d.a, {
                            ref: this.searchInputRef,
                            tabIndex: "0",
                            id: "headerSiteSearch",
                            placeholder: this.state.emptyTermSubmit ? "Enter a valid search term" : "What are you shopping for?",
                            type: "text",
                            role: "textbox",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            value: "null" == this.state.searchTerm ? "" : this.state.searchTerm,
                            onKeyDown: this.handleKeyDown,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onClick: this.searchAreaFocus,
                            className: "form-control search-input-react search-enabled"
                        }), this.state.searchTerm.length > 0 ? r.a.createElement("button", {
                            type: "button",
                            ref: this.exBtnRef,
                            tabIndex: "0",
                            className: "clearSearchX",
                            onClick: this.clearSearchTerm,
                            onKeyDown: this.checkForClear
                        }, r.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 48.77 48.77"
                        }, r.a.createElement("title", null, "close"), r.a.createElement("g", {
                            "data-name": "Layer 2"
                        }, r.a.createElement("g", {
                            "data-name": "Layer 1"
                        }, r.a.createElement("path", {
                            d: "M25.8,24.39,48.48,1.71A1,1,0,0,0,47.07.29L24.39,23,1.71.29A1,1,0,0,0,.29,1.71L23,24.39.29,47.07a1,1,0,1,0,1.41,1.41L24.39,25.8,47.07,48.48a1,1,0,0,0,1.41-1.41Z"
                        }))))) : "", r.a.createElement(s.a, {
                            "data-twist": "search-button",
                            className: "btn-react btn-search-react",
                            title: "Search Dillards.com",
                            type: "submit",
                            role: "button"
                        }, r.a.createElement(f.e, {
                            ref: this.searchBtnRef
                        })), "undefined" != typeof window && "US" != window.DILLARDS.country ? r.a.createElement(d.a, {
                            type: "hidden",
                            name: "facet",
                            value: "dil_shipinternational:Y"
                        }) : "", this.state.searchName ? r.a.createElement(d.a, {
                            type: "hidden",
                            name: "searchName",
                            value: this.state.searchName
                        }) : "", this.state.actionCode ? r.a.createElement(d.a, {
                            type: "hidden",
                            name: "actionCode",
                            value: this.state.actionCode
                        }) : "", r.a.createElement("input", {
                            type: "hidden",
                            value: "Y",
                            name: "realSearch"
                        }))), this.state.searchBoxActive && this.state.suggestionView.entry.length > 0 ? r.a.createElement("div", {
                            id: "suggestions-wrapper",
                            className: this.state.searchHistoryActive ? "recentSearchesReact" : ""
                        }, this.state.searchHistoryActive ? [r.a.createElement("h4", {
                            key: "0"
                        }, "Recent Searches"), r.a.createElement("span", {
                            className: "clearRecent",
                            onClick: this.clearSearchHist,
                            onTouchStart: this.handleLinkDown,
                            onMouseDown: this.handleLinkDown,
                            onMouseUp: this.handleLinkUp,
                            key: "1"
                        }, "Clear")] : null, r.a.createElement("ul", null, this.state.suggestionView.entry.map((function(t, n) {
                            return r.a.createElement("li", {
                                key: "".concat(t.displayName).concat(t.responseURL),
                                className: n == e.state.highlightedSuggestion.number ? "highlighted-suggestion" : "",
                                onTouchStart: e.handleLinkDown,
                                onMouseDown: e.handleLinkDown,
                                onClick: e.handleLinkUp,
                                onMouseUp: e.handleLinkUp,
                                onKeyDown: e.suggestionsTab
                            }, t.responseURL.indexOf("/brand/") > -1 || t.responseURL.indexOf("/stores/") > -1 ? r.a.createElement(m.a, {
                                className: "autoSuggest",
                                onClick: e.trackClick,
                                "data-cleanterm": t.cleanTerm,
                                "data-cmtracking": t.cmForLinkClick,
                                to: {
                                    pathname: "".concat(t.responseURL),
                                    state: {
                                        typeAheadClicked: "Y"
                                    }
                                },
                                dangerouslySetInnerHTML: {
                                    __html: t.displayName
                                }
                            }) : r.a.createElement(m.a, {
                                className: "autoSuggest",
                                onClick: e.trackClick,
                                "data-cleanterm": t.cleanTerm || t.displayName,
                                "data-cmtracking": t.cmForLinkClick,
                                to: {
                                    pathname: "".concat(t.responseURL),
                                    state: {
                                        typeAheadClicked: "Y"
                                    }
                                },
                                dangerouslySetInnerHTML: {
                                    __html: t.displayName
                                }
                            }))
                        })))) : "", r.a.createElement("script", {
                            type: "application/ld+json",
                            suppressHydrationWarning: !0,
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "http://schema.org",
                                    "@type": "WebSite",
                                    url: "https://www.dillards.com",
                                    potentialAction: {
                                        "@type": "SearchAction",
                                        target: "https://www.dillards.com/search-term/{search_term_string}",
                                        "query-input": "required name=search_term_string"
                                    }
                                })
                            }
                        }))
                    }
                }]) && g(t.prototype, n), a && g(t, a), i
            }(h.a)
        }
    }
]);
//# sourceMappingURL=0d40a9395644-16.js.map