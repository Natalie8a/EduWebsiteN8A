import React from "react";
import mermaid from "mermaid";
// [MermaidChart: 08e4fa19-8f6e-42f4-92bd-da92b39a1ec7]

const Flowchart = () => {
  const chartDefinition = `
        graph TD
        A[Start] --> B{Is it?}
        B -- Yes --> C[OK]
        C --> D[Stop]
        B -- No ----> E[Not OK]
        E --> D
      `;

  return (
    <div>
      <h1>Mermaid Diagram Example</h1>
      <mermaid chart={chartDefinition} id="fc-diagram" />
    </div>
  );
};

export default Flowchart;
