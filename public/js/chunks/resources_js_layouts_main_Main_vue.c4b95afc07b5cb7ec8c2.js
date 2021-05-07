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
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./resources/js/layouts/main/body.vue");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./resources/js/layouts/main/header.vue");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./resources/js/layouts/main/footer.vue");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller.js */ "./resources/js/layouts/main/controller.js");
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
  components: {
    'layout-body': _body__WEBPACK_IMPORTED_MODULE_1__.default,
    'layout-header': _header__WEBPACK_IMPORTED_MODULE_2__.default,
    'layout-menubar': _menubar__WEBPACK_IMPORTED_MODULE_0__.default,
    'layout-footer': _footer__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      menuWidth: 230,
      menuFullScreen: false,
      menuStatus: null,
      menuStatusMemory: true,
      mobileBreakPoint: 700
    };
  },
  created: function created() {
    window.addEventListener('resize', this.resizeControll);
    this.setup();
  },
  mounted: function mounted() {},
  methods: {
    setup: _controller_js__WEBPACK_IMPORTED_MODULE_4__.setup,
    resizeControll: _controller_js__WEBPACK_IMPORTED_MODULE_4__.resizeControll,
    slideMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.slideMenu,
    floatMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.floatMenu,
    toggleMenu: _controller_js__WEBPACK_IMPORTED_MODULE_4__.toggleMenu
  },
  watch: {
    '$store.state.toggleMenu': function $storeStateToggleMenu(val) {
      this.toggleMenu(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: []
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  mounted: function mounted() {},
  methods: {
    toggleMenu: function toggleMenu() {
      if (this.$store.state.toggleMenu == true) {
        this.$store.commit('TOGGLE_MENU', false);
      } else {
        this.$store.commit('TOGGLE_MENU', true);
      }
    }
  }
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
  props: ['menuWidth', 'menuStatus', 'menuFullScreen'],
  data: function data() {
    return {
      width: 0
    };
  },
  mounted: function mounted() {
    this.width = this.$store.state.menuWidthAdj;
  },
  methods: {
    toggleMenu: function toggleMenu() {
      if (this.$store.state.toggleMenu == true) {
        this.$store.commit('TOGGLE_MENU', false);
      } else {
        this.$store.commit('TOGGLE_MENU', true);
      }
    }
  },
  watch: {
    '$store.state.menuWidthAdj': function $storeStateMenuWidthAdj(val) {
      this.width = this.$store.state.menuWidthAdj;
    },
    menuFullScreen: function menuFullScreen(val) {
      console.log(this.menuWidth);

      if (this.menuFullScreen == true) {
        this.width = this.menuWidth;
      } else {
        this.width = 0;
      }
    }
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
/* harmony export */   "setup": () => (/* binding */ setup),
/* harmony export */   "resizeControll": () => (/* binding */ resizeControll),
/* harmony export */   "slideMenu": () => (/* binding */ slideMenu),
/* harmony export */   "floatMenu": () => (/* binding */ floatMenu),
/* harmony export */   "toggleMenu": () => (/* binding */ toggleMenu)
/* harmony export */ });
function setup() {
  if (window.innerWidth > this.mobileBreakPoint) {
    this.menuStatus = this.menuStatusMemory;
    this.$store.commit('MENU_WIDTH_ADJ', this.menuWidth);
    this.$store.commit('TOGGLE_MENU', this.menuStatusMemory);
  } else {
    this.menuStatus = false;
    this.$store.commit('MENU_WIDTH_ADJ', 0);
    this.$store.commit('TOGGLE_MENU', false);
  }
}

function resizeControll() {
  if (window.innerWidth > this.mobileBreakPoint) {
    if (this.menuStatusMemory == true) {
      this.slideMenu('show');
    }
  } else {
    this.slideMenu('hide');

    if (this.menuFullScreen) {
      this.floatMenu('hide');
    }
  }
}

function slideMenu(act) {
  if (act == 'show') {
    if (this.menuStatus == false) {
      this.$store.commit('TOGGLE_MENU', true);
      this.menuStatus = true;
      var timer = setInterval(function () {
        var menuWidth = this.$store.state.menuWidthAdj + 5;

        if (menuWidth > this.menuWidth) {
          this.$store.commit('MENU_WIDTH_ADJ', this.menuWidth);
          clearInterval(timer);
        } else {
          this.$store.commit('MENU_WIDTH_ADJ', menuWidth);
        }
      }.bind(this), 5);
    }
  }

  if (act == 'hide') {
    if (this.menuStatus == true) {
      var _timer = setInterval(function () {
        var menuWidth = this.$store.state.menuWidthAdj - 5;

        if (menuWidth < 0) {
          this.$store.commit('MENU_WIDTH_ADJ', 0);
          this.menuStatus = false;
          this.$store.commit('TOGGLE_MENU', false);
          clearInterval(_timer);
        } else {
          this.$store.commit('MENU_WIDTH_ADJ', menuWidth);
        }
      }.bind(this), 5);
    }
  }
}

function floatMenu(act) {
  if (act == 'show') {
    this.menuStatus = true;
    this.menuFullScreen = true;
  }

  if (act == 'hide') {
    this.menuStatus = false;
    this.menuFullScreen = false;
  }
}

function toggleMenu(status) {
  if (window.innerWidth > this.mobileBreakPoint) {
    status == true ? this.slideMenu('show') : this.slideMenu('hide');
  } else {
    status == true ? this.floatMenu('show') : this.floatMenu('hide');
  }
}



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

/***/ "./resources/js/layouts/main/body.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/main/body.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.vue?vue&type=template&id=6cca4ca4& */ "./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4&");
/* harmony import */ var _body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/body.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__.render,
  _body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/body.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/footer.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/main/footer.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=003f719d& */ "./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/header.vue":
/*!**********************************************!*\
  !*** ./resources/js/layouts/main/header.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=2171d58f& */ "./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/header.vue"
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

/***/ "./resources/js/layouts/main/body.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/main/body.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./body.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/footer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/main/footer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/main/header.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/layouts/main/header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_6cca4ca4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./body.vue?vue&type=template&id=6cca4ca4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4&");


/***/ }),

/***/ "./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_003f719d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=003f719d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d&");


/***/ }),

/***/ "./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f&":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2171d58f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=2171d58f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f&");


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
      _c("layout-menubar", {
        attrs: {
          menuWidth: _vm.menuWidth,
          menuStatus: _vm.menuStatus,
          menuFullScreen: _vm.menuFullScreen
        }
      }),
      _vm._v(" "),
      _c(
        "layout-body",
        [
          _c("layout-header"),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { flex: "auto", padding: "10px" } },
            [_c("router-view")],
            1
          ),
          _vm._v(" "),
          _c("layout-footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/body.vue?vue&type=template&id=6cca4ca4& ***!
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
    {
      staticClass: "layout--main-body",
      style: {
        marginLeft: _vm.$store.state.menuWidthAdj + "px",
        paddingTop: _vm.$store.state.headerHeight + "px"
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/footer.vue?vue&type=template&id=003f719d& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "layout--main-footer" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/main/header.vue?vue&type=template&id=2171d58f& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "layout--main-header",
      style: {
        marginLeft: _vm.$store.state.menuWidthAdj + "px",
        height: _vm.$store.state.headerHeight + "px"
      }
    },
    [
      _c("div", {
        staticClass: "fas fa-bars btn-lg btn",
        on: {
          click: function($event) {
            return _vm.toggleMenu()
          }
        }
      })
    ]
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
  return _vm.menuStatus
    ? _c(
        "div",
        {
          staticClass: "layout--main-menubar",
          style: { right: _vm.menuFullScreen == true ? 0 : "auto" }
        },
        [
          _c(
            "div",
            {
              staticClass: "layout--main-left-container",
              style: { width: _vm.width + "px" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "border-bottom px-2 py-3 font-weight-bold text-truncate",
                  style: { height: _vm.$store.state.headerHeight + "px" }
                },
                [_vm._v("\n                IBCS-PRIMAX\n            ")]
              ),
              _vm._v(" "),
              _c("div")
            ]
          ),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              flex: "auto",
              "background-color": "rgba(0, 0, 0, 0.1)"
            },
            on: {
              click: function($event) {
                return _vm.toggleMenu()
              }
            }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);