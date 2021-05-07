(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_main_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menubar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menubar */ "./resources/js/layouts/main/menubar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import body from './body';
// import header from './header';
// import footer from './footer';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuWidth: 200,
      menuAdjWidth: null,
      menuStatus: true,
      menuStatusMemory: null
    };
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./resources/js/layouts/main/controller.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var menubarElement = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    var menu = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.menu,
        toggleIconDetail = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.toggleIconDetail,
        fullScreenMenubar = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.fullScreenMenubar,
        toggleMenu = _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.toggleMenu;

    function showMenuEnter(el) {
      fullScreenMenubar(true);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el, {
        opacity: 0
      }, {
        opacity: 1,
        duration: .3
      });
    }

    function showMenulLeave(el, fullScreenMenubar) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'gsap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(el, {
        opacity: 1
      }, {
        opacity: 0,
        duration: .3,
        onComplete: fullScreenMenubar
      });
    }

    function leaved() {
      console.log('cccc');
    }

    return {
      menu: menu,
      toggleIconDetail: toggleIconDetail,
      fullScreenMenubar: fullScreenMenubar,
      toggleMenu: toggleMenu,
      leaved: leaved,
      //animation
      showMenuEnter: showMenuEnter,
      showMenulLeave: showMenulLeave
    };
  }
});

/***/ }),

/***/ "./resources/js/layouts/main/controller.js":
/*!*************************************************!*\
  !*** ./resources/js/layouts/main/controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var setting = {
  minifyMenuWidth: 80,
  menuWidth: 200,
  defaultMenuType: 'mini',
  mobileBreakPoint: 700,
  showOnStart: true
};
var menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  // For menu and list container
  menuWidth: null,
  listContainerWidth: 150,
  floatMenubarWidth: null,
  //Menu part show hide controller
  showIconDetail: false,
  leftMenubarShadow: false,
  menuType: null,
  //For menu showing and hiding
  status: null,
  menualStatus: null,
  floatingMenuStatus: false
});
var navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
  height: 3
});
var memory = {
  menuWidth: null,
  menuHidinginProgress: false,
  mobileMode: null
};

function toggleMenu() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (status == null) {
    menu.status == 'show' ? status = 'hide' : status = 'show';
  }

  if (memory.mobileMode == false) {
    memory.menuHidinginProgress = true;

    if (status == 'show') {
      menu.status = status;
      var timer = setInterval(function () {
        var menuWidth = menu.menuWidth + 5;

        if (menuWidth > memory.menuWidth) {
          menu.menuWidth = memory.menuWidth;
          memory.menuHidinginProgress = false;
          clearInterval(timer);
        } else {
          menu.menuWidth = menuWidth;
        }
      }, 5);
    }

    if (status == 'hide') {
      var _timer = setInterval(function () {
        var menuWidth = menu.menuWidth - 5;

        if (menuWidth < 0) {
          menu.menuWidth = 0;
          menu.status = status;
          memory.menuHidinginProgress = false;
          clearInterval(_timer);
        } else {
          menu.menuWidth = menuWidth;
        }
      }, 5);
    }

    if (status == 'adjust') {
      var _timer2 = setInterval(function () {
        if (menu.menuWidth < memory.menuWidth) {
          var menuWidth = menu.menuWidth + 5;

          if (menuWidth > memory.menuWidth) {
            menu.menuWidth = memory.menuWidth;
            memory.menuHidinginProgress = false;
            clearInterval(_timer2);
          } else {
            menu.menuWidth = menuWidth;
          }
        } else {
          var menuWidth = menu.menuWidth - 5;

          if (menuWidth < memory.menuWidth) {
            menu.menuWidth = memory.menuWidth;
            memory.menuHidinginProgress = false;
            clearInterval(_timer2);
          } else {
            menu.menuWidth = menuWidth;
          }
        }
      }, 5);
    }
  } else {
    console.log('mobile mode', window.innerWidth);
    menu.floatingMenuStatus = !menu.floatingMenuStatus;
  }
}

function toggleIconDetail(req) {
  if (req == 'hide') {
    menu.showIconDetail = false;
  } else {
    menu.showIconDetail = true;
  }
}

function fullScreenMenubar(val) {
  menu.leftMenubarShadow = val;
}

function switchMenuMode() {
  if (menu.menuType == 'mini') var mode = 'full';else if (menu.menuType == 'full') var mode = 'mini';
  menu.menuType = mode;

  if (mode == 'mini') {
    memory.menuWidth = setting.minifyMenuWidth;
    menu.menuType = 'mini';
  } else if (mode == 'full') {
    memory.menuWidth = setting.menuWidth;
    menu.menuType = 'full';
  }

  if (menu.status == 'show') toggleMenu('adjust');
}

function resizeControll() {
  toggleIconDetail('hide');
  fullScreenMenubar(false);
  menu.floatingMenuStatus = false;

  if (window.innerWidth > setting.mobileBreakPoint) {
    if (menu.status == 'hide' && menu.menualStatus == 'show' && memory.menuHidinginProgress == false && menu.menuType != 'none') {
      memory.mobileMode = false;
      toggleMenu('show');
    }
  } else {
    if (menu.status == 'show' && memory.menuHidinginProgress == false && menu.menuType != 'none') {
      toggleMenu('hide');
      memory.mobileMode = true;
    }
  }
}

(0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
  menu.floatMenubarWidth = setting.menuWidth;

  if (setting.showOnStart == true) {
    menu.status = 'show';
    menu.menualStatus = 'show';

    if (setting.defaultMenuType == 'mini') {
      menu.menuWidth = setting.minifyMenuWidth;
      memory.menuWidth = setting.minifyMenuWidth;
      menu.menuType = 'mini';
    } else if (setting.defaultMenuType == 'full') {
      menu.menuWidth = setting.menuWidth;
      memory.menuWidth = setting.menuWidth;
      menu.menuType = 'full';
    }
  } else {
    menu.status = 'hide';
    menu.menualStatus = 'hide';
    menu.menuWidth = 0;
    menu.showIconDetail = false;
    menu.menuType = setting.defaultMenuType;
  }

  if (window) {
    if (window.innerWidth > setting.mobileBreakPoint) {
      memory.mobileMode = false;
    } else {
      menu.status = 'hide';
      menu.menuWidth = 0;

      if (setting.showOnStart == true) {
        menu.menualStatus = 'show';
      } else {
        menu.menualStatus = 'hide';
      }

      memory.mobileMode = true;
    }

    window.addEventListener('resize', resizeControll);
  }
});
(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
  console.log('xxx');
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  menu: menu,
  navbar: navbar,
  toggleMenu: toggleMenu,
  toggleIconDetail: toggleIconDetail,
  fullScreenMenubar: fullScreenMenubar,
  switchMenuMode: switchMenuMode
});

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/main/Main.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=0aa7995b& */ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/menubar.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/main/menubar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menubar.vue?vue&type=template&id=aad3257c& */ "./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c&");
/* harmony import */ var _menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menubar.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__.render,
  _menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/menubar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./menubar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=0aa7995b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");


/***/ }),

/***/ "./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_template_id_aad3257c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./menubar.vue?vue&type=template&id=aad3257c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "layout--main" },
    [
      _c("menubar"),
      _vm._v(" "),
      _c("div", [_vm._v("ddd")]),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/menubar.vue?vue&type=template&id=aad3257c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.menu.status == "show"
        ? _c(
            "div",
            {
              staticClass: "layout--vnav-menubar",
              style: { right: _vm.menu.leftMenubarShadow == true ? 0 : "auto" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "layout--vnav-left-container",
                  style: { width: _vm.menu.menuWidth + "px", height: "100vh" }
                },
                [
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          return _vm.toggleIconDetail("data")
                        }
                      }
                    },
                    [_vm._v("icons")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  on: {
                    enter: _vm.showMenuEnter,
                    leave: _vm.showMenulLeave,
                    "after-leave": function($event) {
                      return _vm.fullScreenMenubar(false)
                    }
                  }
                },
                [
                  _vm.menu.showIconDetail
                    ? _c(
                        "div",
                        { staticClass: "layout--vnav-icon-info-container" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "layout--vnav-icon-info",
                              style: {
                                width: _vm.menu.listContainerWidth + "px"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleIconDetail("hide")
                                    }
                                  }
                                },
                                [_vm._v("Close")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "layout--vnav-icon-info-shadow",
                            on: {
                              click: function($event) {
                                return _vm.toggleIconDetail("hide")
                              }
                            }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        { on: { enter: _vm.showMenuEnter, leave: _vm.showMenulLeave } },
        [
          _vm.menu.floatingMenuStatus
            ? _c("div", { staticClass: "layout--vnav-float-container" }, [
                _c(
                  "div",
                  {
                    staticClass: "layout--vnav-float-item-cont",
                    style: { width: _vm.menu.floatMenubarWidth + "px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: { padding: "50px" },
                        on: {
                          click: function($event) {
                            return _vm.toggleMenu()
                          }
                        }
                      },
                      [_vm._v("close")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "layout--vnav-icon-info-shadow",
                  on: {
                    click: function($event) {
                      _vm.menu.floatingMenuStatus = !_vm.menu.floatingMenuStatus
                    }
                  }
                })
              ])
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);