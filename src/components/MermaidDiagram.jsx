import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_light};
  border-radius: 14px;
  padding: 22px;
  overflow-x: auto;
  display: flex;
  justify-content: center;

  svg {
    max-width: 100%;
    height: auto;
  }
`;

const Loading = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  padding: 40px 0;
`;

let mermaidPromise = null;
const loadMermaid = () => {
  if (mermaidPromise) return mermaidPromise;
  mermaidPromise = new Promise((resolve, reject) => {
    if (window.mermaid) return resolve(window.mermaid);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js";
    script.async = true;
    script.onload = () => {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#1C1E27",
          primaryTextColor: "#F2F3F4",
          primaryBorderColor: "#854CE6",
          lineColor: "#854CE6",
          secondaryColor: "#171721",
          tertiaryColor: "#090917",
          background: "#1C1E27",
          fontSize: "14px",
        },
        flowchart: { htmlLabels: true, curve: "basis" },
      });
      resolve(window.mermaid);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return mermaidPromise;
};

let counter = 0;

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadMermaid()
      .then(async (mermaid) => {
        if (cancelled || !ref.current) return;
        try {
          const id = `mermaid-${++counter}`;
          const { svg } = await mermaid.render(id, chart);
          if (!cancelled && ref.current) {
            ref.current.innerHTML = svg;
            setReady(true);
          }
        } catch (e) {
          setError(e.message || "Failed to render diagram");
        }
      })
      .catch(() => setError("Could not load diagram engine"));
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) return <Frame><Loading>Diagram unavailable: {error}</Loading></Frame>;
  return (
    <Frame>
      {!ready && <Loading>Rendering architecture diagram…</Loading>}
      <div ref={ref} />
    </Frame>
  );
};

export default MermaidDiagram;
