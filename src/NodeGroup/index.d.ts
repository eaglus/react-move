import * as React from 'react'
import { HashMap, GetInterpolator } from '..'

export interface MergedNodesData {
  index: number;// index in merged data (previous data merged with new)
  data: Array<any>; //merged data (previous data merged with new)
}

export interface INodeGroupProps {
  data: Array<any>;
  keyAccessor: (data: any, index: number) => string | number;
  interpolation?: GetInterpolator;
  start: (data: any, index: number, merged: MergedNodesData) => HashMap;
  enter?: (data: any, index: number, merged: MergedNodesData) => (HashMap | Array<HashMap>);
  update?: (data: any, index: number, merged: MergedNodesData) => (HashMap | Array<HashMap>);
  leave?: (data: any, index: number, merged: MergedNodesData) => (HashMap | Array<HashMap>);
  children: (nodes: Array<any>) => React.ReactElement<any>;
}

declare class INodeGroup extends React.Component<INodeGroupProps> { }

export default INodeGroup
