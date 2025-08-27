'use client'

export function downloadPDF() {
    const pdfPath = '/pdf/Tutorial_ativar_Bridge.pdf';

    const anchor = document.createElement('a');
    anchor.href = pdfPath;
    anchor.download = 'Tutorial_Bridge.pdf';

    anchor.click();
}