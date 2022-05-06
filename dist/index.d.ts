import { DNIinfo, RUCinfo } from './infoTypes';
/**
 * Gets RUC data from RUC
 * @param ruc
 * @returns RUCinfo
 */
export declare function getRucData(ruc: string): Promise<RUCinfo>;
/**
 * Gets Dni data from Dni
 * @param dni
 * @returns DNIinfo
 */
export declare function getDniData(dni: string): Promise<DNIinfo>;
