webpackHotUpdate("static/development/pages/permissions.js",{

/***/ "./components/Permissions.js":
/*!***********************************!*\
  !*** ./components/Permissions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/adamsbanjo/Documents/dev/advancedreact-graphql/frontend/components/Permissions.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    users {\n      id\n      name\n      email\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var possiblePermissions = ["ADMIN", "USER", "ITEMCREATE", "ITEMUPDATE", "ITEMDELETE", "PERMISSIONUPDATE"];
var ALL_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Permissions = function Permissions(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: ALL_USERS_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Manage Permissions"), console.log(data)));
  });
}; // class UserPermissions extends React.Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//       id: PropTypes.string,
//       permissions: PropTypes.array
//     }).isRequired
//   };
//   state = {
//     permissions: this.props.user.permissions
//   };
//   handlePermissionChange = e => {
//     const checkbox = e.target;
//     // take a copy of the permissions
//     let updatedPermissions = [...this.state.permissions];
//     // figure out if we need to remove or add this checkbox
//     if (checkbox.checked) {
//       // add it in
//       updatedPermissions.push(checkbox.value);
//     } else {
//       updatedPermissions = updatedPermissions.filter(
//         permission => permission !== checkbox.value
//       );
//     }
//     this.setState({ permissions: updatedPermissions });
//   };
//   render() {
//     const user = this.props.user;
//     return (
//       <tr>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         {possiblePermissions.map(permission => (
//           <td key={permission}>
//             <label htmlFor={`${user.id}-permission-${permission}`}>
//               <input
//                 type="checkbox"
//                 checked={this.state.permissions.includes(permission)}
//                 value={permission}
//                 onChange={this.handlePermissionChange}
//               />
//             </label>
//           </td>
//         ))}
//         <td>
//           <SickButton>Update</SickButton>
//         </td>
//       </tr>
//     );
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Permissions);

/***/ })

})
//# sourceMappingURL=permissions.js.08c46598a79a3e0deefb.hot-update.js.map