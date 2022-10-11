import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name NetInterfaces
 * @description
 * Network interface information plugin for Cordova that supports Android.
 *
 * Requires Cordova plugin: `com.vmartins.cordova.netinterfaces`. For more info, please see the [NetInterfaces plugin docs](https://github.com/vmartins/cordova-plugin-netinterfaces).
 * @usage
 * ```typescript
 * import { NetInterfaces } from 'awesome-cordova-plugins-netinterfaces';
 *
 *
 * // Interfaces informations
 * NetInterfaces.getInfo().then((info) => {
 *  console.log('NetInterfaces', info);
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 */
export declare class NetInterfacesOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Get interfaces informations
     * 
     * @returns {Promise<any>} Promise with info
     */
    getInfo(): Promise<any>;
}

export declare const NetInterfaces: NetInterfacesOriginal;