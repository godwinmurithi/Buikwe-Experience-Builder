System.register(["jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/filter-feature-layer/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [selectedFeatures, setSelectedFeatures] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const onSelectionChange = (selection) => {
        setSelectedFeatures(selection);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        var _a, _b, _c;
        // Listen for selection changes in the connected widget
        (_c = (_b = (_a = props.widgetRuntimeStateProps) === null || _a === void 0 ? void 0 : _a.useSelection) === null || _b === void 0 ? void 0 : _b.useSelections) === null || _c === void 0 ? void 0 : _c.call(_b, [props.config.useSelectionId], onSelectionChange);
    }, []);
    function removeCircularReferences(obj) {
        // Keep track of objects that have already been visited to avoid infinite recursion
        const visited = new WeakSet();
        function removeCircular(obj) {
            if (typeof obj === 'object' && obj !== null) {
                if (visited.has(obj)) {
                    // If the object has already been visited, replace it with a placeholder value
                    return '[Circular Reference]';
                }
                visited.add(obj);
                if (Array.isArray(obj)) {
                    // If the object is an array, remove circular references from each element
                    return obj.map((item) => removeCircular(item));
                }
                else {
                    // If the object is an object, remove circular references from each property value
                    const result = {};
                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            result[key] = removeCircular(obj[key]);
                        }
                    }
                    return result;
                }
            }
            else {
                // If the object is not an object, return it as is
                return obj;
            }
        }
        return removeCircular(obj);
    }
    const onLifeConnectClickHandler = () => __awaiter(this, void 0, void 0, function* () {
        if (props.useDataSources.length > 0) {
            // First get the DataSourceManager instance
            const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            // Get the data source using useDataSource.dataSourceId
            const useDataSource = props.useDataSources[0];
            const ds = dsManager.getDataSource(useDataSource.dataSourceId);
            // Build the queryParams, with the configured filterField and the value
            // that has been typed into the TextInput by the user
            const queryParams = {
                where: `${props.config.filterField} LIKE '%${query}%'`
            };
            // If there are selected features, add a where clause to filter by the selected features
            if (selectedFeatures.length > 0) {
                const selectedIds = selectedFeatures.map((feature) => feature.attributes[useDataSource.objectIdField]);
                const objectIdFieldName = useDataSource.objectIdField;
                queryParams.where += ` AND ${objectIdFieldName} IN (${selectedIds.join(',')})`;
            }
            // Query the data source using queryFeatures function and the queryParams.
            const features = yield ds.query(queryParams);
            // Remove any circular references from the features
            const cleanedFeatures = removeCircularReferences(features);
            // Convert the cleaned features to JSON string
            const json = JSON.stringify(cleanedFeatures);
            console.log(json);
            // Send the JSON data to the API using fetch and a POST request
            try {
                const response = yield fetch('https://lifehealth.life/api/bip-callback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: json
                });
                if (response.ok) {
                    setTimeout(function () {
                        window.open('https://lifehealth.life/meetings', '_blank');
                    }, 5000);
                }
                console.log('Data sent to API successfully');
            }
            catch (error) {
                console.error(error);
            }
        }
    });
    const buttonStyle = {
        backgroundColor: '#0074d9',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-out',
    };
    const buttonHoverStyle = {
        backgroundColor: '#fff',
        color: '#0074d9',
    };
    // By default, if we have no filterField selected, show a placeholder:
    // let mainContent = <WidgetPlaceholder message={defaultMessages.chooseAttribute} />;
    // if (props.config.filterField) {
    //   // If fieldField is selected, show the Text Input box to allow filtering.
    //   const placeholderText = `${defaultMessages.filterLayer} on ${props.config.filterField} attribute`
    //   mainContent = <p>
    //     <TextInput placeholder={placeholderText} onChange={(e) => { textInputChangeHandler(e); }} />
    //   </p>;
    // };
    return (react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", { className: "widget-get-map-coordinates jimu-widget p-2" },
        react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("button", { style: buttonStyle, onClick: onLifeConnectClickHandler, onMouseEnter: (e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; e.target.style.color = buttonHoverStyle.color; }, onMouseLeave: (e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; e.target.style.color = buttonStyle.color; }, onMouseDown: (e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; e.target.style.color = buttonHoverStyle.color; }, onMouseUp: (e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; e.target.style.color = buttonStyle.color; } }, "Life Connect"))));
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItZmVhdHVyZS1sYXllci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndEO0FBRy9EO0FBR2xCO0FBRTFCLDZCQUFlLG9DQUFVLEtBQStCO0lBRXRELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRywrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTdELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUFnQixFQUFFLEVBQUU7UUFDN0MsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdEQUFTLENBQUMsR0FBRyxFQUFFOztRQUNiLHVEQUF1RDtRQUN2RCx1QkFBSyxDQUFDLHVCQUF1QiwwQ0FBRSxZQUFZLDBDQUFFLGFBQWEsbURBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDakgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyx3QkFBd0IsQ0FBQyxHQUFRO1FBQ3hDLG1GQUFtRjtRQUNuRixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlCLFNBQVMsY0FBYyxDQUFDLEdBQVE7WUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDM0MsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNwQiw4RUFBOEU7b0JBQzlFLE9BQU8sc0JBQXNCLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEIsMEVBQTBFO29CQUMxRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxrRkFBa0Y7b0JBQ2xGLE1BQU0sTUFBTSxHQUF3QixFQUFFLENBQUM7b0JBQ3ZDLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO3dCQUNyQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3hDO3FCQUNGO29CQUNELE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7aUJBQU07Z0JBQ0wsa0RBQWtEO2dCQUNsRCxPQUFPLEdBQUcsQ0FBQzthQUNaO1FBQ0gsQ0FBQztRQUVELE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLHlCQUF5QixHQUFHLEdBQVMsRUFBRTtRQUMzQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQywyQ0FBMkM7WUFDM0MsTUFBTSxTQUFTLEdBQUcsb0VBQTZCLEVBQUUsQ0FBQztZQUVsRCx1REFBdUQ7WUFDdkQsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQTJCLENBQUM7WUFFekYsdUVBQXVFO1lBQ3ZFLHFEQUFxRDtZQUNyRCxNQUFNLFdBQVcsR0FBbUI7Z0JBQ2xDLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxXQUFXLEtBQUssSUFBSTthQUN2RCxDQUFDO1lBRUYsd0ZBQXdGO1lBQ3hGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN2RyxNQUFNLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7Z0JBQ3RELFdBQVcsQ0FBQyxLQUFLLElBQUksUUFBUSxpQkFBaUIsUUFBUSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDaEY7WUFFRCwwRUFBMEU7WUFDMUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTdDLG1EQUFtRDtZQUNuRCxNQUFNLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzRCw4Q0FBOEM7WUFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUVqQiwrREFBK0Q7WUFDL0QsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsRUFBRTtvQkFDdkUsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7cUJBQ25DO29CQUNELElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztnQkFFSCxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7b0JBQ2YsVUFBVSxDQUFDO3dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzVELENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ1Q7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQzlDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQyxFQUFDO0lBR0YsTUFBTSxXQUFXLEdBQUc7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsVUFBVTtRQUNuQixNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxLQUFLO1FBQ25CLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxnQ0FBZ0M7S0FDN0MsQ0FBQztJQUVGLE1BQU0sZ0JBQWdCLEdBQUc7UUFDdkIsZUFBZSxFQUFFLE1BQU07UUFDdkIsS0FBSyxFQUFFLFNBQVM7S0FDakIsQ0FBQztJQUVGLHNFQUFzRTtJQUN0RSxxRkFBcUY7SUFFckYsa0NBQWtDO0lBQ2xDLDhFQUE4RTtJQUM5RSxzR0FBc0c7SUFDdEcsc0JBQXNCO0lBQ3RCLG1HQUFtRztJQUNuRyxVQUFVO0lBQ1YsS0FBSztJQUVMLE9BQU8sQ0FDTCxxRUFBSyxTQUFTLEVBQUMsNENBQTRDO1FBRXpEO1lBQUssd0VBQVEsS0FBSyxFQUFFLFdBQVcsRUFDL0IsT0FBTyxFQUFFLHlCQUF5QixFQUNsQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUMxSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2hJLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3pJLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQ3ZHLENBQ3RCLENBQ0ksQ0FDUCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlci1mZWF0dXJlLWxheWVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IEFsbFdpZGdldFByb3BzLCBqc3gsIEZlYXR1cmVMYXllckRhdGFTb3VyY2UsIFNxbFF1ZXJ5UGFyYW1zLCBEYXRhU291cmNlTWFuYWdlciB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgV2lkZ2V0UGxhY2Vob2xkZXIgfSBmcm9tICdqaW11LXVpJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcblxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkRmVhdHVyZXMsIHNldFNlbGVjdGVkRmVhdHVyZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKHNlbGVjdGlvbjogYW55W10pID0+IHtcbiAgICBzZXRTZWxlY3RlZEZlYXR1cmVzKHNlbGVjdGlvbik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExpc3RlbiBmb3Igc2VsZWN0aW9uIGNoYW5nZXMgaW4gdGhlIGNvbm5lY3RlZCB3aWRnZXRcbiAgICBwcm9wcy53aWRnZXRSdW50aW1lU3RhdGVQcm9wcz8udXNlU2VsZWN0aW9uPy51c2VTZWxlY3Rpb25zPy4oW3Byb3BzLmNvbmZpZy51c2VTZWxlY3Rpb25JZF0sIG9uU2VsZWN0aW9uQ2hhbmdlKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNpcmN1bGFyUmVmZXJlbmNlcyhvYmo6IGFueSkge1xuICAgIC8vIEtlZXAgdHJhY2sgb2Ygb2JqZWN0cyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIHZpc2l0ZWQgdG8gYXZvaWQgaW5maW5pdGUgcmVjdXJzaW9uXG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBXZWFrU2V0KCk7XG4gIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUNpcmN1bGFyKG9iajogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICAgIGlmICh2aXNpdGVkLmhhcyhvYmopKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIG9iamVjdCBoYXMgYWxyZWFkeSBiZWVuIHZpc2l0ZWQsIHJlcGxhY2UgaXQgd2l0aCBhIHBsYWNlaG9sZGVyIHZhbHVlXG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgUmVmZXJlbmNlXSc7XG4gICAgICAgIH1cbiAgICAgICAgdmlzaXRlZC5hZGQob2JqKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXksIHJlbW92ZSBjaXJjdWxhciByZWZlcmVuY2VzIGZyb20gZWFjaCBlbGVtZW50XG4gICAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IHJlbW92ZUNpcmN1bGFyKGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIGFuIG9iamVjdCwgcmVtb3ZlIGNpcmN1bGFyIHJlZmVyZW5jZXMgZnJvbSBlYWNoIHByb3BlcnR5IHZhbHVlXG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSByZW1vdmVDaXJjdWxhcihvYmpba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBvYmplY3QgaXMgbm90IGFuIG9iamVjdCwgcmV0dXJuIGl0IGFzIGlzXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gcmVtb3ZlQ2lyY3VsYXIob2JqKTtcbiAgfVxuXG4gIGNvbnN0IG9uTGlmZUNvbm5lY3RDbGlja0hhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZpcnN0IGdldCB0aGUgRGF0YVNvdXJjZU1hbmFnZXIgaW5zdGFuY2VcbiAgICAgIGNvbnN0IGRzTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gIFxuICAgICAgLy8gR2V0IHRoZSBkYXRhIHNvdXJjZSB1c2luZyB1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZFxuICAgICAgY29uc3QgdXNlRGF0YVNvdXJjZSA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdO1xuICAgICAgY29uc3QgZHMgPSBkc01hbmFnZXIuZ2V0RGF0YVNvdXJjZSh1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZTtcbiAgXG4gICAgICAvLyBCdWlsZCB0aGUgcXVlcnlQYXJhbXMsIHdpdGggdGhlIGNvbmZpZ3VyZWQgZmlsdGVyRmllbGQgYW5kIHRoZSB2YWx1ZVxuICAgICAgLy8gdGhhdCBoYXMgYmVlbiB0eXBlZCBpbnRvIHRoZSBUZXh0SW5wdXQgYnkgdGhlIHVzZXJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBTcWxRdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgd2hlcmU6IGAke3Byb3BzLmNvbmZpZy5maWx0ZXJGaWVsZH0gTElLRSAnJSR7cXVlcnl9JSdgXG4gICAgICB9O1xuICBcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBzZWxlY3RlZCBmZWF0dXJlcywgYWRkIGEgd2hlcmUgY2xhdXNlIHRvIGZpbHRlciBieSB0aGUgc2VsZWN0ZWQgZmVhdHVyZXNcbiAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBzZWxlY3RlZEZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW3VzZURhdGFTb3VyY2Uub2JqZWN0SWRGaWVsZF0pO1xuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkTmFtZSA9IHVzZURhdGFTb3VyY2Uub2JqZWN0SWRGaWVsZDtcbiAgICAgICAgcXVlcnlQYXJhbXMud2hlcmUgKz0gYCBBTkQgJHtvYmplY3RJZEZpZWxkTmFtZX0gSU4gKCR7c2VsZWN0ZWRJZHMuam9pbignLCcpfSlgO1xuICAgICAgfVxuXG4gICAgICAvLyBRdWVyeSB0aGUgZGF0YSBzb3VyY2UgdXNpbmcgcXVlcnlGZWF0dXJlcyBmdW5jdGlvbiBhbmQgdGhlIHF1ZXJ5UGFyYW1zLlxuICAgICAgY29uc3QgZmVhdHVyZXMgPSBhd2FpdCBkcy5xdWVyeShxdWVyeVBhcmFtcyk7XG4gIFxuICAgICAgLy8gUmVtb3ZlIGFueSBjaXJjdWxhciByZWZlcmVuY2VzIGZyb20gdGhlIGZlYXR1cmVzXG4gICAgICBjb25zdCBjbGVhbmVkRmVhdHVyZXMgPSByZW1vdmVDaXJjdWxhclJlZmVyZW5jZXMoZmVhdHVyZXMpO1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSBjbGVhbmVkIGZlYXR1cmVzIHRvIEpTT04gc3RyaW5nXG4gICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoY2xlYW5lZEZlYXR1cmVzKTtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICBcbiAgICAgIC8vIFNlbmQgdGhlIEpTT04gZGF0YSB0byB0aGUgQVBJIHVzaW5nIGZldGNoIGFuZCBhIFBPU1QgcmVxdWVzdFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9saWZlaGVhbHRoLmxpZmUvYXBpL2JpcC1jYWxsYmFjaycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBqc29uXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vbGlmZWhlYWx0aC5saWZlL21lZXRpbmdzJywgJ19ibGFuaycpO1xuICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgc2VudCB0byBBUEkgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIFxuXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDc0ZDknLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1vdXQnLFxuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbkhvdmVyU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgY29sb3I6ICcjMDA3NGQ5JyxcbiAgfTtcbiAgXG4gIC8vIEJ5IGRlZmF1bHQsIGlmIHdlIGhhdmUgbm8gZmlsdGVyRmllbGQgc2VsZWN0ZWQsIHNob3cgYSBwbGFjZWhvbGRlcjpcbiAgLy8gbGV0IG1haW5Db250ZW50ID0gPFdpZGdldFBsYWNlaG9sZGVyIG1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5jaG9vc2VBdHRyaWJ1dGV9IC8+O1xuXG4gIC8vIGlmIChwcm9wcy5jb25maWcuZmlsdGVyRmllbGQpIHtcbiAgLy8gICAvLyBJZiBmaWVsZEZpZWxkIGlzIHNlbGVjdGVkLCBzaG93IHRoZSBUZXh0IElucHV0IGJveCB0byBhbGxvdyBmaWx0ZXJpbmcuXG4gIC8vICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gYCR7ZGVmYXVsdE1lc3NhZ2VzLmZpbHRlckxheWVyfSBvbiAke3Byb3BzLmNvbmZpZy5maWx0ZXJGaWVsZH0gYXR0cmlidXRlYFxuICAvLyAgIG1haW5Db250ZW50ID0gPHA+XG4gIC8vICAgICA8VGV4dElucHV0IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlclRleHR9IG9uQ2hhbmdlPXsoZSkgPT4geyB0ZXh0SW5wdXRDaGFuZ2VIYW5kbGVyKGUpOyB9fSAvPlxuICAvLyAgIDwvcD47XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1nZXQtbWFwLWNvb3JkaW5hdGVzIGppbXUtd2lkZ2V0IHAtMlwiPlxuICAgICAgey8qIHttYWluQ29udGVudH0gKi99XG4gICAgICA8ZGl2PjxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBcbiAgICAgIG9uQ2xpY2s9e29uTGlmZUNvbm5lY3RDbGlja0hhbmRsZXJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJ1dHRvbkhvdmVyU3R5bGUuYmFja2dyb3VuZENvbG9yOyBlLnRhcmdldC5zdHlsZS5jb2xvciA9IGJ1dHRvbkhvdmVyU3R5bGUuY29sb3I7IH19XG4gICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvcjsgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBidXR0b25TdHlsZS5jb2xvcjsgfX1cbiAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4geyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBidXR0b25Ib3ZlclN0eWxlLmJhY2tncm91bmRDb2xvcjsgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBidXR0b25Ib3ZlclN0eWxlLmNvbG9yOyB9fVxuICAgICAgb25Nb3VzZVVwPXsoZSkgPT4geyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBidXR0b25TdHlsZS5iYWNrZ3JvdW5kQ29sb3I7IGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gYnV0dG9uU3R5bGUuY29sb3I7IH19XG4gICAgICA+TGlmZSBDb25uZWN0PC9idXR0b24+XG48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=