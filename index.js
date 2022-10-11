var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var NetInterfacesOriginal = /** @class */ (function (_super) {
    __extends(NetInterfacesOriginal, _super);
    function NetInterfacesOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    
    NetInterfacesOriginal.prototype.getInfo = function () { return cordova(this, "getInfo", {}, arguments); };
    NetInterfacesOriginal.pluginName = "NetInterfaces";
    NetInterfacesOriginal.plugin = "https://github.com/vmartins/cordova-plugin-videoplayer.git";
    NetInterfacesOriginal.pluginRef = "NetInterfaces";
    NetInterfacesOriginal.repo = "https://github.com/vmartins/cordova-plugin-videoplayer";
    NetInterfacesOriginal.platforms = ["Android"];
    return NetInterfacesOriginal;
}(AwesomeCordovaNativePlugin));
var NetInterfaces = new NetInterfacesOriginal();
export { NetInterfaces };
