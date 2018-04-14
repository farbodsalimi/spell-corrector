var ffi = require("ffi");
var ref = require("ref");

var platform = process.platform;
var spell_lib = null;

if (platform === "win32") {
  spell_lib = "./build/Release/spell.dll";
} else if (platform === "linux") {
  spell_lib = "./build/Release/spell.so";
} else if (platform === "darwin") {
  spell_lib = "./build/Release/spell.dylib";
} else {
  throw new Error("unsupported platform for spell_lib");
}

var spell = ffi.Library(spell_lib, {
  api: [ref.types.CString, [ref.types.CString]]
});

module.exports = spell;
