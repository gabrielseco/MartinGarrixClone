(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(62);
      Object.keys(r).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return r[e];
            }
          });
      });
      var o = n(57);
      Object.keys(o).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return o[e];
            }
          });
      });
      var i = n(53);
      Object.keys(i).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return i[e];
            }
          });
      });
      var a = n(49);
      Object.keys(a).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return a[e];
            }
          });
      });
      var l = n(45);
      Object.keys(l).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return l[e];
            }
          });
      });
      var u = n(38);
      Object.keys(u).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return u[e];
            }
          });
      });
      var c = n(34);
      Object.keys(c).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return c[e];
            }
          });
      });
      var s = n(29);
      Object.keys(s).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return s[e];
            }
          });
      });
      var f = n(24);
      Object.keys(f).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return f[e];
            }
          });
      });
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.GET_PUBLIC_PATH = function(e) {
        return './static/images/' + e;
      }),
        (t.addEventsToDocument = function(e) {
          Object.keys(e).forEach(function(t) {
            document.addEventListener(t, e[t], !1);
          });
        }),
        (t.removeEventsFromDocument = function(e) {
          Object.keys(e).forEach(function(t) {
            document.removeEventListener(t, e[t], !1);
          });
        }),
        (t.targetIsDescendant = function(e, t) {
          for (var n = e.target; null !== n; ) {
            if (n === t) return !0;
            n = n.parentNode;
          }
          return !1;
        });
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      (e.exports = n(6)(!1)).push([
        e.i,
        ':root{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}h1,h2,h3,h4,h5,h6{line-height:1.2}/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}body{background:#fff;color:#212529;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5}',
        ''
      ]);
    },
    function(e, t, n) {
      var r = n(18);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.images = t.heroProps = void 0);
      var r = n(13),
        o = ((t.heroProps = {
          images: {
            backgroundImage: '' + (0, r.GET_PUBLIC_PATH)('ocean-bg.jpg'),
            artboard: {
              url: '' + (0, r.GET_PUBLIC_PATH)('martingarrix-khalid-ocean.jpg'),
              alt: 'Martin Garrix feat. Khalid - Ocean'
            }
          },
          info: {
            date: 'Jun 15, 2018',
            title: 'Ocean <br/> is out now!',
            artist: 'Martin Garrix feat. Khalid',
            url: '#'
          }
        }),
        (t.images = {
          path: '' + (0, r.GET_PUBLIC_PATH)('releases'),
          factory: function() {
            return [
              {
                img: o.path + '/ocean.jpeg',
                url: 'http://stmpd.co/MKOCWE',
                title: 'Ocean'
              },
              {
                img: o.path + '/game-over.jpeg',
                url: 'http://stmpd.co/MLGOWE',
                title: 'Game Over'
              },
              {
                img: o.path + '/like-i-do.jpg',
                url: 'http://stmpd.co/LIDWE',
                title: 'Like I Do'
              },
              {
                img: o.path + '/so-far-away.jpg',
                url: 'https://stmpdrcrds.lnk.to/dlThVWE',
                title: 'So Far Away'
              },
              {
                img: o.path + '/pizza.jpg',
                url: 'http://stmpd.co/ltoA2WE',
                title: 'Pizza'
              },
              {
                img: o.path + '/there-for-you.jpg',
                url: 'http://stmpd.co/Dj-kpWE',
                title: 'There for you'
              },
              {
                img: o.path + '/byte.jpg',
                url: 'http://stmpd.co/iQNlRWE',
                title: 'Byte'
              },
              {
                img: o.path + '/scared-to-be-lonely.jpg',
                url: 'http://stmpd.co/hIG_RWE',
                title: 'Scared to be lonely'
              },
              {
                img: o.path + '/make-up-your-mind.jpg',
                url: 'http://stmpd.co/sL7lBWE',
                title: 'Make Up Your Mind'
              }
            ];
          }
        }));
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '.TUNflnSAyV8yeYMB2tg3_{padding-left:0}.TUNflnSAyV8yeYMB2tg3_+.TUNflnSAyV8yeYMB2tg3_{margin:1em 0}@media (min-width:56.25em){.TUNflnSAyV8yeYMB2tg3_+.TUNflnSAyV8yeYMB2tg3_{margin:0}}._3pL8JgR62TxOLnxBa-O4am{color:#fff;font-size:.875em;font-weight:700;letter-spacing:.0625em;padding:0 1em;text-decoration:none;text-transform:uppercase}._3pL8JgR62TxOLnxBa-O4am:hover:not(._3pq2aUFAfG8Jkru9vFUim){color:hsla(0,0%,100%,.75)}._3pq2aUFAfG8Jkru9vFUim{color:#ffff42}',
        ''
      ]),
        (t.locals = {
          navItem: 'TUNflnSAyV8yeYMB2tg3_',
          navLink: '_3pL8JgR62TxOLnxBa-O4am',
          navLinkFeatured: '_3pq2aUFAfG8Jkru9vFUim'
        });
    },
    function(e, t, n) {
      var r = n(21);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = l(n(1)),
        i = l(n(12)),
        a = l(n(22));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      t.default = function(e) {
        var t,
          n = e.children,
          l = e.newTab,
          c = e.featured,
          s = !0 === l ? { target: '_blank' } : void 0,
          f =
            !0 === c
              ? (u((t = {}), a.default.navLink, !0),
                u(t, a.default.navLinkFeatured, !0),
                t)
              : u({}, a.default.navLink, !0);
        return o.default.createElement(
          'li',
          { className: a.default.navItem },
          o.default.createElement(
            'a',
            r({ className: (0, i.default)(f), href: '#' }, s),
            n
          )
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(23);
      Object.defineProperty(t, 'NavItem', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '.XdSZAJ-Ump-jreMsm4Xr3{background:#111;left:0;list-style-type:none;margin:0;opacity:0;padding-left:1em;position:absolute;top:4em;visibility:hidden;width:100%}@media (min-width:37.5em){.XdSZAJ-Ump-jreMsm4Xr3{padding-left:3.93rem}}@media (min-width:56.25em){.XdSZAJ-Ump-jreMsm4Xr3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;opacity:1;position:relative;top:0;visibility:visible}}._1fLBa2ZOqjZa5yALU-G76N{display:block;opacity:1;visibility:visible}._26r_75upGcMQ2Zig6yMIaV{height:0;-webkit-transition:height .35s ease,visibility,opacity .4s ease;transition:height .35s ease,visibility,opacity .4s ease}',
        ''
      ]),
        (t.locals = {
          nav: 'XdSZAJ-Ump-jreMsm4Xr3',
          collapse: '_1fLBa2ZOqjZa5yALU-G76N',
          collapsing: '_26r_75upGcMQ2Zig6yMIaV'
        });
    },
    function(e, t, n) {
      var r = n(25);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    ,
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = u(n(1)),
        a = u(n(12)),
        l = u(n(26));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var s = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.state = { collapsing: !1, scrollHeight: void 0 }),
            (n.navRef = i.default.createRef()),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, i.default.Component),
          o(t, [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this;
                !e.isOpen &&
                  this.props.isOpen &&
                  (this.setState({ collapsing: !0 }, function() {
                    t.setState(function(e) {
                      return r({}, e, {
                        scrollHeight: t.navRef.current.scrollHeight
                      });
                    });
                  }),
                  this.navRef.current.addEventListener(
                    'transitionend',
                    this.navTransitionEnd.bind(this),
                    !1
                  ));
              }
            },
            {
              key: 'navTransitionEnd',
              value: function() {
                this.setState(function(e) {
                  return r({}, e, { collapsing: !1, scrollHeight: void 0 });
                });
              }
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this.props,
                  n = t.isOpen,
                  r = t.children,
                  o = this.state,
                  u = o.collapsing,
                  s = o.scrollHeight,
                  f = (0, a.default)(
                    (c((e = {}), l.default.nav, !0),
                    c(e, l.default.collapse, n),
                    c(e, l.default.collapsing, u),
                    e)
                  );
                return i.default.createElement(
                  'ul',
                  { ref: this.navRef, className: f, style: { height: s } },
                  r
                );
              }
            }
          ]),
          t
        );
      })();
      t.default = s;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(28);
      Object.defineProperty(t, 'Nav', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '._2aLZzeHt1rbTMTyoLq7Jun{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._2aLZzeHt1rbTMTyoLq7Jun h2{font-size:2rem;margin:2em 0}',
        ''
      ]),
        (t.locals = { container: '_2aLZzeHt1rbTMTyoLq7Jun' });
    },
    function(e, t, n) {
      var r = n(30);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.lazyLoadImageCallback = function(e, t) {
        e.forEach(function(e) {
          e.isIntersecting &&
            (t.unobserve(e.target), (e.target.src = e.target.dataset.src));
        });
      }),
        (t.config = {
          root: document.querySelector('#last-releases'),
          rootMargin: '50px',
          threshold: 0.5
        });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = l(n(1)),
        o = n(7),
        i = n(32),
        a = l(n(31));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = new window.IntersectionObserver(
        i.lazyLoadImageCallback,
        i.config
      );
      t.default = function(e) {
        var t = e.images;
        return r.default.createElement(
          'div',
          { className: a.default.container, id: 'last-releases' },
          r.default.createElement('h2', null, 'Latest Releases'),
          r.default.createElement(o.AlbumGrid, { images: t, observer: u })
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(33);
      Object.defineProperty(t, 'LatestReleases', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '._3G27iyRlhQnlJADtAOEGi2{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media (min-width:56.25em){._3G27iyRlhQnlJADtAOEGi2{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:11rem 2rem}}._2TXeQhB-2E2B3cMBkTHG-t{padding-top:2.5em}@media (min-width:56.25em){._2TXeQhB-2E2B3cMBkTHG-t{padding-top:0;width:15.9375em}}.x5FaZBbv8pOcvAP-iaK0q{max-width:16.25em}@media (min-width:37.5em){.x5FaZBbv8pOcvAP-iaK0q{max-width:100%}}._2BFhkzuSxVdMsVzzbuLvAp{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:2em 0}@media (min-width:37.5em){._2BFhkzuSxVdMsVzzbuLvAp{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-left:6em;width:100%}}@media (min-width:56.25em){._2BFhkzuSxVdMsVzzbuLvAp{width:auto}}._2BFhkzuSxVdMsVzzbuLvAp small,p{color:#929292}._2BFhkzuSxVdMsVzzbuLvAp p{margin-top:0}._2BFhkzuSxVdMsVzzbuLvAp h1{color:#fff;margin:0 0 .4em;text-align:center;text-transform:uppercase}@media (min-width:37.5em){._2BFhkzuSxVdMsVzzbuLvAp h1{font-size:2.5rem;text-align:left}}._2PAqhwlemI_mgIJdfZ5OKd{margin-top:1em}.EikavvPzKSIcgGq4DWIhg{background:#f00038;border-radius:1.875em;color:#fff;cursor:pointer;font-size:.875rem;font-weight:700;letter-spacing:.125em;padding:.75em 2em;text-decoration:none;text-transform:uppercase}',
        ''
      ]),
        (t.locals = {
          heroImageContainer: '_3G27iyRlhQnlJADtAOEGi2',
          artboardContainer: '_2TXeQhB-2E2B3cMBkTHG-t',
          artboard: 'x5FaZBbv8pOcvAP-iaK0q',
          infoContainer: '_2BFhkzuSxVdMsVzzbuLvAp',
          containerButton: '_2PAqhwlemI_mgIJdfZ5OKd',
          button: 'EikavvPzKSIcgGq4DWIhg'
        });
    },
    function(e, t, n) {
      var r = n(35);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(n(1)),
        o = i(n(36));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e) {
        var t = e.images,
          n = e.info,
          i = {
            background: 'url(' + t.backgroundImage + ')',
            backgroundSize: 'cover'
          };
        return r.default.createElement(
          'div',
          { className: o.default.heroImageContainer, style: i },
          r.default.createElement(
            'div',
            { className: o.default.artboardContainer },
            r.default.createElement('img', {
              className: o.default.artboard,
              src: t.artboard.url,
              alt: t.artboard.alt
            })
          ),
          r.default.createElement(
            'div',
            { className: o.default.infoContainer },
            r.default.createElement('small', null, n.date),
            r.default.createElement('h1', {
              dangerouslySetInnerHTML: { __html: n.title }
            }),
            r.default.createElement('p', null, n.artist),
            r.default.createElement(
              'div',
              { className: o.default.containerButton },
              r.default.createElement(
                'a',
                { href: n.url, className: o.default.button },
                r.default.createElement('i', { className: 'fa fa-play' }),
                '  Listen Song'
              )
            )
          )
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(37);
      Object.defineProperty(t, 'HeroImage', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1));
      t.default = function(e) {
        var t = (function(t) {
          function n(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, n);
            var t = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.state = { event: void 0 }), t;
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, i.default.Component),
            o(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.addEventListener(
                    'resize',
                    this.resizeEvent.bind(this)
                  );
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.removeEventListener(
                    'resize',
                    this.resizeEvent.bind(this)
                  );
                }
              },
              {
                key: 'resizeEvent',
                value: function(e) {
                  this.setState({ event: e });
                }
              },
              {
                key: 'render',
                value: function() {
                  return i.default.createElement(
                    e,
                    r({}, this.props, { resizeEvent: this.state.event })
                  );
                }
              }
            ]),
            n
          );
        })();
        return (
          (t.displayName = 'withResize(' + (e.displayName || e.name) + ')'), t
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(39);
      Object.defineProperty(t, 'withResize', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(40);
      Object.keys(r).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return r[e];
            }
          });
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '.izfMlpocQzlhdzhHXlcLP{background:#111;padding:.5rem .8rem}._3cKovCO0hw7ZrmyMpYbQv8{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:71.25em;min-height:calc(3.125em - .5rem);padding:0 .9375em;width:100%}._1AtfLkFeU7hythTtugN55i{padding:0}@media (min-width:37.5em){._1AtfLkFeU7hythTtugN55i{padding:0 3rem}}@media (min-width:56.25em){._1AtfLkFeU7hythTtugN55i{padding:0 6rem}}._1Gy1tH7TfonX6HL8JjuVwD{width:8.75em}._2psjxP_rKZsGbmiBCzrt0E{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}@media (min-width:56.25em){._2psjxP_rKZsGbmiBCzrt0E{display:none}}',
        ''
      ]),
        (t.locals = {
          container: 'izfMlpocQzlhdzhHXlcLP',
          innerContainer: '_3cKovCO0hw7ZrmyMpYbQv8',
          logo: '_1AtfLkFeU7hythTtugN55i',
          logoImg: '_1Gy1tH7TfonX6HL8JjuVwD',
          drawerContainer: '_2psjxP_rKZsGbmiBCzrt0E'
        });
    },
    function(e, t, n) {
      var r = n(42);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Header = void 0);
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = s(n(1)),
        i = s(n(14)),
        a = s(n(43)),
        l = n(13),
        u = n(7),
        c = n(41);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.state = { isOpen: !1, event: void 0 }),
            (n.handleDocumentClick = n.handleDocumentClick.bind(n)),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.default.Component),
          r(t, [
            {
              key: 'componentWillUpdate',
              value: function(e, t) {
                !this.state.isOpen &&
                  t.isOpen &&
                  (0, l.addEventsToDocument)(this.getDocumentEvents());
              }
            },
            {
              key: 'componentDidUpdate',
              value: function(e, t) {
                var n = this;
                this.state.event !== e.resizeEvent &&
                  this.setState({ event: e.resizeEvent }, function() {
                    return n.closeMenu();
                  }),
                  t.isOpen &&
                    !this.state.isOpen &&
                    (0, l.removeEventsFromDocument)(this.getDocumentEvents());
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.state.isOpen &&
                  (0, l.removeEventsFromDocument)(this.getDocumentEvents());
              }
            },
            {
              key: 'closeMenu',
              value: function() {
                this.setState({ isOpen: !1 });
              }
            },
            {
              key: 'getDocumentEvents',
              value: function() {
                return {
                  click: this.handleDocumentClick,
                  touchend: this.handleDocumentClick
                };
              }
            },
            {
              key: 'handleDocumentClick',
              value: function(e) {
                this.state.isOpen &&
                  !(0, l.targetIsDescendant)(e, i.default.findDOMNode(this)) &&
                  this.setState({ isOpen: !1 });
              }
            },
            {
              key: 'onMenuOpen',
              value: function() {
                this.setState(function(e) {
                  return { isOpen: !e.isOpen };
                });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this;
                return o.default.createElement(
                  'header',
                  { className: a.default.container },
                  o.default.createElement(
                    'div',
                    { className: a.default.innerContainer },
                    o.default.createElement(
                      'div',
                      { className: a.default.logo },
                      o.default.createElement(
                        'a',
                        { href: '/' },
                        o.default.createElement('img', {
                          className: a.default.logoImg,
                          src: (0, l.GET_PUBLIC_PATH)('logo.png'),
                          alt: 'Martin Garrix'
                        })
                      )
                    ),
                    o.default.createElement(
                      'div',
                      { className: a.default.drawerContainer },
                      o.default.createElement(u.DrawerNav, {
                        onClick: function() {
                          return e.onMenuOpen();
                        }
                      })
                    ),
                    o.default.createElement(
                      u.Nav,
                      { isOpen: this.state.isOpen },
                      o.default.createElement(u.NavItem, { to: '/' }, 'Home'),
                      o.default.createElement(
                        u.NavItem,
                        { to: '/', newTab: !0 },
                        'Tour'
                      ),
                      o.default.createElement(
                        u.NavItem,
                        { to: '/music' },
                        'Music'
                      ),
                      o.default.createElement(
                        u.NavItem,
                        { to: '/', newTab: !0 },
                        'Shop'
                      ),
                      o.default.createElement(
                        u.NavItem,
                        { to: '/contact' },
                        'Contact'
                      ),
                      o.default.createElement(
                        u.NavItem,
                        { to: '/', newTab: !0, featured: !0 },
                        'ADE 2018'
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })();
      (t.Header = f), (t.default = (0, c.withResize)(f));
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(44);
      Object.defineProperty(t, 'Header', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '._26pKBIAl3afzSXDEOouaAB{margin-bottom:3em;padding:3em 0;text-align:center}._26pKBIAl3afzSXDEOouaAB p{color:#6c757d}',
        ''
      ]),
        (t.locals = { container: '_26pKBIAl3afzSXDEOouaAB' });
    },
    function(e, t, n) {
      var r = n(46);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(n(1)),
        o = i(n(47));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function() {
        return r.default.createElement(
          'div',
          { className: o.default.container },
          r.default.createElement('p', null, 'Copyright © 2018 Martin Garrix')
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(48);
      Object.defineProperty(t, 'Footer', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '.sLkhHvtNe1ZTzUJLQyuId{background:transparent;border-color:hsla(0,0%,100%,.1);border-radius:.25rem;color:hsla(0,0%,100%,.5);font-size:1.25rem;height:3rem;line-height:1;padding:.25rem .75rem;position:relative;text-indent:10em;white-space:nowrap;width:3rem}.sLkhHvtNe1ZTzUJLQyuId:after{content:"\\2261";display:block;font-size:2rem;position:absolute;text-indent:0;top:.2em}',
        ''
      ]),
        (t.locals = { drawer: 'sLkhHvtNe1ZTzUJLQyuId' });
    },
    function(e, t, n) {
      var r = n(50);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(n(1)),
        o = i(n(51));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e) {
        var t = e.onClick;
        return r.default.createElement(
          'button',
          {
            className: o.default.drawer,
            onClick: function() {
              return t();
            }
          },
          'Toggle Button'
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(52);
      Object.defineProperty(t, 'DrawerNav', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '.NBqdwhHtXgyTQTs7PSldX a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.NBqdwhHtXgyTQTs7PSldX img{max-width:100%}',
        ''
      ]),
        (t.locals = { item: 'NBqdwhHtXgyTQTs7PSldX' });
    },
    function(e, t, n) {
      var r = n(54);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = a(n(1)),
        i = a(n(55));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (n.state = {}), (n.imageRef = o.default.createRef()), n;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.default.Component),
          r(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.observer.observe(this.imageRef.current);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.url,
                  n = e.img,
                  r = e.title;
                return o.default.createElement(
                  'li',
                  { className: i.default.item },
                  o.default.createElement(
                    'a',
                    { href: t, target: '_blank' },
                    o.default.createElement('img', {
                      ref: this.imageRef,
                      'data-src': n,
                      alt: r
                    })
                  )
                );
              }
            }
          ]),
          t
        );
      })();
      t.default = l;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(56);
      Object.defineProperty(t, 'AlbumGridItem', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    ,
    function(e, t, n) {
      (t = e.exports = n(6)(!1)).push([
        e.i,
        '._2IVGxNlouU19jrliuBByZt{list-style:none;max-width:56.25em;padding:0}@media (min-width:37.5em){._2IVGxNlouU19jrliuBByZt{padding:0 1em}}@supports not (display:grid){._2IVGxNlouU19jrliuBByZt{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width:37.5em){._2IVGxNlouU19jrliuBByZt{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}._2IVGxNlouU19jrliuBByZt li{width:100%}@media (min-width:37.5em){._2IVGxNlouU19jrliuBByZt li{width:33.33333%}}}@supports (display:grid){._2IVGxNlouU19jrliuBByZt{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(5,auto)}@media (min-width:37.5em){._2IVGxNlouU19jrliuBByZt{grid-template-columns:1fr 1fr 1fr}}._2IVGxNlouU19jrliuBByZt li:first-child{grid-column:span 2}@media (min-width:37.5em){._2IVGxNlouU19jrliuBByZt li:first-child{grid-column:span 1}}}',
        ''
      ]),
        (t.locals = { container: '_2IVGxNlouU19jrliuBByZt' });
    },
    function(e, t, n) {
      var r = n(59);
      'string' == typeof r && (r = [[e.i, r, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(5)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = a(n(1)),
        o = n(7),
        i = a(n(60));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e) {
        var t = e.images,
          n = e.observer;
        return r.default.createElement(
          'ul',
          { className: i.default.container },
          t.map(function(e) {
            return r.default.createElement(o.AlbumGridItem, {
              img: e.img,
              url: e.url,
              title: e.title,
              observer: n,
              key: e.url
            });
          })
        );
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(61);
      Object.defineProperty(t, 'AlbumGrid', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(1),
        i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        a = n(7),
        l = n(20);
      var u = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (n.state = {}), n;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, o.Component),
          r(t, [
            {
              key: 'render',
              value: function() {
                return i.default.createElement(
                  i.default.Fragment,
                  null,
                  i.default.createElement(a.Header, null),
                  i.default.createElement(a.HeroImage, l.heroProps),
                  i.default.createElement(a.LatestReleases, {
                    images: l.images.factory()
                  }),
                  i.default.createElement(a.Footer, null)
                );
              }
            }
          ]),
          t
        );
      })();
      t.default = u;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(63);
      Object.defineProperty(t, 'Home', {
        enumerable: !0,
        get: function() {
          return (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r).default;
        }
      });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(64);
      Object.keys(r).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return r[e];
            }
          });
      });
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1)),
        o = n(11),
        i = n(65);
      t.default = function() {
        return r.default.createElement(
          o.Switch,
          null,
          r.default.createElement(o.Route, {
            exact: !0,
            path: '/',
            component: i.Home
          })
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict';
      n(78);
      var r = l(n(1)),
        o = n(14),
        i = n(11),
        a = l(n(66));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(19);
      var u = r.default.createElement(
        i.HashRouter,
        null,
        r.default.createElement('div', null, (0, a.default)())
      );
      (0, o.render)(u, document.getElementById('root'));
    },
    function(e, t, n) {
      e.exports = n(79);
    }
  ],
  [[80, 0, 1]]
]);
//# sourceMappingURL=main.9a260f7e892762c8c474.js.map