
import { getRelation, areInSameOrg } from "./votingLogic";

export interface VotingReasonParams {
  voter: string;
  proposer: string;
  target: string;
  type: 'supporters' | 'opponents' | 'abstainers';
}

export const getVotingReason = ({ voter, proposer, target, type }: VotingReasonParams): string => {
  const relWithProposer = getRelation(voter, proposer);
  const relWithTarget = getRelation(voter, target);
  const sameOrgWithProposer = areInSameOrg(voter, proposer);
  const sameOrgWithTarget = areInSameOrg(voter, target);

  if (type === 'supporters') {
    if (sameOrgWithProposer) return `Berada dalam aliansi yang sama dengan ${proposer} dan setuju dengan visi strategisnya.`;
    if (relWithProposer > 70) return `Memiliki hubungan diplomatik yang sangat kuat dengan ${proposer}.`;
    if (relWithTarget < 30) return `Mendukung resolusi karena memiliki rivalitas sejarah dengan ${target}.`;
    
    const reasons = [
      `Melihat tindakan ${target} sebagai ancaman terhadap stabilitas kawasan.`,
      `Menilai bahwa sanksi ini diperlukan untuk menegakkan hukum internasional.`,
      `Memiliki kepentingan ekonomi yang selaras dengan keberhasilan resolusi ini.`
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
  }

  if (type === 'opponents') {
    if (sameOrgWithTarget) return `Berada dalam blok aliansi yang sama dengan ${target}.`;
    if (relWithTarget > 70) return `Memiliki hubungan ekonomi dan perdagangan yang signifikan dengan ${target}.`;
    if (relWithProposer < 30) return `Menganggap resolusi dari ${proposer} bermotif politik dan tidak berdasar kuat.`;
    
    const reasons = [
      `Menentang intervensi eksternal terhadap kedaulatan ${target}.`,
      `Khawatir bahwa sanksi ini akan merugikan rakyat sipil di ${target}.`,
      `Menilai bahwa resolusi ini hanya akan memperkeruh suasana geopolitik.`
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
  }

  // Abstainers
  if (relWithProposer > 60 && relWithTarget > 60) {
    return `Memilih posisi netral untuk menjaga hubungan baik dengan ${proposer} dan ${target} (Menghindari adu domba).`;
  }

  const reasons = [
    `Tidak ingin terlibat dalam ketegangan geopolitik antar kekuatan besar.`,
    `Memerlukan waktu lebih untuk melakukan peninjauan mendalam terhadap dampak resolusi.`,
    `Menganggap masalah ini sebagai urusan internal yang harus diselesaikan lewat dialog.`,
    `Menilai bahwa data yang diajukan ${proposer} belum cukup kuat untuk mengambil keputusan.`,
    `Menjaga prinsip politik luar negeri yang bebas dan aktif.`
  ];
  return reasons[Math.floor(Math.random() * reasons.length)];
};
