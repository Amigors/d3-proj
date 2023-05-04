import React, { useState, useEffect } from 'react';
import ReactFlow, {ReactFlowProvider } from 'reactflow';
import { hierarchy, tree } from 'd3-hierarchy';

const initialElements = [
  { id: 'node1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: 'node2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'node3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: 'node4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
  { id: 'node5', data: { label: 'Node 5' }, position: { x: 250, y: 300 } },
  { id: 'node6', type: 'output', data: { label: 'Node 6' }, position: { x: 100, y: 400 } }
];

const App = () => {
  const [nodes, setNodes] = useState(initialElements);

  useEffect(() => {
    return () => {
      const newElements = graph.descendants().map((node) => {
        return {
          id: node.data.id,
          data: { label: node.data.label },
          position: { x: node.x, y: node.y }
        };
      });
    
      setNodes(newElements);
    }
  }, [nodes])
  
  const graph = hierarchy(initialElements[0], (d) => d.children);

  tree().size([500, 500])(graph);

  

  return (
    <div style={{height: '100vh', width: '100vw'}}>
        <ReactFlow
          nodes={nodes}
        />
    </div>
  );
};

export default App