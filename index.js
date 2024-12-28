function lottery(applicants) {
  // İlk 5 kişiyi seç
  let selected = applicants.slice(0, 5);

  // Her 10. kişiyi seç (10., 20., 30., 40., 50.)
  for (let i = 9; i < applicants.length; i += 10) {
    if (selected.length < 10) {
      selected.push(applicants[i]);
    }
  }

  // Rastgele bir kişiyi seç, ancak daha önce seçilmemiş olmalı
  const remainingApplicants = applicants.filter(
    (applicant) => !selected.includes(applicant)
  );
  const randomSelection =
    remainingApplicants[Math.floor(Math.random() * remainingApplicants.length)];
  selected.push(randomSelection);

  return selected;
}

// Test için örnek bir başvuru listesi
const applicants = Array.from({ length: 100 }, (_, i) => `Applicant ${i + 1}`);

// Fonksiyonu çağır ve sonucu kontrol et
const result = lottery(applicants);
console.log(result);
module.exports = lottery;
