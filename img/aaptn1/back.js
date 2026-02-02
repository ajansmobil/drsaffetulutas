try {
    if (json.desing) {
        // Temel alanları işle
        // ❌ KALDIRILAN - Webmakerrender.js otomatik yapar: {{number}} → json.desing.number

        // Çoklu dil desteği olan alanları işle
        const multiLangFields = [
            'name',
            'status',
            'message',
            'time',
            'button_text',
        ];
        for (const field of multiLangFields) {
            if (json.desing[field]) {
                const value =
                    json.desing[field][json.lang] ||
                    json.desing[field].tr ||
                    '';
                html = html.replace(new RegExp(`{{${field}}}`, 'g'), value);
            }
        }

        // Resim alanlarını işle
        // ❌ KALDIRILAN - Webmakerrender.js otomatik yapar: {{avatar}} → json.desing.avatar
    }
} catch (err) {
    console.error('whatsapp-6 back.js hatası:', err);
}

// Her zaman varsayılan olarak bu satır bulunsun
html = html;
