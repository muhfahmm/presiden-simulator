"use client"

/**
 * Menghitung bonus harapan hidup dari cakupan fasilitas kesehatan
 */
export const calculateHealthCoverageBonus = (
    rsBesarCount: number, 
    rsKecilCount: number, 
    diagnostikCount: number, 
    popInMillions: number,
    idealRatios: any
) => {
    const rsBesarCov = Math.min(1.2, rsBesarCount / (popInMillions * idealRatios.RS_BESAR));
    const rsKecilCov = Math.min(1.2, rsKecilCount / (popInMillions * idealRatios.RS_KECIL));
    const diagCov = Math.min(1.2, diagnostikCount / (popInMillions * idealRatios.RS_DIAGNOSTIK));
    
    return (rsBesarCov * 7) + (rsKecilCov * 5) + (diagCov * 3);
};
