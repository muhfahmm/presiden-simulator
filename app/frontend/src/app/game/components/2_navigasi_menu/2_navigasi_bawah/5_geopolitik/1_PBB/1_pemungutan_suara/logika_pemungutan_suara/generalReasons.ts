
export interface AlasanVote {
  alasan: string;
  detail: string;
}

export const generalReasons = {
  SETUJU: [
    { alasan: "Stabilitas Global", detail: "Demi menjaga tatanan dunia yang damai dan berdasarkan aturan." },
    { alasan: "Solidaritas Aliansi", detail: "Mendukung rekan koalisi dalam upaya menjaga keamanan bersama." },
    { alasan: "Norma Internasional", detail: "Menegakkan standar perilaku negara yang beradab di panggung dunia." }
  ],
  TOLAK: [
    { alasan: "Prinsip Non-Blok", detail: "Menolak polarisasi dunia dan dominasi kekuatan tertentu." },
    { alasan: "Prioritas Domestik", detail: "Fokus pada isu internal dan menghindari keterlibatan dalam konflik jauh." },
    { alasan: "Pendekatan Damai", detail: "Menilai ada cara yang lebih baik daripada tekanan internasional." }
  ],
  ABSTAIN: [
    { alasan: "Hati-Hati", detail: "Menghindari risiko diplomatik yang tidak perlu di tengah ketidakpastian global." },
    { alasan: "Prosedur Formal", detail: "Menilai ada kecacatan prosedur dalam pengajuan resolusi ini." }
  ]
};
