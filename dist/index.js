"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDniData = exports.getRucData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const url = "https://api.apis.net.pe/v1/";
/**
 * Gets RUC data
 * @param ruc
 * @returns RUCinfo
 */
function getRucData(ruc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield (0, node_fetch_1.default)(url + 'ruc?numero=' + ruc);
            return yield response.json();
        }
        catch (error) {
            throw Error("Error getting RUC data.");
        }
    });
}
exports.getRucData = getRucData;
function getDniData(ruc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield (0, node_fetch_1.default)(url + 'dni?numero=' + ruc);
            return yield response.json();
        }
        catch (error) {
            throw Error("Error getting DNI data.");
        }
    });
}
exports.getDniData = getDniData;
