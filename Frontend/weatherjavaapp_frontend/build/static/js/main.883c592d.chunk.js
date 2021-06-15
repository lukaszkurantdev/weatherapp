(this.webpackJsonpqopml_frontend = this.webpackJsonpqopml_frontend || []).push([
  [0],
  {
    260: function (e, t, n) {
      e.exports = n(535);
    },
    265: function (e, t, n) {},
    266: function (e, t, n) {},
    268: function (e, t, n) {},
    273: function (e, t, n) {},
    274: function (e, t, n) {},
    275: function (e, t, n) {},
    279: function (e, t, n) {},
    300: function (e, t, n) {},
    302: function (e, t, n) {},
    303: function (e, t, n) {},
    304: function (e, t, n) {},
    305: function (e, t, n) {},
    306: function (e, t, n) {},
    307: function (e, t, n) {},
    531: function (e, t, n) {},
    532: function (e, t, n) {},
    533: function (e, t, n) {},
    534: function (e, t, n) {},
    535: function (e, t, n) {
      'use strict';
      n.r(t);
      var a,
        i,
        r,
        o,
        l,
        s,
        c,
        u,
        d,
        m,
        p,
        f,
        v,
        b,
        h,
        g,
        y,
        E,
        O,
        w,
        _,
        S,
        C,
        j,
        N,
        I,
        k,
        T,
        R,
        D,
        P,
        x,
        V,
        M,
        A,
        z,
        L,
        F,
        H,
        q,
        G,
        B,
        W,
        U,
        J,
        Q,
        Y,
        K,
        Z,
        X,
        $,
        ee,
        te,
        ne,
        ae,
        ie,
        re,
        oe,
        le,
        se,
        ce,
        ue,
        de = n(0),
        me = n.n(de),
        pe = n(37),
        fe = n.n(pe),
        ve = (n(265), n(258)),
        be = (n(266), n(21)),
        he = n(23),
        ge = n(12),
        ye = n(1),
        Ee = n(20),
        Oe = n.n(Ee),
        we = n(29),
        _e = n(11),
        Se = n(10),
        Ce = (n(114), n(3)),
        je =
          ((a = function e(t) {
            Object(ye.a)(this, e),
              (this.rootStore = void 0),
              Object(_e.a)(this, 'token', i, this),
              Object(_e.a)(this, 'registeredPrompt', r, this),
              Object(_e.a)(this, 'fetchingRegistration', o, this),
              Object(_e.a)(this, 'fetchingLogging', l, this),
              Object(_e.a)(this, 'fetchingPasswordChanging', s, this),
              Object(_e.a)(this, 'loginError', c, this),
              Object(_e.a)(this, 'registrationError', u, this),
              Object(_e.a)(this, 'changePasswordError', d, this),
              Object(_e.a)(this, 'invalidOldUserPasswordError', m, this),
              Object(_e.a)(this, 'userId', p, this),
              Object(_e.a)(this, 'hideRegisteredPrompt', f, this),
              Object(_e.a)(this, 'login', v, this),
              Object(_e.a)(this, 'register', b, this),
              Object(_e.a)(this, 'changePassword', h, this),
              Object(_e.a)(this, 'logout', g, this),
              (this.rootStore = t);
          }),
          (i = Object(Se.a)(a.prototype, 'token', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return localStorage.getItem('token') || '';
            },
          })),
          (r = Object(Se.a)(a.prototype, 'registeredPrompt', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (o = Object(Se.a)(a.prototype, 'fetchingRegistration', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (l = Object(Se.a)(a.prototype, 'fetchingLogging', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (s = Object(Se.a)(a.prototype, 'fetchingPasswordChanging', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (c = Object(Se.a)(a.prototype, 'loginError', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (u = Object(Se.a)(a.prototype, 'registrationError', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (d = Object(Se.a)(a.prototype, 'changePasswordError', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (m = Object(Se.a)(
            a.prototype,
            'invalidOldUserPasswordError',
            [Ce.n],
            {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            }
          )),
          (p = Object(Se.a)(a.prototype, 'userId', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (f = Object(Se.a)(a.prototype, 'hideRegisteredPrompt', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                e.registeredPrompt = !1;
              };
            },
          })),
          (v = Object(Se.a)(a.prototype, 'login', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return (function () {
                var t = Object(we.a)(
                  Oe.a.mark(function t(n, a) {
                    var i, r;
                    return Oe.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e.loginError = !1),
                                (e.fetchingLogging = !0),
                                (e.registeredPrompt = !1),
                                (t.prev = 3),
                                (t.next = 6),
                                fetch('/api/login', {
                                  method: 'POST',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify(n),
                                })
                              );
                            case 6:
                              return (i = t.sent), (t.next = 9), i.json();
                            case 9:
                              (r = t.sent).success
                                ? ((e.fetchingLogging = !1),
                                  (e.loginError = !1),
                                  localStorage.setItem('token', r.token),
                                  (e.token = r.token),
                                  a && a())
                                : ((e.loginError = !0),
                                  (e.fetchingLogging = !1)),
                                (t.next = 17);
                              break;
                            case 13:
                              (t.prev = 13),
                                (t.t0 = t.catch(3)),
                                (e.loginError = !0),
                                (e.fetchingLogging = !1);
                            case 17:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 13]]
                    );
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })();
            },
          })),
          (b = Object(Se.a)(a.prototype, 'register', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return (function () {
                var t = Object(we.a)(
                  Oe.a.mark(function t(n, a, i) {
                    var r, o;
                    return Oe.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e.registrationError = !1),
                                (e.fetchingRegistration = !0),
                                (t.prev = 2),
                                (t.next = 5),
                                fetch('/api/signup', {
                                  method: 'POST',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify(n),
                                })
                              );
                            case 5:
                              return (r = t.sent), (t.next = 8), r.json();
                            case 8:
                              if (!(o = t.sent).success) {
                                t.next = 16;
                                break;
                              }
                              (e.fetchingRegistration = !1),
                                (e.registrationError = !1),
                                (e.registeredPrompt = !0),
                                a && a(),
                                (t.next = 17);
                              break;
                            case 16:
                              throw o;
                            case 17:
                              t.next = 24;
                              break;
                            case 19:
                              (t.prev = 19),
                                (t.t0 = t.catch(2)),
                                i && i(t.t0),
                                (e.registrationError = !0),
                                (e.fetchingRegistration = !1);
                            case 24:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 19]]
                    );
                  })
                );
                return function (e, n, a) {
                  return t.apply(this, arguments);
                };
              })();
            },
          })),
          (h = Object(Se.a)(a.prototype, 'changePassword', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return (function () {
                var t = Object(we.a)(
                  Oe.a.mark(function t(n, a, i) {
                    var r, o;
                    return Oe.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e.changePasswordError = !1),
                                (e.fetchingPasswordChanging = !0),
                                (t.prev = 2),
                                (t.next = 5),
                                fetch('/api/change_password', {
                                  method: 'POST',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization:
                                      'Bearer ' + localStorage.getItem('token'),
                                  },
                                  body: JSON.stringify(n),
                                })
                              );
                            case 5:
                              if (401 !== (r = t.sent).status) {
                                t.next = 10;
                                break;
                              }
                              return (
                                e.rootStore.userStore.logout(),
                                setTimeout(function () {
                                  window.location.reload();
                                }, 100),
                                t.abrupt('return')
                              );
                            case 10:
                              return (t.next = 12), r.json();
                            case 12:
                              (o = t.sent).success
                                ? ((e.fetchingPasswordChanging = !1),
                                  (e.changePasswordError = !1),
                                  a && a())
                                : ('Incorrect user password.' === o.message
                                    ? i && i()
                                    : (e.changePasswordError = !0),
                                  (e.fetchingPasswordChanging = !1)),
                                (t.next = 20);
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(2)),
                                (e.changePasswordError = !0),
                                (e.fetchingPasswordChanging = !1);
                            case 20:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 16]]
                    );
                  })
                );
                return function (e, n, a) {
                  return t.apply(this, arguments);
                };
              })();
            },
          })),
          (g = Object(Se.a)(a.prototype, 'logout', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                t && t(),
                  setTimeout(function () {
                    localStorage.clear(), (e.token = '');
                  }, 100);
              };
            },
          })),
          a),
        Ne =
          ((y = function e(t) {
            Object(ye.a)(this, e),
              (this.rootStore = void 0),
              Object(_e.a)(this, 'simulations', E, this),
              Object(_e.a)(this, 'loadingSimulations', O, this),
              Object(_e.a)(this, 'simulationsCount', w, this),
              Object(_e.a)(this, 'currentSimulationsPage', _, this),
              Object(_e.a)(this, 'getSimulationsList', S, this),
              Object(_e.a)(this, 'changeSimulationPage', C, this),
              (this.rootStore = t);
          }),
          (E = Object(Se.a)(y.prototype, 'simulations', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return [];
            },
          })),
          (O = Object(Se.a)(y.prototype, 'loadingSimulations', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          })),
          (w = Object(Se.a)(y.prototype, 'simulationsCount', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (_ = Object(Se.a)(y.prototype, 'currentSimulationsPage', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          })),
          (S = Object(Se.a)(y.prototype, 'getSimulationsList', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return Object(we.a)(
                Oe.a.mark(function t() {
                  var n, a, i;
                  return Oe.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.loadingSimulations = !0),
                              (t.prev = 1),
                              (n =
                                '/api/simulations?page=' +
                                e.currentSimulationsPage),
                              (t.next = 5),
                              fetch(n, {
                                method: 'GET',
                                headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json',
                                  Authorization:
                                    'Bearer ' + localStorage.getItem('token'),
                                },
                              })
                            );
                          case 5:
                            if (401 !== (a = t.sent).status) {
                              t.next = 10;
                              break;
                            }
                            return (
                              e.rootStore.userStore.logout(),
                              setTimeout(function () {
                                window.location.reload();
                              }, 100),
                              t.abrupt('return')
                            );
                          case 10:
                            return console.log(a), (t.next = 13), a.json();
                          case 13:
                            (i = t.sent).success &&
                              ((e.loadingSimulations = !1),
                              (e.simulations = i.data),
                              (e.simulationsCount = i.count)),
                              (t.next = 21);
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t.catch(1)),
                              console.log(t.t0),
                              (e.loadingSimulations = !1);
                          case 21:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 17]]
                  );
                })
              );
            },
          })),
          (C = Object(Se.a)(y.prototype, 'changeSimulationPage', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.currentSimulationsPage = t;
              };
            },
          })),
          y),
        Ie = n(81),
        ke = n(2),
        Te = n(13),
        Re = [
          { icon: Te.f, name: 'IoIosDesktop' },
          { icon: Te.q, name: 'IoIosTabletPortrait' },
          { icon: Te.n, name: 'IoIosRadio' },
          { icon: Te.j, name: 'IoIosLaptop' },
          { icon: Te.b, name: 'IoIosCalculator' },
          { icon: Te.e, name: 'IoIosCube' },
        ],
        De = [
          { value: 0, label: 'N/A' },
          { value: 1, label: '16-bit 8MHz TI MSP430' },
          { value: 2, label: '12 x Intel Core i7-3930K 3.20GHz' },
          { value: 3, label: '6 x Intel Core i7-3930K 3.20GHz' },
          { value: 4, label: 'Intel Core 2 Duo E6405 2.13GHz' },
          { value: 5, label: 'Pentium Dual-Core T4200 2GHz' },
          { value: 6, label: 'Intel Xeon Gold 6142 2.6GHz' },
          { value: 7, label: '4 x Intel Xeon Gold 6142 2.6GHz' },
          { value: 8, label: 'Intel Atom P5942B 2.50GHz' },
          { value: 8, label: 'Intel Celeron G5900T 3.2GHz' },
        ],
        Pe = [
          { value: 0, label: 'N/A' },
          { value: 1, label: 'Debian 7.1 64-bit' },
          { value: 2, label: 'Debian 8 64-bit' },
          { value: 3, label: 'Ubuntu 20.04 64-bit' },
          { value: 4, label: 'Windows 10 Pro 64-bit' },
          { value: 5, label: 'Windows 8 Pro 64-bit' },
          { value: 6, label: 'Windows 7 Ultimate 64-bit' },
          { value: 7, label: 'Linux Mint 20 64-bit' },
          { value: 8, label: 'Fedora 32 64-bit' },
          { value: 9, label: 'Red Hat Enterprise Linux 8 64-bit' },
        ],
        xe = [
          { value: 0, label: 'N/A' },
          { value: 1, label: 'openssl 1.0.1c' },
          { value: 2, label: 'openssl 1.1.0' },
          { value: 3, label: 'openssl 1.1.1' },
          { value: 4, label: 'wolfCrypt 4.5.0' },
          { value: 5, label: 'Nettle 3.5.1' },
          { value: 6, label: 'Crypto++ 3.4.5' },
          { value: 7, label: 'mbed TLS 2.16.2' },
        ],
        Ve =
          ((j = (function () {
            function e(t) {
              var n = this;
              Object(ye.a)(this, e),
                (this.rootStore = void 0),
                Object(_e.a)(this, 'activeDeviceType', N, this),
                Object(_e.a)(this, 'activeMedium', I, this),
                Object(_e.a)(this, 'activeVersion', k, this),
                Object(_e.a)(this, 'deviceTypes', T, this),
                Object(_e.a)(this, 'mediums', R, this),
                Object(_e.a)(this, 'versions', D, this),
                Object(_e.a)(this, 'topologyElements', P, this),
                Object(_e.a)(this, 'setDeviceTypes', x, this),
                Object(_e.a)(this, 'setMediums', V, this),
                Object(_e.a)(this, 'setVersions', M, this),
                Object(_e.a)(this, 'setTopologyElements', A, this),
                Object(_e.a)(this, 'resetDeviceTypes', z, this),
                Object(_e.a)(this, 'resetMediums', L, this),
                Object(_e.a)(this, 'resetTopology', F, this),
                Object(_e.a)(this, 'resetVersions', H, this),
                Object(_e.a)(this, 'addDeviceType', q, this),
                Object(_e.a)(this, 'editDeviceType', G, this),
                Object(_e.a)(this, 'removeDeviceType', B, this),
                Object(_e.a)(this, 'changeActiveDeviceType', W, this),
                Object(_e.a)(this, 'addMedium', U, this),
                Object(_e.a)(this, 'editMedium', J, this),
                Object(_e.a)(this, 'removeMedium', Q, this),
                Object(_e.a)(this, 'addChannelToMedium', Y, this),
                Object(_e.a)(this, 'editChannelFromMedium', K, this),
                Object(_e.a)(this, 'removeChannelFromMedium', Z, this),
                Object(_e.a)(this, 'changeActiveMedium', X, this),
                Object(_e.a)(this, 'addVersion', $, this),
                Object(_e.a)(this, 'editVersion', ee, this),
                Object(_e.a)(this, 'removeVersion', te, this),
                Object(_e.a)(this, 'addProcessToVersion', ne, this),
                Object(_e.a)(this, 'editProcessInVersion', ae, this),
                Object(_e.a)(this, 'removeProcessFromVersion', ie, this),
                Object(_e.a)(this, 'changeActiveVersion', re, this),
                Object(_e.a)(this, 'changeTopologyElements', oe, this),
                Object(_e.a)(this, 'getAllModels', le, this),
                (this.checkDeviceTypeNameUniqueness = function (e) {
                  var t = n.deviceTypes.findIndex(function (t) {
                    return t.name === e;
                  });
                  return -1 === t || t === n.activeDeviceType;
                }),
                (this.checkMediumNameUniqueness = function (e) {
                  var t = n.mediums.findIndex(function (t) {
                    return t.name === e;
                  });
                  return -1 === t || t === n.activeMedium;
                }),
                (this.checkChannelNameUniqueness = function (e, t) {
                  var a = !0;
                  return (
                    n.mediums.forEach(function (n) {
                      -1 ===
                        n.channels.findIndex(function (n, a) {
                          return n.name === e && a !== t;
                        }) || (a = !1);
                    }),
                    a
                  );
                }),
                (this.checkVersionNameUniqueness = function (e) {
                  var t = n.versions.findIndex(function (t) {
                    return t.name === e;
                  });
                  return -1 === t || t === n.activeVersion;
                }),
                (this.checkProcessNameUniqueness = function (e, t) {
                  var a = !0;
                  return (
                    n.versions.forEach(function (n) {
                      -1 ===
                        n.processes.findIndex(function (n, a) {
                          return n.name === e && a !== t;
                        }) || (a = !1);
                    }),
                    a
                  );
                }),
                (this.rootStore = t),
                (this.deviceTypes = []),
                (this.mediums = []),
                (this.versions = []),
                (this.topologyElements = []);
            }
            return (
              Object(ke.a)(e, [
                {
                  key: 'listOfAllChannels',
                  get: function () {
                    var e = [];
                    return (
                      this.mediums.forEach(function (t) {
                        t.channels.forEach(function (t) {
                          e.push(t);
                        });
                      }),
                      e
                    );
                  },
                },
              ]),
              e
            );
          })()),
          (N = Object(Se.a)(j.prototype, 'activeDeviceType', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (I = Object(Se.a)(j.prototype, 'activeMedium', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (k = Object(Se.a)(j.prototype, 'activeVersion', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (T = Object(Se.a)(j.prototype, 'deviceTypes', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (R = Object(Se.a)(j.prototype, 'mediums', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (D = Object(Se.a)(j.prototype, 'versions', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (P = Object(Se.a)(j.prototype, 'topologyElements', [Ce.n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null,
          })),
          (x = Object(Se.a)(j.prototype, 'setDeviceTypes', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.deviceTypes = t;
              };
            },
          })),
          (V = Object(Se.a)(j.prototype, 'setMediums', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.mediums = t;
              };
            },
          })),
          (M = Object(Se.a)(j.prototype, 'setVersions', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.versions = t;
              };
            },
          })),
          (A = Object(Se.a)(j.prototype, 'setTopologyElements', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.topologyElements = t;
              };
            },
          })),
          (z = Object(Se.a)(j.prototype, 'resetDeviceTypes', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                (e.deviceTypes = []), (e.activeDeviceType = void 0);
              };
            },
          })),
          (L = Object(Se.a)(j.prototype, 'resetMediums', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                (e.mediums = []), (e.activeMedium = void 0);
              };
            },
          })),
          (F = Object(Se.a)(j.prototype, 'resetTopology', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                e.topologyElements = [];
              };
            },
          })),
          (H = Object(Se.a)(j.prototype, 'resetVersions', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                (e.versions = []), (e.activeVersion = void 0);
              };
            },
          })),
          (q = Object(Se.a)(j.prototype, 'addDeviceType', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                e.deviceTypes.push({
                  name: 'DeviceType' + (e.deviceTypes.length + 1),
                  icon: 'IoIosDesktop',
                  cpu: De[0].label,
                  os: Pe[0].label,
                  libraries: xe[0].label,
                  schedulingAlgorithm: 'fifo',
                }),
                  (e.activeDeviceType = e.deviceTypes.length - 1);
              };
            },
          })),
          (G = Object(Se.a)(j.prototype, 'editDeviceType', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n) {
                (e.deviceTypes[n] = t), (e.activeDeviceType = void 0);
              };
            },
          })),
          (B = Object(Se.a)(j.prototype, 'removeDeviceType', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                void 0 !== t &&
                  (e.deviceTypes.splice(t, 1), (e.activeDeviceType = void 0));
              };
            },
          })),
          (W = Object(Se.a)(j.prototype, 'changeActiveDeviceType', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.activeDeviceType = e.activeDeviceType === t ? void 0 : t;
              };
            },
          })),
          (U = Object(Se.a)(j.prototype, 'addMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                e.mediums.push({
                  name: 'Medium' + (e.mediums.length + 1),
                  defaultQuality: 1,
                  defaultListeningCurrent: 1,
                  defaultSendingCurrent: 1,
                  defaultReceivingCurrent: 1,
                  channels: [],
                }),
                  (e.activeMedium = e.mediums.length - 1);
              };
            },
          })),
          (J = Object(Se.a)(j.prototype, 'editMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n) {
                (e.mediums[n] = t), (e.activeMedium = void 0);
              };
            },
          })),
          (Q = Object(Se.a)(j.prototype, 'removeMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.mediums.splice(t, 1), (e.activeMedium = void 0);
              };
            },
          })),
          (Y = Object(Se.a)(j.prototype, 'addChannelToMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.mediums[t].channels.push({
                  name: 'Channel' + (e.mediums[t].channels.length + 1),
                  buffer: 1024,
                });
              };
            },
          })),
          (K = Object(Se.a)(j.prototype, 'editChannelFromMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n, a) {
                e.mediums[t].channels[a] = n;
              };
            },
          })),
          Object(Se.a)(
            j.prototype,
            'listOfAllChannels',
            [Ce.g],
            Object.getOwnPropertyDescriptor(j.prototype, 'listOfAllChannels'),
            j.prototype
          ),
          (Z = Object(Se.a)(j.prototype, 'removeChannelFromMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n) {
                e.mediums[t].channels.splice(n, 1);
                var a = Object(Ie.a)(e.mediums[t].channels);
                (e.mediums[t].channels = []),
                  setTimeout(function () {
                    e.mediums[t].channels = a;
                  }, 50);
              };
            },
          })),
          (X = Object(Se.a)(j.prototype, 'changeActiveMedium', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.activeMedium = e.activeMedium === t ? void 0 : t;
              };
            },
          })),
          ($ = Object(Se.a)(j.prototype, 'addVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                e.versions.push({
                  name: 'Version' + (e.versions.length + 1),
                  processes: [],
                }),
                  (e.activeVersion = e.versions.length - 1);
              };
            },
          })),
          (ee = Object(Se.a)(j.prototype, 'editVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n) {
                (e.versions[n] = t), (e.activeVersion = void 0);
              };
            },
          })),
          (te = Object(Se.a)(j.prototype, 'removeVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.versions.splice(t, 1), (e.activeVersion = void 0);
              };
            },
          })),
          (ne = Object(Se.a)(j.prototype, 'addProcessToVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.versions[t].processes.push({
                  name: 'Process' + (e.versions[t].processes.length + 1),
                  time: 100,
                });
              };
            },
          })),
          (ae = Object(Se.a)(j.prototype, 'editProcessInVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n, a) {
                e.versions[t].processes[a] = n;
              };
            },
          })),
          (ie = Object(Se.a)(j.prototype, 'removeProcessFromVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t, n) {
                e.versions[t].processes.splice(n, 1);
                var a = Object(Ie.a)(e.versions[t].processes);
                (e.versions[t].processes = []),
                  setTimeout(function () {
                    e.versions[t].processes = a;
                  }, 50);
              };
            },
          })),
          (re = Object(Se.a)(j.prototype, 'changeActiveVersion', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.activeVersion = e.activeVersion === t ? void 0 : t;
              };
            },
          })),
          (oe = Object(Se.a)(j.prototype, 'changeTopologyElements', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function (t) {
                e.topologyElements = t;
              };
            },
          })),
          (le = Object(Se.a)(j.prototype, 'getAllModels', [Ce.f], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              var e = this;
              return function () {
                return {
                  deviceTypes: Object(Ce.q)(e.deviceTypes),
                  mediums: Object(Ce.q)(e.mediums),
                  topology: Object(Ce.q)(e.topologyElements),
                  versions: Object(Ce.q)(e.versions),
                };
              };
            },
          })),
          j),
        Me = function e() {
          var t = this;
          Object(ye.a)(this, e),
            (this.userStore = void 0),
            (this.simulationsStore = void 0),
            (this.newSimulationStore = void 0),
            (this.resetNewSimulationStore = function () {
              t.newSimulationStore = new Ve(t);
            }),
            (this.setSimulationModel = function (e) {
              t.newSimulationStore.setDeviceTypes(JSON.parse(e.deviceTypes)),
                t.newSimulationStore.setMediums(JSON.parse(e.mediums)),
                t.newSimulationStore.setTopologyElements(
                  JSON.parse(e.topology)
                ),
                t.newSimulationStore.setVersions(JSON.parse(e.versions));
            }),
            (this.userStore = new je(this)),
            (this.simulationsStore = new Ne(this)),
            (this.newSimulationStore = new Ve(this));
        },
        Ae = n(5),
        ze = n(4),
        Le =
          (n(268),
          Object(ge.b)('store')(
            (se =
              Object(ge.c)(
                (se = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(t, [this].concat(i))).state = {
                        displayMenu: !1,
                        redirectToReferrer: !1,
                      }),
                      (e.showDropdownMenu = function (t) {
                        t.preventDefault(),
                          e.setState({ displayMenu: !0 }, function () {
                            document.addEventListener(
                              'click',
                              e.hideDropdownMenu
                            );
                          });
                      }),
                      (e.hideDropdownMenu = function () {
                        e.setState({ displayMenu: !1 }, function () {
                          document.removeEventListener(
                            'click',
                            e.hideDropdownMenu
                          );
                        });
                      }),
                      (e.logout = function () {
                        var t;
                        null === (t = e.props.store) ||
                          void 0 === t ||
                          t.userStore.logout(function () {
                            e.setState({ redirectToReferrer: !0 });
                          });
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          return this.state.redirectToReferrer
                            ? me.a.createElement(be.a, { to: '/login' })
                            : me.a.createElement(
                                'div',
                                { className: 'dropdown' },
                                me.a.createElement(
                                  'div',
                                  {
                                    className: 'drop-button',
                                    onClick: this.showDropdownMenu,
                                  },
                                  me.a.createElement(Te.l, null)
                                ),
                                this.state.displayMenu &&
                                  me.a.createElement(
                                    'ul',
                                    null,
                                    me.a.createElement(
                                      he.b,
                                      { to: '/change_password' },
                                      me.a.createElement(
                                        'li',
                                        null,
                                        'Change password'
                                      )
                                    ),
                                    me.a.createElement(
                                      'li',
                                      { onClick: this.logout },
                                      'Logout'
                                    )
                                  )
                              );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || se)
          ) || se),
        Fe =
          Object(ge.b)('store')(
            (ce =
              Object(ge.c)(
                (ce = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    return Object(ye.a)(this, n), t.apply(this, arguments);
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e;
                          return '' ===
                            (null === (e = this.props.store) || void 0 === e
                              ? void 0
                              : e.userStore.token) &&
                            null === localStorage.getItem('token')
                            ? null
                            : me.a.createElement(
                                'div',
                                { className: 'top-bar' },
                                me.a.createElement(
                                  'div',
                                  { className: 'app-main-logo' },
                                  me.a.createElement(
                                    he.b,
                                    { to: '/' },
                                    me.a.createElement(
                                      'h3',
                                      null,
                                      me.a.createElement(
                                        'span',
                                        null,
                                        'QoP-ML'
                                      ),
                                      ' Web Tool'
                                    )
                                  )
                                ),
                                me.a.createElement(Le, null)
                              );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || ce)
          ) || ce,
        He =
          Object(ge.b)('store')(
            (ue =
              Object(ge.c)(
                (ue = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    return Object(ye.a)(this, n), t.apply(this, arguments);
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e;
                          return '' ===
                            (null === (e = this.props.store) || void 0 === e
                              ? void 0
                              : e.userStore.token) &&
                            null === localStorage.getItem('token')
                            ? null
                            : me.a.createElement(
                                'footer',
                                null,
                                me.a.createElement(
                                  'p',
                                  null,
                                  'QoP-ML Web Tool. UMCS 2020'
                                )
                              );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || ue)
          ) || ue,
        qe = (n(273), n(151));
      function Ge(e) {
        return Object.entries(e)
          .filter(function (e) {
            var t = Object(qe.a)(e, 2);
            t[0];
            return t[1];
          })
          .map(function (e) {
            var t = Object(qe.a)(e, 2),
              n = t[0];
            t[1];
            return n;
          })
          .join(' ');
      }
      var Be,
        We,
        Ue,
        Je,
        Qe,
        Ye,
        Ke = {
          email: {
            regex: /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-+]+)*@[a-zA-Z0-9-]{1,60}(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/,
            alert: 'Invalid email address.',
          },
          password: { regex: /^.{6,}$/, alert: 'Invalid password.' },
          elementName: { regex: /^[_a-zA-Z0-9]{3,}$/, alert: 'Invalid value.' },
        },
        Ze = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n(e) {
            var a;
            return (
              Object(ye.a)(this, n),
              ((a = t.call(this, e)).validate = function () {
                var e = a.props.type;
                if (void 0 !== e)
                  if ('password' === e) {
                    if (!Ke.password.regex.test(a.state.value))
                      return void a.setState({
                        errorText: Ke.password.alert,
                        error: !0,
                      });
                  } else if ('email' === e) {
                    if (!Ke.email.regex.test(a.state.value))
                      return void a.setState({
                        errorText: Ke.email.alert,
                        error: !0,
                      });
                  } else if (
                    'elementName' === e &&
                    !Ke.elementName.regex.test(a.state.value)
                  )
                    return void a.setState({
                      errorText: Ke.elementName.alert,
                      error: !0,
                    });
                return 0 === a.state.value.length
                  ? (a.setState({
                      errorText: "This field can't be empty.",
                      error: !0,
                    }),
                    !1)
                  : (a.setState({ errorText: '', error: !1 }), !0);
              }),
              (a.setValidity = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '';
                a.setState({ error: e, errorText: t });
              }),
              (a.getValue = function () {
                return a.state.value;
              }),
              (a.setValue = function (e) {
                a.setState({ value: e });
              }),
              (a.handleChange = function (e) {
                a.setState({ value: e.target.value, errorText: '', error: !1 });
              }),
              (a.state = {
                value: e.initialValue || '',
                errorText: '',
                error: !1,
              }),
              a
            );
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = Ge({
                    input: !0,
                    'input-danger': this.state.error,
                    'input-reversed': this.props.white,
                  });
                  return me.a.createElement(
                    me.a.Fragment,
                    null,
                    me.a.createElement('input', {
                      className: e,
                      onChange: this.handleChange,
                      value: this.state.value,
                      type: 'password' === this.props.type ? 'password' : '',
                    }),
                    !!this.state.errorText &&
                      me.a.createElement(
                        'p',
                        { className: 'label-danger' },
                        this.state.errorText
                      )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        Xe = {
          change_password: 'Change password',
          old_password: 'Old password',
          new_password: 'New Password',
          confirm_new_password: 'Confirm new password',
          passwords_not_the_same: 'Passwords are not the same.',
          log_into: 'Login to the system',
          invalid_cridentials: 'Invalid cridentials.',
          email_address: 'Email address',
          password: 'Password',
          not_have_accout: 'Not have account yet? ',
          sign_up: 'Sign up',
          log_in: 'Log In',
          registered: 'Successfully registered. You can log in.',
          confirm_password: 'Confirm password',
          sign_in: 'Sign in',
          have_account: 'Do have account yet? ',
          email_used: 'There is already an account with this email address.',
          my_simulations: 'My simulations',
          create_simulation: 'Create simulation',
          device: 'Device',
          time_in_s: 'Time (s)',
          status: 'Status',
          go_back: 'Go back',
          simulation_details: 'Simulation Details',
          date: 'Date',
          details: 'Details',
          simulation_not_found: 'Simulation not found.',
          device_types: 'Devices types',
          device_types_tooltip: 'Add device type to add new devices.',
          add_device_types: 'Add device type',
          device_details: 'Device details',
          save: 'Save',
          primary: 'Primary',
          device_icon: 'Device icon',
          device_name: 'Device name',
          scheduling_algorithm: 'Scheduling algorithm',
          informational: 'Informational',
          no_device_added_header: 'No device type added',
          no_device_added_description: 'Add element to make simulation.',
          mediums: 'Mediums',
          mediums_tooltip: 'Add mediums and channels to it.',
          add_medium: 'Add medium',
          medium_details: 'Medium details',
          medium_name: 'Medium name',
          constants: 'Constants',
          default_quality: 'Default quality',
          default_listening_current: 'Default Listening Current (mA)',
          default_sending_current: 'Default Sending Current (mA)',
          default_recieving_current: 'Default Receiving Current (mA)',
          channels: 'Channels',
          channels_tooltip: 'Add channel to medium.',
          add_channel: 'Add channel',
          channel_name: 'Channel name',
          buffer_name: 'Buffer size (B)',
          is_infinity: 'Is infinity?',
          no_medium_added_header: 'No medium added',
          no_medium_added_description: 'Add element to make simulation.',
          confirm: 'Confirm',
          go_back_are_you_shure:
            'Are you sure to go back? All progress in this step will be removed.',
          cancel: 'Cancel',
          accept: 'Accept',
          warning: 'Warning',
          problems_in_form: 'There are some problems in form.',
          ok: 'OK',
          add_element_in_page: 'You must add element in this page.',
          start_simulation: 'Start simulation',
          start_simulation_description:
            'Press the play button to start simulation.',
          starting: 'Starting...',
          something_error: 'Something went wrong...',
          try_again: 'Try again',
          version_name: 'Version name',
          unique_name: "The name isn't unique.",
          versions: 'Versions',
          versions_and_proccesses: 'Versions and processes',
          versions_and_proccesses_tooltip: 'Add version and processes to them.',
          add_version: 'Add version',
          version_details: 'Version details',
          processes: 'Processes',
          add_process: 'Add process',
          no_version_added_header: 'No version added',
          no_version_added_description: 'Add element to make simulation.',
          process_name: 'Process name',
          device_instance: 'Device Instance',
          execution_time: 'Execution time (ms)',
          infinity_process: 'Infinity process',
          process_with_recieve: 'Process with recieve',
          recieve_from_channel: 'Recieve from channel',
          process_with_send: 'Process with send',
          send_channel: 'Send channel',
          device_to_sent: 'Device to sent',
          size_to_sent: 'Data size to sent [B]',
          select_option: 'Select an option',
          running: 'Running',
          pending: 'Pending',
          in: 'in',
          out: 'out',
          topology: 'Topology',
          topology_tooltip:
            'Add hosts and make connections betwwen them. To add host drag and drop device type from list. To remove host check it and click Delete button.',
          available_devices: 'Available devices',
          drag_and_drop: 'Drag and drop to add.',
          redo_stop: 'Redo step',
          next_step: 'Next step',
          device_icon_tooltip:
            'The icon is only used to easily recognize the device when creating a simulation.',
          device_name_tooltip: 'Identify your device type.',
          device_scheduling_tooltip:
            'Choose how to manage the processes on the device.',
          device_informal_tooltip: 'Enter data about your device type.',
          medium_name_tooltip: 'Identify your medium.',
          medium_constants_tooltip:
            'Enter the constant values \u200b\u200bof the medium.',
          channel_name_tooltip: 'Identify your channel.',
          channel_buffer_tooltip:
            'Enter the size of the buffer, if you want it to be unlimited, check the checkbox below.',
          version_name_tooltip: 'Identify your version.',
          process_name_tooltip: 'Identify your process.',
          process_device_instance_tooltip:
            'Select the device on which the process is to be executed.',
          process_execution_time_tooltip:
            'Enter the time of the process execution.',
          process_infinity_tooltip:
            'If you want the process to run continuously, select this option.',
          process_recieve_tooltip:
            'Select if the process receives data using an available channel.',
          process_send_tooltip:
            'Select if the process sends data, then select the target channel and device.',
        },
        $e =
          Object(ge.b)('store')(
            (Be =
              Object(ge.c)(
                (Be = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).emailInputRef = me.a.createRef()),
                      (e.passwordInputRef = me.a.createRef()),
                      (e.navigateAfterLogin = function () {
                        e.props.history.push('/simulations');
                      }),
                      (e.login = (function () {
                        var t = Object(we.a)(
                          Oe.a.mark(function t(n) {
                            var a, i, r, o, l, s, c, u;
                            return Oe.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    n.preventDefault(),
                                      (a = e.emailInputRef.current),
                                      (i = e.passwordInputRef.current),
                                      a &&
                                        i &&
                                        ((r = a.validate()),
                                        (o = i.validate()),
                                        r &&
                                          o &&
                                          ((s = a.getValue()),
                                          (c = i.getValue()),
                                          (u = { email: s, password: c }),
                                          null === (l = e.props.store) ||
                                            void 0 === l ||
                                            l.userStore.login(
                                              u,
                                              e.navigateAfterLogin
                                            )));
                                  case 4:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e,
                            t,
                            n =
                              null === (e = this.props.store) || void 0 === e
                                ? void 0
                                : e.userStore.loginError,
                            a = (null === (t = this.props.store) || void 0 === t
                              ? void 0
                              : t.userStore
                            ).registeredPrompt;
                          return me.a.createElement(
                            'div',
                            { className: 'main-container' },
                            me.a.createElement(
                              'div',
                              { className: 'form-center-container' },
                              me.a.createElement(
                                'div',
                                { className: 'logo-main-container' },
                                me.a.createElement('div', {
                                  className: 'logo-center-container',
                                }),
                                me.a.createElement(
                                  'div',
                                  { className: 'app-header' },
                                  me.a.createElement(
                                    'h3',
                                    null,
                                    me.a.createElement('span', null, 'QoP-ML'),
                                    ' Web Tool'
                                  )
                                )
                              ),
                              me.a.createElement(
                                'form',
                                { onSubmit: this.login },
                                me.a.createElement(
                                  'p',
                                  { className: 'title' },
                                  Xe.log_into
                                ),
                                a &&
                                  me.a.createElement(
                                    'p',
                                    { className: 'label-danger' },
                                    Xe.registered
                                  ),
                                n &&
                                  me.a.createElement(
                                    'p',
                                    { className: 'label-danger' },
                                    Xe.invalid_cridentials
                                  ),
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.email_address
                                ),
                                me.a.createElement(Ze, {
                                  ref: this.emailInputRef,
                                  type: 'email',
                                }),
                                me.a.createElement('label', null, Xe.password),
                                me.a.createElement(Ze, {
                                  ref: this.passwordInputRef,
                                  type: 'password',
                                }),
                                me.a.createElement('input', {
                                  className: 'button',
                                  type: 'submit',
                                  value: Xe.log_in,
                                }),
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.not_have_accout,
                                  me.a.createElement(
                                    he.b,
                                    { to: '/register' },
                                    me.a.createElement('span', null, Xe.sign_up)
                                  )
                                )
                              )
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Be)
          ) || Be,
        et = Object(be.g)($e),
        tt =
          (n(274),
          Object(ge.b)('store')(
            (We =
              Object(ge.c)(
                (We = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).emailInputRef = me.a.createRef()),
                      (e.passwordInputRef = me.a.createRef()),
                      (e.confirmPasswordInputRef = me.a.createRef()),
                      (e.navigateAfterRegister = function () {
                        e.props.history.push('/login');
                      }),
                      (e.register = (function () {
                        var t = Object(we.a)(
                          Oe.a.mark(function t(n) {
                            var a, i, r, o, l, s, c, u, d, m, p;
                            return Oe.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      (n.preventDefault(),
                                      (a = e.emailInputRef.current),
                                      (i = e.passwordInputRef.current),
                                      (r = e.confirmPasswordInputRef.current),
                                      !(a && i && r))
                                    ) {
                                      t.next = 18;
                                      break;
                                    }
                                    if (
                                      ((o = a.validate()),
                                      (l = i.validate()),
                                      (s = r.validate()),
                                      !(o && l && s))
                                    ) {
                                      t.next = 18;
                                      break;
                                    }
                                    if (
                                      ((u = a.getValue()),
                                      (d = i.getValue()),
                                      (m = r.getValue()),
                                      d === m)
                                    ) {
                                      t.next = 16;
                                      break;
                                    }
                                    return (
                                      i.setValidity(
                                        !0,
                                        Xe.passwords_not_the_same
                                      ),
                                      r.setValidity(!0),
                                      t.abrupt('return')
                                    );
                                  case 16:
                                    (p = {
                                      email: u,
                                      password: d,
                                      confirmPassword: m,
                                    }),
                                      null === (c = e.props.store) ||
                                        void 0 === c ||
                                        c.userStore.register(
                                          p,
                                          e.navigateAfterRegister,
                                          e.onErrorCallback
                                        );
                                  case 18:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (e.onErrorCallback = function (t) {
                        var n;
                        'There is already an account with this email address' ===
                          (null === t || void 0 === t ? void 0 : t.message) &&
                          (null === (n = e.emailInputRef.current) ||
                            void 0 === n ||
                            n.setValidity(!0, Xe.email_used));
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          return me.a.createElement(
                            'div',
                            { className: 'main-container' },
                            me.a.createElement(
                              'div',
                              { className: 'form-center-container' },
                              me.a.createElement(
                                'div',
                                { className: 'logo-main-container' },
                                me.a.createElement('div', {
                                  className: 'logo-center-container',
                                }),
                                me.a.createElement(
                                  'div',
                                  { className: 'app-header' },
                                  me.a.createElement(
                                    'h3',
                                    null,
                                    me.a.createElement('span', null, 'QoP-ML'),
                                    ' Web Tool'
                                  )
                                )
                              ),
                              me.a.createElement(
                                'form',
                                { onSubmit: this.register },
                                me.a.createElement(
                                  'p',
                                  { className: 'title' },
                                  Xe.sign_up
                                ),
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.email_address
                                ),
                                me.a.createElement(Ze, {
                                  ref: this.emailInputRef,
                                  type: 'email',
                                }),
                                me.a.createElement('label', null, Xe.password),
                                me.a.createElement(Ze, {
                                  ref: this.passwordInputRef,
                                  type: 'password',
                                }),
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.confirm_password
                                ),
                                me.a.createElement(Ze, {
                                  ref: this.confirmPasswordInputRef,
                                  type: 'password',
                                }),
                                me.a.createElement('input', {
                                  className: 'button',
                                  type: 'submit',
                                  value: Xe.sign_up,
                                }),
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.have_account,
                                  me.a.createElement(
                                    he.b,
                                    { to: '/login' },
                                    me.a.createElement('span', null, Xe.sign_in)
                                  )
                                )
                              )
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || We)
          ) || We),
        nt = Object(be.g)(tt),
        at = (n(275), n(252)),
        it = n.n(at),
        rt = n(111),
        ot = n.n(rt),
        lt = (n(279), n(280), n(69)),
        st = n.n(lt),
        ct = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            var e;
            Object(ye.a)(this, n);
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
              i[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {}),
              (e.renderStatusInfo = function (e, t) {
                switch (e) {
                  case '2':
                    return me.a.createElement(
                      me.a.Fragment,
                      null,
                      me.a.createElement(
                        'span',
                        { className: 'status-column status-column-passed' },
                        'Passed'
                      ),
                      me.a.createElement(
                        he.b,
                        {
                          className: 'details-column details-column-link',
                          to: '/details/' + t,
                        },
                        Xe.details
                      )
                    );
                  case '3':
                    return me.a.createElement(
                      me.a.Fragment,
                      null,
                      me.a.createElement(
                        'span',
                        { className: 'status-column status-column-error' },
                        'Error'
                      ),
                      me.a.createElement(
                        he.b,
                        {
                          className: 'details-column details-column-link',
                          to: '/details/' + t,
                        },
                        Xe.details
                      )
                    );
                  case '0':
                    return me.a.createElement(
                      me.a.Fragment,
                      null,
                      me.a.createElement(
                        'span',
                        { className: 'status-column' },
                        ' ',
                        Xe.running
                      ),
                      me.a.createElement(
                        'div',
                        { className: 'details-column' },
                        me.a.createElement(st.a, {
                          type: 'Circles',
                          color: '#264766',
                          height: 20,
                          width: 20,
                        })
                      )
                    );
                }
              }),
              e
            );
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.simulation,
                    t = Ge({
                      'status-indicator': !0,
                      'status-indicator-pending': '4' === e.status,
                      'status-indicator-passed': '2' === e.status,
                      'status-indicator-error': '3' === e.status,
                      'status-indicator-running': '0' === e.status,
                    });
                  return me.a.createElement(
                    'div',
                    { className: 'simulation-container' },
                    me.a.createElement('div', { className: t }),
                    me.a.createElement(
                      'div',
                      { className: 'simulation-inside-container' },
                      me.a.createElement(
                        'p',
                        null,
                        ot()(e.createdAt).format('DD.MM.YYYY HH:mm')
                      ),
                      this.renderStatusInfo(e.status, e.id)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        ut =
          Object(ge.b)('store')(
            (Ue =
              Object(ge.c)(
                (Ue = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(t, [this].concat(i))).state = {
                        redirectToReferrer: !1,
                      }),
                      (e.componentDidMount = function () {
                        var t;
                        null === (t = e.props.store) ||
                          void 0 === t ||
                          t.simulationsStore.getSimulationsList();
                      }),
                      (e.onChangePage = function (t) {
                        var n,
                          a,
                          i = t.selected;
                        null === (n = e.props.store) ||
                          void 0 === n ||
                          n.simulationsStore.changeSimulationPage(i),
                          null === (a = e.props.store) ||
                            void 0 === a ||
                            a.simulationsStore.getSimulationsList();
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e,
                            t =
                              null === (e = this.props.store) || void 0 === e
                                ? void 0
                                : e.simulationsStore,
                            n = t.simulations,
                            a = t.simulationsCount,
                            i = t.loadingSimulations,
                            r = t.getSimulationsList;
                          return me.a.createElement(
                            'div',
                            { className: 'main-default-container' },
                            me.a.createElement(
                              'div',
                              { className: 'header-container' },
                              me.a.createElement('h2', null, Xe.my_simulations),
                              me.a.createElement(
                                'div',
                                { className: 'buttons-container' },
                                me.a.createElement(
                                  'div',
                                  {
                                    onClick: r,
                                    className:
                                      'round-button round-button-secondary refresh-button',
                                  },
                                  me.a.createElement(Te.o, null)
                                ),
                                me.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'round-button round-button-primary',
                                  },
                                  me.a.createElement(Te.a, null),
                                  me.a.createElement(
                                    he.b,
                                    { to: '/simulation' },
                                    me.a.createElement(
                                      'p',
                                      null,
                                      Xe.create_simulation
                                    )
                                  )
                                )
                              )
                            ),
                            me.a.createElement(
                              'div',
                              { className: 'section' },
                              i
                                ? me.a.createElement(
                                    'div',
                                    { className: 'big-loader-container' },
                                    me.a.createElement(st.a, {
                                      type: 'Circles',
                                      color: '#264766',
                                      height: 40,
                                      width: 40,
                                    })
                                  )
                                : me.a.createElement(
                                    me.a.Fragment,
                                    null,
                                    n.map(function (e, t) {
                                      return me.a.createElement(ct, {
                                        key: 'simulation' + t + e.createdAt,
                                        simulation: Object(Ce.q)(e),
                                      });
                                    }),
                                    0 === a &&
                                      me.a.createElement(
                                        'div',
                                        { className: 'big-loader-container' },
                                        me.a.createElement(
                                          'p',
                                          null,
                                          'No simulations.'
                                        )
                                      )
                                  ),
                              me.a.createElement(it.a, {
                                pageCount: Math.ceil(a / 10),
                                pageRangeDisplayed: 4,
                                marginPagesDisplayed: 1,
                                containerClassName: 'pagination-container',
                                pageLinkClassName: 'pagination-page',
                                previousLinkClassName:
                                  'pagination-navigation-button pagination-left-button',
                                nextLinkClassName:
                                  'pagination-navigation-button pagination-right-button',
                                previousLabel: 'Previous',
                                nextLabel: 'Next',
                                activeLinkClassName: 'pagination-page-active',
                                onPageChange: this.onChangePage,
                              })
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Ue)
          ) || Ue,
        dt = Object(be.g)(ut),
        mt =
          (n(300),
          Object(ge.b)('store')(
            (Je =
              Object(ge.c)(
                (Je = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).oldPasswordInputRef = me.a.createRef()),
                      (e.newPasswordInputRef = me.a.createRef()),
                      (e.confirmNewPasswordInputRef = me.a.createRef()),
                      (e.state = { redirectToReferrer: !1 }),
                      (e.navigateAfterAction = function () {
                        e.props.history.push('/simulations');
                      }),
                      (e.onInvaildOldPassword = function () {
                        var t = e.oldPasswordInputRef.current;
                        t && t.setValidity(!0, 'Incorrect user password.');
                      }),
                      (e.changePassword = function (t) {
                        t.preventDefault();
                        var n = e.oldPasswordInputRef.current,
                          a = e.newPasswordInputRef.current,
                          i = e.confirmNewPasswordInputRef.current;
                        if (n && a && i) {
                          var r = n.validate(),
                            o = a.validate(),
                            l = i.validate();
                          if (r && o && l) {
                            var s,
                              c = n.getValue(),
                              u = a.getValue(),
                              d = i.getValue();
                            if (u !== d)
                              return (
                                a.setValidity(
                                  !0,
                                  'Has\u0142a nie s\u0105 takie same.'
                                ),
                                void i.setValidity(!0)
                              );
                            var m = {
                              old_password: c,
                              new_password: u,
                              confirm_new_password: d,
                            };
                            null === (s = e.props.store) ||
                              void 0 === s ||
                              s.userStore.changePassword(
                                m,
                                e.navigateAfterAction,
                                e.onInvaildOldPassword
                              );
                          }
                        }
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          return me.a.createElement(
                            'div',
                            { className: 'main-default-container' },
                            me.a.createElement(
                              'form',
                              {
                                className: 'change-password-form',
                                onSubmit: this.changePassword,
                              },
                              me.a.createElement(
                                'h2',
                                null,
                                Xe.change_password
                              ),
                              me.a.createElement(
                                'label',
                                null,
                                Xe.old_password
                              ),
                              me.a.createElement(Ze, {
                                ref: this.oldPasswordInputRef,
                                type: 'password',
                              }),
                              me.a.createElement(
                                'label',
                                null,
                                Xe.new_password
                              ),
                              me.a.createElement(Ze, {
                                ref: this.newPasswordInputRef,
                                type: 'password',
                              }),
                              me.a.createElement(
                                'label',
                                null,
                                Xe.confirm_new_password
                              ),
                              me.a.createElement(Ze, {
                                ref: this.confirmNewPasswordInputRef,
                                type: 'password',
                              }),
                              me.a.createElement('input', {
                                className: 'button',
                                type: 'submit',
                                value: Xe.change_password,
                              })
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Je)
          ) || Je),
        pt = Object(be.g)(mt),
        ft =
          (n(62),
          [
            { position: 0, Icon: Te.f },
            { position: 1, Icon: Te.t },
            { position: 2, Icon: Te.h },
            { position: 3, Icon: Te.k },
            { position: 4, Icon: Te.m },
          ]),
        vt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return me.a.createElement(
                    'div',
                    { className: 'simulation-bottom-bar-outside' },
                    me.a.createElement(
                      'div',
                      { className: 'simulation-bottom-bar' },
                      me.a.createElement(
                        'div',
                        { className: 'simulation-bar-button-container' },
                        this.props.position > 0 &&
                          me.a.createElement(
                            'div',
                            {
                              onClick: function () {
                                return e.props.changePosition(
                                  e.props.position - 1
                                );
                              },
                              className: 'round-button round-button-secondary',
                            },
                            me.a.createElement('p', null, Xe.redo_stop)
                          )
                      ),
                      me.a.createElement(
                        'div',
                        { className: 'simulation-bottom-bar-icon-container' },
                        ft.map(function (t) {
                          return me.a.createElement(
                            'div',
                            null,
                            me.a.createElement(t.Icon, {
                              style: { marginLeft: 10, marginRight: 10 },
                              color:
                                t.position === e.props.position
                                  ? '#264766'
                                  : 'gray',
                            }),
                            t.position < e.props.position &&
                              me.a.createElement(
                                'div',
                                {
                                  className: 'simulation-bottom-bar-done-step',
                                },
                                me.a.createElement(Te.d, null)
                              )
                          );
                        })
                      ),
                      me.a.createElement(
                        'div',
                        { className: 'simulation-bar-button-container' },
                        this.props.position < 4 &&
                          me.a.createElement(
                            'div',
                            {
                              onClick: function () {
                                return e.props.changePosition(
                                  e.props.position + 1
                                );
                              },
                              className: 'round-button round-button-primary',
                            },
                            me.a.createElement('p', null, Xe.next_step)
                          )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        bt = n(257),
        ht =
          (n(302),
          function (e) {
            var t = Ge({
              'tooltip-hover': !0,
              'tooltip-hover-small': 'small' === e.type,
            });
            return me.a.createElement(
              bt.a,
              {
                placement: e.placement || 'top',
                trigger: ['hover'],
                overlay: me.a.createElement(
                  me.a.Fragment,
                  null,
                  !!e.title &&
                    me.a.createElement(
                      'p',
                      { className: 'tooltip-hover-title' },
                      e.title
                    ),
                  me.a.createElement(
                    'span',
                    { className: 'tooltip-hover-description' },
                    e.content
                  )
                ),
              },
              me.a.createElement(
                'div',
                { className: t },
                me.a.createElement(Te.i, null)
              )
            );
          }),
        gt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.device,
                    a = t.active,
                    i = t.onPress,
                    r = Ge({
                      'device-type-list-element': !0,
                      'device-type-list-element-active': a,
                    }),
                    o =
                      null ===
                        (e = Re.find(function (e) {
                          return e.name === n.icon;
                        })) || void 0 === e
                        ? void 0
                        : e.icon;
                  return me.a.createElement(
                    'div',
                    { className: r, onClick: i },
                    !!o && me.a.createElement(o, null),
                    me.a.createElement(
                      'div',
                      { className: 'text-container' },
                      n.name
                    )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        yt =
          (n(303),
          (function (e) {
            Object(Ae.a)(n, e);
            var t = Object(ze.a)(n);
            function n() {
              var e;
              Object(ye.a)(this, n);
              for (
                var a = arguments.length, i = new Array(a), r = 0;
                r < a;
                r++
              )
                i[r] = arguments[r];
              return (
                ((e = t.call.apply(t, [this].concat(i))).state = { value: 0 }),
                (e.setValue = function (t) {
                  e.setState({
                    value: Re.findIndex(function (e) {
                      return e.name === t;
                    }),
                  });
                }),
                (e.getValue = function () {
                  return Re[e.state.value].name;
                }),
                e
              );
            }
            return (
              Object(ke.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return me.a.createElement(
                      'div',
                      { className: 'icon-picker-container' },
                      Re.map(function (t, n) {
                        var a = Ge({
                          'icon-picker-item': !0,
                          'icon-picker-item-active': n === e.state.value,
                        });
                        return me.a.createElement(
                          'div',
                          {
                            key: 'icon' + n,
                            className: a,
                            onClick: function () {
                              return e.setValue(t.name);
                            },
                          },
                          me.a.createElement(t.icon, {
                            color: n === e.state.value ? '#264766' : 'gray',
                          })
                        );
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(me.a.Component)),
        Et = (n(304), n(253)),
        Ot = n.n(Et),
        wt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n(e) {
            var a;
            return (
              Object(ye.a)(this, n),
              ((a = t.call(this, e)).onChange = function (e) {
                var t;
                a.setState(
                  {
                    value: {
                      label: e.value,
                      value:
                        (null ===
                          (t = a.props.items.find(function (t) {
                            return e.value === t.label;
                          })) || void 0 === t
                          ? void 0
                          : t.value) || e.value,
                    },
                  },
                  function () {
                    var e;
                    a.props.onChange &&
                      a.props.onChange(
                        null === (e = a.state.value) || void 0 === e
                          ? void 0
                          : e.value
                      );
                  }
                );
              }),
              (a.getValue = function () {
                return a.state.value
                  ? a.state.value
                  : a.props.items
                  ? a.props.items[0]
                  : void 0;
              }),
              (a.setValue = function (e) {
                var t;
                a.setState({
                  value: {
                    label:
                      (null ===
                        (t = a.props.items.find(function (t) {
                          return e === t.value;
                        })) || void 0 === t
                        ? void 0
                        : t.label) || e,
                    value: e,
                  },
                });
              }),
              (a.state = { value: e.items ? e.items[0] : void 0 }),
              a
            );
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.value,
                    t = this.props.items;
                  return me.a.createElement(Ot.a, {
                    options: t.map(function (e) {
                      return e.label;
                    }),
                    onChange: this.onChange,
                    value: null === e || void 0 === e ? void 0 : e.label,
                    placeholder: Xe.select_option,
                  });
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        _t = [
          { label: 'Round robin', value: 'rr' },
          { label: 'FIFO', value: 'fifo' },
        ],
        St =
          Object(ge.b)('store')(
            (Qe =
              Object(ge.c)(
                (Qe = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).iconPickerRef = me.a.createRef()),
                      (e.nameInputRef = me.a.createRef()),
                      (e.cpuSelectRef = me.a.createRef()),
                      (e.osSelectRef = me.a.createRef()),
                      (e.libsSelectRef = me.a.createRef()),
                      (e.schedulingAlgorithmSelectRef = me.a.createRef()),
                      (e.setDataToForm = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.deviceTypes,
                          a = t.activeDeviceType;
                        if (void 0 !== a) {
                          var i = n[a],
                            r = e.iconPickerRef.current,
                            o = e.nameInputRef.current,
                            l = e.cpuSelectRef.current,
                            s = e.osSelectRef.current,
                            c = e.libsSelectRef.current,
                            u = e.schedulingAlgorithmSelectRef.current;
                          r &&
                            o &&
                            l &&
                            s &&
                            c &&
                            u &&
                            (r.setValue(i.icon),
                            o.setValue(i.name),
                            l.setValue(i.cpu),
                            s.setValue(i.os),
                            c.setValue(i.libraries),
                            u.setValue(i.schedulingAlgorithm));
                        }
                      }),
                      (e.saveData = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.editDeviceType,
                          a = t.activeDeviceType,
                          i = t.changeActiveDeviceType,
                          r = t.checkDeviceTypeNameUniqueness;
                        if (void 0 !== a) {
                          var o = e.iconPickerRef.current,
                            l = e.nameInputRef.current,
                            s = e.cpuSelectRef.current,
                            c = e.osSelectRef.current,
                            u = e.libsSelectRef.current,
                            d = e.schedulingAlgorithmSelectRef.current;
                          if (o && l && s && c && u && d) {
                            if (l.validate()) {
                              var m,
                                p,
                                f,
                                v,
                                b = {
                                  icon: o.getValue(),
                                  name: l.getValue(),
                                  cpu:
                                    null === (m = s.getValue()) || void 0 === m
                                      ? void 0
                                      : m.label,
                                  os:
                                    null === (p = c.getValue()) || void 0 === p
                                      ? void 0
                                      : p.label,
                                  libraries:
                                    null === (f = u.getValue()) || void 0 === f
                                      ? void 0
                                      : f.label,
                                  schedulingAlgorithm:
                                    null === (v = d.getValue()) || void 0 === v
                                      ? void 0
                                      : v.value,
                                };
                              return r(b.name)
                                ? (n(b, a), i(void 0), !0)
                                : (l.setValidity(!0, "The name isn't unique."),
                                  !1);
                            }
                            return !1;
                          }
                        }
                        return !0;
                      }),
                      (e.changeDevice = function (t) {
                        (0,
                        e.props.store.newSimulationStore
                          .changeActiveDeviceType)(t),
                          setTimeout(function () {
                            e.setDataToForm();
                          }, 100);
                      }),
                      (e.addDevice = function () {
                        (0, e.props.store.newSimulationStore.addDeviceType)(),
                          setTimeout(function () {
                            e.setDataToForm();
                          }, 100);
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            t = this.props.store.newSimulationStore,
                            n = t.deviceTypes,
                            a = t.activeDeviceType,
                            i = t.removeDeviceType;
                          return me.a.createElement(
                            'div',
                            { className: 'simulation-padding-container' },
                            me.a.createElement(
                              'div',
                              { className: 'simulation-flex-container' },
                              me.a.createElement(
                                'div',
                                { className: 'header-container' },
                                me.a.createElement(
                                  'div',
                                  { className: 'header-inside-container' },
                                  me.a.createElement(
                                    'h2',
                                    null,
                                    Xe.device_types
                                  ),
                                  me.a.createElement(ht, {
                                    type: 'small',
                                    placement: 'bottom',
                                    title: Xe.device_types,
                                    content: Xe.device_types_tooltip,
                                  })
                                ),
                                me.a.createElement(
                                  'div',
                                  { className: 'buttons-container' },
                                  me.a.createElement(
                                    'div',
                                    {
                                      onClick: this.addDevice,
                                      className:
                                        'round-button round-button-primary',
                                    },
                                    me.a.createElement(Te.a, null),
                                    me.a.createElement(
                                      'p',
                                      null,
                                      Xe.add_device_types
                                    )
                                  )
                                )
                              ),
                              me.a.createElement(
                                'div',
                                { className: 'section ' },
                                me.a.createElement(
                                  'div',
                                  { className: 'device-type-list' },
                                  n.map(function (t, n) {
                                    return me.a.createElement(gt, {
                                      key: '' + n,
                                      active: a === n,
                                      onPress: function () {
                                        return e.changeDevice(n);
                                      },
                                      device: t,
                                    });
                                  })
                                )
                              )
                            ),
                            me.a.createElement(
                              'div',
                              {
                                className:
                                  'simulation-flex-container' +
                                  (void 0 === a
                                    ? ' simulation-flex-container-removed'
                                    : ''),
                              },
                              me.a.createElement(
                                me.a.Fragment,
                                null,
                                me.a.createElement(
                                  'div',
                                  { className: 'header-container' },
                                  me.a.createElement(
                                    'h2',
                                    null,
                                    Xe.device_details
                                  ),
                                  me.a.createElement(
                                    'div',
                                    { className: 'buttons-container' },
                                    me.a.createElement(
                                      'div',
                                      {
                                        onClick: function () {
                                          return i(a);
                                        },
                                        className:
                                          'round-button round-button-secondary round-button-remove',
                                      },
                                      me.a.createElement(Te.s, null)
                                    ),
                                    me.a.createElement(
                                      'div',
                                      {
                                        onClick: this.saveData,
                                        className:
                                          'round-button round-button-primary',
                                      },
                                      me.a.createElement(Te.p, null),
                                      me.a.createElement('p', null, Xe.save)
                                    )
                                  )
                                ),
                                me.a.createElement(
                                  'div',
                                  { className: 'section' },
                                  me.a.createElement('h3', null, Xe.primary),
                                  me.a.createElement(
                                    'div',
                                    { className: 'label-inside-container' },
                                    me.a.createElement(
                                      'label',
                                      null,
                                      Xe.device_icon
                                    ),
                                    me.a.createElement(ht, {
                                      type: 'small',
                                      placement: 'bottom',
                                      title: Xe.device_icon,
                                      content: Xe.device_icon_tooltip,
                                    })
                                  ),
                                  me.a.createElement(yt, {
                                    ref: this.iconPickerRef,
                                  }),
                                  me.a.createElement(
                                    'div',
                                    { className: 'label-inside-container' },
                                    me.a.createElement(
                                      'label',
                                      null,
                                      Xe.device_name
                                    ),
                                    me.a.createElement(ht, {
                                      type: 'small',
                                      placement: 'bottom',
                                      title: Xe.device_name,
                                      content: Xe.device_name_tooltip,
                                    })
                                  ),
                                  me.a.createElement(Ze, {
                                    ref: this.nameInputRef,
                                    white: !0,
                                    type: 'elementName',
                                  }),
                                  me.a.createElement(
                                    'div',
                                    { className: 'label-inside-container' },
                                    me.a.createElement(
                                      'label',
                                      null,
                                      Xe.scheduling_algorithm
                                    ),
                                    me.a.createElement(ht, {
                                      type: 'small',
                                      placement: 'bottom',
                                      title: Xe.scheduling_algorithm,
                                      content: Xe.device_scheduling_tooltip,
                                    })
                                  ),
                                  me.a.createElement(wt, {
                                    ref: this.schedulingAlgorithmSelectRef,
                                    items: _t,
                                  }),
                                  me.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'label-inside-container label-inside-container-with-bottom',
                                    },
                                    me.a.createElement(
                                      'h3',
                                      null,
                                      Xe.informational
                                    ),
                                    me.a.createElement(ht, {
                                      type: 'small',
                                      placement: 'bottom',
                                      title: Xe.informational,
                                      content: Xe.device_informal_tooltip,
                                    })
                                  ),
                                  me.a.createElement('label', null, 'CPU'),
                                  me.a.createElement(wt, {
                                    ref: this.cpuSelectRef,
                                    items: De,
                                  }),
                                  me.a.createElement('label', null, 'OS'),
                                  me.a.createElement(wt, {
                                    ref: this.osSelectRef,
                                    items: Pe,
                                  }),
                                  me.a.createElement(
                                    'label',
                                    null,
                                    'Libraries'
                                  ),
                                  me.a.createElement(wt, {
                                    ref: this.libsSelectRef,
                                    items: xe,
                                  })
                                )
                              )
                            ),
                            0 === n.length &&
                              me.a.createElement(
                                'div',
                                { className: 'no-content-container' },
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_device_added_header
                                ),
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_device_added_description
                                )
                              )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Qe)
          ) || Qe,
        Ct = n(259),
        jt =
          (n(305),
          (function (e) {
            Object(Ae.a)(n, e);
            var t = Object(ze.a)(n);
            function n(e) {
              var a;
              return (
                Object(ye.a)(this, n),
                ((a = t.call(this, e)).getValue = function () {
                  return a.state.value;
                }),
                (a.setValue = function (e) {
                  a.setState({ value: e });
                }),
                (a.onChange = function (e) {
                  a.setState({ value: e });
                }),
                (a.toggleDisabled = function () {
                  a.setState({ disabled: !a.state.disabled });
                }),
                (a.state = { disabled: !1, value: e.initialValue || 1 }),
                a
              );
            }
            return (
              Object(ke.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    return me.a.createElement(Ct.a, {
                      step: 0.1,
                      value: this.state.value,
                      onChange: this.onChange,
                      disabled: this.state.disabled,
                    });
                  },
                },
              ]),
              n
            );
          })(me.a.Component)),
        Nt =
          (n(306),
          (function (e) {
            Object(Ae.a)(n, e);
            var t = Object(ze.a)(n);
            function n(e) {
              var a;
              return (
                Object(ye.a)(this, n),
                ((a = t.call(this, e)).getValue = function () {
                  return a.state.value;
                }),
                (a.setValue = function (e) {
                  a.setState({ value: e });
                }),
                (a.onChange = function () {
                  a.props.onChange && a.props.onChange(!a.state.value),
                    a.setState({ value: !a.state.value });
                }),
                (a.toggleDisabled = function () {
                  a.setState({ disabled: !a.state.disabled });
                }),
                (a.state = { disabled: !1, value: e.initialValue || !1 }),
                a
              );
            }
            return (
              Object(ke.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = Ge({ checkbox: !0 });
                    return me.a.createElement(
                      'div',
                      { className: 'checkbox-container' },
                      me.a.createElement(
                        'div',
                        {
                          className: t,
                          onClick: function () {
                            return e.onChange();
                          },
                        },
                        this.state.value && me.a.createElement(Te.c, null)
                      ),
                      me.a.createElement(
                        'label',
                        { className: 'checkbox-label' },
                        this.props.placeholder
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(me.a.Component)),
        It = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.medium,
                    n = e.active,
                    a = e.onPress,
                    i = Ge({
                      'medium-list-element': !0,
                      'medium-list-element-active': n,
                    });
                  return me.a.createElement(
                    'div',
                    { className: i, onClick: a },
                    me.a.createElement(Te.g, null),
                    me.a.createElement(
                      'div',
                      { className: 'medium-text-container' },
                      t.name
                    )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        kt =
          Object(ge.b)('store')(
            (Ye =
              Object(ge.c)(
                (Ye = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(t, [this].concat(i))).channels = [
                        0,
                        1,
                        2,
                      ].map(function (e) {
                        return {
                          inputRef: me.a.createRef(),
                          bufferRef: me.a.createRef(),
                          checkboxRef: me.a.createRef(),
                        };
                      })),
                      (e.nameInputRef = me.a.createRef()),
                      (e.refDefQuality = me.a.createRef()),
                      (e.refDefListCurrent = me.a.createRef()),
                      (e.refDefSenCurrent = me.a.createRef()),
                      (e.refDefRecCurrent = me.a.createRef()),
                      (e.setDataToForm = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.activeMedium,
                          a = t.mediums;
                        if (void 0 !== n) {
                          var i = a[n],
                            r = e.nameInputRef.current,
                            o = e.refDefQuality.current,
                            l = e.refDefListCurrent.current,
                            s = e.refDefSenCurrent.current,
                            c = e.refDefRecCurrent.current;
                          o &&
                            l &&
                            s &&
                            c &&
                            r &&
                            (o.setValue(i.defaultQuality),
                            l.setValue(i.defaultListeningCurrent),
                            s.setValue(i.defaultSendingCurrent),
                            c.setValue(i.defaultReceivingCurrent),
                            r.setValue(i.name));
                        }
                      }),
                      (e.saveData = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.activeMedium,
                          a = t.editMedium,
                          i = t.changeActiveMedium,
                          r = t.checkMediumNameUniqueness,
                          o = t.checkChannelNameUniqueness;
                        if (void 0 !== n) {
                          var l = e.nameInputRef.current,
                            s = e.refDefQuality.current,
                            c = e.refDefListCurrent.current,
                            u = e.refDefSenCurrent.current,
                            d = e.refDefRecCurrent.current;
                          if (s && c && u && d && l) {
                            if (l.validate()) {
                              var m = [],
                                p = !0;
                              if (
                                (e.channels.forEach(function (e, t) {
                                  var n = e.inputRef.current,
                                    a = e.checkboxRef.current,
                                    i = e.bufferRef.current;
                                  if (n && a && i && p) {
                                    (p = n.validate() || !1),
                                      o(n.getValue(), t) ||
                                        ((p = !1),
                                        n.setValidity(
                                          !0,
                                          "The name isn't unique."
                                        ));
                                    var r = a.getValue();
                                    m.push({
                                      name: n.getValue(),
                                      buffer: r ? 'infinity' : i.getValue(),
                                    });
                                  }
                                }),
                                !p)
                              )
                                return !1;
                              var f = {
                                name: l.getValue(),
                                defaultQuality: s.getValue(),
                                defaultListeningCurrent: c.getValue(),
                                defaultSendingCurrent: u.getValue(),
                                defaultReceivingCurrent: d.getValue(),
                                channels: m,
                              };
                              return r(f.name)
                                ? (a(f, n), i(void 0), !0)
                                : (l.setValidity(!0, "The name isn't unique."),
                                  !1);
                            }
                            return !1;
                          }
                        }
                        return !0;
                      }),
                      (e.changeMedium = function (t) {
                        (0,
                        e.props.store.newSimulationStore.changeActiveMedium)(t),
                          setTimeout(function () {
                            e.setDataToForm();
                          }, 100);
                      }),
                      (e.addMedium = function () {
                        (0, e.props.store.newSimulationStore.addMedium)(),
                          setTimeout(function () {
                            e.setDataToForm();
                          }, 100);
                      }),
                      (e.addChannel = function (t) {
                        var n =
                          e.props.store.newSimulationStore.addChannelToMedium;
                        e.channels.push({
                          inputRef: me.a.createRef(),
                          bufferRef: me.a.createRef(),
                          checkboxRef: me.a.createRef(),
                        }),
                          n(t);
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            t = this.props.store.newSimulationStore,
                            n = t.mediums,
                            a = t.activeMedium,
                            i = t.removeMedium,
                            r = t.removeChannelFromMedium;
                          return me.a.createElement(
                            'div',
                            { className: 'simulation-padding-container' },
                            me.a.createElement(
                              'div',
                              { className: 'simulation-flex-container' },
                              me.a.createElement(
                                'div',
                                { className: 'header-container' },
                                me.a.createElement(
                                  'div',
                                  { className: 'header-inside-container' },
                                  me.a.createElement('h2', null, Xe.mediums),
                                  me.a.createElement(ht, {
                                    type: 'small',
                                    placement: 'bottom',
                                    title: Xe.mediums,
                                    content: Xe.mediums_tooltip,
                                  })
                                ),
                                me.a.createElement(
                                  'div',
                                  { className: 'buttons-container' },
                                  me.a.createElement(
                                    'div',
                                    {
                                      onClick: this.addMedium,
                                      className:
                                        'round-button round-button-primary',
                                    },
                                    me.a.createElement(Te.a, null),
                                    me.a.createElement('p', null, Xe.add_medium)
                                  )
                                )
                              ),
                              me.a.createElement(
                                'div',
                                { className: 'section ' },
                                me.a.createElement(
                                  'div',
                                  { className: 'medium-list' },
                                  n.map(function (t, n) {
                                    return me.a.createElement(It, {
                                      key: '' + n,
                                      active: a === n,
                                      onPress: function () {
                                        return e.changeMedium(n);
                                      },
                                      medium: t,
                                    });
                                  })
                                )
                              )
                            ),
                            me.a.createElement(
                              'div',
                              {
                                className:
                                  'simulation-flex-container' +
                                  (void 0 === a
                                    ? ' simulation-flex-container-removed'
                                    : ''),
                              },
                              void 0 !== a &&
                                me.a.createElement(
                                  me.a.Fragment,
                                  null,
                                  me.a.createElement(
                                    'div',
                                    { className: 'header-container' },
                                    me.a.createElement(
                                      'h2',
                                      null,
                                      Xe.medium_details
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'buttons-container' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          onClick: function () {
                                            return i(a);
                                          },
                                          className:
                                            'round-button round-button-secondary round-button-remove',
                                        },
                                        me.a.createElement(Te.s, null)
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          onClick: this.saveData,
                                          className:
                                            'round-button round-button-primary',
                                        },
                                        me.a.createElement(Te.p, null),
                                        me.a.createElement('p', null, Xe.save)
                                      )
                                    )
                                  ),
                                  me.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    me.a.createElement('h3', null, Xe.primary),
                                    me.a.createElement(
                                      'div',
                                      { className: 'label-inside-container' },
                                      me.a.createElement(
                                        'label',
                                        null,
                                        Xe.medium_name
                                      ),
                                      me.a.createElement(ht, {
                                        type: 'small',
                                        placement: 'bottom',
                                        title: Xe.medium_name,
                                        content: Xe.medium_name_tooltip,
                                      })
                                    ),
                                    me.a.createElement(Ze, {
                                      ref: this.nameInputRef,
                                      white: !0,
                                      type: 'elementName',
                                    }),
                                    me.a.createElement(
                                      'div',
                                      {
                                        className:
                                          'label-inside-container label-inside-container-with-bottom',
                                      },
                                      me.a.createElement(
                                        'h3',
                                        null,
                                        Xe.constants
                                      ),
                                      me.a.createElement(ht, {
                                        type: 'small',
                                        placement: 'bottom',
                                        title: Xe.constants,
                                        content: Xe.medium_constants_tooltip,
                                      })
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'medium-constants-row' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          className: 'medium-constants-column',
                                        },
                                        me.a.createElement(
                                          'label',
                                          null,
                                          Xe.default_quality
                                        ),
                                        me.a.createElement(jt, {
                                          ref: this.refDefQuality,
                                        })
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          className: 'medium-constants-column',
                                        },
                                        me.a.createElement(
                                          'label',
                                          null,
                                          Xe.default_listening_current
                                        ),
                                        me.a.createElement(jt, {
                                          ref: this.refDefListCurrent,
                                        })
                                      )
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'medium-constants-row' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          className: 'medium-constants-column',
                                        },
                                        me.a.createElement(
                                          'label',
                                          null,
                                          Xe.default_sending_current
                                        ),
                                        me.a.createElement(jt, {
                                          ref: this.refDefSenCurrent,
                                        })
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          className: 'medium-constants-column',
                                        },
                                        me.a.createElement(
                                          'label',
                                          null,
                                          Xe.default_recieving_current
                                        ),
                                        me.a.createElement(jt, {
                                          ref: this.refDefRecCurrent,
                                        })
                                      )
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'header-container' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          className: 'header-inside-container',
                                        },
                                        me.a.createElement(
                                          'h3',
                                          null,
                                          Xe.channels
                                        ),
                                        me.a.createElement(ht, {
                                          type: 'small',
                                          placement: 'bottom',
                                          title: Xe.channels,
                                          content: Xe.channels_tooltip,
                                        })
                                      ),
                                      me.a.createElement(
                                        'div',
                                        { className: 'buttons-container' },
                                        n[a] &&
                                          n[a].channels.length < 3 &&
                                          me.a.createElement(
                                            'div',
                                            {
                                              onClick: function () {
                                                return e.addChannel(a);
                                              },
                                              className:
                                                'round-button round-button-primary',
                                            },
                                            me.a.createElement(Te.a, null),
                                            me.a.createElement(
                                              'p',
                                              null,
                                              Xe.add_channel
                                            )
                                          )
                                      )
                                    ),
                                    n[a] &&
                                      n[a].channels.map(function (t, n) {
                                        return me.a.createElement(
                                          'div',
                                          {
                                            key: 'channel' + n,
                                            className: 'section',
                                          },
                                          me.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'label-inside-container',
                                            },
                                            me.a.createElement(
                                              'label',
                                              null,
                                              Xe.channel_name
                                            ),
                                            me.a.createElement(ht, {
                                              type: 'small',
                                              placement: 'bottom',
                                              title: Xe.channel_name,
                                              content: Xe.channel_name_tooltip,
                                            })
                                          ),
                                          me.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'channel-name-container',
                                            },
                                            me.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'delete-input-conatiner',
                                              },
                                              me.a.createElement(Ze, {
                                                ref: e.channels[n].inputRef,
                                                initialValue: t.name,
                                                white: !0,
                                                type: 'elementName',
                                              })
                                            ),
                                            me.a.createElement(
                                              'div',
                                              {
                                                onClick: function () {
                                                  return r(a, n);
                                                },
                                                className:
                                                  'round-button round-button-secondary round-button-remove',
                                              },
                                              me.a.createElement(Te.s, null)
                                            )
                                          ),
                                          me.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'label-inside-container',
                                            },
                                            me.a.createElement(
                                              'label',
                                              null,
                                              Xe.buffer_name
                                            ),
                                            me.a.createElement(ht, {
                                              type: 'small',
                                              placement: 'bottom',
                                              title: Xe.buffer_name,
                                              content:
                                                Xe.channel_buffer_tooltip,
                                            })
                                          ),
                                          me.a.createElement(jt, {
                                            ref: e.channels[n].bufferRef,
                                            initialValue:
                                              'infinity' === t.buffer
                                                ? 1
                                                : t.buffer,
                                          }),
                                          me.a.createElement(Nt, {
                                            ref: e.channels[n].checkboxRef,
                                            placeholder: Xe.is_infinity,
                                            initialValue:
                                              'infinity' === t.buffer,
                                          }),
                                          me.a.createElement('div', {
                                            className: 'separator',
                                          })
                                        );
                                      })
                                  )
                                )
                            ),
                            0 === n.length &&
                              me.a.createElement(
                                'div',
                                { className: 'no-content-container' },
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_medium_added_header
                                ),
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_medium_added_description
                                )
                              )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Ye)
          ) || Ye,
        Tt =
          (n(307),
          (function (e) {
            Object(Ae.a)(n, e);
            var t = Object(ze.a)(n);
            function n() {
              return Object(ye.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(ke.a)(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t = this,
                      n =
                        null ===
                          (e = Re.find(function (e) {
                            return e.name === t.props.model.deviceType.icon;
                          })) || void 0 === e
                          ? void 0
                          : e.icon;
                    return de.createElement(
                      'div',
                      {
                        className: 'diagram-tray-item tray-item',
                        draggable: !0,
                        onDragStart: function (e) {
                          e.dataTransfer.setData(
                            'storm-diagram-node',
                            JSON.stringify(t.props.model)
                          );
                        },
                      },
                      n && de.createElement(n, null),
                      de.createElement(
                        'label',
                        null,
                        this.props.model.deviceType.name
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(de.Component)),
        Rt = n(15),
        Dt = n(256);
      function Pt() {
        var e = Object(Dt.a)([
          '\n\t\theight: 100%;\n\t\tbackground-size: 50px 50px;\n\t\tdisplay: flex;\n\t\t> * {\n\t\t\theight: 100%;\n\t\t\tmin-height: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t\n\t',
        ]);
        return (
          (Pt = function () {
            return e;
          }),
          e
        );
      }
      var xt,
        Vt = n(28).default.div(Pt()),
        Mt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  return de.createElement(
                    Vt,
                    {
                      background: this.props.background || '#f7f7f7',
                      color: this.props.color || 'rgba(255,255,255, 0.05)',
                    },
                    this.props.children
                  );
                },
              },
            ]),
            n
          );
        })(de.Component),
        At = n(60),
        zt = n(152),
        Lt = n(51),
        Ft = n(52),
        Ht = n.n(Ft),
        qt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n(e) {
            var a;
            return (
              Object(ye.a)(this, n),
              ((a = t.call(this, Object(At.a)({}, e))).channelName = void 0),
              (a.canLinkToPort = function (e) {
                return (
                  a.options.in !== e.getOptions().in &&
                  a.channelName === e.channelName
                );
              }),
              (a.channelName = e.channelName),
              e.in && (a.options.locked = !0),
              a
            );
          }
          return n;
        })(Ft.DefaultPortModel),
        Gt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n(e) {
            var a;
            return (
              Object(ye.a)(this, n),
              ((a = t.call(
                this,
                Object(At.a)(
                  Object(At.a)({}, e),
                  {},
                  { type: 'ts-custom-node' }
                )
              )).deviceType = void 0),
              (a.channels = void 0),
              (a.deviceId = void 0),
              (a.deviceType = e.deviceType),
              (a.channels = e.channels),
              (n.deviceCounter += 1),
              (a.deviceId = n.deviceCounter),
              a.channels &&
                a.channels.forEach(function (e, t) {
                  a.addPort(
                    new qt({
                      in: !0,
                      name: a.deviceId + '^' + e.name + '^In' + t,
                      channelName: e.name,
                    })
                  ),
                    a.addPort(
                      new qt({
                        in: !1,
                        name: a.deviceId + '^' + e.name + '^Out' + t,
                        channelName: e.name,
                      })
                    );
                }),
              a.serialize(),
              a
            );
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'serialize',
                value: function () {
                  return Object(At.a)(
                    Object(At.a)(
                      {},
                      Object(zt.a)(
                        Object(Lt.a)(n.prototype),
                        'serialize',
                        this
                      ).call(this)
                    ),
                    {},
                    {
                      deviceType: this.deviceType,
                      channels: this.channels,
                      deviceId: this.deviceId,
                    }
                  );
                },
              },
              {
                key: 'deserialize',
                value: function (e) {
                  Object(zt.a)(
                    Object(Lt.a)(n.prototype),
                    'deserialize',
                    this
                  ).call(this, e),
                    (this.deviceType = e.data.deviceType),
                    (this.channels = e.data.channels),
                    (this.deviceId = e.data.deviceId),
                    (n.deviceCounter += 1);
                },
              },
            ]),
            n
          );
        })(Ft.NodeModel);
      Gt.deviceCounter = 0;
      var Bt,
        Wt,
        Ut,
        Jt,
        Qt,
        Yt,
        Kt =
          Object(ge.b)('store')(
            (xt =
              Object(ge.c)(
                (xt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    return Object(ye.a)(this, n), t.apply(this, arguments);
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            t = this.props.store.newSimulationStore,
                            n = t.listOfAllChannels,
                            a = t.deviceTypes;
                          return de.createElement(
                            'div',
                            { className: 'diagram-body' },
                            de.createElement(
                              'div',
                              { className: 'diagram-content' },
                              de.createElement(
                                'div',
                                { className: 'diagram-tray' },
                                de.createElement(
                                  'div',
                                  { className: 'tray-header-description' },
                                  de.createElement(
                                    'div',
                                    { className: 'header-inside-container' },
                                    de.createElement('h2', null, Xe.topology),
                                    de.createElement(ht, {
                                      type: 'small',
                                      placement: 'bottom',
                                      title: Xe.topology,
                                      content: Xe.topology_tooltip,
                                    })
                                  ),
                                  de.createElement(
                                    'h3',
                                    null,
                                    Xe.available_devices
                                  ),
                                  de.createElement(
                                    'label',
                                    null,
                                    Xe.drag_and_drop
                                  )
                                ),
                                a.map(function (e, t) {
                                  return de.createElement(Tt, {
                                    key: 'TrayItemWidget-' + t,
                                    model: {
                                      deviceType: e,
                                      channels: n,
                                      deviceIndexInList: t,
                                    },
                                  });
                                })
                              ),
                              de.createElement(
                                'div',
                                {
                                  className: 'diagram-layer',
                                  onDrop: function (t) {
                                    var n = JSON.parse(
                                        t.dataTransfer.getData(
                                          'storm-diagram-node'
                                        )
                                      ),
                                      a = new Gt({
                                        deviceType: n.deviceType,
                                        channels: n.channels,
                                      }),
                                      i = e.props.app
                                        .getDiagramEngine()
                                        .getRelativeMousePoint(t);
                                    a.setPosition(i),
                                      e.props.app
                                        .getDiagramEngine()
                                        .getModel()
                                        .addNode(a),
                                      e.forceUpdate();
                                  },
                                  onDragOver: function (e) {
                                    e.preventDefault();
                                  },
                                },
                                de.createElement(
                                  Mt,
                                  null,
                                  de.createElement(Rt.CanvasWidget, {
                                    engine: this.props.app.getDiagramEngine(),
                                  })
                                )
                              )
                            )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(de.Component))
              ) || xt)
          ) || xt,
        Zt = n(31),
        Xt = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n(e) {
            var a;
            return (
              Object(ye.a)(this, n),
              ((a = t.call(this, e)).getPorts = function () {
                var e = a.props.node.getPorts(),
                  t = [],
                  n = [];
                return (
                  Object.keys(e).forEach(function (a) {
                    var i = e[a];
                    a.includes('In') ? t.push(i) : n.push(i);
                  }),
                  { InPorts: t, OutPorts: n }
                );
              }),
              (a.removeNode = function () {
                a.props.node.remove();
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props.node,
                    a = n.deviceType,
                    i = n.deviceId,
                    r = this.getPorts(),
                    o = r.InPorts,
                    l = r.OutPorts,
                    s = this.props.node.channels
                      ? this.props.node.channels.map(function (e) {
                          return e.name;
                        })
                      : [],
                    c =
                      null ===
                        (e = Re.find(function (e) {
                          return (
                            e.name ===
                            (null === a || void 0 === a ? void 0 : a.icon)
                          );
                        })) || void 0 === e
                        ? void 0
                        : e.icon;
                  return de.createElement(
                    'div',
                    { className: 'custom-node' },
                    de.createElement(
                      'div',
                      { className: 'node-header' },
                      de.createElement(
                        'div',
                        { className: 'node-header-inside' },
                        c && de.createElement(c, null),
                        de.createElement(
                          'div',
                          { className: 'node-header-text' },
                          de.createElement(
                            'label',
                            null,
                            Xe.device_instance,
                            ' #',
                            i
                          ),
                          de.createElement(
                            'label',
                            null,
                            null === a || void 0 === a ? void 0 : a.name
                          )
                        )
                      )
                    ),
                    de.createElement(
                      'div',
                      { className: 'node-ports-container' },
                      de.createElement(
                        'div',
                        { className: 'ports in-ports' },
                        o.map(function (e, n) {
                          return de.createElement(
                            Zt.PortWidget,
                            {
                              key: 'in-port-' + n,
                              engine: t.props.engine,
                              port: e,
                            },
                            de.createElement(
                              'div',
                              { className: 'node-port node-port-in' },
                              de.createElement('label', null, Xe.in)
                            )
                          );
                        })
                      ),
                      de.createElement(
                        'div',
                        { className: 'ports ports-names' },
                        s.map(function (e, t) {
                          return de.createElement(
                            'label',
                            { key: 'name-port-' + t },
                            e
                          );
                        })
                      ),
                      de.createElement(
                        'div',
                        { className: 'ports out-ports' },
                        l.map(function (e, n) {
                          return de.createElement(
                            Zt.PortWidget,
                            {
                              key: 'out-port-' + n,
                              engine: t.props.engine,
                              port: e,
                            },
                            de.createElement(
                              'div',
                              { className: 'node-port node-port-out' },
                              de.createElement('label', null, Xe.out)
                            )
                          );
                        })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(de.Component),
        $t = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.call(this, 'ts-custom-node');
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'generateModel',
                value: function (e) {
                  return new Gt(e);
                },
              },
              {
                key: 'generateReactWidget',
                value: function (e) {
                  return de.createElement(Xt, {
                    engine: this.engine,
                    node: e.model,
                  });
                },
              },
            ]),
            n
          );
        })(Rt.AbstractReactFactory),
        en = new (function e() {
          var t = this;
          Object(ye.a)(this, e),
            (this.engine = Ht()()),
            (this.model = void 0),
            (this.newModel = function () {
              (t.model = new Ft.DiagramModel()),
                (Gt.deviceCounter = 0),
                t.engine.setModel(t.model);
            }),
            (this.serializeDiagram = function () {
              t.model.getNodeLayers();
            }),
            (this.deserializeDiagram = function (e) {
              t.model.deserializeModel(JSON.parse(e), t.engine),
                t.engine.setModel(t.model);
            }),
            (this.prepareDiagramToAnalyse = function () {
              var e = t.model.getNodeLayers()[0],
                n = e.getModels(),
                a = e.getParent().getLayers()[0].getModels(),
                i = [];
              return (
                Object.keys(n).forEach(function (e) {
                  var t = n[e];
                  i.push({
                    deviceId: t.deviceId,
                    deviceType: t.deviceType,
                    connectedOutDevicesIds: [],
                  });
                }),
                Object.keys(a).forEach(function (e) {
                  var t = a[e],
                    n = t.getSourcePort().getOptions().name.split('^'),
                    r = t.getTargetPort().getOptions().name.split('^'),
                    o = i.find(function (e) {
                      return e.deviceId === parseInt(n[0]);
                    });
                  o &&
                    o.connectedOutDevicesIds.push({
                      deviceId: parseInt(r[0]),
                      channelName: r[1],
                    });
                }),
                i
              );
            }),
            (this.getActiveDiagram = function () {
              return t.model;
            }),
            (this.getDiagramEngine = function () {
              return t.engine;
            }),
            this.engine.getNodeFactories().registerFactory(new $t()),
            (Gt.deviceCounter = 0),
            (this.model = new Ft.DiagramModel()),
            this.engine.setModel(this.model);
        })(),
        tn =
          Object(ge.b)('store')(
            (Bt =
              Object(ge.c)(
                (Bt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).componentDidMount = function () {
                        e.props.defaultModel
                          ? e.setNewModel(e.props.defaultModel)
                          : en.newModel();
                      }),
                      (e.serialize = function () {
                        (0,
                        e.props.store.newSimulationStore
                          .changeTopologyElements)(
                          en.prepareDiagramToAnalyse()
                        );
                      }),
                      (e.setNewModel = function (e) {
                        en.deserializeDiagram(e.topologyDiagrams);
                      }),
                      (e.resetApp = function () {}),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          return me.a.createElement(
                            'div',
                            { className: 'simulation-padding-container' },
                            me.a.createElement(Kt, { app: en })
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Bt)
          ) || Bt,
        nn = (function (e) {
          Object(Ae.a)(n, e);
          var t = Object(ze.a)(n);
          function n() {
            return Object(ye.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(ke.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.version,
                    n = e.active,
                    a = e.onPress,
                    i = Ge({
                      'medium-list-element': !0,
                      'medium-list-element-active': n,
                    });
                  return me.a.createElement(
                    'div',
                    { className: i, onClick: a },
                    me.a.createElement(Te.d, null),
                    me.a.createElement(
                      'div',
                      { className: 'medium-text-container' },
                      t.name
                    )
                  );
                },
              },
            ]),
            n
          );
        })(me.a.Component),
        an = (n(531), n(14)),
        rn = n.n(an),
        on =
          Object(ge.b)('store')(
            (Wt =
              Object(ge.c)(
                (Wt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n(e) {
                    var a;
                    return (
                      Object(ye.a)(this, n),
                      ((a = t.call(this, e)).nameInputRef = me.a.createRef()),
                      (a.deviceInstanceSelectRef = me.a.createRef()),
                      (a.executionTimeInputRef = me.a.createRef()),
                      (a.processTypeSelectRef = me.a.createRef()),
                      (a.inChannelSelectRef = me.a.createRef()),
                      (a.outChannelSelectRef = me.a.createRef()),
                      (a.senderDeviceSelectRef = me.a.createRef()),
                      (a.outMessageSizeRef = me.a.createRef()),
                      (a.infinityCheckboxRef = me.a.createRef()),
                      (a.isOutProcessCheckboxRef = me.a.createRef()),
                      (a.isInProcessCheckboxRef = me.a.createRef()),
                      (a.validate = function (e) {
                        var t,
                          n,
                          i,
                          r,
                          o = (null === (t = a.props.store) || void 0 === t
                            ? void 0
                            : t.newSimulationStore
                          ).checkProcessNameUniqueness,
                          l = [
                            null === (n = a.nameInputRef.current) ||
                            void 0 === n
                              ? void 0
                              : n.validate(),
                          ];
                        if (
                          e &&
                          !o(
                            null === (i = a.nameInputRef.current) ||
                              void 0 === i
                              ? void 0
                              : i.getValue(),
                            e
                          )
                        )
                          return (
                            null === (r = a.nameInputRef.current) ||
                              void 0 === r ||
                              r.setValidity(!0, "The name isn't unique."),
                            !1
                          );
                        return (
                          -1 ===
                          l.findIndex(function (e) {
                            return !e;
                          })
                        );
                      }),
                      (a.getValue = function () {
                        var e, t, n, i, r, o, l, s, c, u, d, m;
                        return {
                          name:
                            (null === (e = a.nameInputRef.current) ||
                            void 0 === e
                              ? void 0
                              : e.getValue()) || '',
                          time:
                            (null === (t = a.executionTimeInputRef.current) ||
                            void 0 === t
                              ? void 0
                              : t.getValue()) || 1,
                          deviceId:
                            null === (n = a.deviceInstanceSelectRef.current) ||
                            void 0 === n ||
                            null === (i = n.getValue()) ||
                            void 0 === i
                              ? void 0
                              : i.value,
                          deviceToSendId:
                            null === (r = a.senderDeviceSelectRef.current) ||
                            void 0 === r ||
                            null === (o = r.getValue()) ||
                            void 0 === o
                              ? void 0
                              : o.value,
                          inChannel:
                            null === (l = a.inChannelSelectRef.current) ||
                            void 0 === l ||
                            null === (s = l.getValue()) ||
                            void 0 === s
                              ? void 0
                              : s.value,
                          outChannel:
                            null === (c = a.outChannelSelectRef.current) ||
                            void 0 === c ||
                            null === (u = c.getValue()) ||
                            void 0 === u
                              ? void 0
                              : u.value,
                          isInfinity:
                            null === (d = a.infinityCheckboxRef.current) ||
                            void 0 === d
                              ? void 0
                              : d.getValue(),
                          outMessageSize:
                            (null === (m = a.outMessageSizeRef.current) ||
                            void 0 === m
                              ? void 0
                              : m.getValue()) || 1,
                        };
                      }),
                      (a.setValue = function (e) {
                        var t, n, i, r;
                        null === (t = a.nameInputRef.current) ||
                          void 0 === t ||
                          t.setValue(e.name),
                          null === (n = a.executionTimeInputRef.current) ||
                            void 0 === n ||
                            n.setValue(e.time),
                          null === (i = a.deviceInstanceSelectRef.current) ||
                            void 0 === i ||
                            i.setValue(e.deviceId),
                          null === (r = a.infinityCheckboxRef.current) ||
                            void 0 === r ||
                            r.setValue(e.isInfinity || !1),
                          a.setState(
                            {
                              isInProcess: !!e.inChannel,
                              isOutProcess:
                                !!e.deviceToSendId && !!e.outChannel,
                            },
                            function () {
                              var t, n, i, r, o, l;
                              null === (t = a.isInProcessCheckboxRef.current) ||
                                void 0 === t ||
                                t.setValue(a.state.isInProcess),
                                null ===
                                  (n = a.isOutProcessCheckboxRef.current) ||
                                  void 0 === n ||
                                  n.setValue(a.state.isOutProcess),
                                null === (i = a.inChannelSelectRef.current) ||
                                  void 0 === i ||
                                  i.setValue(e.inChannel),
                                null ===
                                  (r = a.senderDeviceSelectRef.current) ||
                                  void 0 === r ||
                                  r.setValue(e.deviceToSendId),
                                null === (o = a.outChannelSelectRef.current) ||
                                  void 0 === o ||
                                  o.setValue(e.outChannel),
                                null === (l = a.outMessageSizeRef.current) ||
                                  void 0 === l ||
                                  l.setValue(e.outMessageSize);
                            }
                          );
                      }),
                      (a.onChangeInChannelVisibility = function (e) {
                        a.setState({ isInProcess: e });
                      }),
                      (a.onChangeOutChannelVisibility = function (e) {
                        a.setState({ isOutProcess: e });
                      }),
                      (a.getChannelsList = function () {
                        var e = a.props.store.newSimulationStore.mediums,
                          t = [];
                        return (
                          e.forEach(function (e) {
                            e.channels.forEach(function (e) {
                              return t.push(e.name);
                            });
                          }),
                          t.map(function (e) {
                            return { label: e, value: e };
                          })
                        );
                      }),
                      (a.onChangeChannel = function (e) {
                        var t,
                          n =
                            null ===
                              (t = a.props.store.newSimulationStore.topologyElements.find(
                                function (e) {
                                  return e.deviceId === a.state.deviceId;
                                }
                              )) || void 0 === t
                              ? void 0
                              : t.connectedOutDevicesIds
                                  .filter(function (t) {
                                    return t.channelName === e;
                                  })
                                  .map(function (e) {
                                    return e.deviceId;
                                  });
                        a.setState({
                          sendDevicesList: rn.a.uniq(n).map(function (e) {
                            return {
                              label: 'Device instance #' + e,
                              value: e.toString(),
                            };
                          }),
                        });
                      }),
                      (a.state = {
                        isOutProcess: !1,
                        isInProcess: !1,
                        deviceId: void 0,
                        channelsList: [],
                        sendDevicesList: [],
                      }),
                      a
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this.props,
                            t = e.process,
                            n = e.removeProcess,
                            a = e.store,
                            i = this.state,
                            r = i.isInProcess,
                            o = i.isOutProcess,
                            l = a.newSimulationStore.topologyElements,
                            s = this.getChannelsList(),
                            c = l.map(function (e) {
                              return {
                                label: 'Device instance #' + e.deviceId,
                                value: e.deviceId,
                              };
                            });
                          return me.a.createElement(
                            'div',
                            { className: 'section' },
                            me.a.createElement(
                              'div',
                              { className: 'label-inside-container' },
                              me.a.createElement(
                                'label',
                                null,
                                Xe.process_name
                              ),
                              me.a.createElement(ht, {
                                type: 'small',
                                placement: 'bottom',
                                title: Xe.process_name,
                                content: Xe.process_name_tooltip,
                              })
                            ),
                            me.a.createElement(
                              'div',
                              { className: 'channel-name-container' },
                              me.a.createElement(
                                'div',
                                { className: 'delete-input-conatiner' },
                                me.a.createElement(Ze, {
                                  ref: this.nameInputRef,
                                  initialValue: t.name,
                                  white: !0,
                                  type: 'elementName',
                                })
                              ),
                              me.a.createElement(
                                'div',
                                {
                                  onClick: n,
                                  className:
                                    'round-button round-button-secondary round-button-remove',
                                },
                                me.a.createElement(Te.s, null)
                              )
                            ),
                            me.a.createElement(
                              'div',
                              {
                                className:
                                  'medium-constants-row process-info-row',
                              },
                              me.a.createElement(
                                'div',
                                { className: 'medium-constants-column' },
                                me.a.createElement(
                                  'div',
                                  { className: 'label-inside-container' },
                                  me.a.createElement(
                                    'label',
                                    null,
                                    Xe.device_instance
                                  ),
                                  me.a.createElement(ht, {
                                    type: 'small',
                                    placement: 'bottom',
                                    title: Xe.device_instance,
                                    content: Xe.process_device_instance_tooltip,
                                  })
                                ),
                                me.a.createElement(wt, {
                                  ref: this.deviceInstanceSelectRef,
                                  items: c,
                                })
                              ),
                              me.a.createElement(
                                'div',
                                { className: 'medium-constants-column' },
                                me.a.createElement(
                                  'div',
                                  { className: 'label-inside-container' },
                                  me.a.createElement(
                                    'label',
                                    null,
                                    Xe.execution_time
                                  ),
                                  me.a.createElement(ht, {
                                    type: 'small',
                                    placement: 'bottom',
                                    title: Xe.execution_time,
                                    content: Xe.process_execution_time_tooltip,
                                  })
                                ),
                                me.a.createElement(jt, {
                                  ref: this.executionTimeInputRef,
                                })
                              )
                            ),
                            me.a.createElement(
                              'div',
                              { className: 'label-inside-container' },
                              me.a.createElement(Nt, {
                                ref: this.infinityCheckboxRef,
                                placeholder: Xe.infinity_process,
                              }),
                              me.a.createElement(ht, {
                                type: 'small',
                                placement: 'bottom',
                                title: Xe.is_infinity,
                                content: Xe.process_infinity_tooltip,
                              })
                            ),
                            me.a.createElement(
                              'div',
                              { className: 'label-inside-container' },
                              me.a.createElement(Nt, {
                                ref: this.isInProcessCheckboxRef,
                                placeholder: Xe.process_with_recieve,
                                onChange: this.onChangeInChannelVisibility,
                              }),
                              me.a.createElement(ht, {
                                type: 'small',
                                placement: 'bottom',
                                title: Xe.process_with_recieve,
                                content: Xe.process_recieve_tooltip,
                              })
                            ),
                            r &&
                              me.a.createElement(
                                me.a.Fragment,
                                null,
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.recieve_from_channel
                                ),
                                me.a.createElement(wt, {
                                  items: s,
                                  ref: this.inChannelSelectRef,
                                  onChange: this.onChangeChannel,
                                })
                              ),
                            me.a.createElement(
                              'div',
                              { className: 'label-inside-container' },
                              me.a.createElement(Nt, {
                                ref: this.isOutProcessCheckboxRef,
                                placeholder: Xe.process_with_send,
                                onChange: this.onChangeOutChannelVisibility,
                              }),
                              me.a.createElement(ht, {
                                type: 'small',
                                placement: 'bottom',
                                title: Xe.process_with_send,
                                content: Xe.process_send_tooltip,
                              })
                            ),
                            o &&
                              me.a.createElement(
                                me.a.Fragment,
                                null,
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.send_channel
                                ),
                                me.a.createElement(wt, {
                                  items: s,
                                  ref: this.outChannelSelectRef,
                                  onChange: this.onChangeChannel,
                                }),
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.device_to_sent
                                ),
                                me.a.createElement(wt, {
                                  items: c,
                                  ref: this.senderDeviceSelectRef,
                                }),
                                me.a.createElement(
                                  'label',
                                  null,
                                  Xe.size_to_sent
                                ),
                                me.a.createElement(jt, {
                                  ref: this.outMessageSizeRef,
                                })
                              ),
                            me.a.createElement('div', {
                              className: 'separator',
                            })
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Wt)
          ) || Wt,
        ln =
          Object(ge.b)('store')(
            (Ut =
              Object(ge.c)(
                (Ut = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).nameInputRef = me.a.createRef()),
                      (e.processesRefs = []),
                      (e.setDataToForm = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.activeVersion,
                          a = t.versions;
                        if (void 0 !== n) {
                          var i,
                            r = a[n];
                          null === (i = e.nameInputRef.current) ||
                            void 0 === i ||
                            i.setValue(r.name),
                            r.processes.forEach(function (t, n) {
                              var a;
                              null === (a = e.processesRefs[n].current) ||
                                void 0 === a ||
                                a.setValue(t);
                            });
                        }
                      }),
                      (e.saveData = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.activeVersion,
                          a = t.editVersion,
                          i = t.changeActiveVersion,
                          r = t.checkVersionNameUniqueness;
                        if (void 0 !== n) {
                          var o;
                          if (
                            -1 ===
                            [
                              null === (o = e.nameInputRef.current) ||
                              void 0 === o
                                ? void 0
                                : o.validate(),
                            ]
                              .concat(
                                Object(Ie.a)(
                                  e.processesRefs.map(function (e, t) {
                                    var n;
                                    return null === (n = e.current) ||
                                      void 0 === n
                                      ? void 0
                                      : n.validate(t);
                                  })
                                )
                              )
                              .findIndex(function (e) {
                                return !e;
                              })
                          ) {
                            var l,
                              s = [];
                            e.processesRefs.forEach(function (e) {
                              e.current && s.push(e.current.getValue());
                            });
                            var c,
                              u = {
                                name:
                                  (null === (l = e.nameInputRef.current) ||
                                  void 0 === l
                                    ? void 0
                                    : l.getValue()) || '',
                                processes: s,
                              };
                            return r(u.name)
                              ? (a(u, n), i(void 0), !0)
                              : (null === (c = e.nameInputRef.current) ||
                                  void 0 === c ||
                                  c.setValidity(!0, Xe.unique_name),
                                !1);
                          }
                          return !1;
                        }
                        return !0;
                      }),
                      (e.changeVersion = function (t) {
                        var n = e.props.store.newSimulationStore,
                          a = n.versions,
                          i = n.changeActiveVersion;
                        (e.processesRefs = []),
                          (e.processesRefs = a[t].processes.map(function (e) {
                            return me.a.createRef();
                          })),
                          i(t),
                          setTimeout(function () {
                            e.setDataToForm();
                          }, 100);
                      }),
                      (e.addVersion = function () {
                        var t = e.props.store.newSimulationStore.addVersion,
                          n = e.props.store.newSimulationStore.versions;
                        t(),
                          setTimeout(function () {
                            (e.processesRefs = n[n.length - 1].processes.map(
                              function (e) {
                                return me.a.createRef();
                              }
                            )),
                              e.setDataToForm();
                          }, 100);
                      }),
                      (e.addProcessToVersion = function () {
                        var t = e.props.store.newSimulationStore,
                          n = t.addProcessToVersion,
                          a = t.activeVersion;
                        void 0 !== a &&
                          (e.processesRefs.push(me.a.createRef()), n(a));
                      }),
                      (e.removeProcessFromVersion = function (t) {
                        var n = e.props.store.newSimulationStore,
                          a = n.activeVersion,
                          i = n.removeProcessFromVersion;
                        void 0 !== a &&
                          (i(a, t),
                          setTimeout(function () {
                            e.processesRefs.splice(t, 1);
                          }, 100));
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            t = this.props.store.newSimulationStore,
                            n = t.versions,
                            a = t.activeVersion,
                            i = t.removeVersion;
                          return me.a.createElement(
                            'div',
                            { className: 'simulation-padding-container' },
                            me.a.createElement(
                              'div',
                              { className: 'simulation-flex-container' },
                              me.a.createElement(
                                'div',
                                { className: 'header-container' },
                                me.a.createElement(
                                  'div',
                                  { className: 'header-inside-container' },
                                  me.a.createElement('h2', null, Xe.versions),
                                  me.a.createElement(ht, {
                                    type: 'small',
                                    placement: 'bottom',
                                    title: Xe.versions_and_proccesses,
                                    content: Xe.versions_and_proccesses_tooltip,
                                  })
                                ),
                                me.a.createElement(
                                  'div',
                                  { className: 'buttons-container' },
                                  me.a.createElement(
                                    'div',
                                    {
                                      onClick: this.addVersion,
                                      className:
                                        'round-button round-button-primary',
                                    },
                                    me.a.createElement(Te.a, null),
                                    me.a.createElement(
                                      'p',
                                      null,
                                      Xe.add_version
                                    )
                                  )
                                )
                              ),
                              me.a.createElement(
                                'div',
                                { className: 'section ' },
                                me.a.createElement(
                                  'div',
                                  { className: 'medium-list' },
                                  n.map(function (t, n) {
                                    return me.a.createElement(nn, {
                                      key: '' + n,
                                      active: a === n,
                                      onPress: function () {
                                        return e.changeVersion(n);
                                      },
                                      version: t,
                                    });
                                  })
                                )
                              )
                            ),
                            me.a.createElement(
                              'div',
                              {
                                className:
                                  'simulation-flex-container' +
                                  (void 0 === a
                                    ? ' simulation-flex-container-removed'
                                    : ''),
                              },
                              void 0 !== a &&
                                me.a.createElement(
                                  me.a.Fragment,
                                  null,
                                  me.a.createElement(
                                    'div',
                                    { className: 'header-container' },
                                    me.a.createElement(
                                      'h2',
                                      null,
                                      Xe.version_details
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'buttons-container' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          onClick: function () {
                                            return i(a);
                                          },
                                          className:
                                            'round-button round-button-secondary round-button-remove',
                                        },
                                        me.a.createElement(Te.s, null)
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          onClick: this.saveData,
                                          className:
                                            'round-button round-button-primary',
                                        },
                                        me.a.createElement(Te.p, null),
                                        me.a.createElement('p', null, Xe.save)
                                      )
                                    )
                                  ),
                                  me.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    me.a.createElement(
                                      'div',
                                      { className: 'label-inside-container' },
                                      me.a.createElement(
                                        'label',
                                        null,
                                        Xe.version_name
                                      ),
                                      me.a.createElement(ht, {
                                        type: 'small',
                                        placement: 'bottom',
                                        title: Xe.version_name,
                                        content: Xe.version_name_tooltip,
                                      })
                                    ),
                                    me.a.createElement(Ze, {
                                      ref: this.nameInputRef,
                                      white: !0,
                                      type: 'elementName',
                                    }),
                                    me.a.createElement(
                                      'div',
                                      { className: 'header-container' },
                                      me.a.createElement(
                                        'h3',
                                        null,
                                        Xe.processes
                                      ),
                                      me.a.createElement(
                                        'div',
                                        { className: 'buttons-container' },
                                        me.a.createElement(
                                          'div',
                                          {
                                            onClick: this.addProcessToVersion,
                                            className:
                                              'round-button round-button-primary',
                                          },
                                          me.a.createElement(Te.a, null),
                                          me.a.createElement(
                                            'p',
                                            null,
                                            Xe.add_process
                                          )
                                        )
                                      )
                                    ),
                                    n[a] &&
                                      n[a].processes.map(function (t, n) {
                                        return me.a.createElement(on, {
                                          key: 'channel' + n,
                                          ref: e.processesRefs[n],
                                          process: t,
                                          removeProcess: function () {
                                            return e.removeProcessFromVersion(
                                              n
                                            );
                                          },
                                        });
                                      })
                                  )
                                )
                            ),
                            0 === n.length &&
                              me.a.createElement(
                                'div',
                                { className: 'no-content-container' },
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_version_added_header
                                ),
                                me.a.createElement(
                                  'p',
                                  null,
                                  Xe.no_version_added_description
                                )
                              )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Ut)
          ) || Ut,
        sn =
          Object(ge.b)('store')(
            (Jt =
              Object(ge.c)(
                (Jt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(t, [this].concat(i))).state = {
                        simulationStarted: !1,
                        simulationCompleted: !1,
                        simulationError: !1,
                      }),
                      (e.startSimulation = function () {
                        var t = e.props.store.newSimulationStore.getAllModels();
                        e.setState(
                          { simulationStarted: !0, simulationError: !1 },
                          Object(we.a)(
                            Oe.a.mark(function n() {
                              var a, i, r;
                              return Oe.a.wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (
                                          (n.prev = 0),
                                          (n.next = 3),
                                          fetch('/api/simulations/', {
                                            method: 'POST',
                                            headers: {
                                              Accept: 'application/json',
                                              'Content-Type':
                                                'application/json',
                                              Authorization:
                                                'Bearer ' +
                                                localStorage.getItem('token'),
                                            },
                                            body: JSON.stringify({
                                              parsed: JSON.stringify(t),
                                            }),
                                          })
                                        );
                                      case 3:
                                        if (401 !== (a = n.sent).status) {
                                          n.next = 8;
                                          break;
                                        }
                                        return (
                                          null === (i = e.props.store) ||
                                            void 0 === i ||
                                            i.userStore.logout(),
                                          setTimeout(function () {
                                            window.location.reload();
                                          }, 100),
                                          n.abrupt('return')
                                        );
                                      case 8:
                                        return (n.next = 10), a.json();
                                      case 10:
                                        (r = n.sent).success
                                          ? (e.setState({
                                              simulationCompleted: !0,
                                            }),
                                            e.props.history.push(
                                              '/details/' + r.simulationId
                                            ))
                                          : e.setState({ simulationError: !0 }),
                                          (n.next = 17);
                                        break;
                                      case 14:
                                        (n.prev = 14),
                                          (n.t0 = n.catch(0)),
                                          e.setState({ simulationError: !0 });
                                      case 17:
                                      case 'end':
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[0, 14]]
                              );
                            })
                          )
                        );
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = Ge({
                            'start-button': !0,
                            'start-button-hide': this.state.simulationStarted,
                          });
                          return me.a.createElement(
                            'div',
                            { className: 'simulation-padding-container' },
                            me.a.createElement(
                              'div',
                              { className: 'simulation-flex-container' },
                              me.a.createElement(
                                'div',
                                { className: 'header-container' },
                                me.a.createElement('h2', null, 'Start'),
                                me.a.createElement('div', {
                                  className: 'buttons-container',
                                })
                              )
                            ),
                            this.state.simulationError
                              ? me.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'no-content-container simulation-error-container',
                                  },
                                  me.a.createElement(Te.r, null),
                                  me.a.createElement(
                                    'p',
                                    null,
                                    Xe.something_error
                                  ),
                                  me.a.createElement(
                                    'p',
                                    { onClick: this.startSimulation },
                                    Xe.try_again
                                  )
                                )
                              : me.a.createElement(
                                  'div',
                                  {
                                    className: 'no-content-container',
                                    onClick: this.startSimulation,
                                  },
                                  this.state.simulationStarted
                                    ? me.a.createElement(st.a, {
                                        type: 'Circles',
                                        color: '#264766',
                                        height: 60,
                                        width: 60,
                                      })
                                    : me.a.createElement(
                                        'div',
                                        { className: e },
                                        me.a.createElement(Te.m, null)
                                      ),
                                  this.state.simulationStarted
                                    ? me.a.createElement(
                                        me.a.Fragment,
                                        null,
                                        me.a.createElement(
                                          'p',
                                          null,
                                          Xe.starting
                                        ),
                                        me.a.createElement('p', null)
                                      )
                                    : me.a.createElement(
                                        me.a.Fragment,
                                        null,
                                        me.a.createElement(
                                          'p',
                                          null,
                                          Xe.start_simulation
                                        ),
                                        me.a.createElement(
                                          'p',
                                          null,
                                          Xe.start_simulation_description
                                        )
                                      )
                                )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Jt)
          ) || Jt,
        cn = Object(be.g)(sn),
        un =
          (n(532),
          function (e) {
            return me.a.createElement(
              'div',
              { className: 'modal-container' },
              me.a.createElement(
                'div',
                { className: 'modal-content' },
                me.a.createElement(
                  'div',
                  { className: 'modal-content-header' },
                  me.a.createElement('h2', null, e.header)
                ),
                me.a.createElement(
                  'div',
                  { className: 'modal-content-inside' },
                  me.a.createElement('p', null, e.text),
                  me.a.createElement(
                    'div',
                    { className: 'modal-button-container' },
                    me.a.createElement(
                      'div',
                      {
                        className: 'button modal-button',
                        onClick: e.onPressLeft,
                      },
                      e.leftButtonLabel
                    ),
                    e.rightButtonLabel &&
                      me.a.createElement(
                        'div',
                        {
                          className: 'button modal-button',
                          onClick: e.onPressRight,
                        },
                        e.rightButtonLabel
                      )
                  )
                )
              )
            );
          }),
        dn =
          (n(533),
          [
            {
              title: 'Simple connection',
              description:
                'Simple simulation to show mechanics of qopml web tool.',
              deviceTypes:
                '[{"icon":"IoIosDesktop","name":"PC1","cpu":"Pentium Dual-Core T4200 2GHz","os":"Debian 8 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},{"icon":"IoIosLaptop","name":"Notebook","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"}]',
              mediums:
                '[{"name":"Medium","defaultQuality":1,"defaultListeningCurrent":1,"defaultSendingCurrent":1,"defaultReceivingCurrent":1,"channels":[{"name":"Channel","buffer":1024}]}]',
              topology:
                '[{"deviceId":1,"deviceType":{"icon":"IoIosDesktop","name":"PC1","cpu":"Pentium Dual-Core T4200 2GHz","os":"Debian 8 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[{"deviceId":2,"channelName":"Channel"}]},{"deviceId":2,"deviceType":{"icon":"IoIosLaptop","name":"Notebook","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[]}]',
              topologyDiagrams:
                '{"id":"11f7aacc-0be8-4225-a433-93bd9ebde1a9","offsetX":0,"offsetY":0,"zoom":100,"gridSize":0,"layers":[{"id":"b48b2320-a7e3-4c7d-830f-c0a1d7f50682","type":"diagram-links","isSvg":true,"transformed":true,"models":{"7152b2ba-a0ea-4b4c-9d99-4efd9169720e":{"id":"7152b2ba-a0ea-4b4c-9d99-4efd9169720e","type":"default","selected":true,"source":"187b2909-5cbb-450a-88f2-5da0c01ac41c","sourcePort":"2d6b0a81-73a0-4923-8439-ecf9d7f5b542","target":"7985ef85-d1e0-49e1-9867-f54605655972","targetPort":"9c7b3220-545c-4d8c-a9a7-4a968db5c74e","points":[{"id":"2735bd23-8274-41ff-9780-eee2ab0f2547","type":"point","x":365.99432373046875,"y":265.00000286102295},{"id":"897b6596-d9f0-4660-9acf-7d71e0f17975","type":"point","x":666.9885864257812,"y":290.00000286102295}],"labels":[],"width":3,"color":"gray","curvyness":50,"selectedColor":"rgb(0,192,255)"}}},{"id":"69d39bc4-ea97-41c9-8f21-8b8599d4ae48","type":"diagram-nodes","isSvg":false,"transformed":true,"models":{"187b2909-5cbb-450a-88f2-5da0c01ac41c":{"id":"187b2909-5cbb-450a-88f2-5da0c01ac41c","type":"ts-custom-node","x":206,"y":195.00000381469727,"ports":[{"id":"c97fe917-6290-47b4-a616-3ca87f26e4b3","locked":true,"type":"default","x":205.99429321289062,"y":250.00000381469727,"name":"1^Channel^In0","alignment":"left","parentNode":"187b2909-5cbb-450a-88f2-5da0c01ac41c","links":[],"in":true,"label":"1^Channel^In0"},{"id":"2d6b0a81-73a0-4923-8439-ecf9d7f5b542","type":"default","x":345.99432373046875,"y":250.00000381469727,"name":"1^Channel^Out0","alignment":"right","parentNode":"187b2909-5cbb-450a-88f2-5da0c01ac41c","links":["7152b2ba-a0ea-4b4c-9d99-4efd9169720e"],"in":false,"label":"1^Channel^Out0"}],"deviceType":{"icon":"IoIosDesktop","name":"PC1","cpu":"Pentium Dual-Core T4200 2GHz","os":"Debian 8 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":1024}],"deviceId":1},"7985ef85-d1e0-49e1-9867-f54605655972":{"id":"7985ef85-d1e0-49e1-9867-f54605655972","type":"ts-custom-node","x":647,"y":220.00000381469727,"ports":[{"id":"9c7b3220-545c-4d8c-a9a7-4a968db5c74e","locked":true,"type":"default","x":646.9885864257812,"y":275.00000381469727,"name":"2^Channel^In0","alignment":"left","parentNode":"7985ef85-d1e0-49e1-9867-f54605655972","links":["7152b2ba-a0ea-4b4c-9d99-4efd9169720e"],"in":true,"label":"2^Channel^In0"},{"id":"7ed2d721-b209-43ae-8ca5-da0bfbbbdce9","type":"default","x":786.9886474609375,"y":275.00000381469727,"name":"2^Channel^Out0","alignment":"right","parentNode":"7985ef85-d1e0-49e1-9867-f54605655972","links":[],"in":false,"label":"2^Channel^Out0"}],"deviceType":{"icon":"IoIosLaptop","name":"Notebook","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":1024}],"deviceId":2}}}]}',
              versions:
                '[{"name":"Test","processes":[{"name":"send_data","time":10,"deviceId":1,"deviceToSendId":2,"outChannel":"Channel","isInfinity":false,"outMessageSize":1024}]}]',
            },
            {
              title: 'Proxy server',
              description:
                'The simulation shows sending and recieving data between devices.',
              deviceTypes:
                '[{"icon":"IoIosDesktop","name":"Client","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},{"icon":"IoIosCube","name":"Server","cpu":"12 x Intel Core i7-3930K 3.20GHz","os":"Debian 7.1 64-bit","libraries":"N/A","schedulingAlgorithm":"rr"}]',
              mediums:
                '[{"name":"Channel","defaultQuality":0.8,"defaultListeningCurrent":1,"defaultSendingCurrent":1,"defaultReceivingCurrent":1,"channels":[{"name":"Channel","buffer":"infinity"}]}]',
              topology:
                '[{"deviceId":1,"deviceType":{"icon":"IoIosDesktop","name":"Client","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[{"deviceId":2,"channelName":"Channel"}]},{"deviceId":2,"deviceType":{"icon":"IoIosCube","name":"Server","cpu":"12 x Intel Core i7-3930K 3.20GHz","os":"Debian 7.1 64-bit","libraries":"N/A","schedulingAlgorithm":"rr"},"connectedOutDevicesIds":[{"deviceId":3,"channelName":"Channel"}]},{"deviceId":3,"deviceType":{"icon":"IoIosDesktop","name":"Client","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[]}]',
              topologyDiagrams:
                '{"id":"7e231183-9785-4589-bbc8-0238acd999a8","offsetX":0,"offsetY":0,"zoom":100,"gridSize":0,"layers":[{"id":"3a73cacc-5e33-47ca-9d37-e7aaa8ad5e8f","type":"diagram-links","isSvg":true,"transformed":true,"models":{"d32b3e55-3833-4284-b6b2-1b13235041f7":{"id":"d32b3e55-3833-4284-b6b2-1b13235041f7","type":"default","selected":false,"source":"0466f63d-cc12-4150-b5ce-1f5ba316c6f3","sourcePort":"0ce04e9a-be6e-4625-9790-ae3f10598308","target":"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119","targetPort":"8c7c09f7-4580-4a3d-9d96-a46525d49eb4","points":[{"id":"4f56dc9c-10ee-483f-b9bd-b589687578f4","type":"point","x":259.991455078125,"y":180.99145793914795},{"id":"42dc07e8-35e5-4fbe-9597-eaf65f5494f7","type":"point","x":425.99713134765625,"y":319.9886198043823}],"labels":[],"width":3,"color":"gray","curvyness":50,"selectedColor":"rgb(0,192,255)"},"072448c0-5a70-4a5f-ba51-e48c1736c3b6":{"id":"072448c0-5a70-4a5f-ba51-e48c1736c3b6","type":"default","selected":false,"source":"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119","sourcePort":"1af24340-9f2d-49b6-926b-9134298ded76","target":"c19889f1-afe5-4dd9-9ff5-59522567b35a","targetPort":"dde85de9-b75d-4813-bd70-7cbef6ab2bac","points":[{"id":"64b43d34-8fd1-481a-bc89-7f0529a1502b","type":"point","x":565.9970703125,"y":319.9886198043823},{"id":"73f9bb8f-9de5-4329-ba6f-b5e1e6821439","type":"point","x":723.9943237304688,"y":440.98865032196045}],"labels":[],"width":3,"color":"gray","curvyness":50,"selectedColor":"rgb(0,192,255)"}}},{"id":"00d04583-a7e2-4165-9fe4-ab2348018b25","type":"diagram-nodes","isSvg":false,"transformed":true,"models":{"0466f63d-cc12-4150-b5ce-1f5ba316c6f3":{"id":"0466f63d-cc12-4150-b5ce-1f5ba316c6f3","type":"ts-custom-node","selected":false,"x":100,"y":111.00000381469727,"ports":[{"id":"a158f6f9-a913-4ca6-a54f-16bc3153ea21","locked":true,"type":"default","x":99.991455078125,"y":165.99145889282227,"name":"1^Channel^In0","alignment":"left","parentNode":"0466f63d-cc12-4150-b5ce-1f5ba316c6f3","links":[],"in":true,"label":"1^Channel^In0"},{"id":"0ce04e9a-be6e-4625-9790-ae3f10598308","type":"default","x":239.991455078125,"y":165.99145889282227,"name":"1^Channel^Out0","alignment":"right","parentNode":"0466f63d-cc12-4150-b5ce-1f5ba316c6f3","links":["d32b3e55-3833-4284-b6b2-1b13235041f7"],"in":false,"label":"1^Channel^Out0"}],"deviceType":{"icon":"IoIosDesktop","name":"Client","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":"infinity"}],"deviceId":1},"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119":{"id":"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119","type":"ts-custom-node","selected":false,"x":406,"y":250.00000381469727,"ports":[{"id":"8c7c09f7-4580-4a3d-9d96-a46525d49eb4","locked":true,"type":"default","x":405.99713134765625,"y":304.98862075805664,"name":"2^Channel^In0","alignment":"left","parentNode":"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119","links":["d32b3e55-3833-4284-b6b2-1b13235041f7"],"in":true,"label":"2^Channel^In0"},{"id":"1af24340-9f2d-49b6-926b-9134298ded76","type":"default","x":545.9970703125,"y":304.98862075805664,"name":"2^Channel^Out0","alignment":"right","parentNode":"6a6c77dc-d04a-4c98-82f3-7b05ea2ea119","links":["072448c0-5a70-4a5f-ba51-e48c1736c3b6"],"in":false,"label":"2^Channel^Out0"}],"deviceType":{"icon":"IoIosCube","name":"Server","cpu":"12 x Intel Core i7-3930K 3.20GHz","os":"Debian 7.1 64-bit","libraries":"N/A","schedulingAlgorithm":"rr"},"channels":[{"name":"Channel","buffer":"infinity"}],"deviceId":2},"c19889f1-afe5-4dd9-9ff5-59522567b35a":{"id":"c19889f1-afe5-4dd9-9ff5-59522567b35a","type":"ts-custom-node","selected":false,"x":704,"y":371.00000381469727,"ports":[{"id":"dde85de9-b75d-4813-bd70-7cbef6ab2bac","locked":true,"type":"default","x":703.9943237304688,"y":425.98865127563477,"name":"3^Channel^In0","alignment":"left","parentNode":"c19889f1-afe5-4dd9-9ff5-59522567b35a","links":["072448c0-5a70-4a5f-ba51-e48c1736c3b6"],"in":true,"label":"3^Channel^In0"},{"id":"acbc0e37-fca6-45b6-aeac-9135edef8c4f","type":"default","x":843.9942626953125,"y":425.98865127563477,"name":"3^Channel^Out0","alignment":"right","parentNode":"c19889f1-afe5-4dd9-9ff5-59522567b35a","links":[],"in":false,"label":"3^Channel^Out0"}],"deviceType":{"icon":"IoIosDesktop","name":"Client","cpu":"Pentium Dual-Core T4200 2GHz","os":"Windows 10 Pro 64-bit","libraries":"N/A","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":"infinity"}],"deviceId":3}}}]}',
              versions:
                '[{"name":"Version1","processes":[{"name":"send_data_to_server","time":5,"deviceId":1,"deviceToSendId":2,"outChannel":"Channel","isInfinity":false,"outMessageSize":2048},{"name":"recieve_data_from_client","time":1,"deviceId":2,"inChannel":"Channel","isInfinity":false,"outMessageSize":1},{"name":"send_data_to_client","time":1,"deviceId":2,"deviceToSendId":3,"outChannel":"Channel","isInfinity":false,"outMessageSize":2048},{"name":"recieve_data_from_server","time":1,"deviceId":3,"inChannel":"Channel","isInfinity":false,"outMessageSize":1}]}]',
            },
            {
              title: 'Encryption',
              description: 'The simulation shows simple encryption processes.',
              deviceTypes:
                '[{"icon":"IoIosDesktop","name":"Device","cpu":"16-bit 8MHz TI MSP430","os":"Debian 8 64-bit","libraries":"openssl 1.0.1c","schedulingAlgorithm":"fifo"}]',
              mediums:
                '[{"name":"Medium","defaultQuality":0.9,"defaultListeningCurrent":1,"defaultSendingCurrent":1,"defaultReceivingCurrent":1,"channels":[{"name":"Channel","buffer":1024}]}]',
              topology:
                '[{"deviceId":1,"deviceType":{"icon":"IoIosDesktop","name":"Device","cpu":"16-bit 8MHz TI MSP430","os":"Debian 8 64-bit","libraries":"openssl 1.0.1c","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[{"deviceId":2,"channelName":"Channel"}]},{"deviceId":2,"deviceType":{"icon":"IoIosDesktop","name":"Device","cpu":"16-bit 8MHz TI MSP430","os":"Debian 8 64-bit","libraries":"openssl 1.0.1c","schedulingAlgorithm":"fifo"},"connectedOutDevicesIds":[]}]',
              topologyDiagrams:
                '{"id":"e250b3c2-3b02-4860-aa21-7e9e48eee011","offsetX":0,"offsetY":0,"zoom":100,"gridSize":0,"layers":[{"id":"d9530a0b-44b1-47ea-9838-fda7a01797c0","type":"diagram-links","isSvg":true,"transformed":true,"models":{"7d162d1c-0237-43cb-bf22-572adcbd93bd":{"id":"7d162d1c-0237-43cb-bf22-572adcbd93bd","type":"default","selected":false,"source":"63d49090-d9ae-4aeb-ba47-2ea586732f6f","sourcePort":"3ac12156-6af2-4765-86a8-1748248097db","target":"02dff480-a3cc-4304-b2a4-c14de3a3a60a","targetPort":"2f428a51-bb25-40f8-a6ab-d417e0e834df","points":[{"id":"39fafc7f-149f-4b84-bef2-4a2b053ed06a","type":"point","x":378.99432373046875,"y":268.00000286102295},{"id":"beb83ee1-512b-4fbe-a1fc-0f43989ce6ae","type":"point","x":657.9971313476562,"y":272.9971647262573}],"labels":[],"width":3,"color":"gray","curvyness":50,"selectedColor":"rgb(0,192,255)"}}},{"id":"07bb95c9-d3c7-4018-922f-6f2d749aafa1","type":"diagram-nodes","isSvg":false,"transformed":true,"models":{"63d49090-d9ae-4aeb-ba47-2ea586732f6f":{"id":"63d49090-d9ae-4aeb-ba47-2ea586732f6f","type":"ts-custom-node","selected":true,"x":219,"y":198.00000381469727,"ports":[{"id":"97ce6e01-874c-4447-8ab3-8d5abf556b5b","locked":true,"type":"default","x":218.99429321289062,"y":253.00000381469727,"name":"1^Channel^In0","alignment":"left","parentNode":"63d49090-d9ae-4aeb-ba47-2ea586732f6f","links":[],"in":true,"label":"1^Channel^In0"},{"id":"3ac12156-6af2-4765-86a8-1748248097db","type":"default","x":358.99432373046875,"y":253.00000381469727,"name":"1^Channel^Out0","alignment":"right","parentNode":"63d49090-d9ae-4aeb-ba47-2ea586732f6f","links":["7d162d1c-0237-43cb-bf22-572adcbd93bd"],"in":false,"label":"1^Channel^Out0"}],"deviceType":{"icon":"IoIosDesktop","name":"Device","cpu":"16-bit 8MHz TI MSP430","os":"Debian 8 64-bit","libraries":"openssl 1.0.1c","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":1024}],"deviceId":1},"02dff480-a3cc-4304-b2a4-c14de3a3a60a":{"id":"02dff480-a3cc-4304-b2a4-c14de3a3a60a","type":"ts-custom-node","x":638,"y":203.00000381469727,"ports":[{"id":"2f428a51-bb25-40f8-a6ab-d417e0e834df","locked":true,"type":"default","x":637.9971313476562,"y":257.99716567993164,"name":"2^Channel^In0","alignment":"left","parentNode":"02dff480-a3cc-4304-b2a4-c14de3a3a60a","links":["7d162d1c-0237-43cb-bf22-572adcbd93bd"],"in":true,"label":"2^Channel^In0"},{"id":"66e4ab87-c1a4-403b-a831-786d4f96ceb4","type":"default","x":777.9970703125,"y":257.99716567993164,"name":"2^Channel^Out0","alignment":"right","parentNode":"02dff480-a3cc-4304-b2a4-c14de3a3a60a","links":[],"in":false,"label":"2^Channel^Out0"}],"deviceType":{"icon":"IoIosDesktop","name":"Device","cpu":"16-bit 8MHz TI MSP430","os":"Debian 8 64-bit","libraries":"openssl 1.0.1c","schedulingAlgorithm":"fifo"},"channels":[{"name":"Channel","buffer":1024}],"deviceId":2}}}]}',
              versions:
                '[{"name":"Version","processes":[{"name":"encrypt_data","time":5,"deviceId":1,"isInfinity":false,"outMessageSize":1},{"name":"send_data","time":1,"deviceId":1,"deviceToSendId":2,"outChannel":"Channel","isInfinity":false,"outMessageSize":1024},{"name":"recieve_data","time":1,"deviceId":2,"inChannel":"Channel","isInfinity":false,"outMessageSize":1},{"name":"decrypt_data","time":5,"deviceId":2,"isInfinity":false,"outMessageSize":1}]}]',
            },
          ]),
        mn = function (e) {
          return me.a.createElement(
            'div',
            { className: 'template-modal-container' },
            me.a.createElement(
              'div',
              { className: 'template-modal-content' },
              me.a.createElement(
                'div',
                { className: 'template-modal-content-header' },
                me.a.createElement('h2', null, 'New simulation')
              ),
              me.a.createElement(
                'div',
                { className: 'template-modal-content-inside' },
                me.a.createElement(
                  'div',
                  { className: 'template-modal-content-column' },
                  me.a.createElement(
                    'div',
                    {
                      className: 'template-modal-add-empty-button',
                      onClick: e.emptySimulationPressed,
                    },
                    me.a.createElement(
                      'div',
                      { className: 'template-modal-add-empty-button-icon' },
                      me.a.createElement(Te.a, null)
                    ),
                    me.a.createElement('label', null, 'New empty simulation')
                  )
                ),
                me.a.createElement('div', {
                  className: 'template-modal-separator',
                }),
                me.a.createElement(
                  'div',
                  { className: 'template-modal-content-column' },
                  me.a.createElement(
                    'label',
                    null,
                    'or use available templates:'
                  ),
                  dn.map(function (t, n) {
                    return me.a.createElement(
                      'div',
                      {
                        key: 'template' + n,
                        className: 'template-modal-template-item',
                        onClick: function () {
                          return e.templateSimulationPressed(t);
                        },
                      },
                      me.a.createElement('h5', null, t.title),
                      me.a.createElement('p', null, t.description)
                    );
                  })
                )
              )
            )
          );
        },
        pn =
          Object(ge.b)('store')(
            (Qt =
              Object(ge.c)(
                (Qt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(
                        t,
                        [this].concat(i)
                      )).deviceTypesRef = me.a.createRef()),
                      (e.mediumsChannelsRef = me.a.createRef()),
                      (e.topologyRef = me.a.createRef()),
                      (e.versionsRef = me.a.createRef()),
                      (e.state = {
                        mainPosition: -1,
                        showTemplateModal: !0,
                        loading: !0,
                        showModal: !1,
                        modalContent: {
                          header: '',
                          text: '',
                          leftButtonLabel: '',
                          rightButtonLabel: void 0,
                          onLeftClick: function () {},
                          onRightClick: void 0,
                        },
                      }),
                      (e.componentDidMount = function () {
                        var t;
                        null === (t = e.props.store) ||
                          void 0 === t ||
                          t.resetNewSimulationStore(),
                          setTimeout(function () {
                            e.setState({ loading: !1 });
                          }, 100);
                      }),
                      (e.closeTemplateModal = function () {
                        e.setState({ showTemplateModal: !1, mainPosition: 0 });
                      }),
                      (e.setSimulation = function (t) {
                        var n;
                        e.setState({ defaultSimulation: t }),
                          null === (n = e.props.store) ||
                            void 0 === n ||
                            n.setSimulationModel(t),
                          e.closeTemplateModal();
                      }),
                      (e.elements = {
                        0: {
                          checkFormValidation: function () {
                            var t;
                            return null === (t = e.deviceTypesRef.current) ||
                              void 0 === t
                              ? void 0
                              : t.saveData();
                          },
                          isArrayEmpty: function () {
                            var t;
                            return (
                              0 ===
                              (null === (t = e.props.store) || void 0 === t
                                ? void 0
                                : t.newSimulationStore.deviceTypes.length)
                            );
                          },
                          previousCallback: function () {
                            var t;
                            return null === (t = e.props.store) || void 0 === t
                              ? void 0
                              : t.newSimulationStore.resetDeviceTypes;
                          },
                          nextCallback: function () {
                            var t;
                            return null === (t = e.props.store) || void 0 === t
                              ? void 0
                              : t.newSimulationStore.changeActiveDeviceType(
                                  void 0
                                );
                          },
                        },
                        1: {
                          checkFormValidation: function () {
                            var t;
                            return null ===
                              (t = e.mediumsChannelsRef.current) || void 0 === t
                              ? void 0
                              : t.saveData();
                          },
                          isArrayEmpty: function () {
                            var t;
                            return (
                              0 ===
                              (null === (t = e.props.store) || void 0 === t
                                ? void 0
                                : t.newSimulationStore.mediums.length)
                            );
                          },
                          previousCallback: function () {
                            var t;
                            return null === (t = e.props.store) || void 0 === t
                              ? void 0
                              : t.newSimulationStore.resetMediums;
                          },
                          nextCallback: function () {
                            var t, n, a;
                            null === (t = e.props.store) ||
                              void 0 === t ||
                              t.newSimulationStore.resetTopology(),
                              null === (n = e.props.store) ||
                                void 0 === n ||
                                n.newSimulationStore.changeActiveMedium(void 0),
                              null === (a = e.topologyRef.current) ||
                                void 0 === a ||
                                a.resetApp();
                          },
                        },
                        2: {
                          checkFormValidation: function () {
                            return !0;
                          },
                          isArrayEmpty: function () {
                            var t;
                            return (
                              0 ===
                              (null === (t = e.props.store) || void 0 === t
                                ? void 0
                                : t.newSimulationStore.topologyElements.length)
                            );
                          },
                          previousCallback: function () {
                            var t, n;
                            null === (t = e.props.store) ||
                              void 0 === t ||
                              t.newSimulationStore.resetTopology(),
                              null === (n = e.topologyRef.current) ||
                                void 0 === n ||
                                n.resetApp();
                          },
                          nextCallback: function () {
                            var t;
                            null === (t = e.topologyRef.current) ||
                              void 0 === t ||
                              t.serialize();
                          },
                        },
                        3: {
                          checkFormValidation: function () {
                            var t;
                            return null === (t = e.versionsRef.current) ||
                              void 0 === t
                              ? void 0
                              : t.saveData();
                          },
                          isArrayEmpty: function () {
                            var t;
                            return (
                              0 ===
                              (null === (t = e.props.store) || void 0 === t
                                ? void 0
                                : t.newSimulationStore.versions.length)
                            );
                          },
                          previousCallback: function () {
                            var t;
                            return null === (t = e.props.store) || void 0 === t
                              ? void 0
                              : t.newSimulationStore.resetVersions;
                          },
                          nextCallback: function () {},
                        },
                        4: {},
                      }),
                      (e.changePosition = function (t) {
                        var n = e.elements[e.state.mainPosition.toString()];
                        if (t < e.state.mainPosition)
                          e.setState({
                            showModal: !0,
                            modalContent: {
                              header: Xe.confirm,
                              text: Xe.go_back_are_you_shure,
                              leftButtonLabel: Xe.cancel,
                              rightButtonLabel: Xe.accept,
                              onLeftClick: function () {
                                return e.setState({ showModal: !1 });
                              },
                              onRightClick: function () {
                                n.previousCallback && n.previousCallback(),
                                  e.setState({
                                    mainPosition: t,
                                    showModal: !1,
                                  });
                              },
                            },
                          });
                        else {
                          if (n.checkFormValidation && !n.checkFormValidation())
                            return void e.setState({
                              showModal: !0,
                              modalContent: {
                                header: Xe.warning,
                                text: Xe.problems_in_form,
                                leftButtonLabel: Xe.ok,
                                onLeftClick: function () {
                                  return e.setState({ showModal: !1 });
                                },
                              },
                            });
                          if (
                            (n.nextCallback && n.nextCallback(),
                            n.isArrayEmpty && n.isArrayEmpty())
                          )
                            return void e.setState({
                              showModal: !0,
                              modalContent: {
                                header: Xe.warning,
                                text: Xe.add_element_in_page,
                                leftButtonLabel: Xe.ok,
                                onLeftClick: function () {
                                  return e.setState({ showModal: !1 });
                                },
                              },
                            });
                          e.setState({ mainPosition: t });
                        }
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.mainPosition,
                            a = t.loading,
                            i = t.modalContent,
                            r = t.showModal,
                            o = t.showTemplateModal;
                          return a
                            ? null
                            : me.a.createElement(
                                'div',
                                { className: 'simulation-padding-container' },
                                0 === n &&
                                  me.a.createElement(St, {
                                    ref: this.deviceTypesRef,
                                  }),
                                1 === n &&
                                  me.a.createElement(kt, {
                                    ref: this.mediumsChannelsRef,
                                  }),
                                2 === n &&
                                  me.a.createElement(tn, {
                                    ref: this.topologyRef,
                                    defaultModel: this.state.defaultSimulation,
                                  }),
                                3 === n &&
                                  me.a.createElement(ln, {
                                    ref: this.versionsRef,
                                  }),
                                4 === n && me.a.createElement(cn, null),
                                me.a.createElement(vt, {
                                  position: n,
                                  changePosition: this.changePosition,
                                }),
                                r &&
                                  me.a.createElement(un, {
                                    text: i.text,
                                    header: i.header,
                                    leftButtonLabel: i.leftButtonLabel,
                                    rightButtonLabel: i.rightButtonLabel,
                                    onPressLeft: i.onLeftClick,
                                    onPressRight: i.onRightClick,
                                  }),
                                o &&
                                  me.a.createElement(mn, {
                                    emptySimulationPressed: this
                                      .closeTemplateModal,
                                    templateSimulationPressed: function (t) {
                                      return e.setSimulation(t);
                                    },
                                  })
                              );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Qt)
          ) || Qt,
        fn = Object(be.g)(pn),
        vn = (n(534), { 1: 'Running', 2: 'Passed', 3: 'Error' }),
        bn =
          Object(ge.b)('store')(
            (Yt =
              Object(ge.c)(
                (Yt = (function (e) {
                  Object(Ae.a)(n, e);
                  var t = Object(ze.a)(n);
                  function n() {
                    var e;
                    Object(ye.a)(this, n);
                    for (
                      var a = arguments.length, i = new Array(a), r = 0;
                      r < a;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      ((e = t.call.apply(t, [this].concat(i))).state = {
                        simulation: void 0,
                        loading: !0,
                      }),
                      (e.componentDidMount = function () {
                        e.getSimulation();
                      }),
                      (e.getSimulation = Object(we.a)(
                        Oe.a.mark(function t() {
                          var n, a, i, r;
                          return Oe.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      (n =
                                        '/api/simulations/' +
                                        e.props.match.params.id),
                                      (t.next = 4),
                                      fetch(n, {
                                        method: 'GET',
                                        headers: {
                                          Accept: 'application/json',
                                          'Content-Type': 'application/json',
                                          Authorization:
                                            'Bearer ' +
                                            localStorage.getItem('token'),
                                        },
                                      })
                                    );
                                  case 4:
                                    if (401 !== (a = t.sent).status) {
                                      t.next = 9;
                                      break;
                                    }
                                    return (
                                      null === (i = e.props.store) ||
                                        void 0 === i ||
                                        i.userStore.logout(),
                                      setTimeout(function () {
                                        window.location.reload();
                                      }, 100),
                                      t.abrupt('return')
                                    );
                                  case 9:
                                    return (t.next = 11), a.json();
                                  case 11:
                                    (r = t.sent).success &&
                                      e.setState({
                                        simulation: r.data,
                                        loading: !1,
                                      }),
                                      (t.next = 18);
                                    break;
                                  case 15:
                                    (t.prev = 15),
                                      (t.t0 = t.catch(0)),
                                      e.setState({ loading: !1 });
                                  case 18:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 15]]
                          );
                        })
                      )),
                      (e.renderRaport = function () {
                        var t = e.state.simulation;
                        if ('2' === t.status) {
                          var n = t.results
                            .split(
                              '--------------------------------------------------------------------------------'
                            )
                            .map(function (e) {
                              return e
                                .split('\n')
                                .map(function (e) {
                                  return e.trim();
                                })
                                .filter(function (e) {
                                  return 0 !== e.length;
                                });
                            })
                            .filter(function (e) {
                              return 0 !== e.length;
                            });
                          return me.a.createElement(
                            me.a.Fragment,
                            null,
                            null === n || void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                  var t = e[1].split('\t'),
                                    n = e
                                      .slice(2, e.length - 2)
                                      .map(function (e) {
                                        return e.split('\t');
                                      }),
                                    a = e.slice(e.length - 2).join('\n\n');
                                  return me.a.createElement(
                                    'div',
                                    { className: 'passed-result-container' },
                                    me.a.createElement(
                                      'div',
                                      { className: 'passed-header' },
                                      t[1]
                                    ),
                                    me.a.createElement(
                                      'div',
                                      { className: 'passed-result' },
                                      me.a.createElement(
                                        'div',
                                        {
                                          className:
                                            'passed-result-column passed-result-column-bold',
                                        },
                                        Xe.device
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          className:
                                            'passed-result-column passed-result-column-bold',
                                        },
                                        Xe.time_in_s
                                      ),
                                      me.a.createElement(
                                        'div',
                                        {
                                          className:
                                            'passed-result-column passed-result-column-bold',
                                        },
                                        Xe.status
                                      )
                                    ),
                                    n.map(function (e) {
                                      return me.a.createElement(
                                        'div',
                                        { className: 'passed-result' },
                                        me.a.createElement(
                                          'div',
                                          { className: 'passed-result-column' },
                                          e[0]
                                        ),
                                        me.a.createElement(
                                          'div',
                                          { className: 'passed-result-column' },
                                          e[1]
                                        ),
                                        me.a.createElement(
                                          'div',
                                          {
                                            className:
                                              'passed-result-column ' +
                                              ('Finished' === e[2]
                                                ? 'status-text-passed'
                                                : 'status-text-error'),
                                          },
                                          e[2]
                                        )
                                      );
                                    }),
                                    me.a.createElement(
                                      'div',
                                      { className: 'results-messages' },
                                      a
                                    )
                                  );
                                })
                          );
                        }
                        return me.a.createElement(
                          'div',
                          { className: 'details-error-container' },
                          t.results
                        );
                      }),
                      (e.goToSimulationsList = function () {
                        e.props.history.push('/simulations');
                      }),
                      e
                    );
                  }
                  return (
                    Object(ke.a)(n, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this.state,
                            t = e.simulation,
                            n = e.loading,
                            a = Ge({
                              'status-text-error':
                                '3' ===
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.status),
                              'status-text-passed':
                                '2' ===
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.status),
                            });
                          return me.a.createElement(
                            'div',
                            { className: 'main-default-container' },
                            me.a.createElement(
                              'div',
                              { className: 'header-container' },
                              me.a.createElement(
                                'div',
                                null,
                                me.a.createElement(
                                  'h2',
                                  null,
                                  me.a.createElement(
                                    'p',
                                    {
                                      onClick: this.goToSimulationsList,
                                      className: 'back-text',
                                    },
                                    Xe.go_back
                                  ),
                                  Xe.simulation_details
                                )
                              )
                            ),
                            !n &&
                              me.a.createElement(
                                'div',
                                { className: 'section simulation-details' },
                                t
                                  ? me.a.createElement(
                                      me.a.Fragment,
                                      null,
                                      me.a.createElement(
                                        'div',
                                        { className: 'details-container' },
                                        me.a.createElement('h5', null, Xe.date),
                                        me.a.createElement(
                                          'p',
                                          null,
                                          ot()(t.createdAt).format(
                                            'YYYY-MM-DD HH:mm:ss'
                                          )
                                        ),
                                        me.a.createElement(
                                          'h5',
                                          null,
                                          Xe.status
                                        ),
                                        me.a.createElement(
                                          'p',
                                          { className: a },
                                          vn[t.status]
                                        )
                                      ),
                                      me.a.createElement(
                                        'h5',
                                        null,
                                        Xe.details
                                      ),
                                      this.renderRaport()
                                    )
                                  : me.a.createElement(
                                      'div',
                                      { className: 'big-loader-container' },
                                      me.a.createElement(
                                        'p',
                                        null,
                                        Xe.simulation_not_found
                                      )
                                    )
                              )
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(me.a.Component))
              ) || Yt)
          ) || Yt,
        hn = Object(be.g)(bn),
        gn = new Me(),
        yn = function (e) {
          var t = e.component,
            n = Object(ve.a)(e, ['component']),
            a = t;
          return me.a.createElement(
            be.b,
            Object.assign({}, n, {
              render: function (e) {
                return null !== localStorage.getItem('token') &&
                  '' !== localStorage.getItem('token')
                  ? me.a.createElement(a, e)
                  : me.a.createElement(be.a, { to: '/login' });
              },
            })
          );
        };
      var En = function () {
        return me.a.createElement(
          ge.a,
          { store: gn },
          me.a.createElement(
            'div',
            { className: 'App' },
            me.a.createElement(
              he.a,
              null,
              me.a.createElement(Fe, null),
              me.a.createElement(
                be.d,
                null,
                me.a.createElement(yn, { path: '/simulations', component: dt }),
                me.a.createElement(yn, { path: '/details/:id', component: hn }),
                me.a.createElement(yn, {
                  path: '/change_password',
                  component: pt,
                }),
                me.a.createElement(yn, { path: '/simulation', component: fn }),
                me.a.createElement(be.b, { path: '/register', component: nt }),
                me.a.createElement(be.b, { path: '/login', component: et }),
                me.a.createElement(yn, { path: '/', component: dt })
              ),
              me.a.createElement(He, null)
            )
          )
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      fe.a.render(
        me.a.createElement(me.a.StrictMode, null, me.a.createElement(En, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    62: function (e, t, n) {},
  },
  [[260, 1, 2]],
]);
//# sourceMappingURL=main.883c592d.chunk.js.map
