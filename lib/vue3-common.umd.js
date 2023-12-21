(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-common"] = factory(require("vue"));
	else
		root["vue3-common"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 66:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseTable: function() { return /* reexport */ BaseTable; },
  Paging: function() { return /* reexport */ Paging; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BaseTable/index.vue?vue&type=script&setup=true&lang=ts



/* harmony default export */ var BaseTablevue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'index',
  props: {
    tableData: {},
    tableColumnData: {},
    showSelection: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const table = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    __expose({
      table
    });
    return (_ctx, _cache) => {
      const _component_el_empty = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-empty");
      const _component_el_table_column = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-table-column");
      const _component_el_table = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-table");
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)({
        ref_key: "table",
        ref: table
      }, _ctx.$attrs, {
        data: props.tableData,
        class: "base-table-box"
      }), {
        empty: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "empty", {}, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_empty, {
          description: "暂无数据"
        })])]),
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [props.showSelection ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table_column, {
          key: 0,
          type: "selection",
          width: "55"
        })) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(props.tableColumnData, (item, index) => {
          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_table_column, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(item, {
            key: index
          }), {
            header: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(({
              column,
              $index
            }) => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "tableColumnHeader", {
              data: {
                column,
                $index
              }
            }, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(column.label), 1)])]),
            default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(({
              row,
              $index
            }) => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "tableColumn", {
              data: {
                item,
                row,
                index: $index
              }
            })]),
            _: 2
          }, 1040);
        }), 128))]),
        _: 3
      }, 16, ["data"]);
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/BaseTable/index.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/BaseTable/index.vue



const __exports__ = BaseTablevue_type_script_setup_true_lang_ts;

/* harmony default export */ var BaseTable = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Paging/index.vue?vue&type=script&setup=true&lang=ts



/* harmony default export */ var Pagingvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'index',
  props: {
    page: {
      default: 1
    },
    size: {
      default: 10
    },
    total: {
      default: 0
    },
    pageSizes: {
      default: () => [10, 20, 50, 100]
    }
  },
  emits: ["update:page", "update:size", "change"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const props = __props;
    const state = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      page: 1,
      size: 10
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.page, val => {
      state.page = val;
    }, {
      deep: true,
      immediate: true
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.size, val => {
      state.size = val;
    }, {
      deep: true,
      immediate: true
    });
    const handleCurrentChange = e => {
      state.page = e;
      emit("update:page", e);
      emit("change", {
        page: state.page,
        size: state.size
      });
    };
    const handleSizeChange = e => {
      state.size = e;
      emit("update:size", e);
      emit("change", {
        page: state.page,
        size: state.size
      });
    };
    return (_ctx, _cache) => {
      const _component_el_pagination = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-pagination");
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_pagination, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.mergeProps)(_ctx.$attrs, {
        class: "pagination-box",
        "current-page": state.page,
        "onUpdate:currentPage": _cache[0] || (_cache[0] = $event => state.page = $event),
        "page-size": state.size,
        "onUpdate:pageSize": _cache[1] || (_cache[1] = $event => state.size = $event),
        total: props.total,
        "page-sizes": props.pageSizes,
        background: true,
        layout: "total, sizes, prev, pager, next, jumper",
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }), null, 16, ["current-page", "page-size", "total", "page-sizes"]);
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/Paging/index.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Paging/index.vue?vue&type=style&index=0&id=eafdfe6a&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Paging/index.vue?vue&type=style&index=0&id=eafdfe6a&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(66);
;// CONCATENATED MODULE: ./src/components/Paging/index.vue



;


const Paging_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Pagingvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-eafdfe6a"]])

/* harmony default export */ var Paging = (Paging_exports_);
;// CONCATENATED MODULE: ./src/index.ts


const components = [BaseTable, Paging];
// 定义 install 方法， App 作为参数
const install = app => {
  // 遍历注册所有组件
  components.map(component => app.component(component.name, component));
};

/* harmony default export */ var src_0 = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});