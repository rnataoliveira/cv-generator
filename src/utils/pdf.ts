import html2pdf from 'html2pdf.js';

export async function exportElementAsPDF(element: HTMLElement, filename = 'cv.pdf') {
  // Create a cloned node so we can set exact A4 dimensions and remove visual
  // artefacts (shadows/margins) without affecting the on-screen preview.
  const clone = element.cloneNode(true) as HTMLElement;

  // Apply exact A4 sizing and reset margins/padding to avoid tiny overflow.
  clone.style.width = '210mm';
  clone.style.minHeight = '297mm';
  clone.style.boxSizing = 'border-box';
  clone.style.margin = '0';
  clone.style.padding = '0';
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  clone.style.background = 'white';

  // Create an off-document container to render the cloned sheet
  const wrapper = document.createElement('div');
  wrapper.style.width = '210mm';
  wrapper.style.height = '297mm';
  wrapper.style.display = 'block';
  wrapper.style.margin = '0';
  wrapper.style.padding = '0';
  wrapper.style.background = 'white';
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  const opt = {
    margin: 0,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false, width: 210 * 3.7795275591 },
    pagebreak: { mode: ['css', 'legacy'] },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  } as any;

  try {
    // Await the html2pdf save promise
    await (html2pdf().set(opt).from(wrapper).save() as unknown as Promise<void>);
  } finally {
    // Clean up the cloned DOM
    document.body.removeChild(wrapper);
  }
}
