import * as React from 'react';
import * as ReactDOM from 'react-dom';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const ConnectedApp = () => <>Hello react!</>;

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
