import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from "./chunk-W3QJH22E.js";
import "./chunk-KDELXRCQ.js";
import "./chunk-JNTXRFY7.js";
import "./chunk-BZT7CPK2.js";
import {
  LoadingBarModule,
  LoadingBarService
} from "./chunk-66NHNVKH.js";
import "./chunk-QO5QTC6Z.js";
import "./chunk-VBVI2GDO.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-TSUABY5I.js";
import "./chunk-5KXDAEEK.js";
import "./chunk-VMI3K6GE.js";
import "./chunk-WD6C567C.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@ngx-loading-bar/router/fesm2020/ngx-loading-bar-router.mjs
var LoadingBarRouterModule = class {
  constructor(router, loader) {
    const ref = loader.useRef("router");
    router.events.subscribe((event) => {
      const navState = this.getCurrentNavigationState(router);
      if (navState && navState.ignoreLoadingBar) {
        return;
      }
      if (event instanceof NavigationStart) {
        ref.start();
      }
      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        ref.complete();
      }
    });
  }
  getCurrentNavigationState(router) {
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
      return currentNavigation.extras.state;
    }
    return {};
  }
};
LoadingBarRouterModule.ɵfac = function LoadingBarRouterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadingBarRouterModule)(ɵɵinject(Router), ɵɵinject(LoadingBarService));
};
LoadingBarRouterModule.ɵmod = ɵɵdefineNgModule({
  type: LoadingBarRouterModule,
  imports: [RouterModule, LoadingBarModule],
  exports: [RouterModule, LoadingBarModule]
});
LoadingBarRouterModule.ɵinj = ɵɵdefineInjector({
  imports: [[RouterModule, LoadingBarModule], RouterModule, LoadingBarModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarRouterModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: LoadingBarService
    }];
  }, null);
})();
export {
  LoadingBarRouterModule
};
//# sourceMappingURL=@ngx-loading-bar_router.js.map
