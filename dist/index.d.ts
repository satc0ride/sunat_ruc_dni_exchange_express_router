import { DNIinfo, RUCinfo } from './infoTypes';
/**
 * Gets RUC data
 * @param ruc
 * @returns RUCinfo
 */
export declare function getRucData(ruc: string): Promise<RUCinfo>;
export declare function getDniData(ruc: string): Promise<DNIinfo>;
