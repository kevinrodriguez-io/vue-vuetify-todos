/**
 * persistence.js
 * - This module is just a helper to save JSON objects into the local storage
 * @static @class
 * @author Kevin Rodríguez
 */
var LocalStoragePersistence = (function () {
  
  /**
   * Checks if the browser has localStorage capabilities
   * @return {boolean}
   */
  function isLocalStorageAvailable () {
    try {
        window.localStorage.setItem("__test", "test")
        window.localStorage.removeItem("__test")
    } catch (e) {
        return false
    } 
    return true
  }

  /**
   * Prompts the user to upgrade the browser
   */
  function requestBrowserUpdate () {
    alert('Please upgrade your browser!')
  }

  return {
    /**
     * Stores a given JSON data on the given key
     * @param {string} key The key to store the data in
     * @param {object} data The JSON object to store on that key
     */
    saveJsonObject: function (key, data) {
      if (isLocalStorageAvailable()) {
        window.localStorage.setItem(key, JSON.stringify(data))
      } else {
        requestBrowserUpdate()
      }
    },
    /**
     * Retrieves a json object from the localStorage
     * @param {string} key The key to retrieve it's JSON object from the storage
     * @return {object} An object if found, otherwise null
     */
    loadJsonObject: function (key) {
      if (isLocalStorageAvailable()) {
        return JSON.parse(window.localStorage.getItem(key))
      } else {
        requestBrowserUpdate()
      }
    }
  }
}())