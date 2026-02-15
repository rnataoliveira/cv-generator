import { vi } from 'vitest';
import html2pdf from 'html2pdf.js';
import { exportElementAsPDF } from '../utils/pdf';

vi.mock('html2pdf.js');

test('exportElementAsPDF calls html2pdf chain', async () => {
  const save = vi.fn(() => Promise.resolve());
  const from = vi.fn(() => ({ save }));
  const set = vi.fn(() => ({ from }));
  (html2pdf as unknown as jest.Mock).mockImplementation(() => ({ set }));

  const el = document.createElement('div');
  await exportElementAsPDF(el, 'test.pdf');

  expect(set).toHaveBeenCalled();
  expect(from).toHaveBeenCalled();
  expect(save).toHaveBeenCalled();
});
