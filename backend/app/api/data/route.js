// backend/app/api/data/route.js

export async function POST(request) {
  try {
    const receivedData = await request.json();

    // طباعة البيانات في سجلات الخادم (هذا هو هدفنا الرئيسي)
    console.log("Leak received:", receivedData);

  } catch (error) {
    // حتى لو فشل الطلب، لا نرسل ردًا واضحًا
    console.error("Error processing leak:", error);
  }

  // --- الجزء المهم ---
  // نرسل ردًا فارغًا تمامًا مع حالة "204 No Content"
  // هذا يخبر المرسل "لقد استلمت طلبك وفهمته، ولكن ليس لدي ما أقوله"
  // وهو المعيار الأمثل لهذا السيناريو.
  return new Response(null, { status: 204 });
}
