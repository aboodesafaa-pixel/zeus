// backend/app/api/data/route.js

// هذه الدالة ستتعامل مع طلبات POST
export async function POST(request) {
  try {
    // قراءة البيانات القادمة مع الطلب بصيغة JSON
    const receivedData = await request.json();

    // طباعة البيانات في سجلات الخادم للمراقبة
    console.log("تم استقبال البيانات بنجاح:", receivedData);

    // إرجاع رد ناجح لتأكيد الاستلام
    return new Response(JSON.stringify({ 
      message: "Data received successfully", 
      data: receivedData 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // التعامل مع الأخطاء
    console.error("حدث خطأ:", error);
    return new Response(JSON.stringify({ message: "Invalid request body" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
