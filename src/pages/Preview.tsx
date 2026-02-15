import React from 'react';
import TemplateA from '../components/TemplateA';
import TemplateB from '../components/TemplateB';
import { CVData } from '../types';

type Props = {
  data: CVData;
  template: string;
  labels: any;
};

const Preview = React.forwardRef<HTMLDivElement, Props>(({ data, template, labels }, ref) => {
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="cv-sheet">
      {template === 'A' ? <TemplateA data={data} labels={labels} /> : <TemplateB data={data} labels={labels} />}
    </div>
  );
});

export default Preview;
