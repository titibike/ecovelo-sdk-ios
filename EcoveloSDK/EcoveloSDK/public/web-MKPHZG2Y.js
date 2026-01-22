import {
  Encoding
} from "./chunk-NEYQRVBS.js";
import {
  WebPlugin,
  buildRequestInit
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/filesystem/dist/esm/web.js
function resolve(path) {
  const posix = path.split("/").filter((item) => item !== ".");
  const newPosix = [];
  posix.forEach((item) => {
    if (item === ".." && newPosix.length > 0 && newPosix[newPosix.length - 1] !== "..") {
      newPosix.pop();
    } else {
      newPosix.push(item);
    }
  });
  return newPosix.join("/");
}
function isPathParent(parent, children) {
  parent = resolve(parent);
  children = resolve(children);
  const pathsA = parent.split("/");
  const pathsB = children.split("/");
  return parent !== children && pathsA.every((value, index) => value === pathsB[index]);
}
var FilesystemWeb = class _FilesystemWeb extends WebPlugin {
  constructor() {
    super(...arguments);
    this.DB_VERSION = 1;
    this.DB_NAME = "Disc";
    this._writeCmds = ["add", "put", "delete"];
    this.downloadFile = (options) => __async(this, null, function* () {
      var _a, _b;
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const response = yield fetch(options.url, requestInit);
      let blob;
      if (!options.progress) blob = yield response.blob();
      else if (!(response === null || response === void 0 ? void 0 : response.body)) blob = new Blob();
      else {
        const reader = response.body.getReader();
        let bytes = 0;
        const chunks = [];
        const contentType = response.headers.get("content-type");
        const contentLength = parseInt(response.headers.get("content-length") || "0", 10);
        while (true) {
          const {
            done,
            value
          } = yield reader.read();
          if (done) break;
          chunks.push(value);
          bytes += (value === null || value === void 0 ? void 0 : value.length) || 0;
          const status = {
            url: options.url,
            bytes,
            contentLength
          };
          this.notifyListeners("progress", status);
        }
        const allChunks = new Uint8Array(bytes);
        let position = 0;
        for (const chunk of chunks) {
          if (typeof chunk === "undefined") continue;
          allChunks.set(chunk, position);
          position += chunk.length;
        }
        blob = new Blob([allChunks.buffer], {
          type: contentType || void 0
        });
      }
      const result = yield this.writeFile({
        path: options.path,
        directory: (_a = options.directory) !== null && _a !== void 0 ? _a : void 0,
        recursive: (_b = options.recursive) !== null && _b !== void 0 ? _b : false,
        data: blob
      });
      return {
        path: result.uri,
        blob
      };
    });
  }
  readFileInChunks(_options, _callback) {
    throw this.unavailable("Method not implemented.");
  }
  initDb() {
    return __async(this, null, function* () {
      if (this._db !== void 0) {
        return this._db;
      }
      if (!("indexedDB" in window)) {
        throw this.unavailable("This browser doesn't support IndexedDB");
      }
      return new Promise((resolve2, reject) => {
        const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
        request.onupgradeneeded = _FilesystemWeb.doUpgrade;
        request.onsuccess = () => {
          this._db = request.result;
          resolve2(request.result);
        };
        request.onerror = () => reject(request.error);
        request.onblocked = () => {
          console.warn("db blocked");
        };
      });
    });
  }
  static doUpgrade(event) {
    const eventTarget = event.target;
    const db = eventTarget.result;
    switch (event.oldVersion) {
      case 0:
      case 1:
      default: {
        if (db.objectStoreNames.contains("FileStorage")) {
          db.deleteObjectStore("FileStorage");
        }
        const store = db.createObjectStore("FileStorage", {
          keyPath: "path"
        });
        store.createIndex("by_folder", "folder");
      }
    }
  }
  dbRequest(cmd, args) {
    return __async(this, null, function* () {
      const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
      return this.initDb().then((conn) => {
        return new Promise((resolve2, reject) => {
          const tx = conn.transaction(["FileStorage"], readFlag);
          const store = tx.objectStore("FileStorage");
          const req = store[cmd](...args);
          req.onsuccess = () => resolve2(req.result);
          req.onerror = () => reject(req.error);
        });
      });
    });
  }
  dbIndexRequest(indexName, cmd, args) {
    return __async(this, null, function* () {
      const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
      return this.initDb().then((conn) => {
        return new Promise((resolve2, reject) => {
          const tx = conn.transaction(["FileStorage"], readFlag);
          const store = tx.objectStore("FileStorage");
          const index = store.index(indexName);
          const req = index[cmd](...args);
          req.onsuccess = () => resolve2(req.result);
          req.onerror = () => reject(req.error);
        });
      });
    });
  }
  getPath(directory, uriPath) {
    const cleanedUriPath = uriPath !== void 0 ? uriPath.replace(/^[/]+|[/]+$/g, "") : "";
    let fsPath = "";
    if (directory !== void 0) fsPath += "/" + directory;
    if (uriPath !== "") fsPath += "/" + cleanedUriPath;
    return fsPath;
  }
  clear() {
    return __async(this, null, function* () {
      const conn = yield this.initDb();
      const tx = conn.transaction(["FileStorage"], "readwrite");
      const store = tx.objectStore("FileStorage");
      store.clear();
    });
  }
  /**
   * Read a file from disk
   * @param options options for the file read
   * @return a promise that resolves with the read file data result
   */
  readFile(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      const entry = yield this.dbRequest("get", [path]);
      if (entry === void 0) throw Error("File does not exist.");
      return {
        data: entry.content ? entry.content : ""
      };
    });
  }
  /**
   * Write a file to disk in the specified location on device
   * @param options options for the file write
   * @return a promise that resolves with the file write result
   */
  writeFile(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      let data = options.data;
      const encoding = options.encoding;
      const doRecursive = options.recursive;
      const occupiedEntry = yield this.dbRequest("get", [path]);
      if (occupiedEntry && occupiedEntry.type === "directory") throw Error("The supplied path is a directory.");
      const parentPath = path.substr(0, path.lastIndexOf("/"));
      const parentEntry = yield this.dbRequest("get", [parentPath]);
      if (parentEntry === void 0) {
        const subDirIndex = parentPath.indexOf("/", 1);
        if (subDirIndex !== -1) {
          const parentArgPath = parentPath.substr(subDirIndex);
          yield this.mkdir({
            path: parentArgPath,
            directory: options.directory,
            recursive: doRecursive
          });
        }
      }
      if (!encoding && !(data instanceof Blob)) {
        data = data.indexOf(",") >= 0 ? data.split(",")[1] : data;
        if (!this.isBase64String(data)) throw Error("The supplied data is not valid base64 content.");
      }
      const now = Date.now();
      const pathObj = {
        path,
        folder: parentPath,
        type: "file",
        size: data instanceof Blob ? data.size : data.length,
        ctime: now,
        mtime: now,
        content: data
      };
      yield this.dbRequest("put", [pathObj]);
      return {
        uri: pathObj.path
      };
    });
  }
  /**
   * Append to a file on disk in the specified location on device
   * @param options options for the file append
   * @return a promise that resolves with the file write result
   */
  appendFile(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      let data = options.data;
      const encoding = options.encoding;
      const parentPath = path.substr(0, path.lastIndexOf("/"));
      const now = Date.now();
      let ctime = now;
      const occupiedEntry = yield this.dbRequest("get", [path]);
      if (occupiedEntry && occupiedEntry.type === "directory") throw Error("The supplied path is a directory.");
      const parentEntry = yield this.dbRequest("get", [parentPath]);
      if (parentEntry === void 0) {
        const subDirIndex = parentPath.indexOf("/", 1);
        if (subDirIndex !== -1) {
          const parentArgPath = parentPath.substr(subDirIndex);
          yield this.mkdir({
            path: parentArgPath,
            directory: options.directory,
            recursive: true
          });
        }
      }
      if (!encoding && !this.isBase64String(data)) throw Error("The supplied data is not valid base64 content.");
      if (occupiedEntry !== void 0) {
        if (occupiedEntry.content instanceof Blob) {
          throw Error("The occupied entry contains a Blob object which cannot be appended to.");
        }
        if (occupiedEntry.content !== void 0 && !encoding) {
          data = btoa(atob(occupiedEntry.content) + atob(data));
        } else {
          data = occupiedEntry.content + data;
        }
        ctime = occupiedEntry.ctime;
      }
      const pathObj = {
        path,
        folder: parentPath,
        type: "file",
        size: data.length,
        ctime,
        mtime: now,
        content: data
      };
      yield this.dbRequest("put", [pathObj]);
    });
  }
  /**
   * Delete a file from disk
   * @param options options for the file delete
   * @return a promise that resolves with the deleted file data result
   */
  deleteFile(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      const entry = yield this.dbRequest("get", [path]);
      if (entry === void 0) throw Error("File does not exist.");
      const entries = yield this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(path)]);
      if (entries.length !== 0) throw Error("Folder is not empty.");
      yield this.dbRequest("delete", [path]);
    });
  }
  /**
   * Create a directory.
   * @param options options for the mkdir
   * @return a promise that resolves with the mkdir result
   */
  mkdir(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      const doRecursive = options.recursive;
      const parentPath = path.substr(0, path.lastIndexOf("/"));
      const depth = (path.match(/\//g) || []).length;
      const parentEntry = yield this.dbRequest("get", [parentPath]);
      const occupiedEntry = yield this.dbRequest("get", [path]);
      if (depth === 1) throw Error("Cannot create Root directory");
      if (occupiedEntry !== void 0) throw Error("Current directory does already exist.");
      if (!doRecursive && depth !== 2 && parentEntry === void 0) throw Error("Parent directory must exist");
      if (doRecursive && depth !== 2 && parentEntry === void 0) {
        const parentArgPath = parentPath.substr(parentPath.indexOf("/", 1));
        yield this.mkdir({
          path: parentArgPath,
          directory: options.directory,
          recursive: doRecursive
        });
      }
      const now = Date.now();
      const pathObj = {
        path,
        folder: parentPath,
        type: "directory",
        size: 0,
        ctime: now,
        mtime: now
      };
      yield this.dbRequest("put", [pathObj]);
    });
  }
  /**
   * Remove a directory
   * @param options the options for the directory remove
   */
  rmdir(options) {
    return __async(this, null, function* () {
      const {
        path,
        directory,
        recursive
      } = options;
      const fullPath = this.getPath(directory, path);
      const entry = yield this.dbRequest("get", [fullPath]);
      if (entry === void 0) throw Error("Folder does not exist.");
      if (entry.type !== "directory") throw Error("Requested path is not a directory");
      const readDirResult = yield this.readdir({
        path,
        directory
      });
      if (readDirResult.files.length !== 0 && !recursive) throw Error("Folder is not empty");
      for (const entry2 of readDirResult.files) {
        const entryPath = `${path}/${entry2.name}`;
        const entryObj = yield this.stat({
          path: entryPath,
          directory
        });
        if (entryObj.type === "file") {
          yield this.deleteFile({
            path: entryPath,
            directory
          });
        } else {
          yield this.rmdir({
            path: entryPath,
            directory,
            recursive
          });
        }
      }
      yield this.dbRequest("delete", [fullPath]);
    });
  }
  /**
   * Return a list of files from the directory (not recursive)
   * @param options the options for the readdir operation
   * @return a promise that resolves with the readdir directory listing result
   */
  readdir(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      const entry = yield this.dbRequest("get", [path]);
      if (options.path !== "" && entry === void 0) throw Error("Folder does not exist.");
      const entries = yield this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(path)]);
      const files = yield Promise.all(entries.map((e) => __async(this, null, function* () {
        let subEntry = yield this.dbRequest("get", [e]);
        if (subEntry === void 0) {
          subEntry = yield this.dbRequest("get", [e + "/"]);
        }
        return {
          name: e.substring(path.length + 1),
          type: subEntry.type,
          size: subEntry.size,
          ctime: subEntry.ctime,
          mtime: subEntry.mtime,
          uri: subEntry.path
        };
      })));
      return {
        files
      };
    });
  }
  /**
   * Return full File URI for a path and directory
   * @param options the options for the stat operation
   * @return a promise that resolves with the file stat result
   */
  getUri(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      let entry = yield this.dbRequest("get", [path]);
      if (entry === void 0) {
        entry = yield this.dbRequest("get", [path + "/"]);
      }
      return {
        uri: (entry === null || entry === void 0 ? void 0 : entry.path) || path
      };
    });
  }
  /**
   * Return data about a file
   * @param options the options for the stat operation
   * @return a promise that resolves with the file stat result
   */
  stat(options) {
    return __async(this, null, function* () {
      const path = this.getPath(options.directory, options.path);
      let entry = yield this.dbRequest("get", [path]);
      if (entry === void 0) {
        entry = yield this.dbRequest("get", [path + "/"]);
      }
      if (entry === void 0) throw Error("Entry does not exist.");
      return {
        name: entry.path.substring(path.length + 1),
        type: entry.type,
        size: entry.size,
        ctime: entry.ctime,
        mtime: entry.mtime,
        uri: entry.path
      };
    });
  }
  /**
   * Rename a file or directory
   * @param options the options for the rename operation
   * @return a promise that resolves with the rename result
   */
  rename(options) {
    return __async(this, null, function* () {
      yield this._copy(options, true);
      return;
    });
  }
  /**
   * Copy a file or directory
   * @param options the options for the copy operation
   * @return a promise that resolves with the copy result
   */
  copy(options) {
    return __async(this, null, function* () {
      return this._copy(options, false);
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      return {
        publicStorage: "granted"
      };
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      return {
        publicStorage: "granted"
      };
    });
  }
  /**
   * Function that can perform a copy or a rename
   * @param options the options for the rename operation
   * @param doRename whether to perform a rename or copy operation
   * @return a promise that resolves with the result
   */
  _copy(options, doRename = false) {
    return __async(this, null, function* () {
      let {
        toDirectory
      } = options;
      const {
        to,
        from,
        directory: fromDirectory
      } = options;
      if (!to || !from) {
        throw Error("Both to and from must be provided");
      }
      if (!toDirectory) {
        toDirectory = fromDirectory;
      }
      const fromPath = this.getPath(fromDirectory, from);
      const toPath = this.getPath(toDirectory, to);
      if (fromPath === toPath) {
        return {
          uri: toPath
        };
      }
      if (isPathParent(fromPath, toPath)) {
        throw Error("To path cannot contain the from path");
      }
      let toObj;
      try {
        toObj = yield this.stat({
          path: to,
          directory: toDirectory
        });
      } catch (e) {
        const toPathComponents = to.split("/");
        toPathComponents.pop();
        const toPath2 = toPathComponents.join("/");
        if (toPathComponents.length > 0) {
          const toParentDirectory = yield this.stat({
            path: toPath2,
            directory: toDirectory
          });
          if (toParentDirectory.type !== "directory") {
            throw new Error("Parent directory of the to path is a file");
          }
        }
      }
      if (toObj && toObj.type === "directory") {
        throw new Error("Cannot overwrite a directory with a file");
      }
      const fromObj = yield this.stat({
        path: from,
        directory: fromDirectory
      });
      const updateTime = (path, ctime2, mtime) => __async(this, null, function* () {
        const fullPath = this.getPath(toDirectory, path);
        const entry = yield this.dbRequest("get", [fullPath]);
        entry.ctime = ctime2;
        entry.mtime = mtime;
        yield this.dbRequest("put", [entry]);
      });
      const ctime = fromObj.ctime ? fromObj.ctime : Date.now();
      switch (fromObj.type) {
        // The "from" object is a file
        case "file": {
          const file = yield this.readFile({
            path: from,
            directory: fromDirectory
          });
          if (doRename) {
            yield this.deleteFile({
              path: from,
              directory: fromDirectory
            });
          }
          let encoding;
          if (!(file.data instanceof Blob) && !this.isBase64String(file.data)) {
            encoding = Encoding.UTF8;
          }
          const writeResult = yield this.writeFile({
            path: to,
            directory: toDirectory,
            data: file.data,
            encoding
          });
          if (doRename) {
            yield updateTime(to, ctime, fromObj.mtime);
          }
          return writeResult;
        }
        case "directory": {
          if (toObj) {
            throw Error("Cannot move a directory over an existing object");
          }
          try {
            yield this.mkdir({
              path: to,
              directory: toDirectory,
              recursive: false
            });
            if (doRename) {
              yield updateTime(to, ctime, fromObj.mtime);
            }
          } catch (e) {
          }
          const contents = (yield this.readdir({
            path: from,
            directory: fromDirectory
          })).files;
          for (const filename of contents) {
            yield this._copy({
              from: `${from}/${filename.name}`,
              to: `${to}/${filename.name}`,
              directory: fromDirectory,
              toDirectory
            }, doRename);
          }
          if (doRename) {
            yield this.rmdir({
              path: from,
              directory: fromDirectory
            });
          }
        }
      }
      return {
        uri: toPath
      };
    });
  }
  isBase64String(str) {
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }
};
FilesystemWeb._debug = true;
export {
  FilesystemWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2ZpbGVzeXN0ZW0vZGlzdC9lc20vd2ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYlBsdWdpbiwgYnVpbGRSZXF1ZXN0SW5pdCB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBFbmNvZGluZyB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZnVuY3Rpb24gcmVzb2x2ZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l4ID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09ICcuJyk7XG4gIGNvbnN0IG5ld1Bvc2l4ID0gW107XG4gIHBvc2l4LmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09ICcuLicgJiYgbmV3UG9zaXgubGVuZ3RoID4gMCAmJiBuZXdQb3NpeFtuZXdQb3NpeC5sZW5ndGggLSAxXSAhPT0gJy4uJykge1xuICAgICAgbmV3UG9zaXgucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Bvc2l4LnB1c2goaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld1Bvc2l4LmpvaW4oJy8nKTtcbn1cbmZ1bmN0aW9uIGlzUGF0aFBhcmVudChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gIHBhcmVudCA9IHJlc29sdmUocGFyZW50KTtcbiAgY2hpbGRyZW4gPSByZXNvbHZlKGNoaWxkcmVuKTtcbiAgY29uc3QgcGF0aHNBID0gcGFyZW50LnNwbGl0KCcvJyk7XG4gIGNvbnN0IHBhdGhzQiA9IGNoaWxkcmVuLnNwbGl0KCcvJyk7XG4gIHJldHVybiBwYXJlbnQgIT09IGNoaWxkcmVuICYmIHBhdGhzQS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcGF0aHNCW2luZGV4XSk7XG59XG5leHBvcnQgY2xhc3MgRmlsZXN5c3RlbVdlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5EQl9WRVJTSU9OID0gMTtcbiAgICB0aGlzLkRCX05BTUUgPSAnRGlzYyc7XG4gICAgdGhpcy5fd3JpdGVDbWRzID0gWydhZGQnLCAncHV0JywgJ2RlbGV0ZSddO1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgYSBodHRwIHJlcXVlc3QgdG8gYSBzZXJ2ZXIgYW5kIGRvd25sb2FkcyB0aGUgZmlsZSB0byB0aGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgdGhlIEBjYXBhY2l0b3IvZmlsZS10cmFuc2ZlciBwbHVnaW4gaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgdGhlIGRvd25sb2FkIG9wZXJhdGlvblxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkIGZpbGUgcmVzdWx0XG4gICAgICovXG4gICAgdGhpcy5kb3dubG9hZEZpbGUgPSBhc3luYyBvcHRpb25zID0+IHtcbiAgICAgIHZhciBfYSwgX2I7XG4gICAgICBjb25zdCByZXF1ZXN0SW5pdCA9IGJ1aWxkUmVxdWVzdEluaXQob3B0aW9ucywgb3B0aW9ucy53ZWJGZXRjaEV4dHJhKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gob3B0aW9ucy51cmwsIHJlcXVlc3RJbml0KTtcbiAgICAgIGxldCBibG9iO1xuICAgICAgaWYgKCFvcHRpb25zLnByb2dyZXNzKSBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO2Vsc2UgaWYgKCEocmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmJvZHkpKSBibG9iID0gbmV3IEJsb2IoKTtlbHNlIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgbGV0IGJ5dGVzID0gMDtcbiAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gcGFyc2VJbnQocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJykgfHwgJzAnLCAxMCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuICAgICAgICAgIGNodW5rcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICBieXRlcyArPSAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmxlbmd0aCkgfHwgMDtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSB7XG4gICAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgICAgYnl0ZXMsXG4gICAgICAgICAgICBjb250ZW50TGVuZ3RoXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygncHJvZ3Jlc3MnLCBzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbENodW5rcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNodW5rID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICAgICAgYWxsQ2h1bmtzLnNldChjaHVuaywgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uICs9IGNodW5rLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBibG9iID0gbmV3IEJsb2IoW2FsbENodW5rcy5idWZmZXJdLCB7XG4gICAgICAgICAgdHlwZTogY29udGVudFR5cGUgfHwgdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy53cml0ZUZpbGUoe1xuICAgICAgICBwYXRoOiBvcHRpb25zLnBhdGgsXG4gICAgICAgIGRpcmVjdG9yeTogKF9hID0gb3B0aW9ucy5kaXJlY3RvcnkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVjdXJzaXZlOiAoX2IgPSBvcHRpb25zLnJlY3Vyc2l2ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UsXG4gICAgICAgIGRhdGE6IGJsb2JcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogcmVzdWx0LnVyaSxcbiAgICAgICAgYmxvYlxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIHJlYWRGaWxlSW5DaHVua3MoX29wdGlvbnMsIF9jYWxsYmFjaykge1xuICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cbiAgYXN5bmMgaW5pdERiKCkge1xuICAgIGlmICh0aGlzLl9kYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGI7XG4gICAgfVxuICAgIGlmICghKCdpbmRleGVkREInIGluIHdpbmRvdykpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEluZGV4ZWREQlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbih0aGlzLkRCX05BTUUsIHRoaXMuREJfVkVSU0lPTik7XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IEZpbGVzeXN0ZW1XZWIuZG9VcGdyYWRlO1xuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RiID0gcmVxdWVzdC5yZXN1bHQ7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIHJlcXVlc3Qub25ibG9ja2VkID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2RiIGJsb2NrZWQnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGRvVXBncmFkZShldmVudCkge1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGRiID0gZXZlbnRUYXJnZXQucmVzdWx0O1xuICAgIHN3aXRjaCAoZXZlbnQub2xkVmVyc2lvbikge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdGaWxlU3RvcmFnZScpKSB7XG4gICAgICAgICAgICBkYi5kZWxldGVPYmplY3RTdG9yZSgnRmlsZVN0b3JhZ2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnRmlsZVN0b3JhZ2UnLCB7XG4gICAgICAgICAgICBrZXlQYXRoOiAncGF0aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnYnlfZm9sZGVyJywgJ2ZvbGRlcicpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIGRiUmVxdWVzdChjbWQsIGFyZ3MpIHtcbiAgICBjb25zdCByZWFkRmxhZyA9IHRoaXMuX3dyaXRlQ21kcy5pbmRleE9mKGNtZCkgIT09IC0xID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknO1xuICAgIHJldHVybiB0aGlzLmluaXREYigpLnRoZW4oY29ubiA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0eCA9IGNvbm4udHJhbnNhY3Rpb24oWydGaWxlU3RvcmFnZSddLCByZWFkRmxhZyk7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ0ZpbGVTdG9yYWdlJyk7XG4gICAgICAgIGNvbnN0IHJlcSA9IHN0b3JlW2NtZF0oLi4uYXJncyk7XG4gICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZGJJbmRleFJlcXVlc3QoaW5kZXhOYW1lLCBjbWQsIGFyZ3MpIHtcbiAgICBjb25zdCByZWFkRmxhZyA9IHRoaXMuX3dyaXRlQ21kcy5pbmRleE9mKGNtZCkgIT09IC0xID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknO1xuICAgIHJldHVybiB0aGlzLmluaXREYigpLnRoZW4oY29ubiA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0eCA9IGNvbm4udHJhbnNhY3Rpb24oWydGaWxlU3RvcmFnZSddLCByZWFkRmxhZyk7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ0ZpbGVTdG9yYWdlJyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuaW5kZXgoaW5kZXhOYW1lKTtcbiAgICAgICAgY29uc3QgcmVxID0gaW5kZXhbY21kXSguLi5hcmdzKTtcbiAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRQYXRoKGRpcmVjdG9yeSwgdXJpUGF0aCkge1xuICAgIGNvbnN0IGNsZWFuZWRVcmlQYXRoID0gdXJpUGF0aCAhPT0gdW5kZWZpbmVkID8gdXJpUGF0aC5yZXBsYWNlKC9eWy9dK3xbL10rJC9nLCAnJykgOiAnJztcbiAgICBsZXQgZnNQYXRoID0gJyc7XG4gICAgaWYgKGRpcmVjdG9yeSAhPT0gdW5kZWZpbmVkKSBmc1BhdGggKz0gJy8nICsgZGlyZWN0b3J5O1xuICAgIGlmICh1cmlQYXRoICE9PSAnJykgZnNQYXRoICs9ICcvJyArIGNsZWFuZWRVcmlQYXRoO1xuICAgIHJldHVybiBmc1BhdGg7XG4gIH1cbiAgYXN5bmMgY2xlYXIoKSB7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IHRoaXMuaW5pdERiKCk7XG4gICAgY29uc3QgdHggPSBjb25uLnRyYW5zYWN0aW9uKFsnRmlsZVN0b3JhZ2UnXSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ0ZpbGVTdG9yYWdlJyk7XG4gICAgc3RvcmUuY2xlYXIoKTtcbiAgfVxuICAvKipcbiAgICogUmVhZCBhIGZpbGUgZnJvbSBkaXNrXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBmaWxlIHJlYWRcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZWFkIGZpbGUgZGF0YSByZXN1bHRcbiAgICovXG4gIGFzeW5jIHJlYWRGaWxlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgIC8vIGNvbnN0IGVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZztcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aF0pO1xuICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZW50cnkuY29udGVudCA/IGVudHJ5LmNvbnRlbnQgOiAnJ1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdyaXRlIGEgZmlsZSB0byBkaXNrIGluIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gb24gZGV2aWNlXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBmaWxlIHdyaXRlXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSB3cml0ZSByZXN1bHRcbiAgICovXG4gIGFzeW5jIHdyaXRlRmlsZShvcHRpb25zKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aChvcHRpb25zLmRpcmVjdG9yeSwgb3B0aW9ucy5wYXRoKTtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICBjb25zdCBlbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gICAgY29uc3QgZG9SZWN1cnNpdmUgPSBvcHRpb25zLnJlY3Vyc2l2ZTtcbiAgICBjb25zdCBvY2N1cGllZEVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoXSk7XG4gICAgaWYgKG9jY3VwaWVkRW50cnkgJiYgb2NjdXBpZWRFbnRyeS50eXBlID09PSAnZGlyZWN0b3J5JykgdGhyb3cgRXJyb3IoJ1RoZSBzdXBwbGllZCBwYXRoIGlzIGEgZGlyZWN0b3J5LicpO1xuICAgIGNvbnN0IHBhcmVudFBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKCcvJykpO1xuICAgIGNvbnN0IHBhcmVudEVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXJlbnRQYXRoXSk7XG4gICAgaWYgKHBhcmVudEVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHN1YkRpckluZGV4ID0gcGFyZW50UGF0aC5pbmRleE9mKCcvJywgMSk7XG4gICAgICBpZiAoc3ViRGlySW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudEFyZ1BhdGggPSBwYXJlbnRQYXRoLnN1YnN0cihzdWJEaXJJbmRleCk7XG4gICAgICAgIGF3YWl0IHRoaXMubWtkaXIoe1xuICAgICAgICAgIHBhdGg6IHBhcmVudEFyZ1BhdGgsXG4gICAgICAgICAgZGlyZWN0b3J5OiBvcHRpb25zLmRpcmVjdG9yeSxcbiAgICAgICAgICByZWN1cnNpdmU6IGRvUmVjdXJzaXZlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWVuY29kaW5nICYmICEoZGF0YSBpbnN0YW5jZW9mIEJsb2IpKSB7XG4gICAgICBkYXRhID0gZGF0YS5pbmRleE9mKCcsJykgPj0gMCA/IGRhdGEuc3BsaXQoJywnKVsxXSA6IGRhdGE7XG4gICAgICBpZiAoIXRoaXMuaXNCYXNlNjRTdHJpbmcoZGF0YSkpIHRocm93IEVycm9yKCdUaGUgc3VwcGxpZWQgZGF0YSBpcyBub3QgdmFsaWQgYmFzZTY0IGNvbnRlbnQuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgcGF0aE9iaiA9IHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBmb2xkZXI6IHBhcmVudFBhdGgsXG4gICAgICB0eXBlOiAnZmlsZScsXG4gICAgICBzaXplOiBkYXRhIGluc3RhbmNlb2YgQmxvYiA/IGRhdGEuc2l6ZSA6IGRhdGEubGVuZ3RoLFxuICAgICAgY3RpbWU6IG5vdyxcbiAgICAgIG10aW1lOiBub3csXG4gICAgICBjb250ZW50OiBkYXRhXG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLmRiUmVxdWVzdCgncHV0JywgW3BhdGhPYmpdKTtcbiAgICByZXR1cm4ge1xuICAgICAgdXJpOiBwYXRoT2JqLnBhdGhcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBBcHBlbmQgdG8gYSBmaWxlIG9uIGRpc2sgaW4gdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBvbiBkZXZpY2VcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBmb3IgdGhlIGZpbGUgYXBwZW5kXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSB3cml0ZSByZXN1bHRcbiAgICovXG4gIGFzeW5jIGFwcGVuZEZpbGUob3B0aW9ucykge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgob3B0aW9ucy5kaXJlY3RvcnksIG9wdGlvbnMucGF0aCk7XG4gICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgY29uc3QgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICAgIGNvbnN0IHBhcmVudFBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKCcvJykpO1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgbGV0IGN0aW1lID0gbm93O1xuICAgIGNvbnN0IG9jY3VwaWVkRW50cnkgPSBhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKTtcbiAgICBpZiAob2NjdXBpZWRFbnRyeSAmJiBvY2N1cGllZEVudHJ5LnR5cGUgPT09ICdkaXJlY3RvcnknKSB0aHJvdyBFcnJvcignVGhlIHN1cHBsaWVkIHBhdGggaXMgYSBkaXJlY3RvcnkuJyk7XG4gICAgY29uc3QgcGFyZW50RW50cnkgPSBhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhcmVudFBhdGhdKTtcbiAgICBpZiAocGFyZW50RW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc3ViRGlySW5kZXggPSBwYXJlbnRQYXRoLmluZGV4T2YoJy8nLCAxKTtcbiAgICAgIGlmIChzdWJEaXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgcGFyZW50QXJnUGF0aCA9IHBhcmVudFBhdGguc3Vic3RyKHN1YkRpckluZGV4KTtcbiAgICAgICAgYXdhaXQgdGhpcy5ta2Rpcih7XG4gICAgICAgICAgcGF0aDogcGFyZW50QXJnUGF0aCxcbiAgICAgICAgICBkaXJlY3Rvcnk6IG9wdGlvbnMuZGlyZWN0b3J5LFxuICAgICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFlbmNvZGluZyAmJiAhdGhpcy5pc0Jhc2U2NFN0cmluZyhkYXRhKSkgdGhyb3cgRXJyb3IoJ1RoZSBzdXBwbGllZCBkYXRhIGlzIG5vdCB2YWxpZCBiYXNlNjQgY29udGVudC4nKTtcbiAgICBpZiAob2NjdXBpZWRFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob2NjdXBpZWRFbnRyeS5jb250ZW50IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICB0aHJvdyBFcnJvcignVGhlIG9jY3VwaWVkIGVudHJ5IGNvbnRhaW5zIGEgQmxvYiBvYmplY3Qgd2hpY2ggY2Fubm90IGJlIGFwcGVuZGVkIHRvLicpO1xuICAgICAgfVxuICAgICAgaWYgKG9jY3VwaWVkRW50cnkuY29udGVudCAhPT0gdW5kZWZpbmVkICYmICFlbmNvZGluZykge1xuICAgICAgICBkYXRhID0gYnRvYShhdG9iKG9jY3VwaWVkRW50cnkuY29udGVudCkgKyBhdG9iKGRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBvY2N1cGllZEVudHJ5LmNvbnRlbnQgKyBkYXRhO1xuICAgICAgfVxuICAgICAgY3RpbWUgPSBvY2N1cGllZEVudHJ5LmN0aW1lO1xuICAgIH1cbiAgICBjb25zdCBwYXRoT2JqID0ge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGZvbGRlcjogcGFyZW50UGF0aCxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHNpemU6IGRhdGEubGVuZ3RoLFxuICAgICAgY3RpbWU6IGN0aW1lLFxuICAgICAgbXRpbWU6IG5vdyxcbiAgICAgIGNvbnRlbnQ6IGRhdGFcbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdwdXQnLCBbcGF0aE9ial0pO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBmaWxlIGZyb20gZGlza1xuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIGZvciB0aGUgZmlsZSBkZWxldGVcbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkZWxldGVkIGZpbGUgZGF0YSByZXN1bHRcbiAgICovXG4gIGFzeW5jIGRlbGV0ZUZpbGUob3B0aW9ucykge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgob3B0aW9ucy5kaXJlY3RvcnksIG9wdGlvbnMucGF0aCk7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKTtcbiAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgdGhyb3cgRXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXMuZGJJbmRleFJlcXVlc3QoJ2J5X2ZvbGRlcicsICdnZXRBbGxLZXlzJywgW0lEQktleVJhbmdlLm9ubHkocGF0aCldKTtcbiAgICBpZiAoZW50cmllcy5sZW5ndGggIT09IDApIHRocm93IEVycm9yKCdGb2xkZXIgaXMgbm90IGVtcHR5LicpO1xuICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdkZWxldGUnLCBbcGF0aF0pO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBta2RpclxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG1rZGlyIHJlc3VsdFxuICAgKi9cbiAgYXN5bmMgbWtkaXIob3B0aW9ucykge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgob3B0aW9ucy5kaXJlY3RvcnksIG9wdGlvbnMucGF0aCk7XG4gICAgY29uc3QgZG9SZWN1cnNpdmUgPSBvcHRpb25zLnJlY3Vyc2l2ZTtcbiAgICBjb25zdCBwYXJlbnRQYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICBjb25zdCBkZXB0aCA9IChwYXRoLm1hdGNoKC9cXC8vZykgfHwgW10pLmxlbmd0aDtcbiAgICBjb25zdCBwYXJlbnRFbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGFyZW50UGF0aF0pO1xuICAgIGNvbnN0IG9jY3VwaWVkRW50cnkgPSBhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKTtcbiAgICBpZiAoZGVwdGggPT09IDEpIHRocm93IEVycm9yKCdDYW5ub3QgY3JlYXRlIFJvb3QgZGlyZWN0b3J5Jyk7XG4gICAgaWYgKG9jY3VwaWVkRW50cnkgIT09IHVuZGVmaW5lZCkgdGhyb3cgRXJyb3IoJ0N1cnJlbnQgZGlyZWN0b3J5IGRvZXMgYWxyZWFkeSBleGlzdC4nKTtcbiAgICBpZiAoIWRvUmVjdXJzaXZlICYmIGRlcHRoICE9PSAyICYmIHBhcmVudEVudHJ5ID09PSB1bmRlZmluZWQpIHRocm93IEVycm9yKCdQYXJlbnQgZGlyZWN0b3J5IG11c3QgZXhpc3QnKTtcbiAgICBpZiAoZG9SZWN1cnNpdmUgJiYgZGVwdGggIT09IDIgJiYgcGFyZW50RW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcGFyZW50QXJnUGF0aCA9IHBhcmVudFBhdGguc3Vic3RyKHBhcmVudFBhdGguaW5kZXhPZignLycsIDEpKTtcbiAgICAgIGF3YWl0IHRoaXMubWtkaXIoe1xuICAgICAgICBwYXRoOiBwYXJlbnRBcmdQYXRoLFxuICAgICAgICBkaXJlY3Rvcnk6IG9wdGlvbnMuZGlyZWN0b3J5LFxuICAgICAgICByZWN1cnNpdmU6IGRvUmVjdXJzaXZlXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBwYXRoT2JqID0ge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGZvbGRlcjogcGFyZW50UGF0aCxcbiAgICAgIHR5cGU6ICdkaXJlY3RvcnknLFxuICAgICAgc2l6ZTogMCxcbiAgICAgIGN0aW1lOiBub3csXG4gICAgICBtdGltZTogbm93XG4gICAgfTtcbiAgICBhd2FpdCB0aGlzLmRiUmVxdWVzdCgncHV0JywgW3BhdGhPYmpdKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGEgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgZGlyZWN0b3J5IHJlbW92ZVxuICAgKi9cbiAgYXN5bmMgcm1kaXIob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGgsXG4gICAgICBkaXJlY3RvcnksXG4gICAgICByZWN1cnNpdmVcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBmdWxsUGF0aCA9IHRoaXMuZ2V0UGF0aChkaXJlY3RvcnksIHBhdGgpO1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtmdWxsUGF0aF0pO1xuICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBFcnJvcignRm9sZGVyIGRvZXMgbm90IGV4aXN0LicpO1xuICAgIGlmIChlbnRyeS50eXBlICE9PSAnZGlyZWN0b3J5JykgdGhyb3cgRXJyb3IoJ1JlcXVlc3RlZCBwYXRoIGlzIG5vdCBhIGRpcmVjdG9yeScpO1xuICAgIGNvbnN0IHJlYWREaXJSZXN1bHQgPSBhd2FpdCB0aGlzLnJlYWRkaXIoe1xuICAgICAgcGF0aCxcbiAgICAgIGRpcmVjdG9yeVxuICAgIH0pO1xuICAgIGlmIChyZWFkRGlyUmVzdWx0LmZpbGVzLmxlbmd0aCAhPT0gMCAmJiAhcmVjdXJzaXZlKSB0aHJvdyBFcnJvcignRm9sZGVyIGlzIG5vdCBlbXB0eScpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmVhZERpclJlc3VsdC5maWxlcykge1xuICAgICAgY29uc3QgZW50cnlQYXRoID0gYCR7cGF0aH0vJHtlbnRyeS5uYW1lfWA7XG4gICAgICBjb25zdCBlbnRyeU9iaiA9IGF3YWl0IHRoaXMuc3RhdCh7XG4gICAgICAgIHBhdGg6IGVudHJ5UGF0aCxcbiAgICAgICAgZGlyZWN0b3J5XG4gICAgICB9KTtcbiAgICAgIGlmIChlbnRyeU9iai50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVGaWxlKHtcbiAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgZGlyZWN0b3J5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5ybWRpcih7XG4gICAgICAgICAgcGF0aDogZW50cnlQYXRoLFxuICAgICAgICAgIGRpcmVjdG9yeSxcbiAgICAgICAgICByZWN1cnNpdmVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdkZWxldGUnLCBbZnVsbFBhdGhdKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBkaXJlY3RvcnkgKG5vdCByZWN1cnNpdmUpXG4gICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgcmVhZGRpciBvcGVyYXRpb25cbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZWFkZGlyIGRpcmVjdG9yeSBsaXN0aW5nIHJlc3VsdFxuICAgKi9cbiAgYXN5bmMgcmVhZGRpcihvcHRpb25zKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aChvcHRpb25zLmRpcmVjdG9yeSwgb3B0aW9ucy5wYXRoKTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aF0pO1xuICAgIGlmIChvcHRpb25zLnBhdGggIT09ICcnICYmIGVudHJ5ID09PSB1bmRlZmluZWQpIHRocm93IEVycm9yKCdGb2xkZXIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXMuZGJJbmRleFJlcXVlc3QoJ2J5X2ZvbGRlcicsICdnZXRBbGxLZXlzJywgW0lEQktleVJhbmdlLm9ubHkocGF0aCldKTtcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIGUgPT4ge1xuICAgICAgbGV0IHN1YkVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtlXSk7XG4gICAgICBpZiAoc3ViRW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdWJFbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbZSArICcvJ10pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZS5zdWJzdHJpbmcocGF0aC5sZW5ndGggKyAxKSxcbiAgICAgICAgdHlwZTogc3ViRW50cnkudHlwZSxcbiAgICAgICAgc2l6ZTogc3ViRW50cnkuc2l6ZSxcbiAgICAgICAgY3RpbWU6IHN1YkVudHJ5LmN0aW1lLFxuICAgICAgICBtdGltZTogc3ViRW50cnkubXRpbWUsXG4gICAgICAgIHVyaTogc3ViRW50cnkucGF0aFxuICAgICAgfTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVzOiBmaWxlc1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBmdWxsIEZpbGUgVVJJIGZvciBhIHBhdGggYW5kIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgdGhlIHN0YXQgb3BlcmF0aW9uXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSBzdGF0IHJlc3VsdFxuICAgKi9cbiAgYXN5bmMgZ2V0VXJpKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgIGxldCBlbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aF0pO1xuICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aCArICcvJ10pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJpOiAoZW50cnkgPT09IG51bGwgfHwgZW50cnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVudHJ5LnBhdGgpIHx8IHBhdGhcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gZGF0YSBhYm91dCBhIGZpbGVcbiAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSBzdGF0IG9wZXJhdGlvblxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGZpbGUgc3RhdCByZXN1bHRcbiAgICovXG4gIGFzeW5jIHN0YXQob3B0aW9ucykge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgob3B0aW9ucy5kaXJlY3RvcnksIG9wdGlvbnMucGF0aCk7XG4gICAgbGV0IGVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoXSk7XG4gICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVudHJ5ID0gYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoICsgJy8nXSk7XG4gICAgfVxuICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBFcnJvcignRW50cnkgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGVudHJ5LnBhdGguc3Vic3RyaW5nKHBhdGgubGVuZ3RoICsgMSksXG4gICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgc2l6ZTogZW50cnkuc2l6ZSxcbiAgICAgIGN0aW1lOiBlbnRyeS5jdGltZSxcbiAgICAgIG10aW1lOiBlbnRyeS5tdGltZSxcbiAgICAgIHVyaTogZW50cnkucGF0aFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFJlbmFtZSBhIGZpbGUgb3IgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgcmVuYW1lIG9wZXJhdGlvblxuICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbmFtZSByZXN1bHRcbiAgICovXG4gIGFzeW5jIHJlbmFtZShvcHRpb25zKSB7XG4gICAgYXdhaXQgdGhpcy5fY29weShvcHRpb25zLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENvcHkgYSBmaWxlIG9yIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgdGhlIGNvcHkgb3BlcmF0aW9uXG4gICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29weSByZXN1bHRcbiAgICovXG4gIGFzeW5jIGNvcHkob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jb3B5KG9wdGlvbnMsIGZhbHNlKTtcbiAgfVxuICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHB1YmxpY1N0b3JhZ2U6ICdncmFudGVkJ1xuICAgIH07XG4gIH1cbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHVibGljU3RvcmFnZTogJ2dyYW50ZWQnXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBjYW4gcGVyZm9ybSBhIGNvcHkgb3IgYSByZW5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSByZW5hbWUgb3BlcmF0aW9uXG4gICAqIEBwYXJhbSBkb1JlbmFtZSB3aGV0aGVyIHRvIHBlcmZvcm0gYSByZW5hbWUgb3IgY29weSBvcGVyYXRpb25cbiAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXN1bHRcbiAgICovXG4gIGFzeW5jIF9jb3B5KG9wdGlvbnMsIGRvUmVuYW1lID0gZmFsc2UpIHtcbiAgICBsZXQge1xuICAgICAgdG9EaXJlY3RvcnlcbiAgICB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICB0byxcbiAgICAgIGZyb20sXG4gICAgICBkaXJlY3Rvcnk6IGZyb21EaXJlY3RvcnlcbiAgICB9ID0gb3B0aW9ucztcbiAgICBpZiAoIXRvIHx8ICFmcm9tKSB7XG4gICAgICB0aHJvdyBFcnJvcignQm90aCB0byBhbmQgZnJvbSBtdXN0IGJlIHByb3ZpZGVkJyk7XG4gICAgfVxuICAgIC8vIElmIG5vIFwidG9cIiBkaXJlY3RvcnkgaXMgcHJvdmlkZWQsIHVzZSB0aGUgXCJmcm9tXCIgZGlyZWN0b3J5XG4gICAgaWYgKCF0b0RpcmVjdG9yeSkge1xuICAgICAgdG9EaXJlY3RvcnkgPSBmcm9tRGlyZWN0b3J5O1xuICAgIH1cbiAgICBjb25zdCBmcm9tUGF0aCA9IHRoaXMuZ2V0UGF0aChmcm9tRGlyZWN0b3J5LCBmcm9tKTtcbiAgICBjb25zdCB0b1BhdGggPSB0aGlzLmdldFBhdGgodG9EaXJlY3RvcnksIHRvKTtcbiAgICAvLyBUZXN0IHRoYXQgdGhlIFwidG9cIiBhbmQgXCJmcm9tXCIgbG9jYXRpb25zIGFyZSBkaWZmZXJlbnRcbiAgICBpZiAoZnJvbVBhdGggPT09IHRvUGF0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJpOiB0b1BhdGhcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc1BhdGhQYXJlbnQoZnJvbVBhdGgsIHRvUGF0aCkpIHtcbiAgICAgIHRocm93IEVycm9yKCdUbyBwYXRoIGNhbm5vdCBjb250YWluIHRoZSBmcm9tIHBhdGgnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhlIHN0YXRlIG9mIHRoZSBcInRvXCIgbG9jYXRpb25cbiAgICBsZXQgdG9PYmo7XG4gICAgdHJ5IHtcbiAgICAgIHRvT2JqID0gYXdhaXQgdGhpcy5zdGF0KHtcbiAgICAgICAgcGF0aDogdG8sXG4gICAgICAgIGRpcmVjdG9yeTogdG9EaXJlY3RvcnlcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRvIGxvY2F0aW9uIGRvZXMgbm90IGV4aXN0LCBlbnN1cmUgdGhlIGRpcmVjdG9yeSBjb250YWluaW5nIFwidG9cIiBsb2NhdGlvbiBleGlzdHMgYW5kIGlzIGEgZGlyZWN0b3J5XG4gICAgICBjb25zdCB0b1BhdGhDb21wb25lbnRzID0gdG8uc3BsaXQoJy8nKTtcbiAgICAgIHRvUGF0aENvbXBvbmVudHMucG9wKCk7XG4gICAgICBjb25zdCB0b1BhdGggPSB0b1BhdGhDb21wb25lbnRzLmpvaW4oJy8nKTtcbiAgICAgIC8vIENoZWNrIHRoZSBjb250YWluaW5nIGRpcmVjdG9yeSBvZiB0aGUgXCJ0b1wiIGxvY2F0aW9uIGV4aXN0c1xuICAgICAgaWYgKHRvUGF0aENvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0b1BhcmVudERpcmVjdG9yeSA9IGF3YWl0IHRoaXMuc3RhdCh7XG4gICAgICAgICAgcGF0aDogdG9QYXRoLFxuICAgICAgICAgIGRpcmVjdG9yeTogdG9EaXJlY3RvcnlcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0b1BhcmVudERpcmVjdG9yeS50eXBlICE9PSAnZGlyZWN0b3J5Jykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyZW50IGRpcmVjdG9yeSBvZiB0aGUgdG8gcGF0aCBpcyBhIGZpbGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBDYW5ub3Qgb3ZlcndyaXRlIGEgZGlyZWN0b3J5XG4gICAgaWYgKHRvT2JqICYmIHRvT2JqLnR5cGUgPT09ICdkaXJlY3RvcnknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVyd3JpdGUgYSBkaXJlY3Rvcnkgd2l0aCBhIGZpbGUnKTtcbiAgICB9XG4gICAgLy8gRW5zdXJlIHRoZSBcImZyb21cIiBvYmplY3QgZXhpc3RzXG4gICAgY29uc3QgZnJvbU9iaiA9IGF3YWl0IHRoaXMuc3RhdCh7XG4gICAgICBwYXRoOiBmcm9tLFxuICAgICAgZGlyZWN0b3J5OiBmcm9tRGlyZWN0b3J5XG4gICAgfSk7XG4gICAgLy8gU2V0IHRoZSBtdGltZS9jdGltZSBvZiB0aGUgc3VwcGxpZWQgcGF0aFxuICAgIGNvbnN0IHVwZGF0ZVRpbWUgPSBhc3luYyAocGF0aCwgY3RpbWUsIG10aW1lKSA9PiB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IHRoaXMuZ2V0UGF0aCh0b0RpcmVjdG9yeSwgcGF0aCk7XG4gICAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbZnVsbFBhdGhdKTtcbiAgICAgIGVudHJ5LmN0aW1lID0gY3RpbWU7XG4gICAgICBlbnRyeS5tdGltZSA9IG10aW1lO1xuICAgICAgYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ3B1dCcsIFtlbnRyeV0pO1xuICAgIH07XG4gICAgY29uc3QgY3RpbWUgPSBmcm9tT2JqLmN0aW1lID8gZnJvbU9iai5jdGltZSA6IERhdGUubm93KCk7XG4gICAgc3dpdGNoIChmcm9tT2JqLnR5cGUpIHtcbiAgICAgIC8vIFRoZSBcImZyb21cIiBvYmplY3QgaXMgYSBmaWxlXG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAge1xuICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGVcbiAgICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5yZWFkRmlsZSh7XG4gICAgICAgICAgICBwYXRoOiBmcm9tLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBmcm9tRGlyZWN0b3J5XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gT3B0aW9uYWxseSByZW1vdmUgdGhlIGZpbGVcbiAgICAgICAgICBpZiAoZG9SZW5hbWUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlRmlsZSh7XG4gICAgICAgICAgICAgIHBhdGg6IGZyb20sXG4gICAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBlbmNvZGluZztcbiAgICAgICAgICBpZiAoIShmaWxlLmRhdGEgaW5zdGFuY2VvZiBCbG9iKSAmJiAhdGhpcy5pc0Jhc2U2NFN0cmluZyhmaWxlLmRhdGEpKSB7XG4gICAgICAgICAgICBlbmNvZGluZyA9IEVuY29kaW5nLlVURjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdyaXRlIHRoZSBmaWxlIHRvIHRoZSBuZXcgbG9jYXRpb25cbiAgICAgICAgICBjb25zdCB3cml0ZVJlc3VsdCA9IGF3YWl0IHRoaXMud3JpdGVGaWxlKHtcbiAgICAgICAgICAgIHBhdGg6IHRvLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiB0b0RpcmVjdG9yeSxcbiAgICAgICAgICAgIGRhdGE6IGZpbGUuZGF0YSxcbiAgICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIENvcHkgdGhlIG10aW1lL2N0aW1lIG9mIGEgcmVuYW1lZCBmaWxlXG4gICAgICAgICAgaWYgKGRvUmVuYW1lKSB7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVUaW1lKHRvLCBjdGltZSwgZnJvbU9iai5tdGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlc29sdmUgcHJvbWlzZVxuICAgICAgICAgIHJldHVybiB3cml0ZVJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnZGlyZWN0b3J5JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmICh0b09iaikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Nhbm5vdCBtb3ZlIGEgZGlyZWN0b3J5IG92ZXIgYW4gZXhpc3Rpbmcgb2JqZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRvIGRpcmVjdG9yeVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5ta2Rpcih7XG4gICAgICAgICAgICAgIHBhdGg6IHRvLFxuICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRvRGlyZWN0b3J5LFxuICAgICAgICAgICAgICByZWN1cnNpdmU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvcHkgdGhlIG10aW1lL2N0aW1lIG9mIGEgcmVuYW1lZCBkaXJlY3RvcnlcbiAgICAgICAgICAgIGlmIChkb1JlbmFtZSkge1xuICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVUaW1lKHRvLCBjdGltZSwgZnJvbU9iai5tdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgY29udGVudHMgb2YgdGhlIGZyb20gbG9jYXRpb25cbiAgICAgICAgICBjb25zdCBjb250ZW50cyA9IChhd2FpdCB0aGlzLnJlYWRkaXIoe1xuICAgICAgICAgICAgcGF0aDogZnJvbSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeVxuICAgICAgICAgIH0pKS5maWxlcztcbiAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVuYW1lIG9mIGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAvLyBNb3ZlIGl0ZW0gZnJvbSB0aGUgZnJvbSBkaXJlY3RvcnkgdG8gdGhlIHRvIGRpcmVjdG9yeVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fY29weSh7XG4gICAgICAgICAgICAgIGZyb206IGAke2Zyb219LyR7ZmlsZW5hbWUubmFtZX1gLFxuICAgICAgICAgICAgICB0bzogYCR7dG99LyR7ZmlsZW5hbWUubmFtZX1gLFxuICAgICAgICAgICAgICBkaXJlY3Rvcnk6IGZyb21EaXJlY3RvcnksXG4gICAgICAgICAgICAgIHRvRGlyZWN0b3J5XG4gICAgICAgICAgICB9LCBkb1JlbmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcmVtb3ZlIHRoZSBvcmlnaW5hbCBmcm9tIGRpcmVjdG9yeVxuICAgICAgICAgIGlmIChkb1JlbmFtZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ybWRpcih7XG4gICAgICAgICAgICAgIHBhdGg6IGZyb20sXG4gICAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmk6IHRvUGF0aFxuICAgIH07XG4gIH1cbiAgaXNCYXNlNjRTdHJpbmcoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBidG9hKGF0b2Ioc3RyKSkgPT0gc3RyO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuRmlsZXN5c3RlbVdlYi5fZGVidWcgPSB0cnVlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTLFFBQVEsTUFBTTtBQUNyQixRQUFNLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxPQUFPLFVBQVEsU0FBUyxHQUFHO0FBQ3pELFFBQU0sV0FBVyxDQUFDO0FBQ2xCLFFBQU0sUUFBUSxVQUFRO0FBQ3BCLFFBQUksU0FBUyxRQUFRLFNBQVMsU0FBUyxLQUFLLFNBQVMsU0FBUyxTQUFTLENBQUMsTUFBTSxNQUFNO0FBQ2xGLGVBQVMsSUFBSTtBQUFBLElBQ2YsT0FBTztBQUNMLGVBQVMsS0FBSyxJQUFJO0FBQUEsSUFDcEI7QUFBQSxFQUNGLENBQUM7QUFDRCxTQUFPLFNBQVMsS0FBSyxHQUFHO0FBQzFCO0FBQ0EsU0FBUyxhQUFhLFFBQVEsVUFBVTtBQUN0QyxXQUFTLFFBQVEsTUFBTTtBQUN2QixhQUFXLFFBQVEsUUFBUTtBQUMzQixRQUFNLFNBQVMsT0FBTyxNQUFNLEdBQUc7QUFDL0IsUUFBTSxTQUFTLFNBQVMsTUFB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QUcsSUFBSSxJQUFJLFNBQVMsSUFBSTtBQUFBLGNBQzlCLElBQUksR0FBRyxFQUFFLElBQUksU0FBUyxJQUFJO0FBQUEsY0FDMUIsV0FBVztBQUFBLGNBQ1g7QUFBQSxZQUNGLEdBQUcsUUFBUTtBQUFBLFVBQ2I7QUFFQSxjQUFJLFVBQVU7QUFDWixrQkFBTSxLQUFLLE1BQU07QUFBQSxjQUNmLE1BQU07QUFBQSxjQUNOLFdBQVc7QUFBQSxZQUNiLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQUFBLE1BQ0o7QUFDQSxhQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ0EsZUFBZSxLQUFLO0FBQ2xCLFFBQUk7QUFDRixhQUFPLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSztBQUFBLElBQzVCLFNBQVMsS0FBSztBQUNaLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGO0FBQ0EsY0FBYyxTQUFTOyIsIm5hbWVzIjpbInJlc29sdmUiLCJlbnRyeSIsInRvUGF0aCIsImN0aW1lIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
