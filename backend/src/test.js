// const Eueno = require('@eueno/lib-node');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// async function example() {
//   const eueno = new Eueno({
//     endpoint: 'https://v2-developers.eueno.io',
//   });
//   let data = await eueno.readFolder('./auth');
//   await eueno.uploadFolder(data.input, {
//       projectKey: '748897d952605587212b5002baf90765c14435375a00ad8a21143c172646f8ed',
//       key: {
//         walletPublicKey: '0403c1b75ad5e36e16956733b4a77b4c36bc85eb384bd698eef390e54bd7d66ac4536c1241497acc9953f52042c28a3402304686ed394becd23128f4d2040aa9cf',
//         fileEncryptionKey: 'oN74zgEtc8GdVAaqwQVaIACvJhPvJYK-O1Ua7cW8rOk'
//       },
//   }, {
//     pathLists: data.pathLists,
//     projectId: "283",
//   });
// }
// example();
var Eueno = require('@eueno/lib-node');
var fs = require('fs');
function example() {
    return __awaiter(this, void 0, void 0, function () {
        var eueno, file, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eueno = new Eueno({
                        endpoint: 'https://v2-developers.eueno.io'
                    });
                    return [4 /*yield*/, fs.readFileSync('/home/dirii/nestjs-api-tutorial/prisma/migrations/20230512191445_fleur/migration.sql')];
                case 1:
                    file = _a.sent();
                    return [4 /*yield*/, eueno.upload(file, {
                            projectKey: '748897d952605587212b5002baf90765c14435375a00ad8a21143c172646f8ed',
                            key: {
                                walletPublicKey: '0403c1b75ad5e36e16956733b4a77b4c36bc85eb384bd698eef390e54bd7d66ac4536c1241497acc9953f52042c28a3402304686ed394becd23128f4d2040aa9cf',
                                fileEncryptionKey: 'oN74zgEtc8GdVAaqwQVaIACvJhPvJYK-O1Ua7cW8rOk'
                            }
                        }, {
                            projectId: 283,
                            filename: 'db.sql',
                            contentLength: 999999,
                            contentType: 'text',
                            method: 'ENCRYPT',
                            keepPath: false
                        })];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
example();
// const Eueno = require('@eueno/lib-node');
// async function example() {
//   const eueno = new Eueno({
//     endpoint: 'https://v2-developers.eueno.io',
//   });
//   const data = await eueno.getObjectLists(
//     {
//       projectId: 283,
//       projectKey: "748897d952605587212b5002baf90765c14435375a00ad8a21143c172646f8ed",
//     },
//   );
//   console.log(`list file`,data.data.file);
// }
// example();
