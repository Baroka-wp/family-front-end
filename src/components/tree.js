/* eslint-disable react/prop-types */
import React from 'react';
import './tree.css';

const TreeNode = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="TreeNode">
      <div className="TreeNode-label">
        {node.name}
      </div>
      {hasChildren && (
        <div className="TreeNode-children">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({ data }) => (
  <div className="Tree">
    {data.map((node) => (
      <TreeNode key={node.id} node={node} />
    ))}
  </div>
);

export default Tree;
