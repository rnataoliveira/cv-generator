import html2pdf from 'html2pdf.js';

export async function exportElementAsPDF(element: HTMLElement, filename = 'cv.pdf') {
  const opt = {
    // Use zero PDF margins so a cv-sized element (210mm x 297mm) won't overflow
    margin: 0,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    // keep a high canvas scale for quality; html2pdf/jsPDF will render to A4
    html2canvas: { scale: 2, useCORS: true, logging: false },
    // ensure page-breaks respect CSS where provided
    pagebreak: { mode: ['css', 'legacy'] },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  } as any;

  // html2pdf() returns a chainable object; calling save() triggers download.
  // wrap in Promise via `then` to await completion.
  await (html2pdf().set(opt).from(element).save() as unknown as Promise<void>);
}
