"use client"

/**
 * Menghitung bonus keamanan nasional dari jangkauan polisi dan hukum
 */
export const calculateSecurityBonus = (
    policeCount: number,
    legalCount: number,
    popInMillions: number,
    idealRatios: any
) => {
    const policeCov = Math.min(1.2, policeCount / (popInMillions * idealRatios.KANTOR_POLISI));
    const lawCov = Math.min(1.2, legalCount / (popInMillions * (idealRatios.KEJAKSAAN + idealRatios.BANTUAN_HUKUM)));
    
    return (policeCov * 20) + (lawCov * 10);
};
