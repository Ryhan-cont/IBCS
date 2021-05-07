(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_app_CreateUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js& ***!
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
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      gradeOption: [1, 2, 3, 4, 5, 6],
      grade: null,
      address: null,
      phone: null
    };
  },
  methods: {
    createUser: function createUser() {
      var data = {
        name: this.name,
        email: this.email,
        password: this.password,
        grade: this.grade,
        address: this.address,
        phone: this.phone
      };

      try {
        //var req = await axios.put('/api/grade/update',data)
        if (req.status == 200) {
          als.fire({
            title: 'User created successfully.'
          });
          this.nulify();
        }
      } catch (err) {
        if (err.response) {
          this.notificationAlert(err.response);
        }

        console.log(err);
      }
    },
    nulify: function nulify() {
      this.name = null;
      this.email = null;
      this.password = null;
      this.grade = null;
      this.address = null;
      this.phone = null;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/app/CreateUser.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/app/CreateUser.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUser.vue?vue&type=template&id=acf74a44& */ "./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44&");
/* harmony import */ var _CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateUser.vue?vue&type=script&lang=js& */ "./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/app/CreateUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_acf74a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateUser.vue?vue&type=template&id=acf74a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/app/CreateUser.vue?vue&type=template&id=acf74a44& ***!
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
    { staticClass: "page--layout" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { placeholder: "Name" },
                      model: {
                        value: _vm.name,
                        callback: function($$v) {
                          _vm.name = $$v
                        },
                        expression: "name"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.name
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.name[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { placeholder: "Email" },
                      model: {
                        value: _vm.email,
                        callback: function($$v) {
                          _vm.email = $$v
                        },
                        expression: "email"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.email
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.email[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { placeholder: "Password", type: "password" },
                      model: {
                        value: _vm.password,
                        callback: function($$v) {
                          _vm.password = $$v
                        },
                        expression: "password"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.password
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.password[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Address")
                    ]),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { placeholder: "Address" },
                      model: {
                        value: _vm.address,
                        callback: function($$v) {
                          _vm.address = $$v
                        },
                        expression: "address"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.address
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.address[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Phone")
                    ]),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { placeholder: "Phone" },
                      model: {
                        value: _vm.phone,
                        callback: function($$v) {
                          _vm.phone = $$v
                        },
                        expression: "phone"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.phone
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.phone[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { lg: "4", md: "6", sm: "12" } }, [
                _c(
                  "div",
                  { staticClass: "form--input-container" },
                  [
                    _c("div", { staticClass: "form--input-label" }, [
                      _vm._v("Grade/Rank")
                    ]),
                    _vm._v(" "),
                    _c("b-form-select", {
                      attrs: {
                        options: _vm.gradeOption,
                        placeholder: "Grade/Rank"
                      },
                      model: {
                        value: _vm.grade,
                        callback: function($$v) {
                          _vm.grade = $$v
                        },
                        expression: "grade"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form--error-msg" }, [
                      _vm.errorData.grade
                        ? _c("div", [_vm._v(_vm._s(_vm.errorData.grade[0]))])
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form--submit-option d-flex" }, [
        _c("div", { staticClass: "col" }),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "b-button",
              {
                attrs: { variant: "primary" },
                on: {
                  click: function($event) {
                    return _vm.createUser()
                  }
                }
              },
              [_vm._v("Create")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page--title" }, [
      _c("div", [_vm._v("Menage Account")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);